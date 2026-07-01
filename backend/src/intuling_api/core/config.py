from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "IntuLing API"
    app_version: str = "0.1.0"
    debug: bool = True
    api_prefix: str = "/api/v1"

    database_url: str = "postgresql+asyncpg://postgres:postgres@127.0.0.1:5432/intuling_dev"
    sync_database_url: str = "postgresql+psycopg://postgres:postgres@127.0.0.1:5432/intuling_dev"

    cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:5173"])

    ai_provider: str = "deepseek"
    ai_model: str = "deepseek-v4-flash"
    ai_base_url: str | None = None
    ai_api_key: str | None = None
    langsmith_tracing: bool = False

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    @field_validator("cors_origins", mode="before")
    @classmethod
    def parse_cors_origins(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
