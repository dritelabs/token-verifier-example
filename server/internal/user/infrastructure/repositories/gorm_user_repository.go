package repositories

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"strings"

	"github.com/dritelabs/accounts/internal/models"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/mappers"
	"github.com/dritelabs/accounts/internal/user/domain/repositories"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
)

type GORMUserRepositoryConfig struct {
	Mapper mappers.UserMapper
	Store  gorm.DB
}

type GORMUserRepository struct {
	*GORMUserRepositoryConfig
}

func NewGORMUserRepository(c *GORMUserRepositoryConfig) repositories.UserRepository {
	return &GORMUserRepository{
		GORMUserRepositoryConfig: c,
	}
}

func (r *GORMUserRepository) FindById(ctx context.Context, id string) (*entities.User, error) {
	u := r.Mapper.ToEntity(ctx, &entities.User{})

	if err := r.Store.Preload("Profile").First(&u, "id = ?", id).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.New("user not found")
		}

		return nil, fmt.Errorf("failed to fetch user %w", err)

	}

	return r.Mapper.ToDomain(ctx, u), nil
}

func (r *GORMUserRepository) FindAll(ctx context.Context) ([]*entities.User, error) {
	var users []models.User

	if err := r.Store.Limit(10).Preload("Profile").Find(&users).Error; err != nil {

		return nil, fmt.Errorf("failed to fetch user %w", err)
	}

	var res []*entities.User

	for _, u := range users {
		res = append(res, r.Mapper.ToDomain(ctx, &u))
	}

	return res, nil
}

func (r *GORMUserRepository) Save(ctx context.Context, u *entities.User) (*entities.User, error) {
	e := models.User{
		Email:    sql.NullString{Valid: true, String: req.GetEmail()},
		Password: hash,
		Profile: &models.Profile{
			GivenName:  sql.NullString{Valid: true, String: req.GetGivenName()},
			MiddleName: sql.NullString{Valid: true, String: req.GetMiddleName()},
		},
	}

	if err := r.Store.Create(&e).Error; err != nil {
		log.Error().Msgf("failed to create eser: %s", err)

		if strings.Contains(err.Error(), "unique constraint") {
			return nil, fmt.Errorf("%s is already taken", e.Email.String)
		}

		return nil, fmt.Errorf("failed to create user: %s", err)
	}

	return r.Mapper.ToDomain(ctx, e), nil
}

func (r *GORMUserRepository) Update(ctx context.Context, u *entities.User) (*entities.User, error) {
	e := r.Mapper.ToEntity(ctx, u)

	// updateProfileArg := &models.Profile{}
	// updateUserArg := &models.User{}

	return r.Mapper.ToDomain(ctx, e), nil
}
