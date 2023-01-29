// package: v1
// file: v1/token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as v1_grant_type_pb from "../v1/grant_type_pb";

export class TokenRequest extends jspb.Message { 
    getClientId(): string;
    setClientId(value: string): TokenRequest;
    getScope(): string;
    setScope(value: string): TokenRequest;
    getGrantType(): v1_grant_type_pb.GrantType;
    setGrantType(value: v1_grant_type_pb.GrantType): TokenRequest;

    hasAuthorizationCodeGrant(): boolean;
    clearAuthorizationCodeGrant(): void;
    getAuthorizationCodeGrant(): TokenRequest.AuthorizationCodeGrant | undefined;
    setAuthorizationCodeGrant(value?: TokenRequest.AuthorizationCodeGrant): TokenRequest;

    hasClientCredentialsGrant(): boolean;
    clearClientCredentialsGrant(): void;
    getClientCredentialsGrant(): TokenRequest.ClientCredentialsGrant | undefined;
    setClientCredentialsGrant(value?: TokenRequest.ClientCredentialsGrant): TokenRequest;

    hasRefreshTokenGrant(): boolean;
    clearRefreshTokenGrant(): void;
    getRefreshTokenGrant(): TokenRequest.RefreshTokenGrant | undefined;
    setRefreshTokenGrant(value?: TokenRequest.RefreshTokenGrant): TokenRequest;

    getGrantTypeRequestCase(): TokenRequest.GrantTypeRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TokenRequest): TokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenRequest;
    static deserializeBinaryFromReader(message: TokenRequest, reader: jspb.BinaryReader): TokenRequest;
}

export namespace TokenRequest {
    export type AsObject = {
        clientId: string,
        scope: string,
        grantType: v1_grant_type_pb.GrantType,
        authorizationCodeGrant?: TokenRequest.AuthorizationCodeGrant.AsObject,
        clientCredentialsGrant?: TokenRequest.ClientCredentialsGrant.AsObject,
        refreshTokenGrant?: TokenRequest.RefreshTokenGrant.AsObject,
    }


    export class AuthorizationCodeGrant extends jspb.Message { 
        getCode(): string;
        setCode(value: string): AuthorizationCodeGrant;
        getRedirectUri(): string;
        setRedirectUri(value: string): AuthorizationCodeGrant;
        getCodeVerifier(): string;
        setCodeVerifier(value: string): AuthorizationCodeGrant;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthorizationCodeGrant.AsObject;
        static toObject(includeInstance: boolean, msg: AuthorizationCodeGrant): AuthorizationCodeGrant.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthorizationCodeGrant, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthorizationCodeGrant;
        static deserializeBinaryFromReader(message: AuthorizationCodeGrant, reader: jspb.BinaryReader): AuthorizationCodeGrant;
    }

    export namespace AuthorizationCodeGrant {
        export type AsObject = {
            code: string,
            redirectUri: string,
            codeVerifier: string,
        }
    }

    export class ClientCredentialsGrant extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClientCredentialsGrant.AsObject;
        static toObject(includeInstance: boolean, msg: ClientCredentialsGrant): ClientCredentialsGrant.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClientCredentialsGrant, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClientCredentialsGrant;
        static deserializeBinaryFromReader(message: ClientCredentialsGrant, reader: jspb.BinaryReader): ClientCredentialsGrant;
    }

    export namespace ClientCredentialsGrant {
        export type AsObject = {
        }
    }

    export class RefreshTokenGrant extends jspb.Message { 
        getRefreshToken(): string;
        setRefreshToken(value: string): RefreshTokenGrant;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RefreshTokenGrant.AsObject;
        static toObject(includeInstance: boolean, msg: RefreshTokenGrant): RefreshTokenGrant.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RefreshTokenGrant, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RefreshTokenGrant;
        static deserializeBinaryFromReader(message: RefreshTokenGrant, reader: jspb.BinaryReader): RefreshTokenGrant;
    }

    export namespace RefreshTokenGrant {
        export type AsObject = {
            refreshToken: string,
        }
    }


    export enum GrantTypeRequestCase {
        GRANT_TYPE_REQUEST_NOT_SET = 0,
        AUTHORIZATION_CODE_GRANT = 4,
        CLIENT_CREDENTIALS_GRANT = 5,
        REFRESH_TOKEN_GRANT = 6,
    }

}

export class TokenResponse extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): TokenResponse;
    getTokenType(): string;
    setTokenType(value: string): TokenResponse;
    getExpiresIn(): string;
    setExpiresIn(value: string): TokenResponse;
    getScope(): string;
    setScope(value: string): TokenResponse;
    getRefreshToken(): string;
    setRefreshToken(value: string): TokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TokenResponse): TokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenResponse;
    static deserializeBinaryFromReader(message: TokenResponse, reader: jspb.BinaryReader): TokenResponse;
}

export namespace TokenResponse {
    export type AsObject = {
        accessToken: string,
        tokenType: string,
        expiresIn: string,
        scope: string,
        refreshToken: string,
    }
}
