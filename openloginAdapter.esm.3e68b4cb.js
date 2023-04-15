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
})({"fcVid":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "22a0d2093e68b4cb";
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

},{}],"jPN5A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OpenloginAdapter", ()=>OpenloginAdapter);
parcelHelpers.export(exports, "getOpenloginDefaultOptions", ()=>getOpenloginDefaultOptions);
var _openlogin = require("@toruslabs/openlogin");
var _openloginDefault = parcelHelpers.interopDefault(_openlogin);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _base = require("@web3auth/base");
var _baseProvider = require("@web3auth/base-provider");
var _lodashMerge = require("lodash.merge");
var _lodashMergeDefault = parcelHelpers.interopDefault(_lodashMerge);
const getOpenloginDefaultOptions = ()=>{
    return {
        adapterSettings: {
            network: (0, _openlogin.OPENLOGIN_NETWORK).MAINNET,
            clientId: "",
            uxMode: (0, _openlogin.UX_MODE).POPUP
        },
        loginSettings: {}
    };
};
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
class OpenloginAdapter extends (0, _base.BaseAdapter) {
    constructor(){
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        super(params);
        (0, _definePropertyDefault.default)(this, "name", (0, _base.WALLET_ADAPTERS).OPENLOGIN);
        (0, _definePropertyDefault.default)(this, "adapterNamespace", (0, _base.ADAPTER_NAMESPACES).MULTICHAIN);
        (0, _definePropertyDefault.default)(this, "type", (0, _base.ADAPTER_CATEGORY).IN_APP);
        (0, _definePropertyDefault.default)(this, "openloginInstance", null);
        (0, _definePropertyDefault.default)(this, "status", (0, _base.ADAPTER_STATUS).NOT_READY);
        (0, _definePropertyDefault.default)(this, "currentChainNamespace", (0, _base.CHAIN_NAMESPACES).EIP155);
        (0, _definePropertyDefault.default)(this, "openloginOptions", void 0);
        (0, _definePropertyDefault.default)(this, "loginSettings", {
            loginProvider: ""
        });
        (0, _definePropertyDefault.default)(this, "privKeyProvider", null);
        this.setAdapterSettings(_objectSpread(_objectSpread({}, params.adapterSettings), {}, {
            chainConfig: params.chainConfig,
            clientId: params.clientId || "",
            sessionTime: params.sessionTime,
            web3AuthNetwork: params.web3AuthNetwork,
            useCoreKitKey: params.useCoreKitKey
        }));
        this.loginSettings = params.loginSettings || {
            loginProvider: ""
        };
    }
    get chainConfigProxy() {
        return this.chainConfig ? _objectSpread({}, this.chainConfig) : null;
    }
    get provider() {
        var _this$privKeyProvider;
        return ((_this$privKeyProvider = this.privKeyProvider) === null || _this$privKeyProvider === void 0 ? void 0 : _this$privKeyProvider.provider) || null;
    }
    set provider(_) {
        throw new Error("Not implemented");
    }
    async init(options) {
        super.checkInitializationRequirements();
        if (!this.clientId) throw (0, _base.WalletInitializationError).invalidParams("clientId is required before openlogin's initialization");
        if (!this.openloginOptions) throw (0, _base.WalletInitializationError).invalidParams("openloginOptions is required before openlogin's initialization");
        let isRedirectResult = false;
        if (this.openloginOptions.uxMode === (0, _openlogin.UX_MODE).REDIRECT || this.openloginOptions.uxMode === (0, _openlogin.UX_MODE).SESSIONLESS_REDIRECT) {
            const redirectResult = (0, _openlogin.getHashQueryParams)();
            if (Object.keys(redirectResult).length > 0 && redirectResult._pid) isRedirectResult = true;
        }
        this.openloginOptions = _objectSpread(_objectSpread({}, this.openloginOptions), {}, {
            replaceUrlOnRedirect: isRedirectResult
        });
        this.openloginInstance = new (0, _openloginDefault.default)(_objectSpread(_objectSpread({}, this.openloginOptions), {}, {
            clientId: this.clientId,
            network: this.openloginOptions.network || this.web3AuthNetwork || (0, _openlogin.OPENLOGIN_NETWORK).MAINNET
        }));
        (0, _base.log).debug("initializing openlogin adapter init");
        await this.openloginInstance.init();
        this.status = (0, _base.ADAPTER_STATUS).READY;
        this.emit((0, _base.ADAPTER_EVENTS).READY, (0, _base.WALLET_ADAPTERS).OPENLOGIN);
        try {
            (0, _base.log).debug("initializing openlogin adapter");
            const finalPrivKey = this._getFinalPrivKey();
            // connect only if it is redirect result or if connect (adapter is cached/already connected in same session) is true
            if (finalPrivKey && (options.autoConnect || isRedirectResult)) {
                this.rehydrated = true;
                await this.connect();
            }
        } catch (error) {
            (0, _base.log).error("Failed to connect with cached openlogin provider", error);
            this.emit("ERRORED", error);
        }
    }
    async connect() {
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            loginProvider: ""
        };
        super.checkConnectionRequirements();
        this.status = (0, _base.ADAPTER_STATUS).CONNECTING;
        this.emit((0, _base.ADAPTER_EVENTS).CONNECTING, _objectSpread(_objectSpread({}, params), {}, {
            adapter: (0, _base.WALLET_ADAPTERS).OPENLOGIN
        }));
        try {
            await this.connectWithProvider(params);
            return this.provider;
        } catch (error) {
            (0, _base.log).error("Failed to connect with openlogin provider", error);
            // ready again to be connected
            this.status = (0, _base.ADAPTER_STATUS).READY;
            this.emit((0, _base.ADAPTER_EVENTS).ERRORED, error);
            if (error !== null && error !== void 0 && error.message.includes("user closed popup")) throw (0, _base.WalletLoginError).popupClosed();
            else if (error instanceof (0, _base.Web3AuthError)) throw error;
            throw (0, _base.WalletLoginError).connectionError("Failed to login with openlogin");
        }
    }
    async disconnect() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            cleanup: false
        };
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet");
        if (!this.openloginInstance) throw (0, _base.WalletInitializationError).notReady("openloginInstance is not ready");
        await this.openloginInstance.logout();
        if (options.cleanup) {
            this.status = (0, _base.ADAPTER_STATUS).NOT_READY;
            this.openloginInstance = null;
            this.privKeyProvider = null;
        } else // ready to be connected again
        this.status = (0, _base.ADAPTER_STATUS).READY;
        this.rehydrated = false;
        this.emit((0, _base.ADAPTER_EVENTS).DISCONNECTED);
    }
    async authenticateUser() {
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet, Please login/connect first");
        const userInfo = await this.getUserInfo();
        return {
            idToken: userInfo.idToken
        };
    }
    async getUserInfo() {
        if (this.status !== (0, _base.ADAPTER_STATUS).CONNECTED) throw (0, _base.WalletLoginError).notConnectedError("Not connected with wallet");
        if (!this.openloginInstance) throw (0, _base.WalletInitializationError).notReady("openloginInstance is not ready");
        const userInfo = await this.openloginInstance.getUserInfo();
        return userInfo;
    }
    // should be called only before initialization.
    setAdapterSettings(adapterSettings) {
        super.setAdapterSettings(adapterSettings);
        const defaultOptions = getOpenloginDefaultOptions();
        (0, _base.log).info("setting adapter settings", adapterSettings);
        this.openloginOptions = _objectSpread(_objectSpread(_objectSpread({}, defaultOptions.adapterSettings), this.openloginOptions), adapterSettings);
        if (adapterSettings.web3AuthNetwork) this.openloginOptions.network = adapterSettings.web3AuthNetwork;
        if (adapterSettings.useCoreKitKey !== undefined) this.openloginOptions.useCoreKitKey = adapterSettings.useCoreKitKey;
    }
    async addChain(chainConfig) {
        var _this$privKeyProvider2;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkAddChainRequirements(init);
        (_this$privKeyProvider2 = this.privKeyProvider) === null || _this$privKeyProvider2 === void 0 || _this$privKeyProvider2.addChain(chainConfig);
        this.addChainConfig(chainConfig);
    }
    async switchChain(params) {
        var _this$privKeyProvider3;
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        super.checkSwitchChainRequirements(params, init);
        await ((_this$privKeyProvider3 = this.privKeyProvider) === null || _this$privKeyProvider3 === void 0 ? void 0 : _this$privKeyProvider3.switchChain(params));
        this.setAdapterSettings({
            chainConfig: this.getChainConfig(params.chainId)
        });
    }
    _getFinalPrivKey() {
        var _this$openloginOption;
        if (!this.openloginInstance) return "";
        let finalPrivKey = this.openloginInstance.privKey;
        // coreKitKey is available only for custom verifiers by default
        if ((_this$openloginOption = this.openloginOptions) !== null && _this$openloginOption !== void 0 && _this$openloginOption.useCoreKitKey) {
            if (!this.openloginInstance.coreKitKey) throw (0, _base.WalletLoginError).coreKitKeyNotFound();
            finalPrivKey = this.openloginInstance.coreKitKey;
        }
        return finalPrivKey;
    }
    async connectWithProvider() {
        var _params$extraLoginOpt;
        let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            loginProvider: ""
        };
        if (!this.chainConfig) throw (0, _base.WalletInitializationError).invalidParams("chainConfig is required before initialization");
        if (!this.openloginInstance) throw (0, _base.WalletInitializationError).notReady("openloginInstance is not ready");
        if (this.currentChainNamespace === (0, _base.CHAIN_NAMESPACES).SOLANA) {
            const { SolanaPrivateKeyProvider  } = await require("c1e6f8a0009433e2");
            this.privKeyProvider = new SolanaPrivateKeyProvider({
                config: {
                    chainConfig: this.chainConfig
                }
            });
        } else if (this.currentChainNamespace === (0, _base.CHAIN_NAMESPACES).EIP155) {
            const { EthereumPrivateKeyProvider  } = await require("56d99335017c3674");
            this.privKeyProvider = new EthereumPrivateKeyProvider({
                config: {
                    chainConfig: this.chainConfig
                }
            });
        } else if (this.currentChainNamespace === (0, _base.CHAIN_NAMESPACES).OTHER) this.privKeyProvider = new (0, _baseProvider.CommonPrivateKeyProvider)();
        else throw new Error(`Invalid chainNamespace: ${this.currentChainNamespace} found while connecting to wallet`);
        const keyAvailable = this._getFinalPrivKey();
        // if not logged in then login
        if (!keyAvailable || (_params$extraLoginOpt = params.extraLoginOptions) !== null && _params$extraLoginOpt !== void 0 && _params$extraLoginOpt.id_token) {
            var _params$extraLoginOpt2;
            if (!this.loginSettings.curve) this.loginSettings.curve = this.currentChainNamespace === (0, _base.CHAIN_NAMESPACES).SOLANA ? (0, _openlogin.SUPPORTED_KEY_CURVES).ED25519 : (0, _openlogin.SUPPORTED_KEY_CURVES).SECP256K1;
            if (!params.loginProvider && !this.loginSettings.loginProvider) throw (0, _base.WalletInitializationError).invalidParams("loginProvider is required for login");
            await this.openloginInstance.login((0, _lodashMergeDefault.default)(this.loginSettings, params, {
                extraLoginOptions: _objectSpread(_objectSpread({}, params.extraLoginOptions || {}), {}, {
                    login_hint: params.login_hint || ((_params$extraLoginOpt2 = params.extraLoginOptions) === null || _params$extraLoginOpt2 === void 0 ? void 0 : _params$extraLoginOpt2.login_hint)
                })
            }));
        }
        let finalPrivKey = this._getFinalPrivKey();
        if (finalPrivKey) {
            if (this.currentChainNamespace === (0, _base.CHAIN_NAMESPACES).SOLANA) {
                const { getED25519Key  } = await require("1dea7ff80c5e456d");
                finalPrivKey = getED25519Key(finalPrivKey).sk.toString("hex");
            }
            await this.privKeyProvider.setupProvider(finalPrivKey);
            this.status = (0, _base.ADAPTER_STATUS).CONNECTED;
            this.emit((0, _base.ADAPTER_EVENTS).CONNECTED, {
                adapter: (0, _base.WALLET_ADAPTERS).OPENLOGIN,
                reconnected: this.rehydrated
            });
        }
    }
}

},{"@toruslabs/openlogin":"46z4q","@babel/runtime/helpers/defineProperty":"4x6r7","@web3auth/base":"7HmU4","@web3auth/base-provider":"h0enr","lodash.merge":"kKE0V","c1e6f8a0009433e2":"eL8RX","56d99335017c3674":"gXA9M","1dea7ff80c5e456d":"ctwL2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eL8RX":[function(require,module,exports) {
module.exports = Promise.all([
    require("182ce98144e40313")(require("a47b05391ad1ae7e").getBundleURL("2Yk9L") + "solanaProvider.esm.f062a23d.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("182ce98144e40313")(require("a47b05391ad1ae7e").getBundleURL("2Yk9L") + "solanaProvider.esm.6e5d9b8f.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("kX9zz"));

},{"182ce98144e40313":"61B45","a47b05391ad1ae7e":"lgJ39"}],"gXA9M":[function(require,module,exports) {
module.exports = require("1748774c43411584")(require("265a06d32fe1bf05").getBundleURL("2Yk9L") + "ethereumProvider.esm.5da502f8.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("a63bX"));

},{"1748774c43411584":"61B45","265a06d32fe1bf05":"lgJ39"}],"ctwL2":[function(require,module,exports) {
module.exports = Promise.all([
    require("94af3790d6364117")(require("9811faed90aba9a4").getBundleURL("2Yk9L") + "solanaProvider.esm.f062a23d.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("94af3790d6364117")(require("9811faed90aba9a4").getBundleURL("2Yk9L") + "openloginEd25519.esm.dfdcd8a2.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("kk15g"));

},{"94af3790d6364117":"61B45","9811faed90aba9a4":"lgJ39"}]},["fcVid"], null, "parcelRequire8d7b")

//# sourceMappingURL=openloginAdapter.esm.3e68b4cb.js.map
