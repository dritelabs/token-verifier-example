import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { Any } from "google-protobuf/google/protobuf/any_pb";
import { GetJwksRequest } from "~/server/proto/v1/jwk_pb";
import { client } from "./client";

export async function getJwks() {
  const req = new GetJwksRequest();
  const res = await getJWKS(req, new Metadata());
  const arrayBuff = res.getValue();
  const string = Buffer.from(arrayBuff as Uint8Array).toString("utf8");

  return JSON.parse(string);
}

// const getJWKS = promisify<GetJwksRequest, Metadata, Any>(
//   client.getJwks.bind(client)
// );
