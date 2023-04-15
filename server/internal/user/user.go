package user

import (
	usecases "github.com/dritelabs/accounts/internal/user/application/use_cases"
	"github.com/dritelabs/accounts/internal/user/infrastructure/mappers"
	"github.com/dritelabs/accounts/internal/user/infrastructure/repositories"
	"gorm.io/gorm"
)

type UserModuleConfig struct {
	Store gorm.DB
}

type UserModule struct {
	UseCases *usecases.UserService
}

func NewUserModule(c *UserModuleConfig) *UserModule {
	mapper := mappers.NewGORMUserMapper()

	repository := repositories.NewGORMUserRepository(&repositories.GORMUserRepositoryConfig{
		Mapper: mapper,
		Store:  c.Store,
	})

	service := usecases.NewUserService(usecases.NewUserServiceConfig{
		UserRepository: repository,
	})

	return &UserModule{
		UseCases: service,
	}
}
