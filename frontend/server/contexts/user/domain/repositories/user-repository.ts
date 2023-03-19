import { TokenResponse } from "~~/server/contexts/oauth/domain/entities/token-response";
import { BaseRepository } from "~/server/contexts/shared/domain/repositories/base-repository";
import { User } from "../entities/user";

export interface UserRepository extends BaseRepository<User> {
  authenticate(input: {
    email: string;
    password: string;
  }): Promise<TokenResponse>;
}
