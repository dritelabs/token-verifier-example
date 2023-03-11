// Return claims about the authenticated end user.

import { getUserinfo } from "~~/server/services2/get-userinfo";

export default defineEventHandler((event) => {
  getUserinfo();
});
