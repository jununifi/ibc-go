"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90640],{12510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(85893),o=n(11151);const i={title:"Keeper",sidebar_label:"Keeper",sidebar_position:4,slug:"/ibc/apps/keeper"},p="Keeper",s={id:"ibc/apps/keeper",title:"Keeper",description:"Learn how to implement the IBC Module keeper.",source:"@site/versioned_docs/version-v6.2.x/01-ibc/03-apps/04-keeper.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/keeper",permalink:"/v6/ibc/apps/keeper",draft:!1,unlisted:!1,tags:[],version:"v6.2.x",sidebarPosition:4,frontMatter:{title:"Keeper",sidebar_label:"Keeper",sidebar_position:4,slug:"/ibc/apps/keeper"},sidebar:"defaultSidebar",previous:{title:"Bind ports",permalink:"/v6/ibc/apps/bindports"},next:{title:"Define packets and acks",permalink:"/v6/ibc/apps/packets_acks"}},a={},c=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"keeper",children:"Keeper"}),"\n",(0,r.jsx)(t.admonition,{title:"Synopsis",type:"note",children:(0,r.jsx)(t.p,{children:"Learn how to implement the IBC Module keeper."})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/v6/ibc/overview",children:"IBC Overview"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/v6/ibc/integration",children:"IBC default integration"})}),"\n"]})]}),"\n",(0,r.jsxs)(t.p,{children:["In the previous sections, on channel handshake callbacks and port binding in ",(0,r.jsx)(t.code,{children:"InitGenesis"}),", a reference was made to keeper methods that need to be implemented when creating a custom IBC module. Below is an overview of how to define an IBC module's keeper."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note that some code has been left out for clarity, to get a full code overview, please refer to ",(0,r.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/apps/transfer/keeper/keeper.go",children:"the transfer module's keeper in the ibc-go repo"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"// Keeper defines the IBC app module keeper\ntype Keeper struct {\n\tstoreKey   sdk.StoreKey\n\tcdc        codec.BinaryCodec\n\tparamSpace paramtypes.Subspace\n\n\tchannelKeeper types.ChannelKeeper\n\tportKeeper    types.PortKeeper\n\tscopedKeeper  capabilitykeeper.ScopedKeeper\n\n    // ... additional according to custom logic\n}\n\n// NewKeeper creates a new IBC app module Keeper instance\nfunc NewKeeper(\n\t// args\n) Keeper {\n\t// ...\n\n\treturn Keeper{\n\t\tcdc:           cdc,\n\t\tstoreKey:      key,\n\t\tparamSpace:    paramSpace,\n\n\t\tchannelKeeper: channelKeeper,\n\t\tportKeeper:    portKeeper,\n\t\tscopedKeeper:  scopedKeeper,\n\n        // ... additional according to custom logic\n\t}\n}\n\n// IsBound checks if the IBC app module is already bound to the desired port\nfunc (k Keeper) IsBound(ctx sdk.Context, portID string) bool {\n\t_, ok := k.scopedKeeper.GetCapability(ctx, host.PortPath(portID))\n\treturn ok\n}\n\n// BindPort defines a wrapper function for the port Keeper's function in\n// order to expose it to module's InitGenesis function\nfunc (k Keeper) BindPort(ctx sdk.Context, portID string) error {\n\tcap := k.portKeeper.BindPort(ctx, portID)\n\treturn k.ClaimCapability(ctx, cap, host.PortPath(portID))\n}\n\n// GetPort returns the portID for the IBC app module. Used in ExportGenesis\nfunc (k Keeper) GetPort(ctx sdk.Context) string {\n\tstore := ctx.KVStore(k.storeKey)\n\treturn string(store.Get(types.PortKey))\n}\n\n// SetPort sets the portID for the IBC app module. Used in InitGenesis\nfunc (k Keeper) SetPort(ctx sdk.Context, portID string) {\n\tstore := ctx.KVStore(k.storeKey)\n\tstore.Set(types.PortKey, []byte(portID))\n}\n\n// AuthenticateCapability wraps the scopedKeeper's AuthenticateCapability function\nfunc (k Keeper) AuthenticateCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) bool {\n\treturn k.scopedKeeper.AuthenticateCapability(ctx, cap, name)\n}\n\n// ClaimCapability allows the IBC app module to claim a capability that core IBC\n// passes to it\nfunc (k Keeper) ClaimCapability(ctx sdk.Context, cap *capabilitytypes.Capability, name string) error {\n\treturn k.scopedKeeper.ClaimCapability(ctx, cap, name)\n}\n\n// ... additional according to custom logic\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>p});var r=n(67294);const o={},i=r.createContext(o);function p(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);