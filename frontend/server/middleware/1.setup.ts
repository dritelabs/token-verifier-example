import { defineUserContainer } from "../contexts/user/interfaces/nuxt/define-container";

export default defineEventHandler((event) => {
  const { userService } = defineUserContainer(event);

  event.context.userService = userService;
});
