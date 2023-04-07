import { UserRepository } from "../../domain/repositories/user-repository";

export interface DefineUseCase {
  userRepository: UserRepository;
}
