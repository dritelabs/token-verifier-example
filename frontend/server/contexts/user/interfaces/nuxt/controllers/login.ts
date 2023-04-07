import { DefineHandler } from "./types";
import { H3Event } from "h3";

export function defineHandler({ userUseCases }: DefineHandler) {
  return async function handler(event: H3Event) {
    const body = await readRawBody(event);
    const params = new URLSearchParams(body);

    const response = await userUseCases.login({
      email: params.get("email")!,
      password: params.get("password")!,
    });

    event.context.session.user = response;

    await event.context.session.save();

    return {};
  };
}
