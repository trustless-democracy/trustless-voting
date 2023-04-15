// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ayBjt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1d9445e8ce24521b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"eqNf8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MetamaskAdapter", ()=>MetamaskAdapter);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _detectProvider = require("@metamask/detect-provider");
var _detectProviderDefault = parcelHelpers.interopDefault(_detectProvider);
var _base = require("@web3auth/base");
var _baseEvmAdapter = require("@web3auth/base-evm-adapter");
class MetamaskAdapter extends (0, _baseEvmAdapter.BaseEvmAdapter) {
    constructor(){
        super(...arguments);
        (0, _definePropertyDefault.default)(this, "adapterNamespace", (0, _base.ADAPTER_NAMESPACES).EIP155);
        (0, _definePropertyDefault.default)(this, "currentChainNamespace", (0, _base.CHAIN_NAMESPACES).EIP155);
        (0, _definePropertyDefault.default)(this, "type", (0, _base.ADAPTER_CATEGORY).EXTERNAL);
        (0, _definePropertyDefault.default)(this, "name", (0, _base.WALLET_ADAPTERS).METAMASK);
        (0, _definePropertyDefault.default)(this, "status", (0, _base.ADAPTER_STATUS).NOT_READY);
        (0, _definePropertyDefault.default)(this, "metamaskProvider", null);
    }
    get provider() {
        if (this.status === (0, _base.ADAPTER_STATUS).CONNECTED && this.metamaskProvider) return this.metamaskProvider;
        return null;
    }
    set provider(_) {
        throw new Error("Not implemented");
    }
    async init() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        await super.init(options);
        super.checkInitializationRequirements();
        this.metamaskProvider = await (0, _detectProviderDefault.default)({
            mustBeMetaMask: true
        });
        if (!this.metamaskProvider) throw (0, _base.WalletInitializationError).notInstalled("Metamask extension is not installed");
        this.status = (0, _base.ADAPTER_STATUS).READY;
        this.emit((0, _base.ADAPTER_EVENTS).READY, (0, _base.WALLET_ADAPTERS).METAMASK);
        try {
            (0, _base.log).debug("initializing metamask adapter");
            if (options.autoConnect) {
                this.rehydrated = true;
                await this.connect();
            }
        } catch (error) {
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
        }
    }
    async connect() {
        super.checkConnectionRequirements();
        if (!this.metamaskProvider) throw (0, _base.WalletLoginError).notConnectedError("Not able to connect with metamask");
        this.status = (0, _base.ADAPTER_STATUS).CONNECTING;
        this.emit((0, _base.ADAPTER_EVENTS).CONNECTING, {
            adapter: (0, _base.WALLET_ADAPTERS).METAMASK
        });
        try {
            await this.metamaskProvider.request({
                method: "eth_requestAccounts"
            });
            const { chainId  } = this.metamaskProvider;
            if (chainId !== this.chainConfig.chainId) {
                await this.addChain(this.chainConfig, true);
                await this.switchChain(this.chainConfig, true);
            }
            this.status = (0, _base.ADAPTER_STATUS).CONNECTED;
            if (!this.provider) throw (0, _base.WalletLoginError).notConnectedError("Failed to connect with provider");
            const disconnectHandler = ()=>{
                var _this$provider;
                // ready to be connected again
                this.disconnect();
                (_this$provider = this.provider) === null || _this$provider === void 0 || _this$provider.removeListener("disconnect", disconnectHandler);
            };
            this.provider.on("disconnect", disconnectHandler);
            this.emit((0, _base.ADAPTER_EVENTS).CONNECTED, {
                adapter: (0, _base.WALLET_ADAPTERS).METAMASK,
                reconnected: this.rehydrated
            });
            return this.provider;
        } catch (error) {
            // ready again to be connected
            this.status = (0, _base.ADAPTER_STATUS).READY;
            this.rehydrated = false;
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
            if (error instanceof (0, _base.Web3AuthError)) throw error;
            throw (0, _base.WalletLoginError).connectionError("Failed to login with metamask wallet");
        }
    }
    async disconnect() {
        var _this$provider2;
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            cleanup: false
        };
        await super.disconnectSession();
        (_this$provider2 = this.provider) === null || _this$provider2 === void 0 || _this$provider2.removeAllListeners();
        if (options.cleanup) {
            this.status = (0, _base.ADAPTER_STATUS).NOT_READY;
            this.metamaskProvider = null;
        } else // ready to be connected again
        this.status = (0, _base.ADAPTER_STATUS).READY;
        await super.disconnect();
    }
    async getUserInfo() {
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet, Please login/connect first");
        return {};
    }
    async addChain(chainConfig) {
        var _this$metamaskProvide;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkAddChainRequirements(init);
        await ((_this$metamaskProvide = this.metamaskProvider) === null || _this$metamaskProvide === void 0 ? void 0 : _this$metamaskProvide.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: chainConfig.chainId,
                    chainName: chainConfig.displayName,
                    rpcUrls: [
                        chainConfig.rpcTarget
                    ],
                    blockExplorerUrls: [
                        chainConfig.blockExplorer
                    ],
                    nativeCurrency: {
                        name: chainConfig.tickerName,
                        symbol: chainConfig.ticker,
                        decimals: chainConfig.decimals || 18
                    }
                }
            ]
        }));
        this.addChainConfig(chainConfig);
    }
    async switchChain(params) {
        var _this$metamaskProvide2;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkSwitchChainRequirements(params, init);
        await ((_this$metamaskProvide2 = this.metamaskProvider) === null || _this$metamaskProvide2 === void 0 ? void 0 : _this$metamaskProvide2.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: params.chainId
                }
            ]
        }));
        this.setAdapterSettings({
            chainConfig: this.getChainConfig(params.chainId)
        });
    }
}

},{"@babel/runtime/helpers/defineProperty":"4x6r7","@metamask/detect-provider":"2q4tK","@web3auth/base":"7HmU4","@web3auth/base-evm-adapter":"k3ul7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2q4tK":[function(require,module,exports) {
"use strict";
/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */ function detectEthereumProvider({ mustBeMetaMask =false , silent =false , timeout =3000  } = {}) {
    _validateInputs();
    let handled = false;
    return new Promise((resolve)=>{
        if (window.ethereum) handleEthereum();
        else {
            window.addEventListener("ethereum#initialized", handleEthereum, {
                once: true
            });
            setTimeout(()=>{
                handleEthereum();
            }, timeout);
        }
        function handleEthereum() {
            if (handled) return;
            handled = true;
            window.removeEventListener("ethereum#initialized", handleEthereum);
            const { ethereum  } = window;
            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) resolve(ethereum);
            else {
                const message = mustBeMetaMask && ethereum ? "Non-MetaMask window.ethereum detected." : "Unable to detect window.ethereum.";
                !silent && console.error("@metamask/detect-provider:", message);
                resolve(null);
            }
        }
    });
    function _validateInputs() {
        if (typeof mustBeMetaMask !== "boolean") throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
        if (typeof silent !== "boolean") throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
        if (typeof timeout !== "number") throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
    }
}
module.exports = detectEthereumProvider;

},{}],"k3ul7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseEvmAdapter", ()=>BaseEvmAdapter);
var _base = require("@web3auth/base");
class BaseEvmAdapter extends (0, _base.BaseAdapter) {
    async init(_) {
        if (!this.chainConfig) this.chainConfig = (0, _base.getChainConfig)((0, _base.CHAIN_NAMESPACES).EIP155, 1);
    }
    async authenticateUser() {
        if (!this.provider || this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError();
        const { chainNamespace , chainId  } = this.chainConfig;
        const accounts = await this.provider.request({
            method: "eth_accounts"
        });
        if (accounts && accounts.length > 0) {
            const existingToken = (0, _base.getSavedToken)(accounts[0], this.name);
            if (existingToken) {
                const isExpired = (0, _base.checkIfTokenIsExpired)(existingToken);
                if (!isExpired) return {
                    idToken: existingToken
                };
            }
            const payload = {
                domain: window.location.origin,
                uri: window.location.href,
                address: accounts[0],
                chainId: parseInt(chainId, 16),
                version: "1",
                nonce: Math.random().toString(36).slice(2),
                issuedAt: new Date().toISOString()
            };
            const challenge = await (0, _base.signChallenge)(payload, chainNamespace);
            const signedMessage = await this.provider.request({
                method: "personal_sign",
                params: [
                    challenge,
                    accounts[0]
                ]
            });
            const idToken = await (0, _base.verifySignedChallenge)(chainNamespace, signedMessage, challenge, this.name, this.sessionTime, this.clientId, this.web3AuthNetwork);
            (0, _base.saveToken)(accounts[0], this.name, idToken);
            return {
                idToken
            };
        }
        throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet, Please login/connect first");
    }
    async disconnectSession() {
        super.checkDisconnectionRequirements();
        const accounts = await this.provider.request({
            method: "eth_accounts"
        });
        if (accounts && accounts.length > 0) (0, _base.clearToken)(accounts[0], this.name);
    }
    async disconnect() {
        this.rehydrated = false;
        this.emit((0, _base.ADAPTER_EVENTS).DISCONNECTED);
    }
}

},{"@web3auth/base":"7HmU4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ayBjt"], null, "parcelRequire8d7b")

//# sourceMappingURL=metamaskAdapter.esm.ce24521b.js.map
