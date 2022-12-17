// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"github.com/dritelabs/accounts/internal/database/models"
)

func newJwk(db *gorm.DB, opts ...gen.DOOption) jwk {
	_jwk := jwk{}

	_jwk.jwkDo.UseDB(db, opts...)
	_jwk.jwkDo.UseModel(&models.Jwk{})

	tableName := _jwk.jwkDo.TableName()
	_jwk.ALL = field.NewAsterisk(tableName)
	_jwk.ID = field.NewField(tableName, "id")
	_jwk.CreatedAt = field.NewTime(tableName, "created_at")
	_jwk.UpdatedAt = field.NewTime(tableName, "updated_at")
	_jwk.DeletedAt = field.NewField(tableName, "deleted_at")
	_jwk.ClientID = field.NewField(tableName, "client_id")
	_jwk.Jwk = field.NewField(tableName, "jwk")
	_jwk.Client = jwkBelongsToClient{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Client", "models.Client"),
		User: struct {
			field.RelationField
			DefaultShippingAddress struct {
				field.RelationField
				User struct {
					field.RelationField
				}
			}
			DefaultBillingAddress struct {
				field.RelationField
			}
			Profile struct {
				field.RelationField
				User struct {
					field.RelationField
				}
			}
			Addresses struct {
				field.RelationField
			}
			Clients struct {
				field.RelationField
			}
			Approvals struct {
				field.RelationField
				Scopes struct {
					field.RelationField
					Approvals struct {
						field.RelationField
					}
					Clients struct {
						field.RelationField
					}
				}
				Clients struct {
					field.RelationField
				}
				Users struct {
					field.RelationField
				}
			}
		}{
			RelationField: field.NewRelation("Client.User", "models.User"),
			DefaultShippingAddress: struct {
				field.RelationField
				User struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Client.User.DefaultShippingAddress", "models.Address"),
				User: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Client.User.DefaultShippingAddress.User", "models.User"),
				},
			},
			DefaultBillingAddress: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Client.User.DefaultBillingAddress", "models.Address"),
			},
			Profile: struct {
				field.RelationField
				User struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Client.User.Profile", "models.Profile"),
				User: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Client.User.Profile.User", "models.User"),
				},
			},
			Addresses: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Client.User.Addresses", "models.Address"),
			},
			Clients: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Client.User.Clients", "models.Client"),
			},
			Approvals: struct {
				field.RelationField
				Scopes struct {
					field.RelationField
					Approvals struct {
						field.RelationField
					}
					Clients struct {
						field.RelationField
					}
				}
				Clients struct {
					field.RelationField
				}
				Users struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Client.User.Approvals", "models.Approval"),
				Scopes: struct {
					field.RelationField
					Approvals struct {
						field.RelationField
					}
					Clients struct {
						field.RelationField
					}
				}{
					RelationField: field.NewRelation("Client.User.Approvals.Scopes", "models.Scope"),
					Approvals: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Client.User.Approvals.Scopes.Approvals", "models.Approval"),
					},
					Clients: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Client.User.Approvals.Scopes.Clients", "models.Client"),
					},
				},
				Clients: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Client.User.Approvals.Clients", "models.Client"),
				},
				Users: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Client.User.Approvals.Users", "models.User"),
				},
			},
		},
		Approvals: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Client.Approvals", "models.Approval"),
		},
		Scopes: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Client.Scopes", "models.Scope"),
		},
	}

	_jwk.fillFieldMap()

	return _jwk
}

type jwk struct {
	jwkDo

	ALL       field.Asterisk
	ID        field.Field
	CreatedAt field.Time
	UpdatedAt field.Time
	DeletedAt field.Field
	ClientID  field.Field
	Jwk       field.Field
	Client    jwkBelongsToClient

	fieldMap map[string]field.Expr
}

func (j jwk) Table(newTableName string) *jwk {
	j.jwkDo.UseTable(newTableName)
	return j.updateTableName(newTableName)
}

func (j jwk) As(alias string) *jwk {
	j.jwkDo.DO = *(j.jwkDo.As(alias).(*gen.DO))
	return j.updateTableName(alias)
}

func (j *jwk) updateTableName(table string) *jwk {
	j.ALL = field.NewAsterisk(table)
	j.ID = field.NewField(table, "id")
	j.CreatedAt = field.NewTime(table, "created_at")
	j.UpdatedAt = field.NewTime(table, "updated_at")
	j.DeletedAt = field.NewField(table, "deleted_at")
	j.ClientID = field.NewField(table, "client_id")
	j.Jwk = field.NewField(table, "jwk")

	j.fillFieldMap()

	return j
}

func (j *jwk) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := j.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (j *jwk) fillFieldMap() {
	j.fieldMap = make(map[string]field.Expr, 7)
	j.fieldMap["id"] = j.ID
	j.fieldMap["created_at"] = j.CreatedAt
	j.fieldMap["updated_at"] = j.UpdatedAt
	j.fieldMap["deleted_at"] = j.DeletedAt
	j.fieldMap["client_id"] = j.ClientID
	j.fieldMap["jwk"] = j.Jwk

}

