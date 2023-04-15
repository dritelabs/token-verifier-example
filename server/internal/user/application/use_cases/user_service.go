package usecases

import (
	"context"
	"fmt"

	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/repositories"
)

type NewUserServiceConfig struct {
	UserRepository repositories.UserRepository
}

type UserService struct {
	userRepository repositories.UserRepository
}

type CreateUserDTO struct{}

func NewUserService(c NewUserServiceConfig) *UserService {
	return &UserService{
		userRepository: c.UserRepository,
	}
}

func (u *UserService) CreateUser(ctx context.Context, dto CreateUserDTO) (*entities.User, error) {
	ent, err := entities.NewUser()
	if err != nil {
		return nil, fmt.Errorf("failed to create user %w", err)
	}

	return u.userRepository.Save(ctx, ent)
}
