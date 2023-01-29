DB_URL=postgresql://drite:drite@localhost:5432/accounts?sslmode=disable

protoc:
	protoc --proto_path=../protobuf --go_out=internal/proto --go_opt=paths=source_relative \
    --go-grpc_out=internal/proto --go-grpc_opt=paths=source_relative \
    ../protobuf/*.proto

server:
	reflex -c "reflex.conf"

migrateup:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose up

migratedown:
	migrate -path internal/database/migrations -database "$(DB_URL)" -verbose down

.PHONY: protoc server migrateup migratedown
