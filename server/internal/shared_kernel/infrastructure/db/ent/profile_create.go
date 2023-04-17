// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/profile"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/user"
)

// ProfileCreate is the builder for creating a Profile entity.
type ProfileCreate struct {
	config
	mutation *ProfileMutation
	hooks    []Hook
}

// SetBirthDate sets the "birth_date" field.
func (pc *ProfileCreate) SetBirthDate(t time.Time) *ProfileCreate {
	pc.mutation.SetBirthDate(t)
	return pc
}

// SetGivenName sets the "given_name" field.
func (pc *ProfileCreate) SetGivenName(s string) *ProfileCreate {
	pc.mutation.SetGivenName(s)
	return pc
}

// SetGender sets the "gender" field.
func (pc *ProfileCreate) SetGender(pr profile.Gender) *ProfileCreate {
	pc.mutation.SetGender(pr)
	return pc
}

// SetLocale sets the "locale" field.
func (pc *ProfileCreate) SetLocale(s string) *ProfileCreate {
	pc.mutation.SetLocale(s)
	return pc
}

// SetMiddleName sets the "middle_name" field.
func (pc *ProfileCreate) SetMiddleName(s string) *ProfileCreate {
	pc.mutation.SetMiddleName(s)
	return pc
}

// SetNickname sets the "nickname" field.
func (pc *ProfileCreate) SetNickname(s string) *ProfileCreate {
	pc.mutation.SetNickname(s)
	return pc
}

// SetProfile sets the "profile" field.
func (pc *ProfileCreate) SetProfile(s string) *ProfileCreate {
	pc.mutation.SetProfile(s)
	return pc
}

// SetPicture sets the "picture" field.
func (pc *ProfileCreate) SetPicture(s string) *ProfileCreate {
	pc.mutation.SetPicture(s)
	return pc
}

// SetWebsite sets the "website" field.
func (pc *ProfileCreate) SetWebsite(s string) *ProfileCreate {
	pc.mutation.SetWebsite(s)
	return pc
}

// SetZoneInfo sets the "zone_info" field.
func (pc *ProfileCreate) SetZoneInfo(s string) *ProfileCreate {
	pc.mutation.SetZoneInfo(s)
	return pc
}

// SetUserID sets the "user" edge to the User entity by ID.
func (pc *ProfileCreate) SetUserID(id string) *ProfileCreate {
	pc.mutation.SetUserID(id)
	return pc
}

// SetUser sets the "user" edge to the User entity.
func (pc *ProfileCreate) SetUser(u *User) *ProfileCreate {
	return pc.SetUserID(u.ID)
}

// Mutation returns the ProfileMutation object of the builder.
func (pc *ProfileCreate) Mutation() *ProfileMutation {
	return pc.mutation
}

