import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

export function defineResetPassword({ userRepository }: DefineUseCase) {
  return async function resetPassword() {
    throw new Error("No implemented");
  };
}
