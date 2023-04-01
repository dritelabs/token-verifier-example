import { H3Event } from "h3";
import { defineGRPCTokenSerializer } from "../../../oauth/infrastructure/serializers/grpc-access-serializer";
import { defineUserService } from "../../application/services/user-service";
import { defineGRPCUserRepository } from "../../infrastructure/repositories/grpc-user-repository";
import { defineGRPCUserSerializer } from "../../infrastructure/serializers/grpc-user-serializer";

export function defineUserContainer(context: H3Event) {
  const tokenSerializer = defineGRPCTokenSerializer();
  const userSerializer = defineGRPCUserSerializer();
  const userRepository = defineGRPCUserRepository(
    {
      userSerializer,
      tokenSerializer,
    },
    context
  );

  const userService = defineUserService({ userRepository }, context);

  return {
    userService,
  };
}
