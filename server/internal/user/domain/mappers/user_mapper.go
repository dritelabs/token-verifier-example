package mappers

import (
	"context"

	"github.com/dritelabs/accounts/internal/models"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
)

type UserMapper interface {
	ToDomain(ctx context.Context, u *models.User) *entities.User
	ToEntity(ctx context.Context, u *entities.User) *models.User
}
