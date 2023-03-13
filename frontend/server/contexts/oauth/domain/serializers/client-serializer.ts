import { BaseSerializer } from "../../../shared/domain/serializers/base-serializer";
import { Client } from "../entities/client";

export interface ClientSerializer<Input>
  extends BaseSerializer<Input, Client> {}
