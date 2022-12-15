// package: v1
// file: v1/jwk.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Jwk extends jspb.Message { 
    getId(): string;
    setId(value: string): Jwk;
    getClientId(): string;
    setClientId(value: string): Jwk;

    hasJwk(): boolean;
    clearJwk(): void;
    getJwk(): google_protobuf_any_pb.Any | undefined;
    setJwk(value?: google_protobuf_any_pb.Any): Jwk;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): Jwk;
    addScopes(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Jwk;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Jwk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Jwk.AsObject;
    static toObject(includeInstance: boolean, msg: Jwk): Jwk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Jwk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Jwk;
    static deserializeBinaryFromReader(message: Jwk, reader: jspb.BinaryReader): Jwk;
}

export namespace Jwk {
    export type AsObject = {
        id: string,
        clientId: string,
        jwk?: google_protobuf_any_pb.Any.AsObject,
        scopesList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetJwksRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJwksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJwksRequest): GetJwksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJwksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJwksRequest;
    static deserializeBinaryFromReader(message: GetJwksRequest, reader: jspb.BinaryReader): GetJwksRequest;
}

export namespace GetJwksRequest {
    export type AsObject = {
    }
}
