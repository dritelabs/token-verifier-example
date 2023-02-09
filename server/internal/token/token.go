package token

import (
	"errors"
	"log"

	"github.com/MicahParks/keyfunc"
	"github.com/golang-jwt/jwt/v4"
)

var (
	ErrInvalidToken = errors.New("token is invalid")
	ErrExpiredToken = errors.New("token has expired")
)

type NewTokenMakerConfig struct {
	PrivateKey string
	Jwks       string
}

type TokenMaker struct {
	*NewTokenMakerConfig
}

type SignTokenConfig struct {
	Claims  *Claims
	Headers *Headers
}

func NewTokenMaker(c *NewTokenMakerConfig) *TokenMaker {
	return &TokenMaker{
		NewTokenMakerConfig: c,
	}
}

func (t *TokenMaker) SignToken(config SignTokenConfig) (string, error) {
	key, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(t.PrivateKey))

	if err != nil {
		return "", err
	}

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodRS256, config.Claims)
	jwtToken.Header["typ"] = config.Headers.Typ

	return jwtToken.SignedString(key)
}

func (t *TokenMaker) Verify(token string, claims *Claims) (*Claims, error) {
	jwks, err := keyfunc.Get("http://localhost:3000/jwks", keyfunc.Options{
		RefreshErrorHandler: func(err error) {
			log.Printf("There was an error with the jwt.Keyfunc\nError: %s", err.Error())
		},
	})

	if err != nil {
		log.Fatalf("Failed to get the JWKS from the given URL.\nError: %s", err)
	}

	jwtToken, err := jwt.ParseWithClaims(token, claims, jwks.Keyfunc)

	if err != nil {
		verr, ok := err.(*jwt.ValidationError)
		if ok && errors.Is(verr.Inner, ErrExpiredToken) {
			return nil, ErrExpiredToken
		}
		return nil, ErrInvalidToken
	}

	payload, ok := jwtToken.Claims.(*Claims)

	if !ok {
		return nil, ErrInvalidToken
	}

	return payload, nil
}