func (j jwk) clone(db *gorm.DB) jwk {
	j.jwkDo.ReplaceConnPool(db.Statement.ConnPool)
	return j
}

func (j jwk) replaceDB(db *gorm.DB) jwk {
	j.jwkDo.ReplaceDB(db)
	return j
}

type jwkBelongsToClient struct {
	db *gorm.DB

	field.RelationField

	User struct {
		field.RelationField
		DefaultShippingAddress struct {
			field.RelationField
			User struct {
				field.RelationField
			}
		}
		DefaultBillingAddress struct {
			field.RelationField
		}
		Profile struct {
			field.RelationField
			User struct {
				field.RelationField
			}
		}
		Addresses struct {
			field.RelationField
		}
		Clients struct {
			field.RelationField
		}
		Approvals struct {
			field.RelationField
			Scopes struct {
				field.RelationField
				Approvals struct {
					field.RelationField
				}
				Clients struct {
					field.RelationField
				}
			}
			Clients struct {
				field.RelationField
			}
			Users struct {
				field.RelationField
			}
		}
	}
	Approvals struct {
		field.RelationField
	}
	Scopes struct {
		field.RelationField
	}
}

func (a jwkBelongsToClient) Where(conds ...field.Expr) *jwkBelongsToClient {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a jwkBelongsToClient) WithContext(ctx context.Context) *jwkBelongsToClient {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a jwkBelongsToClient) Model(m *models.Jwk) *jwkBelongsToClientTx {
	return &jwkBelongsToClientTx{a.db.Model(m).Association(a.Name())}
}

type jwkBelongsToClientTx struct{ tx *gorm.Association }

func (a jwkBelongsToClientTx) Find() (result *models.Client, err error) {
	return result, a.tx.Find(&result)
}

func (a jwkBelongsToClientTx) Append(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a jwkBelongsToClientTx) Replace(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a jwkBelongsToClientTx) Delete(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a jwkBelongsToClientTx) Clear() error {
	return a.tx.Clear()
}

func (a jwkBelongsToClientTx) Count() int64 {
	return a.tx.Count()
}

type jwkDo struct{ gen.DO }

type IJwkDo interface {
	gen.SubQuery
	Debug() IJwkDo
	WithContext(ctx context.Context) IJwkDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IJwkDo
	WriteDB() IJwkDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IJwkDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IJwkDo
	Not(conds ...gen.Condition) IJwkDo
	Or(conds ...gen.Condition) IJwkDo
	Select(conds ...field.Expr) IJwkDo
	Where(conds ...gen.Condition) IJwkDo
	Order(conds ...field.Expr) IJwkDo
	Distinct(cols ...field.Expr) IJwkDo
	Omit(cols ...field.Expr) IJwkDo
	Join(table schema.Tabler, on ...field.Expr) IJwkDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IJwkDo
	RightJoin(table schema.Tabler, on ...field.Expr) IJwkDo
	Group(cols ...field.Expr) IJwkDo
	Having(conds ...gen.Condition) IJwkDo
	Limit(limit int) IJwkDo
	Offset(offset int) IJwkDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IJwkDo
	Unscoped() IJwkDo
	Create(values ...*models.Jwk) error
	CreateInBatches(values []*models.Jwk, batchSize int) error
	Save(values ...*models.Jwk) error
	First() (*models.Jwk, error)
	Take() (*models.Jwk, error)
	Last() (*models.Jwk, error)
	Find() ([]*models.Jwk, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Jwk, err error)
	FindInBatches(result *[]*models.Jwk, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*models.Jwk) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IJwkDo
	Assign(attrs ...field.AssignExpr) IJwkDo
	Joins(fields ...field.RelationField) IJwkDo
	Preload(fields ...field.RelationField) IJwkDo
	FirstOrInit() (*models.Jwk, error)
	FirstOrCreate() (*models.Jwk, error)
	FindByPage(offset int, limit int) (result []*models.Jwk, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IJwkDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	FilterWithNameAndRole(name string, role string) (result []models.Jwk, err error)
}

// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
func (j jwkDo) FilterWithNameAndRole(name string, role string) (result []models.Jwk, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, name)
	generateSQL.WriteString("SELECT * FROM jwks WHERE name = ? ")
	if role != "" {
		params = append(params, role)
		generateSQL.WriteString("AND role = ? ")
	}

	var executeSQL *gorm.DB

	executeSQL = j.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result)
	err = executeSQL.Error
	return
}

func (j jwkDo) Debug() IJwkDo {
	return j.withDO(j.DO.Debug())
}

func (j jwkDo) WithContext(ctx context.Context) IJwkDo {
	return j.withDO(j.DO.WithContext(ctx))
}

func (j jwkDo) ReadDB() IJwkDo {
	return j.Clauses(dbresolver.Read)
}

func (j jwkDo) WriteDB() IJwkDo {
	return j.Clauses(dbresolver.Write)
}

func (j jwkDo) Session(config *gorm.Session) IJwkDo {
	return j.withDO(j.DO.Session(config))
}

func (j jwkDo) Clauses(conds ...clause.Expression) IJwkDo {
	return j.withDO(j.DO.Clauses(conds...))
}

