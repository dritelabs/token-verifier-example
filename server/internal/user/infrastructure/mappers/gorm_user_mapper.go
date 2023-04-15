package mappers

import (
	"context"

	"github.com/dritelabs/accounts/internal/models"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/mappers"
)

type GORMUserMapper struct{}

func (m *GORMUserMapper) ToDomain(ctx context.Context, u *models.User) *entities.User {
	return &entities.User{}
}

func (m *GORMUserMapper) ToEntity(ctx context.Context, u *entities.User) *models.User {
	return &models.User{}
	// Email:    sql.NullString{Valid: true, String: req.GetEmail()},
	// Password: hash,
	// Profile: &models.Profile{
	// 	GivenName:  sql.NullString{Valid: true, String: req.GetGivenName()},
	// 	MiddleName: sql.NullString{Valid: true, String: req.GetMiddleName()},
	// },
	// }
}

// func (m *GORMUserMapper) ToDTO(u entities.User) *entities.User {
// 	return &entities.User{}
// }

func NewGORMUserMapper() mappers.UserMapper {
	return &GORMUserMapper{}
}
