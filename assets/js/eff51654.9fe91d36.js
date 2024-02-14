"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54926],{27773:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(85893),o=n(11151);const s={title:"IBC-Go v8 to v8.1",sidebar_label:"IBC-Go v8 to v8.1",sidebar_position:12,slug:"/migrations/v8-to-v8_1"},r="Migrating from v8 to v8.1",a={id:"migrations/v8-to-v8_1",title:"IBC-Go v8 to v8.1",description:"This guide provides instructions for migrating to version v8.1.0 of ibc-go.",source:"@site/docs/05-migrations/12-v8-to-v8_1.md",sourceDirName:"05-migrations",slug:"/migrations/v8-to-v8_1",permalink:"/main/migrations/v8-to-v8_1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"IBC-Go v8 to v8.1",sidebar_label:"IBC-Go v8 to v8.1",sidebar_position:12,slug:"/migrations/v8-to-v8_1"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v7 to v8",permalink:"/main/migrations/v7-to-v8"},next:{title:"IBC-Go v8 to v9",permalink:"/main/migrations/v8-to-v9"}},c={},l=[{value:"Chains",id:"chains",level:2},{value:"<code>04-channel</code> params migration",id:"04-channel-params-migration",level:3},{value:"Fee migration",id:"fee-migration",level:3},{value:"IBC apps",id:"ibc-apps",level:2},{value:"Relayers",id:"relayers",level:2},{value:"IBC light clients",id:"ibc-light-clients",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"migrating-from-v8-to-v81",children:"Migrating from v8 to v8.1"}),"\n",(0,t.jsxs)(i.p,{children:["This guide provides instructions for migrating to version ",(0,t.jsx)(i.code,{children:"v8.1.0"})," of ibc-go."]}),"\n",(0,t.jsx)(i.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#migrating-from-v8-to-v81",children:"Migrating from v8 to v8.1"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#chains",children:"Chains"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#ibc-apps",children:"IBC apps"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#relayers",children:"Relayers"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#ibc-light-clients",children:"IBC light clients"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases."]}),"\n",(0,t.jsx)(i.h2,{id:"chains",children:"Chains"}),"\n",(0,t.jsxs)(i.h3,{id:"04-channel-params-migration",children:[(0,t.jsx)(i.code,{children:"04-channel"})," params migration"]}),"\n",(0,t.jsxs)(i.p,{children:["Self-managed ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.1.0/proto/ibc/core/channel/v1/channel.proto#L183-L187",children:"params"})," have been added for ",(0,t.jsx)(i.code,{children:"04-channel"})," module. The params include the ",(0,t.jsx)(i.code,{children:"upgrade_timeout"})," that is used in channel upgradability to specify the interval of time during which the counterparty chain must flush all in-flight packets on its end and move to ",(0,t.jsx)(i.code,{children:"FLUSH_COMPLETE"})," state (see ",(0,t.jsx)(i.a,{href:"../01-ibc/06-channel-upgrades.md#",children:"Channel Upgrades"})," for more information). An ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.1.0/modules/core/module.go#L162-L166",children:"automatic migration handler"})," is configured in the ",(0,t.jsx)(i.code,{children:"04-channel"})," module that sets the default params (with a default upgrade timeout of 10 minutes). The module has a corresponding ",(0,t.jsxs)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.1.0/proto/ibc/core/channel/v1/tx.proto#L435-L447",children:[(0,t.jsx)(i.code,{children:"MsgUpdateParams"})," message"]})," with a ",(0,t.jsx)(i.code,{children:"Params"})," field which can be specified in full to update the module's ",(0,t.jsx)(i.code,{children:"Params"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"fee-migration",children:"Fee migration"}),"\n",(0,t.jsxs)(i.p,{children:["In ibc-go v8.1.0 an improved, more efficient escrow calculation of fees for packet incentivisation has been introduced (see ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/issues/5509",children:"this issue"})," for more information). Before v8.1.0 the amount escrowed was ",(0,t.jsx)(i.code,{children:"(ReckFee + AckFee + TimeoutFee)"}),"; from ibc-go v8.1.0, the calculation is changed to ",(0,t.jsx)(i.code,{children:"Max(RecvFee + AckFee, TimeoutFee)"}),". In order to guarantee that the correct amount of fees are refunded for packets that are in-flight during the upgrade to ibc-go v8.1.0, an ",(0,t.jsx)(i.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.1.0/modules/apps/29-fee/module.go#L113-L115",children:"automatic migration handler"})," is configured in the ",(0,t.jsx)(i.code,{children:"29-fee"})," module to refund the leftover fees (i.e ",(0,t.jsx)(i.code,{children:"(ReckFee + AckFee + TimeoutFee) - Max(RecvFee + AckFee, TimeoutFee)"}),") that otherwise would not be refunded when the packet lifecycle completes and the new calculation is used."]}),"\n",(0,t.jsx)(i.h2,{id:"ibc-apps",children:"IBC apps"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"relayers",children:"Relayers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"ibc-light-clients",children:"IBC light clients"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"No relevant changes were made in this release."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var t=n(67294);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);