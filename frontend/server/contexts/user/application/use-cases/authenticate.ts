import { UserRepository } from "../../domain/repositories/user-repository";

interface DefineUseCase {
  userRepository: UserRepository;
}

interface Authenticate {
  email: string;
  password: string;
}

export function defineAuthenticate({ userRepository }: DefineUseCase) {
  return async function loginUser(input: Authenticate) {
    return userRepository.authenticate(input);
  };
}
