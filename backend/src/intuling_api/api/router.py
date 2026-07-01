from fastapi import APIRouter

from intuling_api.api.routes import ai, health

api_router = APIRouter()
api_router.include_router(health.router, tags=["health"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
