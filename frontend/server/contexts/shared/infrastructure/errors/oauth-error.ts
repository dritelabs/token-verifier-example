export interface IOAuthError {
  error: string;
  description: string;
}

export class OAuthError extends Error {
  error: string;
  error_description: string;

  constructor(error: IOAuthError) {
    super(error.error);
    this.error = error.error;
    this.error_description = error.description;
  }
}
