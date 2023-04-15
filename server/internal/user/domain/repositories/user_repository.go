package repositories

import (
	"context"

	"github.com/dritelabs/accounts/internal/user/domain/entities"
)

type UserRepository interface {
	FindById(ctx context.Context, id string) (*entities.User, error)
	FindAll(ctx context.Context) ([]*entities.User, error)
	Save(ctx context.Context, u *entities.User) (*entities.User, error)
	Update(ctx context.Context, u *entities.User) (*entities.User, error)
}
