import { OAuthError, IOAuthError } from "./oauth-error";

export class ServerError extends OAuthError {
  name: string;

  constructor(error: IOAuthError) {
    super(error);
    this.name = "ServerError";
  }
}
