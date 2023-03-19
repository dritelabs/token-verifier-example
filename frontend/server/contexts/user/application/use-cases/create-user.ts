import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

interface CreateUser {}

export function defineCreateUser({ userRepository }: DefineUseCase) {
  return async function createUser(input: CreateUser) {
    return userRepository.save(input);
  };
}
