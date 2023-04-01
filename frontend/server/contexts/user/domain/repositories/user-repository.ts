import { TokenResponse } from "~~/server/contexts/oauth/domain/entities/token-response";
import { BaseRepository } from "~/server/contexts/shared/domain/repositories/base-repository";
import { User } from "../entities/user";

interface AuthenticateUserRequest {
  email: string;
  password: string;
}

export interface UserRepository extends BaseRepository<User> {
  authenticate(input: AuthenticateUserRequest): Promise<TokenResponse>;
}
