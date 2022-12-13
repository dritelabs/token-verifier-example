// package: v1
// file: v1/jwk.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class JWK extends jspb.Message { 
    getId(): string;
    setId(value: string): JWK;
    getClientId(): string;
    setClientId(value: string): JWK;

    hasJwk(): boolean;
    clearJwk(): void;
    getJwk(): google_protobuf_any_pb.Any | undefined;
    setJwk(value?: google_protobuf_any_pb.Any): JWK;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): JWK;
    addScopes(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): JWK;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): JWK;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JWK.AsObject;
    static toObject(includeInstance: boolean, msg: JWK): JWK.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JWK, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JWK;
    static deserializeBinaryFromReader(message: JWK, reader: jspb.BinaryReader): JWK;
}

export namespace JWK {
    export type AsObject = {
        id: string,
        clientId: string,
        jwk?: google_protobuf_any_pb.Any.AsObject,
        scopesList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
