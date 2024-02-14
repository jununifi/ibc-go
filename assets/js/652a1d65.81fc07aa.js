"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37373],{48806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(85893),a=t(11151);const i={title:"Integration",sidebar_label:"Integration",sidebar_position:4,slug:"/apps/interchain-accounts/integration"},r="Integration",c={id:"apps/interchain-accounts/integration",title:"Integration",description:"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains.",source:"@site/versioned_docs/version-v4.5.x/02-apps/02-interchain-accounts/04-integration.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/integration",permalink:"/v4/apps/interchain-accounts/integration",draft:!1,unlisted:!1,tags:[],version:"v4.5.x",sidebarPosition:4,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:4,slug:"/apps/interchain-accounts/integration"},sidebar:"defaultSidebar",previous:{title:"Active Channels",permalink:"/v4/apps/interchain-accounts/active-channels"},next:{title:"Parameters",permalink:"/v4/apps/interchain-accounts/parameters"}},s={},l=[{value:"Example integration",id:"example-integration",level:2},{value:"Using submodules exclusively",id:"using-submodules-exclusively",level:3},{value:"Disabling controller chain functionality",id:"disabling-controller-chain-functionality",level:4},{value:"Disabling host chain functionality",id:"disabling-host-chain-functionality",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"integration",children:"Integration"}),"\n",(0,o.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,o.jsx)(n.p,{children:"Learn how to integrate Interchain Accounts host and controller functionality to your chain. The following document only applies for Cosmos SDK chains."})}),"\n",(0,o.jsxs)(n.p,{children:["The Interchain Accounts module contains two submodules. Each submodule has its own IBC application. The Interchain Accounts module should be registered as an ",(0,o.jsx)(n.code,{children:"AppModule"})," in the same way all SDK modules are registered on a chain, but each submodule should create its own ",(0,o.jsx)(n.code,{children:"IBCModule"})," as necessary. A route should be added to the IBC router for each submodule which will be used."]}),"\n",(0,o.jsxs)(n.p,{children:["Chains who wish to support ICS27 may elect to act as a host chain, a controller chain or both. Disabling host or controller functionality may be done statically by excluding the host or controller module entirely from the ",(0,o.jsx)(n.code,{children:"app.go"})," file or it may be done dynamically by taking advantage of the on-chain parameters which enable or disable the host or controller submodules."]}),"\n",(0,o.jsx)(n.p,{children:"Interchain Account authentication modules are the base application of a middleware stack. The controller submodule is the middleware in this stack."}),"\n",(0,o.jsx)(n.h2,{id:"example-integration",children:"Example integration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// app.go\n\n// Register the AppModule for the Interchain Accounts module and the authentication module\n// Note: No `icaauth` exists, this must be substituted with an actual Interchain Accounts authentication module\nModuleBasics = module.NewBasicManager(\n    ...\n    ica.AppModuleBasic{},\n    icaauth.AppModuleBasic{},\n    ...\n)\n\n... \n\n// Add module account permissions for the Interchain Accounts module\n// Only necessary for host chain functionality\n// Each Interchain Account created on the host chain is derived from the module account created\nmaccPerms = map[string][]string{\n    ...\n    icatypes.ModuleName:            nil,\n}\n\n...\n\n// Add Interchain Accounts Keepers for each submodule used and the authentication module\n// If a submodule is being statically disabled, the associated Keeper does not need to be added. \ntype App struct {\n    ...\n\n    ICAControllerKeeper icacontrollerkeeper.Keeper\n    ICAHostKeeper       icahostkeeper.Keeper\n    ICAAuthKeeper       icaauthkeeper.Keeper\n\n    ...\n}\n\n...\n\n// Create store keys for each submodule Keeper and the authentication module\nkeys := sdk.NewKVStoreKeys(\n    ...\n    icacontrollertypes.StoreKey,\n    icahosttypes.StoreKey,\n    icaauthtypes.StoreKey,\n    ...\n)\n\n... \n\n// Create the scoped keepers for each submodule keeper and authentication keeper\nscopedICAControllerKeeper := app.CapabilityKeeper.ScopeToModule(icacontrollertypes.SubModuleName)\nscopedICAHostKeeper := app.CapabilityKeeper.ScopeToModule(icahosttypes.SubModuleName)\nscopedICAAuthKeeper := app.CapabilityKeeper.ScopeToModule(icaauthtypes.ModuleName)\n\n...\n\n// Create the Keeper for each submodule\napp.ICAControllerKeeper = icacontrollerkeeper.NewKeeper(\n\t\tappCodec, keys[icacontrollertypes.StoreKey], app.GetSubspace(icacontrollertypes.SubModuleName),\n\t\tapp.IBCKeeper.ChannelKeeper, // may be replaced with middleware such as ics29 fee\n\t\tapp.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n\t\tscopedICAControllerKeeper, app.MsgServiceRouter(),\n)\napp.ICAHostKeeper = icahostkeeper.NewKeeper(\n\t\tappCodec, keys[icahosttypes.StoreKey], app.GetSubspace(icahosttypes.SubModuleName),\n\t\tapp.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n\t\tapp.AccountKeeper, scopedICAHostKeeper, app.MsgServiceRouter(),\n)\n\n// Create Interchain Accounts AppModule\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, &app.ICAHostKeeper)\n\n// Create your Interchain Accounts authentication module\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper, scopedICAAuthKeeper)\n\n// ICA auth AppModule\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\n\n// ICA auth IBC Module\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack and host IBC module as desired\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host and authentication routes\nibcRouter.\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icahosttypes.SubModuleName, icaHostIBCModule).\n    AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n\n...\n\n// Register Interchain Accounts and authentication module AppModule's\napp.moduleManager = module.NewManager(\n    ...\n    icaModule,\n    icaAuthModule,\n)\n\n...\n\n// Add fee middleware to begin blocker logic\napp.moduleManager.SetOrderBeginBlockers(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to end blocker logic\napp.moduleManager.SetOrderEndBlockers(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// Add Interchain Accounts module InitGenesis logic\napp.moduleManager.SetOrderInitGenesis(\n    ...\n    icatypes.ModuleName,\n    ...\n)\n\n// initParamsKeeper init params keeper and its subspaces\nfunc initParamsKeeper(appCodec codec.BinaryCodec, legacyAmino *codec.LegacyAmino, key, tkey sdk.StoreKey) paramskeeper.Keeper {\n    ...\n    paramsKeeper.Subspace(icahosttypes.SubModuleName)\n    paramsKeeper.Subspace(icacontrollertypes.SubModuleName)\n    ...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"using-submodules-exclusively",children:"Using submodules exclusively"}),"\n",(0,o.jsxs)(n.p,{children:["As described above, the Interchain Accounts application module is structured to support the ability of exclusively enabling controller or host functionality.\nThis can be achieved by simply omitting either controller or host ",(0,o.jsx)(n.code,{children:"Keeper"})," from the Interchain Accounts ",(0,o.jsx)(n.code,{children:"NewAppModule"})," constructor function, and mounting only the desired submodule via the ",(0,o.jsx)(n.code,{children:"IBCRouter"}),".\nAlternatively, submodules can be enabled and disabled dynamically using ",(0,o.jsx)(n.a,{href:"/v4/apps/interchain-accounts/parameters",children:"on-chain parameters"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The following snippets show basic examples of statically disabling submodules using ",(0,o.jsx)(n.code,{children:"app.go"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"disabling-controller-chain-functionality",children:"Disabling controller chain functionality"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// Create Interchain Accounts AppModule omitting the controller keeper\nicaModule := ica.NewAppModule(nil, &app.ICAHostKeeper)\n\n// Create host IBC Module\nicaHostIBCModule := icahost.NewIBCModule(app.ICAHostKeeper)\n\n// Register host route\nibcRouter.AddRoute(icahosttypes.SubModuleName, icaHostIBCModule)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"disabling-host-chain-functionality",children:"Disabling host chain functionality"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"// Create Interchain Accounts AppModule omitting the host keeper\nicaModule := ica.NewAppModule(&app.ICAControllerKeeper, nil)\n\n// Create your Interchain Accounts authentication module, setting up the Keeper, AppModule and IBCModule appropriately\napp.ICAAuthKeeper = icaauthkeeper.NewKeeper(appCodec, keys[icaauthtypes.StoreKey], app.ICAControllerKeeper, scopedICAAuthKeeper)\nicaAuthModule := icaauth.NewAppModule(appCodec, app.ICAAuthKeeper)\nicaAuthIBCModule := icaauth.NewIBCModule(app.ICAAuthKeeper)\n\n// Create controller IBC application stack\nicaControllerStack := icacontroller.NewIBCMiddleware(icaAuthIBCModule, app.ICAControllerKeeper)\n\n// Register controller and authentication routes\nibcRouter.\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icaauthtypes.ModuleName, icaControllerStack) // Note, the authentication module is routed to the top level of the middleware stack\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(67294);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);