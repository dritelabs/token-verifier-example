export interface AuthorizationRequest {
  clientId: string;
  codeChallenge: string;
  codeChallengeMethod?: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}
