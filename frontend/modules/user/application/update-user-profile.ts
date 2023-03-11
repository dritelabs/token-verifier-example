import { UserRepository } from "../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function updateUserProfile() {
    throw new Error("No implemented");
  };
}