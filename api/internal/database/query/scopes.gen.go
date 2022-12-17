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

func newScope(db *gorm.DB, opts ...gen.DOOption) scope {
	_scope := scope{}

	_scope.scopeDo.UseDB(db, opts...)
	_scope.scopeDo.UseModel(&models.Scope{})

	tableName := _scope.scopeDo.TableName()
	_scope.ALL = field.NewAsterisk(tableName)
	_scope.ID = field.NewField(tableName, "id")
	_scope.CreatedAt = field.NewTime(tableName, "created_at")
	_scope.UpdatedAt = field.NewTime(tableName, "updated_at")
	_scope.DeletedAt = field.NewField(tableName, "deleted_at")
	_scope.Description = field.NewString(tableName, "description")
	_scope.DisplayName = field.NewString(tableName, "display_name")
	_scope.Name = field.NewString(tableName, "name")
	_scope.Approvals = scopeManyToManyApprovals{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Approvals", "models.Approval"),
		Scopes: struct {
			field.RelationField
			Approvals struct {
				field.RelationField
			}
			Clients struct {
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
					}
				}
				Approvals struct {
					field.RelationField
				}
				Scopes struct {
					field.RelationField
				}
			}
		}{
			RelationField: field.NewRelation("Approvals.Scopes", "models.Scope"),
			Approvals: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Approvals.Scopes.Approvals", "models.Approval"),
			},
			Clients: struct {
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
					}
				}
				Approvals struct {
					field.RelationField
				}
				Scopes struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Approvals.Scopes.Clients", "models.Client"),
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
					}
				}{
					RelationField: field.NewRelation("Approvals.Scopes.Clients.User", "models.User"),
					DefaultShippingAddress: struct {
						field.RelationField
						User struct {
							field.RelationField
						}
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.DefaultShippingAddress", "models.Address"),
						User: struct {
							field.RelationField
						}{
							RelationField: field.NewRelation("Approvals.Scopes.Clients.User.DefaultShippingAddress.User", "models.User"),
						},
					},
					DefaultBillingAddress: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.DefaultBillingAddress", "models.Address"),
					},
					Profile: struct {
						field.RelationField
						User struct {
							field.RelationField
						}
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.Profile", "models.Profile"),
						User: struct {
							field.RelationField
						}{
							RelationField: field.NewRelation("Approvals.Scopes.Clients.User.Profile.User", "models.User"),
						},
					},
					Addresses: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.Addresses", "models.Address"),
					},
					Clients: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.Clients", "models.Client"),
					},
					Approvals: struct {
						field.RelationField
					}{
						RelationField: field.NewRelation("Approvals.Scopes.Clients.User.Approvals", "models.Approval"),
					},
				},
				Approvals: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Approvals.Scopes.Clients.Approvals", "models.Approval"),
				},
				Scopes: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Approvals.Scopes.Clients.Scopes", "models.Scope"),
				},
			},
		},
		Clients: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Approvals.Clients", "models.Client"),
		},
		Users: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Approvals.Users", "models.User"),
		},
	}

	_scope.Clients = scopeManyToManyClients{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Clients", "models.Client"),
	}

	_scope.fillFieldMap()

	return _scope
}

type scope struct {
	scopeDo

	ALL         field.Asterisk
	ID          field.Field
	CreatedAt   field.Time
	UpdatedAt   field.Time
	DeletedAt   field.Field
	Description field.String
	DisplayName field.String
	Name        field.String
	Approvals   scopeManyToManyApprovals

	Clients scopeManyToManyClients

	fieldMap map[string]field.Expr
}

func (s scope) Table(newTableName string) *scope {
	s.scopeDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s scope) As(alias string) *scope {
	s.scopeDo.DO = *(s.scopeDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *scope) updateTableName(table string) *scope {
	s.ALL = field.NewAsterisk(table)
	s.ID = field.NewField(table, "id")
	s.CreatedAt = field.NewTime(table, "created_at")
	s.UpdatedAt = field.NewTime(table, "updated_at")
	s.DeletedAt = field.NewField(table, "deleted_at")
	s.Description = field.NewString(table, "description")
	s.DisplayName = field.NewString(table, "display_name")
	s.Name = field.NewString(table, "name")

	s.fillFieldMap()

	return s
}

func (s *scope) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *scope) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 9)
	s.fieldMap["id"] = s.ID
	s.fieldMap["created_at"] = s.CreatedAt
	s.fieldMap["updated_at"] = s.UpdatedAt
	s.fieldMap["deleted_at"] = s.DeletedAt
	s.fieldMap["description"] = s.Description
	s.fieldMap["display_name"] = s.DisplayName
	s.fieldMap["name"] = s.Name

}

