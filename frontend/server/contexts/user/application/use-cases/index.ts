import { UserRepository } from "../../domain/repositories/user-repository";
import { defineChangePassword } from "./change-password";
import { defineGetUserProfile } from "./get-user-profile";
import { defineLoginUser } from "./login-user";
import { defineLogoutUser } from "./logout-user";
import { defineRegisterUser } from "./register-user";
import { defineResetPassword } from "./reset-password";
import { defineUpdateUserProfile } from "./update-user-profile";

interface DefineUserUseCases {
  userRepository: UserRepository;
}

export function defineUserUseCases({ userRepository }: DefineUserUseCases) {
  return {
    changePassword: defineChangePassword({ userRepository }),
    getUserProfile: defineGetUserProfile({ userRepository }),
    loginUser: defineLoginUser({ userRepository }),
    logoutUser: defineLogoutUser({ userRepository }),
    registerUser: defineRegisterUser({ userRepository }),
    resetPassword: defineResetPassword({ userRepository }),
    updateUserProfile: defineUpdateUserProfile({ userRepository }),
  };
}

export type UserUserCases = ReturnType<typeof defineUserUseCases>;
