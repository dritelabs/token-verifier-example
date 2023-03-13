// Revoke an access or refresh token.
import { revokeToken } from "~~/server/services2/revoke-token";

export default defineEventHandler((event) => {
  revokeToken();
});
