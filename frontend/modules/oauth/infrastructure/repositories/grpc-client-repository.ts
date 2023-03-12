import { promisify } from "node:util";
import { Metadata } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { accountClient } from "~/modules/shared/infrastructure/account-client";
import {
  CreateClientRequest,
  DeleteClientRequest,
  GetClientRequest,
  UpdateClientRequest,
  Client as ClientMessage,
} from "~/modules/shared/infrastructure/proto/drite/account/v1/client_pb";
import { UserRepository } from "~/modules/user/domain/repositories/user-repository";
import { ClientSerializer } from "../../domain/serializers/client-serializer";
import { ClientRepository } from "../../domain/repositories/client-repository";

interface DefineGRPCClientRepository {
  clientSerializer: ClientSerializer<ClientMessage>;
}

export function defineGRPCUserRepository({
  clientSerializer,
}: DefineGRPCClientRepository): ClientRepository {
  return {
    async create(entity) {
      const request = new CreateClientRequest();
      const metadata = new Metadata();
      const response = await createClient(request, metadata);

      return clientSerializer.serializeToEntity(response);
    },
    async delete(entity) {
      const request = new DeleteClientRequest();
      const metadata = new Metadata();
      await deleteClient(request, metadata);

      return;
    },
    async get(entity) {
      const request = new GetClientRequest();
      const metadata = new Metadata();
      const response = await getClient(request, metadata);

      return clientSerializer.serializeToEntity(response);
    },
    async query(entity) {
      const request = new GetClientRequest();
      const metadata = new Metadata();
      const response = await getClient(request, metadata);

      return clientSerializer.serializeToEntity(response);
    },
    async update(entity) {
      throw new Error("Not implemented");
    },
  };
}

const createClient = promisify<CreateClientRequest, Metadata, ClientMessage>(
  accountClient.createClient.bind(accountClient)
);

const deleteClient = promisify<DeleteClientRequest, Metadata, Empty>(
  accountClient.deleteClient.bind(accountClient)
);

const getClient = promisify<GetClientRequest, Metadata, ClientMessage>(
  accountClient.getClient.bind(accountClient)
);

// const updateClient = promisify<UpdateClientRequest, Metadata, ClientMessage>(
//   accountClient.updateClient.bind(accountClient)
// );
