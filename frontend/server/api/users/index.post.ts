import { user } from "~/server/contexts/user/interfaces/nuxt/bootstrap";

export default defineEventHandler(user.controller.create);
