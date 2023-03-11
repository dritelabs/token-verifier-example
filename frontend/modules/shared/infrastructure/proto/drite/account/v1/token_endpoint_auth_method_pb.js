// source: drite/account/v1/token_endpoint_auth_method.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.drite.account.v1.TokenEndpointAuthMethod', null, global);
/**
 * @enum {number}
 */
proto.drite.account.v1.TokenEndpointAuthMethod = {
  TOKEN_ENDPOINT_AUTH_METHOD_UNSPECIFIED: 0,
  TOKEN_ENDPOINT_AUTH_METHOD_CLIENT_SECRET_BASIC: 1,
  TOKEN_ENDPOINT_AUTH_METHOD_PRIVATE_KEY_JWT: 2,
  TOKEN_ENDPOINT_AUTH_METHOD_NONE: 3
};

goog.object.extend(exports, proto.drite.account.v1);
