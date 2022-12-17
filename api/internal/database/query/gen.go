// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"database/sql"

	"gorm.io/gorm"

	"gorm.io/gen"

	"gorm.io/plugin/dbresolver"
)

var (
	Q        = new(Query)
	Address  *address
	Approval *approval
	Client   *client
	Jwk      *jwk
	Profile  *profile
	Scope    *scope
	User     *user
)

func SetDefault(db *gorm.DB, opts ...gen.DOOption) {
	*Q = *Use(db, opts...)
	Address = &Q.Address
	Approval = &Q.Approval
	Client = &Q.Client
	Jwk = &Q.Jwk
	Profile = &Q.Profile
	Scope = &Q.Scope
	User = &Q.User
}

func Use(db *gorm.DB, opts ...gen.DOOption) *Query {
	return &Query{
		db:       db,
		Address:  newAddress(db, opts...),
		Approval: newApproval(db, opts...),
		Client:   newClient(db, opts...),
		Jwk:      newJwk(db, opts...),
		Profile:  newProfile(db, opts...),
		Scope:    newScope(db, opts...),
		User:     newUser(db, opts...),
	}
}

type Query struct {
	db *gorm.DB

	Address  address
	Approval approval
	Client   client
	Jwk      jwk
	Profile  profile
	Scope    scope
	User     user
}

func (q *Query) Available() bool { return q.db != nil }

func (q *Query) clone(db *gorm.DB) *Query {
	return &Query{
		db:       db,
		Address:  q.Address.clone(db),
		Approval: q.Approval.clone(db),
		Client:   q.Client.clone(db),
		Jwk:      q.Jwk.clone(db),
		Profile:  q.Profile.clone(db),
		Scope:    q.Scope.clone(db),
		User:     q.User.clone(db),
	}
}

func (q *Query) ReadDB() *Query {
	return q.clone(q.db.Clauses(dbresolver.Read))
}

func (q *Query) WriteDB() *Query {
	return q.clone(q.db.Clauses(dbresolver.Write))
}

func (q *Query) ReplaceDB(db *gorm.DB) *Query {
	return &Query{
		db:       db,
		Address:  q.Address.replaceDB(db),
		Approval: q.Approval.replaceDB(db),
		Client:   q.Client.replaceDB(db),
		Jwk:      q.Jwk.replaceDB(db),
		Profile:  q.Profile.replaceDB(db),
		Scope:    q.Scope.replaceDB(db),
		User:     q.User.replaceDB(db),
	}
}

type queryCtx struct {
	Address  IAddressDo
	Approval IApprovalDo
	Client   IClientDo
	Jwk      IJwkDo
	Profile  IProfileDo
	Scope    IScopeDo
	User     IUserDo
}

func (q *Query) WithContext(ctx context.Context) *queryCtx {
	return &queryCtx{
		Address:  q.Address.WithContext(ctx),
		Approval: q.Approval.WithContext(ctx),
		Client:   q.Client.WithContext(ctx),
		Jwk:      q.Jwk.WithContext(ctx),
		Profile:  q.Profile.WithContext(ctx),
		Scope:    q.Scope.WithContext(ctx),
		User:     q.User.WithContext(ctx),
	}
}

func (q *Query) Transaction(fc func(tx *Query) error, opts ...*sql.TxOptions) error {
	return q.db.Transaction(func(tx *gorm.DB) error { return fc(q.clone(tx)) }, opts...)
}

func (q *Query) Begin(opts ...*sql.TxOptions) *QueryTx {
	return &QueryTx{q.clone(q.db.Begin(opts...))}
}

type QueryTx struct{ *Query }

func (q *QueryTx) Commit() error {
	return q.db.Commit().Error
}

func (q *QueryTx) Rollback() error {
	return q.db.Rollback().Error
}

func (q *QueryTx) SavePoint(name string) error {
	return q.db.SavePoint(name).Error
}

func (q *QueryTx) RollbackTo(name string) error {
	return q.db.RollbackTo(name).Error
}