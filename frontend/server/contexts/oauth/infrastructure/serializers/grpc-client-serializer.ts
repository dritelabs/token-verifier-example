import { Client } from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/client_pb";
import { ClientSerializer } from "~/server/contexts/oauth/domain/serializers/client-serializer";

export function defineGRPCClientSerializer(): ClientSerializer<Client> {
  return {
    serializeToEntity(input) {
      return {
        id: input.getId(),
        profile: {},
      };
    },
  };
}
