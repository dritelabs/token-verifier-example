import { OAuthError } from "./../../../../shared/infrastructure/errors/oauth-error";
import { H3Event } from "h3";

export async function createUser(event: H3Event) {
  return event.context.userService.create({
    email: "",
    givenName: "",
    middleName: "",
    password: "",
  });
}

export async function login(event: H3Event) {
  try {
    const body = await readRawBody(event);
    const request = new URLSearchParams(body);

    const response = await event.context.userService.authenticate({
      email: request.get("email")!,
      password: request.get("password")!,
    });

    event.context.session.user = response;

    await event.context.session.save();

    sendRedirect(event, "/");

    return response;
  } catch (error) {
    if (error instanceof OAuthError) {
      const params = new URLSearchParams(error as any);
      return sendRedirect(event, `/signin?${params.toString()}`);
    }
  }
}

export async function logout(event: H3Event) {
  await event.context.session.destroy();
}
