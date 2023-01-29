// package: v1
// file: v1/client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as v1_application_type_pb from "../v1/application_type_pb";
import * as v1_client_approval_pb from "../v1/client_approval_pb";
import * as v1_grant_type_pb from "../v1/grant_type_pb";
import * as v1_public_keys_configuration_pb from "../v1/public_keys_configuration_pb";
import * as v1_refresh_token_rotation_type_pb from "../v1/refresh_token_rotation_type_pb";
import * as v1_response_type_pb from "../v1/response_type_pb";
import * as v1_token_endpoint_auth_method_pb from "../v1/token_endpoint_auth_method_pb";

export class Client extends jspb.Message { 
    getId(): string;
    setId(value: string): Client;
    getUserId(): string;
    setUserId(value: string): Client;
    clearContactsList(): void;
    getContactsList(): Array<string>;
    setContactsList(value: Array<string>): Client;
    addContacts(value: string, index?: number): string;
    clearClientApprovalsList(): void;
    getClientApprovalsList(): Array<v1_client_approval_pb.ClientApproval>;
    setClientApprovalsList(value: Array<v1_client_approval_pb.ClientApproval>): Client;
    addClientApprovals(value?: v1_client_approval_pb.ClientApproval, index?: number): v1_client_approval_pb.ClientApproval;
    getDescription(): string;
    setDescription(value: string): Client;
    clearGrantTypesList(): void;
    getGrantTypesList(): Array<v1_grant_type_pb.GrantType>;
    setGrantTypesList(value: Array<v1_grant_type_pb.GrantType>): Client;
    addGrantTypes(value: v1_grant_type_pb.GrantType, index?: number): v1_grant_type_pb.GrantType;
    getIsFirstParty(): boolean;
    setIsFirstParty(value: boolean): Client;
    clearJwksList(): void;
    getJwksList(): Array<google_protobuf_any_pb.Any>;
    setJwksList(value: Array<google_protobuf_any_pb.Any>): Client;
    addJwks(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;
    getJwksUri(): string;
    setJwksUri(value: string): Client;
    getLogoUri(): string;
    setLogoUri(value: string): Client;
    getName(): string;
    setName(value: string): Client;
    getPolicyUri(): string;
    setPolicyUri(value: string): Client;
    getPublicKeysConfiguration(): v1_public_keys_configuration_pb.PublicKeysConfiguration;
    setPublicKeysConfiguration(value: v1_public_keys_configuration_pb.PublicKeysConfiguration): Client;
    clearRedirectUrisList(): void;
    getRedirectUrisList(): Array<string>;
    setRedirectUrisList(value: Array<string>): Client;
    addRedirectUris(value: string, index?: number): string;
    getRefreshTokenRotationType(): v1_refresh_token_rotation_type_pb.RefreshTokenRotationType;
    setRefreshTokenRotationType(value: v1_refresh_token_rotation_type_pb.RefreshTokenRotationType): Client;
    clearResponseTypesList(): void;
    getResponseTypesList(): Array<v1_response_type_pb.ResponseType>;
    setResponseTypesList(value: Array<v1_response_type_pb.ResponseType>): Client;
    addResponseTypes(value: v1_response_type_pb.ResponseType, index?: number): v1_response_type_pb.ResponseType;
    getSecret(): string;
    setSecret(value: string): Client;
    clearScopeList(): void;
    getScopeList(): Array<string>;
    setScopeList(value: Array<string>): Client;
    addScope(value: string, index?: number): string;
    getSoftwareId(): string;
    setSoftwareId(value: string): Client;
    getSoftwareVersion(): string;
    setSoftwareVersion(value: string): Client;
    getType(): v1_application_type_pb.ApplicationType;
    setType(value: v1_application_type_pb.ApplicationType): Client;
    getTosUri(): string;
    setTosUri(value: string): Client;
    getTokenEndpointAuthMethod(): v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod;
    setTokenEndpointAuthMethod(value: v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod): Client;
    getUri(): string;
    setUri(value: string): Client;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Client;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
    export type AsObject = {
        id: string,
        userId: string,
        contactsList: Array<string>,
        clientApprovalsList: Array<v1_client_approval_pb.ClientApproval.AsObject>,
        description: string,
        grantTypesList: Array<v1_grant_type_pb.GrantType>,
        isFirstParty: boolean,
        jwksList: Array<google_protobuf_any_pb.Any.AsObject>,
        jwksUri: string,
        logoUri: string,
        name: string,
        policyUri: string,
        publicKeysConfiguration: v1_public_keys_configuration_pb.PublicKeysConfiguration,
        redirectUrisList: Array<string>,
        refreshTokenRotationType: v1_refresh_token_rotation_type_pb.RefreshTokenRotationType,
        responseTypesList: Array<v1_response_type_pb.ResponseType>,
        secret: string,
        scopeList: Array<string>,
        softwareId: string,
        softwareVersion: string,
        type: v1_application_type_pb.ApplicationType,
        tosUri: string,
        tokenEndpointAuthMethod: v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod,
        uri: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ClientResponse extends jspb.Message { 

    hasClient(): boolean;
    clearClient(): void;
    getClient(): Client | undefined;
    setClient(value?: Client): ClientResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClientResponse): ClientResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientResponse;
    static deserializeBinaryFromReader(message: ClientResponse, reader: jspb.BinaryReader): ClientResponse;
}

export namespace ClientResponse {
    export type AsObject = {
        client?: Client.AsObject,
    }
}

export class ClientsResponse extends jspb.Message { 
    clearClientsList(): void;
    getClientsList(): Array<Client>;
    setClientsList(value: Array<Client>): ClientsResponse;
    addClients(value?: Client, index?: number): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClientsResponse): ClientsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientsResponse;
    static deserializeBinaryFromReader(message: ClientsResponse, reader: jspb.BinaryReader): ClientsResponse;
}

export namespace ClientsResponse {
    export type AsObject = {
        clientsList: Array<Client.AsObject>,
    }
}

export class CreateClientRequest extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): CreateClientRequest;
    getName(): string;
    setName(value: string): CreateClientRequest;
    clearRedirectUrisList(): void;
    getRedirectUrisList(): Array<string>;
    setRedirectUrisList(value: Array<string>): CreateClientRequest;
    addRedirectUris(value: string, index?: number): string;
    getType(): v1_application_type_pb.ApplicationType;
    setType(value: v1_application_type_pb.ApplicationType): CreateClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateClientRequest): CreateClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateClientRequest;
    static deserializeBinaryFromReader(message: CreateClientRequest, reader: jspb.BinaryReader): CreateClientRequest;
}

