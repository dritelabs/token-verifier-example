import { ServerError } from "./../../../shared/infrastructure/errors/server-error";
import { promisify } from "node:util";
import { Metadata, ServiceError, status } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { accountClient } from "~/server/contexts/shared/infrastructure/account-client";
import {
  AuthenticateUserRequest,
  CreateUserRequest,
  DeleteUserRequest,
  GetUserRequest,
  UpdateUserRequest,
  User as UserMessage,
} from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/user_pb";
import { TokenResponse } from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/token_pb";
import { UserRepository } from "~/server/contexts/user/domain/repositories/user-repository";
import { UserSerializer } from "~/server/contexts/user/domain/serializers/user-serializer";
import { TokenSerializer } from "~/server/contexts/oauth/domain/serializers/token-serializer";
import { BadRequest } from "~~/server/contexts/shared/infrastructure/errors/bad-request";

interface DefineGRPCUserRepository {
  tokenSerializer: TokenSerializer<TokenResponse>;
  userSerializer: UserSerializer<UserMessage>;
}

export function defineGRPCUserRepository({
  tokenSerializer,
  userSerializer,
}: DefineGRPCUserRepository): UserRepository {
  return {
    async save(input) {
      const request = new CreateUserRequest();
      const metadata = new Metadata();
      const response = await createUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
    async delete(input) {
      const request = new DeleteUserRequest();
      const metadata = new Metadata();
      await deleteUser(request, metadata);

      return;
    },
    async findOne(input) {
      const request = new GetUserRequest();
      const metadata = new Metadata();
      const response = await getUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },
    async findAll(input) {
      const request = new GetUserRequest();
      const metadata = new Metadata();
      const response = await getUser(request, metadata);

      return [userSerializer.serializeToEntity(response)];
    },
    async update(input) {
      const request = new UpdateUserRequest();
      const metadata = new Metadata();
      const response = await updateUser(request, metadata);

      return userSerializer.serializeToEntity(response);
    },

    async authenticate(input) {
      try {
        const request = new AuthenticateUserRequest();

        request.setEmail(input.email);
        request.setPassword(input.password);

        const metadata = new Metadata();
        const response = await authenticate(request, metadata);

        return tokenSerializer.serializeToEntity(response);
      } catch (error) {
        const e = error as ServiceError;

        if (e.code === status.INVALID_ARGUMENT) {
          throw new BadRequest({
            error: e.message,
            description: e.details,
          });
        }

        throw new ServerError({
          error: e.message,
          description: e.details,
        });
      }
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

const authenticate = promisify<
  AuthenticateUserRequest,
  Metadata,
  TokenResponse
>(accountClient.authenticateUser.bind(accountClient));
