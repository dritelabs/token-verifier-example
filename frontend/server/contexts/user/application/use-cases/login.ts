import { DefineUseCase } from "./types";

interface Input {
  email: string;
  password: string;
}

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function useCase(input: Input) {
    return userRepository.authenticate({
      email: input.email,
      password: input.password,
    });
  };
}
