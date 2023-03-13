import { AuthorizeResponse } from "./../entities/authorize-response";
import { AuthorizationRequest } from "../entities/authorization-request";
import { AuthorizationResponse } from "../entities/authorization-response";
import { TokenRequest } from "../entities/token-request";
import { TokenResponse } from "../entities/token-response";

export interface OAuthRepository {
  authorize(input: AuthorizationRequest): Promise<AuthorizeResponse>;

  createAuthorization(
    input: AuthorizationRequest
  ): Promise<AuthorizationResponse>;

  token(input: TokenRequest): Promise<TokenResponse>;
  jwks(): Promise<any>;
}