export namespace CreateClientRequest {
    export type AsObject = {
        description: string,
        name: string,
        redirectUrisList: Array<string>,
        type: v1_application_type_pb.ApplicationType,
    }
}

export class DeleteClientRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteClientRequest): DeleteClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteClientRequest;
    static deserializeBinaryFromReader(message: DeleteClientRequest, reader: jspb.BinaryReader): DeleteClientRequest;
}

export namespace DeleteClientRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetClientRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClientRequest): GetClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClientRequest;
    static deserializeBinaryFromReader(message: GetClientRequest, reader: jspb.BinaryReader): GetClientRequest;
}

export namespace GetClientRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetClientsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClientsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClientsRequest): GetClientsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClientsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClientsRequest;
    static deserializeBinaryFromReader(message: GetClientsRequest, reader: jspb.BinaryReader): GetClientsRequest;
}

export namespace GetClientsRequest {
    export type AsObject = {
    }
}

export class UpdateClientRequest extends jspb.Message { 
    clearContactsList(): void;
    getContactsList(): Array<string>;
    setContactsList(value: Array<string>): UpdateClientRequest;
    addContacts(value: string, index?: number): string;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): UpdateClientRequest;
    clearGrantTypesList(): void;
    getGrantTypesList(): Array<v1_grant_type_pb.GrantType>;
    setGrantTypesList(value: Array<v1_grant_type_pb.GrantType>): UpdateClientRequest;
    addGrantTypes(value: v1_grant_type_pb.GrantType, index?: number): v1_grant_type_pb.GrantType;

    hasIsFirstParty(): boolean;
    clearIsFirstParty(): void;
    getIsFirstParty(): boolean | undefined;
    setIsFirstParty(value: boolean): UpdateClientRequest;
    clearJwksList(): void;
    getJwksList(): Array<google_protobuf_any_pb.Any>;
    setJwksList(value: Array<google_protobuf_any_pb.Any>): UpdateClientRequest;
    addJwks(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

    hasJwksUri(): boolean;
    clearJwksUri(): void;
    getJwksUri(): string | undefined;
    setJwksUri(value: string): UpdateClientRequest;

    hasLogoUri(): boolean;
    clearLogoUri(): void;
    getLogoUri(): string | undefined;
    setLogoUri(value: string): UpdateClientRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): UpdateClientRequest;

    hasPolicyUri(): boolean;
    clearPolicyUri(): void;
    getPolicyUri(): string | undefined;
    setPolicyUri(value: string): UpdateClientRequest;

    hasPublicKeysConfiguration(): boolean;
    clearPublicKeysConfiguration(): void;
    getPublicKeysConfiguration(): v1_public_keys_configuration_pb.PublicKeysConfiguration | undefined;
    setPublicKeysConfiguration(value: v1_public_keys_configuration_pb.PublicKeysConfiguration): UpdateClientRequest;
    clearRedirectUrisList(): void;
    getRedirectUrisList(): Array<string>;
    setRedirectUrisList(value: Array<string>): UpdateClientRequest;
    addRedirectUris(value: string, index?: number): string;
    getRefreshTokenRotationType(): v1_refresh_token_rotation_type_pb.RefreshTokenRotationType;
    setRefreshTokenRotationType(value: v1_refresh_token_rotation_type_pb.RefreshTokenRotationType): UpdateClientRequest;
    clearResponseTypesList(): void;
    getResponseTypesList(): Array<v1_response_type_pb.ResponseType>;
    setResponseTypesList(value: Array<v1_response_type_pb.ResponseType>): UpdateClientRequest;
    addResponseTypes(value: v1_response_type_pb.ResponseType, index?: number): v1_response_type_pb.ResponseType;

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): string | undefined;
    setSecret(value: string): UpdateClientRequest;
    clearScopeList(): void;
    getScopeList(): Array<string>;
    setScopeList(value: Array<string>): UpdateClientRequest;
    addScope(value: string, index?: number): string;

    hasSoftwareId(): boolean;
    clearSoftwareId(): void;
    getSoftwareId(): string | undefined;
    setSoftwareId(value: string): UpdateClientRequest;

    hasSoftwareVersion(): boolean;
    clearSoftwareVersion(): void;
    getSoftwareVersion(): string | undefined;
    setSoftwareVersion(value: string): UpdateClientRequest;
    getType(): v1_application_type_pb.ApplicationType;
    setType(value: v1_application_type_pb.ApplicationType): UpdateClientRequest;

    hasTosUri(): boolean;
    clearTosUri(): void;
    getTosUri(): string | undefined;
    setTosUri(value: string): UpdateClientRequest;
    getTokenEndpointAuthMethod(): v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod;
    setTokenEndpointAuthMethod(value: v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod): UpdateClientRequest;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): string | undefined;
    setUri(value: string): UpdateClientRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateClientRequest): UpdateClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateClientRequest;
    static deserializeBinaryFromReader(message: UpdateClientRequest, reader: jspb.BinaryReader): UpdateClientRequest;
}

export namespace UpdateClientRequest {
    export type AsObject = {
        contactsList: Array<string>,
        description?: string,
        grantTypesList: Array<v1_grant_type_pb.GrantType>,
        isFirstParty?: boolean,
        jwksList: Array<google_protobuf_any_pb.Any.AsObject>,
        jwksUri?: string,
        logoUri?: string,
        name?: string,
        policyUri?: string,
        publicKeysConfiguration?: v1_public_keys_configuration_pb.PublicKeysConfiguration,
        redirectUrisList: Array<string>,
        refreshTokenRotationType: v1_refresh_token_rotation_type_pb.RefreshTokenRotationType,
        responseTypesList: Array<v1_response_type_pb.ResponseType>,
        secret?: string,
        scopeList: Array<string>,
        softwareId?: string,
        softwareVersion?: string,
        type: v1_application_type_pb.ApplicationType,
        tosUri?: string,
        tokenEndpointAuthMethod: v1_token_endpoint_auth_method_pb.TokenEndpointAuthMethod,
        uri?: string,
    }
}
