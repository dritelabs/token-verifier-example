import { defineOauthController } from "../interfaces/controllers/oauth-controller";

const controller = defineOauthController();

export default defineEventHandler(jwksController);
