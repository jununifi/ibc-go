"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35226],{54410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(85893),s=n(11151);const o={title:"Governance Proposals",sidebar_label:"Governance Proposals",sidebar_position:6,slug:"/ibc/proposals"},a="Governance Proposals",r={id:"ibc/proposals",title:"Governance Proposals",description:"In uncommon situations, a highly valued client may become frozen due to uncontrollable",source:"@site/versioned_docs/version-v6.2.x/01-ibc/06-proposals.md",sourceDirName:"01-ibc",slug:"/ibc/proposals",permalink:"/v6/ibc/proposals",draft:!1,unlisted:!1,tags:[],version:"v6.2.x",sidebarPosition:6,frontMatter:{title:"Governance Proposals",sidebar_label:"Governance Proposals",sidebar_position:6,slug:"/ibc/proposals"},sidebar:"defaultSidebar",previous:{title:"Genesis Restart Upgrades",permalink:"/v6/ibc/upgrades/genesis-restart"},next:{title:"Relayer",permalink:"/v6/ibc/relayer"}},l={},c=[{value:"How to recover an expired client with a governance proposal",id:"how-to-recover-an-expired-client-with-a-governance-proposal",level:2},{value:"Preconditions",id:"preconditions",level:3},{value:"Steps",id:"steps",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Important considerations",id:"important-considerations",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"governance-proposals",children:"Governance Proposals"}),"\n",(0,i.jsx)(t.p,{children:"In uncommon situations, a highly valued client may become frozen due to uncontrollable\ncircumstances. A highly valued client might have hundreds of channels being actively used.\nSome of those channels might have a significant amount of locked tokens used for ICS 20."}),"\n",(0,i.jsx)(t.p,{children:"If the one third of the validator set of the chain the client represents decides to collude,\nthey can sign off on two valid but conflicting headers each signed by the other one third\nof the honest validator set. The light client can now be updated with two valid, but conflicting\nheaders at the same height. The light client cannot know which header is trustworthy and therefore\nevidence of such misbehaviour is likely to be submitted resulting in a frozen light client."}),"\n",(0,i.jsx)(t.p,{children:'Frozen light clients cannot be updated under any circumstance except via a governance proposal.\nSince a quorum of validators can sign arbitrary state roots which may not be valid executions\nof the state machine, a governance proposal has been added to ease the complexity of unfreezing\nor updating clients which have become "stuck". Without this mechanism, validator sets would need\nto construct a state root to unfreeze the client. Unfreezing clients, re-enables all of the channels\nbuilt upon that client. This may result in recovery of otherwise lost funds.'}),"\n",(0,i.jsx)(t.p,{children:"Tendermint light clients may become expired if the trusting period has passed since their\nlast update. This may occur if relayers stop submitting headers to update the clients."}),"\n",(0,i.jsx)(t.p,{children:"An unplanned upgrade by the counterparty chain may also result in expired clients. If the counterparty\nchain undergoes an unplanned upgrade, there may be no commitment to that upgrade signed by the validator\nset before the chain-id changes. In this situation, the validator set of the last valid update for the\nlight client is never expected to produce another valid header since the chain-id has changed, which will\nultimately lead the on-chain light client to become expired."}),"\n",(0,i.jsxs)(t.p,{children:['In the case that a highly valued light client is frozen, expired, or rendered non-updateable, a\ngovernance proposal may be submitted to update this client, known as the subject client. The\nproposal includes the client identifier for the subject and the client identifier for a substitute\nclient. Light client implementations may implement custom updating logic, but in most cases,\nthe subject will be updated to the latest consensus state of the substitute client, if the proposal passes.\nThe substitute client is used as a "stand in" while the subject is on trial. It is best practice to create\na substitute client ',(0,i.jsx)(t.em,{children:"after"})," the subject has become frozen to avoid the substitute from also becoming frozen.\nAn active substitute client allows headers to be submitted during the voting period to prevent accidental expiry\nonce the proposal passes."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-recover-an-expired-client-with-a-governance-proposal",children:"How to recover an expired client with a governance proposal"}),"\n",(0,i.jsxs)(t.p,{children:["See also the relevant documentation: ",(0,i.jsx)(t.a,{href:"/architecture/adr-026-ibc-client-recovery-mechanisms",children:"ADR-026, IBC client recovery mechanisms"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Who is this information for?"}),"\nAlthough technically anyone can submit the governance proposal to recover an expired client, often it will be ",(0,i.jsx)(t.strong,{children:"relayer operators"})," (at least coordinating the submission)."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The chain is updated with ibc-go >= v1.1.0."}),"\n",(0,i.jsx)(t.li,{children:"There exists an active client (with a known client identifier) for the same counterparty chain as the expired client."}),"\n",(0,i.jsx)(t.li,{children:"The governance deposit."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(t.h3,{id:"step-1",children:"Step 1"}),"\n",(0,i.jsxs)(t.p,{children:["Check if the client is attached to the expected ",(0,i.jsx)(t.code,{children:"chain-id"}),". For example, for an expired Tendermint client representing the Akash chain the client state looks like this on querying the client state:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"{\n  client_id: 07-tendermint-146\n  client_state:\n  '@type': /ibc.lightclients.tendermint.v1.ClientState\n  allow_update_after_expiry: true\n  allow_update_after_misbehaviour: true\n  chain_id: akashnet-2\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The client is attached to the expected Akash ",(0,i.jsx)(t.code,{children:"chain-id"}),". Note that although the parameters (",(0,i.jsx)(t.code,{children:"allow_update_after_expiry"})," and ",(0,i.jsx)(t.code,{children:"allow_update_after_misbehaviour"}),") exist to signal intent, these parameters have been deprecated and will not enforce any checks on the revival of client. See ADR-026 for more context on this deprecation."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2",children:"Step 2"}),"\n",(0,i.jsx)(t.p,{children:"If the chain has been updated to ibc-go >= v1.1.0, anyone can submit the governance proposal to recover the client by executing this via CLI."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note that the Cosmos SDK has updated how governance proposals are submitted in SDK v0.46, now requiring to pass a .json proposal file"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"From SDK v0.46.x onwards"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"<binary> tx gov submit-proposal [path-to-proposal-json]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"proposal.json"})," contains:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "messages": [\n    {\n      "@type": "/ibc.core.client.v1.ClientUpdateProposal",\n      "title": "title_string",\n      "description": "description_string",\n      "subject_client_id": "expired_client_id_string",\n      "substitute_client_id": "active_client_id_string"\n    }\n  ],\n  "metadata": "<metadata>",\n  "deposit": "10stake"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Alternatively there's a legacy command (that is no longer recommended though):"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"<binary> tx gov submit-legacy-proposal update-client <expired-client-id> <active-client-id>\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Until SDK v0.45.x"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"<binary> tx gov submit-proposal update-client <expired-client-id> <active-client-id>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"<expired-client-id>"})," identifier is the proposed client to be updated. This client must be either frozen or expired."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"<active-client-id>"})," represents a substitute client. It carries all the state for the client which may be updated. It must have identical client and chain parameters to the client which may be updated (except for latest height, frozen height, and chain ID). It should be continually updated during the voting period."]}),"\n",(0,i.jsx)(t.p,{children:"After this, all that remains is deciding who funds the governance deposit and ensuring the governance proposal passes. If it does, the client on trial will be updated to the latest state of the substitute."}),"\n",(0,i.jsx)(t.h2,{id:"important-considerations",children:"Important considerations"}),"\n",(0,i.jsx)(t.p,{children:"Please note that from v1.0.0 of ibc-go it will not be allowed for transactions to go to expired clients anymore, so please update to at least this version to prevent similar issues in the future."}),"\n",(0,i.jsx)(t.p,{children:"Please also note that if the client on the other end of the transaction is also expired, that client will also need to update. This process updates only one client."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);