import { DefineHandler } from "./types";
import { H3Event } from "h3";

export function defineHandler({ userUseCases }: DefineHandler) {
  return function handler(event: H3Event) {
    return userUseCases.listUsers();
  };
}
