import { UserRepository } from "../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function logoutUser() {
    throw new Error("No implemented");
  };
}
