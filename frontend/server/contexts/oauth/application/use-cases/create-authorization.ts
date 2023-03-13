import { AuthorizationRequest } from "./../../domain/entities/authorization-request";
import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

export function defineCreateAuthorization({ oauthRepository }: DefineUseCase) {
  return async function createAuthorization(request: AuthorizationRequest) {
    return oauthRepository.createAuthorization(request);
  };
}
