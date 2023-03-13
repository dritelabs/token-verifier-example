import { defineUserUseCases } from "../../application/use-cases";
import { defineGRPCUserRepository } from "../../infrastructure/repositories/grpc-user-repository";
import { defineGRPCUserSerializer } from "../../infrastructure/serializers/grpc-user-serializer";
import { defineUserController } from "./controllers/user-controller";

export function bootstrap() {
  const serializer = defineGRPCUserSerializer();
  const repository = defineGRPCUserRepository({ userSerializer: serializer });
  const useCases = defineUserUseCases({ userRepository: repository });
  const controller = defineUserController({ userUserCases: useCases });

  return {
    controller,
  };
}

export const user = bootstrap();