func (s scope) clone(db *gorm.DB) scope {
	s.scopeDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s scope) replaceDB(db *gorm.DB) scope {
	s.scopeDo.ReplaceDB(db)
	return s
}

type scopeManyToManyApprovals struct {
	db *gorm.DB

	field.RelationField

	Scopes struct {
		field.RelationField
		Approvals struct {
			field.RelationField
		}
		Clients struct {
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
				}
			}
			Approvals struct {
				field.RelationField
			}
			Scopes struct {
				field.RelationField
			}
		}
	}
	Clients struct {
		field.RelationField
	}
	Users struct {
		field.RelationField
	}
}

func (a scopeManyToManyApprovals) Where(conds ...field.Expr) *scopeManyToManyApprovals {
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

func (a scopeManyToManyApprovals) WithContext(ctx context.Context) *scopeManyToManyApprovals {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a scopeManyToManyApprovals) Model(m *models.Scope) *scopeManyToManyApprovalsTx {
	return &scopeManyToManyApprovalsTx{a.db.Model(m).Association(a.Name())}
}

type scopeManyToManyApprovalsTx struct{ tx *gorm.Association }

func (a scopeManyToManyApprovalsTx) Find() (result []*models.Approval, err error) {
	return result, a.tx.Find(&result)
}

func (a scopeManyToManyApprovalsTx) Append(values ...*models.Approval) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a scopeManyToManyApprovalsTx) Replace(values ...*models.Approval) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a scopeManyToManyApprovalsTx) Delete(values ...*models.Approval) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a scopeManyToManyApprovalsTx) Clear() error {
	return a.tx.Clear()
}

func (a scopeManyToManyApprovalsTx) Count() int64 {
	return a.tx.Count()
}

type scopeManyToManyClients struct {
	db *gorm.DB

	field.RelationField
}

func (a scopeManyToManyClients) Where(conds ...field.Expr) *scopeManyToManyClients {
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

func (a scopeManyToManyClients) WithContext(ctx context.Context) *scopeManyToManyClients {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a scopeManyToManyClients) Model(m *models.Scope) *scopeManyToManyClientsTx {
	return &scopeManyToManyClientsTx{a.db.Model(m).Association(a.Name())}
}

type scopeManyToManyClientsTx struct{ tx *gorm.Association }

func (a scopeManyToManyClientsTx) Find() (result []*models.Client, err error) {
	return result, a.tx.Find(&result)
}

func (a scopeManyToManyClientsTx) Append(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a scopeManyToManyClientsTx) Replace(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a scopeManyToManyClientsTx) Delete(values ...*models.Client) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a scopeManyToManyClientsTx) Clear() error {
	return a.tx.Clear()
}

func (a scopeManyToManyClientsTx) Count() int64 {
	return a.tx.Count()
}

type scopeDo struct{ gen.DO }

type IScopeDo interface {
	gen.SubQuery
	Debug() IScopeDo
	WithContext(ctx context.Context) IScopeDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IScopeDo
	WriteDB() IScopeDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IScopeDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IScopeDo
	Not(conds ...gen.Condition) IScopeDo
	Or(conds ...gen.Condition) IScopeDo
	Select(conds ...field.Expr) IScopeDo
	Where(conds ...gen.Condition) IScopeDo
	Order(conds ...field.Expr) IScopeDo
	Distinct(cols ...field.Expr) IScopeDo
	Omit(cols ...field.Expr) IScopeDo
	Join(table schema.Tabler, on ...field.Expr) IScopeDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IScopeDo
	RightJoin(table schema.Tabler, on ...field.Expr) IScopeDo
	Group(cols ...field.Expr) IScopeDo
	Having(conds ...gen.Condition) IScopeDo
	Limit(limit int) IScopeDo
	Offset(offset int) IScopeDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IScopeDo
	Unscoped() IScopeDo
	Create(values ...*models.Scope) error
	CreateInBatches(values []*models.Scope, batchSize int) error
	Save(values ...*models.Scope) error
	First() (*models.Scope, error)
	Take() (*models.Scope, error)
	Last() (*models.Scope, error)
	Find() ([]*models.Scope, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Scope, err error)
	FindInBatches(result *[]*models.Scope, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*models.Scope) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IScopeDo
	Assign(attrs ...field.AssignExpr) IScopeDo
	Joins(fields ...field.RelationField) IScopeDo
	Preload(fields ...field.RelationField) IScopeDo
	FirstOrInit() (*models.Scope, error)
	FirstOrCreate() (*models.Scope, error)
	FindByPage(offset int, limit int) (result []*models.Scope, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IScopeDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	FilterWithNameAndRole(name string, role string) (result []models.Scope, err error)
}

// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
func (s scopeDo) FilterWithNameAndRole(name string, role string) (result []models.Scope, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	params = append(params, name)
	generateSQL.WriteString("SELECT * FROM scopes WHERE name = ? ")
	if role != "" {
		params = append(params, role)
		generateSQL.WriteString("AND role = ? ")
	}

	var executeSQL *gorm.DB

	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result)
	err = executeSQL.Error
	return
}

