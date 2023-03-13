import { UserController } from "../controllers/client-controller";

interface DefineUserRoute {
  userController: UserController;
}

export function defineUserRoute({ userController }: DefineUserRoute) {
  return {
    create: userController.create,
  };
}

export type UserRoute = ReturnType<typeof defineUserRoute>;
