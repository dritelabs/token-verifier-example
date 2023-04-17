package commands

import (
	"context"

	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/repositories"
)

type NewCreateUserHandlerConfig struct {
	UserRepository repositories.UserRepository
}

type CreateUserCommand struct {
	Email      string
	GivenName  string
	MiddleName string
	Password   string
}

type CreateUserHandler struct {
	userRepository repositories.UserRepository
}

func (h *CreateUserHandler) Handle(ctx context.Context, cmd CreateUserCommand) error {
	usr, err := entities.NewUser(&entities.NewUserConfig{})

	if err != nil {
		return err
	}

	h.userRepository.Save(ctx, usr)

	// for _, e := range usr.DomainEvents() {

	// }

	return nil
}

func NewCreateUserHandler(userRepository repositories.UserRepository) CreateUserHandler {
	return CreateUserHandler{
		userRepository,
	}
}
