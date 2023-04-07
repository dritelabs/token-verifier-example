import { TokenResponse as TokenResponseMessage } from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/token_pb";
import { TokenSerializer } from "../../domain/serializers/token-serializer";

export function defineTokenSerializer(): TokenSerializer<TokenResponseMessage> {
  return {
    serializeToEntity(input) {
      return {
        access_token: input.getAccessToken(),
        expires_in: parseInt(input.getExpiresIn()),
        refresh_token: input.getRefreshToken(),
        token_type: input.getTokenType(),
        id_token: "",
      };
    },
    serializeToDataTransferObject(input) {
      throw new Error("Not implemented");
    },
  };
}
