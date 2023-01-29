// package: v1
// file: v1/authorization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v1_code_challenge_method_pb from "../v1/code_challenge_method_pb";
import * as v1_client_pb from "../v1/client_pb";
import * as v1_scope_pb from "../v1/scope_pb";

export class AuthorizationRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): AuthorizationRequest;
    getCodeChallenge(): string;
    setCodeChallenge(value: string): AuthorizationRequest;

    hasCodeChallengeMethod(): boolean;
    clearCodeChallengeMethod(): void;
    getCodeChallengeMethod(): v1_code_challenge_method_pb.CodeChallengeMethod | undefined;
    setCodeChallengeMethod(value: v1_code_challenge_method_pb.CodeChallengeMethod): AuthorizationRequest;
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
        codeChallengeMethod?: v1_code_challenge_method_pb.CodeChallengeMethod,
        redirectUri: string,
        scope?: string,
        state?: string,
    }
}

export class AuthorizationResponse extends jspb.Message { 

    hasClient(): boolean;
    clearClient(): void;
    getClient(): v1_client_pb.Client | undefined;
    setClient(value?: v1_client_pb.Client): AuthorizationResponse;
    clearScopesList(): void;
    getScopesList(): Array<v1_scope_pb.Scope>;
    setScopesList(value: Array<v1_scope_pb.Scope>): AuthorizationResponse;
    addScopes(value?: v1_scope_pb.Scope, index?: number): v1_scope_pb.Scope;

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
        client?: v1_client_pb.Client.AsObject,
        scopesList: Array<v1_scope_pb.Scope.AsObject>,
    }
}

export class CreateAuthorizationRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): CreateAuthorizationRequest;
    getCodeChallenge(): string;
    setCodeChallenge(value: string): CreateAuthorizationRequest;

    hasCodeChallengeMethod(): boolean;
    clearCodeChallengeMethod(): void;
    getCodeChallengeMethod(): v1_code_challenge_method_pb.CodeChallengeMethod | undefined;
    setCodeChallengeMethod(value: v1_code_challenge_method_pb.CodeChallengeMethod): CreateAuthorizationRequest;
    getRedirectUri(): string;
    setRedirectUri(value: string): CreateAuthorizationRequest;

    hasScope(): boolean;
    clearScope(): void;
    getScope(): string | undefined;
    setScope(value: string): CreateAuthorizationRequest;

    hasState(): boolean;
    clearState(): void;
    getState(): string | undefined;
    setState(value: string): CreateAuthorizationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorizationRequest): CreateAuthorizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorizationRequest;
    static deserializeBinaryFromReader(message: CreateAuthorizationRequest, reader: jspb.BinaryReader): CreateAuthorizationRequest;
}

export namespace CreateAuthorizationRequest {
    export type AsObject = {
        clientId: string,
        codeChallenge: string,
        codeChallengeMethod?: v1_code_challenge_method_pb.CodeChallengeMethod,
        redirectUri: string,
        scope?: string,
        state?: string,
    }
}

export class CreateAuthorizationResponse extends jspb.Message { 
    getRedirectUri(): string;
    setRedirectUri(value: string): CreateAuthorizationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAuthorizationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAuthorizationResponse): CreateAuthorizationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAuthorizationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAuthorizationResponse;
    static deserializeBinaryFromReader(message: CreateAuthorizationResponse, reader: jspb.BinaryReader): CreateAuthorizationResponse;
}

export namespace CreateAuthorizationResponse {
    export type AsObject = {
        redirectUri: string,
    }
}
