// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibc/core/wasm/v1/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// Message type to push new wasm code
type MsgSubmitWasmLightClient struct {
	WasmLightClient *WasmLightClient `protobuf:"bytes,1,opt,name=wasm_light_client,json=wasmLightClient,proto3" json:"wasm_light_client,omitempty"`
	Signer          string           `protobuf:"bytes,2,opt,name=signer,proto3" json:"signer,omitempty"`
}

func (m *MsgSubmitWasmLightClient) Reset()         { *m = MsgSubmitWasmLightClient{} }
func (m *MsgSubmitWasmLightClient) String() string { return proto.CompactTextString(m) }
func (*MsgSubmitWasmLightClient) ProtoMessage()    {}
func (*MsgSubmitWasmLightClient) Descriptor() ([]byte, []int) {
	return fileDescriptor_e7804a9f49664df6, []int{0}
}
func (m *MsgSubmitWasmLightClient) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSubmitWasmLightClient) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSubmitWasmLightClient.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSubmitWasmLightClient) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSubmitWasmLightClient.Merge(m, src)
}
func (m *MsgSubmitWasmLightClient) XXX_Size() int {
	return m.Size()
}
func (m *MsgSubmitWasmLightClient) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSubmitWasmLightClient.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSubmitWasmLightClient proto.InternalMessageInfo

func (m *MsgSubmitWasmLightClient) GetWasmLightClient() *WasmLightClient {
	if m != nil {
		return m.WasmLightClient
	}
	return nil
}

func (m *MsgSubmitWasmLightClient) GetSigner() string {
	if m != nil {
		return m.Signer
	}
	return ""
}

// Response in case of successful handling
type MsgSubmitWasmLightClientResponse struct {
	CodeId []byte `protobuf:"bytes,1,opt,name=code_id,json=codeId,proto3" json:"code_id,omitempty"`
}

