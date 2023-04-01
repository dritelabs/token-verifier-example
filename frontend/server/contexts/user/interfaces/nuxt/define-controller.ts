import { H3Event } from "h3";
import { defineUserContainer } from "./define-container";

export function defineController(handler: <T>(event: H3Event) => Promise<T>) {
  return function controller(event: H3Event) {
    return handler(event);
  };
}
