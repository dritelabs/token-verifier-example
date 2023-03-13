import { BaseRepository } from "~~/server/contexts/shared/domain/repositories/base-repository";
import { User } from "../entities/user";

export interface UserRepository extends BaseRepository<User> {}
