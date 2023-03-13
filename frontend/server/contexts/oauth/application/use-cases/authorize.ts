import { AuthorizationRequest } from "./../../domain/entities/authorization-request";
import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

export function defineAuthorize({ oauthRepository }: DefineUseCase) {
  return async function authorize(request: AuthorizationRequest) {
    return oauthRepository.authorize(request);
  };
}
