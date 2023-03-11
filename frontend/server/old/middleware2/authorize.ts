import { ServiceError } from "@grpc/grpc-js";
import { authorize, getAuthorizationRequest } from "../services2/authorize";

export default defineEventHandler(async (event) => {
  try {
    const isGet = event.node.req.method?.toUpperCase() === "GET";
    const isAuthorize = event.node.req.url?.includes("authorize");

    if (isGet && isAuthorize) {
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
