// package: drite.account.v1
// file: drite/account/v1/client_approval.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ClientApproval extends jspb.Message { 
    getId(): string;
    setId(value: string): ClientApproval;
    getUserId(): string;
    setUserId(value: string): ClientApproval;
    getClientId(): string;
    setClientId(value: string): ClientApproval;
    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): ClientApproval;
    addScopes(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClientApproval;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ClientApproval;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientApproval.AsObject;
    static toObject(includeInstance: boolean, msg: ClientApproval): ClientApproval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientApproval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientApproval;
    static deserializeBinaryFromReader(message: ClientApproval, reader: jspb.BinaryReader): ClientApproval;
}

export namespace ClientApproval {
    export type AsObject = {
        id: string,
        userId: string,
        clientId: string,
        scopesList: Array<string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
