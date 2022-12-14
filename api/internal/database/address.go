package database

import (
	"database/sql"

	"github.com/gofrs/uuid"
	"gorm.io/gorm"
)

type Address struct {
	gorm.Model
	ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	UserID      uuid.UUID
	City        sql.NullString
	Country     sql.NullString
	Line1       string
	Line2       sql.NullString
	PhoneNumber string
	PostalCode  int32
	Region      string
	User        *User
}
