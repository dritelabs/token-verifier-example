import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { accountClient } from "~/server/contexts/shared/infrastructure/account-client";
import { TokenSerializer } from "~~/server/contexts/oauth/domain/serializers/token-serializer";
import { TokenRepository } from "../../domain/repositories/token-repository";
import {
  TokenRequest,
  TokenResponse,
  TokenResponse as TokenResponseMessage,
} from "~~/server/contexts/shared/infrastructure/proto/drite/account/v1/token_pb";

interface DefineGRPCTokenRepository {
  tokenSerializer: TokenSerializer<TokenResponseMessage>;
}

export function defineGRPCOAuthRepository({
  tokenSerializer,
}: DefineGRPCTokenRepository): TokenRepository {
  return {
    async create(input) {
      const request = new TokenRequest();
      const metadata = new Metadata();
      const response = await token(request, metadata);

      return tokenSerializer.serializeToEntity(response);
    },
  };
}

const token = promisify<TokenRequest, Metadata, TokenResponse>(
  accountClient.token.bind(accountClient)
);
