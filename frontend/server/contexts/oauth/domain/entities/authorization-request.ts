export interface AuthorizationRequest {
  audience: string[];
  clientId: string;
  codeChallenge: string;
  codeChallengeMethod?: string;
  redirectUri: string;
  responseType: string;
  scope: string;
  state: string;
}
