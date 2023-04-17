// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/predicate"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/profile"
	"github.com/dritelabs/accounts/internal/shared_kernel/infrastructure/db/ent/user"
)

// ProfileUpdate is the builder for updating Profile entities.
type ProfileUpdate struct {
	config
	hooks    []Hook
	mutation *ProfileMutation
}

// Where appends a list predicates to the ProfileUpdate builder.
func (pu *ProfileUpdate) Where(ps ...predicate.Profile) *ProfileUpdate {
	pu.mutation.Where(ps...)
	return pu
}

// SetBirthDate sets the "birth_date" field.
func (pu *ProfileUpdate) SetBirthDate(t time.Time) *ProfileUpdate {
	pu.mutation.SetBirthDate(t)
	return pu
}

// SetGivenName sets the "given_name" field.
func (pu *ProfileUpdate) SetGivenName(s string) *ProfileUpdate {
	pu.mutation.SetGivenName(s)
	return pu
}

// SetGender sets the "gender" field.
func (pu *ProfileUpdate) SetGender(pr profile.Gender) *ProfileUpdate {
	pu.mutation.SetGender(pr)
	return pu
}

// SetLocale sets the "locale" field.
func (pu *ProfileUpdate) SetLocale(s string) *ProfileUpdate {
	pu.mutation.SetLocale(s)
	return pu
}

// SetMiddleName sets the "middle_name" field.
func (pu *ProfileUpdate) SetMiddleName(s string) *ProfileUpdate {
	pu.mutation.SetMiddleName(s)
	return pu
}

// SetNickname sets the "nickname" field.
func (pu *ProfileUpdate) SetNickname(s string) *ProfileUpdate {
	pu.mutation.SetNickname(s)
	return pu
}

// SetProfile sets the "profile" field.
func (pu *ProfileUpdate) SetProfile(s string) *ProfileUpdate {
	pu.mutation.SetProfile(s)
	return pu
}

// SetPicture sets the "picture" field.
func (pu *ProfileUpdate) SetPicture(s string) *ProfileUpdate {
	pu.mutation.SetPicture(s)
	return pu
}

// SetWebsite sets the "website" field.
func (pu *ProfileUpdate) SetWebsite(s string) *ProfileUpdate {
	pu.mutation.SetWebsite(s)
	return pu
}

// SetZoneInfo sets the "zone_info" field.
func (pu *ProfileUpdate) SetZoneInfo(s string) *ProfileUpdate {
	pu.mutation.SetZoneInfo(s)
	return pu
}

// SetUserID sets the "user" edge to the User entity by ID.
func (pu *ProfileUpdate) SetUserID(id string) *ProfileUpdate {
	pu.mutation.SetUserID(id)
	return pu
}

// SetUser sets the "user" edge to the User entity.
func (pu *ProfileUpdate) SetUser(u *User) *ProfileUpdate {
	return pu.SetUserID(u.ID)
}

// Mutation returns the ProfileMutation object of the builder.
func (pu *ProfileUpdate) Mutation() *ProfileMutation {
	return pu.mutation
}

