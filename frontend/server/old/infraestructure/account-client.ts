import { credentials } from "@grpc/grpc-js";
import { AccountServiceClient } from "../proto/drite/account/v1/account_grpc_pb";

export const client = new AccountServiceClient(
  "localhost:5001",
  credentials.createInsecure()
);
