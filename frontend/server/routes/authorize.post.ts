import { oauth } from "../contexts/oauth/interfaces/nuxt/bootstrap";

export default defineEventHandler(oauth.controller.createAuthorization);
