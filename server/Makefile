DB_URL=postgresql://drite:drite@localhost:5432/accounts?sslmode=disable

protoc:
	protoc --proto_path=../protobuf --go_out=internal/proto --go_opt=paths=source_relative \
    --go-grpc_out=internal/proto --go-grpc_opt=paths=source_relative \
    ../protobuf/v1/*.proto

server:
	go run cmd/api/main.go

migrateup:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose up

migratedown:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose down

.PHONY: protoc server migrateup migratedown
