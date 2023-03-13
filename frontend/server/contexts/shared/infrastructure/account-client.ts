import { credentials } from "@grpc/grpc-js";
import { AccountServiceClient } from "~~/server/contexts/shared/infrastructure/proto/drite/account/v1/account_grpc_pb";

export const accountClient = new AccountServiceClient(
  "localhost:5001",
  credentials.createInsecure()
);
