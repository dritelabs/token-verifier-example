package token

import (
	"errors"
	"time"

	"github.com/google/uuid"
)

// Different types of error returned by the VerifyToken function
var (
	ErrInvalidToken = errors.New("token is invalid")
	ErrExpiredToken = errors.New("token has expired")
)

// Payload contains the payload data of the token
type Claims struct {
	ID        uuid.UUID `json:"id"`
	Username  string    `json:"username"`
	IssuedAt  time.Time `json:"issued_at"`
	ExpiredAt time.Time `json:"expired_at"`
}

// NewPayload creates a new token payload with a specific username and duration
func NewClaims(c *Claims) (*Claims, error) {
	tokenID, err := uuid.NewRandom()

	if err != nil {
		return nil, err
	}

	c.ID = tokenID
	c.IssuedAt = time.Now()
	c.ExpiredAt = time.Now().Add(time.Minute * 15)

	return c, nil
}

// Valid checks if the token payload is valid or not
func (claims *Claims) Valid() error {
	if time.Now().After(claims.ExpiredAt) {
		return ErrExpiredToken
	}
	return nil
}
