import { AuthorizationRequest } from "../entities/authorization-request";
import { AuthorizationResponse } from "../entities/authorization-response";
import { TokenRequest } from "../entities/token-request";
import { TokenResponse } from "../entities/token-response";

export interface OAuthRepository {
  authorize(request: AuthorizationRequest): Promise<AuthorizationResponse>;
  token(request: TokenRequest): Promise<TokenResponse>;
}
