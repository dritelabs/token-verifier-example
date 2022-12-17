import { login } from "~/server/services/login";

export default defineEventHandler((event) => {
  login();
});
