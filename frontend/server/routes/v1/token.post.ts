// Obtain an access and/or ID token by presenting an authorization grant or refresh token
import { createToken } from "~/server/services/create-token";

export default defineEventHandler((event) => {
  createToken();
});
