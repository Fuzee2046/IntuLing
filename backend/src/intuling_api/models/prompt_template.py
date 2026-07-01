from sqlalchemy import Boolean, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from intuling_api.db.base import Base, TimestampMixin, UuidPk


class PromptTemplate(TimestampMixin, Base):
    __tablename__ = "prompt_templates"
    __table_args__ = (UniqueConstraint("key", name="uq_prompt_templates_key"),)

    id: Mapped[UuidPk]
    key: Mapped[str] = mapped_column(nullable=False)
    name: Mapped[str] = mapped_column(nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    is_system: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    def __repr__(self) -> str:
        return f"PromptTemplate(id={self.id!s}, key={self.key!r})"
