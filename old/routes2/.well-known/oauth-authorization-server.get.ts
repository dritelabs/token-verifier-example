import { getAuthorizationServerMetadata } from "~/server/services/get-authorization-server-metadata";

// Return OAuth 2.0 metadata related to the specified authorization server.
export default defineEventHandler(() => getAuthorizationServerMetadata());
