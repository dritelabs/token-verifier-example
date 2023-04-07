import { defineUseCase as defineCreateUserUseCase } from "./create-user";
import { defineUseCase as defineGetUserUseCase } from "./get-user";
import { defineUseCase as defineLoginUserUseCase } from "./login";
import { defineUseCase as defineListUsersUseCase } from "./list-users";
import { DefineUseCase } from "./types";

export function defineUserUseCases({ userRepository }: DefineUseCase) {
  return {
    createUser: defineCreateUserUseCase({ userRepository }),
    getUser: defineGetUserUseCase({ userRepository }),
    login: defineLoginUserUseCase({ userRepository }),
    listUsers: defineListUsersUseCase({ userRepository }),
  };
}
