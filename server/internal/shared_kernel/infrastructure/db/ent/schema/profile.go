package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// User holds the schema definition for the User entity.
type Profile struct {
	ent.Schema
}

// Fields of the Profile.
func (Profile) Fields() []ent.Field {
	return []ent.Field{
		field.Time("birth_date").Nillable(),
		field.String("given_name"),
		field.Enum("gender").
			Values(
				"unspecified",
				"male",
				"female",
			),
		field.String("locale"),
		field.String("middle_name"),
		field.String("nickname"),
		field.String("profile"),
		field.String("picture"),
		field.String("website"),
		field.String("zone_info"),
	}
}

// Edges of the User.
func (Profile) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).
			Ref("profile").
			Unique().
			// We add the "Required" method to the builder
			// to make this edge required on entity creation.
			// i.e. Card cannot be created without its owner.
			Required(),
	}
}

func (Profile) Indexes() []ent.Index {
	return []ent.Index{}
}

// gorm.Model
// 	ID         string `gorm:"primarykey"`
// 	UserID     string
// 	BirthDate  sql.NullTime
// 	GivenName  sql.NullString
// 	Gender     sql.NullString
// 	Locale     sql.NullString
// 	MiddleName sql.NullString
// 	Nickname   sql.NullString
// 	Profile    datatypes.URL
// 	Picture    datatypes.URL
// 	User       User
// 	Website    datatypes.URL
// 	ZoneInfo   sql.NullString
