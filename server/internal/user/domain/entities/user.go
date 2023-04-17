package entities

import (
	"time"

	"github.com/dritelabs/accounts/internal/shared_kernel/domain"
	"github.com/dritelabs/accounts/internal/user/domain/events"
	valueobjects "github.com/dritelabs/accounts/internal/user/domain/value_objects"
)

type User struct {
	domain.AggregateRoot
	Blocked   bool
	CreatedAt time.Time
	// Clients []Clients
	// ClientsApproval []ClientsApproval
	Email               valueobjects.Email
	EmailVerified       bool
	ID                  string
	LastIp              string
	LastLogin           *time.Time
	LastPasswordReset   *time.Time
	LoginsCount         *int32
	Password            valueobjects.Password
	PhoneNumber         valueobjects.PhoneNumber
	PhoneNumberVerified bool
	Profile             *Profile
	Username            valueobjects.Username
	UpdatedAt           time.Time
}

type NewUserConfig struct {
	Blocked             bool
	CreatedAt           time.Time
	Email               string
	EmailVerified       bool
	ID                  string
	LastIp              string
	LastLogin           *time.Time
	LastPasswordReset   *time.Time
	LoginsCount         *int32
	Password            string
	PhoneNumber         string
	PhoneNumberVerified bool
	// Profile             *Profile
	Username  string
	UpdatedAt time.Time
}

func NewUser(c *NewUserConfig) (*User, error) {
	email, err := valueobjects.NewEmail(valueobjects.Email(c.Email))
	if err != nil {
		return nil, err
	}

	password, err := valueobjects.NewPassword(valueobjects.Password(c.Password))
	if err != nil {
		return nil, err
	}

	username, err := valueobjects.NewUsername(valueobjects.Username(c.Username))
	if err != nil {
		return nil, err
	}

	u := &User{
		Blocked:             false,
		Email:               *email,
		EmailVerified:       false,
		ID:                  c.ID,
		LastIp:              "",
		LastLogin:           nil,
		LastPasswordReset:   nil,
		LoginsCount:         nil,
		Password:            *password,
		PhoneNumber:         "",
		PhoneNumberVerified: false,
		// Profile: &Profile{
		// 	GivenName:  GivenName,
		// 	MiddleName: MiddleName,
		// },
		Username:  *username,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	u.AddEvent(events.NewUserCreatedEvent(u.ID))

	return u, nil
}
