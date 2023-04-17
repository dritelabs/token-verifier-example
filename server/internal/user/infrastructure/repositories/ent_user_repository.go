package repositories

import (
	"context"
	"errors"
	"fmt"

	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/user"
	"github.com/dritelabs/accounts/internal/user/domain/entities"
	"github.com/dritelabs/accounts/internal/user/domain/mappers"
)

type ENTUserRepository struct {
	mapper mappers.UserMapper[ent.User]
	store  *ent.Client
}

func (r *ENTUserRepository) FindById(ctx context.Context, id string) (*entities.User, error) {
	eu, err := r.store.User.
		Query().
		Where(user.ID(id)).
		WithProfile().
		Only(ctx)

	if err != nil {
		return nil, fmt.Errorf("failed querying user: %w", err)
	}

	return r.mapper.ToDomain(ctx, eu), nil
}

func (r *ENTUserRepository) FindAll(ctx context.Context, id string) ([]*entities.User, error) {
	eus, err := r.store.User.
		Query().
		Where(user.ID(id)).
		WithProfile().
		All(ctx)

	if err != nil {
		return nil, fmt.Errorf("failed querying users: %w", err)
	}

	var res []*entities.User

	for _, u := range eus {
		res = append(res, r.mapper.ToDomain(ctx, u))
	}

	return res, nil
}

func (r *ENTUserRepository) Save(ctx context.Context, u *entities.User) (*entities.User, error) {
	eu, err := r.store.User.Create().
		SetEmail(u.Email.String()).
		SetPassword(u.Password.String()).
		Save(ctx)

	if err != nil {
		return nil, fmt.Errorf("failed creating user: %w", err)
	}

	_, err = r.store.Profile.Create().
		SetUser(eu).
		SetGivenName(u.Profile.GivenName).
		SetMiddleName(u.Profile.MiddleName).
		Save(ctx)

	if err != nil {
		return nil, fmt.Errorf("failed creating profile: %w", err)
	}

	return r.mapper.ToDomain(ctx, eu), nil
}

func (r *ENTUserRepository) Update(ctx context.Context, id string) (*entities.User, error) {
	return nil, errors.New("not implemented")
}

func NewENTUserRepository(m mappers.UserMapper[ent.User], s *ent.Client) ENTUserRepository {
	return ENTUserRepository{
		mapper: m,
		store:  s,
	}
}
