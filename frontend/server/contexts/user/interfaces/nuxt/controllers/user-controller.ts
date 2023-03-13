import { H3Event } from "h3";
import { UserUserCases } from "../../../application/use-cases";

interface DefineUserController {
  userUserCases: UserUserCases;
}

export type UserController = ReturnType<typeof defineUserController>;

function defineCreateController({ userUserCases }: DefineUserController) {
  return async function create(event: H3Event) {
    const body = await readBody(event);
    return userUserCases.registerUser();
  };
}

export function defineUserController({ userUserCases }: DefineUserController) {
  return { create: defineCreateController({ userUserCases }) };
}
