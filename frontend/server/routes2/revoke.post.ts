// Revoke an access or refresh token.
import { revokeToken } from "~/server/services/revoke-token";

export default defineEventHandler((event) => {
  revokeToken();
});
