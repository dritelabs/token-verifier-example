import { H3Event } from "h3";
import * as user from "../../domain/entities/user";
import * as profile from "../../domain/entities/profile";
import {
  DefineUserService,
  UserService,
} from "../../domain/services/user-service";

export function defineUserService(
  { userRepository }: DefineUserService,
  context: H3Event
): UserService {
  return {
    async authenticate(input) {
      return userRepository.authenticate(input);
    },
    async changePassword(input) {
      throw new Error("Not implemented");
    },
    async create(input) {
      const created = user.create({
        email: input.email,
        password: input.password,
        profile: profile.create({
          givenName: input.givenName,
          middleName: input.middleName,
        }),
      });

      return userRepository.save(created);
    },
    async get(input) {
      return userRepository.findOne(input.userId);
    },
    async logout() {
      throw new Error("Not implemented");
    },
    async resetPassword(input) {
      throw new Error("Not implemented");
    },
    async update(input) {
      throw new Error("Not implemented");
    },
  };
}
