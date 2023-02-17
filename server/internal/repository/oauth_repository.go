package repository

import (
	"time"

	"github.com/dritelabs/accounts/internal/config"
	"github.com/dritelabs/accounts/internal/token"
	"github.com/golang-jwt/jwt/v4"
	"gorm.io/gorm"
)

type OauthRepository struct {
	store      *gorm.DB
	tokenMaker *token.TokenMaker
	config     config.Config
}

type NewOauthRepositoryConfig struct {
	Config     config.Config
	Store      *gorm.DB
	TokenMaker *token.TokenMaker
}

func NewOauthRepository(config *NewOauthRepositoryConfig) *OauthRepository {
	return &OauthRepository{
		store:      config.Store,
		tokenMaker: config.TokenMaker,
		config:     config.Config,
	}
}

func (r *OauthRepository) CreateToken() (string, error) {
	t, err := r.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
			Test: "",
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "http://localhost:3000",
				Subject:   "",
				Audience:  []string{},
				ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Millisecond * time.Duration(r.config.AccessTokenExpirationTime))},
				NotBefore: &jwt.NumericDate{},
				IssuedAt:  &jwt.NumericDate{Time: time.Now()},
				ID:        "testing",
			},
		},
		Headers: &token.Headers{
			Typ: "at+jwt",
		},
	})

	return t, err
}
