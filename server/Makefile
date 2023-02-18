DB_URL=postgresql://drite:drite@localhost:5432/accounts?sslmode=disable

protoc:
	buf generate https://github.com/dritelabs/driteapis.git#branch=main,subdir=account

server:
	reflex -c "reflex.conf"

migrateup:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose up

migratedown:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose down

.PHONY: protoc server migrateup migratedown
