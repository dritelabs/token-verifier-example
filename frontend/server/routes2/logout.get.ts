// End the session associated with the given ID token.
import { logout } from "~/server/services/logout";

export default defineEventHandler((event) => {
  logout();
});
