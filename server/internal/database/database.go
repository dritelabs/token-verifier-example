package database

import (
	"github.com/dritelabs/accounts/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func NewDatabase(dsn string) (*gorm.DB, error) {
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
