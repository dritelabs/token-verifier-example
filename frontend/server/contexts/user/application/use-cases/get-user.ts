import { DefineUseCase } from "./types";

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function useCase(input: string) {
    return userRepository.findById(input);
  };
}
