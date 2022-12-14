package database

import (
	"database/sql"
	"time"

	"github.com/gofrs/uuid"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Profile struct {
	gorm.Model
	ID         uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	UserID     uuid.UUID
	BirthDate  time.Time
	FirstName  sql.NullString
	Gender     sql.NullString
	Locale     sql.NullString
	LastName   sql.NullString
	MiddleName sql.NullString
	Nickname   sql.NullString
	Profile    datatypes.URL
	Picture    datatypes.URL
	User       User
	Website    datatypes.URL
	ZoneInfo   sql.NullString
}
