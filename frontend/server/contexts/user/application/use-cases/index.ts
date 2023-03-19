import { UserRepository } from "../../domain/repositories/user-repository";
import { defineChangePassword } from "./change-password";
import { defineGetUserProfile } from "./get-user-profile";
import { defineAuthenticate } from "./authenticate";
import { defineLogoutUser } from "./logout-user";
import { defineCreateUser } from "./create-user";
import { defineResetPassword } from "./reset-password";
import { defineUpdateUserProfile } from "./update-user-profile";

interface DefineUserUseCases {
  userRepository: UserRepository;
}

export function defineUserUseCases({ userRepository }: DefineUserUseCases) {
  return {
    authenticate: defineAuthenticate({ userRepository }),
    createUser: defineCreateUser({ userRepository }),
    changePassword: defineChangePassword({ userRepository }),
    getUserProfile: defineGetUserProfile({ userRepository }),
    logoutUser: defineLogoutUser({ userRepository }),
    resetPassword: defineResetPassword({ userRepository }),
    updateUserProfile: defineUpdateUserProfile({ userRepository }),
  };
}

export type UserUserCases = ReturnType<typeof defineUserUseCases>;
