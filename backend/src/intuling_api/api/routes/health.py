from fastapi import APIRouter
from sqlalchemy import text

from intuling_api.core.config import settings
from intuling_api.db.session import AsyncSessionLocal
from intuling_api.schemas.health import HealthResponse

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
async def health_check() -> HealthResponse:
    database_ok = False
    try:
        async with AsyncSessionLocal() as session:
            await session.execute(text("SELECT 1"))
        database_ok = True
    except Exception:
        database_ok = False

    return HealthResponse(
        status="ok" if database_ok else "degraded",
        app=settings.app_name,
        version=settings.app_version,
        database=database_ok,
    )
