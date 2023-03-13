import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineLoginUser({ userRepository }: DefineUseCase) {
  return async function loginUser() {
    throw new Error("No implemented");
  };
}
