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
    clearRefreshTokenRotationTypeList(): void;
    getRefreshTokenRotationTypeList(): Array<v1_refresh_token_rotation_type_pb.RefreshTokenRotationType>;
    setRefreshTokenRotationTypeList(value: Array<v1_refresh_token_rotation_type_pb.RefreshTokenRotationType>): Client;
    addRefreshTokenRotationType(value: v1_refresh_token_rotation_type_pb.RefreshTokenRotationType, index?: number): v1_refresh_token_rotation_type_pb.RefreshTokenRotationType;
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
        refreshTokenRotationTypeList: Array<v1_refresh_token_rotation_type_pb.RefreshTokenRotationType>,
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
