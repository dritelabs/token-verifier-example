// package: drite.account.v1
// file: drite/account/v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as drite_account_v1_account_pb from "../../../drite/account/v1/account_pb";
import * as drite_account_v1_client_pb from "../../../drite/account/v1/client_pb";
import * as drite_account_v1_jwk_pb from "../../../drite/account/v1/jwk_pb";
import * as drite_account_v1_token_pb from "../../../drite/account/v1/token_pb";
import * as drite_account_v1_user_pb from "../../../drite/account/v1/user_pb";
import * as drite_account_v1_authorization_pb from "../../../drite/account/v1/authorization_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authenticateUser: IAccountServiceService_IAuthenticateUser;
    authorize: IAccountServiceService_IAuthorize;
    createAuthorization: IAccountServiceService_ICreateAuthorization;
    token: IAccountServiceService_IToken;
    createClient: IAccountServiceService_ICreateClient;
    createUser: IAccountServiceService_ICreateUser;
    deleteClient: IAccountServiceService_IDeleteClient;
    deleteUser: IAccountServiceService_IDeleteUser;
    getClient: IAccountServiceService_IGetClient;
    getJwks: IAccountServiceService_IGetJwks;
    getUser: IAccountServiceService_IGetUser;
    listClients: IAccountServiceService_IListClients;
    listUsers: IAccountServiceService_IListUsers;
    updateClient: IAccountServiceService_IUpdateClient;
    updateUser: IAccountServiceService_IUpdateUser;
}

