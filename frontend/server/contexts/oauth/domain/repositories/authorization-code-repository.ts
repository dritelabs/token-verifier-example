import { AuthorizationRequest } from "../entities/authorization-request";
import { AuthorizationResponse } from "../entities/authorization-response";
import { AuthorizeResponse } from "../entities/authorize-response";

export interface AuthorizationCodeRepository {
  authorize(input: AuthorizationRequest): Promise<AuthorizeResponse>;
  create(input: AuthorizationRequest): Promise<AuthorizationResponse>;
}
