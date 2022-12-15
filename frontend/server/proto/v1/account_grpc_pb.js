// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var v1_user_pb = require('../v1/user_pb.js');
var v1_jwk_pb = require('../v1/jwk_pb.js');

function serialize_google_protobuf_Any(arg) {
  if (!(arg instanceof google_protobuf_any_pb.Any)) {
    throw new Error('Expected argument of type google.protobuf.Any');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Any(buffer_arg) {
  return google_protobuf_any_pb.Any.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_CreateUserRequest(arg) {
  if (!(arg instanceof v1_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type v1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_CreateUserRequest(buffer_arg) {
  return v1_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_DeleteUserRequest(arg) {
  if (!(arg instanceof v1_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type v1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_DeleteUserRequest(buffer_arg) {
  return v1_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_GetJwksRequest(arg) {
  if (!(arg instanceof v1_jwk_pb.GetJwksRequest)) {
    throw new Error('Expected argument of type v1.GetJwksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_GetJwksRequest(buffer_arg) {
  return v1_jwk_pb.GetJwksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_GetUserRequest(arg) {
  if (!(arg instanceof v1_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_GetUserRequest(buffer_arg) {
  return v1_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ListUsersRequest(arg) {
  if (!(arg instanceof v1_user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type v1.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ListUsersRequest(buffer_arg) {
  return v1_user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_ListUsersResponse(arg) {
  if (!(arg instanceof v1_user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type v1.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_ListUsersResponse(buffer_arg) {
  return v1_user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_UpdateUserRequest(arg) {
  if (!(arg instanceof v1_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type v1.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_UpdateUserRequest(buffer_arg) {
  return v1_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_User(arg) {
  if (!(arg instanceof v1_user_pb.User)) {
    throw new Error('Expected argument of type v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_User(buffer_arg) {
  return v1_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  createUser: {
    path: '/v1.Account/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: v1_user_pb.CreateUserRequest,
    responseType: v1_user_pb.User,
    requestSerialize: serialize_v1_CreateUserRequest,
    requestDeserialize: deserialize_v1_CreateUserRequest,
    responseSerialize: serialize_v1_User,
    responseDeserialize: deserialize_v1_User,
  },
  deleteUser: {
    path: '/v1.Account/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: v1_user_pb.DeleteUserRequest,
    responseType: v1_user_pb.User,
    requestSerialize: serialize_v1_DeleteUserRequest,
    requestDeserialize: deserialize_v1_DeleteUserRequest,
    responseSerialize: serialize_v1_User,
    responseDeserialize: deserialize_v1_User,
  },
  getUser: {
    path: '/v1.Account/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: v1_user_pb.GetUserRequest,
    responseType: v1_user_pb.User,
    requestSerialize: serialize_v1_GetUserRequest,
    requestDeserialize: deserialize_v1_GetUserRequest,
    responseSerialize: serialize_v1_User,
    responseDeserialize: deserialize_v1_User,
  },
  listUsers: {
    path: '/v1.Account/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: v1_user_pb.ListUsersRequest,
    responseType: v1_user_pb.ListUsersResponse,
    requestSerialize: serialize_v1_ListUsersRequest,
    requestDeserialize: deserialize_v1_ListUsersRequest,
    responseSerialize: serialize_v1_ListUsersResponse,
    responseDeserialize: deserialize_v1_ListUsersResponse,
  },
  updateUser: {
    path: '/v1.Account/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: v1_user_pb.UpdateUserRequest,
    responseType: v1_user_pb.User,
    requestSerialize: serialize_v1_UpdateUserRequest,
    requestDeserialize: deserialize_v1_UpdateUserRequest,
    responseSerialize: serialize_v1_User,
    responseDeserialize: deserialize_v1_User,
  },
  getJwks: {
    path: '/v1.Account/GetJwks',
    requestStream: false,
    responseStream: false,
    requestType: v1_jwk_pb.GetJwksRequest,
    responseType: google_protobuf_any_pb.Any,
    requestSerialize: serialize_v1_GetJwksRequest,
    requestDeserialize: deserialize_v1_GetJwksRequest,
    responseSerialize: serialize_google_protobuf_Any,
    responseDeserialize: deserialize_google_protobuf_Any,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
