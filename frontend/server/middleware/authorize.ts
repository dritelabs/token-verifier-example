import { ServiceError } from "@grpc/grpc-js";
import { authorize, getAuthorizationRequest } from "../services/authorize";

export default defineEventHandler(async (event) => {
  try {
    const isGet = event.node.req.method?.toUpperCase() === "GET";
    if (isGet && event.node.req.url?.includes("authorize")) {
      const query = getQuery(event);
      const request = getAuthorizationRequest(query);
      const res = await authorize(request);

      event.context.client = res.client;
      event.context.scopes = res.scopes;
    }
  } catch (e) {
    const error = e as ServiceError;

    return {
      error: error.details,
      error_description: "",
    };
  }
});
