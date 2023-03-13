import { defineOAuthUseCases } from "../../application/use-cases";
import { defineGRPCOAuthRepository } from "../../infrastructure/repositories/grpc-oauth-repository";
import { defineGRPCOAuthSerializer } from "../../infrastructure/serializers/grpc-oauth-serializer";
import { defineOAuthController } from "./controllers/oauth-controller";

export function bootstrap() {
  const serializer = defineGRPCOAuthSerializer();
  const repository = defineGRPCOAuthRepository({ oauthSerializer: serializer });
  const useCases = defineOAuthUseCases({ oauthRepository: repository });
  const controller = defineOAuthController({ oauthUseCases: useCases });

  return {
    controller,
  };
}

export const oauth = bootstrap();
