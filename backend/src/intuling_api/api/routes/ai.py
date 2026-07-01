from fastapi import APIRouter

from intuling_api.ai.providers import get_chat_model
from intuling_api.schemas.ai import AiProviderResponse

router = APIRouter()


@router.get("/provider", response_model=AiProviderResponse)
def ai_provider() -> AiProviderResponse:
    model = get_chat_model()
    return AiProviderResponse(
        provider=model.provider,
        model=model.model_name,
        configured=model.configured,
    )
