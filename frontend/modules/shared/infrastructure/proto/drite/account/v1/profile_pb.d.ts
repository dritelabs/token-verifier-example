// package: drite.account.v1
// file: drite/account/v1/profile.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as drite_account_v1_gender_pb from "./gender_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Profile extends jspb.Message {
  getId(): string;
  setId(value: string): Profile;
  getUserId(): string;
  setUserId(value: string): Profile;

  hasBirthdate(): boolean;
  clearBirthdate(): void;
  getBirthdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthdate(value?: google_protobuf_timestamp_pb.Timestamp): Profile;
  getGender(): drite_account_v1_gender_pb.Gender;
  setGender(value: drite_account_v1_gender_pb.Gender): Profile;
  getLocale(): string;
  setLocale(value: string): Profile;
  getGivenName(): string;
  setGivenName(value: string): Profile;
  getMiddleName(): string;
  setMiddleName(value: string): Profile;
  getNickname(): string;
  setNickname(value: string): Profile;
  getProfile(): string;
  setProfile(value: string): Profile;
  getPicture(): string;
  setPicture(value: string): Profile;
  getWebsite(): string;
  setWebsite(value: string): Profile;
  getZoneinfo(): string;
  setZoneinfo(value: string): Profile;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Profile;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Profile,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(
    message: Profile,
    reader: jspb.BinaryReader
  ): Profile;
}

export namespace Profile {
  export type AsObject = {
    id: string;
    userId: string;
    birthdate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    gender: drite_account_v1_gender_pb.Gender;
    locale: string;
    givenName: string;
    middleName: string;
    nickname: string;
    profile: string;
    picture: string;
    website: string;
    zoneinfo: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class UpdateProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateProfileRequest;

  hasBirthdate(): boolean;
  clearBirthdate(): void;
  getBirthdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthdate(
    value?: google_protobuf_timestamp_pb.Timestamp
  ): UpdateProfileRequest;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): drite_account_v1_gender_pb.Gender | undefined;
  setGender(value: drite_account_v1_gender_pb.Gender): UpdateProfileRequest;

  hasLocale(): boolean;
  clearLocale(): void;
  getLocale(): string | undefined;
  setLocale(value: string): UpdateProfileRequest;

  hasGivenName(): boolean;
  clearGivenName(): void;
  getGivenName(): string | undefined;
  setGivenName(value: string): UpdateProfileRequest;

  hasMiddleName(): boolean;
  clearMiddleName(): void;
  getMiddleName(): string | undefined;
  setMiddleName(value: string): UpdateProfileRequest;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string | undefined;
  setNickname(value: string): UpdateProfileRequest;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): string | undefined;
  setProfile(value: string): UpdateProfileRequest;

  hasPicture(): boolean;
  clearPicture(): void;
  getPicture(): string | undefined;
  setPicture(value: string): UpdateProfileRequest;

  hasWebsite(): boolean;
  clearWebsite(): void;
  getWebsite(): string | undefined;
  setWebsite(value: string): UpdateProfileRequest;

  hasZoneinfo(): boolean;
  clearZoneinfo(): void;
  getZoneinfo(): string | undefined;
  setZoneinfo(value: string): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateProfileRequest
  ): UpdateProfileRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: UpdateProfileRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(
    message: UpdateProfileRequest,
    reader: jspb.BinaryReader
  ): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    id: string;
    birthdate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    gender?: drite_account_v1_gender_pb.Gender;
    locale?: string;
    givenName?: string;
    middleName?: string;
    nickname?: string;
    profile?: string;
    picture?: string;
    website?: string;
    zoneinfo?: string;
  };
}
