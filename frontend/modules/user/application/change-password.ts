import { UserRepository } from "../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

interface ChangePasswordInput {
  userId: string;
  currentPassword: string;
  nextPassword: string;
}

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function changePassword(input: ChangePasswordInput) {
    return userRepository.update({
      id: input.userId,
    });
  };
}
