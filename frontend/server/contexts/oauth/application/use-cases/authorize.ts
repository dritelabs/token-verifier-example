import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

interface AuthorizationRequest {
  userId: string;
}

export function defineAuthorize({ oauthRepository }: DefineUseCase) {
  return async function changePassword(request: AuthorizationRequest) {
    return oauthRepository.authorize({});
  };
}