interface IAccountServiceService_IAuthenticateUser extends grpc.MethodDefinition<drite_account_v1_user_pb.AuthenticateUserRequest, drite_account_v1_user_pb.AuthenticateUserResponse> {
    path: "/drite.account.v1.AccountService/AuthenticateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.AuthenticateUserRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.AuthenticateUserRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_user_pb.AuthenticateUserResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_user_pb.AuthenticateUserResponse>;
}
interface IAccountServiceService_IAuthorize extends grpc.MethodDefinition<drite_account_v1_authorization_pb.AuthorizationRequest, drite_account_v1_authorization_pb.AuthorizeResponse> {
    path: "/drite.account.v1.AccountService/Authorize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_authorization_pb.AuthorizationRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_authorization_pb.AuthorizationRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_authorization_pb.AuthorizeResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_authorization_pb.AuthorizeResponse>;
}
interface IAccountServiceService_ICreateAuthorization extends grpc.MethodDefinition<drite_account_v1_authorization_pb.AuthorizationRequest, drite_account_v1_authorization_pb.AuthorizationResponse> {
    path: "/drite.account.v1.AccountService/CreateAuthorization";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_authorization_pb.AuthorizationRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_authorization_pb.AuthorizationRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_authorization_pb.AuthorizationResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_authorization_pb.AuthorizationResponse>;
}
interface IAccountServiceService_IToken extends grpc.MethodDefinition<drite_account_v1_token_pb.TokenRequest, drite_account_v1_token_pb.TokenResponse> {
    path: "/drite.account.v1.AccountService/Token";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_token_pb.TokenRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_token_pb.TokenRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_token_pb.TokenResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_token_pb.TokenResponse>;
}
interface IAccountServiceService_ICreateClient extends grpc.MethodDefinition<drite_account_v1_client_pb.CreateClientRequest, drite_account_v1_client_pb.Client> {
    path: "/drite.account.v1.AccountService/CreateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_client_pb.CreateClientRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_client_pb.CreateClientRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_client_pb.Client>;
    responseDeserialize: grpc.deserialize<drite_account_v1_client_pb.Client>;
}
interface IAccountServiceService_ICreateUser extends grpc.MethodDefinition<drite_account_v1_user_pb.CreateUserRequest, drite_account_v1_user_pb.User> {
    path: "/drite.account.v1.AccountService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<drite_account_v1_user_pb.User>;
}
interface IAccountServiceService_IDeleteClient extends grpc.MethodDefinition<drite_account_v1_client_pb.DeleteClientRequest, google_protobuf_empty_pb.Empty> {
    path: "/drite.account.v1.AccountService/DeleteClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_client_pb.DeleteClientRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_client_pb.DeleteClientRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAccountServiceService_IDeleteUser extends grpc.MethodDefinition<drite_account_v1_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty> {
    path: "/drite.account.v1.AccountService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IAccountServiceService_IGetClient extends grpc.MethodDefinition<drite_account_v1_client_pb.GetClientRequest, drite_account_v1_client_pb.Client> {
    path: "/drite.account.v1.AccountService/GetClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_client_pb.GetClientRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_client_pb.GetClientRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_client_pb.Client>;
    responseDeserialize: grpc.deserialize<drite_account_v1_client_pb.Client>;
}
interface IAccountServiceService_IGetJwks extends grpc.MethodDefinition<drite_account_v1_jwk_pb.GetJwksRequest, google_protobuf_any_pb.Any> {
    path: "/drite.account.v1.AccountService/GetJwks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_jwk_pb.GetJwksRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_jwk_pb.GetJwksRequest>;
    responseSerialize: grpc.serialize<google_protobuf_any_pb.Any>;
    responseDeserialize: grpc.deserialize<google_protobuf_any_pb.Any>;
}
interface IAccountServiceService_IGetUser extends grpc.MethodDefinition<drite_account_v1_user_pb.GetUserRequest, drite_account_v1_user_pb.User> {
    path: "/drite.account.v1.AccountService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<drite_account_v1_user_pb.User>;
}
interface IAccountServiceService_IListClients extends grpc.MethodDefinition<drite_account_v1_client_pb.ListClientsRequest, drite_account_v1_client_pb.ListClientsResponse> {
    path: "/drite.account.v1.AccountService/ListClients";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_client_pb.ListClientsRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_client_pb.ListClientsRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_client_pb.ListClientsResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_client_pb.ListClientsResponse>;
}
interface IAccountServiceService_IListUsers extends grpc.MethodDefinition<drite_account_v1_user_pb.ListUsersRequest, drite_account_v1_user_pb.ListUsersResponse> {
    path: "/drite.account.v1.AccountService/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<drite_account_v1_user_pb.ListUsersResponse>;
}
interface IAccountServiceService_IUpdateClient extends grpc.MethodDefinition<drite_account_v1_client_pb.UpdateClientRequest, drite_account_v1_client_pb.Client> {
    path: "/drite.account.v1.AccountService/UpdateClient";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_client_pb.UpdateClientRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_client_pb.UpdateClientRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_client_pb.Client>;
    responseDeserialize: grpc.deserialize<drite_account_v1_client_pb.Client>;
}
interface IAccountServiceService_IUpdateUser extends grpc.MethodDefinition<drite_account_v1_user_pb.UpdateUserRequest, drite_account_v1_user_pb.User> {
    path: "/drite.account.v1.AccountService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<drite_account_v1_user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<drite_account_v1_user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<drite_account_v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<drite_account_v1_user_pb.User>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer extends grpc.UntypedServiceImplementation {
    authenticateUser: grpc.handleUnaryCall<drite_account_v1_user_pb.AuthenticateUserRequest, drite_account_v1_user_pb.AuthenticateUserResponse>;
    authorize: grpc.handleUnaryCall<drite_account_v1_authorization_pb.AuthorizationRequest, drite_account_v1_authorization_pb.AuthorizeResponse>;
    createAuthorization: grpc.handleUnaryCall<drite_account_v1_authorization_pb.AuthorizationRequest, drite_account_v1_authorization_pb.AuthorizationResponse>;
    token: grpc.handleUnaryCall<drite_account_v1_token_pb.TokenRequest, drite_account_v1_token_pb.TokenResponse>;
    createClient: grpc.handleUnaryCall<drite_account_v1_client_pb.CreateClientRequest, drite_account_v1_client_pb.Client>;
    createUser: grpc.handleUnaryCall<drite_account_v1_user_pb.CreateUserRequest, drite_account_v1_user_pb.User>;
    deleteClient: grpc.handleUnaryCall<drite_account_v1_client_pb.DeleteClientRequest, google_protobuf_empty_pb.Empty>;
    deleteUser: grpc.handleUnaryCall<drite_account_v1_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
    getClient: grpc.handleUnaryCall<drite_account_v1_client_pb.GetClientRequest, drite_account_v1_client_pb.Client>;
    getJwks: grpc.handleUnaryCall<drite_account_v1_jwk_pb.GetJwksRequest, google_protobuf_any_pb.Any>;
    getUser: grpc.handleUnaryCall<drite_account_v1_user_pb.GetUserRequest, drite_account_v1_user_pb.User>;
    listClients: grpc.handleUnaryCall<drite_account_v1_client_pb.ListClientsRequest, drite_account_v1_client_pb.ListClientsResponse>;
    listUsers: grpc.handleUnaryCall<drite_account_v1_user_pb.ListUsersRequest, drite_account_v1_user_pb.ListUsersResponse>;
    updateClient: grpc.handleUnaryCall<drite_account_v1_client_pb.UpdateClientRequest, drite_account_v1_client_pb.Client>;
    updateUser: grpc.handleUnaryCall<drite_account_v1_user_pb.UpdateUserRequest, drite_account_v1_user_pb.User>;
}

