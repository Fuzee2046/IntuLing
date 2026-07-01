from dataclasses import dataclass
from typing import Any

from intuling_api.core.config import settings


@dataclass(frozen=True)
class ChatModelInfo:
    provider: str
    model_name: str
    configured: bool
    client: Any | None = None


def get_chat_model() -> ChatModelInfo:
    provider = settings.ai_provider.lower()
    configured = bool(settings.ai_api_key)

    if not configured:
        return ChatModelInfo(
            provider=provider,
            model_name=settings.ai_model,
            configured=False,
        )

    if provider == "deepseek":
        from langchain_deepseek import ChatDeepSeek

        return ChatModelInfo(
            provider=provider,
            model_name=settings.ai_model,
            configured=True,
            client=ChatDeepSeek(
                model=settings.ai_model,
                api_key=settings.ai_api_key,
                api_base=settings.ai_base_url,
            ),
        )

    if provider == "openai":
        from langchain_openai import ChatOpenAI

        return ChatModelInfo(
            provider=provider,
            model_name=settings.ai_model,
            configured=True,
            client=ChatOpenAI(
                model=settings.ai_model,
                api_key=settings.ai_api_key,
                base_url=settings.ai_base_url,
            ),
        )

    raise ValueError(f"Unsupported AI provider: {settings.ai_provider}")
