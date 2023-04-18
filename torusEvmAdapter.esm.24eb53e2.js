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
})({"2w1Wq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "eaddbf7124eb53e2";
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

},{}],"2jvMd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TorusWalletAdapter", ()=>TorusWalletAdapter);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _torusEmbed = require("@toruslabs/torus-embed");
var _torusEmbedDefault = parcelHelpers.interopDefault(_torusEmbed);
var _base = require("@web3auth/base");
var _baseEvmAdapter = require("@web3auth/base-evm-adapter");
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
class TorusWalletAdapter extends (0, _baseEvmAdapter.BaseEvmAdapter) {
    constructor(){
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(params);
        (0, _definePropertyDefault.default)(this, "name", (0, _base.WALLET_ADAPTERS).TORUS_EVM);
        (0, _definePropertyDefault.default)(this, "adapterNamespace", (0, _base.ADAPTER_NAMESPACES).EIP155);
        (0, _definePropertyDefault.default)(this, "currentChainNamespace", (0, _base.CHAIN_NAMESPACES).EIP155);
        (0, _definePropertyDefault.default)(this, "type", (0, _base.ADAPTER_CATEGORY).EXTERNAL);
        (0, _definePropertyDefault.default)(this, "status", (0, _base.ADAPTER_STATUS).NOT_READY);
        (0, _definePropertyDefault.default)(this, "torusInstance", null);
        (0, _definePropertyDefault.default)(this, "torusWalletOptions", void 0);
        (0, _definePropertyDefault.default)(this, "initParams", void 0);
        (0, _definePropertyDefault.default)(this, "loginSettings", {});
        this.torusWalletOptions = params.adapterSettings || {};
        this.initParams = params.initParams || {};
        this.loginSettings = params.loginSettings || {};
    }
    get provider() {
        if (this.status === (0, _base.ADAPTER_STATUS).CONNECTED && this.torusInstance) return this.torusInstance.provider;
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
            chainId: Number.parseInt(chainId, 16),
            host: rpcTarget,
            blockExplorer,
            networkName: displayName,
            ticker,
            tickerName
        };
        this.torusInstance = new (0, _torusEmbedDefault.default)(this.torusWalletOptions);
        (0, _base.log).debug("initializing torus evm adapter init");
        await this.torusInstance.init(_objectSpread(_objectSpread({
            showTorusButton: false
        }, this.initParams), {}, {
            network
        }));
        this.status = (0, _base.ADAPTER_STATUS).READY;
        this.emit((0, _base.ADAPTER_EVENTS).READY, (0, _base.WALLET_ADAPTERS).TORUS_EVM);
        try {
            (0, _base.log).debug("initializing torus evm adapter");
            if (options.autoConnect) {
                this.rehydrated = true;
                await this.connect();
            }
        } catch (error) {
            (0, _base.log).error("Failed to connect with torus evm provider", error);
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
        }
    }
    async connect() {
        super.checkConnectionRequirements();
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        this.status = (0, _base.ADAPTER_STATUS).CONNECTING;
        this.emit((0, _base.ADAPTER_EVENTS).CONNECTING, {
            adapter: (0, _base.WALLET_ADAPTERS).TORUS_EVM
        });
        try {
            await this.torusInstance.login(this.loginSettings);
            const { chainId  } = this.torusInstance.provider;
            if (chainId && parseInt(chainId) !== parseInt(this.chainConfig.chainId, 16)) {
                const { chainId: _chainId , blockExplorer , displayName , rpcTarget , ticker , tickerName  } = this.chainConfig;
                const network = {
                    chainId: Number.parseInt(_chainId, 16),
                    host: rpcTarget,
                    blockExplorer,
                    networkName: displayName,
                    tickerName,
                    ticker
                };
                // in some cases when user manually switches chain and relogin then adapter will not connect to initially passed
                // chainConfig but will connect to the one that user switched to.
                // So here trying to switch network to the one that was initially passed in chainConfig.
                await this.torusInstance.setProvider(_objectSpread({}, network));
                const updatedChainID = await this.torusInstance.ethereum.request({
                    method: "eth_chainId"
                });
                if (updatedChainID && parseInt(updatedChainID) !== parseInt(this.chainConfig.chainId, 16)) throw (0, _base.WalletInitializationError).fromCode(5000, `Not connected to correct chainId. Expected: ${this.chainConfig.chainId}, Current: ${updatedChainID}`);
            }
            this.status = (0, _base.ADAPTER_STATUS).CONNECTED;
            this.torusInstance.showTorusButton();
            this.emit((0, _base.ADAPTER_STATUS).CONNECTED, {
                adapter: (0, _base.WALLET_ADAPTERS).TORUS_EVM,
                reconnected: this.rehydrated
            });
            return this.provider;
        } catch (error) {
            // ready again to be connected
            this.status = (0, _base.ADAPTER_STATUS).READY;
            this.rehydrated = false;
            this.emit((0, _base.ADAPTER_STATUS).ERRORED, error);
            throw error instanceof (0, _base.Web3AuthError) ? error : (0, _base.WalletLoginError).connectionError("Failed to login with torus wallet");
        }
    }
    async disconnect() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            cleanup: false
        };
        await super.disconnectSession();
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        await this.torusInstance.logout();
        this.torusInstance.hideTorusButton();
        if (options.cleanup) {
            this.status = (0, _base.ADAPTER_STATUS).NOT_READY;
            this.torusInstance = null;
        } else // ready to be connected again
        this.status = (0, _base.ADAPTER_STATUS).READY;
        await super.disconnect();
    }
    async getUserInfo() {
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet");
        if (!this.torusInstance) throw (0, _base.WalletInitializationError).notReady("Torus wallet is not initialized");
        const userInfo = await this.torusInstance.getUserInfo("");
        return userInfo;
    }
    async addChain(chainConfig) {
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkAddChainRequirements(init);
        // TODO: add these in torus wallet.
        // await this.torusInstance?.provider.request({
        //   method: "wallet_addEthereumChain",
        //   params: [
        //     {
        //       chainId: chainConfig.chainId,
        //       chainName: chainConfig.displayName,
        //       rpcUrls: [chainConfig.rpcTarget],
        //       blockExplorerUrls: [chainConfig.blockExplorer],
        //       nativeCurrency: {
        //         name: chainConfig.tickerName,
        //         symbol: chainConfig.ticker,
        //         decimals: chainConfig.decimals || 18,
        //       },
        //     },
        //   ],
        // });
        this.addChainConfig(chainConfig);
    }
    async switchChain(params) {
        var _this$torusInstance;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkSwitchChainRequirements(params, init);
        // TODO: add these in torus wallet.
        // await this.torusInstance?.provider.request({
        //   method: "wallet_switchEthereumChain",
        //   params: [{ chainId: params.chainId }],
        // });
        const chainConfig = this.getChainConfig(params.chainId);
        await ((_this$torusInstance = this.torusInstance) === null || _this$torusInstance === void 0 ? void 0 : _this$torusInstance.setProvider({
            host: chainConfig.rpcTarget,
            chainId: parseInt(chainConfig.chainId, 16),
            networkName: chainConfig.displayName,
            blockExplorer: chainConfig.blockExplorer,
            ticker: chainConfig.ticker,
            tickerName: chainConfig.tickerName
        }));
        this.setAdapterSettings({
            chainConfig: this.getChainConfig(params.chainId)
        });
    }
}

},{"@babel/runtime/helpers/defineProperty":"4x6r7","@toruslabs/torus-embed":"bhDjD","@web3auth/base":"7HmU4","@web3auth/base-evm-adapter":"k3ul7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhDjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BUTTON_POSITION", ()=>BUTTON_POSITION);
parcelHelpers.export(exports, "LOGIN_PROVIDER", ()=>LOGIN_PROVIDER);
parcelHelpers.export(exports, "PAYMENT_PROVIDER", ()=>PAYMENT_PROVIDER);
parcelHelpers.export(exports, "SUPPORTED_PAYMENT_NETWORK", ()=>SUPPORTED_PAYMENT_NETWORK);
parcelHelpers.export(exports, "TORUS_BUILD_ENV", ()=>TORUS_BUILD_ENV);
parcelHelpers.export(exports, "TorusInpageProvider", ()=>TorusInpageProvider);
parcelHelpers.export(exports, "WALLET_OPENLOGIN_VERIFIER_MAP", ()=>WALLET_OPENLOGIN_VERIFIER_MAP);
parcelHelpers.export(exports, "WALLET_VERIFIERS", ()=>WALLET_VERIFIERS);
parcelHelpers.export(exports, "default", ()=>Torus);
var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _httpHelpers = require("@toruslabs/http-helpers");
var _openloginJrpc = require("@toruslabs/openlogin-jrpc");
var _lodashMerge = require("lodash.merge");
var _lodashMergeDefault = parcelHelpers.interopDefault(_lodashMerge);
var _obsStore = require("@metamask/obs-store");
var _ethRpcErrors = require("eth-rpc-errors");
var _fastDeepEqual = require("fast-deep-equal");
var _fastDeepEqualDefault = parcelHelpers.interopDefault(_fastDeepEqual);
var _isStream = require("is-stream");
var _pump = require("pump");
var _pumpDefault = parcelHelpers.interopDefault(_pump);
var _loglevel = require("loglevel");
var _loglevelDefault = parcelHelpers.interopDefault(_loglevel);
var _createHash = require("create-hash");
var _createHashDefault = parcelHelpers.interopDefault(_createHash);
var _events = require("events");
var Buffer = require("1ab6b87f05575652").Buffer;
const LOGIN_PROVIDER = {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    TWITCH: "twitch",
    REDDIT: "reddit",
    DISCORD: "discord"
};
const WALLET_VERIFIERS = {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    TWITCH: "twitch",
    REDDIT: "reddit",
    DISCORD: "discord",
    EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless"
};
const WALLET_OPENLOGIN_VERIFIER_MAP = {
    [WALLET_VERIFIERS.GOOGLE]: "tkey-google",
    [WALLET_VERIFIERS.FACEBOOK]: "tkey-facebook",
    [WALLET_VERIFIERS.TWITCH]: "tkey-twitch",
    [WALLET_VERIFIERS.REDDIT]: "tkey-reddit",
    [WALLET_VERIFIERS.DISCORD]: "tkey-discord",
    [WALLET_VERIFIERS.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless"
};
const PAYMENT_PROVIDER = {
    MOONPAY: "moonpay",
    WYRE: "wyre",
    RAMPNETWORK: "rampnetwork",
    XANPOOL: "xanpool",
    MERCURYO: "mercuryo",
    TRANSAK: "transak",
    BANXA: "banxa"
};
const SUPPORTED_PAYMENT_NETWORK = {
    MAINNET: "mainnet",
    MATIC: "matic",
    BSC_MAINNET: "bsc_mainnet",
    AVALANCHE_MAINNET: "avalanche_mainnet",
    XDAI: "xdai"
};
const TORUS_BUILD_ENV = {
    PRODUCTION: "production",
    DEVELOPMENT: "development",
    BINANCE: "binance",
    TESTING: "testing",
    LRC: "lrc",
    BETA: "beta",
    BNB: "bnb",
    POLYGON: "polygon"
};
const BUTTON_POSITION = {
    BOTTOM_LEFT: "bottom-left",
    TOP_LEFT: "top-left",
    BOTTOM_RIGHT: "bottom-right",
    TOP_RIGHT: "top-right"
};
/**
 * From https://min-api.cryptocompare.com/data/v2/pair/mapping/fsym?fsym=BTC&extraParams=YourSite
 * GET https://min-api.cryptocompare.com/data/v2/pair/mapping/fsym?fsym=BTC
 * Then map over returned entries, picking tsym
 *
 * Last updated: Date of commit
 */ const CRYPTO_COMPARE_CURRENCIES = [
    "ETH",
    "USDT",
    "USDC",
    "TUSD",
    "EOSDT",
    "USD",
    "DAI",
    "GUSD",
    "DKKT",
    "PAX",
    "ILS",
    "RUB",
    "BYN",
    "EUR",
    "GBP",
    "JPY",
    "KRW",
    "PLN",
    "MXN",
    "AUD",
    "BRL",
    "CAD",
    "CHF",
    "KPW",
    "LAK",
    "LBP",
    "LKR",
    "XOF",
    "CNHT",
    "DOGE",
    "UAH",
    "TRY",
    "HKD",
    "XJP",
    "SGD",
    "USC",
    "NZD",
    "NGN",
    "RUR",
    "COP",
    "GHS",
    "EGP",
    "IDR",
    "BHD",
    "CRC",
    "PEN",
    "AED",
    "DOP",
    "PKR",
    "HUF",
    "VND",
    "XAR",
    "LTC",
    "RON",
    "OMR",
    "MYR",
    "DKK",
    "UGX",
    "ZMW",
    "SAR",
    "SEK",
    "GEL",
    "RWF",
    "IRR",
    "TZS",
    "CNY",
    "VEF",
    "BDT",
    "HRK",
    "CLP",
    "THB",
    "XAF",
    "ARS",
    "UYU",
    "SZL",
    "KZT",
    "NOK",
    "KES",
    "PAB",
    "INR",
    "CZK",
    "MAD",
    "TWD",
    "PHP",
    "ZAR",
    "BOB",
    "CDF",
    "DASH",
    "VES",
    "ISK",
    "MWK",
    "BAM",
    "TTD",
    "XRP",
    "JOD",
    "RSD",
    "HNL",
    "BGN",
    "GTQ",
    "BWP",
    "XMR",
    "MMK",
    "QAR",
    "AOA",
    "KWD",
    "MUR",
    "WUSD",
    "WEUR",
    "WAVES",
    "WTRY",
    "LRD",
    "LSL",
    "LYD",
    "AWG",
    "MDL",
    "BTO",
    "EURS",
    "CHFT",
    "MKD",
    "MNT",
    "MOP",
    "MRO",
    "MVR",
    "VOLLAR",
    "CKUSD",
    "KHR",
    "VUV",
    "BITCNY",
    "QC",
    "BBD",
    "NAD",
    "NPR",
    "PGK",
    "PYG",
    "BIF",
    "BMD",
    "BND",
    "XLM",
    "BNB",
    "SCR",
    "BAT",
    "CRO",
    "HT",
    "KCS",
    "LEO",
    "LINK",
    "MKR",
    "NPXS",
    "OMG",
    "REP",
    "ZB",
    "ZIL",
    "ZRX",
    "BCH",
    "BZD",
    "CUP",
    "CVE",
    "DJF",
    "DZD",
    "ERN",
    "ETB",
    "FJD",
    "FKP",
    "BUSD",
    "ANCT",
    "ALL",
    "AMD",
    "ANG",
    "CNYX",
    "IQD",
    "UZS",
    "TND",
    "GGP",
    "XAU",
    "KGS",
    "GIP",
    "JMD",
    "ZEC",
    "USDP",
    "BSV",
    "EMC2",
    "SNT",
    "GTO",
    "POWR",
    "EUSD",
    "EURT",
    "BCY",
    "BTS",
    "ATM",
    "BLOCKPAY",
    "ARDR",
    "AMP",
    "B2X",
    "BITGOLD",
    "BITEUR",
    "ATB",
    "BITUSD",
    "AGRS",
    "DFXT",
    "HIKEN",
    "BIX",
    "KNC",
    "EOS",
    "COB",
    "COSS",
    "BMH",
    "NANO",
    "BDG",
    "BNT",
    "XVG",
    "LKK1Y",
    "LKK",
    "USDK",
    "EURN",
    "NZDT",
    "JSE",
    "GMD",
    "GNF",
    "GYD",
    "YER",
    "XPF",
    "HTG",
    "SLL",
    "SOS",
    "WST",
    "SVC",
    "SYP",
    "NEO",
    "KMF",
    "JUMP",
    "AYA",
    "BLAST",
    "WGR",
    "BCN",
    "BTG",
    "URALS",
    "INN",
    "USDQ",
    "CNH",
    "HUSD",
    "BKRW",
    "NZDX",
    "EURX",
    "CADX",
    "USDEX",
    "JPYX",
    "AUDX",
    "VNDC",
    "EON",
    "GBPX",
    "CHFX",
    "USDJ",
    "IDRT",
    "USDS",
    "USDN",
    "BIDR",
    "IDK",
    "BSD",
    "BTN",
    "KYD",
    "NIO",
    "SBD",
    "SDG",
    "SHP",
    "TOP",
    "XCD",
    "XCHF",
    "CNYT",
    "GYEN",
    "ZUSD",
    "GOLD",
    "TRX",
    "TRYB",
    "PLATC",
    "STRAX",
    "UST",
    "GLM",
    "VAI",
    "BRZ",
    "DDRST",
    "XAUT",
    "MIM"
];
/**
 * currencies supported by the payment provider
 * Last updated: Date of commit
 */ const PROVIDER_SUPPORTED_FIAT_CURRENCIES = {
    // https://integrations.simplex.com/supported_currencies
    // https://support.moonpay.com/hc/en-gb/articles/360011931457-Which-fiat-currencies-are-supported-
    [PAYMENT_PROVIDER.MOONPAY]: [
        "AUD",
        "BGN",
        "BRL",
        "CAD",
        "CHF",
        "CNY",
        "COP",
        "CZK",
        "DKK",
        "DOP",
        "EGP",
        "EUR",
        "GBP",
        "HKD",
        "HRK",
        "IDR",
        "ILS",
        "JPY",
        "JOD",
        "KES",
        "KRW",
        "KWD",
        "LKR",
        "MAD",
        "MXN",
        "MYR",
        "NGN",
        "NOK",
        "NZD",
        "OMR",
        "PEN",
        "PKR",
        "PLN",
        "RON",
        "RUB",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "TWD",
        "USD",
        "VND",
        "ZAR"
    ],
    /**
   * https://docs.sendwyre.com/docs/supported-currencies#fiat
   * The ones where credit card is supported
   */ [PAYMENT_PROVIDER.WYRE]: [
        "USD",
        "EUR",
        "GBP",
        "AUD",
        "CAD",
        "NZD",
        "ARS",
        "BRL",
        "CHF",
        "CLP",
        "COP",
        "CZK",
        "DKK",
        "HKD",
        "ILS",
        "INR",
        "ISK",
        "JPY",
        "KRW",
        "MXN",
        "MYR",
        "NOK",
        "PHP",
        "PLN",
        "SEK",
        "THB",
        "VND",
        "ZAR"
    ],
    // https://support.ramp.network/en/articles/471-why-am-i-paying-in-usd-eur-gbp
    [PAYMENT_PROVIDER.RAMPNETWORK]: [
        "USD",
        "EUR",
        "GBP"
    ],
    // From https://xanpool.com/ fiat select dropdown
    [PAYMENT_PROVIDER.XANPOOL]: [
        "SGD",
        "HKD",
        "THB",
        "PHP",
        "INR",
        "IDR",
        "MYR",
        "AUD",
        "NZD",
        "KRW"
    ],
    // https://support.aax.com/en/articles/5295762-mercuryo
    // RUB / UAH currently not supported
    [PAYMENT_PROVIDER.MERCURYO]: [
        "EUR",
        "USD",
        "GBP",
        "TRY",
        "JPY",
        "BRL",
        "NGN",
        "VND",
        "MXN",
        "KRW"
    ],
    /**
   * https://support.transak.com/hc/en-us/articles/360020615578-Credit-and-Debit-Card-Payments-through-Transak
   * or
   * https://transak.stoplight.io/docs/transak-docs/b3A6OTk1ODQ0-2-get-fiat-currencies
   */ [PAYMENT_PROVIDER.TRANSAK]: [
        "ARS",
        "AUD",
        "BBD",
        "BGN",
        "BMD",
        "BRL",
        "CAD",
        "CHF",
        "CLP",
        "CRC",
        "CZK",
        "DKK",
        "DOP",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GIP",
        "HRK",
        "HUF",
        "IDR",
        "ILS",
        "ISK",
        "JMD",
        "JPY",
        "KES",
        "KRW",
        "MDL",
        "MXN",
        "MYR",
        "NOK",
        "NZD",
        "PEN",
        "PHP",
        "PLN",
        "PYG",
        "RON",
        "SEK",
        "SGD",
        "THB",
        "TRY",
        "TZS",
        "USD",
        "ZAR"
    ],
    [PAYMENT_PROVIDER.BANXA]: [
        "EUR",
        "GBP",
        "USD"
    ]
};
const cryptoCompareCurrenciesSet = new Set(CRYPTO_COMPARE_CURRENCIES);
/**
 * Fiat currencies that we support
 */ function supportedFiatCurrencies(provider) {
    const providerSupportedFiatCurrencies = PROVIDER_SUPPORTED_FIAT_CURRENCIES[provider];
    return providerSupportedFiatCurrencies.filter((currency)=>cryptoCompareCurrenciesSet.has(currency));
}
const paymentProviders$1 = {
    [PAYMENT_PROVIDER.MOONPAY]: {
        line1: "Credit/ Debit Card/ Apple Pay",
        line2: "4.5% or 5 USD",
        line3: "2,000€/day, 10,000€/mo",
        supportPage: "https://help.moonpay.io/en/",
        minOrderValue: 24.99,
        maxOrderValue: 50000,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.MOONPAY),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "aave",
                    display: "AAVE"
                },
                {
                    value: "bat",
                    display: "BAT"
                },
                {
                    value: "dai",
                    display: "DAI"
                },
                {
                    value: "eth",
                    display: "ETH"
                },
                {
                    value: "mkr",
                    display: "MKR"
                },
                {
                    value: "matic",
                    display: "MATIC"
                },
                {
                    value: "usdt",
                    display: "USDT"
                },
                {
                    value: "usdc",
                    display: "USDC"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.MATIC]: [
                {
                    value: "eth_polygon",
                    display: "ETH"
                },
                {
                    value: "matic_polygon",
                    display: "MATIC"
                },
                {
                    value: "usdc_polygon",
                    display: "USDC"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [
                {
                    value: "bnb_bsc",
                    display: "BNB"
                },
                {
                    value: "busd_bsc",
                    display: "BUSD"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [
                {
                    value: "avax_cchain",
                    display: "AVAX"
                }
            ]
        },
        includeFees: true,
        api: true,
        enforceMax: false
    },
    [PAYMENT_PROVIDER.WYRE]: {
        line1: "Apple Pay/ Debit/ Credit Card",
        line2: "4.9% + 30\xa2 or 5 USD",
        line3: "$250/day",
        supportPage: "https://support.sendwyre.com/en/",
        minOrderValue: 5,
        maxOrderValue: 500,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.WYRE),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "AAVE",
                    display: "AAVE"
                },
                {
                    value: "BAT",
                    display: "BAT"
                },
                {
                    value: "BUSD",
                    display: "BUSD"
                },
                {
                    value: "DAI",
                    display: "DAI"
                },
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "MKR",
                    display: "MKR"
                },
                {
                    value: "UNI",
                    display: "UNI"
                },
                {
                    value: "USDC",
                    display: "USDC"
                },
                {
                    value: "USDT",
                    display: "USDT"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.MATIC]: [
                {
                    value: "MUSDC",
                    display: "USDC"
                }
            ],
            // AVAXC? or AVAX?
            [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [
                {
                    value: "AVAXC",
                    display: "AVAXC"
                }
            ]
        },
        includeFees: false,
        api: true,
        enforceMax: false
    },
    [PAYMENT_PROVIDER.RAMPNETWORK]: {
        line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
        line2: "0.49% - 2.9%",
        line3: "5,000€/purchase, 20,000€/mo",
        supportPage: "https://instant.ramp.network/",
        minOrderValue: 50,
        maxOrderValue: 20000,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.RAMPNETWORK),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "DAI",
                    display: "DAI"
                },
                {
                    value: "USDC",
                    display: "USDC"
                },
                {
                    value: "USDT",
                    display: "USDT"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.MATIC]: [
                {
                    value: "MATIC_DAI",
                    display: "DAI"
                },
                {
                    value: "MATIC_MATIC",
                    display: "MATIC"
                },
                {
                    value: "MATIC_USDC",
                    display: "USDC"
                }
            ],
            // what about AVAXC?
            [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [
                {
                    value: "AVAX",
                    display: "AVAX"
                }
            ]
        },
        includeFees: true,
        api: true,
        receiveHint: "walletTopUp.receiveHintRamp",
        enforceMax: false
    },
    [PAYMENT_PROVIDER.XANPOOL]: {
        line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
        line2: "2.5% buying, 3% selling",
        line3: "$2,500 / day",
        supportPage: "mailto:support@xanpool.com",
        minOrderValue: 100,
        maxOrderValue: 2500,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.XANPOOL),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "USDT",
                    display: "USDT"
                }
            ]
        },
        includeFees: true,
        api: true,
        sell: true,
        enforceMax: false
    },
    [PAYMENT_PROVIDER.MERCURYO]: {
        line1: "Credit/ Debit Card/ Apple Pay",
        line2: "3.95% or 4 USD",
        line3: "10,000€/day, 25,000€/mo",
        supportPage: "mailto:support@mercuryo.io",
        minOrderValue: 30,
        maxOrderValue: 5000,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.MERCURYO),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "BAT",
                    display: "BAT"
                },
                {
                    value: "USDT",
                    display: "USDT"
                },
                {
                    value: "DAI",
                    display: "DAI"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [
                {
                    value: "BNB",
                    display: "BNB"
                },
                {
                    value: "BUSD",
                    display: "BUSD"
                },
                {
                    value: "1INCH",
                    display: "1INCH"
                }
            ]
        },
        includeFees: true,
        api: true,
        enforceMax: false
    },
    [PAYMENT_PROVIDER.TRANSAK]: {
        line1: "Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy",
        line2: "0.99% - 5.5% or 5 USD",
        line3: "$5,000/day, $28,000/mo",
        supportPage: "https://support.transak.com/hc/en-US",
        minOrderValue: 30,
        maxOrderValue: 500,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.TRANSAK),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "AAVE",
                    display: "AAVE"
                },
                {
                    value: "DAI",
                    display: "DAI"
                },
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "USDC",
                    display: "USDC"
                },
                {
                    value: "USDT",
                    display: "USDT"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.MATIC]: [
                {
                    value: "AAVE",
                    display: "AAVE"
                },
                {
                    value: "DAI",
                    display: "DAI"
                },
                {
                    value: "MATIC",
                    display: "MATIC"
                },
                {
                    value: "USDC",
                    display: "USDC"
                },
                {
                    value: "USDT",
                    display: "USDT"
                },
                {
                    value: "WETH",
                    display: "WETH"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.BSC_MAINNET]: [
                {
                    value: "BNB",
                    display: "BNB"
                },
                {
                    value: "BUSD",
                    display: "BUSD"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.AVALANCHE_MAINNET]: [
                {
                    value: "AVAX",
                    display: "AVAX"
                }
            ]
        },
        includeFees: true,
        enforceMax: true
    },
    [PAYMENT_PROVIDER.BANXA]: {
        line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
        line2: "0.49% - 2.9%",
        line3: "5,000€/purchase, 20,000€/mo",
        supportPage: "https://support.banxa.com",
        minOrderValue: 20,
        maxOrderValue: 15000,
        validCurrencies: supportedFiatCurrencies(PAYMENT_PROVIDER.BANXA),
        validCryptoCurrenciesByChain: {
            [SUPPORTED_PAYMENT_NETWORK.MAINNET]: [
                {
                    value: "ETH",
                    display: "ETH"
                },
                {
                    value: "USDT",
                    display: "USDT"
                },
                {
                    value: "BUSD",
                    display: "BUSD"
                },
                {
                    value: "LINK",
                    display: "LINK"
                },
                {
                    value: "USDC",
                    display: "USDC"
                },
                {
                    value: "CHZ",
                    display: "CHZ"
                },
                {
                    value: "BAT",
                    display: "BAT"
                },
                {
                    value: "MANA",
                    display: "MANA"
                },
                {
                    value: "AAVE",
                    display: "AAVE"
                },
                {
                    value: "COMP",
                    display: "COMP"
                },
                {
                    value: "ENJ",
                    display: "ENJ"
                }
            ],
            [SUPPORTED_PAYMENT_NETWORK.MATIC]: [
                {
                    value: "MATIC",
                    display: "MATIC"
                }
            ]
        },
        includeFees: true,
        enforceMax: true
    }
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
    supportedVerifierList: Object.values(WALLET_VERIFIERS),
    paymentProviders: paymentProviders$1,
    api: "https://api.tor.us",
    translations,
    prodTorusUrl: "",
    localStorageKeyPrefix: `torus-`
};
const runOnLoad = (fn)=>new Promise((resolve, reject)=>{
        if (window.document.body != null) Promise.resolve(fn()).then(resolve).catch(reject);
        else window.document.addEventListener("DOMContentLoaded", ()=>{
            Promise.resolve(fn()).then(resolve).catch(reject);
        });
    });
