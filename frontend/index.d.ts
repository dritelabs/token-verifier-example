import type { IronSession } from "iron-session";
import { UserService } from "./server/contexts/user/domain/services/user-service";
import { TokenResponse } from "./server/contexts/oauth/domain/entities/token-response";

declare module "h3" {
  interface H3EventContext {
    session: IronSession;
    userService: UserService;
  }
}

declare module "iron-session" {
  interface IronSessionData {
    user?: TokenResponse;
  }
}
