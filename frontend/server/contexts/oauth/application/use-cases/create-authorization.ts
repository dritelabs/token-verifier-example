import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

interface AuthorizationRequest {
  userId: string;
}

export function defineCreateAuthorization({ oauthRepository }: DefineUseCase) {
  return async function changePassword(request: AuthorizationRequest) {
    return oauthRepository.createAuthorization({});
  };
}
