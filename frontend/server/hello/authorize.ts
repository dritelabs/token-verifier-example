import { oauth } from "~/server/contexts/oauth/interfaces/nuxt/bootstrap";

export default defineEventHandler(oauth.controller.authorize);
