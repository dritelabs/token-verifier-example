import { DefineUseCase } from "./types";

export function defineUseCase({ userRepository }: DefineUseCase) {
  return async function useCase() {
    return userRepository.findAll({});
  };
}
