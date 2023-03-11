import { getJwks } from "~~/server/services2/get-jwks";

export default defineEventHandler(() => {
  return getJwks();
});
