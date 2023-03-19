import { BaseEntity } from "./../../../shared/domain/entities/base-entity";

export interface User extends BaseEntity {
  id?: string;
  email?: string;
  password?: string;
  profile?: Partial<Profile>;
}
