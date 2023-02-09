package gapi

import (
	"github.com/dritelabs/accounts/internal/config"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/token"
	"gorm.io/gorm"
)

type AccountServer struct {
	pb.UnimplementedAccountServer
	config     config.Config
	store      *gorm.DB
	jwks       string
	privateKey string
	tokenMaker *token.TokenMaker
}

type AccountServerConfig struct {
	Config     config.Config
	Store      *gorm.DB
	Jwks       string
	PrivateKey string
	TokenMaker *token.TokenMaker
}

func NewServer(c *AccountServerConfig) *AccountServer {
	return &AccountServer{
		config:     c.Config,
		store:      c.Store,
		jwks:       c.Jwks,
		privateKey: c.PrivateKey,
		tokenMaker: c.TokenMaker,
	}
}
