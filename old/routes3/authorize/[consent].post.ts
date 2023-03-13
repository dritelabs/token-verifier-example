import { createAuthorization } from "~~/server/services2/create-authorization";

export default defineEventHandler(async (event) => {
  const body = await readRawBody(event);
  const consent = event.context?.params?.consent;
  const params = new URLSearchParams(body as string);
  const redirectUri = await createAuthorization({ ...params, consent });

  sendRedirect(event, redirectUri);
});
