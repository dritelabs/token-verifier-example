// Return claims about the authenticated end user.

import { getUserinfo } from "~/server/services/get-userinfo";

export default defineEventHandler((event) => {
  getUserinfo();
});