export interface IAccountServiceClient {
    authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    token(request: drite_account_v1_token_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: drite_account_v1_token_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    token(request: drite_account_v1_token_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    createClient(request: drite_account_v1_client_pb.CreateClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: drite_account_v1_client_pb.CreateClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: drite_account_v1_client_pb.CreateClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    createUser(request: drite_account_v1_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: drite_account_v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: drite_account_v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getClient(request: drite_account_v1_client_pb.GetClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: drite_account_v1_client_pb.GetClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    getClient(request: drite_account_v1_client_pb.GetClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    getUser(request: drite_account_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: drite_account_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: drite_account_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    listClients(request: drite_account_v1_client_pb.ListClientsRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    listClients(request: drite_account_v1_client_pb.ListClientsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    listClients(request: drite_account_v1_client_pb.ListClientsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: drite_account_v1_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: drite_account_v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: drite_account_v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authenticateUser(request: drite_account_v1_user_pb.AuthenticateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.AuthenticateUserResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public createAuthorization(request: drite_account_v1_authorization_pb.AuthorizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_authorization_pb.AuthorizationResponse) => void): grpc.ClientUnaryCall;
    public token(request: drite_account_v1_token_pb.TokenRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: drite_account_v1_token_pb.TokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public token(request: drite_account_v1_token_pb.TokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_token_pb.TokenResponse) => void): grpc.ClientUnaryCall;
    public createClient(request: drite_account_v1_client_pb.CreateClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: drite_account_v1_client_pb.CreateClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: drite_account_v1_client_pb.CreateClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public createUser(request: drite_account_v1_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: drite_account_v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: drite_account_v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteClient(request: drite_account_v1_client_pb.DeleteClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteUser(request: drite_account_v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getClient(request: drite_account_v1_client_pb.GetClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: drite_account_v1_client_pb.GetClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public getClient(request: drite_account_v1_client_pb.GetClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    public getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    public getJwks(request: drite_account_v1_jwk_pb.GetJwksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_any_pb.Any) => void): grpc.ClientUnaryCall;
    public getUser(request: drite_account_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: drite_account_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: drite_account_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public listClients(request: drite_account_v1_client_pb.ListClientsRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    public listClients(request: drite_account_v1_client_pb.ListClientsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    public listClients(request: drite_account_v1_client_pb.ListClientsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.ListClientsResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: drite_account_v1_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: drite_account_v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: drite_account_v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: drite_account_v1_client_pb.UpdateClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_client_pb.Client) => void): grpc.ClientUnaryCall;
    public updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: drite_account_v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: drite_account_v1_user_pb.User) => void): grpc.ClientUnaryCall;
}
