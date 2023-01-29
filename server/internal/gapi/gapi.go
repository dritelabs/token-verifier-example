package gapi

import (
	"github.com/dritelabs/accounts/internal/config"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/token"
	"gorm.io/gorm"
)

type AccountServer struct {
	pb.UnimplementedAccountServer
	AccountServerConfig
}

type AccountServerConfig struct {
	Config     config.Config
	Store      *gorm.DB
	Jwks       string
	PrivateKey string
	TokenMaker token.TokenMaker
}

func NewServer(c *AccountServerConfig) *AccountServer {
	return &AccountServer{
		AccountServerConfig: AccountServerConfig{
			Config:     c.Config,
			Store:      c.Store,
			Jwks:       c.Jwks,
			PrivateKey: c.PrivateKey,
			TokenMaker: c.TokenMaker,
		},
	}
}
