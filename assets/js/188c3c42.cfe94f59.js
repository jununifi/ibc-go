"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70447],{5776:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(85893),s=t(11151);const r={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/overview"},c="Overview",o={id:"light-clients/developer-guide/overview",title:"Overview",description:"Learn how to build IBC light client modules and fulfill the interfaces required to integrate with core IBC.",source:"@site/versioned_docs/version-v8.0.x/03-light-clients/01-developer-guide/01-overview.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/overview",permalink:"/v8/ibc/light-clients/overview",draft:!1,unlisted:!1,tags:[],version:"v8.0.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/light-clients/overview"},sidebar:"defaultSidebar",previous:{title:"Keeper API",permalink:"/v8/apps/interchain-accounts/legacy/keeper-api"},next:{title:"Client State interface",permalink:"/v8/ibc/light-clients/client-state"}},l={},d=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Concepts and vocabulary",id:"concepts-and-vocabulary",level:2},{value:"<code>ClientState</code>",id:"clientstate",level:3},{value:"<code>ConsensusState</code>",id:"consensusstate",level:3},{value:"<code>Height</code>",id:"height",level:3},{value:"<code>ClientMessage</code>",id:"clientmessage",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.admonition,{title:"Synopsis",type:"note",children:(0,n.jsx)(i.p,{children:"Learn how to build IBC light client modules and fulfill the interfaces required to integrate with core IBC."})}),"\n",(0,n.jsxs)(i.admonition,{type:"note",children:[(0,n.jsx)(i.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/v8/ibc/overview",children:"IBC Overview"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://tutorials.cosmos.network/academy/3-ibc/4-clients.html",children:"IBC Transport, Authentication, and Ordering Layer - Clients"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-002-client-semantics",children:"ICS-002 Client Semantics"})}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:"IBC uses light clients in order to provide trust-minimized interoperability between sovereign blockchains. Light clients operate under a strict set of rules which provide security guarantees for state updates and facilitate the ability to verify the state of a remote blockchain using merkle proofs."}),"\n",(0,n.jsxs)(i.p,{children:["The following aims to provide a high level IBC light client module developer guide. Access to IBC light clients are gated by the core IBC ",(0,n.jsx)(i.code,{children:"MsgServer"})," which utilizes the abstractions set by the ",(0,n.jsx)(i.code,{children:"02-client"})," submodule to call into a light client module. A light client module developer is only required to implement a set interfaces as defined in the ",(0,n.jsx)(i.code,{children:"modules/core/exported"})," package of ibc-go."]}),"\n",(0,n.jsx)(i.p,{children:"A light client module developer should be concerned with three main interfaces:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#clientstate",children:(0,n.jsx)(i.code,{children:"ClientState"})})," encapsulates the light client implementation and its semantics."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#consensusstate",children:(0,n.jsx)(i.code,{children:"ConsensusState"})})," tracks consensus data used for verification of client updates, misbehaviour detection and proof verification of counterparty state."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#clientmessage",children:(0,n.jsx)(i.code,{children:"ClientMessage"})})," used for submitting block headers for client updates and submission of misbehaviour evidence using conflicting headers."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Throughout this guide the ",(0,n.jsx)(i.code,{children:"07-tendermint"})," light client module may be referred to as a reference example."]}),"\n",(0,n.jsx)(i.h2,{id:"concepts-and-vocabulary",children:"Concepts and vocabulary"}),"\n",(0,n.jsx)(i.h3,{id:"clientstate",children:(0,n.jsx)(i.code,{children:"ClientState"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ClientState"})," is a term used to define the data structure which encapsulates opaque light client state. The ",(0,n.jsx)(i.code,{children:"ClientState"})," contains all the information needed to verify a ",(0,n.jsx)(i.code,{children:"ClientMessage"})," and perform membership and non-membership proof verification of counterparty state. This includes properties that refer to the remote state machine, the light client type and the specific light client instance."]}),"\n",(0,n.jsx)(i.p,{children:"For example:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Constraints used for client updates."}),"\n",(0,n.jsx)(i.li,{children:"Constraints used for misbehaviour detection."}),"\n",(0,n.jsx)(i.li,{children:"Constraints used for state verification."}),"\n",(0,n.jsx)(i.li,{children:"Constraints used for client upgrades."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"ClientState"})," type maintained within the light client module ",(0,n.jsx)(i.em,{children:"must"})," implement the ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L36",children:(0,n.jsx)(i.code,{children:"ClientState"})})," interface defined in ",(0,n.jsx)(i.code,{children:"core/modules/exported/client.go"}),".\nThe methods which make up this interface are detailed at a more granular level in the ",(0,n.jsx)(i.a,{href:"/v8/ibc/light-clients/client-state",children:"ClientState section of this guide"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Please refer to the ",(0,n.jsx)(i.code,{children:"07-tendermint"})," light client module's ",(0,n.jsxs)(i.a,{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/lightclients/tendermint/v1/tendermint.proto#L18",children:[(0,n.jsx)(i.code,{children:"ClientState"})," definition"]})," containing information such as chain ID, status, latest height, unbonding period and proof specifications."]}),"\n",(0,n.jsx)(i.h3,{id:"consensusstate",children:(0,n.jsx)(i.code,{children:"ConsensusState"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ConsensusState"})," is a term used to define the data structure which encapsulates consensus data at a particular point in time, i.e. a unique height or sequence number of a state machine. There must exist a single trusted ",(0,n.jsx)(i.code,{children:"ConsensusState"})," for each height. ",(0,n.jsx)(i.code,{children:"ConsensusState"})," generally contains a trusted root, validator set information and timestamp."]}),"\n",(0,n.jsxs)(i.p,{children:["For example, the ",(0,n.jsx)(i.code,{children:"ConsensusState"})," of the ",(0,n.jsx)(i.code,{children:"07-tendermint"})," light client module defines a trusted root which is used by the ",(0,n.jsx)(i.code,{children:"ClientState"})," to perform verification of membership and non-membership commitment proofs, as well as the next validator set hash used for verifying headers can be trusted in client updates."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"ConsensusState"})," type maintained within the light client module ",(0,n.jsx)(i.em,{children:"must"})," implement the ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/modules/core/exported/client.go#L134",children:(0,n.jsx)(i.code,{children:"ConsensusState"})})," interface defined in ",(0,n.jsx)(i.code,{children:"modules/core/exported/client.go"}),".\nThe methods which make up this interface are detailed at a more granular level in the ",(0,n.jsxs)(i.a,{href:"/v8/ibc/light-clients/consensus-state",children:[(0,n.jsx)(i.code,{children:"ConsensusState"})," section of this guide"]}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"height",children:(0,n.jsx)(i.code,{children:"Height"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Height"})," defines a monotonically increasing sequence number which provides ordering of consensus state data persisted through client updates.\nIBC light client module developers are expected to use the ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/tree/02-client-refactor-beta1/proto/ibc/core/client/v1/client.proto#L89",children:"concrete type"})," provided by the ",(0,n.jsx)(i.code,{children:"02-client"})," submodule. This implements the expectations required by the ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L156",children:(0,n.jsx)(i.code,{children:"Height"})})," interface defined in ",(0,n.jsx)(i.code,{children:"modules/core/exported/client.go"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"clientmessage",children:(0,n.jsx)(i.code,{children:"ClientMessage"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ClientMessage"})," refers to the interface type ",(0,n.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L147",children:(0,n.jsx)(i.code,{children:"ClientMessage"})})," used for performing updates to a ",(0,n.jsx)(i.code,{children:"ClientState"})," stored on chain.\nThis may be any concrete type which produces a change in state to the IBC client when verified."]}),"\n",(0,n.jsx)(i.p,{children:"The following are considered as valid update scenarios:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A block header which when verified inserts a new ",(0,n.jsx)(i.code,{children:"ConsensusState"})," at a unique height."]}),"\n",(0,n.jsxs)(i.li,{children:["A batch of block headers which when verified inserts ",(0,n.jsx)(i.code,{children:"N"})," ",(0,n.jsx)(i.code,{children:"ConsensusState"})," instances for ",(0,n.jsx)(i.code,{children:"N"})," unique heights."]}),"\n",(0,n.jsx)(i.li,{children:"Evidence of misbehaviour provided by two conflicting block headers."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Learn more in the ",(0,n.jsx)(i.a,{href:"/v8/ibc/light-clients/updates-and-misbehaviour",children:"Handling update and misbehaviour"})," section."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>c});var n=t(67294);const s={},r=n.createContext(s);function c(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);