func (m *MsgSubmitWasmLightClientResponse) Reset()         { *m = MsgSubmitWasmLightClientResponse{} }
func (m *MsgSubmitWasmLightClientResponse) String() string { return proto.CompactTextString(m) }
func (*MsgSubmitWasmLightClientResponse) ProtoMessage()    {}
func (*MsgSubmitWasmLightClientResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_e7804a9f49664df6, []int{1}
}
func (m *MsgSubmitWasmLightClientResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSubmitWasmLightClientResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSubmitWasmLightClientResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSubmitWasmLightClientResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSubmitWasmLightClientResponse.Merge(m, src)
}
func (m *MsgSubmitWasmLightClientResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgSubmitWasmLightClientResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSubmitWasmLightClientResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSubmitWasmLightClientResponse proto.InternalMessageInfo

func (m *MsgSubmitWasmLightClientResponse) GetCodeId() []byte {
	if m != nil {
		return m.CodeId
	}
	return nil
}

func init() {
	proto.RegisterType((*MsgSubmitWasmLightClient)(nil), "ibc.core.wasm.v1.MsgSubmitWasmLightClient")
	proto.RegisterType((*MsgSubmitWasmLightClientResponse)(nil), "ibc.core.wasm.v1.MsgSubmitWasmLightClientResponse")
}

func init() { proto.RegisterFile("ibc/core/wasm/v1/tx.proto", fileDescriptor_e7804a9f49664df6) }

var fileDescriptor_e7804a9f49664df6 = []byte{
	// 312 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xcf, 0x4a, 0x03, 0x31,
	0x10, 0xc6, 0x1b, 0x85, 0x8a, 0x51, 0x50, 0x17, 0xff, 0xd4, 0x1e, 0x42, 0xed, 0xa9, 0x08, 0x4d,
	0xe8, 0x8a, 0x22, 0x78, 0xd3, 0x93, 0x60, 0x41, 0xd6, 0x83, 0xe0, 0xa5, 0x34, 0xd9, 0x90, 0x06,
	0x9a, 0x9d, 0xd2, 0x49, 0x5b, 0xbd, 0x08, 0xbe, 0x81, 0x8f, 0xe5, 0xb1, 0x47, 0x8f, 0xd2, 0xbe,
	0x88, 0x64, 0xab, 0x97, 0xad, 0x05, 0x6f, 0x99, 0xf9, 0x66, 0xbe, 0xfc, 0x86, 0x8f, 0x1e, 0x5b,
	0xa9, 0x84, 0x82, 0xa1, 0x16, 0x93, 0x2e, 0x3a, 0x31, 0x6e, 0x09, 0xff, 0xcc, 0x07, 0x43, 0xf0,
	0x10, 0xed, 0x5a, 0xa9, 0x78, 0x90, 0x78, 0x90, 0xf8, 0xb8, 0x55, 0xdd, 0x37, 0x60, 0x20, 0x17,
	0x45, 0x78, 0x2d, 0xe6, 0xaa, 0x6c, 0xc9, 0xc2, 0xe8, 0x4c, 0xa3, 0xc5, 0x85, 0x5e, 0x7f, 0x23,
	0xb4, 0xd2, 0x46, 0xf3, 0x30, 0x92, 0xce, 0xfa, 0xc7, 0x2e, 0xba, 0x3b, 0x6b, 0x7a, 0xfe, 0xa6,
	0x6f, 0x75, 0xe6, 0xa3, 0x36, 0xdd, 0x0b, 0x5b, 0x9d, 0x7e, 0xe8, 0x75, 0x54, 0xde, 0xac, 0x90,
	0x1a, 0x69, 0x6c, 0xc5, 0x27, 0xbc, 0x08, 0xc0, 0x0b, 0xdb, 0xc9, 0xce, 0xa4, 0x60, 0x77, 0x48,
	0xcb, 0x68, 0x4d, 0xa6, 0x87, 0x95, 0xb5, 0x1a, 0x69, 0x6c, 0x26, 0x3f, 0x55, 0xfd, 0x8a, 0xd6,
	0x56, 0x21, 0x24, 0x1a, 0x07, 0x90, 0xa1, 0x8e, 0x8e, 0xe8, 0x86, 0x82, 0x54, 0x77, 0x6c, 0x9a,
	0x03, 0x6c, 0x27, 0xe5, 0x50, 0xde, 0xa6, 0xf1, 0x2b, 0x5d, 0x6f, 0xa3, 0x89, 0x26, 0xf4, 0xe0,
	0xef, 0x1b, 0x4e, 0x97, 0x41, 0x57, 0x7d, 0x56, 0x8d, 0xff, 0x3f, 0xfb, 0x0b, 0x76, 0x7d, 0xff,
	0x31, 0x63, 0x64, 0x3a, 0x63, 0xe4, 0x6b, 0xc6, 0xc8, 0xfb, 0x9c, 0x95, 0xa6, 0x73, 0x56, 0xfa,
	0x9c, 0xb3, 0xd2, 0xd3, 0x85, 0xb1, 0xbe, 0x37, 0x92, 0x5c, 0x81, 0x13, 0x0a, 0xd0, 0x01, 0x0a,
	0x2b, 0x55, 0xd3, 0x80, 0x18, 0x9f, 0x0b, 0x07, 0xe9, 0xa8, 0xaf, 0x71, 0x11, 0x4d, 0x7c, 0xd9,
	0xcc, 0xd3, 0xf1, 0x2f, 0x03, 0x8d, 0xb2, 0x9c, 0x27, 0x73, 0xf6, 0x1d, 0x00, 0x00, 0xff, 0xff,
	0x98, 0x65, 0xd0, 0x5b, 0xfe, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	// SubmitWasmLightClient defines a rpc handler method for SubmitWasmLightClient.
	SubmitWasmLightClient(ctx context.Context, in *MsgSubmitWasmLightClient, opts ...grpc.CallOption) (*MsgSubmitWasmLightClientResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) SubmitWasmLightClient(ctx context.Context, in *MsgSubmitWasmLightClient, opts ...grpc.CallOption) (*MsgSubmitWasmLightClientResponse, error) {
	out := new(MsgSubmitWasmLightClientResponse)
	err := c.cc.Invoke(ctx, "/ibc.core.wasm.v1.Msg/SubmitWasmLightClient", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	// SubmitWasmLightClient defines a rpc handler method for SubmitWasmLightClient.
	SubmitWasmLightClient(context.Context, *MsgSubmitWasmLightClient) (*MsgSubmitWasmLightClientResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) SubmitWasmLightClient(ctx context.Context, req *MsgSubmitWasmLightClient) (*MsgSubmitWasmLightClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SubmitWasmLightClient not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_SubmitWasmLightClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgSubmitWasmLightClient)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).SubmitWasmLightClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ibc.core.wasm.v1.Msg/SubmitWasmLightClient",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).SubmitWasmLightClient(ctx, req.(*MsgSubmitWasmLightClient))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ibc.core.wasm.v1.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SubmitWasmLightClient",
			Handler:    _Msg_SubmitWasmLightClient_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ibc/core/wasm/v1/tx.proto",
}

func (m *MsgSubmitWasmLightClient) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSubmitWasmLightClient) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSubmitWasmLightClient) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Signer) > 0 {
		i -= len(m.Signer)
		copy(dAtA[i:], m.Signer)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Signer)))
		i--
		dAtA[i] = 0x12
	}
	if m.WasmLightClient != nil {
		{
			size, err := m.WasmLightClient.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTx(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgSubmitWasmLightClientResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSubmitWasmLightClientResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSubmitWasmLightClientResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.CodeId) > 0 {
		i -= len(m.CodeId)
		copy(dAtA[i:], m.CodeId)
		i = encodeVarintTx(dAtA, i, uint64(len(m.CodeId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgSubmitWasmLightClient) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.WasmLightClient != nil {
		l = m.WasmLightClient.Size()
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.Signer)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgSubmitWasmLightClientResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.CodeId)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgSubmitWasmLightClient) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgSubmitWasmLightClient: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSubmitWasmLightClient: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WasmLightClient", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.WasmLightClient == nil {
				m.WasmLightClient = &WasmLightClient{}
			}
			if err := m.WasmLightClient.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Signer", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Signer = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgSubmitWasmLightClientResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgSubmitWasmLightClientResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSubmitWasmLightClientResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CodeId", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CodeId = append(m.CodeId[:0], dAtA[iNdEx:postIndex]...)
			if m.CodeId == nil {
				m.CodeId = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