// ClearUser clears the "user" edge to the User entity.
func (pu *ProfileUpdate) ClearUser() *ProfileUpdate {
	pu.mutation.ClearUser()
	return pu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (pu *ProfileUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, ProfileMutation](ctx, pu.sqlSave, pu.mutation, pu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (pu *ProfileUpdate) SaveX(ctx context.Context) int {
	affected, err := pu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (pu *ProfileUpdate) Exec(ctx context.Context) error {
	_, err := pu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (pu *ProfileUpdate) ExecX(ctx context.Context) {
	if err := pu.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (pu *ProfileUpdate) check() error {
	if v, ok := pu.mutation.Gender(); ok {
		if err := profile.GenderValidator(v); err != nil {
			return &ValidationError{Name: "gender", err: fmt.Errorf(`ent: validator failed for field "Profile.gender": %w`, err)}
		}
	}
	if _, ok := pu.mutation.UserID(); pu.mutation.UserCleared() && !ok {
		return errors.New(`ent: clearing a required unique edge "Profile.user"`)
	}
	return nil
}

func (pu *ProfileUpdate) sqlSave(ctx context.Context) (n int, err error) {
	if err := pu.check(); err != nil {
		return n, err
	}
	_spec := sqlgraph.NewUpdateSpec(profile.Table, profile.Columns, sqlgraph.NewFieldSpec(profile.FieldID, field.TypeInt))
	if ps := pu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := pu.mutation.BirthDate(); ok {
		_spec.SetField(profile.FieldBirthDate, field.TypeTime, value)
	}
	if value, ok := pu.mutation.GivenName(); ok {
		_spec.SetField(profile.FieldGivenName, field.TypeString, value)
	}
	if value, ok := pu.mutation.Gender(); ok {
		_spec.SetField(profile.FieldGender, field.TypeEnum, value)
	}
	if value, ok := pu.mutation.Locale(); ok {
		_spec.SetField(profile.FieldLocale, field.TypeString, value)
	}
	if value, ok := pu.mutation.MiddleName(); ok {
		_spec.SetField(profile.FieldMiddleName, field.TypeString, value)
	}
	if value, ok := pu.mutation.Nickname(); ok {
		_spec.SetField(profile.FieldNickname, field.TypeString, value)
	}
	if value, ok := pu.mutation.Profile(); ok {
		_spec.SetField(profile.FieldProfile, field.TypeString, value)
	}
	if value, ok := pu.mutation.Picture(); ok {
		_spec.SetField(profile.FieldPicture, field.TypeString, value)
	}
	if value, ok := pu.mutation.Website(); ok {
		_spec.SetField(profile.FieldWebsite, field.TypeString, value)
	}
	if value, ok := pu.mutation.ZoneInfo(); ok {
		_spec.SetField(profile.FieldZoneInfo, field.TypeString, value)
	}
	if pu.mutation.UserCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := pu.mutation.UserIDs(); len(nodes) > 0 {
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, pu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{profile.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	pu.mutation.done = true
	return n, nil
}

// ProfileUpdateOne is the builder for updating a single Profile entity.
type ProfileUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *ProfileMutation
}

// SetBirthDate sets the "birth_date" field.
func (puo *ProfileUpdateOne) SetBirthDate(t time.Time) *ProfileUpdateOne {
	puo.mutation.SetBirthDate(t)
	return puo
}

// SetGivenName sets the "given_name" field.
func (puo *ProfileUpdateOne) SetGivenName(s string) *ProfileUpdateOne {
	puo.mutation.SetGivenName(s)
	return puo
}

// SetGender sets the "gender" field.
func (puo *ProfileUpdateOne) SetGender(pr profile.Gender) *ProfileUpdateOne {
	puo.mutation.SetGender(pr)
	return puo
}

// SetLocale sets the "locale" field.
func (puo *ProfileUpdateOne) SetLocale(s string) *ProfileUpdateOne {
	puo.mutation.SetLocale(s)
	return puo
}

// SetMiddleName sets the "middle_name" field.
func (puo *ProfileUpdateOne) SetMiddleName(s string) *ProfileUpdateOne {
	puo.mutation.SetMiddleName(s)
	return puo
}

// SetNickname sets the "nickname" field.
func (puo *ProfileUpdateOne) SetNickname(s string) *ProfileUpdateOne {
	puo.mutation.SetNickname(s)
	return puo
}

// SetProfile sets the "profile" field.
func (puo *ProfileUpdateOne) SetProfile(s string) *ProfileUpdateOne {
	puo.mutation.SetProfile(s)
	return puo
}

// SetPicture sets the "picture" field.
func (puo *ProfileUpdateOne) SetPicture(s string) *ProfileUpdateOne {
	puo.mutation.SetPicture(s)
	return puo
}

// SetWebsite sets the "website" field.
func (puo *ProfileUpdateOne) SetWebsite(s string) *ProfileUpdateOne {
	puo.mutation.SetWebsite(s)
	return puo
}

// SetZoneInfo sets the "zone_info" field.
func (puo *ProfileUpdateOne) SetZoneInfo(s string) *ProfileUpdateOne {
	puo.mutation.SetZoneInfo(s)
	return puo
}

// SetUserID sets the "user" edge to the User entity by ID.
func (puo *ProfileUpdateOne) SetUserID(id string) *ProfileUpdateOne {
	puo.mutation.SetUserID(id)
	return puo
}

// SetUser sets the "user" edge to the User entity.
func (puo *ProfileUpdateOne) SetUser(u *User) *ProfileUpdateOne {
	return puo.SetUserID(u.ID)
}

// Mutation returns the ProfileMutation object of the builder.
func (puo *ProfileUpdateOne) Mutation() *ProfileMutation {
	return puo.mutation
}

// ClearUser clears the "user" edge to the User entity.
func (puo *ProfileUpdateOne) ClearUser() *ProfileUpdateOne {
	puo.mutation.ClearUser()
	return puo
}

// Where appends a list predicates to the ProfileUpdate builder.
func (puo *ProfileUpdateOne) Where(ps ...predicate.Profile) *ProfileUpdateOne {
	puo.mutation.Where(ps...)
	return puo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (puo *ProfileUpdateOne) Select(field string, fields ...string) *ProfileUpdateOne {
	puo.fields = append([]string{field}, fields...)
	return puo
}

// Save executes the query and returns the updated Profile entity.
func (puo *ProfileUpdateOne) Save(ctx context.Context) (*Profile, error) {
	return withHooks[*Profile, ProfileMutation](ctx, puo.sqlSave, puo.mutation, puo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (puo *ProfileUpdateOne) SaveX(ctx context.Context) *Profile {
	node, err := puo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (puo *ProfileUpdateOne) Exec(ctx context.Context) error {
	_, err := puo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (puo *ProfileUpdateOne) ExecX(ctx context.Context) {
	if err := puo.Exec(ctx); err != nil {
		panic(err)
	}
}

// check runs all checks and user-defined validators on the builder.
func (puo *ProfileUpdateOne) check() error {
	if v, ok := puo.mutation.Gender(); ok {
		if err := profile.GenderValidator(v); err != nil {
			return &ValidationError{Name: "gender", err: fmt.Errorf(`ent: validator failed for field "Profile.gender": %w`, err)}
		}
	}
	if _, ok := puo.mutation.UserID(); puo.mutation.UserCleared() && !ok {
		return errors.New(`ent: clearing a required unique edge "Profile.user"`)
	}
	return nil
}

func (puo *ProfileUpdateOne) sqlSave(ctx context.Context) (_node *Profile, err error) {
	if err := puo.check(); err != nil {
		return _node, err
	}
	_spec := sqlgraph.NewUpdateSpec(profile.Table, profile.Columns, sqlgraph.NewFieldSpec(profile.FieldID, field.TypeInt))
	id, ok := puo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Profile.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := puo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, profile.FieldID)
		for _, f := range fields {
			if !profile.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != profile.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := puo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := puo.mutation.BirthDate(); ok {
		_spec.SetField(profile.FieldBirthDate, field.TypeTime, value)
	}
	if value, ok := puo.mutation.GivenName(); ok {
		_spec.SetField(profile.FieldGivenName, field.TypeString, value)
	}
	if value, ok := puo.mutation.Gender(); ok {
		_spec.SetField(profile.FieldGender, field.TypeEnum, value)
	}
	if value, ok := puo.mutation.Locale(); ok {
		_spec.SetField(profile.FieldLocale, field.TypeString, value)
	}
	if value, ok := puo.mutation.MiddleName(); ok {
		_spec.SetField(profile.FieldMiddleName, field.TypeString, value)
	}
	if value, ok := puo.mutation.Nickname(); ok {
		_spec.SetField(profile.FieldNickname, field.TypeString, value)
	}
	if value, ok := puo.mutation.Profile(); ok {
		_spec.SetField(profile.FieldProfile, field.TypeString, value)
	}
	if value, ok := puo.mutation.Picture(); ok {
		_spec.SetField(profile.FieldPicture, field.TypeString, value)
	}
	if value, ok := puo.mutation.Website(); ok {
		_spec.SetField(profile.FieldWebsite, field.TypeString, value)
	}
	if value, ok := puo.mutation.ZoneInfo(); ok {
		_spec.SetField(profile.FieldZoneInfo, field.TypeString, value)
	}
	if puo.mutation.UserCleared() {
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := puo.mutation.UserIDs(); len(nodes) > 0 {
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_node = &Profile{config: puo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, puo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{profile.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	puo.mutation.done = true
	return _node, nil
}