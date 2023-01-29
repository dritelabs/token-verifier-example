// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var v1_authorization_pb = require('../v1/authorization_pb.js');
var v1_token_pb = require('../v1/token_pb.js');

function serialize_v1_AuthorizationRequest(arg) {
  if (!(arg instanceof v1_authorization_pb.AuthorizationRequest)) {
    throw new Error('Expected argument of type v1.AuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_AuthorizationRequest(buffer_arg) {
  return v1_authorization_pb.AuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_AuthorizationResponse(arg) {
  if (!(arg instanceof v1_authorization_pb.AuthorizationResponse)) {
    throw new Error('Expected argument of type v1.AuthorizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_AuthorizationResponse(buffer_arg) {
  return v1_authorization_pb.AuthorizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_CreateAuthorizationRequest(arg) {
  if (!(arg instanceof v1_authorization_pb.CreateAuthorizationRequest)) {
    throw new Error('Expected argument of type v1.CreateAuthorizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_CreateAuthorizationRequest(buffer_arg) {
  return v1_authorization_pb.CreateAuthorizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_CreateAuthorizationResponse(arg) {
  if (!(arg instanceof v1_authorization_pb.CreateAuthorizationResponse)) {
    throw new Error('Expected argument of type v1.CreateAuthorizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_CreateAuthorizationResponse(buffer_arg) {
  return v1_authorization_pb.CreateAuthorizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_TokenRequest(arg) {
  if (!(arg instanceof v1_token_pb.TokenRequest)) {
    throw new Error('Expected argument of type v1.TokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_TokenRequest(buffer_arg) {
  return v1_token_pb.TokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_TokenResponse(arg) {
  if (!(arg instanceof v1_token_pb.TokenResponse)) {
    throw new Error('Expected argument of type v1.TokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_TokenResponse(buffer_arg) {
  return v1_token_pb.TokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  authorize: {
    path: '/v1.Account/Authorize',
    requestStream: false,
    responseStream: false,
    requestType: v1_authorization_pb.AuthorizationRequest,
    responseType: v1_authorization_pb.AuthorizationResponse,
    requestSerialize: serialize_v1_AuthorizationRequest,
    requestDeserialize: deserialize_v1_AuthorizationRequest,
    responseSerialize: serialize_v1_AuthorizationResponse,
    responseDeserialize: deserialize_v1_AuthorizationResponse,
  },
  createAuthorization: {
    path: '/v1.Account/CreateAuthorization',
    requestStream: false,
    responseStream: false,
    requestType: v1_authorization_pb.CreateAuthorizationRequest,
    responseType: v1_authorization_pb.CreateAuthorizationResponse,
    requestSerialize: serialize_v1_CreateAuthorizationRequest,
    requestDeserialize: deserialize_v1_CreateAuthorizationRequest,
    responseSerialize: serialize_v1_CreateAuthorizationResponse,
    responseDeserialize: deserialize_v1_CreateAuthorizationResponse,
  },
  token: {
    path: '/v1.Account/Token',
    requestStream: false,
    responseStream: false,
    requestType: v1_token_pb.TokenRequest,
    responseType: v1_token_pb.TokenResponse,
    requestSerialize: serialize_v1_TokenRequest,
    requestDeserialize: deserialize_v1_TokenRequest,
    responseSerialize: serialize_v1_TokenResponse,
    responseDeserialize: deserialize_v1_TokenResponse,
  },
  // rpc CreateAuthorization(CreateAuthorizationRequest) returns (AuthorizationResponse);
// rpc CreateClient(CreateClientRequest) returns (ClientResponse);
// rpc CreateToken(CreateTokenRequest) returns (TokenResponse);
// rpc CreateUser (CreateUserRequest) returns (UserResponse);
// rpc DeleteClient (DeleteClientRequest) returns (ClientResponse);
// rpc DeleteUser (DeleteUserRequest) returns (UserResponse);
// rpc GetClient (GetClientRequest) returns (ClientResponse);
// rpc GetClients (GetClientsRequest) returns (ClientsResponse);
// rpc GetJwks (GetJwksRequest) returns (google.protobuf.Any);
// rpc GetUser (GetUserRequest) returns (UserResponse);
// rpc GetUsers (GetUsersRequest) returns (UsersResponse);
// rpc UpdateClient (UpdateClientRequest) returns (ClientResponse);
// rpc UpdateUser (UpdateUserRequest) returns (UserResponse);
// rpc VerifyAuthorization (VerifyAuthorizationRequest) returns (VerifyAuthorizationResponse);
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
