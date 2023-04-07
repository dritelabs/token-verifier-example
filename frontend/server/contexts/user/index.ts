import awilix from "awilix";
import { defineTokenSerializer } from "../oauth/infrastructure/serializers/grpc-access-serializer";
import { defineUserUseCases } from "./application/use-cases";
import { defineUserRepository } from "./infrastructure/repositories/grpc-user-repository";
import { defineUserSerializer } from "./infrastructure/serializers/grpc-user-serializer";
import { defineUserController } from "./interfaces/nuxt/controllers";

export const container = awilix.createContainer<{
  tokenSerializer: ReturnType<typeof defineTokenSerializer>;
  userSerializer: ReturnType<typeof defineUserSerializer>;
  userRepository: ReturnType<typeof defineUserRepository>;
  userUseCases: ReturnType<typeof defineUserUseCases>;
  userController: ReturnType<typeof defineUserController>;
  context?: any;
}>({
  injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
  tokenSerializer: awilix.asFunction(defineTokenSerializer),
  userSerializer: awilix.asFunction(defineUserSerializer),
  userRepository: awilix.asFunction(defineUserRepository).scoped(),
  userUseCases: awilix.asFunction(defineUserUseCases),
  userController: awilix.asFunction(defineUserController),
  context: awilix.asValue({}),
});

export type UserModule = typeof container;
