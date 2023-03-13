import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

export function defineJWKS({ oauthRepository }: DefineUseCase) {
  return async function jwks() {
    return oauthRepository.jwks();
  };
}
