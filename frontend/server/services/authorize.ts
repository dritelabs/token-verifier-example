import { promisify } from "node:util";
import {
  AuthorizationRequest,
  AuthorizationResponse,
} from "~/server/proto/v1/authorization_pb";
import { Metadata } from "@grpc/grpc-js";
import { client } from "./client";
import { CodeChallengeMethod } from "../proto/v1/code_challenge_method_pb";

export async function authorize(request: AuthorizationRequest) {
  const metadata = new Metadata();
  const response = await _authorize(request, metadata);

  return getAuthorizationResponse(response);
}

export function getAuthorizationRequest(payload: any) {
  const req = new AuthorizationRequest();
  const codeChallengeMethod = CodeChallengeMethod[
    payload["code_challenge_method"]
  ] as unknown as number;

  req.setClientId(payload["client_id"]);
  req.setCodeChallenge(payload["code_challenge"]);
  req.setCodeChallengeMethod(codeChallengeMethod);
  req.setRedirectUri(payload["redirect_uri"]);
  req.setScope(payload["scope"]);
  req.setState(payload["state"]);

  return req;
}

export function getAuthorizationResponse(payload: AuthorizationResponse) {
  const obj = payload.toObject();

  return {
    client: obj.client,
    scopes: obj.scopesList,
  };
}

const _authorize = promisify<
  AuthorizationRequest,
  Metadata,
  AuthorizationResponse
>(client.authorize.bind(client));
