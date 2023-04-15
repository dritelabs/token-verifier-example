package db

import (
	"context"
	"log"

	"github.com/dritelabs/accounts/internal/shared/infrastructure/db/ent"
)

type Database struct{}

func NewDatabase() *ent.Client {
	client, err := ent.Open("sqlite3", "file:ent?mode=memory&cache=shared&_fk=1")

	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}

	defer client.Close()

	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	return client
}
