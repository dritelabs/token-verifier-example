import type { IronSession } from "iron-session";
import { UserService } from "./server/contexts/user/domain/services/user-service";
import { TokenResponse } from "./server/contexts/oauth/domain/entities/token-response";
import { UserModule } from "./server/contexts/user";

declare module "h3" {
  interface H3EventContext {
    session: IronSession;
    userModule: UserModule;
  }
}

declare module "iron-session" {
  interface IronSessionData {
    user?: TokenResponse;
  }
}