func (j jwkDo) Returning(value interface{}, columns ...string) IJwkDo {
	return j.withDO(j.DO.Returning(value, columns...))
}

func (j jwkDo) Not(conds ...gen.Condition) IJwkDo {
	return j.withDO(j.DO.Not(conds...))
}

func (j jwkDo) Or(conds ...gen.Condition) IJwkDo {
	return j.withDO(j.DO.Or(conds...))
}

func (j jwkDo) Select(conds ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Select(conds...))
}

func (j jwkDo) Where(conds ...gen.Condition) IJwkDo {
	return j.withDO(j.DO.Where(conds...))
}

func (j jwkDo) Exists(subquery interface{ UnderlyingDB() *gorm.DB }) IJwkDo {
	return j.Where(field.CompareSubQuery(field.ExistsOp, nil, subquery.UnderlyingDB()))
}

func (j jwkDo) Order(conds ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Order(conds...))
}

func (j jwkDo) Distinct(cols ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Distinct(cols...))
}

func (j jwkDo) Omit(cols ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Omit(cols...))
}

func (j jwkDo) Join(table schema.Tabler, on ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Join(table, on...))
}

func (j jwkDo) LeftJoin(table schema.Tabler, on ...field.Expr) IJwkDo {
	return j.withDO(j.DO.LeftJoin(table, on...))
}

func (j jwkDo) RightJoin(table schema.Tabler, on ...field.Expr) IJwkDo {
	return j.withDO(j.DO.RightJoin(table, on...))
}

func (j jwkDo) Group(cols ...field.Expr) IJwkDo {
	return j.withDO(j.DO.Group(cols...))
}

func (j jwkDo) Having(conds ...gen.Condition) IJwkDo {
	return j.withDO(j.DO.Having(conds...))
}

func (j jwkDo) Limit(limit int) IJwkDo {
	return j.withDO(j.DO.Limit(limit))
}

func (j jwkDo) Offset(offset int) IJwkDo {
	return j.withDO(j.DO.Offset(offset))
}

func (j jwkDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IJwkDo {
	return j.withDO(j.DO.Scopes(funcs...))
}

func (j jwkDo) Unscoped() IJwkDo {
	return j.withDO(j.DO.Unscoped())
}

func (j jwkDo) Create(values ...*models.Jwk) error {
	if len(values) == 0 {
		return nil
	}
	return j.DO.Create(values)
}

func (j jwkDo) CreateInBatches(values []*models.Jwk, batchSize int) error {
	return j.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (j jwkDo) Save(values ...*models.Jwk) error {
	if len(values) == 0 {
		return nil
	}
	return j.DO.Save(values)
}

func (j jwkDo) First() (*models.Jwk, error) {
	if result, err := j.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.Jwk), nil
	}
}

func (j jwkDo) Take() (*models.Jwk, error) {
	if result, err := j.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.Jwk), nil
	}
}

func (j jwkDo) Last() (*models.Jwk, error) {
	if result, err := j.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.Jwk), nil
	}
}

func (j jwkDo) Find() ([]*models.Jwk, error) {
	result, err := j.DO.Find()
	return result.([]*models.Jwk), err
}

func (j jwkDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Jwk, err error) {
	buf := make([]*models.Jwk, 0, batchSize)
	err = j.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (j jwkDo) FindInBatches(result *[]*models.Jwk, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return j.DO.FindInBatches(result, batchSize, fc)
}

func (j jwkDo) Attrs(attrs ...field.AssignExpr) IJwkDo {
	return j.withDO(j.DO.Attrs(attrs...))
}

func (j jwkDo) Assign(attrs ...field.AssignExpr) IJwkDo {
	return j.withDO(j.DO.Assign(attrs...))
}

func (j jwkDo) Joins(fields ...field.RelationField) IJwkDo {
	for _, _f := range fields {
		j = *j.withDO(j.DO.Joins(_f))
	}
	return &j
}

func (j jwkDo) Preload(fields ...field.RelationField) IJwkDo {
	for _, _f := range fields {
		j = *j.withDO(j.DO.Preload(_f))
	}
	return &j
}

func (j jwkDo) FirstOrInit() (*models.Jwk, error) {
	if result, err := j.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.Jwk), nil
	}
}

func (j jwkDo) FirstOrCreate() (*models.Jwk, error) {
	if result, err := j.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.Jwk), nil
	}
}

func (j jwkDo) FindByPage(offset int, limit int) (result []*models.Jwk, count int64, err error) {
	result, err = j.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = j.Offset(-1).Limit(-1).Count()
	return
}

func (j jwkDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = j.Count()
	if err != nil {
		return
	}

	err = j.Offset(offset).Limit(limit).Scan(result)
	return
}

func (j jwkDo) Scan(result interface{}) (err error) {
	return j.DO.Scan(result)
}

func (j jwkDo) Delete(models ...*models.Jwk) (result gen.ResultInfo, err error) {
	return j.DO.Delete(models)
}

func (j *jwkDo) withDO(do gen.Dao) *jwkDo {
	j.DO = *do.(*gen.DO)
	return j
}