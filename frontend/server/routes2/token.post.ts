// Obtain an access and/or ID token by presenting an authorization grant or refresh token
import { createToken, mapTokenRequest } from "~/server/services/create-token";

export default defineEventHandler(async (event) => {
  const body = await readRawBody(event);
  const params = new URLSearchParams(body as string);
  const tokenRequest = mapTokenRequest(params);
  const res = await createToken(tokenRequest);

  return res;
});
