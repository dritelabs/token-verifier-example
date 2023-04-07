import { container } from "../contexts/user/index";

export default defineEventHandler((event) => {
  event.context.userService = container;
});
