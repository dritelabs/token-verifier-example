import { Profile } from "./profile";
import { BaseEntity } from "./../../../shared/domain/entities/base-entity";
import { Email, Password, Username } from "../value-objects";

export interface User extends BaseEntity {
  id?: string;
  email?: Email;
  password?: Password;
  profile?: Partial<Profile>;
  username?: Username;
}

export function create(input: User): User {
  return input;
}
