import { TokenResponse } from "~~/server/contexts/shared/infrastructure/proto/drite/account/v1/token_pb";
import { TokenSerializer } from "~~/server/contexts/oauth/domain/serializers/token-serializer";
import { User as UserMessage } from "~/server/contexts/shared/infrastructure/proto/drite/account/v1/user_pb";
import { UserSerializer } from "../../domain/serializers/user-serializer";

export interface DefineUserRepository {
  tokenSerializer: TokenSerializer<TokenResponse>;
  userSerializer: UserSerializer<UserMessage>;
  context: any;
}
