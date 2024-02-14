"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19964],{60961:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=o(85893),n=o(11151);const s={title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:6,slug:"/ibc/light-clients/proofs"},r="Existence and non-existence proofs",a={id:"light-clients/developer-guide/proofs",title:"Existence/Non-Existence Proofs",description:"IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ICS-23 is a general approach for verifying merkle trees which is used in ibc-go.",source:"@site/docs/03-light-clients/01-developer-guide/06-proofs.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proofs",permalink:"/main/ibc/light-clients/proofs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Existence/Non-Existence Proofs",sidebar_label:"Existence/Non-Existence Proofs",sidebar_position:6,slug:"/ibc/light-clients/proofs"},sidebar:"defaultSidebar",previous:{title:"Handling Upgrades",permalink:"/main/ibc/light-clients/upgrades"},next:{title:"Handling Proposals",permalink:"/main/ibc/light-clients/proposals"}},c={},h=[{value:"Existence proofs",id:"existence-proofs",level:2},{value:"Non-existence proofs",id:"non-existence-proofs",level:2},{value:"State verification methods: <code>VerifyMembership</code> and <code>VerifyNonMembership</code>",id:"state-verification-methods-verifymembership-and-verifynonmembership",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"existence-and-non-existence-proofs",children:"Existence and non-existence proofs"}),"\n",(0,i.jsxs)(t.p,{children:["IBC uses merkle proofs in order to verify the state of a remote counterparty state machine given a trusted root, and ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ics23/tree/master/go",children:"ICS-23"})," is a general approach for verifying merkle trees which is used in ibc-go."]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, all Cosmos SDK modules contain their own stores, which maintain the state of the application module in an IAVL (immutable AVL) binary merkle tree format. Specifically with regard to IBC, core IBC maintains its own IAVL store, and IBC apps (e.g. transfer) maintain their own dedicated stores. The Cosmos SDK multistore therefore creates a simple merkle tree of all of these IAVL trees, and from each of these individual IAVL tree root hashes it derives a root hash for the application state tree as a whole (the ",(0,i.jsx)(t.code,{children:"AppHash"}),")."]}),"\n",(0,i.jsx)(t.p,{children:'For the purposes of ibc-go, there are two types of proofs which are important: existence and non-existence proofs, terms which have been used interchangeably with membership and non-membership proofs. For the purposes of this guide, we will stick with "existence" and "non-existence".'}),"\n",(0,i.jsx)(t.h2,{id:"existence-proofs",children:"Existence proofs"}),"\n",(0,i.jsx)(t.p,{children:"Existence proofs are used in IBC transactions which involve verification of counterparty state for transactions which will result in the writing of provable state. For example, this includes verification of IBC store state for handshakes and packets."}),"\n",(0,i.jsx)(t.p,{children:"Put simply, existence proofs prove that a particular key and value exists in the tree. Under the hood, an IBC existence proof comprises of two  proofs: an IAVL proof that the key exists in IBC store/IBC root hash, and a proof that the IBC root hash exists in the multistore root hash."}),"\n",(0,i.jsx)(t.h2,{id:"non-existence-proofs",children:"Non-existence proofs"}),"\n",(0,i.jsx)(t.p,{children:"Non-existence proofs verify the absence of data stored within counterparty state and are used to prove that a key does NOT exist in state. As stated above, these types of proofs can be used to timeout packets by proving that the counterparty has not written a packet receipt into the store, meaning that a token transfer has NOT successfully occurred."}),"\n",(0,i.jsxs)(t.p,{children:["Some trees (e.g. SMT) may have a sentinel empty child for non-existent keys. In this case, the ICS-23 proof spec should include this ",(0,i.jsx)(t.code,{children:"EmptyChild"})," so that ICS-23 handles the non-existence proof correctly."]}),"\n",(0,i.jsxs)(t.p,{children:['In some cases, there is a necessity to "mock" non-existence proofs if the counterparty does not have ability to prove absence. Since the verification method is designed to give complete control to client implementations, clients can support chains that do not provide absence proofs by verifying the existence of a non-empty sentinel ',(0,i.jsx)(t.code,{children:"ABSENCE"})," value. In these special cases, the proof provided will be an ICS-23 ",(0,i.jsx)(t.code,{children:"Existence"})," proof, and the client will verify that the ",(0,i.jsx)(t.code,{children:"ABSENCE"})," value is stored under the given path for the given height."]}),"\n",(0,i.jsxs)(t.h2,{id:"state-verification-methods-verifymembership-and-verifynonmembership",children:["State verification methods: ",(0,i.jsx)(t.code,{children:"VerifyMembership"})," and ",(0,i.jsx)(t.code,{children:"VerifyNonMembership"})]}),"\n",(0,i.jsxs)(t.p,{children:["The state verification functions for all IBC data types have been consolidated into two generic methods, ",(0,i.jsx)(t.code,{children:"VerifyMembership"})," and ",(0,i.jsx)(t.code,{children:"VerifyNonMembership"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["From the ",(0,i.jsxs)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L68-L91",children:[(0,i.jsx)(t.code,{children:"ClientState"})," interface definition"]}),", we find:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"VerifyMembership(\n  ctx sdk.Context,\n  clientStore sdk.KVStore,\n  cdc codec.BinaryCodec,\n  height Height,\n  delayTimePeriod uint64,\n  delayBlockPeriod uint64,\n  proof []byte,\n  path Path,\n  value []byte,\n) error\n\n// VerifyNonMembership is a generic proof verification method which verifies the absence of a given CommitmentPath at a specified height.\n// The caller is expected to construct the full CommitmentPath from a CommitmentPrefix and a standardized path (as defined in ICS 24).\nVerifyNonMembership(\n  ctx sdk.Context,\n  clientStore sdk.KVStore,\n  cdc codec.BinaryCodec,\n  height Height,\n  delayTimePeriod uint64,\n  delayBlockPeriod uint64,\n  proof []byte,\n  path Path,\n) error\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Both are expected to be provided with a standardised key path, ",(0,i.jsx)(t.code,{children:"exported.Path"}),", as defined in ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements",children:"ICS-24 host requirements"}),". Membership verification requires callers to provide the value marshalled as ",(0,i.jsx)(t.code,{children:"[]byte"}),". Delay period values should be zero for non-packet processing verification. A zero proof height is now allowed by core IBC and may be passed into ",(0,i.jsx)(t.code,{children:"VerifyMembership"})," and ",(0,i.jsx)(t.code,{children:"VerifyNonMembership"}),". Light clients are responsible for returning an error if a zero proof height is invalid behaviour."]}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/23-commitment/types/merkle.go#L131-L205",children:"ICS-23 implementation"})," for a concrete example."]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var i=o(67294);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);