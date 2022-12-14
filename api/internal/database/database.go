package database

import (
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
	return db.AutoMigrate(&Address{}, &Approval{}, &Client{}, &Jwk{}, &Profile{}, &User{})
}

// Dynamic SQL
type Querier interface {
	// SELECT * FROM @@table WHERE name = @name{{if role !=""}} AND role = @role{{end}}
	FilterWithNameAndRole(name, role string) ([]gen.T, error)
}

func Generate(db *gorm.DB) {
	g := gen.NewGenerator(gen.Config{
		OutPath:       "internal/query",
		Mode:          gen.WithoutContext | gen.WithDefaultQuery | gen.WithQueryInterface, // generate mode
		FieldNullable: true,
	})

	var models []interface{}

	models = append(models, Address{})
	models = append(models, Approval{})
	models = append(models, Client{})
	models = append(models, User{})

	// gormdb, _ := gorm.Open(mysql.Open("root:@(127.0.0.1:3306)/demo?charset=utf8mb4&parseTime=True&loc=Local"))
	g.UseDB(db) // reuse your gorm db

	// Generate basic type-safe DAO API for struct `model.User` following conventions
	g.ApplyBasic(models...)

	// Generate Type Safe API with Dynamic SQL defined on Querier interface for `model.User` and `model.Company`
	g.ApplyInterface(func(Querier) {}, models...)

	// Generate the code
	g.Execute()
}
