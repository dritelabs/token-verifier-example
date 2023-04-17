package mappers

import (
	"context"

	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/profile"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
)

type ENTUserMapper struct{}

func (m *ENTUserMapper) ToDomain(ctx context.Context, u *ent.User) *entities.User {
	return &entities.User{}
}

func (m *ENTUserMapper) ToEntity(ctx context.Context, u *entities.User) *ent.User {
	var gender profile.Gender

	return &ent.User{
		ID:                       u.ID,
		DefaultShippingAddressID: "",
		DefaultBillingAddressID:  "",
		Email:                    u.Email.String(),
		EmailVerified:            u.EmailVerified,
		Password:                 u.Password.String(),
		PhoneNumber:              u.PhoneNumber.String(),
		PhoneNumberVerified:      u.PhoneNumberVerified,
		Username:                 u.Username.String(),
		Edges: ent.UserEdges{
			Profile: &ent.Profile{
				BirthDate: &u.Profile.BirthDate,
				GivenName: u.Profile.GivenName,
				Gender:    gender,
			},
		},
	}
}
