package token

import (
	"github.com/golang-jwt/jwt/v4"
)

type Claims struct {
	Test string
	jwt.RegisteredClaims
}
