import { OAuthRepository } from "../../domain/repositories/oauth-repository";

interface DefineUseCase {
  oauthRepository: OAuthRepository;
}

interface TokenRequest {
  userId: string;
}

export function defineToken({ oauthRepository }: DefineUseCase) {
  return async function token(request: TokenRequest) {
    return oauthRepository.token({});
  };
}
