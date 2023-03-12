import { defineUserUseCases } from "../application/use-cases";
import { defineGRPCUserRepository } from "../infrastructure/repositories/grpc-oauth-repository";
import { defineGRPCUserSerializer } from "../infrastructure/serializers/grpc-client-serializer";
import { defineUserController } from "./controllers/client-controller";
import { defineUserRoute } from "./routes/client-routes";

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
