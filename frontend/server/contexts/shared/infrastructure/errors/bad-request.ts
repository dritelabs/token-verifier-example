import { OAuthError, IOAuthError } from "./oauth-error";

export class BadRequest extends OAuthError {
  name: string;

  constructor(error: IOAuthError) {
    super(error);
    this.name = "BadRequest";
  }
}
