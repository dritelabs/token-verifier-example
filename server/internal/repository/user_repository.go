package repository

import (
	"errors"
	"time"

	"github.com/dritelabs/accounts/internal/config"
	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/models"
	"github.com/dritelabs/accounts/internal/token"
	"github.com/golang-jwt/jwt/v4"
	"github.com/rs/zerolog/log"
	"gorm.io/gorm"
)

var (
	ErrUserNotFound       = errors.New("user not found")
	ErrInvalidCredentials = errors.New("invalid email or password")
)

type UserRepository struct {
	store      *gorm.DB
	tokenMaker *token.TokenMaker
	config     config.Config
}

type AuthenticateResponse struct {
	AccessToken  string
	RefreshToken string
	IdToken      string
}

type NewUserRepositoryConfig struct {
	Config     config.Config
	Store      *gorm.DB
	TokenMaker *token.TokenMaker
}

func NewUserRepository(config *NewUserRepositoryConfig) *UserRepository {
	return &UserRepository{
		store:      config.Store,
		tokenMaker: config.TokenMaker,
		config:     config.Config,
	}
}

func (r *UserRepository) Authenticate(email, password string) (*AuthenticateResponse, error) {
	u := models.User{}

	if err := r.store.First(&u, "email = ?", email).Error; err != nil {
		log.Error().Msgf("failed to authenticate user: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, ErrUserNotFound
		}

		return nil, err
	}

	if err := crypto.ComparePassword(u.Password, password); err != nil {
		log.Error().Msgf("failed to authenticate user: %s", err)

		return nil, ErrInvalidCredentials
	}

	accessToken, err := r.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
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

	if err != nil {
		return nil, err
	}

	refreshToken, err := r.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "http://localhost:3000",
				Subject:   "",
				Audience:  []string{},
				ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Millisecond * time.Duration(r.config.RefreshTokenExpirationTime))},
				NotBefore: &jwt.NumericDate{},
				IssuedAt:  &jwt.NumericDate{Time: time.Now()},
				ID:        "",
			},
		},
		Headers: &token.Headers{
			Typ: "rt+jwt",
		},
	})

	if err != nil {
		return nil, err
	}

	idToken, err := r.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "http://localhost:3000",
				Subject:   "",
				Audience:  []string{},
				ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Millisecond * time.Duration(r.config.RefreshTokenExpirationTime))},
				NotBefore: &jwt.NumericDate{},
				IssuedAt:  &jwt.NumericDate{Time: time.Now()},
				ID:        "",
			},
		},
		Headers: &token.Headers{
			Typ: "rt+jwt",
		},
	})

	if err != nil {
		return nil, err
	}

	return &AuthenticateResponse{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
		IdToken:      idToken,
	}, nil
}
