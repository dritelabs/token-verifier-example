import { BaseSerializer } from "./../../../shared/domain/serializers/base-serializer";
import { User } from "../entities/user";

export interface UserSerializer<Input> extends BaseSerializer<Input, User> {}
