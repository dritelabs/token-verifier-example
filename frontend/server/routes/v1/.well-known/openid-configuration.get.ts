// Return OpenID Connect metadata related to the specified authorization server.
import { getOpenidMetadata } from "~~/server/services/get-openid-metadata";

export default defineEventHandler(getOpenidMetadata);
