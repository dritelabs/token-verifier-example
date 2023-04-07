import { defineHandler as defineCreateHandler } from "./create-user";
import { defineHandler as defineLoginHandler } from "./login";
import { defineHandler as defineLogoutHandler } from "./logout";
import { defineHandler as defineListUsersHandler } from "./list-users";
import { DefineController } from "./types";

export function defineUserController({ userUseCases }: DefineController) {
  return {
    create: defineCreateHandler({ userUseCases }),
    listUsers: defineListUsersHandler({ userUseCases }),
    login: defineLoginHandler({ userUseCases }),
    logout: defineLogoutHandler({ userUseCases }),
  };
}
