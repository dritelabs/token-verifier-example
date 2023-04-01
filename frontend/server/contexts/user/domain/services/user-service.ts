import { TokenResponse } from "~/server/contexts/oauth/domain/entities/token-response";
import { User } from "../entities/user";
import { UserRepository } from "../repositories/user-repository";

export interface AuthenticateInput {
  email: string;
  password: string;
}

export interface ChangePasswordInput {
  userId: string;
  currentPassword: string;
  nextPassword: string;
}

export interface CreateUserInput {
  email: string;
  givenName: string;
  middleName: string;
  password: string;
}

export interface GetUserInput {
  userId: string;
}

export interface LogoutUserInput {}

export interface ResetPasswordInput {}

export interface UpdateUserInput {
  email: string;
  givenName: string;
  middleName: string;
  password: string;
}

export interface DefineUserService {
  userRepository: UserRepository;
}

export interface UserService {
  authenticate(input: AuthenticateInput): Promise<TokenResponse>;
  create(input: CreateUserInput): Promise<User>;
  changePassword(input: ChangePasswordInput): Promise<User>;
  get(input: GetUserInput): Promise<User>;
  logout(): Promise<void>;
  resetPassword(input: ResetPasswordInput): Promise<User>;
  update(input: UpdateUserInput): Promise<User>;
}
