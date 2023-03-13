import { BaseRepository } from "~~/server/contexts/shared/domain/repositories/base-repository";
import { Client } from "../entities/client";

export interface ClientRepository extends BaseRepository<Client> {}
