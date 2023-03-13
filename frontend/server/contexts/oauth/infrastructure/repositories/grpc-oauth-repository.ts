import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { accountClient } from "~/server/contexts/shared/infrastructure/account-client";
import {
  AuthorizationRequest,
  AuthorizationResponse,
  AuthorizeResponse,
} from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/authorization_pb";
import { GetJwksRequest } from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/jwk_pb";
import { OAuthRepository } from "~/server/contexts/oauth/domain/repositories/oauth-repository";
import { OAuthSerializer } from "~/server/contexts/oauth/domain/serializers/oauth-serializer";

interface DefineGRPCUserRepository {
  oauthSerializer: OAuthSerializer;
}

export function defineGRPCOAuthRepository(
  _: DefineGRPCUserRepository
): OAuthRepository {
  return {
    async authorize() {
      const request = new AuthorizationRequest();
      const metadata = new Metadata();
      const response = await authorize(request, metadata);

      return {};
    },
    async createAuthorization(input) {
      const request = new AuthorizationRequest();
      const metadata = new Metadata();
      const response = await createAuthorization(request, metadata);

      return {};
    },
    async jwks() {
      const request = new GetJwksRequest();
      const metadata = new Metadata();
      const response = await getJwks(request, metadata);
      const arrayBuff = response.getValue();
      const string = Buffer.from(arrayBuff as Uint8Array).toString("utf8");
      return JSON.parse(string);
    },
    token() {
      throw new Error("No implemented");
    },
  };
}

const authorize = promisify<AuthorizationRequest, Metadata, AuthorizeResponse>(
  accountClient.authorize.bind(accountClient)
);

const createAuthorization = promisify<
  AuthorizationRequest,
  Metadata,
  AuthorizationResponse
>(accountClient.createAuthorization.bind(accountClient));

const getJwks = promisify<GetJwksRequest, Metadata, Any>(
  accountClient.getJwks.bind(accountClient)
);

// const deleteUser = promisify<DeleteUserRequest, Metadata, Empty>(
//   accountClient.deleteUser.bind(accountClient)
// );

// const getUser = promisify<GetUserRequest, Metadata, UserMessage>(
//   accountClient.getUser.bind(accountClient)
// );

// const updateUser = promisify<UpdateUserRequest, Metadata, UserMessage>(
//   accountClient.updateUser.bind(accountClient)
// );
