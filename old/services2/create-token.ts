import { Metadata } from "@grpc/grpc-js";
import { toUpper, upperCase } from "lodash";
import { promisify } from "node:util";
import { GrantType } from "../proto/v1/grant_type_pb";
import { toSnakeCase } from "../utils/to-snake-case";
import { TokenRequest, TokenResponse } from "../proto/v1/token_pb";
import { client } from "./client";

export async function createToken(payload: TokenRequest.AsObject) {
  const metadata = new Metadata();
  const createTokenRequest = new TokenRequest();
  const authorizationCodeGrant = new TokenRequest.AuthorizationCodeGrant();

  createTokenRequest.setAuthorizationCodeGrant(authorizationCodeGrant);

  const res = await _createToken(createTokenRequest, metadata);

  return mapTokenResponse(res);
}

export function mapTokenRequest(
  payload: URLSearchParams
): TokenRequest.AsObject {
  const grantType = payload.get("grant_type")!;
  const isAuthorizationCodeGrant = grantType === "authorization_code";
  const isRefreshTokenGrant = grantType === "refresh_token";

  const currentGrantType = Object.keys(GrantType).indexOf(
    grantType.toUpperCase()
  );

  return {
    clientId: payload.get("client_id")!,
    grantType: currentGrantType,
    scope: payload.get("scope")!,
    authorizationCodeGrant: !isAuthorizationCodeGrant
      ? undefined
      : {
          code: payload.get("code")!,
          codeVerifier: payload.get("code_verifier")!,
          redirectUri: payload.get("redirect_uri")!,
        },
    refreshTokenGrant: !isRefreshTokenGrant
      ? undefined
      : {
          refreshToken: payload.get("refresh_token")!,
        },
  };
}

function mapTokenResponse(payload: TokenResponse) {
  return {
    [toSnakeCase("accessToken")]: payload.getAccessToken(),
    [toSnakeCase("expiresIn")]: payload.getExpiresIn(),
    [toSnakeCase("refreshToken")]: payload.getRefreshToken(),
    [toSnakeCase("scope")]: payload.getScope(),
    [toSnakeCase("tokenType")]: payload.getTokenType(),
  };
}

const _createToken = promisify<TokenRequest, Metadata, TokenResponse>(
  client.token.bind(client)
);
