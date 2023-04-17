package mappers

import (
	"context"

	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/mappers"
)

type ENTUserMapper struct{}

func (m *ENTUserMapper) ToDomain(ctx context.Context, u *ent.User) *entities.User {
	return &entities.User{}
}

func (m *ENTUserMapper) ToEntity(ctx context.Context, u *entities.User) *ent.User {
	return &ent.User{}
	// Email:    sql.NullString{Valid: true, String: req.GetEmail()},
	// Password: hash,
	// Profile: &models.Profile{
	// 	GivenName:  sql.NullString{Valid: true, String: req.GetGivenName()},
	// 	MiddleName: sql.NullString{Valid: true, String: req.GetMiddleName()},
	// },
	// }
}

// func (m *ENTUserMapper) ToDTO(u entities.User) *entities.User {
// 	return &entities.User{}
// }

func NewENTUserMapper() mappers.UserMapper[ent.User] {
	return &ENTUserMapper{}
}
