// package: drite.account.v1
// file: drite/account/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as drite_account_v1_client_pb from "./client_pb";
import * as drite_account_v1_client_approval_pb from "./client_approval_pb";
import * as drite_account_v1_profile_pb from "./profile_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;
  getBlocked(): boolean;
  setBlocked(value: boolean): User;
  clearClientsList(): void;
  getClientsList(): Array<drite_account_v1_client_pb.Client>;
  setClientsList(value: Array<drite_account_v1_client_pb.Client>): User;
  addClients(
    value?: drite_account_v1_client_pb.Client,
    index?: number
  ): drite_account_v1_client_pb.Client;
  clearClientApprovalsList(): void;
  getClientApprovalsList(): Array<drite_account_v1_client_approval_pb.ClientApproval>;
  setClientApprovalsList(
    value: Array<drite_account_v1_client_approval_pb.ClientApproval>
  ): User;
  addClientApprovals(
    value?: drite_account_v1_client_approval_pb.ClientApproval,
    index?: number
  ): drite_account_v1_client_approval_pb.ClientApproval;
  getEmail(): string;
  setEmail(value: string): User;
  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): User;
  getLastIp(): string;
  setLastIp(value: string): User;

  hasLastLogin(): boolean;
  clearLastLogin(): void;
  getLastLogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastLogin(value?: google_protobuf_timestamp_pb.Timestamp): User;

  hasLastPasswordReset(): boolean;
  clearLastPasswordReset(): void;
  getLastPasswordReset(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPasswordReset(value?: google_protobuf_timestamp_pb.Timestamp): User;
  getLoginsCount(): number;
  setLoginsCount(value: number): User;
  getPassword(): string;
  setPassword(value: string): User;
  getPhoneNumber(): string;
  setPhoneNumber(value: string): User;
  getPhoneNumberVerified(): boolean;
  setPhoneNumberVerified(value: boolean): User;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): drite_account_v1_profile_pb.Profile | undefined;
  setProfile(value?: drite_account_v1_profile_pb.Profile): User;
  getUsername(): string;
  setUsername(value: string): User;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: User,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(
    message: User,
    reader: jspb.BinaryReader
  ): User;
}

export namespace User {
  export type AsObject = {
    id: string;
    blocked: boolean;
    clientsList: Array<drite_account_v1_client_pb.Client.AsObject>;
    clientApprovalsList: Array<drite_account_v1_client_approval_pb.ClientApproval.AsObject>;
    email: string;
    emailVerified: boolean;
    lastIp: string;
    lastLogin?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    lastPasswordReset?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    loginsCount: number;
    password: string;
    phoneNumber: string;
    phoneNumberVerified: boolean;
    profile?: drite_account_v1_profile_pb.Profile.AsObject;
    username: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class AuthenticateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AuthenticateUserRequest;
  getPassword(): string;
  setPassword(value: string): AuthenticateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AuthenticateUserRequest
  ): AuthenticateUserRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AuthenticateUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateUserRequest;
  static deserializeBinaryFromReader(
    message: AuthenticateUserRequest,
    reader: jspb.BinaryReader
  ): AuthenticateUserRequest;
}

export namespace AuthenticateUserRequest {
  export type AsObject = {
    email: string;
    password: string;
  };
}

export class AuthenticateUserResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): AuthenticateUserResponse;
  getRefreshToken(): string;
  setRefreshToken(value: string): AuthenticateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateUserResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AuthenticateUserResponse
  ): AuthenticateUserResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: AuthenticateUserResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateUserResponse;
  static deserializeBinaryFromReader(
    message: AuthenticateUserResponse,
    reader: jspb.BinaryReader
  ): AuthenticateUserResponse;
}

export namespace AuthenticateUserResponse {
  export type AsObject = {
    accessToken: string;
    refreshToken: string;
  };
}

export class CreateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateUserRequest;
  getGivenName(): string;
  setGivenName(value: string): CreateUserRequest;
  getMiddleName(): string;
  setMiddleName(value: string): CreateUserRequest;
  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateUserRequest
  ): CreateUserRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(
    message: CreateUserRequest,
    reader: jspb.BinaryReader
  ): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    email: string;
    givenName: string;
    middleName: string;
    password: string;
  };
}

export class DeleteUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteUserRequest
  ): DeleteUserRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: DeleteUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(
    message: DeleteUserRequest,
    reader: jspb.BinaryReader
  ): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetUserRequest
  ): GetUserRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(
    message: GetUserRequest,
    reader: jspb.BinaryReader
  ): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id: string;
  };
}

export class ListUsersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListUsersRequest;
  getPageSize(): number;
  setPageSize(value: number): ListUsersRequest;
  getPageToken(): string;
  setPageToken(value: string): ListUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListUsersRequest
  ): ListUsersRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListUsersRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(
    message: ListUsersRequest,
    reader: jspb.BinaryReader
  ): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    parent: string;
    pageSize: number;
    pageToken: string;
  };
}

export class ListUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): ListUsersResponse;
  addUsers(value?: User, index?: number): User;
  getNextPageToken(): string;
  setNextPageToken(value: string): ListUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListUsersResponse
  ): ListUsersResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListUsersResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(
    message: ListUsersResponse,
    reader: jspb.BinaryReader
  ): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>;
    nextPageToken: string;
  };
}

export class UpdateUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateUserRequest;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): UpdateUserRequest;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): UpdateUserRequest;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): string | undefined;
  setPhoneNumber(value: string): UpdateUserRequest;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): UpdateUserRequest;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): drite_account_v1_profile_pb.UpdateProfileRequest | undefined;
  setProfile(
    value?: drite_account_v1_profile_pb.UpdateProfileRequest
  ): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateUserRequest
  ): UpdateUserRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UpdateUserRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(
    message: UpdateUserRequest,
    reader: jspb.BinaryReader
  ): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    id: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    username?: string;
    profile?: drite_account_v1_profile_pb.UpdateProfileRequest.AsObject;
  };
}
