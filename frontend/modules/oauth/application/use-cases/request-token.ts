import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

interface TokenRequest {
  userId: string;
}

export function defineRequestToken({ oauthRepository }: DefineUseCase) {
  return async function requestToken(request: TokenRequest) {
    return oauthRepository.token({
      id: input.userId,
    });
  };
}
