import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

interface GetUserInfoInput {
  userId: string;
}

export function defineGetUserProfile({ userRepository }: DefineUseCase) {
  return async function getUserProfile(input: GetUserInfoInput) {
    return userRepository.get({
      id: input.userId,
    });
  };
}
