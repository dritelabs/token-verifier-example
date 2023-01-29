import { introspectToken } from "~~/server/services/introspect-token";

// Return information about a token.
export default defineEventHandler((event) => {
  return introspectToken();
});
