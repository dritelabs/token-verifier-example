import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineUpdateUserProfile({ userRepository }: DefineUseCase) {
  return async function updateUserProfile() {
    throw new Error("No implemented");
  };
}
