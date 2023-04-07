import { DefineUseCase } from "./types";
import { create as _createProfile } from "../../domain/entities/profile";
import { create as _createUser } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { defineEmail, definePassword } from "../../domain/value-objects";

interface CreateUser {
  email: string;
  password: string;
  givenName: string;
  middleName: string;
}

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function useCase(input: CreateUser) {
    const user = _createUser({
      email: defineEmail(input.email),
      password: definePassword(input.email),
      profile: _createProfile({
        givenName: input.givenName,
        middleName: input.middleName,
      }),
    });

    return userRepository.save(user);
  };
}
