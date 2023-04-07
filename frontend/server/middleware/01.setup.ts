import { asValue } from "awilix";
import { container } from "../contexts/user";
import { getIronSession } from "iron-session";

const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const session = await getIronSession(
    event.node.req,
    event.node.res,
    config.session
  );

  event.context.userModule = container.createScope();

  event.context.userModule.register({
    context: asValue(session?.user),
  });
});
