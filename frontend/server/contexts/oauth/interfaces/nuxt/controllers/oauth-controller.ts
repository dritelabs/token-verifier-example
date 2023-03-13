import { ServiceError } from "@grpc/grpc-js";
import { H3Event } from "h3";
import { OAuthUseCases } from "../../../application/use-cases";

interface DefineOAuthController {
  oauthUseCases: OAuthUseCases;
}

export type OAuthController = ReturnType<typeof defineOAuthController>;

function defineAuthorizeController({ oauthUseCases }: DefineOAuthController) {
  return async function authorize(event: H3Event) {
    try {
      const isGet = event.node.req.method?.toUpperCase() === "GET";
      const isAuthorize = event.node.req.url?.includes("authorize");

      if (isGet && isAuthorize) {
        const query = getQuery(event);
        const response = await oauthUseCases.authorize({
          clientId: query["client_id"] as string,
          codeChallenge: query["code_challenge"] as string,
          codeChallengeMethod: query["code_challenge_method"] as string,
          redirectUri: query["redirect_uri"] as string,
          responseType: query["response_type"] as string,
          scope: query["scope"] as string,
          state: query["state"] as string,
        });

        event.context.client = response.client;
        event.context.scopes = response.scopes;
      }
    } catch (e) {
      const error = e as ServiceError;

      return {
        error: error.details,
        error_description: "",
      };
    }
  };
}

function defineCreateAuthorization({ oauthUseCases }: DefineOAuthController) {
  return async function createAuthorization(event: H3Event) {
    try {
      const body = await readRawBody(event);
      const request = new URLSearchParams(body);

      return await oauthUseCases.createAuthorization({
        clientId: request.get("client_id")!,
        codeChallenge: request.get("code_challenge")!,
        codeChallengeMethod: request.get("code_challenge_method")!,
        redirectUri: request.get("redirect_uri")!,
        responseType: request.get("response_type")!,
        scope: request.get("scope")!,
        state: request.get("state")!,
      });
    } catch (e) {
      const error = e as ServiceError;

      return {
        error: error.details,
        error_description: "",
      };
    }
  };
}

function defineJWKSController({ oauthUseCases }: DefineOAuthController) {
  return async function jwks() {
    return oauthUseCases.jwks();
  };
}

export function defineOAuthController({
  oauthUseCases,
}: DefineOAuthController) {
  return {
    authorize: defineAuthorizeController({ oauthUseCases }),
    createAuthorization: defineCreateAuthorization({ oauthUseCases }),
    jwks: defineJWKSController({ oauthUseCases }),
  };
}
