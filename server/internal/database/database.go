package database

import (
	"github.com/dritelabs/accounts/internal/database/models"
	"gorm.io/driver/postgres"
	"gorm.io/gen"
	"gorm.io/gorm"
)

func New(dsn string) (*gorm.DB, error) {
	return gorm.Open(postgres.Open(dsn), &gorm.Config{
		SkipDefaultTransaction: true,
	})
}

func AutoMigrate(db *gorm.DB) error {
	return db.AutoMigrate(
		&models.Address{},
		&models.Approval{},
		&models.Client{},
		&models.Jwk{},
		&models.Profile{},
		&models.User{},
	)
}

// Dynamic SQL
type Querier interface {
	// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
	FilterWithNameAndRole(name, role string) ([]gen.T, error)
}

func Generate(db *gorm.DB) {
	g := gen.NewGenerator(gen.Config{
		OutPath:       "internal/database/query",
		Mode:          gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface, // generate mode
		FieldNullable: true,
	})

	var m []interface{}

	m = append(m, models.Address{})
	m = append(m, models.Approval{})
	m = append(m, models.Client{})
	m = append(m, models.Jwk{})
	m = append(m, models.Profile{})
	m = append(m, models.Scope{})
	m = append(m, models.User{})

	// gormdb, _ := gorm.Open(mysql.Open("root:@(127.0.0.1:3306)/demo?charset=utf8mb4&parseTime=True&loc=Local"))
	g.UseDB(db) // reuse your gorm db

	// Generate basic type-safe DAO API for struct `model.User` following conventions
	g.ApplyBasic(m...)

	// Generate Type Safe API with Dynamic SQL defined on Querier interface for `model.User` and `model.Company`
	g.ApplyInterface(func(Querier) {}, m...)

	// Generate the code
	g.Execute()
}
