import { defineOauthService } from "~~/server/services/oauth-service";

interface OAuthController {
  oauthService: Oauth;
}

function jwks() {
  return oauthService.jwks();
}

export function defineOAuthController({}: OAuthController) {
  return { jwks };
}
