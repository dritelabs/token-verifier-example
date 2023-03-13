import { login } from "~~/server/services2/login";

export default defineEventHandler((event) => {
  login();
});
