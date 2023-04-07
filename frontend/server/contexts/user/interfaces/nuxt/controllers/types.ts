import { defineUserUseCases } from "../../../application/use-cases";

export interface DefineController {
  userUseCases: ReturnType<typeof defineUserUseCases>;
}

export interface DefineHandler {
  userUseCases: ReturnType<typeof defineUserUseCases>;
}
