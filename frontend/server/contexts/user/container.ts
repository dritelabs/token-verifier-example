import { defineGRPCTokenSerializer } from "../oauth/infrastructure/serializers/grpc-access-serializer";
import { defineUserUseCases } from "./application/use-cases";
import { defineGRPCUserRepository } from "./infrastructure/repositories/grpc-user-repository";
import { defineGRPCUserSerializer } from "./infrastructure/serializers/grpc-user-serializer";

export function container() {
  const tokenSerializer = defineGRPCTokenSerializer();
  const userSerializer = defineGRPCUserSerializer();
  const userRepository = defineGRPCUserRepository({
    userSerializer,
    tokenSerializer,
  });
  const useCases = defineUserUseCases({ userRepository });

  return {
    useCases,
  };
}

export const user = container();