func (s scopeDo) Debug() IScopeDo {
	return s.withDO(s.DO.Debug())
}

func (s scopeDo) WithContext(ctx context.Context) IScopeDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s scopeDo) ReadDB() IScopeDo {
	return s.Clauses(dbresolver.Read)
}

func (s scopeDo) WriteDB() IScopeDo {
	return s.Clauses(dbresolver.Write)
}

func (s scopeDo) Session(config *gorm.Session) IScopeDo {
	return s.withDO(s.DO.Session(config))
}

func (s scopeDo) Clauses(conds ...clause.Expression) IScopeDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s scopeDo) Returning(value interface{}, columns ...string) IScopeDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s scopeDo) Not(conds ...gen.Condition) IScopeDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s scopeDo) Or(conds ...gen.Condition) IScopeDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s scopeDo) Select(conds ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s scopeDo) Where(conds ...gen.Condition) IScopeDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s scopeDo) Exists(subquery interface{ UnderlyingDB() *gorm.DB }) IScopeDo {
	return s.Where(field.CompareSubQuery(field.ExistsOp, nil, subquery.UnderlyingDB()))
}

func (s scopeDo) Order(conds ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s scopeDo) Distinct(cols ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s scopeDo) Omit(cols ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s scopeDo) Join(table schema.Tabler, on ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s scopeDo) LeftJoin(table schema.Tabler, on ...field.Expr) IScopeDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s scopeDo) RightJoin(table schema.Tabler, on ...field.Expr) IScopeDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s scopeDo) Group(cols ...field.Expr) IScopeDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s scopeDo) Having(conds ...gen.Condition) IScopeDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s scopeDo) Limit(limit int) IScopeDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s scopeDo) Offset(offset int) IScopeDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s scopeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IScopeDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s scopeDo) Unscoped() IScopeDo {
	return s.withDO(s.DO.Unscoped())
}

func (s scopeDo) Create(values ...*models.Scope) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s scopeDo) CreateInBatches(values []*models.Scope, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s scopeDo) Save(values ...*models.Scope) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s scopeDo) First() (*models.Scope, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.Scope), nil
	}
}

func (s scopeDo) Take() (*models.Scope, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.Scope), nil
	}
}

func (s scopeDo) Last() (*models.Scope, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.Scope), nil
	}
}

func (s scopeDo) Find() ([]*models.Scope, error) {
	result, err := s.DO.Find()
	return result.([]*models.Scope), err
}

func (s scopeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.Scope, err error) {
	buf := make([]*models.Scope, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s scopeDo) FindInBatches(result *[]*models.Scope, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s scopeDo) Attrs(attrs ...field.AssignExpr) IScopeDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s scopeDo) Assign(attrs ...field.AssignExpr) IScopeDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s scopeDo) Joins(fields ...field.RelationField) IScopeDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s scopeDo) Preload(fields ...field.RelationField) IScopeDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s scopeDo) FirstOrInit() (*models.Scope, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.Scope), nil
	}
}

func (s scopeDo) FirstOrCreate() (*models.Scope, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.Scope), nil
	}
}

func (s scopeDo) FindByPage(offset int, limit int) (result []*models.Scope, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s scopeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s scopeDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s scopeDo) Delete(models ...*models.Scope) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *scopeDo) withDO(do gen.Dao) *scopeDo {
	s.DO = *do.(*gen.DO)
	return s
}