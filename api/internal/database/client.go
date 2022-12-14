package database

import (
	"database/sql"

	"github.com/gofrs/uuid"
	"github.com/lib/pq"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Client struct {
	gorm.Model
	ID                       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	UserID                   uuid.UUID
	Approvals                []*Approval    `gorm:"many2many:client_approvals;"`
	Contacts                 pq.StringArray `gorm:"type:text[]"`
	Description              sql.NullString
	GrantTypes               pq.StringArray `gorm:"type:text[]"`
	IsFirstParty             bool
	Jwks                     datatypes.JSON
	JwksUri                  datatypes.URL
	LogoUri                  datatypes.URL
	Name                     string
	PolicyUri                datatypes.URL
	PublicKeysConfiguration  string
	RedirectUris             pq.StringArray `gorm:"type:text[]"`
	ResponseTypes            pq.StringArray `gorm:"type:text[]"`
	RefreshTokenRotationType string
	Secret                   sql.NullString
	Scopes                   []*Scope `gorm:"many2many:client_scopes;"`
	SoftwareId               sql.NullString
	SoftwareVersion          sql.NullString
	TosUri                   sql.NullString
	TokenEndpointAuthMethod  string
	Type                     string
	Uri                      datatypes.URL
	User                     User
}
