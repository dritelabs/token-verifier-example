// package: v1
// file: v1/profile.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as v1_gender_pb from "../v1/gender_pb";

export class Profile extends jspb.Message { 
    getId(): string;
    setId(value: string): Profile;
    getUserId(): string;
    setUserId(value: string): Profile;

    hasBirthdate(): boolean;
    clearBirthdate(): void;
    getBirthdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setBirthdate(value?: google_protobuf_timestamp_pb.Timestamp): Profile;
    getGender(): v1_gender_pb.Gender;
    setGender(value: v1_gender_pb.Gender): Profile;
    getLocale(): string;
    setLocale(value: string): Profile;
    getLastName(): string;
    setLastName(value: string): Profile;
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
    export type AsObject = {
        id: string,
        userId: string,
        birthdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        gender: v1_gender_pb.Gender,
        locale: string,
        lastName: string,
        middleName: string,
        nickname: string,
        profile: string,
        picture: string,
        website: string,
        zoneinfo: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
