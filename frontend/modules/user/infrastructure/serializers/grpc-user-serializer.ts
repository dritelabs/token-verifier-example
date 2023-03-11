import { BaseSerializer } from "~/modules/shared/domain/serializers/base-serializer";
import { User as UserMessage } from "~/modules/shared/infrastructure/proto/drite/account/v1/user_pb";
import { User } from "~/modules/user/domain/entities/user";

export function defineGRPCUserSerializer(): BaseSerializer<UserMessage, User> {
  return {
    serializeToEntity(input) {
      return {
        id: input.getId(),
        profile: {},
      };
    },
  };
}
