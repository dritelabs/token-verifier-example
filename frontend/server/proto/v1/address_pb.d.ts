// package: v1
// file: v1/address.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Address extends jspb.Message { 
    getId(): string;
    setId(value: string): Address;
    getUserId(): string;
    setUserId(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getCountry(): string;
    setCountry(value: string): Address;
    getLine1(): string;
    setLine1(value: string): Address;
    getLine2(): string;
    setLine2(value: string): Address;
    getPhoneNumber(): string;
    setPhoneNumber(value: string): Address;
    getPostalCode(): number;
    setPostalCode(value: number): Address;
    getRegion(): string;
    setRegion(value: string): Address;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Address;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        id: string,
        userId: string,
        city: string,
        country: string,
        line1: string,
        line2: string,
        phoneNumber: string,
        postalCode: number,
        region: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
