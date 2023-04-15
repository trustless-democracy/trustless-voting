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
})({"Gfh1T":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "49e755eda23f78a7";
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

},{}],"dME6c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SolanaWalletAdapter", ()=>SolanaWalletAdapter);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _solanaEmbed = require("@toruslabs/solana-embed");
var _solanaEmbedDefault = parcelHelpers.interopDefault(_solanaEmbed);
var _base = require("@web3auth/base");
var _baseSolanaAdapter = require("@web3auth/base-solana-adapter");
var _solanaProvider = require("@web3auth/solana-provider");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class SolanaWalletAdapter extends (0, _baseSolanaAdapter.BaseSolanaAdapter) {
    constructor(){
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(params);
        (0, _definePropertyDefault.default)(this, "name", (0, _base.WALLET_ADAPTERS).TORUS_SOLANA);
        (0, _definePropertyDefault.default)(this, "adapterNamespace", (0, _base.ADAPTER_NAMESPACES).SOLANA);
        (0, _definePropertyDefault.default)(this, "currentChainNamespace", (0, _base.CHAIN_NAMESPACES).SOLANA);
        (0, _definePropertyDefault.default)(this, "type", (0, _base.ADAPTER_CATEGORY).EXTERNAL);
        (0, _definePropertyDefault.default)(this, "status", (0, _base.ADAPTER_STATUS).NOT_READY);
        (0, _definePropertyDefault.default)(this, "torusInstance", null);
        (0, _definePropertyDefault.default)(this, "torusWalletOptions", void 0);
        (0, _definePropertyDefault.default)(this, "initParams", void 0);
        (0, _definePropertyDefault.default)(this, "loginSettings", {});
        (0, _definePropertyDefault.default)(this, "solanaProvider", null);
        this.torusWalletOptions = params.adapterSettings || {};
        this.initParams = params.initParams || {};
        this.loginSettings = params.loginSettings || {};
    }
    get provider() {
        if (this.status === (0, _base.ADAPTER_STATUS).CONNECTED && this.solanaProvider) {
            var _this$solanaProvider;
            return ((_this$solanaProvider = this.solanaProvider) === null || _this$solanaProvider === void 0 ? void 0 : _this$solanaProvider.provider) || null;
        }
        return null;
    }
    set provider(_) {
        throw new Error("Not implemented");
    }
    async init() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        await super.init(options);
        super.checkInitializationRequirements();
        const { chainId , blockExplorer , displayName , rpcTarget , ticker , tickerName  } = this.chainConfig;
        const network = {
            chainId,
            rpcTarget,
            blockExplorerUrl: blockExplorer,
            displayName,
            tickerName,
            ticker,
            logo: ""
        };
        this.torusInstance = new (0, _solanaEmbedDefault.default)(this.torusWalletOptions);
        (0, _base.log).debug("initializing torus solana adapter init");
        await this.torusInstance.init(_objectSpread(_objectSpread({
            showTorusButton: false
        }, this.initParams), {}, {
            network
        }));
        this.solanaProvider = new (0, _solanaProvider.TorusInjectedProvider)({
            config: {
                chainConfig: this.chainConfig
            }
        });
        this.status = (0, _base.ADAPTER_STATUS).READY;
        this.emit((0, _base.ADAPTER_EVENTS).READY, (0, _base.WALLET_ADAPTERS).TORUS_SOLANA);
        try {
            (0, _base.log).debug("initializing torus solana adapter");
            if (options.autoConnect) {
                this.rehydrated = true;
                await this.connect();
            }
        } catch (error) {
            (0, _base.log).error("Failed to connect with cached torus solana provider", error);
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
        }
    }
    async connect() {
        super.checkConnectionRequirements();
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        if (!this.solanaProvider) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        this.status = (0, _base.ADAPTER_STATUS).CONNECTING;
        this.emit((0, _base.ADAPTER_EVENTS).CONNECTING, {
            adapter: (0, _base.WALLET_ADAPTERS).TORUS_SOLANA
        });
        try {
            await this.torusInstance.login(this.loginSettings);
            try {
                const torusInpageProvider = this.torusInstance.provider;
                torusInpageProvider.sendTransaction = this.torusInstance.sendTransaction.bind(this.torusInstance);
                torusInpageProvider.signAllTransactions = this.torusInstance.signAllTransactions.bind(this.torusInstance);
                torusInpageProvider.signMessage = this.torusInstance.signMessage.bind(this.torusInstance);
                torusInpageProvider.signTransaction = this.torusInstance.signTransaction.bind(this.torusInstance);
                await this.solanaProvider.setupProvider(torusInpageProvider);
            } catch (error) {
                // some issue in solana wallet, always connecting to mainnet on init.
                // fallback to change network if not connected to correct one on login.
                if (error instanceof (0, _base.Web3AuthError) && error.code === 5010) {
                    const { chainId , blockExplorer , displayName , rpcTarget , ticker , tickerName  } = this.chainConfig;
                    const network = {
                        chainId,
                        rpcTarget,
                        blockExplorerUrl: blockExplorer,
                        displayName,
                        tickerName,
                        ticker,
                        logo: ""
                    };
                    await this.torusInstance.setProvider(network);
                } else throw error;
            }
            this.status = (0, _base.ADAPTER_STATUS).CONNECTED;
            this.torusInstance.showTorusButton();
            this.emit((0, _base.ADAPTER_STATUS).CONNECTED, {
                adapter: (0, _base.WALLET_ADAPTERS).TORUS_SOLANA,
                reconnected: this.rehydrated
            });
            return this.provider;
        } catch (error) {
            // ready again to be connected
            this.status = (0, _base.ADAPTER_STATUS).READY;
            this.rehydrated = false;
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
            if (error instanceof (0, _base.Web3AuthError)) throw error;
            throw (0, _base.WalletLoginError).connectionError("Failed to login with torus solana wallet");
        }
    }
    async disconnect() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            cleanup: false
        };
        await super.disconnectSession();
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        await this.torusInstance.logout();
        if (options.cleanup) {
            // ready to connect again
            this.status = (0, _base.ADAPTER_STATUS).NOT_READY;
            this.torusInstance = null;
            this.solanaProvider = null;
        } else // ready to connect again
        this.status = (0, _base.ADAPTER_STATUS).READY;
        await super.disconnect();
    }
    async getUserInfo() {
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet");
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        const userInfo = await this.torusInstance.getUserInfo();
        return userInfo;
    }
    async addChain(chainConfig) {
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkAddChainRequirements(init);
        // await this.solanaProvider?.addChain(chainConfig);
        this.addChainConfig(chainConfig);
    }
    async switchChain(params) {
        var _this$torusInstance;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkSwitchChainRequirements(params, init);
        const chainConfig = this.getChainConfig(params.chainId);
        await ((_this$torusInstance = this.torusInstance) === null || _this$torusInstance === void 0 ? void 0 : _this$torusInstance.setProvider({
            rpcTarget: chainConfig.rpcTarget,
            chainId: chainConfig.chainId,
            displayName: chainConfig.displayName,
            blockExplorerUrl: chainConfig.blockExplorer,
            ticker: chainConfig.ticker,
            tickerName: chainConfig.tickerName,
            logo: "https://images.web3auth.io/login-torus-solana.svg"
        }));
        this.setAdapterSettings({
            chainConfig: this.getChainConfig(params.chainId)
        });
    }
}

},{"@babel/runtime/helpers/defineProperty":"4x6r7","@toruslabs/solana-embed":"hSSHo","@web3auth/base":"7HmU4","@web3auth/base-solana-adapter":"2ow5g","@web3auth/solana-provider":"kX9zz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSSHo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BUTTON_POSITION", ()=>BUTTON_POSITION);
parcelHelpers.export(exports, "LOGIN_PROVIDER", ()=>LOGIN_PROVIDER);
parcelHelpers.export(exports, "PAYMENT_PROVIDER", ()=>PAYMENT_PROVIDER);
parcelHelpers.export(exports, "TORUS_BUILD_ENV", ()=>TORUS_BUILD_ENV);
parcelHelpers.export(exports, "TorusInPageProvider", ()=>TorusInPageProvider);
parcelHelpers.export(exports, "default", ()=>Torus);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _web3Js = require("@solana/web3.js");
var _baseControllers = require("@toruslabs/base-controllers");
var _httpHelpers = require("@toruslabs/http-helpers");
var _openloginJrpc = require("@toruslabs/openlogin-jrpc");
var _ethRpcErrors = require("eth-rpc-errors");
var _isStream = require("is-stream");
var _pump = require("pump");
var _pumpDefault = parcelHelpers.interopDefault(_pump);
var _loglevel = require("loglevel");
var _loglevelDefault = parcelHelpers.interopDefault(_loglevel);
var _fastDeepEqual = require("fast-deep-equal");
var _fastDeepEqualDefault = parcelHelpers.interopDefault(_fastDeepEqual);
var Buffer = require("d9bf9450bb81c1b0").Buffer;
var version = "0.3.4";
var messages = {
    errors: {
        disconnected: ()=>"Torus: Lost connection to Torus.",
        permanentlyDisconnected: ()=>"Torus: Disconnected from iframe. Page reload required.",
        unsupportedSync: (method)=>`Torus: The Torus Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
        invalidDuplexStream: ()=>"Must provide a Node.js-style duplex stream.",
        invalidOptions: (maxEventListeners)=>`Invalid options. Received: { maxEventListeners: ${maxEventListeners}}`,
        invalidRequestArgs: ()=>`Expected a single, non-array, object argument.`,
        invalidRequestMethod: ()=>`'args.method' must be a non-empty string.`,
        invalidRequestParams: ()=>`'args.params' must be an object or array if provided.`,
        invalidLoggerObject: ()=>`'args.logger' must be an object if provided.`,
        invalidLoggerMethod: (method)=>`'args.logger' must include required method '${method}'.`
    },
    info: {
        connected: (chainId)=>`Torus: Connected to chain with ID "${chainId}".`
    },
    warnings: {}
};
const PAYMENT_PROVIDER = {
    MOONPAY: "moonpay",
    WYRE: "wyre",
    RAMPNETWORK: "rampnetwork",
    XANPOOL: "xanpool",
    MERCURYO: "mercuryo",
    TRANSAK: "transak"
};
const TORUS_BUILD_ENV = {
    PRODUCTION: "production",
    DEVELOPMENT: "development",
    TESTING: "testing"
};
const BUTTON_POSITION = {
    BOTTOM_LEFT: "bottom-left",
    TOP_LEFT: "top-left",
    BOTTOM_RIGHT: "bottom-right",
    TOP_RIGHT: "top-right"
};
const LOGIN_PROVIDER = {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    REDDIT: "reddit",
    DISCORD: "discord",
    TWITCH: "twitch",
    APPLE: "apple",
    LINE: "line",
    GITHUB: "github",
    KAKAO: "kakao",
    LINKEDIN: "linkedin",
    TWITTER: "twitter",
    WEIBO: "weibo",
    WECHAT: "wechat",
    EMAIL_PASSWORDLESS: "email_passwordless"
};
const translations = {
    en: {
        embed: {
            continue: "Continue",
            actionRequired: "Authorization required",
            pendingAction: "Click continue to proceed with your request in a popup",
            cookiesRequired: "Cookies Required",
            enableCookies: "Please enable cookies in your browser preferences to access Torus",
            clickHere: "More Info"
        }
    },
    de: {
        embed: {
            continue: "Fortsetzen",
            actionRequired: "Autorisierung erforderlich",
            pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
            cookiesRequired: "Cookies ben\xf6tigt",
            enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
            clickHere: "Mehr Info"
        }
    },
    ja: {
        embed: {
            continue: "継続する",
            actionRequired: "認証が必要です",
            pendingAction: "続行をクリックして、ポップアップでリクエストを続行します",
            cookiesRequired: "必要なクッキー",
            enableCookies: "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
            clickHere: "詳しくは"
        }
    },
    ko: {
        embed: {
            continue: "계속하다",
            actionRequired: "승인 필요",
            pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
            cookiesRequired: "쿠키 필요",
            enableCookies: "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
            clickHere: "더 많은 정보"
        }
    },
    zh: {
        embed: {
            continue: "继续",
            actionRequired: "需要授权",
            pendingAction: "单击继续以在弹出窗口中继续您的请求",
            cookiesRequired: "必填Cookie",
            enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
            clickHere: "更多信息"
        }
    }
};
var configuration = {
    supportedVerifierList: [
        LOGIN_PROVIDER.GOOGLE,
        LOGIN_PROVIDER.REDDIT,
        LOGIN_PROVIDER.DISCORD
    ],
    api: "https://api.tor.us",
    translations,
    prodTorusUrl: "",
    localStorageKeyPrefix: `torus-`
};
var log = (0, _loglevelDefault.default).getLogger("solana-embed");
// utility functions
/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */ function createErrorMiddleware() {
    return (req, res, next)=>{
        // json-rpc-engine will terminate the request when it notices this error
        if (typeof req.method !== "string" || !req.method) res.error = (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
            message: `The request 'method' must be a non-empty string.`,
            data: req
        });
        next((done)=>{
            const { error  } = res;
            if (!error) return done();
            log.error(`Torus - RPC Error: ${error.message}`, error);
            return done();
        });
    };
}
/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */ function logStreamDisconnectWarning(remoteLabel, error, emitter) {
    let warningMsg = `Torus: Lost connection to "${remoteLabel}".`;
    if (error?.stack) warningMsg += `\n${error.stack}`;
    log.warn(warningMsg);
    if (emitter && emitter.listenerCount("error") > 0) emitter.emit("error", warningMsg);
}
const getWindowId = ()=>Math.random().toString(36).slice(2);
const getTorusUrl = async (buildEnv)=>{
    let torusUrl;
    let logLevel;
    // const versionUsed = version;
    // log.info("solana embed version used: ", versionUsed);
    switch(buildEnv){
        case "testing":
            torusUrl = "https://solana-testing.tor.us";
            logLevel = "debug";
            break;
        case "development":
            torusUrl = "http://localhost:8080";
            logLevel = "debug";
            break;
        default:
            torusUrl = `https://solana.tor.us`;
            logLevel = "error";
            break;
    }
    return {
        torusUrl,
        logLevel
    };
};
const getUserLanguage = ()=>{
    let userLanguage = window.navigator.language || "en-US";
    const userLanguages = userLanguage.split("-");
    userLanguage = Object.prototype.hasOwnProperty.call(configuration.translations, userLanguages[0]) ? userLanguages[0] : "en";
    return userLanguage;
};
const FEATURES_PROVIDER_CHANGE_WINDOW = {
    height: 660,
    width: 375
};
const FEATURES_DEFAULT_WALLET_WINDOW = {
    height: 740,
    width: 1315
};
const FEATURES_DEFAULT_POPUP_WINDOW = {
    height: 700,
    width: 1200
};
const FEATURES_CONFIRM_WINDOW = {
    height: 600,
    width: 400
};
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e && // everything except Firefox
        (e.code === 22 || // Firefox
        e.code === 1014 || // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" || // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
        storage && storage.length !== 0;
    }
}
/**
 * popup handler utils
 */ function getPopupFeatures(_ref) {
    let { width: w , height: h  } = _ref;
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
    const systemZoom = 1; // No reliable estimate
    const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
    const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
    const features = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${h / systemZoom},width=${w / systemZoom},top=${top},left=${left}`;
    return features;
}
class BaseProvider extends (0, _openloginJrpc.SafeEventEmitter) {
    /**
   * Indicating that this provider is a Torus provider.
   */ constructor(connectionStream, _ref){
        let { maxEventListeners =100 , jsonRpcStreamName ="provider"  } = _ref;
        super();
        (0, _definePropertyDefault.default)(this, "isTorus", void 0);
        (0, _definePropertyDefault.default)(this, "_rpcEngine", void 0);
        (0, _definePropertyDefault.default)(this, "jsonRpcConnectionEvents", void 0);
        (0, _definePropertyDefault.default)(this, "_state", void 0);
        if (!(0, _isStream.duplex)(connectionStream)) throw new Error(messages.errors.invalidDuplexStream());
        this.isTorus = true;
        this.setMaxListeners(maxEventListeners);
        this._handleConnect = this._handleConnect.bind(this);
        this._handleDisconnect = this._handleDisconnect.bind(this);
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        this._rpcRequest = this._rpcRequest.bind(this);
        this._initializeState = this._initializeState.bind(this);
        this.request = this.request.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        // this.enable = this.enable.bind(this);
        // setup connectionStream multiplexing
        const mux = new (0, _openloginJrpc.ObjectMultiplex)();
        (0, _pumpDefault.default)(connectionStream, mux, connectionStream, this._handleStreamDisconnect.bind(this, "Torus"));
        // ignore phishing warning message (handled elsewhere)
        mux.ignoreStream("phishing");
        // setup own event listeners
        // connect to async provider
        const jsonRpcConnection = (0, _openloginJrpc.createStreamMiddleware)();
        (0, _pumpDefault.default)(jsonRpcConnection.stream, mux.createStream(jsonRpcStreamName), jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "Torus RpcProvider"));
        // handle RPC requests via dapp-side rpc engine
        const rpcEngine = new (0, _openloginJrpc.JRPCEngine)();
        rpcEngine.push((0, _openloginJrpc.createIdRemapMiddleware)());
        rpcEngine.push(createErrorMiddleware());
        rpcEngine.push((0, _baseControllers.createLoggerMiddleware)({
            origin: location.origin
        }));
        rpcEngine.push(jsonRpcConnection.middleware);
        this._rpcEngine = rpcEngine;
        this.jsonRpcConnectionEvents = jsonRpcConnection.events;
    }
    /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   */ async request(args) {
        if (!args || typeof args !== "object" || Array.isArray(args)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
            message: messages.errors.invalidRequestArgs(),
            data: args
        });
        const { method , params  } = args;
        if (typeof method !== "string" || method.length === 0) throw (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
            message: messages.errors.invalidRequestMethod(),
            data: args
        });
        if (params !== undefined && !Array.isArray(params) && (typeof params !== "object" || params === null)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
            message: messages.errors.invalidRequestParams(),
            data: args
        });
        return new Promise((resolve, reject)=>{
            this._rpcRequest({
                method,
                params
            }, (0, _openloginJrpc.getRpcPromiseCallback)(resolve, reject));
        });
    }
    /**
   * Submits an RPC request per the given JSON-RPC request object.
   */ send(payload, callback) {
        this._rpcRequest(payload, callback);
    }
    /**
   * Submits an RPC request per the given JSON-RPC request object.
   */ sendAsync(payload) {
        return new Promise((resolve, reject)=>{
            this._rpcRequest(payload, (0, _openloginJrpc.getRpcPromiseCallback)(resolve, reject));
        });
    }
    /**
   * Called when connection is lost to critical streams.
   *
   * emits TorusInpageProvider#disconnect
   */ _handleStreamDisconnect(streamName, error) {
        logStreamDisconnectWarning(streamName, error, this);
        this._handleDisconnect(false, error ? error.message : undefined);
    }
}
const handleEvent = function(handle, eventName, handler) {
    for(var _len = arguments.length, handlerArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++)handlerArgs[_key - 3] = arguments[_key];
    const handlerWrapper = ()=>{
        handler(...handlerArgs);
        handle.removeEventListener(eventName, handlerWrapper);
    };
    handle.addEventListener(eventName, handlerWrapper);
};
async function documentReady() {
    return new Promise((resolve)=>{
        if (document.readyState !== "loading") resolve();
        else handleEvent(document, "DOMContentLoaded", resolve);
    });
}
const htmlToElement = (html)=>{
    const template = window.document.createElement("template");
    const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = trimmedHtml;
    return template.content.firstChild;
};
function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}
class PopupHandler extends (0, _openloginJrpc.SafeEventEmitter) {
    constructor(_ref){
        let { url , target , features  } = _ref;
        super();
        (0, _definePropertyDefault.default)(this, "url", void 0);
        (0, _definePropertyDefault.default)(this, "target", void 0);
        (0, _definePropertyDefault.default)(this, "features", void 0);
        (0, _definePropertyDefault.default)(this, "window", void 0);
        (0, _definePropertyDefault.default)(this, "windowTimer", void 0);
        (0, _definePropertyDefault.default)(this, "iClosedWindow", void 0);
        this.url = url;
        this.target = target || "_blank";
        this.features = features || getPopupFeatures(FEATURES_DEFAULT_POPUP_WINDOW);
        this.window = undefined;
        this.windowTimer = undefined;
        this.iClosedWindow = false;
        this._setupTimer();
    }
    _setupTimer() {
        this.windowTimer = Number(setInterval(()=>{
            if (this.window && this.window.closed) {
                clearInterval(this.windowTimer);
                if (!this.iClosedWindow) this.emit("close");
                this.iClosedWindow = false;
                this.window = undefined;
            }
            if (this.window === undefined) clearInterval(this.windowTimer);
        }, 500));
    }
    open() {
        this.window = window.open(this.url.href, this.target, this.features);
        if (this.window?.focus) this.window.focus();
        return Promise.resolve();
    }
    close() {
        this.iClosedWindow = true;
        if (this.window) this.window.close();
    }
    redirect(locationReplaceOnRedirect) {
        if (locationReplaceOnRedirect) window.location.replace(this.url.href);
        else window.location.href = this.url.href;
    }
}
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$2(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class TorusCommunicationProvider extends BaseProvider {
    constructor(connectionStream, _ref){
        let { maxEventListeners =100 , jsonRpcStreamName ="provider"  } = _ref;
        super(connectionStream, {
            maxEventListeners,
            jsonRpcStreamName
        });
        // private state
        (0, _definePropertyDefault.default)(this, "embedTranslations", void 0);
        (0, _definePropertyDefault.default)(this, "torusUrl", void 0);
        (0, _definePropertyDefault.default)(this, "dappStorageKey", void 0);
        (0, _definePropertyDefault.default)(this, "windowRefs", void 0);
        (0, _definePropertyDefault.default)(this, "tryWindowHandle", void 0);
        (0, _definePropertyDefault.default)(this, "torusAlertContainer", void 0);
        (0, _definePropertyDefault.default)(this, "torusIframe", void 0);
        this._state = _objectSpread$2({}, TorusCommunicationProvider._defaultState);
        // public state
        this.torusUrl = "";
        this.dappStorageKey = "";
        const languageTranslations = configuration.translations[getUserLanguage()];
        this.embedTranslations = languageTranslations.embed;
        this.windowRefs = {};
        // setup own event listeners
        // EIP-1193 connect
        this.on("connect", ()=>{
            this._state.isConnected = true;
        });
        const notificationHandler = (payload)=>{
            const { method , params  } = payload;
            if (method === (0, _baseControllers.COMMUNICATION_NOTIFICATIONS).IFRAME_STATUS) {
                const { isFullScreen , rid  } = params;
                this._displayIframe({
                    isFull: isFullScreen,
                    rid: rid
                });
            } else if (method === (0, _baseControllers.COMMUNICATION_NOTIFICATIONS).CREATE_WINDOW) {
                const { windowId , url  } = params;
                this._createPopupBlockAlert(windowId, url);
            } else if (method === (0, _baseControllers.COMMUNICATION_NOTIFICATIONS).CLOSE_WINDOW) this._handleCloseWindow(params);
            else if (method === (0, _baseControllers.COMMUNICATION_NOTIFICATIONS).USER_LOGGED_IN) {
                const { currentLoginProvider  } = params;
                this._state.isLoggedIn = true;
                this._state.currentLoginProvider = currentLoginProvider;
            } else if (method === (0, _baseControllers.COMMUNICATION_NOTIFICATIONS).USER_LOGGED_OUT) {
                this._state.isLoggedIn = false;
                this._state.currentLoginProvider = null;
                this._displayIframe();
            }
        };
        this.jsonRpcConnectionEvents.on("notification", notificationHandler);
    }
    get isLoggedIn() {
        return this._state.isLoggedIn;
    }
    get isIFrameFullScreen() {
        return this._state.isIFrameFullScreen;
    }
    /**
   * Returns whether the inPage provider is connected to Torus.
   */ isConnected() {
        return this._state.isConnected;
    }
    async _initializeState(params) {
        try {
            const { torusUrl , dappStorageKey , torusAlertContainer , torusIframe  } = params;
            this.torusUrl = torusUrl;
            this.dappStorageKey = dappStorageKey;
            this.torusAlertContainer = torusAlertContainer;
            this.torusIframe = torusIframe;
            this.torusIframe.addEventListener("load", ()=>{
                // only do this if iframe is not full screen
                if (!this._state.isIFrameFullScreen) this._displayIframe();
            });
            const { currentLoginProvider , isLoggedIn  } = await this.request({
                method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).GET_PROVIDER_STATE,
                params: []
            });
            // indicate that we've connected, for EIP-1193 compliance
            this._handleConnect(currentLoginProvider, isLoggedIn);
        } catch (error) {
            log.error("Torus: Failed to get initial state. Please report this bug.", error);
        } finally{
            log.info("initialized communication state");
            this._state.initialized = true;
            this.emit("_initialized");
        }
    }
    _handleWindow(windowId) {
        let { url , target , features  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const finalUrl = new URL(url || `${this.torusUrl}/redirect?windowId=${windowId}`);
        if (this.dappStorageKey) {
            // If multiple instances, it returns the first one
            if (finalUrl.hash) finalUrl.hash += `&dappStorageKey=${this.dappStorageKey}`;
            else finalUrl.hash = `#dappStorageKey=${this.dappStorageKey}`;
        }
        const handledWindow = new PopupHandler({
            url: finalUrl,
            target,
            features
        });
        handledWindow.open();
        if (!handledWindow.window) {
            this._createPopupBlockAlert(windowId, finalUrl.href);
            return;
        }
        // Add to collection only if window is opened
        this.windowRefs[windowId] = handledWindow;
        // We tell the iframe that the window has been successfully opened
        this.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).OPENED_WINDOW,
            params: {
                windowId
            }
        });
        handledWindow.once("close", ()=>{
            // user closed the window
            delete this.windowRefs[windowId];
            this.request({
                method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).CLOSED_WINDOW,
                params: {
                    windowId
                }
            });
        });
    }
    _displayIframe() {
        let { isFull =false , rid =""  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const style = {};
        // set phase
        if (!isFull) {
            style.display = this._state.torusWidgetVisibility ? "block" : "none";
            style.height = "70px";
            style.width = "70px";
            switch(this._state.buttonPosition){
                case BUTTON_POSITION.TOP_LEFT:
                    style.top = "0px";
                    style.left = "0px";
                    style.right = "auto";
                    style.bottom = "auto";
                    break;
                case BUTTON_POSITION.TOP_RIGHT:
                    style.top = "0px";
                    style.right = "0px";
                    style.left = "auto";
                    style.bottom = "auto";
                    break;
                case BUTTON_POSITION.BOTTOM_RIGHT:
                    style.bottom = "0px";
                    style.right = "0px";
                    style.top = "auto";
                    style.left = "auto";
                    break;
                case BUTTON_POSITION.BOTTOM_LEFT:
                default:
                    style.bottom = "0px";
                    style.left = "0px";
                    style.top = "auto";
                    style.right = "auto";
                    break;
            }
        } else {
            style.display = "block";
            style.width = "100%";
            style.height = "100%";
            style.top = "0px";
            style.right = "0px";
            style.left = "0px";
            style.bottom = "0px";
        }
        Object.assign(this.torusIframe.style, style);
        this._state.isIFrameFullScreen = isFull;
        this.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).IFRAME_STATUS,
            params: {
                isIFrameFullScreen: isFull,
                rid
            }
        });
    }
    hideTorusButton() {
        this._state.torusWidgetVisibility = false;
        this._displayIframe();
    }
    showTorusButton() {
        this._state.torusWidgetVisibility = true;
        this._displayIframe();
    }
    /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound
   */ _rpcRequest(payload, callback) {
        const cb = callback;
        const _payload = payload;
        if (!Array.isArray(_payload)) {
            if (!_payload.jsonrpc) _payload.jsonrpc = "2.0";
        }
        this.tryWindowHandle(_payload, cb);
    }
    /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param currentLoginProvider - The login Provider
   * emits TorusInpageProvider#connect
   */ _handleConnect(currentLoginProvider, isLoggedIn) {
        if (!this._state.isConnected) {
            this._state.isConnected = true;
            this.emit("connect", {
                currentLoginProvider,
                isLoggedIn
            });
            log.debug(messages.info.connected(currentLoginProvider));
        }
    }
    /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits TorusInpageProvider#disconnect
   */ _handleDisconnect(isRecoverable, errorMessage) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !isRecoverable) {
            this._state.isConnected = false;
            let error;
            if (isRecoverable) {
                error = new (0, _ethRpcErrors.EthereumRpcError)(1013, // Try again later
                errorMessage || messages.errors.disconnected());
                log.debug(error);
            } else {
                error = new (0, _ethRpcErrors.EthereumRpcError)(1011, // Internal error
                errorMessage || messages.errors.permanentlyDisconnected());
                log.error(error);
                this._state.currentLoginProvider = null;
                this._state.isLoggedIn = false;
                this._state.torusWidgetVisibility = false;
                this._state.isIFrameFullScreen = false;
                this._state.isPermanentlyDisconnected = true;
            }
            this.emit("disconnect", error);
        }
    }
    // Called if the iframe wants to close the window cause it is done processing the request
    _handleCloseWindow(params) {
        const { windowId  } = params;
        if (this.windowRefs[windowId]) {
            this.windowRefs[windowId].close();
            delete this.windowRefs[windowId];
        }
    }
    async _createPopupBlockAlert(windowId, url) {
        const logoUrl = this.getLogoUrl();
        const torusAlert = htmlToElement('<div id="torusAlert" class="torus-alert--v2">' + `<div id="torusAlert__logo"><img src="${logoUrl}" /></div>` + "<div>" + `<h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1>` + `<p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p>` + "</div>" + "</div>");
        const successAlert = htmlToElement(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`);
        const btnContainer = htmlToElement('<div id="torusAlert__btn-container"></div>');
        btnContainer.appendChild(successAlert);
        torusAlert.appendChild(btnContainer);
        const bindOnLoad = ()=>{
            successAlert.addEventListener("click", ()=>{
                this._handleWindow(windowId, {
                    url,
                    target: "_blank",
                    features: getPopupFeatures(FEATURES_CONFIRM_WINDOW)
                });
                torusAlert.remove();
                if (this.torusAlertContainer.children.length === 0) this.torusAlertContainer.style.display = "none";
            });
        };
        const attachOnLoad = ()=>{
            this.torusAlertContainer.appendChild(torusAlert);
        };
        await documentReady();
        attachOnLoad();
        bindOnLoad();
        this.torusAlertContainer.style.display = "block";
    }
    getLogoUrl() {
        const logoUrl = `${this.torusUrl}/images/torus_icon-blue.svg`;
        return logoUrl;
    }
}
(0, _definePropertyDefault.default)(TorusCommunicationProvider, "_defaultState", {
    buttonPosition: "bottom-left",
    currentLoginProvider: null,
    isIFrameFullScreen: false,
    hasEmittedConnection: false,
    torusWidgetVisibility: false,
    initialized: false,
    isLoggedIn: false,
    isPermanentlyDisconnected: false,
    isConnected: false
});
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$1(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class TorusInPageProvider extends BaseProvider {
    /**
   * The chain ID of the currently connected Solana chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */ /**
   * The user's currently selected Solana address.
   * If null, Torus is either locked or the user has not permitted any
   * addresses to be viewed.
   */ constructor(connectionStream, _ref){
        let { maxEventListeners =100 , jsonRpcStreamName ="provider"  } = _ref;
        super(connectionStream, {
            maxEventListeners,
            jsonRpcStreamName
        });
        // private state
        (0, _definePropertyDefault.default)(this, "chainId", void 0);
        (0, _definePropertyDefault.default)(this, "selectedAddress", void 0);
        (0, _definePropertyDefault.default)(this, "tryWindowHandle", void 0);
        this._state = _objectSpread$1({}, TorusInPageProvider._defaultState);
        // public state
        this.selectedAddress = null;
        this.chainId = null;
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
        this._handleChainChanged = this._handleChainChanged.bind(this);
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
        // setup own event listeners
        // EIP-1193 connect
        this.on("connect", ()=>{
            this._state.isConnected = true;
        });
        const jsonRpcNotificationHandler = (payload)=>{
            const { method , params  } = payload;
            if (method === (0, _baseControllers.PROVIDER_NOTIFICATIONS).ACCOUNTS_CHANGED) this._handleAccountsChanged(params);
            else if (method === (0, _baseControllers.PROVIDER_NOTIFICATIONS).UNLOCK_STATE_CHANGED) this._handleUnlockStateChanged(params);
            else if (method === (0, _baseControllers.PROVIDER_NOTIFICATIONS).CHAIN_CHANGED) this._handleChainChanged(params);
        };
        // json rpc notification listener
        this.jsonRpcConnectionEvents.on("notification", jsonRpcNotificationHandler);
    }
    /**
   * Returns whether the inpage provider is connected to Torus.
   */ isConnected() {
        return this._state.isConnected;
    }
    // Private Methods
    //= ===================
    /**
   * Constructor helper.
   * Populates initial state by calling 'wallet_getProviderState' and emits
   * necessary events.
   */ async _initializeState() {
        try {
            const { accounts , chainId , isUnlocked  } = await this.request({
                method: (0, _baseControllers.PROVIDER_JRPC_METHODS).GET_PROVIDER_STATE,
                params: []
            });
            // indicate that we've connected, for EIP-1193 compliance
            this.emit("connect", {
                chainId
            });
            this._handleChainChanged({
                chainId
            });
            this._handleUnlockStateChanged({
                accounts,
                isUnlocked
            });
            this._handleAccountsChanged(accounts);
        } catch (error) {
            log.error("Torus: Failed to get initial state. Please report this bug.", error);
        } finally{
            log.info("initialized provider state");
            this._state.initialized = true;
            this.emit("_initialized");
        }
    }
    /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound
   */ _rpcRequest(payload, callback) {
        let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        let cb = callback;
        const _payload = payload;
        if (!Array.isArray(_payload)) {
            if (!_payload.jsonrpc) _payload.jsonrpc = "2.0";
            if (_payload.method === "solana_accounts" || _payload.method === "solana_requestAccounts") // handle accounts changing
            cb = (err, res)=>{
                this._handleAccountsChanged(res.result || [], _payload.method === "solana_accounts", isInternal);
                callback(err, res);
            };
            else if (_payload.method === "wallet_getProviderState") {
                this._rpcEngine.handle(payload, cb);
                return;
            }
        }
        this.tryWindowHandle(_payload, cb);
    }
    /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * emits TorusInpageProvider#connect
   */ _handleConnect(chainId) {
        if (!this._state.isConnected) {
            this._state.isConnected = true;
            this.emit("connect", {
                chainId
            });
            log.debug(messages.info.connected(chainId));
        }
    }
    /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits TorusInpageProvider#disconnect
   */ _handleDisconnect(isRecoverable, errorMessage) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !isRecoverable) {
            this._state.isConnected = false;
            let error;
            if (isRecoverable) {
                error = new (0, _ethRpcErrors.EthereumRpcError)(1013, // Try again later
                errorMessage || messages.errors.disconnected());
                log.debug(error);
            } else {
                error = new (0, _ethRpcErrors.EthereumRpcError)(1011, // Internal error
                errorMessage || messages.errors.permanentlyDisconnected());
                log.error(error);
                this.chainId = null;
                this._state.accounts = null;
                this.selectedAddress = null;
                this._state.isUnlocked = false;
                this._state.isPermanentlyDisconnected = true;
            }
            this.emit("disconnect", error);
        }
    }
    /**
   * Called when accounts may have changed.
   */ _handleAccountsChanged(accounts) {
        let isEthAccounts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        // defensive programming
        let finalAccounts = accounts;
        if (!Array.isArray(finalAccounts)) {
            log.error("Torus: Received non-array accounts parameter. Please report this bug.", finalAccounts);
            finalAccounts = [];
        }
        for (const account of accounts)if (typeof account !== "string") {
            log.error("Torus: Received non-string account. Please report this bug.", accounts);
            finalAccounts = [];
            break;
        }
        // emit accountsChanged if anything about the accounts array has changed
        if (!(0, _fastDeepEqualDefault.default)(this._state.accounts, finalAccounts)) {
            // we should always have the correct accounts even before solana_accounts
            // returns, except in cases where isInternal is true
            if (isEthAccounts && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !isInternal) log.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.', finalAccounts);
            this._state.accounts = finalAccounts;
            this.emit("accountsChanged", finalAccounts);
        }
        // handle selectedAddress
        if (this.selectedAddress !== finalAccounts[0]) this.selectedAddress = finalAccounts[0] || null;
    }
    /**
   * Upon receipt of a new chainId and networkVersion, emits corresponding
   * events and sets relevant public state.
   * Does nothing if neither the chainId nor the networkVersion are different
   * from existing values.
   *
   * emits TorusInpageProvider#chainChanged
   * @param networkInfo - An object with network info.
   */ _handleChainChanged() {
        let { chainId  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!chainId) {
            log.error("Torus: Received invalid network parameters. Please report this bug.", {
                chainId
            });
            return;
        }
        if (chainId === "loading") this._handleDisconnect(true);
        else {
            this._handleConnect(chainId);
            if (chainId !== this.chainId) {
                this.chainId = chainId;
                if (this._state.initialized) this.emit("chainChanged", this.chainId);
            }
        }
    }
    /**
   * Upon receipt of a new isUnlocked state, sets relevant public state.
   * Calls the accounts changed handler with the received accounts, or an empty
   * array.
   *
   * Does nothing if the received value is equal to the existing value.
   * There are no lock/unlock events.
   *
   * @param opts - Options bag.
   */ _handleUnlockStateChanged() {
        let { accounts , isUnlocked  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (typeof isUnlocked !== "boolean") {
            log.error("Torus: Received invalid isUnlocked parameter. Please report this bug.", {
                isUnlocked
            });
            return;
        }
        if (isUnlocked !== this._state.isUnlocked) {
            this._state.isUnlocked = isUnlocked;
            this._handleAccountsChanged(accounts || []);
        }
    }
}
(0, _definePropertyDefault.default)(TorusInPageProvider, "_defaultState", {
    accounts: null,
    isConnected: false,
    isUnlocked: false,
    initialized: false,
    isPermanentlyDisconnected: false,
    hasEmittedConnection: false
});
/**
 * Returns whether the given image URL exists
 */ function imgExists(url) {
    return new Promise((resolve, reject)=>{
        try {
            const img = document.createElement("img");
            img.onload = ()=>resolve(true);
            img.onerror = ()=>resolve(false);
            img.src = url;
        } catch (e) {
            reject(e);
        }
    });
}
/**
 * Extracts a name for the site from the DOM
 */ const getSiteName = (window1)=>{
    const { document: document1  } = window1;
    const siteName = document1.querySelector('head > meta[property="og:site_name"]');
    if (siteName) return siteName.content;
    const metaTitle = document1.querySelector('head > meta[name="title"]');
    if (metaTitle) return metaTitle.content;
    if (document1.title && document1.title.length > 0) return document1.title;
    return window1.location.hostname;
};
/**
 * Extracts an icon for the site from the DOM
 */ async function getSiteIcon(window1) {
    try {
        const { document: document1  } = window1;
        // Use the site's favicon if it exists
        let icon = document1.querySelector('head > link[rel="shortcut icon"]');
        if (icon && await imgExists(icon.href)) return icon.href;
        // Search through available icons in no particular order
        icon = Array.from(document1.querySelectorAll('head > link[rel="icon"]')).find((_icon)=>Boolean(_icon.href));
        if (icon && await imgExists(icon.href)) return icon.href;
        return "";
    } catch (error) {
        return "";
    }
}
/**
 * Gets site metadata and returns it
 *
 */ const getSiteMetadata = async ()=>({
        name: getSiteName(window),
        icon: await getSiteIcon(window)
    });
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const PROVIDER_UNSAFE_METHODS = [
    "send_transaction",
    "sign_transaction",
    "sign_all_transactions",
    "sign_message",
    "connect"
];
const COMMUNICATION_UNSAFE_METHODS = [
    (0, _baseControllers.COMMUNICATION_JRPC_METHODS).SET_PROVIDER
];
const isLocalStorageAvailable = storageAvailable("localStorage");
// preload for iframe doesn't work https://bugs.chromium.org/p/chromium/issues/detail?id=593267
(async function preLoadIframe() {
    try {
        if (typeof document === "undefined") return;
        const torusIframeHtml = document.createElement("link");
        const { torusUrl  } = await getTorusUrl("production");
        torusIframeHtml.href = `${torusUrl}/frame`;
        torusIframeHtml.crossOrigin = "anonymous";
        torusIframeHtml.type = "text/html";
        torusIframeHtml.rel = "prefetch";
        if (torusIframeHtml.relList && torusIframeHtml.relList.supports) {
            if (torusIframeHtml.relList.supports("prefetch")) document.head.appendChild(torusIframeHtml);
        }
    } catch (error) {
        log.warn(error);
    }
})();
class Torus {
    constructor(){
        let { modalZIndex =99999  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _definePropertyDefault.default)(this, "isInitialized", void 0);
        (0, _definePropertyDefault.default)(this, "torusAlert", void 0);
        (0, _definePropertyDefault.default)(this, "modalZIndex", void 0);
        (0, _definePropertyDefault.default)(this, "alertZIndex", void 0);
        (0, _definePropertyDefault.default)(this, "requestedLoginProvider", void 0);
        (0, _definePropertyDefault.default)(this, "provider", void 0);
        (0, _definePropertyDefault.default)(this, "communicationProvider", void 0);
        (0, _definePropertyDefault.default)(this, "dappStorageKey", void 0);
        (0, _definePropertyDefault.default)(this, "isTopupHidden", false);
        (0, _definePropertyDefault.default)(this, "torusAlertContainer", void 0);
        (0, _definePropertyDefault.default)(this, "torusUrl", void 0);
        (0, _definePropertyDefault.default)(this, "torusIframe", void 0);
        (0, _definePropertyDefault.default)(this, "styleLink", void 0);
        this.torusUrl = "";
        this.isInitialized = false; // init done
        this.requestedLoginProvider = null;
        this.modalZIndex = modalZIndex;
        this.alertZIndex = modalZIndex + 1000;
        this.dappStorageKey = "";
    }
    get isLoggedIn() {
        if (!this.communicationProvider) return false;
        return this.communicationProvider.isLoggedIn;
    }
    async init() {
        let { buildEnv =TORUS_BUILD_ENV.PRODUCTION , enableLogging =false , network , showTorusButton =false , useLocalStorage =false , buttonPosition =BUTTON_POSITION.BOTTOM_LEFT , apiKey ="torus-default" , extraParams ={} , whiteLabel  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (this.isInitialized) throw new Error("Already initialized");
        (0, _httpHelpers.setAPIKey)(apiKey);
        const { torusUrl , logLevel  } = await getTorusUrl(buildEnv);
        log.enableAll();
        log.info(torusUrl, "url loaded");
        log.info(`Solana Embed Version :${version}`);
        this.torusUrl = torusUrl;
        log.setDefaultLevel(logLevel);
        if (enableLogging) log.enableAll();
        else log.disableAll();
        const dappStorageKey = this.handleDappStorageKey(useLocalStorage);
        const torusIframeUrl = new URL(torusUrl);
        if (torusIframeUrl.pathname.endsWith("/")) torusIframeUrl.pathname += "frame";
        else torusIframeUrl.pathname += "/frame";
        const hashParams = new URLSearchParams();
        if (dappStorageKey) hashParams.append("dappStorageKey", dappStorageKey);
        hashParams.append("origin", window.location.origin);
        torusIframeUrl.hash = hashParams.toString();
        // Iframe code
        this.torusIframe = htmlToElement(`<iframe
        id="torusIframe"
        class="torusIframe"
        src="${torusIframeUrl.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex.toString()}"
      ></iframe>`);
        this.torusAlertContainer = htmlToElement(`<div id="torusAlertContainer" style="display:none; z-index: ${this.alertZIndex.toString()}"></div>`);
        this.styleLink = htmlToElement(`<link href="${torusUrl}/css/widget.css" rel="stylesheet" type="text/css">`);
        const handleSetup = async ()=>{
            return new Promise((resolve, reject)=>{
                try {
                    window.document.head.appendChild(this.styleLink);
                    window.document.body.appendChild(this.torusIframe);
                    window.document.body.appendChild(this.torusAlertContainer);
                    this.torusIframe.addEventListener("load", async ()=>{
                        const dappMetadata = await getSiteMetadata();
                        // send init params here
                        this.torusIframe.contentWindow.postMessage({
                            buttonPosition,
                            apiKey,
                            network,
                            dappMetadata,
                            extraParams,
                            whiteLabel
                        }, torusIframeUrl.origin);
                        await this._setupWeb3({
                            torusUrl
                        });
                        if (showTorusButton) this.showTorusButton();
                        if (whiteLabel?.topupHide) this.isTopupHidden = whiteLabel.topupHide;
                        else this.hideTorusButton();
                        this.isInitialized = true;
                        window.torus = this;
                        resolve();
                    });
                } catch (error) {
                    reject(error);
                }
            });
        };
        await documentReady();
        await handleSetup();
    }
    async login() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!this.isInitialized) throw new Error("Call init() first");
        try {
            this.requestedLoginProvider = params.loginProvider || null;
            if (!this.requestedLoginProvider) this.communicationProvider._displayIframe({
                isFull: true
            });
            // If user is already logged in, we assume they have given access to the website
            const res = await new Promise((resolve, reject)=>{
                // We use this method because we want to update inPage provider state with account info
                this.provider._rpcRequest({
                    method: "solana_requestAccounts",
                    params: [
                        this.requestedLoginProvider,
                        params.login_hint
                    ]
                }, (0, _openloginJrpc.getRpcPromiseCallback)(resolve, reject));
            });
            if (Array.isArray(res) && res.length > 0) return res;
            // This would never happen, but just in case
            throw new Error("Login failed");
        } catch (error) {
            log.error("login failed", error);
            throw error;
        } finally{
            if (this.communicationProvider.isIFrameFullScreen) this.communicationProvider._displayIframe();
        }
    }
    async loginWithPrivateKey(loginParams) {
        if (!this.isInitialized) throw new Error("Call init() first");
        const { privateKey , userInfo  } = loginParams;
        const { success  } = await this.communicationProvider.request({
            method: "login_with_private_key",
            params: {
                privateKey,
                userInfo
            }
        });
        if (!success) throw new Error("Login Failed");
    }
    async logout() {
        if (!this.communicationProvider.isLoggedIn) throw new Error("Not logged in");
        await this.communicationProvider.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).LOGOUT,
            params: []
        });
        this.requestedLoginProvider = null;
    }
    async cleanUp() {
        if (this.communicationProvider.isLoggedIn) await this.logout();
        this.clearInit();
    }
    clearInit() {
        function isElement(element) {
            return element instanceof Element || element instanceof Document;
        }
        if (isElement(this.styleLink) && window.document.body.contains(this.styleLink)) {
            this.styleLink.remove();
            this.styleLink = undefined;
        }
        if (isElement(this.torusIframe) && window.document.body.contains(this.torusIframe)) {
            this.torusIframe.remove();
            this.torusIframe = undefined;
        }
        if (isElement(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer)) {
            this.torusAlert = undefined;
            this.torusAlertContainer.remove();
            this.torusAlertContainer = undefined;
        }
        this.isInitialized = false;
    }
    hideTorusButton() {
        this.communicationProvider.hideTorusButton();
    }
    showTorusButton() {
        this.communicationProvider.showTorusButton();
    }
    async setProvider(params) {
        await this.communicationProvider.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).SET_PROVIDER,
            params: _objectSpread({}, params)
        });
    }
    async showWallet(path) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const instanceId = await this.communicationProvider.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).WALLET_INSTANCE_ID,
            params: []
        });
        const finalPath = path ? `/${path}` : "";
        const finalUrl = new URL(`${this.torusUrl}/wallet${finalPath}`);
        // Using URL constructor to prevent js injection and allow parameter validation.!
        finalUrl.searchParams.append("instanceId", instanceId);
        Object.keys(params).forEach((x)=>{
            finalUrl.searchParams.append(x, params[x]);
        });
        if (this.dappStorageKey) finalUrl.hash = `#dappStorageKey=${this.dappStorageKey}`;
        // No need to track this window state. Hence, no _handleWindow call.
        const walletWindow = new PopupHandler({
            url: finalUrl,
            features: getPopupFeatures(FEATURES_DEFAULT_WALLET_WINDOW)
        });
        walletWindow.open();
    }
    async getUserInfo() {
        const userInfoResponse = await this.communicationProvider.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).USER_INFO,
            params: []
        });
        return userInfoResponse;
    }
    async initiateTopup(provider, params) {
        if (!this.isInitialized) throw new Error("Torus is not initialized");
        const windowId = getWindowId();
        this.communicationProvider._handleWindow(windowId);
        const topupResponse = await this.communicationProvider.request({
            method: (0, _baseControllers.COMMUNICATION_JRPC_METHODS).TOPUP,
            params: {
                provider,
                params,
                windowId
            }
        });
        return topupResponse;
    }
    // Solana specific API
    async getAccounts() {
        const response = await this.provider.request({
            method: "getAccounts",
            params: []
        });
        return response;
    }
    async sendTransaction(transaction) {
        const isLegacyTransaction = isLegacyTransactionInstance(transaction);
        const message = isLegacyTransaction ? transaction.serialize({
            requireAllSignatures: false
        }).toString("hex") : Buffer.from(transaction.serialize()).toString("hex");
        const response = await this.provider.request({
            method: "send_transaction",
            params: {
                message,
                isLegacyTransaction
            }
        });
        return response;
    }
    // support sendOptions
    async signAndSendTransaction(transaction, options) {
        const isLegacyTransaction = isLegacyTransactionInstance(transaction);
        const message = isLegacyTransaction ? transaction.serialize({
            requireAllSignatures: false
        }).toString("hex") : Buffer.from(transaction.serialize()).toString("hex");
        const response = await this.provider.request({
            method: "send_transaction",
            params: {
                message,
                options,
                isLegacyTransaction
            }
        });
        return {
            signature: response
        };
    }
    async signTransaction(transaction) {
        const isLegacyTransaction = isLegacyTransactionInstance(transaction);
        const message = isLegacyTransaction ? transaction.serializeMessage().toString("hex") : Buffer.from(transaction.message.serialize()).toString("hex");
        const response = await this.provider.request({
            method: "sign_transaction",
            params: {
                message,
                messageOnly: true,
                isLegacyTransaction
            }
        });
        // reconstruct signature pair
        const parsed = JSON.parse(response);
        const signature = {
            publicKey: new (0, _web3Js.PublicKey)(parsed.publicKey),
            signature: Buffer.from(parsed.signature, "hex")
        };
        transaction.addSignature(signature.publicKey, signature.signature);
        return transaction;
    }
    async signAllTransactions(transactions) {
        let isLegacyTransaction;
        const encodedMessage = transactions.map((tx)=>{
            isLegacyTransaction = isLegacyTransactionInstance(tx);
            return isLegacyTransaction ? tx.serializeMessage().toString("hex") : Buffer.from(tx.message.serialize()).toString("hex");
        });
        const responses = await this.provider.request({
            method: "sign_all_transactions",
            params: {
                message: encodedMessage,
                messageOnly: true,
                isLegacyTransaction
            }
        });
        // reconstruct signature pairs
        const signatures = responses.map((item)=>{
            const parsed = JSON.parse(item);
            return {
                publicKey: new (0, _web3Js.PublicKey)(parsed.publicKey),
                signature: Buffer.from(parsed.signature, "hex")
            };
        });
        transactions.forEach((tx, idx)=>{
            tx.addSignature(signatures[idx].publicKey, signatures[idx].signature);
            return tx;
        });
        return transactions;
    }
    async signMessage(data) {
        const response = await this.provider.request({
            method: "sign_message",
            params: {
                data
            }
        });
        return response;
    }
    async getGaslessPublicKey() {
        const response = await this.provider.request({
            method: "get_gasless_public_key",
            params: []
        });
        return response;
    }
    // async connect(): Promise<boolean> {
    //   const response = (await this.provider.request({
    //     method: "connect",
    //     params: {},
    //   })) as boolean;
    //   return response;
    // }
    handleDappStorageKey(useLocalStorage) {
        const localStorageKey = `${configuration.localStorageKeyPrefix}${window.location.hostname}`;
        let dappStorageKey = "";
        if (isLocalStorageAvailable && useLocalStorage) {
            const storedKey = window.localStorage.getItem(localStorageKey);
            if (storedKey) dappStorageKey = storedKey;
            else {
                const generatedKey = `torus-app-${getWindowId()}`;
                window.localStorage.setItem(localStorageKey, generatedKey);
                dappStorageKey = generatedKey;
            }
        }
        this.dappStorageKey = dappStorageKey;
        return dappStorageKey;
    }
    async _setupWeb3(providerParams) {
        log.info("setupWeb3 running");
        // setup background connection
        const providerStream = new (0, _openloginJrpc.BasePostMessageStream)({
            name: "embed_torus",
            target: "iframe_torus",
            targetWindow: this.torusIframe.contentWindow
        });
        // We create another LocalMessageDuplexStream for communication between dapp <> iframe
        const communicationStream = new (0, _openloginJrpc.BasePostMessageStream)({
            name: "embed_communication",
            target: "iframe_communication",
            targetWindow: this.torusIframe.contentWindow
        });
        // compose the inPage provider
        const inPageProvider = new TorusInPageProvider(providerStream, {});
        const communicationProvider = new TorusCommunicationProvider(communicationStream, {});
        inPageProvider.tryWindowHandle = (payload, cb)=>{
            const _payload = payload;
            if (!Array.isArray(_payload) && PROVIDER_UNSAFE_METHODS.includes(_payload.method)) {
                if (!this.communicationProvider.isLoggedIn) throw new Error("User Not Logged In");
                const windowId = getWindowId();
                communicationProvider._handleWindow(windowId, {
                    target: "_blank",
                    features: getPopupFeatures(FEATURES_CONFIRM_WINDOW)
                });
                // for inPageProvider methods sending windowId in request instead of params
                // as params might be positional.
                _payload.windowId = windowId;
            }
            inPageProvider._rpcEngine.handle(_payload, cb);
        };
        communicationProvider.tryWindowHandle = (payload, cb)=>{
            const _payload = payload;
            if (!Array.isArray(_payload) && COMMUNICATION_UNSAFE_METHODS.includes(_payload.method)) {
                const windowId = getWindowId();
                communicationProvider._handleWindow(windowId, {
                    target: "_blank",
                    features: getPopupFeatures(FEATURES_PROVIDER_CHANGE_WINDOW) // todo: are these features generic for all
                });
                // for communication methods sending window id in jrpc req params
                _payload.params.windowId = windowId;
            }
            communicationProvider._rpcEngine.handle(_payload, cb);
        };
        // detect solana_requestAccounts and pipe to enable for now
        const detectAccountRequestPrototypeModifier = (m)=>{
            const originalMethod = inPageProvider[m];
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            inPageProvider[m] = function providerFunc(request, cb) {
                const { method , params =[]  } = request;
                if (method === "solana_requestAccounts") {
                    if (!cb) return self.login({
                        loginProvider: params[0]
                    });
                    self.login({
                        loginProvider: params[0]
                    })// eslint-disable-next-line promise/no-callback-in-promise
                    .then((res)=>cb(null, res))// eslint-disable-next-line promise/no-callback-in-promise
                    .catch((err)=>cb(err));
                }
                return originalMethod.apply(this, [
                    request,
                    cb
                ]);
            };
        };
        // Detects call to solana_requestAccounts in request & sendAsync and passes to login
        detectAccountRequestPrototypeModifier("request");
        detectAccountRequestPrototypeModifier("sendAsync");
        detectAccountRequestPrototypeModifier("send");
        const proxiedInPageProvider = new Proxy(inPageProvider, {
            // straight up lie that we deleted the property so that it doesn't
            // throw an error in strict mode
            deleteProperty: ()=>true
        });
        const proxiedCommunicationProvider = new Proxy(communicationProvider, {
            // straight up lie that we deleted the property so that it doesn't
            // throw an error in strict mode
            deleteProperty: ()=>true
        });
        this.provider = proxiedInPageProvider;
        this.communicationProvider = proxiedCommunicationProvider;
        await Promise.all([
            inPageProvider._initializeState(),
            communicationProvider._initializeState(_objectSpread(_objectSpread({}, providerParams), {}, {
                dappStorageKey: this.dappStorageKey,
                torusAlertContainer: this.torusAlertContainer,
                torusIframe: this.torusIframe
            }))
        ]);
        log.debug("Torus - injected provider");
    }
}

},{"d9bf9450bb81c1b0":"fCgem","@babel/runtime/helpers/defineProperty":"4x6r7","@solana/web3.js":"5JBKN","@toruslabs/base-controllers":"bWbve","@toruslabs/http-helpers":"71C66","@toruslabs/openlogin-jrpc":"hHcJo","eth-rpc-errors":"apfts","is-stream":"dpmgS","pump":"d2HVR","loglevel":"7kRFs","fast-deep-equal":"ixZYU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpmgS":[function(require,module,exports) {
"use strict";
const isStream = (stream)=>stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
isStream.writable = (stream)=>isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
isStream.readable = (stream)=>isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
isStream.duplex = (stream)=>isStream.writable(stream) && isStream.readable(stream);
isStream.transform = (stream)=>isStream.duplex(stream) && typeof stream._transform === "function";
module.exports = isStream;

},{}],"ixZYU":[function(require,module,exports) {
"use strict";
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};

},{}],"2ow5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseSolanaAdapter", ()=>BaseSolanaAdapter);
var _base = require("@web3auth/base");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
class BaseSolanaAdapter extends (0, _base.BaseAdapter) {
    async init(_) {
        if (!this.chainConfig) this.chainConfig = (0, _base.getChainConfig)((0, _base.CHAIN_NAMESPACES).SOLANA, 1);
    }
    async authenticateUser() {
        if (!this.provider || this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError();
        const { chainNamespace , chainId  } = this.chainConfig;
        const accounts = await this.provider.request({
            method: "getAccounts"
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
            const encodedMessage = new TextEncoder().encode(challenge);
            const signedMessage = await this.provider.request({
                method: "signMessage",
                params: {
                    message: encodedMessage,
                    display: "utf8"
                }
            });
            const idToken = await (0, _base.verifySignedChallenge)(chainNamespace, (0, _bs58Default.default).encode(signedMessage), challenge, this.name, this.sessionTime, this.clientId, this.web3AuthNetwork);
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
            method: "getAccounts"
        });
        if (accounts && accounts.length > 0) (0, _base.clearToken)(accounts[0], this.name);
    }
    async disconnect() {
        this.rehydrated = false;
        this.emit((0, _base.ADAPTER_EVENTS).DISCONNECTED);
    }
}

},{"@web3auth/base":"7HmU4","bs58":"4ji3p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["Gfh1T"], null, "parcelRequire8d7b")

//# sourceMappingURL=torusSolanaAdapter.esm.a23f78a7.js.map
