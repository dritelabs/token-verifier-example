import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineRegisterUser({ userRepository }: DefineUseCase) {
  return async function registerUser() {
    throw new Error("No implemented");
  };
}
