package token

import (
	"fmt"
	"log"
	"time"

	"github.com/MicahParks/keyfunc"
	"github.com/golang-jwt/jwt/v4"
)

type JWTMaker struct {
	PrivateKey string
}

func (j *JWTMaker) SignToken(c *Claims) (string, error) {
	key, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(j.PrivateKey))
	if err != nil {
		return "", err
	}

	// claims, err := NewClaims(c)
	// if err != nil {
	// 	return "", err
	// }

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodRS256, c)
	// jwtToken.Header["kid"] = "DTLbNkoMq4o6pWrVP2Yr6mfr3fPSbTk6ypXTeqCJu0o"
	jwtToken.Header["typ"] = "at+jwt"
	// jwtToken := jwt.NewWithClaims(jwt.GetSigningMethod("RS256"), c)

	token, err := jwtToken.SignedString(key)

	valid := Verify(token, c)

	fmt.Println(valid)

	return token, err
}

func NewJWTMaker(key string) (TokenMaker, error) {
	return &JWTMaker{
		PrivateKey: key,
	}, nil
}

func Verify(token string, claims *Claims) bool {
	jwks, err := keyfunc.Get("http://localhost:3000/jwks", keyfunc.Options{
		RefreshErrorHandler: func(err error) {
			log.Printf("There was an error with the jwt.Keyfunc\nError: %s", err.Error())
		},
		RefreshInterval:   time.Hour,
		RefreshRateLimit:  time.Minute * 5,
		RefreshTimeout:    time.Second * 10,
		RefreshUnknownKID: true,
	})
	if err != nil {
		log.Fatalf("Failed to get the JWKS from the given URL.\nError: %s", err)
	}

	jwtToken, err := jwt.ParseWithClaims(token, claims, jwks.Keyfunc)

	if err != nil {
		fmt.Print(err)

		return false
	}

	return jwtToken.Valid
}
