package user

import (
	"github.com/dritelabs/accounts/internal/user/application/commands"
	"github.com/dritelabs/accounts/internal/user/infrastructure/mappers"
	"github.com/dritelabs/accounts/internal/user/infrastructure/repositories"
	"gorm.io/gorm"
)

type UserModuleConfig struct {
	Store gorm.DB
}

type UserModule struct {
	Commands commands.Commands
}

func NewUserModule(c *UserModuleConfig) *UserModule {
	userMapper := mappers.NewGORMUserMapper()

	userRepository := repositories.NewGORMUserRepository(&repositories.GORMUserRepositoryConfig{
		Mapper: userMapper,
		Store:  c.Store,
	})

	return &UserModule{
		Commands: commands.Commands{
			CreateUser: commands.NewCreateUserHandler(userRepository),
		},
	}
}
