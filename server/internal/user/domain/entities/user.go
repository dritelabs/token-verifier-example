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
	Profile             Profile
	Username            *valueobjects.Username
	UpdatedAt           time.Time
}

func NewUser() (*User, error) {
	email, err := valueobjects.NewEmail("")
	if err != nil {
		return nil, err
	}

	password, err := valueobjects.NewPassword("")
	if err != nil {
		return nil, err
	}

	phoneNumber, err := valueobjects.NewPhoneNumber("")
	if err != nil {
		return nil, err
	}

	username, err := valueobjects.NewUsername("")
	if err != nil {
		return nil, err
	}

	u := &User{
		Blocked:             false,
		Email:               email,
		EmailVerified:       true,
		LastIp:              "127.0.0.1",
		LastLogin:           time.Now(),
		LastPasswordReset:   time.Now(),
		LoginsCount:         0,
		Password:            password,
		PhoneNumber:         phoneNumber,
		PhoneNumberVerified: true,
		Username:            username,
		CreatedAt:           time.Now(),
		UpdatedAt:           time.Now(),
	}

	u.AddEvent(events.NewUserCreatedEvent(u.ID))

	return u, nil
}
