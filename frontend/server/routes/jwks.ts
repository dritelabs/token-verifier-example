import { getJwks } from "~/server/services/jwks/get-jwks";

export default defineEventHandler(async (event) => {
  return getJwks();
});
