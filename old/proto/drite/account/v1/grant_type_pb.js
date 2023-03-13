// source: drite/account/v1/grant_type.proto
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

goog.exportSymbol('proto.drite.account.v1.GrantType', null, global);
/**
 * @enum {number}
 */
proto.drite.account.v1.GrantType = {
  GRANT_TYPE_UNSPECIFIED: 0,
  GRANT_TYPE_AUTHORIZATION_CODE: 1,
  GRANT_TYPE_CLIENT_CREDENTIALS: 2,
  GRANT_TYPE_REFRESH_TOKEN: 3
};

goog.object.extend(exports, proto.drite.account.v1);
