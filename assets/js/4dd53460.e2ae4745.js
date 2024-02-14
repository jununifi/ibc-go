"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23150],{54825:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=i(85893),n=i(11151);const o={title:"Client State interface",sidebar_label:"Client State interface",sidebar_position:2,slug:"/ibc/light-clients/client-state"},d="Implementing the ClientState interface",c={id:"light-clients/developer-guide/client-state",title:"Client State interface",description:"Learn how to implement the ClientState interface. This list of methods described here does not include all methods of the interface. Some methods are explained in detail in the relevant sections of the guide.",source:"@site/versioned_docs/version-v8.1.x/03-light-clients/01-developer-guide/02-client-state.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/client-state",permalink:"/v8.1.x/ibc/light-clients/client-state",draft:!1,unlisted:!1,tags:[],version:"v8.1.x",sidebarPosition:2,frontMatter:{title:"Client State interface",sidebar_label:"Client State interface",sidebar_position:2,slug:"/ibc/light-clients/client-state"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v8.1.x/ibc/light-clients/overview"},next:{title:"Consensus State interface",permalink:"/v8.1.x/ibc/light-clients/consensus-state"}},l={},h=[{value:"<code>ClientType</code> method",id:"clienttype-method",level:2},{value:"<code>GetLatestHeight</code> method",id:"getlatestheight-method",level:2},{value:"<code>Validate</code> method",id:"validate-method",level:2},{value:"<code>Status</code> method",id:"status-method",level:2},{value:"<code>ZeroCustomFields</code> method",id:"zerocustomfields-method",level:2},{value:"<code>GetTimestampAtHeight</code> method",id:"gettimestampatheight-method",level:2},{value:"<code>Initialize</code> method",id:"initialize-method",level:2},{value:"<code>VerifyMembership</code> method",id:"verifymembership-method",level:2},{value:"<code>VerifyNonMembership</code> method",id:"verifynonmembership-method",level:2},{value:"<code>VerifyClientMessage</code> method",id:"verifyclientmessage-method",level:2},{value:"<code>CheckForMisbehaviour</code> method",id:"checkformisbehaviour-method",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"implementing-the-clientstate-interface",children:["Implementing the ",(0,s.jsx)(t.code,{children:"ClientState"})," interface"]}),"\n",(0,s.jsxs)(t.p,{children:["Learn how to implement the ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L36",children:(0,s.jsx)(t.code,{children:"ClientState"})})," interface. This list of methods described here does not include all methods of the interface. Some methods are explained in detail in the relevant sections of the guide."]}),"\n",(0,s.jsxs)(t.h2,{id:"clienttype-method",children:[(0,s.jsx)(t.code,{children:"ClientType"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ClientType"})," should return a unique string identifier of the light client. This will be used when generating a client identifier.\nThe format is created as follows: ",(0,s.jsx)(t.code,{children:"ClientType-{N}"})," where ",(0,s.jsx)(t.code,{children:"{N}"})," is the unique global nonce associated with a specific client."]}),"\n",(0,s.jsxs)(t.h2,{id:"getlatestheight-method",children:[(0,s.jsx)(t.code,{children:"GetLatestHeight"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GetLatestHeight"})," should return the latest block height that the client state represents."]}),"\n",(0,s.jsxs)(t.h2,{id:"validate-method",children:[(0,s.jsx)(t.code,{children:"Validate"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Validate"})," should validate every client state field and should return an error if any value is invalid. The light client\nimplementer is in charge of determining which checks are required. See the ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/client_state.go#L111",children:"Tendermint light client implementation"})," as a reference."]}),"\n",(0,s.jsxs)(t.h2,{id:"status-method",children:[(0,s.jsx)(t.code,{children:"Status"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Status"})," must return the status of the client."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(t.code,{children:"Active"})," status indicates that clients are allowed to process packets."]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.code,{children:"Frozen"})," status indicates that misbehaviour was detected in the counterparty chain and the client is not allowed to be used."]}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(t.code,{children:"Expired"})," status indicates that a client is not allowed to be used because it was not updated for longer than the trusting period."]}),"\n",(0,s.jsxs)(t.li,{children:["An ",(0,s.jsx)(t.code,{children:"Unknown"})," status indicates that there was an error in determining the status of a client."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["All possible ",(0,s.jsx)(t.code,{children:"Status"})," types can be found ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L22-L32",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This field is returned in the response of the gRPC ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/query.pb.go#L665",children:(0,s.jsx)(t.code,{children:"ibc.core.client.v1.Query/ClientStatus"})})," endpoint."]}),"\n",(0,s.jsxs)(t.h2,{id:"zerocustomfields-method",children:[(0,s.jsx)(t.code,{children:"ZeroCustomFields"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ZeroCustomFields"})," should return a copy of the light client with all client customizable fields with their zero value. It should not mutate the fields of the light client.\nThis method is used when ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/proposal.go#L82",children:"scheduling upgrades"}),". Upgrades are used to upgrade chain specific fields.\nIn the tendermint case, this may be the chain ID or the unbonding period.\nFor more information about client upgrades see the ",(0,s.jsx)(t.a,{href:"/v8.1.x/ibc/light-clients/upgrades",children:"Handling upgrades"})," section."]}),"\n",(0,s.jsxs)(t.h2,{id:"gettimestampatheight-method",children:[(0,s.jsx)(t.code,{children:"GetTimestampAtHeight"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"GetTimestampAtHeight"})," must return the timestamp for the consensus state associated with the provided height.\nThis value is used to facilitate timeouts by checking the packet timeout timestamp against the returned value."]}),"\n",(0,s.jsxs)(t.h2,{id:"initialize-method",children:[(0,s.jsx)(t.code,{children:"Initialize"})," method"]}),"\n",(0,s.jsx)(t.p,{children:"Clients must validate the initial consensus state, and set the initial client state and consensus state in the provided client store.\nClients may also store any necessary client-specific metadata."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Initialize"})," is called when a ",(0,s.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30",children:"client is created"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"verifymembership-method",children:[(0,s.jsx)(t.code,{children:"VerifyMembership"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VerifyMembership"})," must verify the existence of a value at a given commitment path at the specified height. For more information about membership proofs\nsee the ",(0,s.jsx)(t.a,{href:"/v8.1.x/ibc/light-clients/proofs",children:"Existence and non-existence proofs section"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"verifynonmembership-method",children:[(0,s.jsx)(t.code,{children:"VerifyNonMembership"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VerifyNonMembership"})," must verify the absence of a value at a given commitment path at a specified height. For more information about non-membership proofs\nsee the ",(0,s.jsx)(t.a,{href:"/v8.1.x/ibc/light-clients/proofs",children:"Existence and non-existence proofs section"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"verifyclientmessage-method",children:[(0,s.jsx)(t.code,{children:"VerifyClientMessage"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VerifyClientMessage"})," must verify a ",(0,s.jsx)(t.code,{children:"ClientMessage"}),". A ",(0,s.jsx)(t.code,{children:"ClientMessage"})," could be a ",(0,s.jsx)(t.code,{children:"Header"}),", ",(0,s.jsx)(t.code,{children:"Misbehaviour"}),", or batch update.\nIt must handle each type of ",(0,s.jsx)(t.code,{children:"ClientMessage"})," appropriately. Calls to ",(0,s.jsx)(t.code,{children:"CheckForMisbehaviour"}),", ",(0,s.jsx)(t.code,{children:"UpdateState"}),", and ",(0,s.jsx)(t.code,{children:"UpdateStateOnMisbehaviour"}),"\nwill assume that the content of the ",(0,s.jsx)(t.code,{children:"ClientMessage"})," has been verified and can be trusted. An error should be returned\nif the ClientMessage fails to verify."]}),"\n",(0,s.jsxs)(t.h2,{id:"checkformisbehaviour-method",children:[(0,s.jsx)(t.code,{children:"CheckForMisbehaviour"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:["Checks for evidence of a misbehaviour in ",(0,s.jsx)(t.code,{children:"Header"})," or ",(0,s.jsx)(t.code,{children:"Misbehaviour"})," type. It assumes the ",(0,s.jsx)(t.code,{children:"ClientMessage"}),"\nhas already been verified."]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>d});var s=i(67294);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);