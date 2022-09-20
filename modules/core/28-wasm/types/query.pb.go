// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: ibc/core/wasm/v1/query.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// WasmLightClient query
type WasmLightClientRequest struct {
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (m *WasmLightClientRequest) Reset()         { *m = WasmLightClientRequest{} }
func (m *WasmLightClientRequest) String() string { return proto.CompactTextString(m) }
func (*WasmLightClientRequest) ProtoMessage()    {}
func (*WasmLightClientRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_482bc5ce660a9729, []int{0}
}
func (m *WasmLightClientRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *WasmLightClientRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_WasmLightClientRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *WasmLightClientRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WasmLightClientRequest.Merge(m, src)
}
func (m *WasmLightClientRequest) XXX_Size() int {
	return m.Size()
}
func (m *WasmLightClientRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_WasmLightClientRequest.DiscardUnknown(m)
}

var xxx_messageInfo_WasmLightClientRequest proto.InternalMessageInfo

func (m *WasmLightClientRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// WasmLightClient response
type WasmLightClientResponse struct {
	WasmLightClient *WasmLightClient `protobuf:"bytes,1,opt,name=wasm_light_client,json=wasmLightClient,proto3" json:"wasm_light_client,omitempty"`
}

func (m *WasmLightClientResponse) Reset()         { *m = WasmLightClientResponse{} }
func (m *WasmLightClientResponse) String() string { return proto.CompactTextString(m) }
func (*WasmLightClientResponse) ProtoMessage()    {}
func (*WasmLightClientResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_482bc5ce660a9729, []int{1}
}
func (m *WasmLightClientResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *WasmLightClientResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_WasmLightClientResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *WasmLightClientResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WasmLightClientResponse.Merge(m, src)
}
func (m *WasmLightClientResponse) XXX_Size() int {
	return m.Size()
}
func (m *WasmLightClientResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_WasmLightClientResponse.DiscardUnknown(m)
}

var xxx_messageInfo_WasmLightClientResponse proto.InternalMessageInfo

func (m *WasmLightClientResponse) GetWasmLightClient() *WasmLightClient {
	if m != nil {
		return m.WasmLightClient
	}
	return nil
}

func init() {
	proto.RegisterType((*WasmLightClientRequest)(nil), "ibc.core.wasm.v1.WasmLightClientRequest")
	proto.RegisterType((*WasmLightClientResponse)(nil), "ibc.core.wasm.v1.WasmLightClientResponse")
}

func init() { proto.RegisterFile("ibc/core/wasm/v1/query.proto", fileDescriptor_482bc5ce660a9729) }

var fileDescriptor_482bc5ce660a9729 = []byte{
	// 323 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0x31, 0x4b, 0x03, 0x31,
	0x18, 0x86, 0x7b, 0xa2, 0x82, 0xe7, 0x50, 0xcd, 0xa0, 0x52, 0x4a, 0xd0, 0xc3, 0xa1, 0x8a, 0x4d,
	0x68, 0x45, 0x71, 0xd6, 0x55, 0x41, 0xbb, 0x08, 0x2e, 0x25, 0x97, 0x7e, 0x5c, 0x03, 0x77, 0xf9,
	0xae, 0x4d, 0xae, 0xa5, 0x88, 0x8b, 0xbf, 0x40, 0x74, 0xf5, 0x07, 0x39, 0x16, 0x5c, 0x1c, 0xa5,
	0xf5, 0x87, 0x48, 0xee, 0x5c, 0xbc, 0x0e, 0xba, 0x85, 0x3c, 0x6f, 0x9e, 0xe4, 0xfd, 0xe2, 0xd7,
	0x55, 0x28, 0xb9, 0xc4, 0x21, 0xf0, 0xb1, 0x30, 0x09, 0x1f, 0xb5, 0xf8, 0x20, 0x83, 0xe1, 0x84,
	0xa5, 0x43, 0xb4, 0x48, 0x36, 0x54, 0x28, 0x99, 0xa3, 0xcc, 0x51, 0x36, 0x6a, 0xd5, 0xea, 0x11,
	0x62, 0x14, 0x03, 0x17, 0xa9, 0xe2, 0x42, 0x6b, 0xb4, 0xc2, 0x2a, 0xd4, 0xa6, 0xc8, 0xd7, 0xe8,
	0x82, 0x2d, 0x02, 0x0d, 0x46, 0xfd, 0xf0, 0xe0, 0xc8, 0xdf, 0xba, 0x15, 0x26, 0xb9, 0x54, 0x51,
	0xdf, 0x5e, 0xc4, 0x0a, 0xb4, 0xed, 0xc0, 0x20, 0x03, 0x63, 0x09, 0xf1, 0x97, 0xb5, 0x48, 0x60,
	0xc7, 0xdb, 0xf5, 0x1a, 0x6b, 0x9d, 0x7c, 0x1d, 0xf4, 0xfd, 0xed, 0x85, 0xb4, 0x49, 0x51, 0x1b,
	0x20, 0x57, 0xfe, 0xa6, 0xbb, 0xa1, 0x1b, 0x3b, 0xd6, 0x95, 0x39, 0xcc, 0xcf, 0xae, 0xb7, 0xf7,
	0x58, 0xf9, 0xd1, 0xac, 0x6c, 0xa9, 0x8e, 0x7f, 0x6f, 0xb4, 0x5f, 0x3d, 0x7f, 0xe5, 0xc6, 0xf5,
	0x26, 0xcf, 0x9e, 0x5f, 0x2d, 0xc5, 0x49, 0xe3, 0x6f, 0x63, 0xd1, 0xa2, 0x76, 0xf0, 0x8f, 0x64,
	0xd1, 0x20, 0x38, 0x7c, 0x7c, 0xff, 0x7a, 0x59, 0xda, 0x27, 0x01, 0x2f, 0xcf, 0x2c, 0x04, 0x2b,
	0x5a, 0x5c, 0x62, 0x0f, 0xf8, 0xbd, 0x9b, 0xc3, 0xc3, 0xf9, 0xf5, 0xdb, 0x8c, 0x7a, 0xd3, 0x19,
	0xf5, 0x3e, 0x67, 0xd4, 0x7b, 0x9a, 0xd3, 0xca, 0x74, 0x4e, 0x2b, 0x1f, 0x73, 0x5a, 0xb9, 0x3b,
	0x8d, 0x94, 0xed, 0x67, 0x21, 0x93, 0x98, 0x70, 0x89, 0x26, 0x41, 0xe3, 0x74, 0xcd, 0x08, 0xf9,
	0xe8, 0x84, 0x27, 0xd8, 0xcb, 0x62, 0x30, 0x85, 0xbc, 0x7d, 0xd6, 0xcc, 0xfd, 0x76, 0x92, 0x82,
	0x09, 0x57, 0xf3, 0xff, 0x38, 0xfe, 0x0e, 0x00, 0x00, 0xff, 0xff, 0xec, 0xeb, 0xdc, 0x3b, 0xff,
	0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Get Wasm code for given code id
	WasmLightClient(ctx context.Context, in *WasmLightClientRequest, opts ...grpc.CallOption) (*WasmLightClientResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) WasmLightClient(ctx context.Context, in *WasmLightClientRequest, opts ...grpc.CallOption) (*WasmLightClientResponse, error) {
	out := new(WasmLightClientResponse)
	err := c.cc.Invoke(ctx, "/ibc.core.wasm.v1.Query/WasmLightClient", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Get Wasm code for given code id
	WasmLightClient(context.Context, *WasmLightClientRequest) (*WasmLightClientResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) WasmLightClient(ctx context.Context, req *WasmLightClientRequest) (*WasmLightClientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WasmLightClient not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_WasmLightClient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WasmLightClientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).WasmLightClient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ibc.core.wasm.v1.Query/WasmLightClient",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).WasmLightClient(ctx, req.(*WasmLightClientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ibc.core.wasm.v1.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "WasmLightClient",
			Handler:    _Query_WasmLightClient_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ibc/core/wasm/v1/query.proto",
}

func (m *WasmLightClientRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *WasmLightClientRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *WasmLightClientRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *WasmLightClientResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *WasmLightClientResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *WasmLightClientResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.WasmLightClient != nil {
		{
			size, err := m.WasmLightClient.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *WasmLightClientRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *WasmLightClientResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.WasmLightClient != nil {
		l = m.WasmLightClient.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *WasmLightClientRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: WasmLightClientRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: WasmLightClientRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *WasmLightClientResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: WasmLightClientResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: WasmLightClientResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WasmLightClient", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
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
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
