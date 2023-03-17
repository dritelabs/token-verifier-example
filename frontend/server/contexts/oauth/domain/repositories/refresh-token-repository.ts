import { TokenRequest } from "../entities/token-request";
import { TokenResponse } from "../entities/token-response";

export interface RefreshTokenRepository {
  create(input: TokenRequest): Promise<TokenResponse>;
}
