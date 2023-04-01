import { TokenResponse } from "../entities/token-response";
import { BaseSerializer } from "../../../shared/domain/serializers/base-serializer";

export interface TokenSerializer<DataTransferObject>
  extends BaseSerializer<TokenResponse, DataTransferObject> {}
