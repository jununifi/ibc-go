"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71800],{83590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(85893),s=t(11151);const o={title:"Setup",sidebar_label:"Setup",sidebar_position:9,slug:"/ibc/light-clients/setup"},c="Setup",r={id:"light-clients/developer-guide/setup",title:"Setup",description:"Learn how to configure light client modules and create clients using core IBC and the 02-client submodule.",source:"@site/versioned_docs/version-v8.0.x/03-light-clients/01-developer-guide/09-setup.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/setup",permalink:"/v8/ibc/light-clients/setup",draft:!1,unlisted:!1,tags:[],version:"v8.0.x",sidebarPosition:9,frontMatter:{title:"Setup",sidebar_label:"Setup",sidebar_position:9,slug:"/ibc/light-clients/setup"},sidebar:"defaultSidebar",previous:{title:"Handling Genesis",permalink:"/v8/ibc/light-clients/genesis"},next:{title:"Overview",permalink:"/v8/ibc/light-clients/localhost/overview"}},l={},a=[{value:"Configuring a light client module",id:"configuring-a-light-client-module",level:2},{value:"Creating clients",id:"creating-clients",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,i.jsxs)(n.p,{children:["Learn how to configure light client modules and create clients using core IBC and the ",(0,i.jsx)(n.code,{children:"02-client"})," submodule."]})}),"\n",(0,i.jsxs)(n.p,{children:["A last step to finish the development of the light client, is to implement the ",(0,i.jsx)(n.code,{children:"AppModuleBasic"})," interface to allow it to be added to the chain's ",(0,i.jsx)(n.code,{children:"app.go"})," alongside other light client types the chain enables."]}),"\n",(0,i.jsx)(n.p,{children:"Finally, a succinct rundown is given of the remaining steps to make the light client operational, getting the light client type passed through governance and creating the clients."}),"\n",(0,i.jsx)(n.h2,{id:"configuring-a-light-client-module",children:"Configuring a light client module"}),"\n",(0,i.jsxs)(n.p,{children:["An IBC light client module must implement the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/types/module/module.go#L50",children:(0,i.jsx)(n.code,{children:"AppModuleBasic"})})," interface in order to register its concrete types against the core IBC interfaces defined in ",(0,i.jsx)(n.code,{children:"modules/core/exported"}),". This is accomplished via the ",(0,i.jsx)(n.code,{children:"RegisterInterfaces"})," method which provides the light client module with the opportunity to register codec types using the chain's ",(0,i.jsx)(n.code,{children:"InterfaceRegistry"}),". Please refer to the ",(0,i.jsxs)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/codec.go#L11",children:[(0,i.jsx)(n.code,{children:"07-tendermint"})," codec registration"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AppModuleBasic"})," interface may also be leveraged to install custom CLI handlers for light client module users. Light client modules can safely no-op for interface methods which it does not wish to implement."]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to the ",(0,i.jsx)(n.a,{href:"/v8/ibc/integration#integrating-light-clients",children:"core IBC documentation"})," for how to configure additional light client modules alongside ",(0,i.jsx)(n.code,{children:"07-tendermint"})," in ",(0,i.jsx)(n.code,{children:"app.go"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["See below for an example of the ",(0,i.jsx)(n.code,{children:"07-tendermint"})," implementation of ",(0,i.jsx)(n.code,{children:"AppModuleBasic"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"var _ module.AppModuleBasic = AppModuleBasic{}\n\n// AppModuleBasic defines the basic application module used by the tendermint light client.\n// Only the RegisterInterfaces function needs to be implemented. All other function perform\n// a no-op.\ntype AppModuleBasic struct{}\n\n// Name returns the tendermint module name.\nfunc (AppModuleBasic) Name() string {\n  return ModuleName\n}\n\n// RegisterLegacyAminoCodec performs a no-op. The Tendermint client does not support amino.\nfunc (AppModuleBasic) RegisterLegacyAminoCodec(*codec.LegacyAmino) {}\n\n// RegisterInterfaces registers module concrete types into protobuf Any. This allows core IBC\n// to unmarshal tendermint light client types.\nfunc (AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {\n  RegisterInterfaces(registry)\n}\n\n// DefaultGenesis performs a no-op. Genesis is not supported for the tendermint light client.\nfunc (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {\n  return nil\n}\n\n// ValidateGenesis performs a no-op. Genesis is not supported for the tendermint light client.\nfunc (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, config client.TxEncodingConfig, bz json.RawMessage) error {\n  return nil\n}\n\n// RegisterGRPCGatewayRoutes performs a no-op.\nfunc (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {}\n\n// GetTxCmd performs a no-op. Please see the 02-client cli commands.\nfunc (AppModuleBasic) GetTxCmd() *cobra.Command {\n  return nil\n}\n\n// GetQueryCmd performs a no-op. Please see the 02-client cli commands.\nfunc (AppModuleBasic) GetQueryCmd() *cobra.Command {\n  return nil\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-clients",children:"Creating clients"}),"\n",(0,i.jsxs)(n.p,{children:["A client is created by executing a new ",(0,i.jsx)(n.code,{children:"MsgCreateClient"})," transaction composed with a valid ",(0,i.jsx)(n.code,{children:"ClientState"})," and initial ",(0,i.jsx)(n.code,{children:"ConsensusState"})," encoded as protobuf ",(0,i.jsx)(n.code,{children:"Any"}),"s.\nGenerally, this is performed by an off-chain process known as an ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/main/spec/relayer/ics-018-relayer-algorithms",children:"IBC relayer"})," however, this is not a strict requirement."]}),"\n",(0,i.jsx)(n.p,{children:"See below for a list of IBC relayer implementations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/relayer",children:"cosmos/relayer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/informalsystems/hermes",children:"informalsystems/hermes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/confio/ts-relayer",children:"confio/ts-relayer"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Stateless checks are performed within the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/msgs.go#L48",children:(0,i.jsx)(n.code,{children:"ValidateBasic"})})," method of ",(0,i.jsx)(n.code,{children:"MsgCreateClient"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:'// MsgCreateClient defines a message to create an IBC client\nmessage MsgCreateClient {\n  option (gogoproto.goproto_getters) = false;\n\n  // light client state\n  google.protobuf.Any client_state = 1 [(gogoproto.moretags) = "yaml:\\"client_state\\""];\n  // consensus state associated with the client that corresponds to a given\n  // height.\n  google.protobuf.Any consensus_state = 2 [(gogoproto.moretags) = "yaml:\\"consensus_state\\""];\n  // signer address\n  string signer = 3;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Leveraging protobuf ",(0,i.jsx)(n.code,{children:"Any"})," encoding allows core IBC to ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/keeper/msg_server.go#L28-L36",children:"unpack"})," both the ",(0,i.jsx)(n.code,{children:"ClientState"})," and ",(0,i.jsx)(n.code,{children:"ConsensusState"})," into their respective interface types registered previously using the light client module's ",(0,i.jsx)(n.code,{children:"RegisterInterfaces"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["Within the ",(0,i.jsx)(n.code,{children:"02-client"})," submodule, the ",(0,i.jsxs)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30-L32",children:[(0,i.jsx)(n.code,{children:"ClientState"})," is then initialized"]})," with its own isolated key-value store, namespaced using a unique client identifier."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to successfully create an IBC client using a new client type, it ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L19-L25",children:"must be supported"}),". Light client support in IBC is gated by on-chain governance. The allow list may be updated by submitting a new governance proposal to update the ",(0,i.jsx)(n.code,{children:"02-client"})," parameter ",(0,i.jsx)(n.code,{children:"AllowedClients"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"See below for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"%s tx gov submit-proposal <path/to/proposal.json> --from <key_or_address>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"proposal.json"})," contains:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "title": "IBC Clients Param Change",\n  "summary": "Update allowed clients",\n  "messages": [\n    {\n      "@type": "/ibc.core.client.v1.MsgUpdateParams",\n      "signer": "cosmos1...", // The gov module account address\n      "params": {\n        "allowed_clients": ["06-solomachine", "07-tendermint", "0x-new-client"]\n      }\n    }\n  ],\n  "metadata": "AQ==",\n  "deposit": "100stake"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var i=t(67294);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);