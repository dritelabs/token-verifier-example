// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var drite_account_v1_client_pb = require("./client_pb.js");
var drite_account_v1_jwk_pb = require("./jwk_pb.js");
var drite_account_v1_user_pb = require("./user_pb.js");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb.js");
var google_protobuf_any_pb = require("google-protobuf/google/protobuf/any_pb.js");

function serialize_drite_account_v1_AuthenticateUserRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.AuthenticateUserRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.AuthenticateUserRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_AuthenticateUserRequest(buffer_arg) {
  return drite_account_v1_user_pb.AuthenticateUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_AuthenticateUserResponse(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.AuthenticateUserResponse)) {
    throw new Error(
      "Expected argument of type drite.account.v1.AuthenticateUserResponse"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_AuthenticateUserResponse(buffer_arg) {
  return drite_account_v1_user_pb.AuthenticateUserResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_Client(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.Client)) {
    throw new Error("Expected argument of type drite.account.v1.Client");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_Client(buffer_arg) {
  return drite_account_v1_client_pb.Client.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_CreateClientRequest(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.CreateClientRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.CreateClientRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_CreateClientRequest(buffer_arg) {
  return drite_account_v1_client_pb.CreateClientRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_CreateUserRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.CreateUserRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.CreateUserRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_CreateUserRequest(buffer_arg) {
  return drite_account_v1_user_pb.CreateUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_DeleteClientRequest(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.DeleteClientRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.DeleteClientRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_DeleteClientRequest(buffer_arg) {
  return drite_account_v1_client_pb.DeleteClientRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.DeleteUserRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.DeleteUserRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_DeleteUserRequest(buffer_arg) {
  return drite_account_v1_user_pb.DeleteUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_GetClientRequest(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.GetClientRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.GetClientRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_GetClientRequest(buffer_arg) {
  return drite_account_v1_client_pb.GetClientRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_GetJwksRequest(arg) {
  if (!(arg instanceof drite_account_v1_jwk_pb.GetJwksRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.GetJwksRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_GetJwksRequest(buffer_arg) {
  return drite_account_v1_jwk_pb.GetJwksRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_GetUserRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.GetUserRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.GetUserRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_GetUserRequest(buffer_arg) {
  return drite_account_v1_user_pb.GetUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_ListClientsRequest(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.ListClientsRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.ListClientsRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_ListClientsRequest(buffer_arg) {
  return drite_account_v1_client_pb.ListClientsRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_ListClientsResponse(arg) {
  if (!(arg instanceof drite_account_v1_client_pb.ListClientsResponse)) {
    throw new Error(
      "Expected argument of type drite.account.v1.ListClientsResponse"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_ListClientsResponse(buffer_arg) {
  return drite_account_v1_client_pb.ListClientsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_ListUsersRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.ListUsersRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.ListUsersRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_ListUsersRequest(buffer_arg) {
  return drite_account_v1_user_pb.ListUsersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_ListUsersResponse(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.ListUsersResponse)) {
    throw new Error(
      "Expected argument of type drite.account.v1.ListUsersResponse"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_ListUsersResponse(buffer_arg) {
  return drite_account_v1_user_pb.ListUsersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.UpdateUserRequest)) {
    throw new Error(
      "Expected argument of type drite.account.v1.UpdateUserRequest"
    );
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_UpdateUserRequest(buffer_arg) {
  return drite_account_v1_user_pb.UpdateUserRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_drite_account_v1_User(arg) {
  if (!(arg instanceof drite_account_v1_user_pb.User)) {
    throw new Error("Expected argument of type drite.account.v1.User");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_drite_account_v1_User(buffer_arg) {
  return drite_account_v1_user_pb.User.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_google_protobuf_Any(arg) {
  if (!(arg instanceof google_protobuf_any_pb.Any)) {
    throw new Error("Expected argument of type google.protobuf.Any");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Any(buffer_arg) {
  return google_protobuf_any_pb.Any.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error("Expected argument of type google.protobuf.Empty");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

var AccountServiceService = (exports.AccountServiceService = {
  authenticateUser: {
    path: "/drite.account.v1.AccountService/AuthenticateUser",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.AuthenticateUserRequest,
    responseType: drite_account_v1_user_pb.AuthenticateUserResponse,
    requestSerialize: serialize_drite_account_v1_AuthenticateUserRequest,
    requestDeserialize: deserialize_drite_account_v1_AuthenticateUserRequest,
    responseSerialize: serialize_drite_account_v1_AuthenticateUserResponse,
    responseDeserialize: deserialize_drite_account_v1_AuthenticateUserResponse,
  },
  // rpc Authorize(AuthorizationRequest) returns (AuthorizationResponse);
  // rpc CreateAuthorization (CreateAuthorizationRequest) returns (CreateAuthorizationResponse);
  // rpc Token(TokenRequest) returns (TokenResponse);
  // rpc CreateAuthorization(CreateAuthorizationRequest) returns (AuthorizationResponse);
  createClient: {
    path: "/drite.account.v1.AccountService/CreateClient",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_client_pb.CreateClientRequest,
    responseType: drite_account_v1_client_pb.Client,
    requestSerialize: serialize_drite_account_v1_CreateClientRequest,
    requestDeserialize: deserialize_drite_account_v1_CreateClientRequest,
    responseSerialize: serialize_drite_account_v1_Client,
    responseDeserialize: deserialize_drite_account_v1_Client,
  },
  // rpc CreateToken(CreateTokenRequest) returns (TokenResponse);
  createUser: {
    path: "/drite.account.v1.AccountService/CreateUser",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.CreateUserRequest,
    responseType: drite_account_v1_user_pb.User,
    requestSerialize: serialize_drite_account_v1_CreateUserRequest,
    requestDeserialize: deserialize_drite_account_v1_CreateUserRequest,
    responseSerialize: serialize_drite_account_v1_User,
    responseDeserialize: deserialize_drite_account_v1_User,
  },
  deleteClient: {
    path: "/drite.account.v1.AccountService/DeleteClient",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_client_pb.DeleteClientRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_drite_account_v1_DeleteClientRequest,
    requestDeserialize: deserialize_drite_account_v1_DeleteClientRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteUser: {
    path: "/drite.account.v1.AccountService/DeleteUser",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_drite_account_v1_DeleteUserRequest,
    requestDeserialize: deserialize_drite_account_v1_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getClient: {
    path: "/drite.account.v1.AccountService/GetClient",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_client_pb.GetClientRequest,
    responseType: drite_account_v1_client_pb.Client,
    requestSerialize: serialize_drite_account_v1_GetClientRequest,
    requestDeserialize: deserialize_drite_account_v1_GetClientRequest,
    responseSerialize: serialize_drite_account_v1_Client,
    responseDeserialize: deserialize_drite_account_v1_Client,
  },
  getJwks: {
    path: "/drite.account.v1.AccountService/GetJwks",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_jwk_pb.GetJwksRequest,
    responseType: google_protobuf_any_pb.Any,
    requestSerialize: serialize_drite_account_v1_GetJwksRequest,
    requestDeserialize: deserialize_drite_account_v1_GetJwksRequest,
    responseSerialize: serialize_google_protobuf_Any,
    responseDeserialize: deserialize_google_protobuf_Any,
  },
  getUser: {
    path: "/drite.account.v1.AccountService/GetUser",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.GetUserRequest,
    responseType: drite_account_v1_user_pb.User,
    requestSerialize: serialize_drite_account_v1_GetUserRequest,
    requestDeserialize: deserialize_drite_account_v1_GetUserRequest,
    responseSerialize: serialize_drite_account_v1_User,
    responseDeserialize: deserialize_drite_account_v1_User,
  },
  listClients: {
    path: "/drite.account.v1.AccountService/ListClients",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_client_pb.ListClientsRequest,
    responseType: drite_account_v1_client_pb.ListClientsResponse,
    requestSerialize: serialize_drite_account_v1_ListClientsRequest,
    requestDeserialize: deserialize_drite_account_v1_ListClientsRequest,
    responseSerialize: serialize_drite_account_v1_ListClientsResponse,
    responseDeserialize: deserialize_drite_account_v1_ListClientsResponse,
  },
  listUsers: {
    path: "/drite.account.v1.AccountService/ListUsers",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.ListUsersRequest,
    responseType: drite_account_v1_user_pb.ListUsersResponse,
    requestSerialize: serialize_drite_account_v1_ListUsersRequest,
    requestDeserialize: deserialize_drite_account_v1_ListUsersRequest,
    responseSerialize: serialize_drite_account_v1_ListUsersResponse,
    responseDeserialize: deserialize_drite_account_v1_ListUsersResponse,
  },
  // rpc UpdateClient (UpdateClientRequest) returns (ClientResponse);
  updateUser: {
    path: "/drite.account.v1.AccountService/UpdateUser",
    requestStream: false,
    responseStream: false,
    requestType: drite_account_v1_user_pb.UpdateUserRequest,
    responseType: drite_account_v1_user_pb.User,
    requestSerialize: serialize_drite_account_v1_UpdateUserRequest,
    requestDeserialize: deserialize_drite_account_v1_UpdateUserRequest,
    responseSerialize: serialize_drite_account_v1_User,
    responseDeserialize: deserialize_drite_account_v1_User,
  },
  // rpc VerifyAuthorization (VerifyAuthorizationRequest) returns (VerifyAuthorizationResponse);
});

exports.AccountServiceClient = grpc.makeGenericClientConstructor(
  AccountServiceService
);
