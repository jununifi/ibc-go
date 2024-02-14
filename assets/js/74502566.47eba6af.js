"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28636],{34077:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const c={title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},a="Messages",r={id:"apps/interchain-accounts/messages",title:"Messages",description:"MsgRegisterInterchainAccount",source:"@site/versioned_docs/version-v8.1.x/02-apps/02-interchain-accounts/05-messages.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/messages",permalink:"/v8.1.x/apps/interchain-accounts/messages",draft:!1,unlisted:!1,tags:[],version:"v8.1.x",sidebarPosition:5,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v8.1.x/apps/interchain-accounts/integration"},next:{title:"Parameters",permalink:"/v8.1.x/apps/interchain-accounts/parameters"}},o={},d=[{value:"<code>MsgRegisterInterchainAccount</code>",id:"msgregisterinterchainaccount",level:2},{value:"<code>MsgSendTx</code>",id:"msgsendtx",level:2},{value:"Atomicity",id:"atomicity",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"messages",children:"Messages"}),"\n",(0,t.jsx)(n.h2,{id:"msgregisterinterchainaccount",children:(0,t.jsx)(n.code,{children:"MsgRegisterInterchainAccount"})}),"\n",(0,t.jsxs)(n.p,{children:["An Interchain Accounts channel handshake can be initiated using ",(0,t.jsx)(n.code,{children:"MsgRegisterInterchainAccount"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgRegisterInterchainAccount struct {\n  Owner        string\n  ConnectionID string\n  Version      string\n  Ordering     channeltypes.Order\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This message is expected to fail if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Owner"})," is an empty string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionID"})," is invalid (see ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This message will construct a new ",(0,t.jsx)(n.code,{children:"MsgChannelOpenInit"})," on chain and route it to the core IBC message server to initiate the opening step of the channel handshake."]}),"\n",(0,t.jsxs)(n.p,{children:["The controller submodule will generate a new port identifier and claim the associated port capability. The caller is expected to provide an appropriate application version string. For example, this may be an ICS-27 JSON encoded ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L11",children:(0,t.jsx)(n.code,{children:"Metadata"})})," type or an ICS-29 JSON encoded ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/fee/v1/metadata.proto#L11",children:(0,t.jsx)(n.code,{children:"Metadata"})})," type with a nested application version.\nIf the ",(0,t.jsx)(n.code,{children:"Version"})," string is omitted, the controller submodule will construct a default version string in the ",(0,t.jsx)(n.code,{children:"OnChanOpenInit"})," handshake callback."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgRegisterInterchainAccountResponse struct {\n  ChannelID string\n  PortId string\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ChannelID"})," and ",(0,t.jsx)(n.code,{children:"PortID"})," are returned in the message response."]}),"\n",(0,t.jsx)(n.h2,{id:"msgsendtx",children:(0,t.jsx)(n.code,{children:"MsgSendTx"})}),"\n",(0,t.jsxs)(n.p,{children:["An Interchain Accounts transaction can be executed on a remote host chain by sending a ",(0,t.jsx)(n.code,{children:"MsgSendTx"})," from the corresponding controller chain:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgSendTx struct {\n  Owner           string\n  ConnectionID    string\n  PacketData      InterchainAccountPacketData \n  RelativeTimeout uint64\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This message is expected to fail if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Owner"})," is an empty string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionID"})," is invalid (see ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PacketData"})," contains an ",(0,t.jsx)(n.code,{children:"UNSPECIFIED"})," type enum, the length of ",(0,t.jsx)(n.code,{children:"Data"})," bytes is zero or the ",(0,t.jsx)(n.code,{children:"Memo"})," field exceeds 256 characters in length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RelativeTimeout"})," is zero."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This message will create a new IBC packet with the provided ",(0,t.jsx)(n.code,{children:"PacketData"})," and send it via the channel associated with the ",(0,t.jsx)(n.code,{children:"Owner"})," and ",(0,t.jsx)(n.code,{children:"ConnectionID"}),".\nThe ",(0,t.jsx)(n.code,{children:"PacketData"})," is expected to contain a list of serialized ",(0,t.jsx)(n.code,{children:"[]sdk.Msg"})," in the form of ",(0,t.jsx)(n.code,{children:"CosmosTx"}),". Please note the signer field of each ",(0,t.jsx)(n.code,{children:"sdk.Msg"})," must be the interchain account address.\nWhen the packet is relayed to the host chain, the ",(0,t.jsx)(n.code,{children:"PacketData"})," is unmarshalled and the messages are authenticated and executed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgSendTxResponse struct {\n  Sequence uint64\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The packet ",(0,t.jsx)(n.code,{children:"Sequence"})," is returned in the message response."]}),"\n",(0,t.jsx)(n.h2,{id:"atomicity",children:"Atomicity"}),"\n",(0,t.jsxs)(n.p,{children:["As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,t.jsx)(n.code,{children:"Msg"})," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore",children:(0,t.jsx)(n.code,{children:"CacheMultiStore"})})," architecture provided by the ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/learn/advanced/context.html",children:(0,t.jsx)(n.code,{children:"Context"})})," type."]}),"\n",(0,t.jsxs)(n.p,{children:["This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,t.jsx)(n.code,{children:"Msg"}),"s succeed."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(67294);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);