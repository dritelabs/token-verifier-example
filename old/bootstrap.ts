import { defineOAuthService } from "~~/server/services/oauth-service";
import { defineOAuthController } from "../interfaces/controllers/oauth-controller";

function bootstrap() {
  const oauthService = defineOAuthService();
  const oauthController = defineOAuthController({ oauthService });

  return { oauthController };
}
