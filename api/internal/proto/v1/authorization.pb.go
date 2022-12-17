// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.8
// source: v1/authorization.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateAuthorizationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClientId            string              `protobuf:"bytes,1,opt,name=client_id,json=clientId,proto3" json:"client_id,omitempty"`
	CodeChallenge       string              `protobuf:"bytes,2,opt,name=code_challenge,json=codeChallenge,proto3" json:"code_challenge,omitempty"`
	CodeChallengeMethod CodeChallengeMehtod `protobuf:"varint,3,opt,name=code_challenge_method,json=codeChallengeMethod,proto3,enum=v1.CodeChallengeMehtod" json:"code_challenge_method,omitempty"`
	RedirectUri         string              `protobuf:"bytes,4,opt,name=redirect_uri,json=redirectUri,proto3" json:"redirect_uri,omitempty"`
	Scope               string              `protobuf:"bytes,5,opt,name=scope,proto3" json:"scope,omitempty"`
	State               string              `protobuf:"bytes,6,opt,name=state,proto3" json:"state,omitempty"`
}

func (x *CreateAuthorizationRequest) Reset() {
	*x = CreateAuthorizationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_authorization_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateAuthorizationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateAuthorizationRequest) ProtoMessage() {}

func (x *CreateAuthorizationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_v1_authorization_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateAuthorizationRequest.ProtoReflect.Descriptor instead.
func (*CreateAuthorizationRequest) Descriptor() ([]byte, []int) {
	return file_v1_authorization_proto_rawDescGZIP(), []int{0}
}

func (x *CreateAuthorizationRequest) GetClientId() string {
	if x != nil {
		return x.ClientId
	}
	return ""
}

func (x *CreateAuthorizationRequest) GetCodeChallenge() string {
	if x != nil {
		return x.CodeChallenge
	}
	return ""
}

func (x *CreateAuthorizationRequest) GetCodeChallengeMethod() CodeChallengeMehtod {
	if x != nil {
		return x.CodeChallengeMethod
	}
	return CodeChallengeMehtod_PLAIN
}

func (x *CreateAuthorizationRequest) GetRedirectUri() string {
	if x != nil {
		return x.RedirectUri
	}
	return ""
}

func (x *CreateAuthorizationRequest) GetScope() string {
	if x != nil {
		return x.Scope
	}
	return ""
}

func (x *CreateAuthorizationRequest) GetState() string {
	if x != nil {
		return x.State
	}
	return ""
}

type CreateAuthorizationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RedirectUri string `protobuf:"bytes,1,opt,name=redirect_uri,json=redirectUri,proto3" json:"redirect_uri,omitempty"`
}

func (x *CreateAuthorizationResponse) Reset() {
	*x = CreateAuthorizationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_v1_authorization_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateAuthorizationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateAuthorizationResponse) ProtoMessage() {}

func (x *CreateAuthorizationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_v1_authorization_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateAuthorizationResponse.ProtoReflect.Descriptor instead.
func (*CreateAuthorizationResponse) Descriptor() ([]byte, []int) {
	return file_v1_authorization_proto_rawDescGZIP(), []int{1}
}

func (x *CreateAuthorizationResponse) GetRedirectUri() string {
	if x != nil {
		return x.RedirectUri
	}
	return ""
}

var File_v1_authorization_proto protoreflect.FileDescriptor

var file_v1_authorization_proto_rawDesc = []byte{
	0x0a, 0x16, 0x76, 0x31, 0x2f, 0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x76, 0x31, 0x1a, 0x1e, 0x76, 0x31,
	0x2f, 0x63, 0x6f, 0x64, 0x65, 0x5f, 0x63, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x5f,
	0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xfc, 0x01, 0x0a,
	0x1a, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x63,
	0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x64, 0x65,
	0x5f, 0x63, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0d, 0x63, 0x6f, 0x64, 0x65, 0x43, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x12,
	0x4b, 0x0a, 0x15, 0x63, 0x6f, 0x64, 0x65, 0x5f, 0x63, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67,
	0x65, 0x5f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17,
	0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6f, 0x64, 0x65, 0x43, 0x68, 0x61, 0x6c, 0x6c, 0x65, 0x6e, 0x67,
	0x65, 0x4d, 0x65, 0x68, 0x74, 0x6f, 0x64, 0x52, 0x13, 0x63, 0x6f, 0x64, 0x65, 0x43, 0x68, 0x61,
	0x6c, 0x6c, 0x65, 0x6e, 0x67, 0x65, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x12, 0x21, 0x0a, 0x0c,
	0x72, 0x65, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x5f, 0x75, 0x72, 0x69, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x72, 0x65, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x55, 0x72, 0x69, 0x12,
	0x14, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x73, 0x63, 0x6f, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x18, 0x06,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x73, 0x74, 0x61, 0x74, 0x65, 0x22, 0x40, 0x0a, 0x1b, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65,
	0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x5f, 0x75, 0x72, 0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x72, 0x65, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x55, 0x72, 0x69, 0x42, 0x22, 0x5a,
	0x20, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x72, 0x69, 0x74,
	0x65, 0x6c, 0x61, 0x62, 0x73, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x2f, 0x70,
	0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_v1_authorization_proto_rawDescOnce sync.Once
	file_v1_authorization_proto_rawDescData = file_v1_authorization_proto_rawDesc
)

func file_v1_authorization_proto_rawDescGZIP() []byte {
	file_v1_authorization_proto_rawDescOnce.Do(func() {
		file_v1_authorization_proto_rawDescData = protoimpl.X.CompressGZIP(file_v1_authorization_proto_rawDescData)
	})
	return file_v1_authorization_proto_rawDescData
}

var file_v1_authorization_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_v1_authorization_proto_goTypes = []interface{}{
	(*CreateAuthorizationRequest)(nil),  // 0: v1.CreateAuthorizationRequest
	(*CreateAuthorizationResponse)(nil), // 1: v1.CreateAuthorizationResponse
	(CodeChallengeMehtod)(0),            // 2: v1.CodeChallengeMehtod
}
var file_v1_authorization_proto_depIdxs = []int32{
	2, // 0: v1.CreateAuthorizationRequest.code_challenge_method:type_name -> v1.CodeChallengeMehtod
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_v1_authorization_proto_init() }
func file_v1_authorization_proto_init() {
	if File_v1_authorization_proto != nil {
		return
	}
	file_v1_code_challenge_method_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_v1_authorization_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateAuthorizationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_v1_authorization_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateAuthorizationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_v1_authorization_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_v1_authorization_proto_goTypes,
		DependencyIndexes: file_v1_authorization_proto_depIdxs,
		MessageInfos:      file_v1_authorization_proto_msgTypes,
	}.Build()
	File_v1_authorization_proto = out.File
	file_v1_authorization_proto_rawDesc = nil
	file_v1_authorization_proto_goTypes = nil
	file_v1_authorization_proto_depIdxs = nil
}