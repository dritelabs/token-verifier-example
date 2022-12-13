// package: v1
// file: v1/account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as v1_account_pb from "../v1/account_pb";
import * as v1_user_pb from "../v1/user_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IAccountService_ICreateUser;
    deleteUser: IAccountService_IDeleteUser;
    getUser: IAccountService_IGetUser;
    listUsers: IAccountService_IListUsers;
    updateUser: IAccountService_IUpdateUser;
}

interface IAccountService_ICreateUser extends grpc.MethodDefinition<v1_user_pb.CreateUserRequest, v1_user_pb.User> {
    path: "/v1.Account/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<v1_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<v1_user_pb.User>;
}
interface IAccountService_IDeleteUser extends grpc.MethodDefinition<v1_user_pb.DeleteUserRequest, v1_user_pb.User> {
    path: "/v1.Account/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<v1_user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<v1_user_pb.User>;
}
interface IAccountService_IGetUser extends grpc.MethodDefinition<v1_user_pb.GetUserRequest, v1_user_pb.User> {
    path: "/v1.Account/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<v1_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<v1_user_pb.User>;
}
interface IAccountService_IListUsers extends grpc.MethodDefinition<v1_user_pb.ListUsersRequest, v1_user_pb.ListUsersResponse> {
    path: "/v1.Account/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<v1_user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<v1_user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<v1_user_pb.ListUsersResponse>;
}
interface IAccountService_IUpdateUser extends grpc.MethodDefinition<v1_user_pb.UpdateUserRequest, v1_user_pb.User> {
    path: "/v1.Account/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<v1_user_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<v1_user_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<v1_user_pb.User>;
    responseDeserialize: grpc.deserialize<v1_user_pb.User>;
}

export const AccountService: IAccountService;

export interface IAccountServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<v1_user_pb.CreateUserRequest, v1_user_pb.User>;
    deleteUser: grpc.handleUnaryCall<v1_user_pb.DeleteUserRequest, v1_user_pb.User>;
    getUser: grpc.handleUnaryCall<v1_user_pb.GetUserRequest, v1_user_pb.User>;
    listUsers: grpc.handleUnaryCall<v1_user_pb.ListUsersRequest, v1_user_pb.ListUsersResponse>;
    updateUser: grpc.handleUnaryCall<v1_user_pb.UpdateUserRequest, v1_user_pb.User>;
}

export interface IAccountClient {
    createUser(request: v1_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: v1_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: v1_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: v1_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: v1_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: v1_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: v1_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: v1_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: v1_user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: v1_user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: v1_user_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: v1_user_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: v1_user_pb.User) => void): grpc.ClientUnaryCall;
}
