import { BaseSerializer } from "../../../shared/domain/serializers/base-serializer";
import { User } from "../entities/user";

export interface UserSerializer<DataTransferObjectType>
  extends BaseSerializer<User, DataTransferObjectType> {}
