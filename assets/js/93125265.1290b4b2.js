"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26512],{79910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var a=t(85893),s=t(11151);const o={title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},c="Define packets and acks",i={id:"ibc/apps/packets_acks",title:"Define packets and acks",description:"Learn how to define custom packet and acknowledgement structs and how to encode and decode them.",source:"@site/versioned_docs/version-v4.5.x/01-ibc/03-apps/05-packets_acks.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/packets_acks",permalink:"/v4/ibc/apps/packets_acks",draft:!1,unlisted:!1,tags:[],version:"v4.5.x",sidebarPosition:5,frontMatter:{title:"Define packets and acks",sidebar_label:"Define packets and acks",sidebar_position:5,slug:"/ibc/apps/packets_acks"},sidebar:"defaultSidebar",previous:{title:"Keeper",permalink:"/v4/ibc/apps/keeper"},next:{title:"Routing",permalink:"/v4/ibc/apps/routing"}},d={},r=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Custom packets",id:"custom-packets",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"define-packets-and-acks",children:"Define packets and acks"}),"\n",(0,a.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,a.jsx)(n.p,{children:"Learn how to define custom packet and acknowledgement structs and how to encode and decode them."})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/v4/ibc/overview",children:"IBC Overview"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/v4/ibc/integration",children:"IBC default integration"})}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"custom-packets",children:"Custom packets"}),"\n",(0,a.jsxs)(n.p,{children:["Modules connected by a channel must agree on what application data they are sending over the\nchannel, as well as how they will encode/decode it. This process is not specified by IBC as it is up\nto each application module to determine how to implement this agreement. However, for most\napplications this will happen as a version negotiation during the channel handshake. While more\ncomplex version negotiation is possible to implement inside the channel opening handshake, a very\nsimple version negotiation is implemented in the ",(0,a.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/apps/transfer/module.go",children:"ibc-transfer module"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Thus, a module must define its custom packet data structure, along with a well-defined way to\nencode and decode it to and from ",(0,a.jsx)(n.code,{children:"[]byte"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// Custom packet data defined in application module\ntype CustomPacketData struct {\n    // Custom fields ...\n}\n\nEncodePacketData(packetData CustomPacketData) []byte {\n    // encode packetData to bytes\n}\n\nDecodePacketData(encoded []byte) (CustomPacketData) {\n    // decode from bytes to packet data\n}\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note that the ",(0,a.jsx)(n.code,{children:"CustomPacketData"})," struct is defined in the proto definition and then compiled by the protobuf compiler."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Then a module must encode its packet data before sending it through IBC."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// Sending custom application packet data\ndata := EncodePacketData(customPacketData)\npacket.Data = data\nIBCChannelKeeper.SendPacket(ctx, packet)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A module receiving a packet must decode the ",(0,a.jsx)(n.code,{children:"PacketData"})," into a structure it expects so that it can\nact on it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// Receiving custom application packet data (in OnRecvPacket)\npacketData := DecodePacketData(packet.Data)\n// handle received custom packet data\n"})}),"\n",(0,a.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,a.jsx)(n.p,{children:"Modules may commit an acknowledgement upon receiving and processing a packet in the case of synchronous packet processing.\nIn the case where a packet is processed at some later point after the packet has been received (asynchronous execution), the acknowledgement\nwill be written once the packet has been processed by the application which may be well after the packet receipt."}),"\n",(0,a.jsx)(n.p,{children:"NOTE: Most blockchain modules will want to use the synchronous execution model in which the module processes and writes the acknowledgement\nfor a packet as soon as it has been received from the IBC module."}),"\n",(0,a.jsx)(n.p,{children:"This acknowledgement can then be relayed back to the original sender chain, which can take action\ndepending on the contents of the acknowledgement."}),"\n",(0,a.jsx)(n.p,{children:"Just as packet data was opaque to IBC, acknowledgements are similarly opaque. Modules must pass and\nreceive acknowledegments with the IBC modules as byte strings."}),"\n",(0,a.jsxs)(n.p,{children:["Thus, modules must agree on how to encode/decode acknowledgements. The process of creating an\nacknowledgement struct along with encoding and decoding it, is very similar to the packet data\nexample above. ",(0,a.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope",children:"ICS 04"}),"\nspecifies a recommended format for acknowledgements. This acknowledgement type can be imported from\n",(0,a.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/04-channel/types",children:"channel types"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["While modules may choose arbitrary acknowledgement structs, a default acknowledgement types is provided by IBC ",(0,a.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/proto/ibc/core/channel/v1/channel.proto",children:"here"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Acknowledgement is the recommended acknowledgement format to be used by\n// app-specific protocols.\n// NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental\n// conflicts with other protobuf message formats used for acknowledgements.\n// The first byte of any message with this format will be the non-ASCII values\n// `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:\n// https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope\nmessage Acknowledgement {\n  // response contains either a result or an error and must be non-empty\n  oneof response {\n    bytes  result = 21;\n    string error  = 22;\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var a=t(67294);const s={},o=a.createContext(s);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);