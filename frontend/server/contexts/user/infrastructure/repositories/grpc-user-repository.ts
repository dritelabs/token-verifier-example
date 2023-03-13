import { UserSerializer } from "../../domain/serializers/user-serializer";
import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { accountClient } from "~~/server/contexts/shared/infrastructure/account-client";
import {
  CreateUserRequest,
  DeleteUserRequest,
  GetUserRequest,
  UpdateUserRequest,
  User as UserMessage,
} from "~~/server/contexts/shared/infrastructure/proto/drite/account/v1/user_pb";
import { UserRepository } from "~~/server/contexts/user/domain/repositories/user-repository";

interface DefineGRPCUserRepository {
  userSerializer: UserSerializer<UserMessage>;
}

export function defineGRPCUserRepository({
  userSerializer,
}: DefineGRPCUserRepository): UserRepository {
  return {
    async create(entity) {
      const request = new CreateUserRequest();
      const metadata = new Metadata();
      const response = await createUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
    async delete(entity) {
      const request = new DeleteUserRequest();
      const metadata = new Metadata();
      await deleteUser(request, metadata);

      return;
    },
    async get(entity) {
      const request = new GetUserRequest();
      const metadata = new Metadata();
      const response = await getUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
    async query(entity) {
      const request = new GetUserRequest();
      const metadata = new Metadata();
      const response = await getUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
    async update(entity) {
      const request = new UpdateUserRequest();
      const metadata = new Metadata();
      const response = await updateUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
  };
}

const createUser = promisify<CreateUserRequest, Metadata, UserMessage>(
  accountClient.createUser.bind(accountClient)
);

const deleteUser = promisify<DeleteUserRequest, Metadata, Empty>(
  accountClient.deleteUser.bind(accountClient)
);

const getUser = promisify<GetUserRequest, Metadata, UserMessage>(
  accountClient.getUser.bind(accountClient)
);

const updateUser = promisify<UpdateUserRequest, Metadata, UserMessage>(
  accountClient.updateUser.bind(accountClient)
);
