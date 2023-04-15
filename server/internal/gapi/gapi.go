package gapi

import (
	"github.com/dritelabs/accounts/internal/config"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/repository"
	"github.com/dritelabs/accounts/internal/token"
	"github.com/dritelabs/accounts/internal/user"
	"gorm.io/gorm"
)

type AccountServiceServer struct {
	pb.UnimplementedAccountServiceServer
	config         config.Config
	store          *gorm.DB
	jwks           string
	privateKey     string
	tokenMaker     *token.TokenMaker
	userRepository *repository.UserRepository
	userModule     *user.UserModule
}

type AccountServiceServerConfig struct {
	Config         config.Config
	Store          *gorm.DB
	Jwks           string
	PrivateKey     string
	TokenMaker     *token.TokenMaker
	UserRepository *repository.UserRepository
	UserModule     *user.UserModule
}

func NewServer(c *AccountServiceServerConfig) *AccountServiceServer {
	return &AccountServiceServer{
		config:         c.Config,
		store:          c.Store,
		jwks:           c.Jwks,
		privateKey:     c.PrivateKey,
		tokenMaker:     c.TokenMaker,
		userRepository: c.UserRepository,
		userModule:     c.UserModule,
	}
}
