import { credentials } from "@grpc/grpc-js";
import { AccountClient } from "../proto/v1/account_grpc_pb";

export const client = new AccountClient(
  "localhost:5001",
  credentials.createInsecure()
);
