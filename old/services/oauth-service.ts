import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { GetJwksRequest } from "~/server/proto/drite/account/v1/jwk_pb";
import { client } from "~~/server/infraestructure/account-client";

interface DefineOauthService {}

export interface OAuthService {
  authorize(): any;
  introspect(): any;
  jwks(): any;
  revoke(): any;
  token(): any;
  userInfo(): any;
}

function authorize() {}

function introspect() {}

async function jwks({}: DefineOauthService) {
  return function () {};
  const req = new GetJwksRequest();
  const res = await getJWKS(req, new Metadata());
  const arrayBuff = res.getValue();
  const string = Buffer.from(arrayBuff as Uint8Array).toString("utf8");

  return JSON.parse(string);
}

function revoke() {}
function token() {}
function userInfo() {}

export function defineOAuthService({}: DefineOauthService): OAuthService {
  return { authorize, introspect, jwks, revoke, token, userInfo };
}

const getJWKS = promisify<GetJwksRequest, Metadata, Any>(
  client.getJwks.bind(client)
);
