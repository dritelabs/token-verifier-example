import { OAuthRepository } from "../../domain/repositories/oauth-repository";
import { defineAuthorize } from "./authorize";
import { defineCreateAuthorization } from "./create-authorization";
import { defineJWKS } from "./jwks";
import { defineToken } from "./token";

interface DefineOAuthUseCases {
  oauthRepository: OAuthRepository;
}

export function defineOAuthUseCases({ oauthRepository }: DefineOAuthUseCases) {
  return {
    authorize: defineAuthorize({ oauthRepository }),
    createAuthorization: defineCreateAuthorization({ oauthRepository }),
    jwks: defineJWKS({ oauthRepository }),
    token: defineToken({ oauthRepository }),
  };
}

export type OAuthUseCases = ReturnType<typeof defineOAuthUseCases>;
