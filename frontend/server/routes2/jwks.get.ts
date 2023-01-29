import { getJwks } from "~/server/services/get-jwks";

export default defineEventHandler(() => {
  return getJwks();
});
