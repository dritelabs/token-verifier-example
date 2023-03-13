import { introspectToken } from "~~/server/services2/introspect-token";

// Return information about a token.
export default defineEventHandler((event) => {
  return introspectToken();
});
