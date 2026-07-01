from pydantic import BaseModel


class AiProviderResponse(BaseModel):
    provider: str
    model: str
    configured: bool
