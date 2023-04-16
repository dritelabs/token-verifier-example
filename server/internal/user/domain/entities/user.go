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
	Email               *valueobjects.Email
	EmailVerified       bool
	ID                  string
	LastIp              string
	LastLogin           time.Time
	LastPasswordReset   time.Time
	LoginsCount         int32
	Password            *valueobjects.Password
	PhoneNumber         *valueobjects.PhoneNumber
	PhoneNumberVerified bool
	Profile             *Profile
	Username            *valueobjects.Username
	UpdatedAt           time.Time
}

func NewUser(
	Email,
	GivenName,
	MiddleName,
	Password string,
) (*User, error) {
	email, err := valueobjects.NewEmail(Email)
	if err != nil {
		return nil, err
	}

	password, err := valueobjects.NewPassword(Password)
	if err != nil {
		return nil, err
	}

	u := &User{
		Blocked:             false,
		Email:               email,
		EmailVerified:       false,
		LastIp:              "127.0.0.1",
		LastLogin:           time.Now(),
		LastPasswordReset:   time.Now(),
		LoginsCount:         0,
		Password:            password,
		PhoneNumber:         &valueobjects.PhoneNumber{},
		PhoneNumberVerified: false,
		Profile: &Profile{
			GivenName:  GivenName,
			MiddleName: MiddleName,
		},
		Username:  &valueobjects.Username{},
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	u.AddEvent(events.NewUserCreatedEvent(u.ID))

	return u, nil
}