const htmlToElement = (html)=>{
    const template = window.document.createElement("template");
    const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = trimmedHtml;
    return template.content.firstChild;
};
const handleEvent = function(handle, eventName, handler) {
    for(var _len = arguments.length, handlerArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++)handlerArgs[_key - 3] = arguments[_key];
    const handlerWrapper = ()=>{
        handler(...handlerArgs);
        handle.removeEventListener(eventName, handlerWrapper);
    };
    handle.addEventListener(eventName, handlerWrapper);
};
const handleStream = (handle, eventName, handler)=>{
    const handlerWrapper = (chunk)=>{
        handler(chunk);
        handle.removeListener(eventName, handlerWrapper);
    };
    handle.on(eventName, handlerWrapper);
};
async function documentReady() {
    return new Promise((resolve)=>{
        if (document.readyState !== "loading") resolve();
        else handleEvent(document, "DOMContentLoaded", resolve);
    });
}
var log = (0, _loglevelDefault.default).getLogger("torus-embed");
var messages = {
    errors: {
        disconnected: ()=>"Torus: Lost connection to Torus.",
        permanentlyDisconnected: ()=>"Torus: Disconnected from iframe. Page reload required.",
        sendSiteMetadata: ()=>"Torus: Failed to send site metadata. This is an internal error, please report this bug.",
        unsupportedSync: (method)=>`Torus: The Torus Ethereum provider does not support synchronous methods like ${method} without a callback parameter.`,
        invalidDuplexStream: ()=>"Must provide a Node.js-style duplex stream.",
        invalidOptions: (maxEventListeners, shouldSendMetadata)=>`Invalid options. Received: { maxEventListeners: ${maxEventListeners}, shouldSendMetadata: ${shouldSendMetadata} }`,
        invalidRequestArgs: ()=>`Expected a single, non-array, object argument.`,
        invalidRequestMethod: ()=>`'args.method' must be a non-empty string.`,
        invalidRequestParams: ()=>`'args.params' must be an object or array if provided.`,
        invalidLoggerObject: ()=>`'args.logger' must be an object if provided.`,
        invalidLoggerMethod: (method)=>`'args.logger' must include required method '${method}'.`
    },
    info: {
        connected: (chainId)=>`Torus: Connected to chain with ID "${chainId}".`
    },
    warnings: {
        // deprecated methods
        enableDeprecation: 'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
        sendDeprecation: 'Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
        events: {
            close: 'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
            data: 'Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
            networkChanged: 'Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
            notification: 'Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193'
        },
        publicConfigStore: 'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
    }
};
const { paymentProviders  } = configuration;
const validatePaymentProvider = (provider, params)=>{
    const errors = {};
    if (!provider) return {
        errors,
        isValid: true
    };
    if (provider && !paymentProviders[provider]) {
        errors.provider = "Invalid Provider";
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }
    const selectedProvider = paymentProviders[provider];
    const selectedParams = params || {};
    // set default values
    // if (!selectedParams.selectedCurrency) [selectedParams.selectedCurrency] = selectedProvider.validCurrencies
    // if (!selectedParams.fiatValue) selectedParams.fiatValue = selectedProvider.minOrderValue
    // if (!selectedParams.selectedCryptoCurrency) [selectedParams.selectedCryptoCurrency] = selectedProvider.validCryptoCurrencies
    // validations
    if (selectedParams.fiatValue) {
        const requestedOrderAmount = +parseFloat(selectedParams.fiatValue.toString()) || 0;
        if (requestedOrderAmount < selectedProvider.minOrderValue) errors.fiatValue = "Requested amount is lower than supported";
        if (requestedOrderAmount > selectedProvider.maxOrderValue && selectedProvider.enforceMax) errors.fiatValue = "Requested amount is higher than supported";
    }
    if (selectedParams.selectedCurrency && !selectedProvider.validCurrencies.includes(selectedParams.selectedCurrency)) errors.selectedCurrency = "Unsupported currency";
    if (selectedParams.selectedCryptoCurrency) {
        const validCryptoCurrenciesByChain = Object.values(selectedProvider.validCryptoCurrenciesByChain).flat().map((currency)=>currency.value);
        const finalCryptoCurrency = provider === PAYMENT_PROVIDER.MOONPAY ? selectedParams.selectedCryptoCurrency.toLowerCase() : selectedParams.selectedCryptoCurrency;
        if (validCryptoCurrenciesByChain && !validCryptoCurrenciesByChain.includes(finalCryptoCurrency)) errors.selectedCryptoCurrency = "Unsupported cryptoCurrency";
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
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
            log.error(`MetaMask - RPC Error: ${error.message}`, error);
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
    let warningMsg = `MetaMask: Lost connection to "${remoteLabel}".`;
    if (error?.stack) warningMsg += `\n${error.stack}`;
    log.warn(warningMsg);
    if (emitter && emitter.listenerCount("error") > 0) emitter.emit("error", warningMsg);
}
const getPreopenInstanceId = ()=>Math.random().toString(36).slice(2);
const getTorusUrl = async (buildEnv, integrity)=>{
    let torusUrl;
    let logLevel;
    // Do not change this line
    const version = "1.41.1";
    let versionUsed = integrity.version || version;
    try {
        if ((buildEnv === "binance" || buildEnv === "production") && !integrity.version) {
            let response;
            if (!configuration.prodTorusUrl) response = await (0, _httpHelpers.get)(`${configuration.api}/latestversion?name=@toruslabs/torus-embed&version=${version}`, {}, {
                useAPIKey: true
            });
            else response = {
                data: configuration.prodTorusUrl
            };
            versionUsed = response.data;
            // eslint-disable-next-line require-atomic-updates
            configuration.prodTorusUrl = response.data;
        }
    } catch (error) {
        log.error(error, "unable to fetch latest version");
    }
    log.info("version used: ", versionUsed);
    switch(buildEnv){
        case "binance":
            torusUrl = `https://binance.tor.us/v${versionUsed}`;
            logLevel = "info";
            break;
        case "testing":
            torusUrl = "https://testing.tor.us";
            logLevel = "debug";
            break;
        case "bnb":
            torusUrl = "https://bnb.tor.us";
            logLevel = "error";
            break;
        case "polygon":
            torusUrl = "https://polygon.tor.us";
            logLevel = "error";
            break;
        case "lrc":
            torusUrl = "https://lrc.tor.us";
            logLevel = "debug";
            break;
        case "beta":
            torusUrl = "https://beta.tor.us";
            logLevel = "debug";
            break;
        case "development":
            torusUrl = "http://localhost:4050";
            logLevel = "debug";
            break;
        default:
            torusUrl = `https://app.tor.us/v${versionUsed}`;
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
const EMITTED_NOTIFICATIONS = [
    "eth_subscription" // per eth-json-rpc-filters/subscriptionManager
];
const NOOP = ()=>{
// empty function
};
const FEATURES_PROVIDER_CHANGE_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
const FEATURES_DEFAULT_WALLET_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315";
const FEATURES_CONFIRM_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
function getPopupFeatures() {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const w = 1200;
    const h = 700;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
    const systemZoom = 1; // No reliable estimate
    const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
    const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
    const features = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${h / systemZoom},width=${w / systemZoom},top=${top},left=${left}`;
    return features;
}
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
(0, _openloginJrpc.SafeEventEmitter).defaultMaxListeners = 100;
// resolve response.result, reject errors
const getRpcPromiseCallback = function(resolve, reject) {
    let unwrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return (error, response)=>{
        if (error || response.error) return reject(error || response.error);
        return !unwrapResult || Array.isArray(response) ? resolve(response) : resolve(response.result);
    };
};
class TorusInpageProvider extends (0, _openloginJrpc.SafeEventEmitter) {
    /**
   * The chain ID of the currently connected Ethereum chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */ /**
   * The user's currently selected Ethereum address.
   * If null, MetaMask is either locked or the user has not permitted any
   * addresses to be viewed.
   */ /**
   * Indicating that this provider is a MetaMask provider.
   */ constructor(connectionStream){
        let { maxEventListeners =100 , shouldSendMetadata =true , jsonRpcStreamName ="provider"  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        super();
        (0, _definePropertyDefault.default)(this, "chainId", void 0);
        (0, _definePropertyDefault.default)(this, "selectedAddress", void 0);
        (0, _definePropertyDefault.default)(this, "_rpcEngine", void 0);
        (0, _definePropertyDefault.default)(this, "networkVersion", void 0);
        (0, _definePropertyDefault.default)(this, "shouldSendMetadata", void 0);
        (0, _definePropertyDefault.default)(this, "isTorus", void 0);
        (0, _definePropertyDefault.default)(this, "_publicConfigStore", void 0);
        (0, _definePropertyDefault.default)(this, "tryPreopenHandle", void 0);
        (0, _definePropertyDefault.default)(this, "enable", void 0);
        (0, _definePropertyDefault.default)(this, "_state", void 0);
        (0, _definePropertyDefault.default)(this, "_jsonRpcConnection", void 0);
        (0, _definePropertyDefault.default)(this, "_sentWarnings", {
            // methods
            enable: false,
            experimentalMethods: false,
            send: false,
            publicConfigStore: false,
            // events
            events: {
                close: false,
                data: false,
                networkChanged: false,
                notification: false
            }
        });
        if (!(0, _isStream.duplex)(connectionStream)) throw new Error(messages.errors.invalidDuplexStream());
        this.isTorus = true;
        this.setMaxListeners(maxEventListeners);
        // private state
        this._state = _objectSpread$1({}, TorusInpageProvider._defaultState);
        // public state
        this.selectedAddress = null;
        this.networkVersion = null;
        this.chainId = null;
        this.shouldSendMetadata = shouldSendMetadata;
        // bind functions (to prevent e.g. web3@1.x from making unbound calls)
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
        this._handleChainChanged = this._handleChainChanged.bind(this);
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this);
        this._handleConnect = this._handleConnect.bind(this);
        this._handleDisconnect = this._handleDisconnect.bind(this);
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        this._sendSync = this._sendSync.bind(this);
        this._rpcRequest = this._rpcRequest.bind(this);
        this._warnOfDeprecation = this._warnOfDeprecation.bind(this);
        this._initializeState = this._initializeState.bind(this);
        this.request = this.request.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        // this.enable = this.enable.bind(this);
        // setup connectionStream multiplexing
        const mux = new (0, _openloginJrpc.ObjectMultiplex)();
        (0, _pumpDefault.default)(connectionStream, mux, connectionStream, this._handleStreamDisconnect.bind(this, "MetaMask"));
        // subscribe to metamask public config (one-way)
        this._publicConfigStore = new (0, _obsStore.ObservableStore)({
            storageKey: "Metamask-Config"
        });
        // handle isUnlocked changes, and chainChanged and networkChanged events
        // this._publicConfigStore.subscribe((stringifiedState) => {
        //   // This is because we are using store as string
        //   const state = JSON.parse(stringifiedState as unknown as string);
        //   if ("isUnlocked" in state && state.isUnlocked !== this._state.isUnlocked) {
        //     this._state.isUnlocked = state.isUnlocked;
        //     if (!this._state.isUnlocked) {
        //       // accounts are never exposed when the extension is locked
        //       this._handleAccountsChanged([]);
        //     } else {
        //       // this will get the exposed accounts, if any
        //       try {
        //         this._rpcRequest(
        //           { method: "eth_accounts", params: [] },
        //           NOOP,
        //           true // indicating that eth_accounts _should_ update accounts
        //         );
        //       } catch (_) {
        //         // Swallow error
        //       }
        //     }
        //   }
        //   if ("selectedAddress" in state && this.selectedAddress !== state.selectedAddress) {
        //     try {
        //       this._rpcRequest(
        //         { method: "eth_accounts", params: [] },
        //         NOOP,
        //         true // indicating that eth_accounts _should_ update accounts
        //       );
        //     } catch (_) {
        //       // Swallow error
        //     }
        //   }
        //   // Emit chainChanged event on chain change
        //   if ("chainId" in state && state.chainId !== this.chainId) {
        //     this.chainId = state.chainId || null;
        //     this.emit("chainChanged", this.chainId);
        //     // indicate that we've connected, for EIP-1193 compliance
        //     // we do this here so that iframe can initialize
        //     if (!this._state.hasEmittedConnection) {
        //       this._handleConnect(this.chainId);
        //       this._state.hasEmittedConnection = true;
        //     }
        //   }
        //   // Emit networkChanged event on network change
        //   if ("networkVersion" in state && state.networkVersion !== this.networkVersion) {
        //     this.networkVersion = state.networkVersion || null;
        //     this.emit("networkChanged", this.networkVersion);
        //   }
        // });
        (0, _pumpDefault.default)(mux.createStream("publicConfig"), (0, _obsStore.storeAsStream)(this._publicConfigStore), // RPC requests should still work if only this stream fails
        logStreamDisconnectWarning.bind(this, "MetaMask PublicConfigStore"));
        // ignore phishing warning message (handled elsewhere)
        mux.ignoreStream("phishing");
        // setup own event listeners
        // EIP-1193 connect
        this.on("connect", ()=>{
            this._state.isConnected = true;
        });
        // connect to async provider
        const jsonRpcConnection = (0, _openloginJrpc.createStreamMiddleware)();
        (0, _pumpDefault.default)(jsonRpcConnection.stream, mux.createStream(jsonRpcStreamName), jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider"));
        // handle RPC requests via dapp-side rpc engine
        const rpcEngine = new (0, _openloginJrpc.JRPCEngine)();
        rpcEngine.push((0, _openloginJrpc.createIdRemapMiddleware)());
        rpcEngine.push(createErrorMiddleware());
        rpcEngine.push(jsonRpcConnection.middleware);
        this._rpcEngine = rpcEngine;
        // json rpc notification listener
        jsonRpcConnection.events.on("notification", (payload)=>{
            const { method , params  } = payload;
            if (method === "wallet_accountsChanged") this._handleAccountsChanged(params);
            else if (method === "wallet_unlockStateChanged") this._handleUnlockStateChanged(params);
            else if (method === "wallet_chainChanged") this._handleChainChanged(params);
            else if (EMITTED_NOTIFICATIONS.includes(payload.method)) {
                // EIP 1193 subscriptions, per eth-json-rpc-filters/subscriptionManager
                this.emit("data", payload); // deprecated
                this.emit("notification", params.result);
                this.emit("message", {
                    type: method,
                    data: params
                });
            }
        // Backward compatibility for older non EIP 1193 subscriptions
        // this.emit('data', null, payload)
        });
    }
    get publicConfigStore() {
        if (!this._sentWarnings.publicConfigStore) {
            log.warn(messages.warnings.publicConfigStore);
            this._sentWarnings.publicConfigStore = true;
        }
        return this._publicConfigStore;
    }
    /**
   * Returns whether the inpage provider is connected to Torus.
   */ isConnected() {
        return this._state.isConnected;
    }
    /**
   * Submits an RPC request for the given method, with the given params.
   * Resolves with the result of the method call, or rejects on error.
   *
   * @param args - The RPC request arguments.
   * @returns A Promise that resolves with the result of the RPC method,
   * or rejects if an error is encountered.
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
            }, getRpcPromiseCallback(resolve, reject));
        });
    }
    /**
   * Submits an RPC request per the given JSON-RPC request object.
   *
   * @param payload - The RPC request object.
   * @param cb - The callback function.
   */ sendAsync(payload, callback) {
        this._rpcRequest(payload, callback);
    }
    /**
   * We override the following event methods so that we can warn consumers
   * about deprecated events:
   *   addListener, on, once, prependListener, prependOnceListener
   */ addListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.addListener(eventName, listener);
    }
    on(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.on(eventName, listener);
    }
    once(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.once(eventName, listener);
    }
    prependListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependListener(eventName, listener);
    }
    prependOnceListener(eventName, listener) {
        this._warnOfDeprecation(eventName);
        return super.prependOnceListener(eventName, listener);
    }
    // Private Methods
    //= ===================
    /**
   * Constructor helper.
   * Populates initial state by calling 'wallet_getProviderState' and emits
   * necessary events.
   */ async _initializeState() {
        try {
            const { accounts , chainId , isUnlocked , networkVersion  } = await this.request({
                method: "wallet_getProviderState"
            });
            // indicate that we've connected, for EIP-1193 compliance
            this.emit("connect", {
                chainId
            });
            this._handleChainChanged({
                chainId,
                networkVersion
            });
            this._handleUnlockStateChanged({
                accounts,
                isUnlocked
            });
            this._handleAccountsChanged(accounts);
        } catch (error) {
            log.error("MetaMask: Failed to get initial state. Please report this bug.", error);
        } finally{
            log.info("initialized state");
            this._state.initialized = true;
            this.emit("_initialized");
        }
    }
    /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound.
   *
   * @param payload - The RPC request object.
   * @param callback - The consumer's callback.
   * @param isInternal - false - Whether the request is internal.
   */ _rpcRequest(payload, callback) {
        let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        let cb = callback;
        const _payload = payload;
        if (!Array.isArray(_payload)) {
            if (!_payload.jsonrpc) _payload.jsonrpc = "2.0";
            if (_payload.method === "eth_accounts" || _payload.method === "eth_requestAccounts") // handle accounts changing
            cb = (err, res)=>{
                this._handleAccountsChanged(res.result || [], _payload.method === "eth_accounts", isInternal);
                callback(err, res);
            };
            else if (_payload.method === "wallet_getProviderState") {
                this._rpcEngine.handle(payload, cb);
                return;
            }
        }
        this.tryPreopenHandle(_payload, cb);
    }
    send(methodOrPayload, callbackOrArgs) {
        if (!this._sentWarnings.send) {
            log.warn(messages.warnings.sendDeprecation);
            this._sentWarnings.send = true;
        }
        if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) return new Promise((resolve, reject)=>{
            try {
                this._rpcRequest({
                    method: methodOrPayload,
                    params: callbackOrArgs
                }, getRpcPromiseCallback(resolve, reject, false));
            } catch (error) {
                reject(error);
            }
        });
        if (methodOrPayload && typeof methodOrPayload === "object" && typeof callbackOrArgs === "function") return this._rpcRequest(methodOrPayload, callbackOrArgs);
        return this._sendSync(methodOrPayload);
    }
    /**
   * DEPRECATED.
   * Internal backwards compatibility method, used in send.
   */ _sendSync(payload) {
        let result;
        switch(payload.method){
            case "eth_accounts":
                result = this.selectedAddress ? [
                    this.selectedAddress
                ] : [];
                break;
            case "eth_coinbase":
                result = this.selectedAddress || null;
                break;
            case "eth_uninstallFilter":
                this._rpcRequest(payload, NOOP);
                result = true;
                break;
            case "net_version":
                result = this.networkVersion || null;
                break;
            default:
                throw new Error(messages.errors.unsupportedSync(payload.method));
        }
        return {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            result
        };
    }
    /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param chainId - The ID of the newly connected chain.
   * emits MetaMaskInpageProvider#connect
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
   * emits MetaMaskInpageProvider#disconnect
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
   * Called when connection is lost to critical streams.
   *
   * emits MetamaskInpageProvider#disconnect
   */ _handleStreamDisconnect(streamName, error) {
        logStreamDisconnectWarning(streamName, error, this);
        this._handleDisconnect(false, error ? error.message : undefined);
    }
    /**
   * Called when accounts may have changed.
   */ _handleAccountsChanged(accounts) {
        let isEthAccounts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        // defensive programming
        let finalAccounts = accounts;
        if (!Array.isArray(finalAccounts)) {
            log.error("MetaMask: Received non-array accounts parameter. Please report this bug.", finalAccounts);
            finalAccounts = [];
        }
        for (const account of accounts)if (typeof account !== "string") {
            log.error("MetaMask: Received non-string account. Please report this bug.", accounts);
            finalAccounts = [];
            break;
        }
        // emit accountsChanged if anything about the accounts array has changed
        if (!(0, _fastDeepEqualDefault.default)(this._state.accounts, finalAccounts)) {
            // we should always have the correct accounts even before eth_accounts
            // returns, except in cases where isInternal is true
            if (isEthAccounts && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !isInternal) log.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', finalAccounts);
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
   * emits MetamaskInpageProvider#chainChanged
   * @param networkInfo - An object with network info.
   */ _handleChainChanged() {
        let { chainId , networkVersion  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!chainId || !networkVersion) {
            log.error("MetaMask: Received invalid network parameters. Please report this bug.", {
                chainId,
                networkVersion
            });
            return;
        }
        if (networkVersion === "loading") this._handleDisconnect(true);
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
            log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
                isUnlocked
            });
            return;
        }
        if (isUnlocked !== this._state.isUnlocked) {
            this._state.isUnlocked = isUnlocked;
            this._handleAccountsChanged(accounts || []);
        }
    }
    /**
   * Warns of deprecation for the given event, if applicable.
   */ _warnOfDeprecation(eventName) {
        if (this._sentWarnings.events[eventName] === false) {
            log.warn(messages.warnings.events[eventName]);
            this._sentWarnings.events[eventName] = true;
        }
    }
}
(0, _definePropertyDefault.default)(TorusInpageProvider, "_defaultState", {
    accounts: null,
    isConnected: false,
    isUnlocked: false,
    initialized: false,
    isPermanentlyDisconnected: false,
    hasEmittedConnection: false
});
const defaults = (options)=>({
        algorithms: options.algorithms || [
            "sha256"
        ],
        delimiter: options.delimiter || " ",
        full: options.full || false
    });
// Generate list of hashes
const hashes = (options, data)=>{
    const internalHashes = {};
    options.algorithms.forEach((algorithm)=>{
        internalHashes[algorithm] = (0, _createHashDefault.default)(algorithm).update(data, "utf8").digest("base64");
    });
    return internalHashes;
};
// Build an integrity string
const integrity = (options, sri)=>{
    let output = "";
    // Hash list
    output += Object.keys(sri.hashes).map((algorithm)=>`${algorithm}-${sri.hashes[algorithm]}`).join(options.delimiter);
    return output;
};
const main = (options, data)=>{
    // Defaults
    const finalOptions = defaults(options);
    const sri = {
        hashes: hashes(finalOptions, data),
        integrity: undefined
    };
    sri.integrity = integrity(finalOptions, sri);
    return finalOptions.full ? sri : sri.integrity;
};
class PopupHandler extends (0, _events.EventEmitter) {
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
        this.features = features || getPopupFeatures();
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
/**
 * Returns whether the given image URL exists
 * @param url - the url of the image
 * @returns - whether the image exists
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
    const { document: document1  } = window1;
    // Use the site's favicon if it exists
    let icon = document1.querySelector('head > link[rel="shortcut icon"]');
    if (icon && await imgExists(icon.href)) return icon.href;
    // Search through available icons in no particular order
    icon = Array.from(document1.querySelectorAll('head > link[rel="icon"]')).find((_icon)=>Boolean(_icon.href));
    if (icon && await imgExists(icon.href)) return icon.href;
    return null;
}
/**
 * Gets site metadata and returns it
 *
 */ const getSiteMetadata = async ()=>({
        name: getSiteName(window),
        icon: await getSiteIcon(window)
    });
/**
 * Sends site metadata over an RPC request.
 */ async function sendSiteMetadata(engine) {
    try {
        const domainMetadata = await getSiteMetadata();
        // call engine.handle directly to avoid normal RPC request handling
        engine.handle({
            jsonrpc: "2.0",
            id: getPreopenInstanceId(),
            method: "wallet_sendDomainMetadata",
            params: domainMetadata
        }, NOOP);
    } catch (error) {
        log.error({
            message: messages.errors.sendSiteMetadata(),
            originalError: error
        });
    }
}
const _excluded = [
    "host",
    "chainId",
    "networkName"
];
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
const defaultVerifiers = {
    [LOGIN_PROVIDER.GOOGLE]: true,
    [LOGIN_PROVIDER.FACEBOOK]: true,
    [LOGIN_PROVIDER.REDDIT]: true,
    [LOGIN_PROVIDER.TWITCH]: true,
    [LOGIN_PROVIDER.DISCORD]: true
};
const iframeIntegrity = "sha384-TyJix2beanZzcdkcboa6uCUYMyLD0sGfvLb2m9+BJABgk4/kEutoxLOLL4Xex+DM";
const expectedCacheControlHeader = "max-age=3600";
const UNSAFE_METHODS = [
    "eth_sendTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "personal_sign",
    "eth_getEncryptionPublicKey",
    "eth_decrypt",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain"
];
// preload for iframe doesn't work https://bugs.chromium.org/p/chromium/issues/detail?id=593267
(async function preLoadIframe() {
    try {
        if (typeof document === "undefined") return;
        const torusIframeHtml = document.createElement("link");
        const { torusUrl  } = await getTorusUrl("production", {
            check: false,
            hash: iframeIntegrity,
            version: ""
        });
        torusIframeHtml.href = `${torusUrl}/popup`;
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
        let { buttonPosition =BUTTON_POSITION.BOTTOM_LEFT , buttonSize =56 , modalZIndex =99999 , apiKey ="torus-default"  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _definePropertyDefault.default)(this, "buttonPosition", BUTTON_POSITION.BOTTOM_LEFT);
        (0, _definePropertyDefault.default)(this, "buttonSize", void 0);
        (0, _definePropertyDefault.default)(this, "torusUrl", void 0);
        (0, _definePropertyDefault.default)(this, "torusIframe", void 0);
        (0, _definePropertyDefault.default)(this, "styleLink", void 0);
        (0, _definePropertyDefault.default)(this, "isLoggedIn", void 0);
        (0, _definePropertyDefault.default)(this, "isInitialized", void 0);
        (0, _definePropertyDefault.default)(this, "torusWidgetVisibility", void 0);
        (0, _definePropertyDefault.default)(this, "torusAlert", void 0);
        (0, _definePropertyDefault.default)(this, "apiKey", void 0);
        (0, _definePropertyDefault.default)(this, "modalZIndex", void 0);
        (0, _definePropertyDefault.default)(this, "alertZIndex", void 0);
        (0, _definePropertyDefault.default)(this, "torusAlertContainer", void 0);
        (0, _definePropertyDefault.default)(this, "isIframeFullScreen", void 0);
        (0, _definePropertyDefault.default)(this, "whiteLabel", void 0);
        (0, _definePropertyDefault.default)(this, "requestedVerifier", void 0);
        (0, _definePropertyDefault.default)(this, "currentVerifier", void 0);
        (0, _definePropertyDefault.default)(this, "embedTranslations", void 0);
        (0, _definePropertyDefault.default)(this, "ethereum", void 0);
        (0, _definePropertyDefault.default)(this, "provider", void 0);
        (0, _definePropertyDefault.default)(this, "communicationMux", void 0);
        (0, _definePropertyDefault.default)(this, "isLoginCallback", void 0);
        (0, _definePropertyDefault.default)(this, "paymentProviders", configuration.paymentProviders);
        (0, _definePropertyDefault.default)(this, "loginHint", "");
        (0, _definePropertyDefault.default)(this, "useWalletConnect", void 0);
        (0, _definePropertyDefault.default)(this, "isCustomLogin", false);
        this.buttonPosition = buttonPosition;
        this.buttonSize = buttonSize;
        this.torusUrl = "";
        this.isLoggedIn = false; // ethereum.enable working
        this.isInitialized = false; // init done
        this.torusWidgetVisibility = true;
        this.requestedVerifier = "";
        this.currentVerifier = "";
        // this.nodeDetailManager = new NodeDetailManager();
        // this.torusJs = new TorusJs({
        //   metadataHost: "https://metadata.tor.us",
        //   allowHost: "https://signer.tor.us/api/allow",
        //   network: "mainnet",
        // });
        this.apiKey = apiKey;
        (0, _httpHelpers.setAPIKey)(apiKey);
        this.modalZIndex = modalZIndex;
        this.alertZIndex = modalZIndex + 1000;
        this.isIframeFullScreen = false;
    }
    async init() {
        let { buildEnv =TORUS_BUILD_ENV.PRODUCTION , enableLogging =false , // deprecated: use loginConfig instead
        enabledVerifiers =defaultVerifiers , network ={
            host: "mainnet",
            chainId: null,
            networkName: "",
            blockExplorer: "",
            ticker: "",
            tickerName: ""
        } , loginConfig ={} , showTorusButton =true , integrity ={
            check: false,
            hash: iframeIntegrity,
            version: ""
        } , whiteLabel , skipTKey =false , useWalletConnect =false , mfaLevel ="default"  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (this.isInitialized) throw new Error("Already initialized");
        const { torusUrl , logLevel  } = await getTorusUrl(buildEnv, integrity);
        log.info(torusUrl, "url loaded");
        this.torusUrl = torusUrl;
        this.whiteLabel = whiteLabel;
        this.useWalletConnect = useWalletConnect;
        this.isCustomLogin = !!(loginConfig && Object.keys(loginConfig).length > 0) || !!(whiteLabel && Object.keys(whiteLabel).length > 0);
        log.setDefaultLevel(logLevel);
        if (enableLogging) log.enableAll();
        else log.disableAll();
        this.torusWidgetVisibility = showTorusButton;
        const torusIframeUrl = new URL(torusUrl);
        if (torusIframeUrl.pathname.endsWith("/")) torusIframeUrl.pathname += "popup";
        else torusIframeUrl.pathname += "/popup";
        torusIframeUrl.hash = `#isCustomLogin=${this.isCustomLogin}`;
        // Iframe code
        this.torusIframe = htmlToElement(`<iframe
        id="torusIframe"
        allow=${useWalletConnect ? "camera" : ""}
        class="torusIframe"
        src="${torusIframeUrl.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%; color-scheme: none;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex}"
      ></iframe>`);
        this.torusAlertContainer = htmlToElement('<div id="torusAlertContainer"></div>');
        this.torusAlertContainer.style.display = "none";
        this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
        const link = window.document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", `${torusUrl}/css/widget.css`);
        this.styleLink = link;
        const { defaultLanguage =getUserLanguage() , customTranslations ={}  } = this.whiteLabel || {};
        const mergedTranslations = (0, _lodashMergeDefault.default)(configuration.translations, customTranslations);
        const languageTranslations = mergedTranslations[defaultLanguage] || configuration.translations[getUserLanguage()];
        this.embedTranslations = languageTranslations.embed;
        const handleSetup = async ()=>{
            await documentReady();
            return new Promise((resolve, reject)=>{
                this.torusIframe.onload = async ()=>{
                    // only do this if iframe is not full screen
                    this._setupWeb3();
                    const initStream = this.communicationMux.getStream("init_stream");
                    initStream.on("data", (chunk)=>{
                        const { name , data , error  } = chunk;
                        if (name === "init_complete" && data.success) {
                            // resolve promise
                            this.isInitialized = true;
                            this._displayIframe(this.isIframeFullScreen);
                            resolve(undefined);
                        } else if (error) reject(new Error(error));
                    });
                    initStream.write({
                        name: "init_stream",
                        data: {
                            enabledVerifiers,
                            loginConfig,
                            whiteLabel: this.whiteLabel,
                            buttonPosition: this.buttonPosition,
                            buttonSize: this.buttonSize,
                            torusWidgetVisibility: this.torusWidgetVisibility,
                            apiKey: this.apiKey,
                            skipTKey,
                            network,
                            mfaLevel
                        }
                    });
                };
                window.document.head.appendChild(this.styleLink);
                window.document.body.appendChild(this.torusIframe);
                window.document.body.appendChild(this.torusAlertContainer);
            });
        };
        if (buildEnv === "production" && integrity.check) {
            // hacky solution to check for iframe integrity
            const fetchUrl = `${torusUrl}/popup`;
            const resp = await fetch(fetchUrl, {
                cache: "reload"
            });
            if (resp.headers.get("Cache-Control") !== expectedCacheControlHeader) throw new Error(`Unexpected Cache-Control headers, got ${resp.headers.get("Cache-Control")}`);
            const response = await resp.text();
            const calculatedIntegrity = main({
                algorithms: [
                    "sha384"
                ]
            }, response);
            log.info(calculatedIntegrity, "integrity");
            if (calculatedIntegrity === integrity.hash) await handleSetup();
            else {
                this.clearInit();
                throw new Error("Integrity check failed");
            }
        } else await handleSetup();
        return undefined;
    }
    login() {
        let { verifier ="" , login_hint: loginHint = ""  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!this.isInitialized) throw new Error("Call init() first");
        this.requestedVerifier = verifier;
        this.loginHint = loginHint;
        return this.ethereum.enable();
    }
    logout() {
        return new Promise((resolve, reject)=>{
            if (!this.isLoggedIn) {
                reject(new Error("User has not logged in yet"));
                return;
            }
            const logOutStream = this.communicationMux.getStream("logout");
            logOutStream.write({
                name: "logOut"
            });
            const statusStream = this.communicationMux.getStream("status");
            const statusStreamHandler = (status)=>{
                if (!status.loggedIn) {
                    this.isLoggedIn = false;
                    this.currentVerifier = "";
                    this.requestedVerifier = "";
                    resolve();
                } else reject(new Error("Some Error Occured"));
            };
            handleStream(statusStream, "data", statusStreamHandler);
        });
    }
    async cleanUp() {
        if (this.isLoggedIn) await this.logout();
        this.clearInit();
    }
    clearInit() {
        function isElement(element) {
            return element instanceof Element || element instanceof HTMLDocument;
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
        this.torusWidgetVisibility = false;
        this._sendWidgetVisibilityStatus(false);
        this._displayIframe();
    }
    showTorusButton() {
        this.torusWidgetVisibility = true;
        this._sendWidgetVisibilityStatus(true);
        this._displayIframe();
    }
    setProvider(_ref) {
        let { host ="mainnet" , chainId =null , networkName =""  } = _ref, rest = (0, _objectWithoutPropertiesDefault.default)(_ref, _excluded);
        return new Promise((resolve, reject)=>{
            const providerChangeStream = this.communicationMux.getStream("provider_change");
            const handler = (chunk)=>{
                const { err , success  } = chunk.data;
                log.info(chunk);
                if (err) reject(err);
                else if (success) resolve();
                else reject(new Error("some error occured"));
            };
            handleStream(providerChangeStream, "data", handler);
            const preopenInstanceId = getPreopenInstanceId();
            this._handleWindow(preopenInstanceId, {
                target: "_blank",
                features: FEATURES_PROVIDER_CHANGE_WINDOW
            });
            providerChangeStream.write({
                name: "show_provider_change",
                data: {
                    network: _objectSpread({
                        host,
                        chainId,
                        networkName
                    }, rest),
                    preopenInstanceId,
                    override: false
                }
            });
        });
    }
    showWallet(path) {
        let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        const showWalletStream = this.communicationMux.getStream("show_wallet");
        const finalPath = path ? `/${path}` : "";
        showWalletStream.write({
            name: "show_wallet",
            data: {
                path: finalPath
            }
        });
        const showWalletHandler = (chunk)=>{
            if (chunk.name === "show_wallet_instance") {
                // Let the error propogate up (hence, no try catch)
                const { instanceId  } = chunk.data;
                const finalUrl = new URL(`${this.torusUrl}/wallet${finalPath}`);
                // Using URL constructor to prevent js injection and allow parameter validation.!
                finalUrl.searchParams.append("integrity", "true");
                finalUrl.searchParams.append("instanceId", instanceId);
                Object.keys(params).forEach((x)=>{
                    finalUrl.searchParams.append(x, params[x]);
                });
                finalUrl.hash = `#isCustomLogin=${this.isCustomLogin}`;
                const walletWindow = new PopupHandler({
                    url: finalUrl,
                    features: FEATURES_DEFAULT_WALLET_WINDOW
                });
                walletWindow.open();
            }
        };
        handleStream(showWalletStream, "data", showWalletHandler);
    }
    async getPublicAddress(_ref2) {
        let { verifier , verifierId , isExtended =false  } = _ref2;
        if (!configuration.supportedVerifierList.includes(verifier) || !WALLET_OPENLOGIN_VERIFIER_MAP[verifier]) throw new Error("Unsupported verifier");
        const walletVerifier = verifier;
        const openloginVerifier = WALLET_OPENLOGIN_VERIFIER_MAP[verifier];
        const url = new URL(`https://api.tor.us/lookup/torus`);
        url.searchParams.append("verifier", openloginVerifier);
        url.searchParams.append("verifierId", verifierId);
        url.searchParams.append("walletVerifier", walletVerifier);
        url.searchParams.append("network", "mainnet");
        url.searchParams.append("isExtended", isExtended.toString());
        return (0, _httpHelpers.get)(url.href, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }, {
            useAPIKey: true
        });
    }
    getUserInfo(message) {
        return new Promise((resolve, reject)=>{
            if (this.isLoggedIn) {
                const userInfoAccessStream = this.communicationMux.getStream("user_info_access");
                userInfoAccessStream.write({
                    name: "user_info_access_request"
                });
                const userInfoAccessHandler = (chunk)=>{
                    const { name , data: { approved , payload , rejected , newRequest  }  } = chunk;
                    if (name === "user_info_access_response") {
                        if (approved) resolve(payload);
                        else if (rejected) reject(new Error("User rejected the request"));
                        else if (newRequest) {
                            const userInfoStream = this.communicationMux.getStream("user_info");
                            const userInfoHandler = (handlerChunk)=>{
                                if (handlerChunk.name === "user_info_response") {
                                    if (handlerChunk.data.approved) resolve(handlerChunk.data.payload);
                                    else reject(new Error("User rejected the request"));
                                }
                            };
                            handleStream(userInfoStream, "data", userInfoHandler);
                            const preopenInstanceId = getPreopenInstanceId();
                            this._handleWindow(preopenInstanceId, {
                                target: "_blank",
                                features: FEATURES_PROVIDER_CHANGE_WINDOW
                            });
                            userInfoStream.write({
                                name: "user_info_request",
                                data: {
                                    message,
                                    preopenInstanceId
                                }
                            });
                        }
                    }
                };
                handleStream(userInfoAccessStream, "data", userInfoAccessHandler);
            } else reject(new Error("User has not logged in yet"));
        });
    }
    initiateTopup(provider, params) {
        return new Promise((resolve, reject)=>{
            if (this.isInitialized) {
                const { errors , isValid  } = validatePaymentProvider(provider, params);
                if (!isValid) {
                    reject(new Error(JSON.stringify(errors)));
                    return;
                }
                const topupStream = this.communicationMux.getStream("topup");
                const topupHandler = (chunk)=>{
                    if (chunk.name === "topup_response") {
                        if (chunk.data.success) resolve(chunk.data.success);
                        else reject(new Error(chunk.data.error));
                    }
                };
                handleStream(topupStream, "data", topupHandler);
                const preopenInstanceId = getPreopenInstanceId();
                this._handleWindow(preopenInstanceId);
                topupStream.write({
                    name: "topup_request",
                    data: {
                        provider,
                        params,
                        preopenInstanceId
                    }
                });
            } else reject(new Error("Torus is not initialized yet"));
        });
    }
    async loginWithPrivateKey(loginParams) {
        const { privateKey , userInfo  } = loginParams;
        return new Promise((resolve, reject)=>{
            if (this.isInitialized) {
                if (Buffer.from(privateKey, "hex").length !== 32) {
                    reject(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
                    return;
                }
                const loginPrivKeyStream = this.communicationMux.getStream("login_with_private_key");
                const loginHandler = (chunk)=>{
                    if (chunk.name === "login_with_private_key_response") {
                        if (chunk.data.success) resolve(chunk.data.success);
                        else reject(new Error(chunk.data.error));
                    }
                };
                handleStream(loginPrivKeyStream, "data", loginHandler);
                loginPrivKeyStream.write({
                    name: "login_with_private_key_request",
                    data: {
                        privateKey,
                        userInfo
                    }
                });
            } else reject(new Error("Torus is not initialized yet"));
        });
    }
    async showWalletConnectScanner() {
        if (!this.useWalletConnect) throw new Error("Set `useWalletConnect` as true in init function options to use wallet connect scanner");
        return new Promise((resolve, reject)=>{
            if (this.isLoggedIn) {
                const walletConnectStream = this.communicationMux.getStream("wallet_connect_stream");
                const walletConnectHandler = (chunk)=>{
                    if (chunk.name === "wallet_connect_stream_res") {
                        if (chunk.data.success) resolve(chunk.data.success);
                        else reject(new Error(chunk.data.error));
                        this._displayIframe();
                    }
                };
                handleStream(walletConnectStream, "data", walletConnectHandler);
                walletConnectStream.write({
                    name: "wallet_connect_stream_req"
                });
                this._displayIframe(true);
            } else reject(new Error("User has not logged in yet"));
        });
    }
    _handleWindow(preopenInstanceId) {
        let { url , target , features  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (preopenInstanceId) {
            const windowStream = this.communicationMux.getStream("window");
            const finalUrl = new URL(url || `${this.torusUrl}/redirect?preopenInstanceId=${preopenInstanceId}`);
            if (finalUrl.hash) finalUrl.hash += `&isCustomLogin=${this.isCustomLogin}`;
            else finalUrl.hash = `#isCustomLogin=${this.isCustomLogin}`;
            const handledWindow = new PopupHandler({
                url: finalUrl,
                target,
                features
            });
            handledWindow.open();
            if (!handledWindow.window) {
                this._createPopupBlockAlert(preopenInstanceId, finalUrl.href);
                return;
            }
            windowStream.write({
                name: "opened_window",
                data: {
                    preopenInstanceId
                }
            });
            const closeHandler = (_ref3)=>{
                let { preopenInstanceId: receivedId , close  } = _ref3;
                if (receivedId === preopenInstanceId && close) {
                    handledWindow.close();
                    windowStream.removeListener("data", closeHandler);
                }
            };
            windowStream.on("data", closeHandler);
            handledWindow.once("close", ()=>{
                windowStream.write({
                    data: {
                        preopenInstanceId,
                        closed: true
                    }
                });
                windowStream.removeListener("data", closeHandler);
            });
        }
    }
    _setEmbedWhiteLabel(element) {
        // Set whitelabel
        const { theme  } = this.whiteLabel || {};
        if (theme) {
            const { isDark =false , colors ={}  } = theme;
            if (isDark) element.classList.add("torus-dark");
            if (colors.torusBrand1) element.style.setProperty("--torus-brand-1", colors.torusBrand1);
            if (colors.torusGray2) element.style.setProperty("--torus-gray-2", colors.torusGray2);
        }
    }
    _getLogoUrl() {
        let logoUrl = `${this.torusUrl}/images/torus_icon-blue.svg`;
        if (this.whiteLabel?.theme?.isDark) logoUrl = this.whiteLabel?.logoLight || logoUrl;
        else logoUrl = this.whiteLabel?.logoDark || logoUrl;
        return logoUrl;
    }
    _sendWidgetVisibilityStatus(status) {
        const torusWidgetVisibilityStream = this.communicationMux.getStream("torus-widget-visibility");
        torusWidgetVisibilityStream.write({
            data: status
        });
    }
    _displayIframe() {
        let isFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        const style = {};
        const size = this.buttonSize + 14; // 15px padding
        // set phase
        if (!isFull) {
            style.display = this.torusWidgetVisibility ? "block" : "none";
            style.height = `${size}px`;
            style.width = `${size}px`;
            switch(this.buttonPosition){
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
        this.isIframeFullScreen = isFull;
    }
    _setupWeb3() {
        log.info("setupWeb3 running");
        // setup background connection
        const metamaskStream = new (0, _openloginJrpc.BasePostMessageStream)({
            name: "embed_metamask",
            target: "iframe_metamask",
            targetWindow: this.torusIframe.contentWindow,
            targetOrigin: new URL(this.torusUrl).origin
        });
        // Due to compatibility reasons, we should not set up multiplexing on window.metamaskstream
        // because the MetamaskInpageProvider also attempts to do so.
        // We create another LocalMessageDuplexStream for communication between dapp <> iframe
        const communicationStream = new (0, _openloginJrpc.BasePostMessageStream)({
            name: "embed_comm",
            target: "iframe_comm",
            targetWindow: this.torusIframe.contentWindow,
            targetOrigin: new URL(this.torusUrl).origin
        });
        // Backward compatibility with Gotchi :)
        // window.metamaskStream = this.communicationStream
        // compose the inpage provider
        const inpageProvider = new TorusInpageProvider(metamaskStream);
        // detect eth_requestAccounts and pipe to enable for now
        const detectAccountRequestPrototypeModifier = (m)=>{
            const originalMethod = inpageProvider[m];
            inpageProvider[m] = function providerFunc(method) {
                if (method && method === "eth_requestAccounts") return inpageProvider.enable();
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                return originalMethod.apply(this, [
                    method,
                    ...args
                ]);
            };
        };
        detectAccountRequestPrototypeModifier("send");
        detectAccountRequestPrototypeModifier("sendAsync");
        inpageProvider.enable = ()=>{
            return new Promise((resolve, reject)=>{
                // If user is already logged in, we assume they have given access to the website
                inpageProvider.sendAsync({
                    jsonrpc: "2.0",
                    id: getPreopenInstanceId(),
                    method: "eth_requestAccounts",
                    params: []
                }, (err, response)=>{
                    const { result: res  } = response || {};
                    if (err) setTimeout(()=>{
                        reject(err);
                    }, 50);
                    else if (Array.isArray(res) && res.length > 0) {
                        // If user is already rehydrated, resolve this
                        // else wait for something to be written to status stream
                        const handleLoginCb = ()=>{
                            if (this.requestedVerifier !== "" && this.currentVerifier !== this.requestedVerifier) {
                                const { requestedVerifier  } = this;
                                // eslint-disable-next-line promise/no-promise-in-callback
                                this.logout()// eslint-disable-next-line promise/always-return
                                .then((_)=>{
                                    this.requestedVerifier = requestedVerifier;
                                    this._showLoginPopup(true, resolve, reject);
                                }).catch((error)=>reject(error));
                            } else resolve(res);
                        };
                        if (this.isLoggedIn) handleLoginCb();
                        else this.isLoginCallback = handleLoginCb;
                    } else // set up listener for login
                    this._showLoginPopup(true, resolve, reject);
                });
            });
        };
        inpageProvider.tryPreopenHandle = (payload, cb)=>{
            const _payload = payload;
            if (!Array.isArray(_payload) && UNSAFE_METHODS.includes(_payload.method)) {
                const preopenInstanceId = getPreopenInstanceId();
                this._handleWindow(preopenInstanceId, {
                    target: "_blank",
                    features: FEATURES_CONFIRM_WINDOW
                });
                _payload.preopenInstanceId = preopenInstanceId;
            }
            inpageProvider._rpcEngine.handle(_payload, cb);
        };
        // Work around for web3@1.0 deleting the bound `sendAsync` but not the unbound
        // `sendAsync` method on the prototype, causing `this` reference issues with drizzle
        const proxiedInpageProvider = new Proxy(inpageProvider, {
            // straight up lie that we deleted the property so that it doesnt
            // throw an error in strict mode
            deleteProperty: ()=>true
        });
        this.ethereum = proxiedInpageProvider;
        const communicationMux = (0, _openloginJrpc.setupMultiplex)(communicationStream);
        this.communicationMux = communicationMux;
        const windowStream = communicationMux.getStream("window");
        windowStream.on("data", (chunk)=>{
            if (chunk.name === "create_window") // url is the url we need to open
            // we can pass the final url upfront so that it removes the step of redirecting to /redirect and waiting for finalUrl
            this._createPopupBlockAlert(chunk.data.preopenInstanceId, chunk.data.url);
        });
        // show torus widget if button clicked
        const widgetStream = communicationMux.getStream("widget");
        widgetStream.on("data", (chunk)=>{
            const { data  } = chunk;
            this._displayIframe(data);
        });
        // Show torus button if wallet has been hydrated/detected
        const statusStream = communicationMux.getStream("status");
        statusStream.on("data", (status)=>{
            // login
            if (status.loggedIn) {
                this.isLoggedIn = status.loggedIn;
                this.currentVerifier = status.verifier;
            } else this._displayIframe();
            if (this.isLoginCallback) {
                this.isLoginCallback();
                delete this.isLoginCallback;
            }
        });
        this.provider = proxiedInpageProvider;
        if (this.provider.shouldSendMetadata) sendSiteMetadata(this.provider._rpcEngine);
        inpageProvider._initializeState();
        log.debug("Torus - injected provider");
    }
    _showLoginPopup(calledFromEmbed, resolve, reject) {
        const loginHandler = (data)=>{
            const { err , selectedAddress  } = data;
            if (err) {
                log.error(err);
                if (reject) reject(err);
            } else if (resolve) resolve([
                selectedAddress
            ]);
            if (this.isIframeFullScreen) this._displayIframe();
        };
        const oauthStream = this.communicationMux.getStream("oauth");
        if (!this.requestedVerifier) {
            this._displayIframe(true);
            handleStream(oauthStream, "data", loginHandler);
            oauthStream.write({
                name: "oauth_modal",
                data: {
                    calledFromEmbed
                }
            });
        } else {
            handleStream(oauthStream, "data", loginHandler);
            const preopenInstanceId = getPreopenInstanceId();
            this._handleWindow(preopenInstanceId);
            oauthStream.write({
                name: "oauth",
                data: {
                    calledFromEmbed,
                    verifier: this.requestedVerifier,
                    preopenInstanceId,
                    login_hint: this.loginHint
                }
            });
        }
    }
    _createPopupBlockAlert(preopenInstanceId, url) {
        const logoUrl = this._getLogoUrl();
        const torusAlert = htmlToElement('<div id="torusAlert" class="torus-alert--v2">' + `<div id="torusAlert__logo"><img src="${logoUrl}" /></div>` + "<div>" + `<h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1>` + `<p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p>` + "</div>" + "</div>");
        const successAlert = htmlToElement(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`);
        const btnContainer = htmlToElement('<div id="torusAlert__btn-container"></div>');
        btnContainer.appendChild(successAlert);
        torusAlert.appendChild(btnContainer);
        const bindOnLoad = ()=>{
            successAlert.addEventListener("click", ()=>{
                this._handleWindow(preopenInstanceId, {
                    url,
                    target: "_blank",
                    features: FEATURES_CONFIRM_WINDOW
                });
                torusAlert.remove();
                if (this.torusAlertContainer.children.length === 0) this.torusAlertContainer.style.display = "none";
            });
        };
        this._setEmbedWhiteLabel(torusAlert);
        const attachOnLoad = ()=>{
            this.torusAlertContainer.style.display = "block";
            this.torusAlertContainer.appendChild(torusAlert);
        };
        runOnLoad(attachOnLoad);
        runOnLoad(bindOnLoad);
    }
}

},{"1ab6b87f05575652":"fCgem","@babel/runtime/helpers/objectWithoutProperties":"lte4p","@babel/runtime/helpers/defineProperty":"4x6r7","@toruslabs/http-helpers":"71C66","@toruslabs/openlogin-jrpc":"hHcJo","lodash.merge":"kKE0V","@metamask/obs-store":"eM6Ix","eth-rpc-errors":"apfts","fast-deep-equal":"ixZYU","is-stream":"dpmgS","pump":"d2HVR","loglevel":"7kRFs","create-hash":"2WyL8","events":"1VQLm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eM6Ix":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("309ec807d29514c6"), exports);
__exportStar(require("9b79a635aea7ba8"), exports);
__exportStar(require("9ae78f565100c77d"), exports);
__exportStar(require("64432f9de60bbddf"), exports);
__exportStar(require("3eb635c742ac70dd"), exports);

},{"309ec807d29514c6":"ceT1n","9b79a635aea7ba8":"5eXap","9ae78f565100c77d":"1LGva","64432f9de60bbddf":"1cedb","3eb635c742ac70dd":"6eaqj"}],"ceT1n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storeAsStream = void 0;
const stream_1 = require("c3a0538c59710716");
class ObservableStoreStream extends stream_1.Duplex {
    constructor(obsStore){
        super({
            // pass values, not serializations
            objectMode: true
        });
        // dont buffer outgoing updates
        this.resume();
        // save handler so we can unsubscribe later
        this.handler = (state)=>this.push(state);
        // subscribe to obsStore changes
        this.obsStore = obsStore;
        this.obsStore.subscribe(this.handler);
    }
    // emit current state on new destination
    pipe(dest, options) {
        const result = super.pipe(dest, options);
        dest.write(this.obsStore.getState());
        return result;
    }
    // write from incoming stream to state
    _write(chunk, _encoding, callback) {
        this.obsStore.putState(chunk);
        callback();
    }
    // noop - outgoing stream is asking us if we have data we arent giving it
    _read(_size) {
        return undefined;
    }
    // unsubscribe from event emitter
    _destroy(err, callback) {
        this.obsStore.unsubscribe(this.handler);
        super._destroy(err, callback);
    }
}
function storeAsStream(obsStore) {
    return new ObservableStoreStream(obsStore);
}
exports.storeAsStream = storeAsStream;

},{"c3a0538c59710716":"j77ns"}],"5eXap":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComposedStore = void 0;
const ObservableStore_1 = require("9d49e783040f0bd3");
class ComposedStore extends ObservableStore_1.ObservableStore {
    constructor(children){
        // Typecast: Preserve existing behavior
        super({});
        // subscribe to children
        this._children = children || {};
        Object.keys(this._children).forEach((childKey)=>{
            const child = this._children[childKey];
            this._addChild(childKey, child);
        });
    }
    _addChild(childKey, child) {
        const updateFromChild = (childValue)=>{
            const state = this.getState();
            state[childKey] = childValue;
            this.putState(state);
        };
        child.subscribe(updateFromChild);
        updateFromChild(child.getState());
    }
}
exports.ComposedStore = ComposedStore;

},{"9d49e783040f0bd3":"1cedb"}],"1cedb":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObservableStore = void 0;
const safe_event_emitter_1 = __importDefault(require("f9243fd4605973c2"));
class ObservableStore extends safe_event_emitter_1.default {
    constructor(initState){
        super();
        if (initState) this._state = initState;
        else // Typecast/default state: Preserve existing behavior
        this._state = {};
    }
    // wrapper around internal getState
    getState() {
        return this._getState();
    }
    // wrapper around internal putState
    putState(newState) {
        this._putState(newState);
        this.emit("update", newState);
    }
    updateState(partialState) {
        // if non-null object, merge
        if (partialState && typeof partialState === "object") {
            const state = this.getState();
            this.putState(Object.assign(Object.assign({}, state), partialState));
        // if not object, use new value
        } else this.putState(partialState);
    }
    // subscribe to changes
    subscribe(handler) {
        this.on("update", handler);
    }
    // unsubscribe to changes
    unsubscribe(handler) {
        this.removeListener("update", handler);
    }
    //
    // private
    //
    // read from persistence
    _getState() {
        return this._state;
    }
    // write to persistence
    _putState(newState) {
        this._state = newState;
    }
}
exports.ObservableStore = ObservableStore;

},{"f9243fd4605973c2":"1duJT"}],"1duJT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const events_1 = require("9a37bb7fa71d1555");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    } catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(()=>{
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for(let i = 0; i < n; i += 1)copy[i] = arr[i];
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === "error";
        const events = this._events;
        if (events !== undefined) doError = doError && events.error === undefined;
        else if (!doError) return false;
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) [er] = args;
            if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ""}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) return false;
        if (typeof handler === "function") safeApply(handler, this, args);
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for(let i = 0; i < len; i += 1)safeApply(listeners[i], this, args);
        }
        return true;
    }
}
exports.default = SafeEventEmitter;

},{"9a37bb7fa71d1555":"1VQLm"}],"1LGva":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MergedStore = void 0;
const ObservableStore_1 = require("bd773c01249383d5");
class MergedStore extends ObservableStore_1.ObservableStore {
    constructor(children = []){
        // Typecast: Preserve existing behavior
        super({});
        this._children = children;
        // subscribe to children
        children.forEach((child)=>this._addChild(child));
        this._updateWholeState();
    }
    _addChild(child) {
        child.subscribe(()=>this._updateWholeState());
    }
    _updateWholeState() {
        const childStates = this._children.map((child)=>child.getState());
        // apply shallow merge over states
        const state = Object.assign({}, ...childStates);
        this.putState(state);
    }
}
exports.MergedStore = MergedStore;

},{"bd773c01249383d5":"1cedb"}],"6eaqj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storeTransformStream = void 0;
const through2_1 = require("1224faf286c4d66");
function storeTransformStream(syncTransformFn) {
    return through2_1.obj((state, _encoding, cb)=>{
        try {
            const newState = syncTransformFn(state);
            cb(null, newState);
            return undefined;
        } catch (err) {
            cb(err);
            return undefined;
        }
    });
}
exports.storeTransformStream = storeTransformStream;

},{"1224faf286c4d66":"koEKb"}],"koEKb":[function(require,module,exports) {
var process = require("7f1074b9aeed7c68");
var Transform = require("1e9f5deb5d744439").Transform, inherits = require("d52774b78467bcc0").inherits, xtend = require("c1a50e0368ca846e");
function DestroyableTransform(opts) {
    Transform.call(this, opts);
    this._destroyed = false;
}
inherits(DestroyableTransform, Transform);
DestroyableTransform.prototype.destroy = function(err) {
    if (this._destroyed) return;
    this._destroyed = true;
    var self = this;
    process.nextTick(function() {
        if (err) self.emit("error", err);
        self.emit("close");
    });
};
// a noop _transform function
function noop(chunk, enc, callback) {
    callback(null, chunk);
}
// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2(construct) {
    return function(options, transform, flush) {
        if (typeof options == "function") {
            flush = transform;
            transform = options;
            options = {};
        }
        if (typeof transform != "function") transform = noop;
        if (typeof flush != "function") flush = null;
        return construct(options, transform, flush);
    };
}
// main export, just make me a transform stream!
module.exports = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(options);
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});
// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor = through2(function(options, transform, flush) {
    function Through2(override) {
        if (!(this instanceof Through2)) return new Through2(override);
        this.options = xtend(options, override);
        DestroyableTransform.call(this, this.options);
    }
    inherits(Through2, DestroyableTransform);
    Through2.prototype._transform = transform;
    if (flush) Through2.prototype._flush = flush;
    return Through2;
});
module.exports.obj = through2(function(options, transform, flush) {
    var t2 = new DestroyableTransform(xtend({
        objectMode: true,
        highWaterMark: 16
    }, options));
    t2._transform = transform;
    if (flush) t2._flush = flush;
    return t2;
});

},{"7f1074b9aeed7c68":"d5jf4","1e9f5deb5d744439":"4QFs0","d52774b78467bcc0":"cxohQ","c1a50e0368ca846e":"93zjj"}],"4QFs0":[function(require,module,exports) {
exports = module.exports = require("614408873502bbbc");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require("988209b42c8e0fd8");
exports.Duplex = require("98b9d8d0cdeacfa5");
exports.Transform = require("e87f8931779e2edc");
exports.PassThrough = require("eb983c60326fbbed");

},{"614408873502bbbc":"gWOsJ","988209b42c8e0fd8":"9t0EE","98b9d8d0cdeacfa5":"3NGW0","e87f8931779e2edc":"amxHp","eb983c60326fbbed":"9GTaP"}],"gWOsJ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var global = arguments[3];
var process = require("7c5b6b4238b509c2");
"use strict";
/*<replacement>*/ var pna = require("5626d10fa95c371a");
/*</replacement>*/ module.exports = Readable;
/*<replacement>*/ var isArray = require("ec4efbf3003d196");
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require("b7edcb0d01bc658").EventEmitter;
var EElistenerCount = function(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("a22de85a0e49cd70");
/*</replacement>*/ /*<replacement>*/ var Buffer = require("83aeb7c05f73b29e").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ /*<replacement>*/ var util = Object.create(require("501f35ca52dc7c73"));
util.inherits = require("3996a1d83474d6d8");
/*</replacement>*/ /*<replacement>*/ var debugUtil = require("1bb97eac93ebab18");
var debug = void 0;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
else debug = function() {};
/*</replacement>*/ var BufferList = require("2ea6e07b2bf4da85");
var destroyImpl = require("b4613754feb02d92");
var StringDecoder;
util.inherits(Readable, Stream);
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream) {
    Duplex = Duplex || require("95be696f710e8090");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var readableHwm = options.readableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16384;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require("4df735d8dc3f13f").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require("95be696f710e8090");
    if (!(this instanceof Readable)) return new Readable(options);
    this._readableState = new ReadableState(options, this);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    this.push(null);
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) stream.emit("error", er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) stream.emit("error", new Error("stream.push() after EOF"));
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) state.reading = false;
    }
    return needMoreData(state);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new TypeError("Invalid non-string/buffer chunk");
    return er;
}
// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require("4df735d8dc3f13f").StringDecoder;
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
};
// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = true;
        n = 0;
    } else state.length -= n;
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
    }
}
function emitReadable_(stream) {
    debug("emit readable");
    stream.emit("readable");
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    var len = state.length;
    while(!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark){
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
        else len = state.length;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    this.emit("error", new Error("_read() is not implemented"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) pna.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
                increasedAwaitDrain = true;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    if (ev === "data") // Start flowing on next tick if stream isn't explicitly paused
    {
        if (this._readableState.flowing !== false) this.resume();
    } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.emittedReadable = false;
            if (!state.reading) pna.nextTick(nReadingNextTick, this);
            else if (state.length) emitReadable(this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
    }
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
    }
    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function(method) {
        return function() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._readableState.highWaterMark;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.head.data;
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
    return ret;
}
// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
        // slice is the same for buffers and strings
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) // first chunk is a perfect match
    ret = list.shift();
    else // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    return ret;
}
// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while(p = p.next){
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;
        else ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
            if (nb === str.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = str.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while(p = p.next){
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
            if (nb === buf.length) {
                ++c;
                if (p.next) list.head = p.next;
                else list.head = list.tail = null;
            } else {
                list.head = p;
                p.data = buf.slice(nb);
            }
            break;
        }
        ++c;
    }
    list.length -= c;
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
    }
}
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"7c5b6b4238b509c2":"d5jf4","5626d10fa95c371a":"1m3TC","ec4efbf3003d196":"hk7XJ","b7edcb0d01bc658":"1VQLm","a22de85a0e49cd70":"2KapH","83aeb7c05f73b29e":"gvxcm","501f35ca52dc7c73":"aUVk5","3996a1d83474d6d8":"bRL3M","1bb97eac93ebab18":"jhUEF","2ea6e07b2bf4da85":"abt0h","b4613754feb02d92":"ha0WT","95be696f710e8090":"3NGW0","4df735d8dc3f13f":"8t12z"}],"1m3TC":[function(require,module,exports) {
var process = require("9ec6ba5e2e234d21");
"use strict";
if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) module.exports = {
    nextTick: nextTick
};
else module.exports = process;
function nextTick(fn, arg1, arg2, arg3) {
    if (typeof fn !== "function") throw new TypeError('"callback" argument must be a function');
    var len = arguments.length;
    var args, i;
    switch(len){
        case 0:
        case 1:
            return process.nextTick(fn);
        case 2:
            return process.nextTick(function afterTickOne() {
                fn.call(null, arg1);
            });
        case 3:
            return process.nextTick(function afterTickTwo() {
                fn.call(null, arg1, arg2);
            });
        case 4:
            return process.nextTick(function afterTickThree() {
                fn.call(null, arg1, arg2, arg3);
            });
        default:
            args = new Array(len - 1);
            i = 0;
            while(i < args.length)args[i++] = arguments[i];
            return process.nextTick(function afterTick() {
                fn.apply(null, args);
            });
    }
}

},{"9ec6ba5e2e234d21":"d5jf4"}],"hk7XJ":[function(require,module,exports) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};

},{}],"2KapH":[function(require,module,exports) {
module.exports = require("2a571503973f81f5").EventEmitter;

},{"2a571503973f81f5":"1VQLm"}],"gvxcm":[function(require,module,exports) {
/* eslint-disable node/no-deprecated-api */ var buffer = require("5e6a2d01efe8b345");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return buffer.SlowBuffer(size);
};

},{"5e6a2d01efe8b345":"fCgem"}],"aUVk5":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg) {
    if (Array.isArray) return Array.isArray(arg);
    return objectToString(arg) === "[object Array]";
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return objectToString(re) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return objectToString(d) === "[object Date]";
}
exports.isDate = isDate;
function isError(e) {
    return objectToString(e) === "[object Error]" || e instanceof Error;
}
exports.isError = isError;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require("ad3d8c23dde71055").Buffer.isBuffer;
function objectToString(o) {
    return Object.prototype.toString.call(o);
}

},{"ad3d8c23dde71055":"fCgem"}],"abt0h":[function(require,module,exports) {
"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Buffer = require("bf980622345d6fa6").Buffer;
var util = require("dbc14d10d2a143ac");
function copyBuffer(src, target, offset) {
    src.copy(target, offset);
}
module.exports = function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    BufferList.prototype.push = function push(v) {
        var entry = {
            data: v,
            next: null
        };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
    };
    BufferList.prototype.unshift = function unshift(v) {
        var entry = {
            data: v,
            next: this.head
        };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
    };
    BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
    };
    BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
    };
    BufferList.prototype.join = function join(s) {
        if (this.length === 0) return "";
        var p = this.head;
        var ret = "" + p.data;
        while(p = p.next)ret += s + p.data;
        return ret;
    };
    BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer.alloc(0);
        var ret = Buffer.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while(p){
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
        }
        return ret;
    };
    return BufferList;
}();
if (util && util.inspect && util.inspect.custom) module.exports.prototype[util.inspect.custom] = function() {
    var obj = util.inspect({
        length: this.length
    });
    return this.constructor.name + " " + obj;
};

},{"bf980622345d6fa6":"gvxcm","dbc14d10d2a143ac":"jhUEF"}],"ha0WT":[function(require,module,exports) {
"use strict";
/*<replacement>*/ var pna = require("88fc64274cb83b7c");
/*</replacement>*/ // undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) pna.nextTick(emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) pna.nextTick(emitErrorNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                pna.nextTick(emitErrorNT, _this, err);
            }
        } else if (cb) cb(err);
    });
    return this;
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy
};

},{"88fc64274cb83b7c":"1m3TC"}],"3NGW0":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
"use strict";
/*<replacement>*/ var pna = require("c3312f426959d48b");
/*</replacement>*/ /*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
/*<replacement>*/ var util = Object.create(require("141f2be10e5d980b"));
util.inherits = require("51c355a5715c90b7");
/*</replacement>*/ var Readable = require("19f8a85d8d9abdb8");
var Writable = require("1bd2a8f5b8a69b");
util.inherits(Duplex, Readable);
// avoid scope creep, the keys array can then be collected
var keys = objectKeys(Writable.prototype);
for(var v = 0; v < keys.length; v++){
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false) this.readable = false;
    if (options && options.writable === false) this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
    this.once("end", onend);
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// the no-half-open enforcer
function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    pna.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    get: function() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});
Duplex.prototype._destroy = function(err, cb) {
    this.push(null);
    this.end();
    pna.nextTick(cb, err);
};

},{"c3312f426959d48b":"1m3TC","141f2be10e5d980b":"aUVk5","51c355a5715c90b7":"bRL3M","19f8a85d8d9abdb8":"gWOsJ","1bd2a8f5b8a69b":"9t0EE"}],"9t0EE":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var global = arguments[3];
"use strict";
/*<replacement>*/ var pna = require("2cd011cee0d4cbe6");
/*</replacement>*/ module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var asyncWrite = (0, pna.nextTick);
/*</replacement>*/ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var util = Object.create(require("8a467e73f5306eef"));
util.inherits = require("d13a4bf9e124724e");
/*</replacement>*/ /*<replacement>*/ var internalUtil = {
    deprecate: require("e25e8bf61e7e25f8")
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("28517f2c06db9397");
/*</replacement>*/ /*<replacement>*/ var Buffer = require("2fb3ecad9aee1baa").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/ var destroyImpl = require("21b8968278ae605b");
util.inherits(Writable, Stream);
function nop() {}
function WritableState(options, stream) {
    Duplex = Duplex || require("6f8a31f4a3c74495");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    var isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var writableHwm = options.writableHighWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16384;
    if (hwm || hwm === 0) this.highWaterMark = hwm;
    else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
    else this.highWaterMark = defaultHwm;
    // cast to ints.
    this.highWaterMark = Math.floor(this.highWaterMark);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require("6f8a31f4a3c74495");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) return new Writable(options);
    this._writableState = new WritableState(options, this);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
};
function writeAfterEnd(stream, cb) {
    var er = new Error("write after end");
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit("error", er);
    pna.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) er = new TypeError("May not write null values to stream");
    else if (typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new TypeError("Invalid non-string/buffer chunk");
    if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
    }
    return valid;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ended) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    var state = this._writableState;
    state.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        pna.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) /*<replacement>*/ asyncWrite(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error("_write() is not implemented"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
};
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) stream.emit("error", err);
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
            state.pendingcb++;
            state.finalCalled = true;
            pna.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) pna.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    get: function() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    this.end();
    cb(err);
};

},{"2cd011cee0d4cbe6":"1m3TC","8a467e73f5306eef":"aUVk5","d13a4bf9e124724e":"bRL3M","e25e8bf61e7e25f8":"j92NQ","28517f2c06db9397":"2KapH","2fb3ecad9aee1baa":"gvxcm","21b8968278ae605b":"ha0WT","6f8a31f4a3c74495":"3NGW0"}],"8t12z":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
/*<replacement>*/ var Buffer = require("79d24f04d6c0f7bc").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

},{"79d24f04d6c0f7bc":"gvxcm"}],"amxHp":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
"use strict";
module.exports = Transform;
var Duplex = require("c8a11dad6e4ad0d0");
/*<replacement>*/ var util = Object.create(require("29c448d7f17a7aef"));
util.inherits = require("57b135f34451ac1b");
/*</replacement>*/ util.inherits(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb) return this.emit("error", new Error("write callback called multiple times"));
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function") this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    throw new Error("_transform() is not implemented");
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    var _this2 = this;
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) stream.push(data);
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return stream.push(null);
}

},{"c8a11dad6e4ad0d0":"3NGW0","29c448d7f17a7aef":"aUVk5","57b135f34451ac1b":"bRL3M"}],"9GTaP":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
"use strict";
module.exports = PassThrough;
var Transform = require("9f2984e4dbb9a06c");
/*<replacement>*/ var util = Object.create(require("c01d104c545c79bd"));
util.inherits = require("a127729c16545fac");
/*</replacement>*/ util.inherits(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"9f2984e4dbb9a06c":"amxHp","c01d104c545c79bd":"aUVk5","a127729c16545fac":"bRL3M"}],"93zjj":[function(require,module,exports) {
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend() {
    var target = {};
    for(var i = 0; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
}

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

},{}],"dpmgS":[function(require,module,exports) {
"use strict";
const isStream = (stream)=>stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
isStream.writable = (stream)=>isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
isStream.readable = (stream)=>isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
isStream.duplex = (stream)=>isStream.writable(stream) && isStream.readable(stream);
isStream.transform = (stream)=>isStream.duplex(stream) && typeof stream._transform === "function";
module.exports = isStream;

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

},{"@web3auth/base":"7HmU4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2w1Wq"], null, "parcelRequire8d7b")

//# sourceMappingURL=torusEvmAdapter.esm.24eb53e2.js.map