// Save creates the Profile in the database.
func (pc *ProfileCreate) Save(ctx context.Context) (*Profile, error) {
	return withHooks[*Profile, ProfileMutation](ctx, pc.sqlSave, pc.mutation, pc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (pc *ProfileCreate) SaveX(ctx context.Context) *Profile {
	v, err := pc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (pc *ProfileCreate) Exec(ctx context.Context) error {
	_, err := pc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (pc *ProfileCreate) ExecX(ctx context.Context) {
	if err := pc.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (pc *ProfileCreate) check() error {
	if _, ok := pc.mutation.BirthDate(); !ok {
		return &ValidationError{Name: "birth_date", err: errors.New(`ent: missing required field "Profile.birth_date"`)}
	}
	if _, ok := pc.mutation.GivenName(); !ok {
		return &ValidationError{Name: "given_name", err: errors.New(`ent: missing required field "Profile.given_name"`)}
	}
	if _, ok := pc.mutation.Gender(); !ok {
		return &ValidationError{Name: "gender", err: errors.New(`ent: missing required field "Profile.gender"`)}
	}
	if v, ok := pc.mutation.Gender(); ok {
		if err := profile.GenderValidator(v); err != nil {
			return &ValidationError{Name: "gender", err: fmt.Errorf(`ent: validator failed for field "Profile.gender": %w`, err)}
		}
	}
	if _, ok := pc.mutation.Locale(); !ok {
		return &ValidationError{Name: "locale", err: errors.New(`ent: missing required field "Profile.locale"`)}
	}
	if _, ok := pc.mutation.MiddleName(); !ok {
		return &ValidationError{Name: "middle_name", err: errors.New(`ent: missing required field "Profile.middle_name"`)}
	}
	if _, ok := pc.mutation.Nickname(); !ok {
		return &ValidationError{Name: "nickname", err: errors.New(`ent: missing required field "Profile.nickname"`)}
	}
	if _, ok := pc.mutation.Profile(); !ok {
		return &ValidationError{Name: "profile", err: errors.New(`ent: missing required field "Profile.profile"`)}
	}
	if _, ok := pc.mutation.Picture(); !ok {
		return &ValidationError{Name: "picture", err: errors.New(`ent: missing required field "Profile.picture"`)}
	}
	if _, ok := pc.mutation.Website(); !ok {
		return &ValidationError{Name: "website", err: errors.New(`ent: missing required field "Profile.website"`)}
	}
	if _, ok := pc.mutation.ZoneInfo(); !ok {
		return &ValidationError{Name: "zone_info", err: errors.New(`ent: missing required field "Profile.zone_info"`)}
	}
	if _, ok := pc.mutation.UserID(); !ok {
		return &ValidationError{Name: "user", err: errors.New(`ent: missing required edge "Profile.user"`)}
	}
	return nil
}

func (pc *ProfileCreate) sqlSave(ctx context.Context) (*Profile, error) {
	if err := pc.check(); err != nil {
		return nil, err
	}
	_node, _spec := pc.createSpec()
	if err := sqlgraph.CreateNode(ctx, pc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	_node.ID = int(id)
	pc.mutation.id = &_node.ID
	pc.mutation.done = true
	return _node, nil
}

func (pc *ProfileCreate) createSpec() (*Profile, *sqlgraph.CreateSpec) {
	var (
		_node = &Profile{config: pc.config}
		_spec = sqlgraph.NewCreateSpec(profile.Table, sqlgraph.NewFieldSpec(profile.FieldID, field.TypeInt))
	)
	if value, ok := pc.mutation.BirthDate(); ok {
		_spec.SetField(profile.FieldBirthDate, field.TypeTime, value)
		_node.BirthDate = &value
	}
	if value, ok := pc.mutation.GivenName(); ok {
		_spec.SetField(profile.FieldGivenName, field.TypeString, value)
		_node.GivenName = value
	}
	if value, ok := pc.mutation.Gender(); ok {
		_spec.SetField(profile.FieldGender, field.TypeEnum, value)
		_node.Gender = value
	}
	if value, ok := pc.mutation.Locale(); ok {
		_spec.SetField(profile.FieldLocale, field.TypeString, value)
		_node.Locale = value
	}
	if value, ok := pc.mutation.MiddleName(); ok {
		_spec.SetField(profile.FieldMiddleName, field.TypeString, value)
		_node.MiddleName = value
	}
	if value, ok := pc.mutation.Nickname(); ok {
		_spec.SetField(profile.FieldNickname, field.TypeString, value)
		_node.Nickname = value
	}
	if value, ok := pc.mutation.Profile(); ok {
		_spec.SetField(profile.FieldProfile, field.TypeString, value)
		_node.Profile = value
	}
	if value, ok := pc.mutation.Picture(); ok {
		_spec.SetField(profile.FieldPicture, field.TypeString, value)
		_node.Picture = value
	}
	if value, ok := pc.mutation.Website(); ok {
		_spec.SetField(profile.FieldWebsite, field.TypeString, value)
		_node.Website = value
	}
	if value, ok := pc.mutation.ZoneInfo(); ok {
		_spec.SetField(profile.FieldZoneInfo, field.TypeString, value)
		_node.ZoneInfo = value
	}
	if nodes := pc.mutation.UserIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2O,
			Inverse: true,
			Table:   profile.UserTable,
			Columns: []string{profile.UserColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(user.FieldID, field.TypeString),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.user_profile = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// ProfileCreateBulk is the builder for creating many Profile entities in bulk.
type ProfileCreateBulk struct {
	config
	builders []*ProfileCreate
}

// Save creates the Profile entities in the database.
func (pcb *ProfileCreateBulk) Save(ctx context.Context) ([]*Profile, error) {
	specs := make([]*sqlgraph.CreateSpec, len(pcb.builders))
	nodes := make([]*Profile, len(pcb.builders))
	mutators := make([]Mutator, len(pcb.builders))
	for i := range pcb.builders {
		func(i int, root context.Context) {
			builder := pcb.builders[i]
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ProfileMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				var err error
				nodes[i], specs[i] = builder.createSpec()
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, pcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, pcb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{msg: err.Error(), wrap: err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				if specs[i].ID.Value != nil {
					id := specs[i].ID.Value.(int64)
					nodes[i].ID = int(id)
				}
				mutation.done = true
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, pcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (pcb *ProfileCreateBulk) SaveX(ctx context.Context) []*Profile {
	v, err := pcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (pcb *ProfileCreateBulk) Exec(ctx context.Context) error {
	_, err := pcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (pcb *ProfileCreateBulk) ExecX(ctx context.Context) {
	if err := pcb.Exec(ctx); err != nil {
		panic(err)
	}
}