// package: v1
// file: v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_account_pb from "../v1/account_pb";
import * as v1_authorization_pb from "../v1/authorization_pb";
import * as v1_token_pb from "../v1/token_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authorize: IAccountService_IAuthorize;
    createAuthorization: IAccountService_ICreateAuthorization;
    token: IAccountService_IToken;
}

interface IAccountService_IAuthorize extends grpc.MethodDefinition<v1_authorization_pb.AuthorizationRequest, v1_authorization_pb.AuthorizationResponse> {
    path: "/v1.Account/Authorize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_authorization_pb.AuthorizationRequest>;
    requestDeserialize: grpc.deserialize<v1_authorization_pb.AuthorizationRequest>;
    responseSerialize: grpc.serialize<v1_authorization_pb.AuthorizationResponse>;
    responseDeserialize: grpc.deserialize<v1_authorization_pb.AuthorizationResponse>;
}
interface IAccountService_ICreateAuthorization extends grpc.MethodDefinition<v1_authorization_pb.CreateAuthorizationRequest, v1_authorization_pb.CreateAuthorizationResponse> {
    path: "/v1.Account/CreateAuthorization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_authorization_pb.CreateAuthorizationRequest>;
    requestDeserialize: grpc.deserialize<v1_authorization_pb.CreateAuthorizationRequest>;
    responseSerialize: grpc.serialize<v1_authorization_pb.CreateAuthorizationResponse>;
    responseDeserialize: grpc.deserialize<v1_authorization_pb.CreateAuthorizationResponse>;
}
interface IAccountService_IToken extends grpc.MethodDefinition<v1_token_pb.TokenRequest, v1_token_pb.TokenResponse> {
    path: "/v1.Account/Token";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_token_pb.TokenRequest>;
    requestDeserialize: grpc.deserialize<v1_token_pb.TokenRequest>;
    responseSerialize: grpc.serialize<v1_token_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<v1_token_pb.TokenResponse>;
}

export const AccountService: IAccountService;

export interface IAccountServer extends grpc.UntypedServiceImplementation {
    authorize: grpc.handleUnaryCall<v1_authorization_pb.AuthorizationRequest, v1_authorization_pb.AuthorizationResponse>;
    createAuthorization: grpc.handleUnaryCall<v1_authorization_pb.CreateAuthorizationRequest, v1_authorization_pb.CreateAuthorizationResponse>;
    token: grpc.handleUnaryCall<v1_token_pb.TokenRequest, v1_token_pb.TokenResponse>;
}

export interface IAccountClient {
    authorize(request: v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    authorize(request: v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    authorize(request: v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    token(request: v1_token_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: v1_token_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: v1_token_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public authorize(request: v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: v1_authorization_pb.CreateAuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_authorization_pb.CreateAuthorizationResponse) => void): grpc.ClientUnaryCall;
    public token(request: v1_token_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: v1_token_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: v1_token_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
}
