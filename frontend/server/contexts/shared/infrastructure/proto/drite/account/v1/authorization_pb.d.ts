// package: drite.account.v1
// file: drite/account/v1/authorization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as drite_account_v1_client_pb from "../../../drite/account/v1/client_pb";
import * as drite_account_v1_code_challenge_method_pb from "../../../drite/account/v1/code_challenge_method_pb";
import * as drite_account_v1_scope_pb from "../../../drite/account/v1/scope_pb";

export class AuthorizeResponse extends jspb.Message { 

    hasClient(): boolean;
    clearClient(): void;
    getClient(): drite_account_v1_client_pb.Client | undefined;
    setClient(value?: drite_account_v1_client_pb.Client): AuthorizeResponse;
    clearScopesList(): void;
    getScopesList(): Array<drite_account_v1_scope_pb.Scope>;
    setScopesList(value: Array<drite_account_v1_scope_pb.Scope>): AuthorizeResponse;
    addScopes(value?: drite_account_v1_scope_pb.Scope, index?: number): drite_account_v1_scope_pb.Scope;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizeResponse): AuthorizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizeResponse;
    static deserializeBinaryFromReader(message: AuthorizeResponse, reader: jspb.BinaryReader): AuthorizeResponse;
}

export namespace AuthorizeResponse {
    export type AsObject = {
        client?: drite_account_v1_client_pb.Client.AsObject,
        scopesList: Array<drite_account_v1_scope_pb.Scope.AsObject>,
    }
}

export class AuthorizationRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): AuthorizationRequest;
    getCodeChallenge(): string;
    setCodeChallenge(value: string): AuthorizationRequest;

    hasCodeChallengeMethod(): boolean;
    clearCodeChallengeMethod(): void;
    getCodeChallengeMethod(): drite_account_v1_code_challenge_method_pb.CodeChallengeMethod | undefined;
    setCodeChallengeMethod(value: drite_account_v1_code_challenge_method_pb.CodeChallengeMethod): AuthorizationRequest;
    getRedirectUri(): string;
    setRedirectUri(value: string): AuthorizationRequest;

    hasScope(): boolean;
    clearScope(): void;
    getScope(): string | undefined;
    setScope(value: string): AuthorizationRequest;

    hasState(): boolean;
    clearState(): void;
    getState(): string | undefined;
    setState(value: string): AuthorizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationRequest): AuthorizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationRequest;
    static deserializeBinaryFromReader(message: AuthorizationRequest, reader: jspb.BinaryReader): AuthorizationRequest;
}

export namespace AuthorizationRequest {
    export type AsObject = {
        clientId: string,
        codeChallenge: string,
        codeChallengeMethod?: drite_account_v1_code_challenge_method_pb.CodeChallengeMethod,
        redirectUri: string,
        scope?: string,
        state?: string,
    }
}

export class AuthorizationResponse extends jspb.Message { 
    getRedirectUri(): string;
    setRedirectUri(value: string): AuthorizationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationResponse): AuthorizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationResponse;
    static deserializeBinaryFromReader(message: AuthorizationResponse, reader: jspb.BinaryReader): AuthorizationResponse;
}

export namespace AuthorizationResponse {
    export type AsObject = {
        redirectUri: string,
    }
}
