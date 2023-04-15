package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

// User holds the schema definition for the User entity.
type User struct {
	ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {
	return []ent.Field{
		field.String("default_shipping_address_id"),
		field.String("default_billing_address_id"),
		field.String("email"),
		field.Bool("email_verified"),
		field.String("password"),
		field.String("phone_number"),
		field.Bool("phone_number_verified"),
		field.String("username"),
	}
}

// Edges of the User.
func (User) Edges() []ent.Edge {
	return nil
}

func (User) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("email").Unique(),
		index.Fields("username").Unique(),
	}
}

// ID                       string `gorm:"primaryKey"`
// 	DefaultShippingAddressID string
// 	DefaultBillingAddressID  string
// 	Addresses                []Address
// 	Approvals                []*Approval `gorm:"many2many:user_approvals;"`
// 	Clients                  []Client
// 	Email                    sql.NullString `gorm:"uniqueIndex"`
// 	EmailVerified            bool
// 	Password                 string
// 	PhoneNumber              sql.NullString `gorm:"uniqueIndex"`
// 	PhoneNumberVerified      bool
// 	Profile                  *Profile
// 	DefaultShippingAddress   *Address
// 	DefaultBillingAddress    *Address
// 	// DefaultShippingAddress   *Address `gorm:"foreignKey:DefaultShippingAddressID"`
// 	// DefaultBillingAddress    *Address `gorm:"foreignKey:DefaultBillingAddressID"`
// 	Username sql.NullString `gorm:"uniqueIndex"`
