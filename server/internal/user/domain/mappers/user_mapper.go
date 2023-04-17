package mappers

import (
	"context"

	"github.com/dritelabs/accounts/internal/user/domain/entities"
)

type UserMapper[M any] interface {
	ToDomain(ctx context.Context, u *M) *entities.User
	ToEntity(ctx context.Context, u *entities.User) *M
}
