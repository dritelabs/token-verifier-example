import { OAuthUseCases } from "../../../application/use-cases";

interface DefineOAuthController {
  oauthUseCases: OAuthUseCases;
}

export type OAuthController = ReturnType<typeof defineOAuthController>;

function defineJWKSController({ oauthUseCases }: DefineOAuthController) {
  return async function jwks() {
    return oauthUseCases.jwks();
  };
}

export function defineOAuthController({
  oauthUseCases,
}: DefineOAuthController) {
  return { jwks: defineJWKSController({ oauthUseCases }) };
}
