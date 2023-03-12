import { defineUserUseCases } from "../application/use-cases";
import { defineGRPCUserRepository } from "../infrastructure/repositories/grpc-user-repository";
import { defineGRPCUserSerializer } from "../infrastructure/serializers/grpc-user-serializer";
import { defineUserController } from "./controllers/user-controller";
import { defineUserRoute } from "./routes/user-routes";

export async function bootstrap() {
  const userSerializer = defineGRPCUserSerializer();
  const userRepository = defineGRPCUserRepository({ userSerializer });
  const userUserCases = defineUserUseCases({ userRepository });
  const userController = defineUserController({ userUserCases });
  const userRoute = defineUserRoute({ userController });

  return {
    userRoute,
  };
}
