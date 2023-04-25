"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{92003:function(t){t.exports=function({mustBeMetaMask:t=!1,silent:e=!1,timeout:i=3e3}={}){!function(){if("boolean"!=typeof t)throw Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof e)throw Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof i)throw Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let n=!1;return new Promise(r=>{window.ethereum?a():(window.addEventListener("ethereum#initialized",a,{once:!0}),setTimeout(()=>{a()},i));function a(){if(n)return;n=!0,window.removeEventListener("ethereum#initialized",a);let{ethereum:i}=window;i&&(!t||i.isMetaMask)?r(i):(e||console.error("@metamask/detect-provider:",t&&i?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum."),r(null))}})}},85476:function(t,e,i){i.d(e,{d:function(){return r}});var n=i(16716);class r extends n.J5{async init(t){this.chainConfig||(this.chainConfig=(0,n.h2)(n.EN.EIP155,1))}async authenticateUser(){if(!this.provider||this.status!==n.MP.CONNECTED)throw n.RM.notConnectedError();let{chainNamespace:t,chainId:e}=this.chainConfig,i=await this.provider.request({method:"eth_accounts"});if(i&&i.length>0){let r=(0,n.Cb)(i[0],this.name);if(r){let t=(0,n.$E)(r);if(!t)return{idToken:r}}let a={domain:window.location.origin,uri:window.location.href,address:i[0],chainId:parseInt(e,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},s=await (0,n.tV)(a,t),o=await this.provider.request({method:"personal_sign",params:[s,i[0]]}),h=await (0,n.rn)(t,o,s,this.name,this.sessionTime,this.clientId,this.web3AuthNetwork);return(0,n.Fr)(i[0],this.name,h),{idToken:h}}throw n.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnectSession(){super.checkDisconnectionRequirements();let t=await this.provider.request({method:"eth_accounts"});t&&t.length>0&&(0,n.qz)(t[0],this.name)}async disconnect(){this.rehydrated=!1,this.emit(n.n2.DISCONNECTED)}}},8308:function(t,e,i){i.r(e),i.d(e,{MetamaskAdapter:function(){return h}});var n=i(4942),r=i(92003),a=i.n(r),s=i(16716),o=i(85476);class h extends o.d{get provider(){return this.status===s.MP.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null}set provider(t){throw Error("Not implemented")}async init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(await super.init(t),super.checkInitializationRequirements(),this.metamaskProvider=await a()({mustBeMetaMask:!0}),!this.metamaskProvider)throw s.Ty.notInstalled("Metamask extension is not installed");this.status=s.MP.READY,this.emit(s.n2.READY,s.rW.METAMASK);try{s.cM.debug("initializing metamask adapter"),t.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(t){this.emit(s.n2.ERRORED,t)}}async connect(){if(super.checkConnectionRequirements(),!this.metamaskProvider)throw s.RM.notConnectedError("Not able to connect with metamask");this.status=s.MP.CONNECTING,this.emit(s.n2.CONNECTING,{adapter:s.rW.METAMASK});try{await this.metamaskProvider.request({method:"eth_requestAccounts"});let{chainId:t}=this.metamaskProvider;if(t!==this.chainConfig.chainId&&(await this.addChain(this.chainConfig,!0),await this.switchChain(this.chainConfig,!0)),this.status=s.MP.CONNECTED,!this.provider)throw s.RM.notConnectedError("Failed to connect with provider");let e=()=>{var t;this.disconnect(),null===(t=this.provider)||void 0===t||t.removeListener("disconnect",e)};return this.provider.on("disconnect",e),this.emit(s.n2.CONNECTED,{adapter:s.rW.METAMASK,reconnected:this.rehydrated}),this.provider}catch(t){if(this.status=s.MP.READY,this.rehydrated=!1,this.emit(s.n2.ERRORED,t),t instanceof s.up)throw t;throw s.RM.connectionError("Failed to login with metamask wallet")}}async disconnect(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};await super.disconnectSession(),null===(t=this.provider)||void 0===t||t.removeAllListeners(),e.cleanup?(this.status=s.MP.NOT_READY,this.metamaskProvider=null):this.status=s.MP.READY,await super.disconnect()}async getUserInfo(){if(this.status!==s.MP.CONNECTED)throw s.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async addChain(t){var e;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super.checkAddChainRequirements(i),await (null===(e=this.metamaskProvider)||void 0===e?void 0:e.request({method:"wallet_addEthereumChain",params:[{chainId:t.chainId,chainName:t.displayName,rpcUrls:[t.rpcTarget],blockExplorerUrls:[t.blockExplorer],nativeCurrency:{name:t.tickerName,symbol:t.ticker,decimals:t.decimals||18}}]})),this.addChainConfig(t)}async switchChain(t){var e;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super.checkSwitchChainRequirements(t,i),await (null===(e=this.metamaskProvider)||void 0===e?void 0:e.request({method:"wallet_switchEthereumChain",params:[{chainId:t.chainId}]})),this.setAdapterSettings({chainConfig:this.getChainConfig(t.chainId)})}constructor(){super(...arguments),(0,n.Z)(this,"adapterNamespace",s.yk.EIP155),(0,n.Z)(this,"currentChainNamespace",s.EN.EIP155),(0,n.Z)(this,"type",s.hN.EXTERNAL),(0,n.Z)(this,"name",s.rW.METAMASK),(0,n.Z)(this,"status",s.MP.NOT_READY),(0,n.Z)(this,"metamaskProvider",null)}}}}]);