"""add_annotated_photo_url

Revision ID: 4a902b0658e2
Revises: d6ab0d057544
Create Date: 2026-07-09 00:10:27.528894

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4a902b0658e2'
down_revision: Union[str, Sequence[str], None] = 'd6ab0d057544'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('reports', sa.Column('annotated_photo_url', sa.String(), nullable=True))


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('reports', 'annotated_photo_url')
