import { H3Event } from "h3";
import { OAuthUseCases } from "../../../application/use-cases";

interface DefineOAuthController {
  oauthUseCases: OAuthUseCases;
}

export type OAuthController = ReturnType<typeof defineOAuthController>;

function defineCreateTokenController({ oauthUseCases }: DefineOAuthController) {
  return async function create(event: H3Event) {
    const body = await readBody(event);

    oauthUseCases.token({
      userId: "",
    });
  };
}

export function defineOAuthController({
  oauthUseCases,
}: DefineOAuthController) {
  return {
    createToken: defineCreateTokenController({ oauthUseCases }),
  };
}
