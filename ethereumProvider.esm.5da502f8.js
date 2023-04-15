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
})({"ghVH1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2770ee005da502f8";
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

},{}],"a63bX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EthereumPrivateKeyProvider", ()=>EthereumPrivateKeyProvider);
parcelHelpers.export(exports, "TransactionFormatter", ()=>TransactionFormatter);
parcelHelpers.export(exports, "WalletConnectProvider", ()=>WalletConnectProvider);
parcelHelpers.export(exports, "WalletConnectV2Provider", ()=>WalletConnectV2Provider);
parcelHelpers.export(exports, "getProviderHandlers", ()=>getProviderHandlers);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _baseControllers = require("@toruslabs/base-controllers");
var _openloginJrpc = require("@toruslabs/openlogin-jrpc");
var _base = require("@web3auth/base");
var _baseProvider = require("@web3auth/base-provider");
var _ethRpcErrors = require("eth-rpc-errors");
var _utils = require("@walletconnect/utils");
var _tx = require("@ethereumjs/tx");
var _util = require("@ethereumjs/util");
var _ethSigUtil = require("@metamask/eth-sig-util");
var _httpHelpers = require("@toruslabs/http-helpers");
var _assert = require("assert");
var _assertDefault = parcelHelpers.interopDefault(_assert);
var _jsonschema = require("jsonschema");
var _jsonschemaDefault = parcelHelpers.interopDefault(_jsonschema);
var _bignumberJs = require("bignumber.js");
var _bignumberJsDefault = parcelHelpers.interopDefault(_bignumberJs);
var _common = require("@ethereumjs/common");
var _bnJs = require("bn.js");
var _bnJsDefault = parcelHelpers.interopDefault(_bnJs);
var Buffer = require("f1df8fb16f84b1f7").Buffer;
function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$6(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$6(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function resemblesAddress(str) {
    // hex prefix 2 + 20 bytes
    return str.length === 42;
}
function createWalletMiddleware(_ref) {
    let { getAccounts , getPrivateKey , processDecryptMessage , processEncryptionPublicKey , processEthSignMessage , processPersonalMessage , processTransaction , processSignTransaction , processTypedMessage , processTypedMessageV3 , processTypedMessageV4  } = _ref;
    if (!getAccounts) throw new Error("opts.getAccounts is required");
    //
    // utility
    //
    /**
   * Validates the keyholder address, and returns a normalized (i.e. lowercase)
   * copy of it.
   *
   * an error
   */ async function validateAndNormalizeKeyholder(address, req) {
        if (typeof address === "string" && address.length > 0) {
            // ensure address is included in provided accounts
            const accounts = await getAccounts(req);
            const normalizedAccounts = accounts.map((_address)=>_address.toLowerCase());
            const normalizedAddress = address.toLowerCase();
            if (normalizedAccounts.includes(normalizedAddress)) return normalizedAddress;
        }
        throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams({
            message: `Invalid parameters: must provide an Ethereum address.`
        });
    }
    //
    // account lookups
    //
    async function lookupAccounts(req, res) {
        res.result = await getAccounts(req);
    }
    async function lookupDefaultAccount(req, res) {
        const accounts = await getAccounts(req);
        res.result = accounts[0] || null;
    }
    //
    // transaction signatures
    //
    async function sendTransaction(req, res) {
        if (!processTransaction) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const txParams = req.params[0] || {
            from: ""
        };
        txParams.from = await validateAndNormalizeKeyholder(txParams.from, req);
        res.result = await processTransaction(txParams, req);
    }
    async function signTransaction(req, res) {
        if (!processSignTransaction) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const txParams = req.params[0] || {
            from: ""
        };
        txParams.from = await validateAndNormalizeKeyholder(txParams.from, req);
        res.result = await processSignTransaction(txParams, req);
    }
    //
    // message signatures
    //
    async function ethSign(req, res) {
        if (!processEthSignMessage) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const address = await validateAndNormalizeKeyholder(req.params[0], req);
        const message = req.params[1];
        const extraParams = req.params[2] || {};
        const msgParams = _objectSpread$6(_objectSpread$6({}, extraParams), {}, {
            from: address,
            data: message
        });
        res.result = await processEthSignMessage(msgParams, req);
    }
    async function signTypedData(req, res) {
        if (!processTypedMessage) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const message = req.params[0];
        const address = await validateAndNormalizeKeyholder(req.params[1], req);
        const version = "V1";
        const extraParams = req.params[2] || {};
        const msgParams = _objectSpread$6(_objectSpread$6({}, extraParams), {}, {
            from: address,
            data: message
        });
        res.result = await processTypedMessage(msgParams, req, version);
    }
    async function signTypedDataV3(req, res) {
        if (!processTypedMessageV3) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const address = await validateAndNormalizeKeyholder(req.params[0], req);
        const message = req.params[1];
        const version = "V3";
        const msgParams = {
            data: message,
            from: address,
            version
        };
        res.result = await processTypedMessageV3(msgParams, req, version);
    }
    async function signTypedDataV4(req, res) {
        if (!processTypedMessageV4) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const address = await validateAndNormalizeKeyholder(req.params[0], req);
        const message = req.params[1];
        const version = "V4";
        const msgParams = {
            data: message,
            from: address,
            version
        };
        res.result = await processTypedMessageV4(msgParams, req, version);
    }
    async function personalSign(req, res) {
        if (!processPersonalMessage) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        // process normally
        const firstParam = req.params[0];
        const secondParam = req.params[1];
        // non-standard "extraParams" to be appended to our "msgParams" obj
        const extraParams = req.params[2] || {};
        // We initially incorrectly ordered these parameters.
        // To gracefully respect users who adopted this API early,
        // we are currently gracefully recovering from the wrong param order
        // when it is clearly identifiable.
        //
        // That means when the first param is definitely an address,
        // and the second param is definitely not, but is hex.
        let address, message;
        if (resemblesAddress(firstParam) && !resemblesAddress(secondParam)) {
            let warning = `The eth_personalSign method requires params ordered `;
            warning += `[message, address]. This was previously handled incorrectly, `;
            warning += `and has been corrected automatically. `;
            warning += `Please switch this param order for smooth behavior in the future.`;
            res.warning = warning;
            address = firstParam;
            message = secondParam;
        } else {
            message = firstParam;
            address = secondParam;
        }
        address = await validateAndNormalizeKeyholder(address, req);
        const msgParams = _objectSpread$6(_objectSpread$6({}, extraParams), {}, {
            from: address,
            data: message
        });
        // eslint-disable-next-line require-atomic-updates
        res.result = await processPersonalMessage(msgParams, req);
    }
    async function encryptionPublicKey(req, res) {
        if (!processEncryptionPublicKey) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const address = await validateAndNormalizeKeyholder(req.params[0], req);
        res.result = await processEncryptionPublicKey(address, req);
    }
    async function decryptMessage(req, res) {
        if (!processDecryptMessage) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        const ciphertext = req.params[0];
        const address = await validateAndNormalizeKeyholder(req.params[1], req);
        const extraParams = req.params[2] || {};
        const msgParams = _objectSpread$6(_objectSpread$6({}, extraParams), {}, {
            from: address,
            data: ciphertext
        });
        res.result = processDecryptMessage(msgParams, req);
    }
    async function fetchPrivateKey(req, res) {
        if (!getPrivateKey) throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        res.result = getPrivateKey(req);
    }
    return (0, _openloginJrpc.createScaffoldMiddleware)({
        // account lookups
        eth_accounts: (0, _openloginJrpc.createAsyncMiddleware)(lookupAccounts),
        eth_private_key: (0, _openloginJrpc.createAsyncMiddleware)(fetchPrivateKey),
        private_key: (0, _openloginJrpc.createAsyncMiddleware)(fetchPrivateKey),
        eth_coinbase: (0, _openloginJrpc.createAsyncMiddleware)(lookupDefaultAccount),
        // tx signatures
        eth_sendTransaction: (0, _openloginJrpc.createAsyncMiddleware)(sendTransaction),
        eth_signTransaction: (0, _openloginJrpc.createAsyncMiddleware)(signTransaction),
        // message signatures
        eth_sign: (0, _openloginJrpc.createAsyncMiddleware)(ethSign),
        eth_signTypedData: (0, _openloginJrpc.createAsyncMiddleware)(signTypedData),
        eth_signTypedData_v3: (0, _openloginJrpc.createAsyncMiddleware)(signTypedDataV3),
        eth_signTypedData_v4: (0, _openloginJrpc.createAsyncMiddleware)(signTypedDataV4),
        personal_sign: (0, _openloginJrpc.createAsyncMiddleware)(personalSign),
        eth_getEncryptionPublicKey: (0, _openloginJrpc.createAsyncMiddleware)(encryptionPublicKey),
        eth_decrypt: (0, _openloginJrpc.createAsyncMiddleware)(decryptMessage)
    });
}
function createEthMiddleware(providerHandlers) {
    const { getAccounts , getPrivateKey , processTransaction , processSignTransaction , processEthSignMessage , processTypedMessage , processTypedMessageV3 , processTypedMessageV4 , processPersonalMessage , processEncryptionPublicKey , processDecryptMessage  } = providerHandlers;
    const ethMiddleware = (0, _openloginJrpc.mergeMiddleware)([
        (0, _openloginJrpc.createScaffoldMiddleware)({
            eth_syncing: false
        }),
        createWalletMiddleware({
            getAccounts,
            getPrivateKey,
            processTransaction,
            processEthSignMessage,
            processSignTransaction,
            processTypedMessage,
            processTypedMessageV3,
            processTypedMessageV4,
            processPersonalMessage,
            processEncryptionPublicKey,
            processDecryptMessage
        })
    ]);
    return ethMiddleware;
}
function createChainSwitchMiddleware(_ref) {
    let { addChain , switchChain  } = _ref;
    async function addNewChain(req, res) {
        var _req$params;
        const chainParams = (_req$params = req.params) !== null && _req$params !== void 0 && _req$params.length ? req.params[0] : undefined;
        if (!chainParams) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing chain params");
        if (!chainParams.chainId) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing chainId in chainParams");
        if (!chainParams.rpcUrls || chainParams.rpcUrls.length === 0) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing rpcUrls in chainParams");
        if (!chainParams.nativeCurrency) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing nativeCurrency in chainParams");
        res.result = await addChain(chainParams);
    }
    async function updateChain(req, res) {
        var _req$params2;
        const chainParams = (_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.length ? req.params[0] : undefined;
        if (!chainParams) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing chainId");
        res.result = await switchChain(chainParams);
    }
    return (0, _openloginJrpc.createScaffoldMiddleware)({
        wallet_addEthereumChain: (0, _openloginJrpc.createAsyncMiddleware)(addNewChain),
        wallet_switchEthereumChain: (0, _openloginJrpc.createAsyncMiddleware)(updateChain)
    });
}
// #region account middlewares
function createAccountMiddleware(_ref2) {
    let { updatePrivatekey  } = _ref2;
    async function updateAccount(req, res) {
        var _req$params3;
        const accountParams = (_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.length ? req.params[0] : undefined;
        if (!(accountParams !== null && accountParams !== void 0 && accountParams.privateKey)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing privateKey");
        res.result = await updatePrivatekey(accountParams);
    }
    return (0, _openloginJrpc.createScaffoldMiddleware)({
        wallet_updateAccount: (0, _openloginJrpc.createAsyncMiddleware)(updateAccount)
    });
}
// #endregion account middlewares
function createChainIdMiddleware(chainId) {
    return (req, res, next, end)=>{
        if (req.method === "eth_chainId") {
            res.result = chainId;
            return end();
        }
        return next();
    };
}
function createProviderConfigMiddleware(providerConfig) {
    return (req, res, next, end)=>{
        if (req.method === "eth_provider_config") {
            res.result = providerConfig;
            return end();
        }
        return next();
    };
}
function createJsonRpcClient(providerConfig) {
    const { chainId , rpcTarget  } = providerConfig;
    const fetchMiddleware = (0, _baseControllers.createFetchMiddleware)({
        rpcTarget
    });
    const networkMiddleware = (0, _openloginJrpc.mergeMiddleware)([
        createChainIdMiddleware(chainId),
        createProviderConfigMiddleware(providerConfig),
        fetchMiddleware
    ]);
    return {
        networkMiddleware,
        fetchMiddleware
    };
}
function getProviderHandlers$2(_ref) {
    let { connector  } = _ref;
    return {
        getPrivateKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        getAccounts: async (_)=>{
            const { accounts  } = connector;
            if (accounts && accounts.length) return accounts;
            throw new Error("Failed to get accounts");
        },
        processTransaction: async (txParams, _)=>{
            const result = await connector.sendTransaction(txParams);
            return result;
        },
        processSignTransaction: async (txParams, _)=>{
            const result = await connector.signTransaction(txParams);
            return result;
        },
        processEthSignMessage: async (msgParams, _)=>{
            const result = await connector.signMessage([
                msgParams.from,
                msgParams.data
            ]);
            return result;
        },
        processPersonalMessage: async (msgParams, _)=>{
            const result = await connector.signPersonalMessage([
                msgParams.data,
                msgParams.from
            ]);
            return result;
        },
        processTypedMessage: async (msgParams, _)=>{
            const result = await connector.signTypedData([
                msgParams.from,
                msgParams.data
            ]);
            return result;
        },
        processTypedMessageV3: async (msgParams)=>{
            const result = await connector.signTypedData([
                msgParams.from,
                msgParams.data
            ]);
            return result;
        },
        processTypedMessageV4: async (msgParams)=>{
            const result = await connector.signTypedData([
                msgParams.from,
                msgParams.data
            ]);
            return result;
        },
        processEncryptionPublicKey: async (_)=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        processDecryptMessage: (_)=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        }
    };
}
function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$5(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$5(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class WalletConnectProvider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state , connector  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread$5(_objectSpread$5({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155
                }),
                skipLookupNetwork: !!config.skipLookupNetwork
            },
            state: _objectSpread$5(_objectSpread$5({}, state || {}), {}, {
                chainId: "loading",
                accounts: []
            })
        });
        (0, _definePropertyDefault.default)(this, "connector", null);
        this.connector = connector || null;
    }
    async enable() {
        if (!this.connector) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Connector is not initialized, pass wallet connect connector in constructor",
            code: 4902
        });
        await this.setupProvider(this.connector);
        return this._providerEngineProxy.request({
            method: "eth_accounts"
        });
    }
    async setupProvider(connector) {
        this.onConnectorStateUpdate(connector);
        await this.setupEngine(connector);
    }
    async switchChain(_ref2) {
        let { chainId , addChain =true , lookup =true  } = _ref2;
        if (!this.connector) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Connector is not initialized, pass wallet connect connector in constructor",
            code: 4902
        });
        const currentChainConfig = this.getChainConfig(chainId);
        this.update({
            chainId: "loading"
        });
        const { rpcTarget , displayName  } = currentChainConfig;
        if (addChain) try {
            await this.connector.sendCustomRequest({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId,
                        chainName: displayName,
                        rpcUrls: [
                            rpcTarget
                        ],
                        blockExplorerUrls: [
                            currentChainConfig.blockExplorer
                        ],
                        nativeCurrency: {
                            name: currentChainConfig.tickerName,
                            symbol: currentChainConfig.ticker,
                            decimals: currentChainConfig.decimals || 18
                        }
                    }
                ]
            });
        } catch (error) {
            (0, _base.log).error(error);
        }
        try {
            await this.connector.sendCustomRequest({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId
                    }
                ]
            });
        } catch (error) {
            (0, _base.log).error(error);
            // ignore this error because metamask & others return provider.result as null
            // wallet connect thinks this is wrong
            if (error.message !== "JSON RPC response format is invalid") throw error;
        }
        this.configure({
            chainConfig: currentChainConfig
        });
        if (lookup) await this.lookupNetwork(this.connector);
    }
    async addChain(chainConfig) {
        if (!this.connector) throw (0, _base.WalletInitializationError).notReady("Wallet adapter is not ready yet");
        const { rpcTarget , displayName  } = chainConfig;
        try {
            await this.connector.sendCustomRequest({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: chainConfig.chainId,
                        chainName: displayName,
                        rpcUrls: [
                            rpcTarget
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
            });
            super.addChain(chainConfig);
        } catch (error) {
            (0, _base.log).error(error);
            throw error;
        }
    }
    async lookupNetwork(connector) {
        if (!connector.connected) throw (0, _base.WalletLoginError).notConnectedError("Wallet connect connector is not connected");
        if (!this.provider) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const { chainId  } = this.config.chainConfig;
        const connectedHexChainId = (0, _base.isHexStrict)(connector.chainId.toString()) ? connector.chainId : `0x${connector.chainId.toString(16)}`;
        if (chainId !== connectedHexChainId) throw (0, _base.WalletInitializationError).rpcConnectionError(`Invalid network, net_version is: ${connectedHexChainId}, expected: ${chainId}`);
        this.provider.emit("connect", {
            chainId
        });
        this.provider.emit("chainChanged", this.state.chainId);
        return connectedHexChainId;
    }
    async setupEngine(connector) {
        const providerHandlers = getProviderHandlers$2({
            connector
        });
        this.update({
            accounts: connector.accounts || []
        });
        const ethMiddleware = createEthMiddleware(providerHandlers);
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        const { networkMiddleware  } = createJsonRpcClient(this.config.chainConfig);
        engine.push(ethMiddleware);
        engine.push(networkMiddleware);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
        if (!this.config.skipLookupNetwork) await this.lookupNetwork(connector);
    }
    async onConnectorStateUpdate(connector) {
        connector.on("session_update", async (error, payload)=>{
            if (!this.provider) throw (0, _base.WalletLoginError).notConnectedError("Wallet connect connector is not connected");
            if (error) {
                this.provider.emit("error", error);
                return;
            }
            const { accounts , chainId: connectedChainId , rpcUrl  } = payload.params[0];
            // Check if accounts changed and trigger event
            if (accounts !== null && accounts !== void 0 && accounts.length && this.state.accounts[0] !== accounts[0]) {
                this.update({
                    accounts
                });
                // await this.setupEngine(connector);
                this.provider.emit("accountsChanged", accounts);
            }
            const connectedHexChainId = `0x${connectedChainId.toString(16)}`;
            // Check if chainId changed and trigger event
            if (connectedChainId && this.state.chainId !== connectedHexChainId) {
                const maybeConfig = (0, _base.getChainConfig)((0, _base.CHAIN_NAMESPACES).EIP155, connectedChainId) || {};
                // Handle rpcUrl update
                this.configure({
                    chainConfig: _objectSpread$5(_objectSpread$5({}, maybeConfig), {}, {
                        chainId: connectedHexChainId,
                        rpcTarget: rpcUrl,
                        chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155
                    })
                });
                await this.setupEngine(connector);
            }
        });
    }
}
(0, _definePropertyDefault.default)(WalletConnectProvider, "getProviderInstance", async (params)=>{
    const providerFactory = new WalletConnectProvider({
        config: {
            chainConfig: params.chainConfig,
            skipLookupNetwork: params.skipLookupNetwork
        }
    });
    await providerFactory.setupProvider(params.connector);
    return providerFactory;
});
async function getLastActiveSession(signClient) {
    if (signClient.session.length) {
        const lastKeyIndex = signClient.session.keys.length - 1;
        return signClient.session.get(signClient.session.keys[lastKeyIndex]);
    }
    return null;
}
async function sendJrpcRequest(signClient, chainId, method, params) {
    const session = await getLastActiveSession(signClient);
    if (!session) throw (0, _ethRpcErrors.ethErrors).provider.disconnected();
    return signClient.request({
        topic: session.topic,
        chainId: `eip155:${chainId}`,
        request: {
            method,
            params
        }
    });
}
async function getAccounts(signClient) {
    const session = await getLastActiveSession(signClient);
    if (!session) throw (0, _ethRpcErrors.ethErrors).provider.disconnected();
    const accounts = (0, _utils.getAccountsFromNamespaces)(session.namespaces);
    if (accounts && accounts.length) return [
        ...new Set(accounts.map((add)=>{
            return (0, _utils.parseAccountId)(add).address;
        }))
    ];
    throw new Error("Failed to get accounts");
}
function getProviderHandlers$1(_ref) {
    let { connector , chainId  } = _ref;
    return {
        getPrivateKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        getAccounts: async (_)=>{
            return getAccounts(connector);
        },
        processTransaction: async (txParams, _)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_sendTransaction", [
                txParams
            ]);
            return methodRes;
        },
        processSignTransaction: async (txParams, _)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_signTransaction", [
                txParams
            ]);
            return methodRes;
        },
        processEthSignMessage: async (msgParams, _)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_sign", [
                msgParams.from,
                msgParams.data
            ]);
            return methodRes;
        },
        processPersonalMessage: async (msgParams, _)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "personal_sign", [
                msgParams.from,
                msgParams.data
            ]);
            return methodRes;
        },
        processTypedMessage: async (msgParams, _)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_signTypedData", [
                msgParams.data,
                msgParams.from
            ]);
            return methodRes;
        },
        processTypedMessageV3: async (msgParams)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_signTypedData_v3", [
                msgParams.from,
                msgParams.data
            ]);
            return methodRes;
        },
        processTypedMessageV4: async (msgParams)=>{
            const methodRes = await sendJrpcRequest(connector, chainId, "eth_signTypedData_v4", [
                msgParams.from,
                msgParams.data
            ]);
            return methodRes;
        },
        processEncryptionPublicKey: async (_)=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        processDecryptMessage: (_)=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        }
    };
}
function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$4(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
class WalletConnectV2Provider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state , connector  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread$4(_objectSpread$4({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155
                }),
                skipLookupNetwork: !!config.skipLookupNetwork
            },
            state: _objectSpread$4(_objectSpread$4({}, state || {}), {}, {
                chainId: "loading",
                accounts: []
            })
        });
        (0, _definePropertyDefault.default)(this, "connector", null);
        this.connector = connector || null;
    }
    async enable() {
        if (!this.connector) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Connector is not initialized, pass wallet connect connector in constructor",
            code: 4902
        });
        await this.setupProvider(this.connector);
        return this._providerEngineProxy.request({
            method: "eth_accounts"
        });
    }
    async setupProvider(connector) {
        this.onConnectorStateUpdate(connector);
        await this.setupEngine(connector);
    }
    async switchChain(_ref2) {
        let { chainId  } = _ref2;
        if (!this.connector) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Connector is not initialized, pass wallet connect connector in constructor",
            code: 4902
        });
        const currentChainConfig = this.getChainConfig(chainId);
        this.configure({
            chainConfig: currentChainConfig
        });
        await this.setupEngine(this.connector);
    }
    async addChain(chainConfig) {
        super.addChain(chainConfig);
    }
    // no need to implement this method in wallet connect v2.
    async lookupNetwork(_) {
        return this.config.chainConfig.chainId;
    }
    async setupEngine(connector) {
        const { chainId  } = this.config.chainConfig;
        const numChainId = parseInt(chainId, 16);
        const providerHandlers = getProviderHandlers$1({
            connector,
            chainId: numChainId
        });
        const jrpcRes = await getAccounts(connector);
        this.update({
            accounts: jrpcRes || []
        });
        const ethMiddleware = createEthMiddleware(providerHandlers);
        const chainSwitchMiddleware = this.getChainSwitchMiddleware();
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        const { networkMiddleware  } = createJsonRpcClient(this.config.chainConfig);
        engine.push(ethMiddleware);
        engine.push(chainSwitchMiddleware);
        engine.push(networkMiddleware);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
    }
    getChainSwitchMiddleware() {
        const chainSwitchHandlers = {
            addChain: async (params)=>{
                const { chainId , chainName , rpcUrls , blockExplorerUrls , nativeCurrency  } = params;
                this.addChain({
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155,
                    chainId,
                    ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "ETH",
                    tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Ether",
                    displayName: chainName,
                    rpcTarget: rpcUrls[0],
                    blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || "",
                    decimals: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.decimals) || 18
                });
            },
            switchChain: async (params)=>{
                const { chainId  } = params;
                await this.switchChain({
                    chainId
                });
            }
        };
        const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
        return chainSwitchMiddleware;
    }
    connectedTopic() {
        var _this$connector, _this$connector$sessi;
        if (!this.connector) throw (0, _base.WalletLoginError).notConnectedError("Wallet connect connector is not connected");
        if ((_this$connector = this.connector) !== null && _this$connector !== void 0 && (_this$connector$sessi = _this$connector.session) !== null && _this$connector$sessi !== void 0 && _this$connector$sessi.length) {
            var _this$connector$sessi2;
            // currently we are supporting only 1 active session
            const lastKeyIndex = this.connector.session.keys.length - 1;
            return (_this$connector$sessi2 = this.connector.session.get(this.connector.session.keys[lastKeyIndex])) === null || _this$connector$sessi2 === void 0 ? void 0 : _this$connector$sessi2.topic;
        }
        return undefined;
    }
    checkIfChainIdAllowed(chainId) {
        if (!this.connector || !this.connectedTopic()) return false;
        const sessionData = this.connector.session.get(this.connectedTopic());
        const allChains = (0, _utils.getChainsFromNamespaces)(sessionData.namespaces);
        let chainAllowed = false;
        for (const chain of allChains){
            const parsedId = (0, _utils.parseChainId)(chain);
            if (Number.parseInt(parsedId.reference, 10) === Number.parseInt(chainId, 10)) {
                chainAllowed = true;
                break;
            }
        }
        return chainAllowed;
    }
    checkIfAccountAllowed(address) {
        if (!this.connector || !this.connectedTopic()) return false;
        const sessionData = this.connector.session.get(this.connectedTopic());
        const allAccounts = (0, _utils.getAccountsFromNamespaces)(sessionData.namespaces);
        let accountAllowed = false;
        for (const account of allAccounts){
            var _parsedAccount$addres;
            const parsedAccount = (0, _utils.parseAccountId)(account);
            if (((_parsedAccount$addres = parsedAccount.address) === null || _parsedAccount$addres === void 0 ? void 0 : _parsedAccount$addres.toLowerCase()) === (address === null || address === void 0 ? void 0 : address.toLowerCase())) {
                accountAllowed = true;
                break;
            }
        }
        return accountAllowed;
    }
    async onConnectorStateUpdate(connector) {
        connector.events.on("session_event", async (payload)=>{
            (0, _base.log).debug("session_event data", payload);
            if (!this.provider) throw (0, _base.WalletLoginError).notConnectedError("Wallet connect connector is not connected");
            const { event  } = payload.params;
            const { name , data  } = event || {};
            // Check if accounts changed and trigger event
            if (name === "accountsChanged" && data !== null && data !== void 0 && data.length && this.state.accounts[0] !== data[0] && this.checkIfAccountAllowed(data[0])) {
                this.update({
                    accounts: data
                });
                this.provider.emit("accountsChanged", data);
            }
            if (event.name === "chainChanged") {
                const { chainId: connectedChainId , rpcUrl  } = data;
                const connectedHexChainId = `0x${connectedChainId.toString(16)}`;
                if (!this.checkIfChainIdAllowed(connectedHexChainId)) return;
                // Check if chainId changed and trigger event
                if (connectedHexChainId && this.state.chainId !== connectedHexChainId) {
                    const maybeConfig = (0, _base.getChainConfig)((0, _base.CHAIN_NAMESPACES).EIP155, connectedHexChainId) || {};
                    // Handle rpcUrl update
                    this.configure({
                        chainConfig: _objectSpread$4(_objectSpread$4({}, maybeConfig), {}, {
                            chainId: connectedHexChainId,
                            rpcTarget: rpcUrl,
                            chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155
                        })
                    });
                    await this.setupEngine(connector);
                }
            }
        });
    }
}
(0, _definePropertyDefault.default)(WalletConnectV2Provider, "getProviderInstance", async (params)=>{
    const providerFactory = new WalletConnectV2Provider({
        config: {
            chainConfig: params.chainConfig,
            skipLookupNetwork: params.skipLookupNetwork
        }
    });
    await providerFactory.setupProvider(params.connector);
    return providerFactory;
});
// Big Number Constants
const BIG_NUMBER_WEI_MULTIPLIER = new (0, _bignumberJsDefault.default)("1e18");
const BIG_NUMBER_GWEI_MULTIPLIER = new (0, _bignumberJsDefault.default)("1e9");
const BIG_NUMBER_ETH_MULTIPLIER = new (0, _bignumberJsDefault.default)("1");
// Setter Maps
const toBigNumber = {
    hex: (n)=>typeof n === "string" ? new (0, _bignumberJsDefault.default)((0, _util.stripHexPrefix)(n), 16) : new (0, _bignumberJsDefault.default)(n, 16),
    dec: (n)=>new (0, _bignumberJsDefault.default)(n, 10)
};
const toNormalizedDenomination = {
    WEI: (bigNumber)=>bigNumber.div(BIG_NUMBER_WEI_MULTIPLIER),
    GWEI: (bigNumber)=>bigNumber.div(BIG_NUMBER_GWEI_MULTIPLIER),
    ETH: (bigNumber)=>bigNumber.div(BIG_NUMBER_ETH_MULTIPLIER)
};
const toSpecifiedDenomination = {
    WEI: (bigNumber)=>bigNumber.times(BIG_NUMBER_WEI_MULTIPLIER).dp(0, (0, _bignumberJsDefault.default).ROUND_HALF_UP),
    GWEI: (bigNumber)=>bigNumber.times(BIG_NUMBER_GWEI_MULTIPLIER).dp(9, (0, _bignumberJsDefault.default).ROUND_HALF_UP),
    ETH: (bigNumber)=>bigNumber.times(BIG_NUMBER_ETH_MULTIPLIER).dp(9, (0, _bignumberJsDefault.default).ROUND_HALF_UP)
};
const baseChange = {
    hex: (n)=>n.toString(16),
    dec: (n)=>new (0, _bignumberJsDefault.default)(n).toString(10)
};
const converter = (params)=>{
    const { value , fromNumericBase , fromDenomination , toNumericBase , toDenomination , numberOfDecimals  } = params;
    let convertedValue = toBigNumber[fromNumericBase](value);
    if (fromDenomination) convertedValue = toNormalizedDenomination[fromDenomination](convertedValue);
    if (toDenomination) convertedValue = toSpecifiedDenomination[toDenomination](convertedValue);
    if (numberOfDecimals) convertedValue = convertedValue.dp(numberOfDecimals, (0, _bignumberJsDefault.default).ROUND_HALF_DOWN);
    if (toNumericBase) convertedValue = baseChange[toNumericBase](convertedValue);
    return convertedValue;
};
const conversionUtil = (value, _ref)=>{
    let { fromNumericBase ="hex" , toNumericBase , fromDenomination , toDenomination , numberOfDecimals  } = _ref;
    return converter({
        fromNumericBase,
        toNumericBase,
        fromDenomination,
        toDenomination,
        numberOfDecimals,
        value: value || "0"
    });
};
function decGWEIToHexWEI(decGWEI) {
    return conversionUtil(decGWEI, {
        fromNumericBase: "dec",
        toNumericBase: "hex",
        fromDenomination: "GWEI",
        toDenomination: "WEI"
    });
}
function hexWEIToDecGWEI(decGWEI) {
    return conversionUtil(decGWEI, {
        fromNumericBase: "hex",
        toNumericBase: "dec",
        fromDenomination: "WEI",
        toDenomination: "GWEI"
    });
}
function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$3(Object(source), !0).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function normalizeGWEIDecimalNumbers(n) {
    const numberAsWEIHex = decGWEIToHexWEI(n);
    const numberAsGWEI = hexWEIToDecGWEI(numberAsWEIHex);
    return numberAsGWEI;
}
async function fetchEip1159GasEstimates(url) {
    const estimates = await (0, _httpHelpers.get)(url);
    const normalizedEstimates = _objectSpread$3(_objectSpread$3({}, estimates), {}, {
        estimatedBaseFee: normalizeGWEIDecimalNumbers(estimates.estimatedBaseFee),
        low: _objectSpread$3(_objectSpread$3({}, estimates.low), {}, {
            suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxPriorityFeePerGas),
            suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxFeePerGas)
        }),
        medium: _objectSpread$3(_objectSpread$3({}, estimates.medium), {}, {
            suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxPriorityFeePerGas),
            suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxFeePerGas)
        }),
        high: _objectSpread$3(_objectSpread$3({}, estimates.high), {}, {
            suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.high.suggestedMaxPriorityFeePerGas),
            suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.high.suggestedMaxFeePerGas)
        })
    });
    return normalizedEstimates;
}
/**
 * Hit the legacy MetaSwaps gasPrices estimate api and return the low, medium
 * high values from that API.
 */ async function fetchLegacyGasPriceEstimates(url) {
    const result = await (0, _httpHelpers.get)(url, {
        referrer: url,
        referrerPolicy: "no-referrer-when-downgrade",
        method: "GET",
        mode: "cors"
    });
    return {
        low: result.SafeGasPrice,
        medium: result.ProposeGasPrice,
        high: result.FastGasPrice
    };
}
const validateTypedMessageParams = (parameters, activeChainId)=>{
    var _data$domain;
    try {
        (0, _assertDefault.default).ok(parameters && typeof parameters === "object", "Params must be an object.");
        (0, _assertDefault.default).ok("data" in parameters, 'Params must include a "data" field.');
        (0, _assertDefault.default).ok("from" in parameters, 'Params must include a "from" field.');
        (0, _assertDefault.default).ok(typeof parameters.from === "string" && (0, _util.isValidAddress)(parameters.from), '"from" field must be a valid, lowercase, hexadecimal Ethereum address string.');
        let data = null;
        let chainId = null;
        switch(parameters.version){
            case (0, _ethSigUtil.SignTypedDataVersion).V1:
                if (typeof parameters.data === "string") (0, _assertDefault.default).doesNotThrow(()=>{
                    data = JSON.parse(parameters.data);
                }, '"data" must be a valid JSON string.');
                else // for backward compatiblity we validate for both string and object type.
                data = parameters.data;
                (0, _assertDefault.default).ok(Array.isArray(data), "params.data must be an array.");
                (0, _assertDefault.default).doesNotThrow(()=>{
                    (0, _ethSigUtil.typedSignatureHash)(data);
                }, "Signing data must be valid EIP-712 typed data.");
                break;
            case (0, _ethSigUtil.SignTypedDataVersion).V3:
            case (0, _ethSigUtil.SignTypedDataVersion).V4:
                if (typeof parameters.data === "string") (0, _assertDefault.default).doesNotThrow(()=>{
                    data = JSON.parse(parameters.data);
                }, '"data" must be a valid JSON string.');
                else // for backward compatiblity we validate for both string and object type.
                data = parameters.data;
                (0, _assertDefault.default).ok(data.primaryType in data.types, `Primary type of "${data.primaryType}" has no type definition.`);
                const validation = (0, _jsonschemaDefault.default).validate(data, (0, _ethSigUtil.TYPED_MESSAGE_SCHEMA).properties);
                (0, _assertDefault.default).strictEqual(validation.errors.length, 0, "Signing data must conform to EIP-712 schema. See https://git.io/fNtcx.");
                chainId = (_data$domain = data.domain) === null || _data$domain === void 0 ? void 0 : _data$domain.chainId;
                if (chainId) {
                    (0, _assertDefault.default).ok(!Number.isNaN(activeChainId), `Cannot sign messages for chainId "${chainId}", because Web3Auth is switching networks.`);
                    if (typeof chainId === "string") chainId = Number.parseInt(chainId, (0, _base.isHexStrict)(chainId) ? 16 : 10);
                    (0, _assertDefault.default).strictEqual(chainId, activeChainId, `Provided chainId "${chainId}" must match the active chainId "${activeChainId}"`);
                }
                break;
            default:
                (0, _assertDefault.default).fail(`Unknown typed data version "${parameters.version}"`);
        }
    } catch (error) {
        throw (0, _ethRpcErrors.ethErrors).rpc.invalidInput({
            message: error === null || error === void 0 ? void 0 : error.message
        });
    }
};
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
async function signTx(txParams, privKey, txFormatter) {
    const finalTxParams = await txFormatter.formatTransaction(txParams);
    const common = await txFormatter.getCommonConfiguration();
    const unsignedEthTx = (0, _tx.TransactionFactory).fromTxData(finalTxParams, {
        common
    });
    const signedTx = unsignedEthTx.sign(Buffer.from(privKey, "hex")).serialize();
    return signedTx;
}
function getProviderHandlers(_ref) {
    let { txFormatter , privKey , getProviderEngineProxy  } = _ref;
    return {
        getAccounts: async (_)=>[
                `0x${(0, _util.privateToAddress)(Buffer.from(privKey, "hex")).toString("hex")}`
            ],
        getPrivateKey: async (_)=>privKey,
        processTransaction: async (txParams, _)=>{
            const providerEngineProxy = getProviderEngineProxy();
            if (!providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const signedTx = await signTx(txParams, privKey, txFormatter);
            const txHash = await providerEngineProxy.request({
                method: "eth_sendRawTransaction",
                params: [
                    "0x".concat(signedTx.toString("hex"))
                ]
            });
            return txHash;
        },
        processSignTransaction: async (txParams, _)=>{
            const providerEngineProxy = getProviderEngineProxy();
            if (!providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const signedTx = await signTx(txParams, privKey, txFormatter);
            return `0x${signedTx.toString("hex")}`;
        },
        processEthSignMessage: async (msgParams, _)=>{
            const rawMessageSig = (0, _baseControllers.signMessage)(privKey, msgParams.data);
            return rawMessageSig;
        },
        processPersonalMessage: async (msgParams, _)=>{
            const privKeyBuffer = Buffer.from(privKey, "hex");
            const sig = (0, _ethSigUtil.personalSign)({
                privateKey: privKeyBuffer,
                data: msgParams.data
            });
            return sig;
        },
        processTypedMessage: async (msgParams, _)=>{
            (0, _base.log).debug("processTypedMessage", msgParams);
            const privKeyBuffer = Buffer.from(privKey, "hex");
            const providerEngineProxy = getProviderEngineProxy();
            if (!providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const chainId = await providerEngineProxy.request({
                method: "eth_chainId"
            });
            const finalChainId = Number.parseInt(chainId, (0, _base.isHexStrict)(chainId) ? 16 : 10);
            const params = _objectSpread$2(_objectSpread$2({}, msgParams), {}, {
                version: (0, _ethSigUtil.SignTypedDataVersion).V1
            });
            validateTypedMessageParams(params, finalChainId);
            const data = typeof params.data === "string" ? JSON.parse(params.data) : params.data;
            const sig = (0, _ethSigUtil.signTypedData)({
                privateKey: privKeyBuffer,
                data,
                version: (0, _ethSigUtil.SignTypedDataVersion).V1
            });
            return sig;
        },
        processTypedMessageV3: async (msgParams, _)=>{
            (0, _base.log).debug("processTypedMessageV3", msgParams);
            const privKeyBuffer = Buffer.from(privKey, "hex");
            const providerEngineProxy = getProviderEngineProxy();
            if (!providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const chainId = await providerEngineProxy.request({
                method: "eth_chainId"
            });
            const finalChainId = Number.parseInt(chainId, (0, _base.isHexStrict)(chainId) ? 16 : 10);
            validateTypedMessageParams(msgParams, finalChainId);
            const data = typeof msgParams.data === "string" ? JSON.parse(msgParams.data) : msgParams.data;
            const sig = (0, _ethSigUtil.signTypedData)({
                privateKey: privKeyBuffer,
                data,
                version: (0, _ethSigUtil.SignTypedDataVersion).V3
            });
            return sig;
        },
        processTypedMessageV4: async (msgParams, _)=>{
            (0, _base.log).debug("processTypedMessageV4", msgParams);
            const privKeyBuffer = Buffer.from(privKey, "hex");
            const providerEngineProxy = getProviderEngineProxy();
            if (!providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const chainId = await providerEngineProxy.request({
                method: "eth_chainId"
            });
            const finalChainId = Number.parseInt(chainId, (0, _base.isHexStrict)(chainId) ? 16 : 10);
            validateTypedMessageParams(msgParams, finalChainId);
            const data = typeof msgParams.data === "string" ? JSON.parse(msgParams.data) : msgParams.data;
            const sig = (0, _ethSigUtil.signTypedData)({
                privateKey: privKeyBuffer,
                data,
                version: (0, _ethSigUtil.SignTypedDataVersion).V4
            });
            return sig;
        },
        processEncryptionPublicKey: async (address, _)=>{
            (0, _base.log).info("processEncryptionPublicKey", address);
            return (0, _ethSigUtil.getEncryptionPublicKey)(privKey);
        },
        processDecryptMessage: (msgParams, _)=>{
            (0, _base.log).info("processDecryptMessage", msgParams);
            const stripped = (0, _util.stripHexPrefix)(msgParams.data);
            const buff = Buffer.from(stripped, "hex");
            const decrypted = (0, _ethSigUtil.decrypt)({
                encryptedData: JSON.parse(buff.toString("utf8")),
                privateKey: privKey
            });
            return decrypted;
        }
    };
}
function bnLessThan(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) return null;
    return new (0, _bignumberJs.BigNumber)(a, 10).lt(b, 10);
}
function bnToHex(inputBn) {
    return (0, _util.addHexPrefix)(inputBn.toString(16));
}
function hexToBn(inputHex) {
    if ((0, _bnJsDefault.default).isBN(inputHex)) return inputHex;
    return new (0, _bnJsDefault.default)((0, _util.stripHexPrefix)(inputHex), 16);
}
function BnMultiplyByFraction(targetBN, numerator, denominator) {
    const numberBN = new (0, _bnJsDefault.default)(numerator);
    const denomBN = new (0, _bnJsDefault.default)(denominator);
    return targetBN.mul(numberBN).div(denomBN);
}
const LegacyGasAPIEndpoint = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/gasPrices";
const EIP1559APIEndpoint = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/suggestedGasFees";
const TRANSACTION_ENVELOPE_TYPES = {
    LEGACY: "0x0",
    ACCESS_LIST: "0x1",
    FEE_MARKET: "0x2"
};
const TRANSACTION_TYPES = {
    SENT_ETHER: "sentEther",
    CONTRACT_INTERACTION: "contractInteraction",
    DEPLOY_CONTRACT: "contractDeployment",
    STANDARD_TRANSACTION: "transaction"
};
const GAS_ESTIMATE_TYPES = {
    FEE_MARKET: "fee-market",
    LEGACY: "legacy",
    ETH_GASPRICE: "eth_gasPrice",
    NONE: "none"
};
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
class TransactionFormatter {
    constructor(_ref){
        let { getProviderEngineProxy  } = _ref;
        (0, _definePropertyDefault.default)(this, "chainConfig", null);
        (0, _definePropertyDefault.default)(this, "getProviderEngineProxy", void 0);
        (0, _definePropertyDefault.default)(this, "isEIP1559Compatible", false);
        this.getProviderEngineProxy = getProviderEngineProxy;
    }
    get providerProxy() {
        return this.getProviderEngineProxy();
    }
    async init() {
        this.chainConfig = await this.providerProxy.request({
            method: "eth_provider_config",
            params: []
        });
        this.isEIP1559Compatible = await this.getEIP1559Compatibility();
    }
    async getCommonConfiguration() {
        if (!this.chainConfig) throw new Error("Chain config not initialized");
        const { displayName: name , chainId  } = this.chainConfig;
        const hardfork = this.isEIP1559Compatible ? (0, _common.Hardfork).London : (0, _common.Hardfork).Berlin;
        const customChainParams = {
            name,
            chainId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
            networkId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
            defaultHardfork: hardfork
        };
        return (0, _common.Common).custom(customChainParams);
    }
    async formatTransaction(txParams) {
        if (!this.chainConfig) throw new Error("Chain config not initialized");
        const clonedTxParams = _objectSpread$1({}, txParams);
        if (clonedTxParams.nonce === undefined) clonedTxParams.nonce = await this.providerProxy.request({
            method: "eth_getTransactionCount",
            params: [
                txParams.from,
                "latest"
            ]
        });
        if (!this.isEIP1559Compatible && clonedTxParams.gasPrice) {
            if (clonedTxParams.maxFeePerGas) delete clonedTxParams.maxFeePerGas;
            if (clonedTxParams.maxPriorityFeePerGas) delete clonedTxParams.maxPriorityFeePerGas;
            // if gas is not provided explicitly, estimate it.
            if (!clonedTxParams.gas) {
                const defaultGasLimit = await this.getDefaultGasLimit(clonedTxParams);
                if (defaultGasLimit) clonedTxParams.gasLimit = defaultGasLimit;
            } else clonedTxParams.gasLimit = clonedTxParams.gas;
            return clonedTxParams;
        }
        if (!clonedTxParams.gas) {
            const defaultGasLimit = await this.getDefaultGasLimit(clonedTxParams);
            if (defaultGasLimit) clonedTxParams.gasLimit = defaultGasLimit;
        } else clonedTxParams.gasLimit = clonedTxParams.gas;
        const { gasPrice: defaultGasPrice , maxFeePerGas: defaultMaxFeePerGas , maxPriorityFeePerGas: defaultMaxPriorityFeePerGas  } = await this.getDefaultGasFees(clonedTxParams);
        if (this.isEIP1559Compatible) {
            // If the dapp has suggested a gas price, but no maxFeePerGas or maxPriorityFeePerGas
            //  then we set maxFeePerGas and maxPriorityFeePerGas to the suggested gasPrice.
            if (clonedTxParams.gasPrice && !clonedTxParams.maxFeePerGas && !clonedTxParams.maxPriorityFeePerGas) {
                clonedTxParams.maxFeePerGas = clonedTxParams.gasPrice;
                clonedTxParams.maxPriorityFeePerGas = bnLessThan(typeof defaultMaxPriorityFeePerGas === "string" ? (0, _util.stripHexPrefix)(defaultMaxPriorityFeePerGas) : defaultMaxPriorityFeePerGas, typeof clonedTxParams.gasPrice === "string" ? (0, _util.stripHexPrefix)(clonedTxParams.gasPrice) : clonedTxParams.gasPrice) ? defaultMaxPriorityFeePerGas : clonedTxParams.gasPrice;
            } else {
                if (defaultMaxFeePerGas && !clonedTxParams.maxFeePerGas) // If the dapp has not set the gasPrice or the maxFeePerGas, then we set maxFeePerGas
                // with the one returned by the gasFeeController, if that is available.
                clonedTxParams.maxFeePerGas = defaultMaxFeePerGas;
                if (defaultMaxPriorityFeePerGas && !clonedTxParams.maxPriorityFeePerGas) // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, then we set maxPriorityFeePerGas
                // with the one returned by the gasFeeController, if that is available.
                clonedTxParams.maxPriorityFeePerGas = defaultMaxPriorityFeePerGas;
                if (defaultGasPrice && !clonedTxParams.maxFeePerGas) // If the dapp has not set the gasPrice or the maxFeePerGas, and no maxFeePerGas is available
                // then we set maxFeePerGas to the defaultGasPrice, assuming it is
                // available.
                clonedTxParams.maxFeePerGas = defaultGasPrice;
                if (clonedTxParams.maxFeePerGas && !clonedTxParams.maxPriorityFeePerGas) // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, and no maxPriorityFeePerGas is
                // available  then we set maxPriorityFeePerGas to
                // clonedTxParams.maxFeePerGas, which will either be the gasPrice from the controller, the maxFeePerGas
                // set by the dapp, or the maxFeePerGas from the controller.
                clonedTxParams.maxPriorityFeePerGas = clonedTxParams.maxFeePerGas;
            }
            // We remove the gasPrice param entirely when on an eip1559 compatible network
            delete clonedTxParams.gasPrice;
        } else {
            // We ensure that maxFeePerGas and maxPriorityFeePerGas are not in the transaction params
            // when not on a EIP1559 compatible network
            delete clonedTxParams.maxPriorityFeePerGas;
            delete clonedTxParams.maxFeePerGas;
        }
        // If we have gotten to this point, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas are
        // set on txParams, it means that either we are on a non-EIP1559 network and the dapp didn't suggest
        // a gas price, or we are on an EIP1559 network, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas
        // were available from either the dapp or the network.
        if (defaultGasPrice && !clonedTxParams.gasPrice && !clonedTxParams.maxPriorityFeePerGas && !clonedTxParams.maxFeePerGas) clonedTxParams.gasPrice = defaultGasPrice;
        clonedTxParams.type = this.isEIP1559Compatible ? TRANSACTION_ENVELOPE_TYPES.FEE_MARKET : TRANSACTION_ENVELOPE_TYPES.LEGACY;
        clonedTxParams.chainId = this.chainConfig.chainId;
        return clonedTxParams;
    }
    async fetchEthGasPriceEstimate() {
        const gasPrice = await this.providerProxy.request({
            method: "eth_gasPrice",
            params: []
        });
        return {
            gasPrice: hexWEIToDecGWEI(gasPrice).toString()
        };
    }
    async getEIP1559Compatibility() {
        const latestBlock = await this.providerProxy.request({
            method: "eth_getBlockByNumber",
            params: [
                "latest",
                false
            ]
        });
        const supportsEIP1559 = latestBlock && latestBlock.baseFeePerGas !== undefined;
        return !!supportsEIP1559;
    }
    async fetchGasFeeEstimateData() {
        if (!this.chainConfig) throw new Error("Chain config not initialized");
        const isLegacyGasAPICompatible = this.chainConfig.chainId === "0x1";
        const chainId = Number.parseInt(this.chainConfig.chainId, 16);
        let gasData;
        try {
            if (this.isEIP1559Compatible) {
                // TODO: kovan is not working due to a bug in metamask api
                const estimates = await fetchEip1159GasEstimates(EIP1559APIEndpoint.replace("<chain_id>", `${chainId}`));
                gasData = {
                    gasFeeEstimates: estimates,
                    gasEstimateType: GAS_ESTIMATE_TYPES.FEE_MARKET
                };
            } else if (isLegacyGasAPICompatible) {
                const estimates = await fetchLegacyGasPriceEstimates(LegacyGasAPIEndpoint.replace("<chain_id>", `${chainId}`));
                gasData = {
                    gasFeeEstimates: estimates,
                    gasEstimateType: GAS_ESTIMATE_TYPES.LEGACY
                };
            } else throw new Error("Main gas fee/price estimation failed. Use fallback");
        } catch (e) {
            try {
                const estimates = await this.fetchEthGasPriceEstimate();
                gasData = {
                    gasFeeEstimates: estimates,
                    gasEstimateType: GAS_ESTIMATE_TYPES.ETH_GASPRICE
                };
            } catch (error) {
                throw new Error(`Gas fee/price estimation failed. Message: ${error.message}`);
            }
        }
        return gasData;
    }
    async getDefaultGasFees(txParams) {
        if (!this.isEIP1559Compatible && txParams.gasPrice || this.isEIP1559Compatible && txParams.maxFeePerGas && txParams.maxPriorityFeePerGas) return {};
        try {
            const { gasFeeEstimates , gasEstimateType  } = await this.fetchGasFeeEstimateData();
            if (this.isEIP1559Compatible && gasEstimateType === GAS_ESTIMATE_TYPES.FEE_MARKET) {
                const { medium: { suggestedMaxPriorityFeePerGas , suggestedMaxFeePerGas  } = {}  } = gasFeeEstimates;
                if (suggestedMaxPriorityFeePerGas && suggestedMaxFeePerGas) return {
                    maxFeePerGas: (0, _util.addHexPrefix)(decGWEIToHexWEI(suggestedMaxFeePerGas)),
                    maxPriorityFeePerGas: (0, _util.addHexPrefix)(decGWEIToHexWEI(suggestedMaxPriorityFeePerGas))
                };
            } else if (gasEstimateType === GAS_ESTIMATE_TYPES.LEGACY) // The LEGACY type includes low, medium and high estimates of
            // gas price values.
            return {
                gasPrice: (0, _util.addHexPrefix)(decGWEIToHexWEI(gasFeeEstimates.medium))
            };
            else if (gasEstimateType === GAS_ESTIMATE_TYPES.ETH_GASPRICE) // The ETH_GASPRICE type just includes a single gas price property,
            // which we can assume was retrieved from eth_gasPrice
            return {
                gasPrice: (0, _util.addHexPrefix)(decGWEIToHexWEI(gasFeeEstimates.gasPrice))
            };
        } catch (error) {
            (0, _base.log).error(error);
        }
        const { gasPrice  } = await this.fetchEthGasPriceEstimate();
        return {
            gasPrice: (0, _util.addHexPrefix)(decGWEIToHexWEI(gasPrice))
        };
    }
    async estimateTxGas(txMeta) {
        const txParams = _objectSpread$1({}, txMeta);
        // `eth_estimateGas` can fail if the user has insufficient balance for the
        // value being sent, or for the gas cost. We don't want to check their
        // balance here, we just want the gas estimate. The gas price is removed
        // to skip those balance checks. We check balance elsewhere. We also delete
        // maxFeePerGas and maxPriorityFeePerGas to support EIP-1559 txs.
        delete txParams.gasPrice;
        delete txParams.maxFeePerGas;
        delete txParams.maxPriorityFeePerGas;
        const gas = await this.providerProxy.request({
            method: "eth_estimateGas",
            params: [
                txParams
            ]
        });
        return gas;
    }
    async analyzeGasUsage(txMeta) {
        const block = await this.providerProxy.request({
            method: "eth_getBlockByNumber",
            params: [
                "latest",
                false
            ]
        });
        // fallback to block gasLimit
        const blockGasLimitBN = hexToBn(block.gasLimit);
        const saferGasLimitBN = BnMultiplyByFraction(blockGasLimitBN, 19, 20);
        let estimatedGasHex = bnToHex(saferGasLimitBN);
        try {
            estimatedGasHex = await this.estimateTxGas(txMeta);
        } catch (error) {
            (0, _base.log).warn(error);
        }
        return {
            blockGasLimit: block.gasLimit,
            estimatedGasHex
        };
    }
    addGasBuffer(initialGasLimitHex, blockGasLimitHex) {
        let multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
        const initialGasLimitBn = hexToBn(initialGasLimitHex);
        const blockGasLimitBn = hexToBn(blockGasLimitHex);
        const upperGasLimitBn = blockGasLimitBn.muln(0.9);
        const bufferedGasLimitBn = initialGasLimitBn.muln(multiplier);
        // if initialGasLimit is above blockGasLimit, dont modify it
        if (initialGasLimitBn.gt(upperGasLimitBn)) return bnToHex(initialGasLimitBn);
        // if bufferedGasLimit is below blockGasLimit, use bufferedGasLimit
        if (bufferedGasLimitBn.lt(upperGasLimitBn)) return bnToHex(bufferedGasLimitBn);
        // otherwise use blockGasLimit
        return bnToHex(upperGasLimitBn);
    }
    async determineTransactionCategory(txParameters) {
        const { data , to  } = txParameters;
        let code = "";
        let txCategory;
        if (data && !to) txCategory = TRANSACTION_TYPES.DEPLOY_CONTRACT;
        else {
            try {
                code = await this.providerProxy.request({
                    method: "eth_getCode",
                    params: [
                        to,
                        "latest"
                    ]
                });
            } catch (error) {
                (0, _base.log).warn(error);
            }
            const codeIsEmpty = !code || code === "0x" || code === "0x0";
            txCategory = codeIsEmpty ? TRANSACTION_TYPES.SENT_ETHER : TRANSACTION_TYPES.CONTRACT_INTERACTION;
        }
        return {
            transactionCategory: txCategory,
            code
        };
    }
    async getDefaultGasLimit(txParams) {
        const { transactionCategory  } = await this.determineTransactionCategory(_objectSpread$1({}, txParams));
        if (txParams.gas) return txParams.gas;
        if (txParams.to && transactionCategory === TRANSACTION_TYPES.SENT_ETHER) {
            // if there's data in the params, but there's no contract code, it's not a valid transaction
            if (txParams.data) throw Error("TxGasUtil - Trying to call a function on a non-contract address");
            const TWENTY_ONE_THOUSAND = 21000;
            // This is a standard ether simple send, gas requirement is exactly 21k
            return (0, _util.addHexPrefix)(TWENTY_ONE_THOUSAND.toString(16));
        }
        const { blockGasLimit , estimatedGasHex  } = await this.analyzeGasUsage(txParams);
        // add additional gas buffer to our estimation for safety
        const gasLimit = this.addGasBuffer((0, _util.addHexPrefix)(estimatedGasHex), blockGasLimit);
        return gasLimit;
    }
}
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
class EthereumPrivateKeyProvider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread(_objectSpread({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155
                })
            },
            state
        });
    }
    async enable() {
        if (!this.state.privateKey) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Private key is not found in state, plz pass it in constructor state param",
            code: 4902
        });
        await this.setupProvider(this.state.privateKey);
        return this._providerEngineProxy.request({
            method: "eth_accounts"
        });
    }
    async setupProvider(privKey) {
        const txFormatter = new TransactionFormatter({
            getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
        });
        const providerHandlers = getProviderHandlers({
            txFormatter,
            privKey,
            getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
        });
        const ethMiddleware = createEthMiddleware(providerHandlers);
        const chainSwitchMiddleware = this.getChainSwitchMiddleware();
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        // Not a partial anymore because of checks in ctor
        const { networkMiddleware  } = createJsonRpcClient(this.config.chainConfig);
        engine.push(ethMiddleware);
        engine.push(chainSwitchMiddleware);
        engine.push(this.getAccountMiddleware());
        engine.push(networkMiddleware);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
        await txFormatter.init();
        await this.lookupNetwork();
    }
    async updateAccount(params) {
        if (!this._providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const existingKey = await this._providerEngineProxy.request({
            method: "eth_private_key"
        });
        if (existingKey !== params.privateKey) {
            await this.setupProvider(params.privateKey);
            this._providerEngineProxy.emit("accountsChanged", {
                accounts: await this._providerEngineProxy.request({
                    method: "eth_accounts"
                })
            });
        }
    }
    async switchChain(params) {
        if (!this._providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const chainConfig = this.getChainConfig(params.chainId);
        this.update({
            chainId: "loading"
        });
        this.configure({
            chainConfig
        });
        const privKey = await this._providerEngineProxy.request({
            method: "eth_private_key"
        });
        await this.setupProvider(privKey);
    }
    async lookupNetwork() {
        if (!this._providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const { chainId  } = this.config.chainConfig;
        if (!chainId) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("chainId is required while lookupNetwork");
        const network = await this._providerEngineProxy.request({
            method: "net_version",
            params: []
        });
        if (parseInt(chainId, 16) !== parseInt(network, 10)) throw (0, _ethRpcErrors.ethErrors).provider.chainDisconnected(`Invalid network, net_version is: ${network}`);
        if (this.state.chainId !== chainId) {
            this._providerEngineProxy.emit("chainChanged", chainId);
            this._providerEngineProxy.emit("connect", {
                chainId
            });
        }
        this.update({
            chainId
        });
        return network;
    }
    getChainSwitchMiddleware() {
        const chainSwitchHandlers = {
            addChain: async (params)=>{
                const { chainId , chainName , rpcUrls , blockExplorerUrls , nativeCurrency  } = params;
                this.addChain({
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).EIP155,
                    chainId,
                    ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "ETH",
                    tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Ether",
                    displayName: chainName,
                    rpcTarget: rpcUrls[0],
                    blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || "",
                    decimals: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.decimals) || 18
                });
            },
            switchChain: async (params)=>{
                const { chainId  } = params;
                await this.switchChain({
                    chainId
                });
            }
        };
        const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
        return chainSwitchMiddleware;
    }
    getAccountMiddleware() {
        const accountHandlers = {
            updatePrivatekey: async (params)=>{
                const { privateKey  } = params;
                await this.updateAccount({
                    privateKey
                });
            }
        };
        return createAccountMiddleware(accountHandlers);
    }
}
(0, _definePropertyDefault.default)(EthereumPrivateKeyProvider, "getProviderInstance", async (params)=>{
    const providerFactory = new EthereumPrivateKeyProvider({
        config: {
            chainConfig: params.chainConfig
        }
    });
    await providerFactory.setupProvider(params.privKey);
    return providerFactory;
});

},{"f1df8fb16f84b1f7":"fCgem","@babel/runtime/helpers/defineProperty":"4x6r7","@toruslabs/base-controllers":"bWbve","@toruslabs/openlogin-jrpc":"hHcJo","@web3auth/base":"7HmU4","@web3auth/base-provider":"h0enr","eth-rpc-errors":"apfts","@walletconnect/utils":"adkki","@ethereumjs/tx":"fCWZv","@ethereumjs/util":"2ctjb","@metamask/eth-sig-util":"bhyIZ","@toruslabs/http-helpers":"71C66","assert":"f3tT4","jsonschema":"1FHqv","bignumber.js":"57qkX","@ethereumjs/common":"4czRJ","bn.js":"VopIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adkki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE10", ()=>G);
parcelHelpers.export(exports, "BASE16", ()=>f);
parcelHelpers.export(exports, "BASE64", ()=>K);
parcelHelpers.export(exports, "COLON", ()=>kn);
parcelHelpers.export(exports, "DEFAULT_DEPTH", ()=>Z);
parcelHelpers.export(exports, "EMPTY_SPACE", ()=>L);
parcelHelpers.export(exports, "ENV_MAP", ()=>_);
parcelHelpers.export(exports, "ONE_THOUSAND", ()=>Ln);
parcelHelpers.export(exports, "REACT_NATIVE_PRODUCT", ()=>Ue);
parcelHelpers.export(exports, "RELAYER_DEFAULT_PROTOCOL", ()=>xe);
parcelHelpers.export(exports, "SDK_TYPE", ()=>we);
parcelHelpers.export(exports, "SLASH", ()=>_e);
parcelHelpers.export(exports, "TYPE_0", ()=>Y);
parcelHelpers.export(exports, "TYPE_1", ()=>U);
parcelHelpers.export(exports, "UTF8", ()=>k);
parcelHelpers.export(exports, "appendToQueryString", ()=>$e);
parcelHelpers.export(exports, "assertType", ()=>zn);
parcelHelpers.export(exports, "buildApprovedNamespaces", ()=>Ot);
parcelHelpers.export(exports, "calcExpiry", ()=>rt);
parcelHelpers.export(exports, "capitalize", ()=>Qn);
parcelHelpers.export(exports, "capitalizeWord", ()=>Le);
parcelHelpers.export(exports, "createDelayedPromise", ()=>Zn);
parcelHelpers.export(exports, "createExpiringPromise", ()=>Xn);
parcelHelpers.export(exports, "decodeTypeByte", ()=>j);
parcelHelpers.export(exports, "decrypt", ()=>Cn);
parcelHelpers.export(exports, "deriveSymKey", ()=>Un);
parcelHelpers.export(exports, "deserialize", ()=>Q);
parcelHelpers.export(exports, "encodeTypeByte", ()=>Se);
parcelHelpers.export(exports, "encrypt", ()=>jn);
parcelHelpers.export(exports, "engineEvent", ()=>st);
parcelHelpers.export(exports, "enumify", ()=>Jn);
parcelHelpers.export(exports, "formatAccountId", ()=>Ee);
parcelHelpers.export(exports, "formatAccountWithChain", ()=>gn);
parcelHelpers.export(exports, "formatChainId", ()=>ye);
parcelHelpers.export(exports, "formatExpirerTarget", ()=>ne);
parcelHelpers.export(exports, "formatIdTarget", ()=>nt);
parcelHelpers.export(exports, "formatMessage", ()=>Pn);
parcelHelpers.export(exports, "formatMessageContext", ()=>Bn);
parcelHelpers.export(exports, "formatRelayParams", ()=>ze);
parcelHelpers.export(exports, "formatRelayRpcUrl", ()=>Hn);
parcelHelpers.export(exports, "formatTopicTarget", ()=>et);
parcelHelpers.export(exports, "formatUA", ()=>Me);
parcelHelpers.export(exports, "formatUri", ()=>pt);
parcelHelpers.export(exports, "generateKeyPair", ()=>Rn);
parcelHelpers.export(exports, "generateRandomBytes32", ()=>An);
parcelHelpers.export(exports, "getAccountsChains", ()=>T);
parcelHelpers.export(exports, "getAccountsFromNamespaces", ()=>bn);
parcelHelpers.export(exports, "getAddressFromAccount", ()=>he);
parcelHelpers.export(exports, "getAddressesFromAccounts", ()=>Nn);
parcelHelpers.export(exports, "getAppMetadata", ()=>xn);
parcelHelpers.export(exports, "getChainFromAccount", ()=>ve);
parcelHelpers.export(exports, "getChainsFromAccounts", ()=>ge);
parcelHelpers.export(exports, "getChainsFromNamespace", ()=>V);
parcelHelpers.export(exports, "getChainsFromNamespaces", ()=>On);
parcelHelpers.export(exports, "getChainsFromRequiredNamespaces", ()=>Sn);
parcelHelpers.export(exports, "getDidAddress", ()=>be);
parcelHelpers.export(exports, "getDidAddressSegments", ()=>M);
parcelHelpers.export(exports, "getDidChainId", ()=>Ne);
parcelHelpers.export(exports, "getEnvironment", ()=>ee);
parcelHelpers.export(exports, "getHttpUrl", ()=>qn);
parcelHelpers.export(exports, "getInternalError", ()=>N);
parcelHelpers.export(exports, "getJavascriptID", ()=>Ve);
parcelHelpers.export(exports, "getJavascriptOS", ()=>De);
parcelHelpers.export(exports, "getLastItems", ()=>ke);
parcelHelpers.export(exports, "getNamespacedDidChainId", ()=>In);
parcelHelpers.export(exports, "getNamespacesChains", ()=>Ye);
parcelHelpers.export(exports, "getNamespacesEventsForChainId", ()=>Je);
parcelHelpers.export(exports, "getNamespacesMethodsForChainId", ()=>We);
parcelHelpers.export(exports, "getRelayClientMetadata", ()=>Fn);
parcelHelpers.export(exports, "getRelayProtocolApi", ()=>ct);
parcelHelpers.export(exports, "getRelayProtocolName", ()=>it);
parcelHelpers.export(exports, "getRequiredNamespacesFromNamespaces", ()=>bt);
parcelHelpers.export(exports, "getSdkError", ()=>R);
parcelHelpers.export(exports, "getUniqueValues", ()=>B);
parcelHelpers.export(exports, "hasOverlap", ()=>b);
parcelHelpers.export(exports, "hashKey", ()=>_n);
parcelHelpers.export(exports, "hashMessage", ()=>wn);
parcelHelpers.export(exports, "isBrowser", ()=>Ce);
parcelHelpers.export(exports, "isCaipNamespace", ()=>te);
parcelHelpers.export(exports, "isConformingNamespaces", ()=>cn);
parcelHelpers.export(exports, "isExpired", ()=>ot);
parcelHelpers.export(exports, "isNode", ()=>X);
parcelHelpers.export(exports, "isProposalStruct", ()=>Rt);
parcelHelpers.export(exports, "isReactNative", ()=>je);
parcelHelpers.export(exports, "isSessionCompatible", ()=>Pt);
parcelHelpers.export(exports, "isSessionStruct", ()=>At);
parcelHelpers.export(exports, "isTypeOneEnvelope", ()=>Dn);
parcelHelpers.export(exports, "isUndefined", ()=>S);
parcelHelpers.export(exports, "isValidAccountId", ()=>Ze);
parcelHelpers.export(exports, "isValidAccounts", ()=>nn);
parcelHelpers.export(exports, "isValidActions", ()=>rn);
parcelHelpers.export(exports, "isValidArray", ()=>C);
parcelHelpers.export(exports, "isValidChainId", ()=>H);
parcelHelpers.export(exports, "isValidChains", ()=>Xe);
parcelHelpers.export(exports, "isValidController", ()=>Ut);
parcelHelpers.export(exports, "isValidErrorReason", ()=>$t);
parcelHelpers.export(exports, "isValidEvent", ()=>Mt);
parcelHelpers.export(exports, "isValidId", ()=>jt);
parcelHelpers.export(exports, "isValidNamespaceAccounts", ()=>tn);
parcelHelpers.export(exports, "isValidNamespaceActions", ()=>se);
parcelHelpers.export(exports, "isValidNamespaceChains", ()=>en);
parcelHelpers.export(exports, "isValidNamespaceMethodsOrEvents", ()=>oe);
parcelHelpers.export(exports, "isValidNamespaces", ()=>on);
parcelHelpers.export(exports, "isValidNamespacesChainId", ()=>Kt);
parcelHelpers.export(exports, "isValidNamespacesEvent", ()=>Lt);
parcelHelpers.export(exports, "isValidNamespacesRequest", ()=>kt);
parcelHelpers.export(exports, "isValidNumber", ()=>F);
parcelHelpers.export(exports, "isValidObject", ()=>x);
parcelHelpers.export(exports, "isValidParams", ()=>Ct);
parcelHelpers.export(exports, "isValidRelay", ()=>sn);
parcelHelpers.export(exports, "isValidRelays", ()=>wt);
parcelHelpers.export(exports, "isValidRequest", ()=>Dt);
parcelHelpers.export(exports, "isValidRequestExpiry", ()=>Ht);
parcelHelpers.export(exports, "isValidRequiredNamespaces", ()=>_t);
parcelHelpers.export(exports, "isValidResponse", ()=>Vt);
parcelHelpers.export(exports, "isValidString", ()=>m);
parcelHelpers.export(exports, "isValidUrl", ()=>Tt);
parcelHelpers.export(exports, "mapEntries", ()=>Wn);
parcelHelpers.export(exports, "mapToObj", ()=>Gn);
parcelHelpers.export(exports, "mergeArrays", ()=>O);
parcelHelpers.export(exports, "normalizeNamespaces", ()=>re);
parcelHelpers.export(exports, "objToMap", ()=>Yn);
parcelHelpers.export(exports, "parseAccountId", ()=>z);
parcelHelpers.export(exports, "parseChainId", ()=>me);
parcelHelpers.export(exports, "parseContextNames", ()=>Ke);
parcelHelpers.export(exports, "parseExpirerTarget", ()=>tt);
parcelHelpers.export(exports, "parseNamespaceKey", ()=>Qe);
parcelHelpers.export(exports, "parseRelayParams", ()=>qe);
parcelHelpers.export(exports, "parseUri", ()=>ft);
parcelHelpers.export(exports, "serialize", ()=>Ie);
parcelHelpers.export(exports, "validateDecoding", ()=>$n);
parcelHelpers.export(exports, "validateEncoding", ()=>Pe);
var _chacha20Poly1305 = require("@stablelib/chacha20poly1305");
var _hkdf = require("@stablelib/hkdf");
var _random = require("@stablelib/random");
var _sha256 = require("@stablelib/sha256");
var _x25519 = require("@stablelib/x25519");
var _uint8Arrays = require("uint8arrays");
var _detectBrowser = require("detect-browser");
var _time = require("@walletconnect/time");
var _windowGetters = require("@walletconnect/window-getters");
var _windowMetadata = require("@walletconnect/window-metadata");
var _queryString = require("query-string");
var _relayApi = require("@walletconnect/relay-api");
var process = require("287c7161142fe75d");
const D = ":";
function me(e) {
    const [n, t] = e.split(D);
    return {
        namespace: n,
        reference: t
    };
}
function ye(e) {
    const { namespace: n , reference: t  } = e;
    return [
        n,
        t
    ].join(D);
}
function z(e) {
    const [n, t, r] = e.split(D);
    return {
        namespace: n,
        reference: t,
        address: r
    };
}
function Ee(e) {
    const { namespace: n , reference: t , address: r  } = e;
    return [
        n,
        t,
        r
    ].join(D);
}
function B(e, n) {
    const t = [];
    return e.forEach((r)=>{
        const o = n(r);
        t.includes(o) || t.push(o);
    }), t;
}
function he(e) {
    const { address: n  } = z(e);
    return n;
}
function ve(e) {
    const { namespace: n , reference: t  } = z(e);
    return ye({
        namespace: n,
        reference: t
    });
}
function gn(e, n) {
    const { namespace: t , reference: r  } = me(n);
    return Ee({
        namespace: t,
        reference: r,
        address: e
    });
}
function Nn(e) {
    return B(e, he);
}
function ge(e) {
    return B(e, ve);
}
function bn(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...o.accounts);
    }), t;
}
function On(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...ge(o.accounts));
    }), t;
}
function Sn(e, n = []) {
    const t = [];
    return Object.keys(e).forEach((r)=>{
        if (n.length && !n.includes(r)) return;
        const o = e[r];
        t.push(...V(r, o));
    }), t;
}
function V(e, n) {
    return e.includes(":") ? [
        e
    ] : n.chains || [];
}
const M = (e)=>e?.split(":"), Ne = (e)=>{
    const n = e && M(e);
    if (n) return n[3];
}, In = (e)=>{
    const n = e && M(e);
    if (n) return n[2] + ":" + n[3];
}, be = (e)=>{
    const n = e && M(e);
    if (n) return n.pop();
}, Pn = (e, n)=>{
    const t = `${e.domain} wants you to sign in with your Ethereum account:`, r = be(n), o = e.statement, s = `URI: ${e.aud}`, c = `Version: ${e.version}`, d = `Chain ID: ${Ne(n)}`, l = `Nonce: ${e.nonce}`, i = `Issued At: ${e.iat}`, u = e.resources && e.resources.length > 0 ? `Resources:
${e.resources.map((a)=>`- ${a}`).join(`
`)}` : void 0;
    return [
        t,
        r,
        "",
        o,
        "",
        s,
        c,
        d,
        l,
        i,
        u
    ].filter((a)=>a != null).join(`
`);
}, G = "base10", f = "base16", K = "base64pad", k = "utf8", Y = 0, U = 1, Tn = 0, Oe = 1, W = 12, J = 32;
function Rn() {
    const e = _x25519.generateKeyPair();
    return {
        privateKey: (0, _uint8Arrays.toString)(e.secretKey, f),
        publicKey: (0, _uint8Arrays.toString)(e.publicKey, f)
    };
}
function An() {
    const e = (0, _random.randomBytes)(J);
    return (0, _uint8Arrays.toString)(e, f);
}
function Un(e, n) {
    const t = _x25519.sharedKey((0, _uint8Arrays.fromString)(e, f), (0, _uint8Arrays.fromString)(n, f)), r = new (0, _hkdf.HKDF)((0, _sha256.SHA256), t).expand(J);
    return (0, _uint8Arrays.toString)(r, f);
}
function _n(e) {
    const n = (0, _sha256.hash)((0, _uint8Arrays.fromString)(e, f));
    return (0, _uint8Arrays.toString)(n, f);
}
function wn(e) {
    const n = (0, _sha256.hash)((0, _uint8Arrays.fromString)(e, k));
    return (0, _uint8Arrays.toString)(n, f);
}
function Se(e) {
    return (0, _uint8Arrays.fromString)(`${e}`, G);
}
function j(e) {
    return Number((0, _uint8Arrays.toString)(e, G));
}
function jn(e) {
    const n = Se(typeof e.type < "u" ? e.type : Y);
    if (j(n) === U && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof e.senderPublicKey < "u" ? (0, _uint8Arrays.fromString)(e.senderPublicKey, f) : void 0, r = typeof e.iv < "u" ? (0, _uint8Arrays.fromString)(e.iv, f) : (0, _random.randomBytes)(W), o = new (0, _chacha20Poly1305.ChaCha20Poly1305)((0, _uint8Arrays.fromString)(e.symKey, f)).seal(r, (0, _uint8Arrays.fromString)(e.message, k));
    return Ie({
        type: n,
        sealed: o,
        iv: r,
        senderPublicKey: t
    });
}
function Cn(e) {
    const n = new (0, _chacha20Poly1305.ChaCha20Poly1305)((0, _uint8Arrays.fromString)(e.symKey, f)), { sealed: t , iv: r  } = Q(e.encoded), o = n.open(r, t);
    if (o === null) throw new Error("Failed to decrypt");
    return (0, _uint8Arrays.toString)(o, k);
}
function Ie(e) {
    if (j(e.type) === U) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, _uint8Arrays.toString)((0, _uint8Arrays.concat)([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), K);
    }
    return (0, _uint8Arrays.toString)((0, _uint8Arrays.concat)([
        e.type,
        e.iv,
        e.sealed
    ]), K);
}
function Q(e) {
    const n = (0, _uint8Arrays.fromString)(e, K), t = n.slice(Tn, Oe), r = Oe;
    if (j(t) === U) {
        const d = r + J, l = d + W, i = n.slice(r, d), u = n.slice(d, l), a = n.slice(l);
        return {
            type: t,
            sealed: a,
            iv: u,
            senderPublicKey: i
        };
    }
    const o = r + W, s = n.slice(r, o), c = n.slice(o);
    return {
        type: t,
        sealed: c,
        iv: s
    };
}
function $n(e, n) {
    const t = Q(e);
    return Pe({
        type: j(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? (0, _uint8Arrays.toString)(t.senderPublicKey, f) : void 0,
        receiverPublicKey: n?.receiverPublicKey
    });
}
function Pe(e) {
    const n = e?.type || Y;
    if (n === U) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: n,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function Dn(e) {
    return e.type === U && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Vn = Object.defineProperty, Te = Object.getOwnPropertySymbols, Mn = Object.prototype.hasOwnProperty, Kn = Object.prototype.propertyIsEnumerable, Re = (e, n, t)=>n in e ? Vn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, Ae = (e, n)=>{
    for(var t in n || (n = {}))Mn.call(n, t) && Re(e, t, n[t]);
    if (Te) for (var t of Te(n))Kn.call(n, t) && Re(e, t, n[t]);
    return e;
};
const Ue = "ReactNative", _ = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, L = " ", kn = ":", _e = "/", Z = 2, Ln = 1e3, we = "js";
function X() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function je() {
    return !(0, _windowGetters.getDocument)() && !!(0, _windowGetters.getNavigator)() && navigator.product === Ue;
}
function Ce() {
    return !X() && !!(0, _windowGetters.getNavigator)();
}
function ee() {
    return je() ? _.reactNative : X() ? _.node : Ce() ? _.browser : _.unknown;
}
function $e(e, n) {
    let t = _queryString.parse(e);
    return t = Ae(Ae({}, t), n), e = _queryString.stringify(t), e;
}
function xn() {
    return (0, _windowMetadata.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function Fn(e, n) {
    var t;
    const r = ee(), o = {
        protocol: e,
        version: n,
        env: r
    };
    return r === "browser" && (o.host = ((t = (0, _windowGetters.getLocation)()) == null ? void 0 : t.host) || "unknown"), o;
}
function De() {
    const e = (0, _detectBrowser.detect)();
    if (e === null) return "unknown";
    const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        n,
        e.name,
        e.version
    ].join("-") : [
        n,
        e.version
    ].join("-");
}
function Ve() {
    var e;
    const n = ee();
    return n === _.browser ? [
        n,
        ((e = (0, _windowGetters.getLocation)()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : n;
}
function Me(e, n, t) {
    const r = De(), o = Ve();
    return [
        [
            e,
            n
        ].join("-"),
        [
            we,
            t
        ].join("-"),
        r,
        o
    ].join("/");
}
function Hn({ protocol: e , version: n , relayUrl: t , sdkVersion: r , auth: o , projectId: s , useOnCloseEvent: c  }) {
    const d = t.split("?"), l = Me(e, n, r), i = {
        auth: o,
        ua: l,
        projectId: s,
        useOnCloseEvent: c || void 0
    }, u = $e(d[1] || "", i);
    return d[0] + "?" + u;
}
function qn(e) {
    let n = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const t = typeof n < "u" ? e.split("://")[1] : e;
    return n = n === "wss" ? "https" : "http", [
        n,
        t
    ].join("://");
}
function zn(e, n, t) {
    if (!e[n] || typeof e[n] !== t) throw new Error(`Missing or invalid "${n}" param`);
}
function Ke(e, n = Z) {
    return ke(e.split(_e), n);
}
function Bn(e) {
    return Ke(e).join(L);
}
function b(e, n) {
    return e.filter((t)=>n.includes(t)).length === e.length;
}
function ke(e, n = Z) {
    return e.slice(Math.max(e.length - n, 0));
}
function Gn(e) {
    return Object.fromEntries(e.entries());
}
function Yn(e) {
    return new Map(Object.entries(e));
}
function Wn(e, n) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        t[r] = n(e[r]);
    }), t;
}
const Jn = (e)=>e;
function Le(e) {
    return e.trim().replace(/^\w/, (n)=>n.toUpperCase());
}
function Qn(e) {
    return e.split(L).map((n)=>Le(n)).join(L);
}
function Zn(e = (0, _time.FIVE_MINUTES), n) {
    const t = (0, _time.toMiliseconds)(e || (0, _time.FIVE_MINUTES));
    let r, o, s;
    return {
        resolve: (c)=>{
            s && r && (clearTimeout(s), r(c));
        },
        reject: (c)=>{
            s && o && (clearTimeout(s), o(c));
        },
        done: ()=>new Promise((c, d)=>{
                s = setTimeout(()=>{
                    d(new Error(n));
                }, t), r = c, o = d;
            })
    };
}
function Xn(e, n, t) {
    return new Promise(async (r, o)=>{
        const s = setTimeout(()=>o(new Error(t)), n);
        try {
            const c = await e;
            r(c);
        } catch (c) {
            o(c);
        }
        clearTimeout(s);
    });
}
function ne(e, n) {
    if (typeof n == "string" && n.startsWith(`${e}:`)) return n;
    if (e.toLowerCase() === "topic") {
        if (typeof n != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${n}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof n != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${n}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function et(e) {
    return ne("topic", e);
}
function nt(e) {
    return ne("id", e);
}
function tt(e) {
    const [n, t] = e.split(":"), r = {
        id: void 0,
        topic: void 0
    };
    if (n === "topic" && typeof t == "string") r.topic = t;
    else if (n === "id" && Number.isInteger(Number(t))) r.id = Number(t);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${n}:${t}`);
    return r;
}
function rt(e, n) {
    return (0, _time.fromMiliseconds)((n || Date.now()) + (0, _time.toMiliseconds)(e));
}
function ot(e) {
    return Date.now() >= (0, _time.toMiliseconds)(e);
}
function st(e, n) {
    return `${e}${n ? `:${n}` : ""}`;
}
function O(e = [], n = []) {
    return [
        ...new Set([
            ...e,
            ...n
        ])
    ];
}
const xe = "irn";
function it(e) {
    return e?.relay || {
        protocol: xe
    };
}
function ct(e) {
    const n = (0, _relayApi.RELAY_JSONRPC)[e];
    if (typeof n > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return n;
}
var at = Object.defineProperty, Fe = Object.getOwnPropertySymbols, ut = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable, He = (e, n, t)=>n in e ? at(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, lt = (e, n)=>{
    for(var t in n || (n = {}))ut.call(n, t) && He(e, t, n[t]);
    if (Fe) for (var t of Fe(n))dt.call(n, t) && He(e, t, n[t]);
    return e;
};
function qe(e, n = "-") {
    const t = {}, r = "relay" + n;
    return Object.keys(e).forEach((o)=>{
        if (o.startsWith(r)) {
            const s = o.replace(r, ""), c = e[o];
            t[s] = c;
        }
    }), t;
}
function ft(e) {
    const n = e.indexOf(":"), t = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, n), o = e.substring(n + 1, t).split("@"), s = typeof t < "u" ? e.substring(t) : "", c = _queryString.parse(s);
    return {
        protocol: r,
        topic: o[0],
        version: parseInt(o[1], 10),
        symKey: c.symKey,
        relay: qe(c)
    };
}
function ze(e, n = "-") {
    const t = "relay", r = {};
    return Object.keys(e).forEach((o)=>{
        const s = t + n + o;
        e[o] && (r[s] = e[o]);
    }), r;
}
function pt(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + _queryString.stringify(lt({
        symKey: e.symKey
    }, ze(e.relay)));
}
var mt = Object.defineProperty, yt = Object.defineProperties, Et = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, ht = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, Ge = (e, n, t)=>n in e ? mt(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t, gt = (e, n)=>{
    for(var t in n || (n = {}))ht.call(n, t) && Ge(e, t, n[t]);
    if (Be) for (var t of Be(n))vt.call(n, t) && Ge(e, t, n[t]);
    return e;
}, Nt = (e, n)=>yt(e, Et(n));
function T(e) {
    const n = [];
    return e.forEach((t)=>{
        const [r, o] = t.split(":");
        n.push(`${r}:${o}`);
    }), n;
}
function Ye(e) {
    const n = [];
    return Object.values(e).forEach((t)=>{
        n.push(...T(t.accounts));
    }), n;
}
function We(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        T(r.accounts).includes(n) && t.push(...r.methods);
    }), t;
}
function Je(e, n) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        T(r.accounts).includes(n) && t.push(...r.events);
    }), t;
}
function bt(e, n) {
    const t = on(e, n);
    if (t) throw new Error(t.message);
    const r = {};
    for (const [o, s] of Object.entries(e))r[o] = {
        methods: s.methods,
        events: s.events,
        chains: s.accounts.map((c)=>`${c.split(":")[0]}:${c.split(":")[1]}`)
    };
    return r;
}
function Ot(e) {
    const { proposal: { requiredNamespaces: n , optionalNamespaces: t = {}  } , supportedNamespaces: r  } = e, o = re(n), s = re(t), c = {};
    Object.keys(r).forEach((i)=>{
        const u = r[i].chains, a = r[i].methods, g = r[i].events, A = r[i].accounts;
        c[i] = {
            chains: u,
            methods: a,
            events: g,
            accounts: A
        };
    });
    const d = cn(n, c, "approve()");
    if (d) throw new Error(d.message);
    const l = {};
    return Object.keys(o).forEach((i)=>{
        const u = r[i].chains.filter((v)=>{
            var p, y;
            return (y = (p = o[i]) == null ? void 0 : p.chains) == null ? void 0 : y.includes(v);
        }), a = r[i].methods.filter((v)=>{
            var p, y;
            return (y = (p = o[i]) == null ? void 0 : p.methods) == null ? void 0 : y.includes(v);
        }), g = r[i].events.filter((v)=>{
            var p, y;
            return (y = (p = o[i]) == null ? void 0 : p.events) == null ? void 0 : y.includes(v);
        }), A = u.map((v)=>r[i].accounts.filter((p)=>p.includes(v))).flat();
        l[i] = {
            chains: u,
            methods: a,
            events: g,
            accounts: A
        };
    }), Object.keys(s).forEach((i)=>{
        var u, a, g, A, v, p;
        if (!r[i]) return;
        const y = (a = (u = s[i]) == null ? void 0 : u.chains) == null ? void 0 : a.filter((I)=>r[i].chains.includes(I)), un = r[i].methods.filter((I)=>{
            var P, w;
            return (w = (P = s[i]) == null ? void 0 : P.methods) == null ? void 0 : w.includes(I);
        }), dn = r[i].events.filter((I)=>{
            var P, w;
            return (w = (P = s[i]) == null ? void 0 : P.events) == null ? void 0 : w.includes(I);
        }), ln = y?.map((I)=>r[i].accounts.filter((P)=>P.includes(I))).flat();
        l[i] = {
            chains: O((g = l[i]) == null ? void 0 : g.chains, y),
            methods: O((A = l[i]) == null ? void 0 : A.methods, un),
            events: O((v = l[i]) == null ? void 0 : v.events, dn),
            accounts: O((p = l[i]) == null ? void 0 : p.accounts, ln)
        };
    }), l;
}
function te(e) {
    return e.includes(":");
}
function Qe(e) {
    return te(e) ? e.split(":")[0] : e;
}
function re(e) {
    var n, t, r;
    const o = {};
    if (!x(e)) return o;
    for (const [s, c] of Object.entries(e)){
        const d = te(s) ? [
            s
        ] : c.chains, l = c.methods || [], i = c.events || [], u = Qe(s);
        o[u] = Nt(gt({}, o[u]), {
            chains: O(d, (n = o[u]) == null ? void 0 : n.chains),
            methods: O(l, (t = o[u]) == null ? void 0 : t.methods),
            events: O(i, (r = o[u]) == null ? void 0 : r.events)
        });
    }
    return o;
}
const St = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, It = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function N(e, n) {
    const { message: t , code: r  } = It[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function R(e, n) {
    const { message: t , code: r  } = St[e];
    return {
        message: n ? `${t} ${n}` : t,
        code: r
    };
}
function C(e, n) {
    return Array.isArray(e) ? typeof n < "u" && e.length ? e.every(n) : !0 : !1;
}
function x(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function S(e) {
    return typeof e > "u";
}
function m(e, n) {
    return n && S(e) ? !0 : typeof e == "string" && Boolean(e.trim().length);
}
function F(e, n) {
    return n && S(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Pt(e, n) {
    const { requiredNamespaces: t  } = n, r = Object.keys(e.namespaces), o = Object.keys(t);
    let s = !0;
    return b(o, r) ? (r.forEach((c)=>{
        const { accounts: d , methods: l , events: i  } = e.namespaces[c], u = T(d), a = t[c];
        (!b(V(c, a), u) || !b(a.methods, l) || !b(a.events, i)) && (s = !1);
    }), s) : !1;
}
function H(e) {
    return m(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Ze(e) {
    if (m(e, !1) && e.includes(":")) {
        const n = e.split(":");
        if (n.length === 3) {
            const t = n[0] + ":" + n[1];
            return !!n[2] && H(t);
        }
    }
    return !1;
}
function Tt(e) {
    if (m(e, !1)) try {
        return typeof new URL(e) < "u";
    } catch  {
        return !1;
    }
    return !1;
}
function Rt(e) {
    var n;
    return (n = e?.proposer) == null ? void 0 : n.publicKey;
}
function At(e) {
    return e?.topic;
}
function Ut(e, n) {
    let t = null;
    return m(e?.publicKey, !1) || (t = N("MISSING_OR_INVALID", `${n} controller public key should be a string`)), t;
}
function oe(e) {
    let n = !0;
    return C(e) ? e.length && (n = e.every((t)=>m(t, !1))) : n = !1, n;
}
function Xe(e, n, t) {
    let r = null;
    return C(n) ? n.forEach((o)=>{
        r || (!H(o) || !o.includes(e)) && (r = R("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`));
    }) : r = R("UNSUPPORTED_CHAINS", `${t}, chains ${n} should be an array of strings conforming to "namespace:chainId" format`), r;
}
function en(e, n) {
    let t = null;
    return Object.entries(e).forEach(([r, o])=>{
        if (t) return;
        const s = Xe(r, V(r, o), `${n} requiredNamespace`);
        s && (t = s);
    }), t;
}
function nn(e, n) {
    let t = null;
    return C(e) ? e.forEach((r)=>{
        t || Ze(r) || (t = R("UNSUPPORTED_ACCOUNTS", `${n}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
    }) : t = R("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t;
}
function tn(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = nn(r?.accounts, `${n} namespace`);
        o && (t = o);
    }), t;
}
function rn(e, n) {
    let t = null;
    return oe(e?.methods) ? oe(e?.events) || (t = R("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : t = R("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), t;
}
function se(e, n) {
    let t = null;
    return Object.values(e).forEach((r)=>{
        if (t) return;
        const o = rn(r, `${n}, namespace`);
        o && (t = o);
    }), t;
}
function _t(e, n, t) {
    let r = null;
    if (e && x(e)) {
        const o = se(e, n);
        o && (r = o);
        const s = en(e, n);
        s && (r = s);
    } else r = N("MISSING_OR_INVALID", `${n}, ${t} should be an object with data`);
    return r;
}
function on(e, n) {
    let t = null;
    if (e && x(e)) {
        const r = se(e, n);
        r && (t = r);
        const o = tn(e, n);
        o && (t = o);
    } else t = N("MISSING_OR_INVALID", `${n}, namespaces should be an object with data`);
    return t;
}
function sn(e) {
    return m(e.protocol, !0);
}
function wt(e, n) {
    let t = !1;
    return n && !e ? t = !0 : e && C(e) && e.length && e.forEach((r)=>{
        t = sn(r);
    }), t;
}
function jt(e) {
    return typeof e == "number";
}
function Ct(e) {
    return typeof e < "u" && true;
}
function $t(e) {
    return !(!e || typeof e != "object" || !e.code || !F(e.code, !1) || !e.message || !m(e.message, !1));
}
function Dt(e) {
    return !(S(e) || !m(e.method, !1));
}
function Vt(e) {
    return !(S(e) || S(e.result) && S(e.error) || !F(e.id, !1) || !m(e.jsonrpc, !1));
}
function Mt(e) {
    return !(S(e) || !m(e.name, !1));
}
function Kt(e, n) {
    return !(!H(n) || !Ye(e).includes(n));
}
function kt(e, n, t) {
    return m(t, !1) ? We(e, n).includes(t) : !1;
}
function Lt(e, n, t) {
    return m(t, !1) ? Je(e, n).includes(t) : !1;
}
function cn(e, n, t) {
    let r = null;
    const o = xt(e), s = Ft(n), c = Object.keys(o), d = Object.keys(s), l = an(Object.keys(e)), i = an(Object.keys(n)), u = l.filter((a)=>!i.includes(a));
    return u.length && (r = N("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(n).toString()}`)), b(c, d) || (r = N("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${d.toString()}`)), Object.keys(n).forEach((a)=>{
        if (!a.includes(":") || r) return;
        const g = T(n[a].accounts);
        g.includes(a) || (r = N("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${a}
        Required: ${a}
        Approved: ${g.toString()}`));
    }), c.forEach((a)=>{
        r || (b(o[a].methods, s[a].methods) ? b(o[a].events, s[a].events) || (r = N("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${a}`)) : r = N("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${a}`));
    }), r;
}
function xt(e) {
    const n = {};
    return Object.keys(e).forEach((t)=>{
        var r;
        t.includes(":") ? n[t] = e[t] : (r = e[t].chains) == null || r.forEach((o)=>{
            n[o] = {
                methods: e[t].methods,
                events: e[t].events
            };
        });
    }), n;
}
function an(e) {
    return [
        ...new Set(e.map((n)=>n.includes(":") ? n.split(":")[0] : n))
    ];
}
function Ft(e) {
    const n = {};
    return Object.keys(e).forEach((t)=>{
        if (t.includes(":")) n[t] = e[t];
        else {
            const r = T(e[t].accounts);
            r?.forEach((o)=>{
                n[o] = {
                    accounts: e[t].accounts.filter((s)=>s.includes(`${o}:`)),
                    methods: e[t].methods,
                    events: e[t].events
                };
            });
        }
    }), n;
}
function Ht(e, n) {
    return F(e, !1) && e <= n.max && e >= n.min;
}

},{"287c7161142fe75d":"d5jf4","@stablelib/chacha20poly1305":"lU2zl","@stablelib/hkdf":"6r0oT","@stablelib/random":"9Qs60","@stablelib/sha256":"fPm7j","@stablelib/x25519":"5xoxU","uint8arrays":"ctPgX","detect-browser":"2pU52","@walletconnect/time":"2hzsP","@walletconnect/window-getters":"7XcJM","@walletconnect/window-metadata":"ga1jf","query-string":"oefkS","@walletconnect/relay-api":"1SxNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lU2zl":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
var chacha_1 = require("921e55ffd324155c");
var poly1305_1 = require("92691c30b137e428");
var wipe_1 = require("f28df5ee48b608f8");
var binary_1 = require("8d775cd51211151");
var constant_time_1 = require("48e7d3a6832776af");
exports.KEY_LENGTH = 32;
exports.NONCE_LENGTH = 12;
exports.TAG_LENGTH = 16;
var ZEROS = new Uint8Array(16);
/**
 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in RFC7539.
 */ var ChaCha20Poly1305 = /** @class */ function() {
    /**
     * Creates a new instance with the given 32-byte key.
     */ function ChaCha20Poly1305(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */ ChaCha20Poly1305.prototype.seal = function(nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
        // and it will get incremented after generating the block, which is
        // exactly what we need: we only use the first 32 bytes of 64-byte
        // ChaCha block and discard the next 32 bytes.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Allocate space for sealed ciphertext.
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) throw new Error("ChaCha20Poly1305: incorrect destination length");
            result = dst;
        } else result = new Uint8Array(resultLength);
        // Encrypt plaintext.
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        // Authenticate.
        // XXX: can "simplify" here: pass full result (which is already padded
        // due to zeroes prepared for tag), and ciphertext length instead of
        // subarray of result.
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be of ciphertext length minus tag length),
     * the result will be put into it. Dst and plaintext must not overlap.
     */ ChaCha20Poly1305.prototype.open = function(nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) // TODO(dchest): should we throw here instead?
        return null;
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Authenticate.
        // XXX: can simplify and avoid allocation: since authenticate()
        // already allocates tag (from Poly1305.digest(), it can return)
        // it instead of copying to calculatedTag. But then in seal()
        // we'll need to copy it.
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        // Constant-time compare tags and return null if they differ.
        if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) return null;
        // Allocate space for decrypted plaintext.
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) throw new Error("ChaCha20Poly1305: incorrect destination length");
            result = dst;
        } else result = new Uint8Array(resultLength);
        // Decrypt.
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    ChaCha20Poly1305.prototype.clean = function() {
        wipe_1.wipe(this._key);
        return this;
    };
    ChaCha20Poly1305.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
        // Initialize Poly1305 with authKey.
        var h = new poly1305_1.Poly1305(authKey);
        // Authenticate padded associated data.
        if (associatedData) {
            h.update(associatedData);
            if (associatedData.length % 16 > 0) h.update(ZEROS.subarray(associatedData.length % 16));
        }
        // Authenticate padded ciphertext.
        h.update(ciphertext);
        if (ciphertext.length % 16 > 0) h.update(ZEROS.subarray(ciphertext.length % 16));
        // Authenticate length of associated data.
        // XXX: can avoid allocation here?
        var length = new Uint8Array(8);
        if (associatedData) binary_1.writeUint64LE(associatedData.length, length);
        h.update(length);
        // Authenticate length of ciphertext.
        binary_1.writeUint64LE(ciphertext.length, length);
        h.update(length);
        // Get tag and copy it into tagOut.
        var tag = h.digest();
        for(var i = 0; i < tag.length; i++)tagOut[i] = tag[i];
        // Cleanup.
        h.clean();
        wipe_1.wipe(tag);
        wipe_1.wipe(length);
    };
    return ChaCha20Poly1305;
}();
exports.ChaCha20Poly1305 = ChaCha20Poly1305;

},{"921e55ffd324155c":"kgOXq","92691c30b137e428":"hOj7F","f28df5ee48b608f8":"8owN2","8d775cd51211151":"92RWm","48e7d3a6832776af":"ccTzW"}],"kgOXq":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package chacha implements ChaCha stream cipher.
 */ var binary_1 = require("1a63126c7fb42472");
var wipe_1 = require("d6c3f0a551761f5d");
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
    var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
    var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
    var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
    var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
    var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
    var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
    var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
    var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
    var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
    var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
    var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for(var i = 0; i < ROUNDS; i += 2){
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 16 | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 20 | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 16 | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 20 | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 16 | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 20 | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 16 | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 20 | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> 24 | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> 25 | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> 24 | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> 25 | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> 24 | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> 25 | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> 24 | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> 25 | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 16 | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 20 | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 16 | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 20 | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 16 | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 20 | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 16 | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 20 | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> 24 | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> 25 | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> 24 | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> 25 | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> 24 | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> 25 | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> 24 | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> 25 | x5 << 7;
    }
    binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
    binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
    binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
    binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
    binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
    binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
    binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
    binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
    binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
    binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
    binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
    binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
    binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
    binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
    binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
    binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */ function streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) nonceInplaceCounterLength = 0;
    // We only support 256-bit keys.
    if (key.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (dst.length < src.length) throw new Error("ChaCha: destination is shorter than source");
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    } else {
        if (nonce.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for(var i = 0; i < src.length; i += 64){
        // Generate a block.
        core(block, nc, key);
        // XOR block bytes with src into dst.
        for(var j = i; j < i + 64 && j < src.length; j++)dst[j] = src[j] ^ block[j - i];
        // Increment counter.
        incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    wipe_1.wipe(block);
    if (nonceInplaceCounterLength === 0) // Cleanup counter.
    wipe_1.wipe(nc);
    return dst;
}
exports.streamXOR = streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */ function stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) nonceInplaceCounterLength = 0;
    wipe_1.wipe(dst);
    return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
exports.stream = stream;
function incrementCounter(counter, pos, len) {
    var carry = 1;
    while(len--){
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) throw new Error("ChaCha: counter overflow");
}

},{"1a63126c7fb42472":"92RWm","d6c3f0a551761f5d":"8owN2"}],"92RWm":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package binary provides functions for encoding and decoding numbers in byte arrays.
 */ var int_1 = require("befc558722f5aa59");
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */ function readInt16BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
exports.readInt16BE = readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */ function readUint16BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
exports.readUint16BE = readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */ function readInt16LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
exports.readInt16LE = readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */ function readUint16LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
exports.readUint16LE = readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */ function writeUint16BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(2);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
exports.writeUint16BE = writeUint16BE;
exports.writeInt16BE = writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */ function writeUint16LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(2);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
exports.writeUint16LE = writeUint16LE;
exports.writeInt16LE = writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */ function readInt32BE(array, offset) {
    if (offset === void 0) offset = 0;
    return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
exports.readInt32BE = readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */ function readUint32BE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
exports.readUint32BE = readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */ function readInt32LE(array, offset) {
    if (offset === void 0) offset = 0;
    return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
exports.readInt32LE = readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */ function readUint32LE(array, offset) {
    if (offset === void 0) offset = 0;
    return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
exports.readUint32LE = readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function writeUint32BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
exports.writeUint32BE = writeUint32BE;
exports.writeInt32BE = writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function writeUint32LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
exports.writeUint32LE = writeUint32LE;
exports.writeInt32LE = writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */ function readInt64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var hi = readInt32BE(array, offset);
    var lo = readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - (lo >> 31) * 0x100000000;
}
exports.readInt64BE = readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */ function readUint64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var hi = readUint32BE(array, offset);
    var lo = readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64BE = readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */ function readInt64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var lo = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - (lo >> 31) * 0x100000000;
}
exports.readInt64LE = readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */ function readUint64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var lo = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64LE = readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function writeUint64BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64BE = writeUint64BE;
exports.writeInt64BE = writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function writeUint64LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    writeUint32LE(value >>> 0, out, offset);
    writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64LE = writeUint64LE;
exports.writeInt64LE = writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */ function readUintBE(bitLength, array, offset) {
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (bitLength / 8 > array.length - offset) throw new Error("readUintBE: array is too short for the given bitLength");
    var result = 0;
    var mul = 1;
    for(var i = bitLength / 8 + offset - 1; i >= offset; i--){
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintBE = readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */ function readUintLE(bitLength, array, offset) {
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (bitLength / 8 > array.length - offset) throw new Error("readUintLE: array is too short for the given bitLength");
    var result = 0;
    var mul = 1;
    for(var i = offset; i < offset + bitLength / 8; i++){
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintLE = readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */ function writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) out = new Uint8Array(bitLength / 8);
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!int_1.isSafeInteger(value)) throw new Error("writeUintBE value must be an integer");
    var div = 1;
    for(var i = bitLength / 8 + offset - 1; i >= offset; i--){
        out[i] = value / div & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintBE = writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */ function writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) out = new Uint8Array(bitLength / 8);
    if (offset === void 0) offset = 0;
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!int_1.isSafeInteger(value)) throw new Error("writeUintLE value must be an integer");
    var div = 1;
    for(var i = offset; i < offset + bitLength / 8; i++){
        out[i] = value / div & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintLE = writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */ function readFloat32BE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
exports.readFloat32BE = readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */ function readFloat32LE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
exports.readFloat32LE = readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */ function readFloat64BE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
exports.readFloat64BE = readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */ function readFloat64LE(array, offset) {
    if (offset === void 0) offset = 0;
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
exports.readFloat64LE = readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function writeFloat32BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
exports.writeFloat32BE = writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */ function writeFloat32LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(4);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
exports.writeFloat32LE = writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function writeFloat64BE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
exports.writeFloat64BE = writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */ function writeFloat64LE(value, out, offset) {
    if (out === void 0) out = new Uint8Array(8);
    if (offset === void 0) offset = 0;
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
exports.writeFloat64LE = writeFloat64LE;

},{"befc558722f5aa59":"dkrY2"}],"dkrY2":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package int provides helper functions for integerss.
 */ // Shim using 16-bit pieces.
function imulShim(a, b) {
    var ah = a >>> 16 & 0xffff, al = a & 0xffff;
    var bh = b >>> 16 & 0xffff, bl = b & 0xffff;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}
/** 32-bit integer multiplication.  */ // Use system Math.imul if available, otherwise use our shim.
exports.mul = Math.imul || imulShim;
/** 32-bit integer addition.  */ function add(a, b) {
    return a + b | 0;
}
exports.add = add;
/**  32-bit integer subtraction.  */ function sub(a, b) {
    return a - b | 0;
}
exports.sub = sub;
/** 32-bit integer left rotation */ function rotl(x, n) {
    return x << n | x >>> 32 - n;
}
exports.rotl = rotl;
/** 32-bit integer left rotation */ function rotr(x, n) {
    return x << 32 - n | x >>> n;
}
exports.rotr = rotr;
function isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
}
/**
 * Returns true if the argument is an integer number.
 *
 * In ES2015, Number.isInteger.
 */ exports.isInteger = Number.isInteger || isIntegerShim;
/**
 *  Math.pow(2, 53) - 1
 *
 *  In ES2015 Number.MAX_SAFE_INTEGER.
 */ exports.MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Returns true if the argument is a safe integer number
 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
 *
 * In ES2015, Number.isSafeInteger.
 */ exports.isSafeInteger = function(n) {
    return exports.isInteger(n) && n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER;
};

},{}],"8owN2":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */ function wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for(var i = 0; i < array.length; i++)array[i] = 0;
    return array;
}
exports.wipe = wipe;

},{}],"hOj7F":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package poly1305 implements Poly1305 one-time message authentication algorithm.
 */ var constant_time_1 = require("bbc904162a92e17c");
var wipe_1 = require("591d19c533143b56");
exports.DIGEST_LENGTH = 16;
// Port of Andrew Moon's Poly1305-donna-16. Public domain.
// https://github.com/floodyberry/poly1305-donna
/**
 * Poly1305 computes 16-byte authenticator of message using
 * a one-time 32-byte key.
 *
 * Important: key should be used for only one message,
 * it should never repeat.
 */ var Poly1305 = /** @class */ function() {
    function Poly1305(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = t0 & 0x1fff;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this._r[5] = t4 >>> 1 & 0x1ffe;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this._r[9] = t7 >>> 5 & 0x007f;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
    }
    Poly1305.prototype._blocks = function(m, mpos, bytes) {
        var hibit = this._fin ? 0 : 2048;
        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while(bytes >= 16){
            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
            h0 += t0 & 0x1fff;
            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
            h5 += t4 >>> 1 & 0x1fff;
            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
            h9 += t7 >>> 5 | hibit;
            var c = 0;
            var d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 0x1fff;
            var d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 0x1fff;
            var d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 0x1fff;
            var d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 0x1fff;
            var d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 0x1fff;
            var d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 0x1fff;
            var d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 0x1fff;
            var d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 0x1fff;
            var d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 0x1fff;
            var d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 0x1fff;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 0x1fff;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h2;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
    };
    Poly1305.prototype.finish = function(mac, macpos) {
        if (macpos === void 0) macpos = 0;
        var g = new Uint16Array(10);
        var c;
        var mask;
        var f;
        var i;
        if (this._leftover) {
            i = this._leftover;
            this._buffer[i++] = 1;
            for(; i < 16; i++)this._buffer[i] = 0;
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
        }
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        for(i = 2; i < 10; i++){
            this._h[i] += c;
            c = this._h[i] >>> 13;
            this._h[i] &= 0x1fff;
        }
        this._h[0] += c * 5;
        c = this._h[0] >>> 13;
        this._h[0] &= 0x1fff;
        this._h[1] += c;
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        this._h[2] += c;
        g[0] = this._h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(i = 1; i < 10; i++){
            g[i] = this._h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 8192;
        mask = (c ^ 1) - 1;
        for(i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(i = 0; i < 10; i++)this._h[i] = this._h[i] & mask | g[i];
        this._h[0] = (this._h[0] | this._h[1] << 13) & 0xffff;
        this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 0xffff;
        this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 0xffff;
        this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 0xffff;
        this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 0xffff;
        this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 0xffff;
        this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 0xffff;
        this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 0xffff;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 0xffff;
        for(i = 1; i < 8; i++){
            f = (this._h[i] + this._pad[i] | 0) + (f >>> 16) | 0;
            this._h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
    };
    Poly1305.prototype.update = function(m) {
        var mpos = 0;
        var bytes = m.length;
        var want;
        if (this._leftover) {
            want = 16 - this._leftover;
            if (want > bytes) want = bytes;
            for(var i = 0; i < want; i++)this._buffer[this._leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) return this;
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - bytes % 16;
            this._blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for(var i = 0; i < bytes; i++)this._buffer[this._leftover + i] = m[mpos + i];
            this._leftover += bytes;
        }
        return this;
    };
    Poly1305.prototype.digest = function() {
        // TODO(dchest): it behaves differently than other hashes/HMAC,
        // because it throws when finished — others just return saved result.
        if (this._finished) throw new Error("Poly1305 was finished");
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
    };
    Poly1305.prototype.clean = function() {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._r);
        wipe_1.wipe(this._h);
        wipe_1.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true; // mark as finished even if not
        return this;
    };
    return Poly1305;
}();
exports.Poly1305 = Poly1305;
/**
 * Returns 16-byte authenticator of data using a one-time 32-byte key.
 *
 * Important: key should be used for only one message, it should never repeat.
 */ function oneTimeAuth(key, data) {
    var h = new Poly1305(key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.oneTimeAuth = oneTimeAuth;
/**
 * Returns true if two authenticators are 16-byte long and equal.
 * Uses contant-time comparison to avoid leaking timing information.
 */ function equal(a, b) {
    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) return false;
    return constant_time_1.equal(a, b);
}
exports.equal = equal;

},{"bbc904162a92e17c":"ccTzW","591d19c533143b56":"8owN2"}],"ccTzW":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */ /**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */ /**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */ function select(subject, resultIfOne, resultIfZero) {
    return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
exports.select = select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */ function lessOrEqual(a, b) {
    return (a | 0) - (b | 0) - 1 >>> 31 & 1;
}
exports.lessOrEqual = lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */ function compare(a, b) {
    if (a.length !== b.length) return 0;
    var result = 0;
    for(var i = 0; i < a.length; i++)result |= a[i] ^ b[i];
    return 1 & result - 1 >>> 8;
}
exports.compare = compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */ function equal(a, b) {
    if (a.length === 0 || b.length === 0) return false;
    return compare(a, b) !== 0;
}
exports.equal = equal;

},{}],"6r0oT":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
var hmac_1 = require("caa1ae99604dfac");
var wipe_1 = require("782c045c27b6a211");
/**
 * HMAC-based Extract-and-Expand Key Derivation Function.
 *
 * Implements HKDF from RFC5869.
 *
 * Expands the given master key with salt and info into
 * a limited stream of key material.
 */ var HKDF = /** @class */ function() {
    /**
     * Create a new HKDF instance for the given hash function
     * with the master key, optional salt, and info.
     *
     * - Master key is a high-entropy secret key (not a password).
     * - Salt is a non-secret random value.
     * - Info is application- and/or context-specific information.
     */ function HKDF(hash, key, salt, info) {
        if (salt === void 0) salt = new Uint8Array(0);
        this._counter = new Uint8Array(1); // starts with zero
        this._hash = hash;
        this._info = info;
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac_1.hmac(this._hash, salt, key);
        // Initialize HMAC for expanding with extracted key.
        this._hmac = new hmac_1.HMAC(hash, okm);
        // Allocate buffer.
        this._buffer = new Uint8Array(this._hmac.digestLength);
        this._bufpos = this._buffer.length;
    }
    // Fill buffer with new block of HKDF-Extract output.
    HKDF.prototype._fillBuffer = function() {
        // Increment counter.
        this._counter[0]++;
        var ctr = this._counter[0];
        // Check if counter overflowed.
        if (ctr === 0) throw new Error("hkdf: cannot expand more");
        // Prepare HMAC instance for new data with old key.
        this._hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (ctr > 1) this._hmac.update(this._buffer);
        // Hash in info if it exists.
        if (this._info) this._hmac.update(this._info);
        // Hash in the counter.
        this._hmac.update(this._counter);
        // Output result to buffer and clean HMAC instance.
        this._hmac.finish(this._buffer);
        // Reset buffer position.
        this._bufpos = 0;
    };
    /**
     * Expand returns next key material of the given length.
     *
     * It throws if expansion limit is reached (which is
     * 254 digests of the underlying HMAC function).
     */ HKDF.prototype.expand = function(length) {
        var out = new Uint8Array(length);
        for(var i = 0; i < out.length; i++){
            if (this._bufpos === this._buffer.length) this._fillBuffer();
            out[i] = this._buffer[this._bufpos++];
        }
        return out;
    };
    HKDF.prototype.clean = function() {
        this._hmac.clean();
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._counter);
        this._bufpos = 0;
    };
    return HKDF;
}();
exports.HKDF = HKDF; // TODO(dchest): maybe implement deriveKey?

},{"caa1ae99604dfac":"hAdnx","782c045c27b6a211":"8owN2"}],"hAdnx":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Package hmac implements HMAC algorithm.
 */ var hash_1 = require("57156713e22179fa");
var constant_time_1 = require("3c4e0ed790029825");
var wipe_1 = require("a43df86dbae49390");
/**
 *  HMAC implements hash-based message authentication algorithm.
 */ var HMAC = /** @class */ function() {
    /**
     * Constructs a new HMAC with the given Hash and secret key.
     */ function HMAC(hash, key) {
        this._finished = false; // true if HMAC was finalized
        // Initialize inner and outer hashes.
        this._inner = new hash();
        this._outer = new hash();
        // Set block and digest sizes for this HMAC
        // instance to values from the hash.
        this.blockSize = this._outer.blockSize;
        this.digestLength = this._outer.digestLength;
        // Pad temporary stores a key (or its hash) padded with zeroes.
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) // If key is bigger than hash block size, it must be
        // hashed and this hash is used as a key instead.
        this._inner.update(key).finish(pad).clean();
        else // Otherwise, copy the key into pad.
        pad.set(key);
        // Now two different keys are derived from padded key
        // by xoring a different byte value to each.
        // To make inner hash key, xor byte 0x36 into pad.
        for(var i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        // Update inner hash with the result.
        this._inner.update(pad);
        // To make outer hash key, xor byte 0x5c into pad.
        // But since we already xored 0x36 there, we must
        // first undo this by xoring it again.
        for(var i = 0; i < pad.length; i++)pad[i] ^= 106;
        // Update outer hash with the result.
        this._outer.update(pad);
        // Save states of both hashes, so that we can quickly restore
        // them later in reset() without the need to remember the actual
        // key and perform this initialization again.
        if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
        }
        // Clean pad.
        wipe_1.wipe(pad);
    }
    /**
     * Returns HMAC state to the state initialized with key
     * to make it possible to run HMAC over the other data with the same
     * key without creating a new instance.
     */ HMAC.prototype.reset = function() {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        // Restore keyed states of inner and outer hashes.
        this._inner.restoreState(this._innerKeyedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    /**
     * Cleans HMAC state.
     */ HMAC.prototype.clean = function() {
        if (hash_1.isSerializableHash(this._inner)) this._inner.cleanSavedState(this._innerKeyedState);
        if (hash_1.isSerializableHash(this._outer)) this._outer.cleanSavedState(this._outerKeyedState);
        this._inner.clean();
        this._outer.clean();
    };
    /**
     * Updates state with provided data.
     */ HMAC.prototype.update = function(data) {
        this._inner.update(data);
        return this;
    };
    /**
     * Finalizes HMAC and puts the result in out.
     */ HMAC.prototype.finish = function(out) {
        if (this._finished) {
            // If HMAC was finalized, outer hash is also finalized,
            // so it produces the same digest it produced when it
            // was finalized.
            this._outer.finish(out);
            return this;
        }
        // Finalize inner hash and store the result temporarily.
        this._inner.finish(out);
        // Update outer hash with digest of inner hash and and finalize it.
        this._outer.update(out.subarray(0, this.digestLength)).finish(out);
        this._finished = true;
        return this;
    };
    /**
     * Returns the computed message authentication code.
     */ HMAC.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Saves HMAC state.
     * This function is needed for PBKDF2 optimization.
     */ HMAC.prototype.saveState = function() {
        if (!hash_1.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState();
    };
    HMAC.prototype.restoreState = function(savedState) {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        this._inner.restoreState(savedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    HMAC.prototype.cleanSavedState = function(savedState) {
        if (!hash_1.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(savedState);
    };
    return HMAC;
}();
exports.HMAC = HMAC;
/**
 * Returns HMAC using the given hash constructor for the key over data.
 */ function hmac(hash, key, data) {
    var h = new HMAC(hash, key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hmac = hmac;
/**
 * Returns true if two HMAC digests are equal.
 * Uses constant-time comparison to avoid leaking timing information.
 *
 * Example:
 *
 *    const receivedDigest = ...
 *    const realDigest = hmac(SHA256, key, data);
 *    if (!equal(receivedDigest, realDigest)) {
 *        throw new Error("Authentication error");
 *    }
 */ exports.equal = constant_time_1.equal;

},{"57156713e22179fa":"5mYqj","3c4e0ed790029825":"ccTzW","a43df86dbae49390":"8owN2"}],"5mYqj":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
function isSerializableHash(h) {
    return typeof h.saveState !== "undefined" && typeof h.restoreState !== "undefined" && typeof h.cleanSavedState !== "undefined";
}
exports.isSerializableHash = isSerializableHash; // TODO(dchest): figure out the standardized interface for XOF such as
 // SHAKE and BLAKE2X.

},{}],"9Qs60":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
const system_1 = require("d1b18001fd54a94d");
const binary_1 = require("7d3a49a1fbc72699");
const wipe_1 = require("2adc73b974a45dde");
exports.defaultRandomSource = new system_1.SystemRandomSource();
function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
}
exports.randomBytes = randomBytes;
/**
 * Returns a uniformly random unsigned 32-bit integer.
 */ function randomUint32(prng = exports.defaultRandomSource) {
    // Generate 4-byte random buffer.
    const buf = randomBytes(4, prng);
    // Convert bytes from buffer into a 32-bit integer.
    // It's not important which byte order to use, since
    // the result is random.
    const result = (0, binary_1.readUint32LE)(buf);
    // Clean the buffer.
    (0, wipe_1.wipe)(buf);
    return result;
}
exports.randomUint32 = randomUint32;
/** 62 alphanumeric characters for default charset of randomString() */ const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Returns a uniform random string of the given length
 * with characters from the given charset.
 *
 * Charset must not have more than 256 characters.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */ function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) throw new Error("randomString charset is too short");
    if (charset.length > 256) throw new Error("randomString charset is too long");
    let out = "";
    const charsLen = charset.length;
    const maxByte = 256 - 256 % charsLen;
    while(length > 0){
        const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for(let i = 0; i < buf.length && length > 0; i++){
            const randomByte = buf[i];
            if (randomByte < maxByte) {
                out += charset.charAt(randomByte % charsLen);
                length--;
            }
        }
        (0, wipe_1.wipe)(buf);
    }
    return out;
}
exports.randomString = randomString;
/**
 * Returns uniform random string containing at least the given
 * number of bits of entropy.
 *
 * For example, randomStringForEntropy(128) will return a 22-character
 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
 * will return a 39-character numeric string, both will contain at
 * least 128 bits of entropy.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */ function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
}
exports.randomStringForEntropy = randomStringForEntropy;

},{"d1b18001fd54a94d":"1mwaP","7d3a49a1fbc72699":"92RWm","2adc73b974a45dde":"8owN2"}],"1mwaP":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SystemRandomSource = void 0;
const browser_1 = require("78274756c6932814");
const node_1 = require("66e9b1494f471553");
class SystemRandomSource {
    constructor(){
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
    // No sources, we're out of options.
    }
    randomBytes(length) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(length);
    }
}
exports.SystemRandomSource = SystemRandomSource;

},{"78274756c6932814":"1HoUi","66e9b1494f471553":"5rdHt"}],"1HoUi":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
    constructor(){
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto // IE11 has msCrypto
         : null;
        if (browserCrypto && browserCrypto.getRandomValues !== undefined) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const out = new Uint8Array(length);
        for(let i = 0; i < out.length; i += QUOTA)this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        return out;
    }
}
exports.BrowserRandomSource = BrowserRandomSource;

},{}],"5rdHt":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeRandomSource = void 0;
const wipe_1 = require("86f84a5546eecf2a");
class NodeRandomSource {
    constructor(){
        this.isAvailable = false;
        this.isInstantiated = false;
        {
            const nodeCrypto = require("513f687fea3ada01");
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        // Get random bytes (result is Buffer).
        let buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) throw new Error("NodeRandomSource: got fewer bytes than requested");
        // Allocate output array.
        const out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for(let i = 0; i < out.length; i++)out[i] = buffer[i];
        // Cleanup.
        (0, wipe_1.wipe)(buffer);
        return out;
    }
}
exports.NodeRandomSource = NodeRandomSource;

},{"86f84a5546eecf2a":"8owN2","513f687fea3ada01":"jhUEF"}],"fPm7j":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
var binary_1 = require("25e5068eae5a3fed");
var wipe_1 = require("b3d2f75bb19ad208");
exports.DIGEST_LENGTH = 32;
exports.BLOCK_SIZE = 64;
/**
 * SHA2-256 cryptographic hash algorithm.
 */ var SHA256 = /** @class */ function() {
    function SHA256() {
        /** Length of hash output */ this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */ this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._state = new Int32Array(8); // hash state
        this._temp = new Int32Array(64); // temporary state
        this._buffer = new Uint8Array(128); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA256.prototype._initState = function() {
        this._state[0] = 0x6a09e667;
        this._state[1] = 0xbb67ae85;
        this._state[2] = 0x3c6ef372;
        this._state[3] = 0xa54ff53a;
        this._state[4] = 0x510e527f;
        this._state[5] = 0x9b05688c;
        this._state[6] = 0x1f83d9ab;
        this._state[7] = 0x5be0cd19;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */ SHA256.prototype.reset = function() {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */ SHA256.prototype.clean = function() {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._temp);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */ SHA256.prototype.update = function(data, dataLength) {
        if (dataLength === void 0) dataLength = data.length;
        if (this._finished) throw new Error("SHA256: can't update because hash was finished.");
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while(this._bufferLength < this.blockSize && dataLength > 0){
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while(dataLength > 0){
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */ SHA256.prototype.finish = function(out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 0x20000000 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 64 < 56 ? 64 : 128;
            this._buffer[left] = 0x80;
            for(var i = left + 1; i < padLength - 8; i++)this._buffer[i] = 0;
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
        }
        for(var i = 0; i < this.digestLength / 4; i++)binary_1.writeUint32BE(this._state[i], out, i * 4);
        return this;
    };
    /**
     * Returns the final hash digest.
     */ SHA256.prototype.digest = function() {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Returns hash state to be used with restoreState().
     * Only chain value is saved, not buffers or other
     * state variables.
     */ SHA256.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Restores state saved by saveState() and sets bytesHashed
     * to the given value.
     */ SHA256.prototype.restoreState = function(savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) this._buffer.set(savedState.buffer);
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */ SHA256.prototype.cleanSavedState = function(savedState) {
        wipe_1.wipe(savedState.state);
        if (savedState.buffer) wipe_1.wipe(savedState.buffer);
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA256;
}();
exports.SHA256 = SHA256;
// Constants
var K = new Int32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    while(len >= 64){
        var a = v[0];
        var b = v[1];
        var c = v[2];
        var d = v[3];
        var e = v[4];
        var f = v[5];
        var g = v[6];
        var h = v[7];
        for(var i = 0; i < 16; i++){
            var j = pos + i * 4;
            w[i] = binary_1.readUint32BE(p, j);
        }
        for(var i = 16; i < 64; i++){
            var u = w[i - 2];
            var t1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
            u = w[i - 15];
            var t2 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for(var i = 0; i < 64; i++){
            var t1 = (((e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
            var t2 = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & b ^ a & c ^ b & c) | 0;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function hash(data) {
    var h = new SHA256();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;

},{"25e5068eae5a3fed":"92RWm","b3d2f75bb19ad208":"8owN2"}],"5xoxU":[function(require,module,exports) {
"use strict";
// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sharedKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.scalarMultBase = exports.scalarMult = exports.SHARED_KEY_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = void 0;
/**
 * Package x25519 implements X25519 key agreement.
 */ const random_1 = require("e887211e75ea3e89");
const wipe_1 = require("fb5b9d5437c5b56c");
exports.PUBLIC_KEY_LENGTH = 32;
exports.SECRET_KEY_LENGTH = 32;
exports.SHARED_KEY_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    const r = new Float64Array(16);
    if (init) for(let i = 0; i < init.length; i++)r[i] = init[i];
    return r;
}
// Base point.
const _9 = new Uint8Array(32);
_9[0] = 9;
const _121665 = gf([
    0xdb41,
    1
]);
function car25519(o) {
    let c = 1;
    for(let i = 0; i < 16; i++){
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    const c = ~(b - 1);
    for(let i = 0; i < 16; i++){
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    const m = gf();
    const t = gf();
    for(let i = 0; i < 16; i++)t[i] = n[i];
    car25519(t);
    car25519(t);
    car25519(t);
    for(let j = 0; j < 2; j++){
        m[0] = t[0] - 0xffed;
        for(let i = 1; i < 15; i++){
            m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
        const b = m[15] >> 16 & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for(let i = 0; i < 16; i++){
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function unpack25519(o, n) {
    for(let i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] + b[i];
}
function sub(o, a, b) {
    for(let i = 0; i < 16; i++)o[i] = a[i] - b[i];
}
function mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, inp) {
    const c = gf();
    for(let i = 0; i < 16; i++)c[i] = inp[i];
    for(let i = 253; i >= 0; i--){
        square(c, c);
        if (i !== 2 && i !== 4) mul(c, c, inp);
    }
    for(let i = 0; i < 16; i++)o[i] = c[i];
}
function scalarMult(n, p) {
    const z = new Uint8Array(32);
    const x = new Float64Array(80);
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for(let i = 0; i < 31; i++)z[i] = n[i];
    z[31] = n[31] & 127 | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for(let i = 0; i < 16; i++)b[i] = x[i];
    a[0] = d[0] = 1;
    for(let i = 254; i >= 0; --i){
        const r = z[i >>> 3] >>> (i & 7) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        add(e, a, c);
        sub(a, a, c);
        add(c, b, d);
        sub(b, b, d);
        square(d, e);
        square(f, a);
        mul(a, c, a);
        mul(c, b, e);
        add(e, a, c);
        sub(a, a, c);
        square(b, a);
        sub(c, d, f);
        mul(a, c, _121665);
        add(a, a, d);
        mul(c, c, a);
        mul(a, d, f);
        mul(d, b, x);
        square(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
    }
    for(let i = 0; i < 16; i++){
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    const x32 = x.subarray(32);
    const x16 = x.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q = new Uint8Array(32);
    pack25519(q, x16);
    return q;
}
exports.scalarMult = scalarMult;
function scalarMultBase(n) {
    return scalarMult(n, _9);
}
exports.scalarMultBase = scalarMultBase;
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${exports.SECRET_KEY_LENGTH} bytes`);
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
        publicKey,
        secretKey
    };
}
exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_1.wipe)(seed);
    return result;
}
exports.generateKeyPair = generateKeyPair;
/**
 * Returns a shared key between our secret key and a peer's public key.
 *
 * Throws an error if the given keys are of wrong length.
 *
 * If rejectZero is true throws if the calculated shared key is all-zero.
 * From RFC 7748:
 *
 * > Protocol designers using Diffie-Hellman over the curves defined in
 * > this document must not assume "contributory behavior".  Specially,
 * > contributory behavior means that both parties' private keys
 * > contribute to the resulting shared key.  Since curve25519 and
 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
 * > small order will eliminate any contribution from the other party's
 * > private key.  This situation can be detected by checking for the all-
 * > zero output, which implementations MAY do, as specified in Section 6.
 * > However, a large number of existing implementations do not do this.
 *
 * IMPORTANT: the returned key is a raw result of scalar multiplication.
 * To use it as a key material, hash it with a cryptographic hash function.
 */ function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
        let zeros = 0;
        for(let i = 0; i < result.length; i++)zeros |= result[i];
        if (zeros === 0) throw new Error("X25519: invalid shared key");
    }
    return result;
}
exports.sharedKey = sharedKey;

},{"e887211e75ea3e89":"9Qs60","fb5b9d5437c5b56c":"8owN2"}],"ctPgX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var compare = require("c285ab7192e9bc6b");
var concat = require("75927616a57a9166");
var equals = require("3d19d4da3fa0493f");
var fromString = require("e4383512fde297fc");
var toString = require("378fdee8114ccf05");
var xor = require("5c0949a02ba802a8");
exports.compare = compare.compare;
exports.concat = concat.concat;
exports.equals = equals.equals;
exports.fromString = fromString.fromString;
exports.toString = toString.toString;
exports.xor = xor.xor;

},{"c285ab7192e9bc6b":"4sxCx","75927616a57a9166":"gqJ9u","3d19d4da3fa0493f":"iZMnE","e4383512fde297fc":"7qjkp","378fdee8114ccf05":"w8mvE","5c0949a02ba802a8":"6tR3H"}],"4sxCx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) return -1;
        if (a[i] > b[i]) return 1;
    }
    if (a.byteLength > b.byteLength) return 1;
    if (a.byteLength < b.byteLength) return -1;
    return 0;
}
exports.compare = compare;

},{}],"gqJ9u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var alloc = require("a51c9ff294669cfe");
var asUint8array = require("25787af8d8e27779");
function concat(arrays, length) {
    if (!length) length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    const output = alloc.allocUnsafe(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return asUint8array.asUint8Array(output);
}
exports.concat = concat;

},{"a51c9ff294669cfe":"jsZij","25787af8d8e27779":"hN1l1"}],"jsZij":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var asUint8array = require("d3f126a5187e68ef");
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) return asUint8array.asUint8Array(globalThis.Buffer.alloc(size));
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) return asUint8array.asUint8Array(globalThis.Buffer.allocUnsafe(size));
    return new Uint8Array(size);
}
exports.alloc = alloc;
exports.allocUnsafe = allocUnsafe;

},{"d3f126a5187e68ef":"hN1l1"}],"hN1l1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function asUint8Array(buf) {
    if (globalThis.Buffer != null) return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    return buf;
}
exports.asUint8Array = asUint8Array;

},{}],"iZMnE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function equals(a, b) {
    if (a === b) return true;
    if (a.byteLength !== b.byteLength) return false;
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
exports.equals = equals;

},{}],"7qjkp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var bases = require("447ba6f0e75a926f");
var asUint8array = require("37854e2c12606983");
function fromString(string, encoding = "utf8") {
    const base = bases[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return asUint8array.asUint8Array(globalThis.Buffer.from(string, "utf-8"));
    return base.decoder.decode(`${base.prefix}${string}`);
}
exports.fromString = fromString;

},{"447ba6f0e75a926f":"ekopG","37854e2c12606983":"hN1l1"}],"ekopG":[function(require,module,exports) {
"use strict";
var basics = require("ed69b8afd85cbb5b");
var alloc = require("13cb11200ae48392");
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec("utf8", "u", (buf)=>{
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf)=>{
    let string = "a";
    for(let i = 0; i < buf.length; i++)string += String.fromCharCode(buf[i]);
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = alloc.allocUnsafe(str.length);
    for(let i = 0; i < str.length; i++)buf[i] = str.charCodeAt(i);
    return buf;
});
const BASES = {
    utf8: string,
    "utf-8": string,
    hex: basics.bases.base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...basics.bases
};
module.exports = BASES;

},{"ed69b8afd85cbb5b":"a826o","13cb11200ae48392":"jsZij"}],"a826o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var identity = require("f9ffda2bd48a30a5");
var base2 = require("1fe8acd9895239c4");
var base8 = require("b5c5c60f283411f6");
var base10 = require("5860ca8b669b8c1");
var base16 = require("60510c2cefc720c6");
var base32 = require("3bc56f9c9a7b75f4");
var base36 = require("a1c771ab241d74c3");
var base58 = require("7ddd4b0b310294de");
var base64 = require("50da769771087d34");
var base256emoji = require("e6a575a4d9cb9133");
var sha2 = require("bdc31200bd8cfe8c");
var identity$1 = require("5f391a78419389d3");
var raw = require("6142106ae738e0ee");
var json = require("b70e1e0e129240d2");
require("5520912902265e64");
var cid = require("2fd89dea97a48a28");
var hasher = require("fe90965a53342d53");
var digest = require("828368d6762175f9");
var varint = require("7403a4b37aa1d8fc");
var bytes = require("423d9a8df27de138");
const bases = {
    ...identity,
    ...base2,
    ...base8,
    ...base10,
    ...base16,
    ...base32,
    ...base36,
    ...base58,
    ...base64,
    ...base256emoji
};
const hashes = {
    ...sha2,
    ...identity$1
};
const codecs = {
    raw,
    json
};
exports.CID = cid.CID;
exports.hasher = hasher;
exports.digest = digest;
exports.varint = varint;
exports.bytes = bytes;
exports.bases = bases;
exports.codecs = codecs;
exports.hashes = hashes;

},{"f9ffda2bd48a30a5":"jy16e","1fe8acd9895239c4":"jAOxB","b5c5c60f283411f6":"3WMjP","5860ca8b669b8c1":"aFB7O","60510c2cefc720c6":"e5DKK","3bc56f9c9a7b75f4":"apmz1","a1c771ab241d74c3":"22c8Y","7ddd4b0b310294de":"9KkrI","50da769771087d34":"3gCnk","e6a575a4d9cb9133":"cSiGJ","bdc31200bd8cfe8c":"7U0mx","5f391a78419389d3":"bj4ky","6142106ae738e0ee":"cxcPD","b70e1e0e129240d2":"7lUAp","5520912902265e64":"3QFUn","2fd89dea97a48a28":"4uoBU","fe90965a53342d53":"lU6YS","828368d6762175f9":"9JdI8","7403a4b37aa1d8fc":"8P1F2","423d9a8df27de138":"ent0w"}],"jy16e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("ddbb95c304e58d56");
var bytes = require("adadd219346be009");
const identity = base.from({
    prefix: "\0",
    name: "identity",
    encode: (buf)=>bytes.toString(buf),
    decode: (str)=>bytes.fromString(str)
});
exports.identity = identity;

},{"ddbb95c304e58d56":"j888T","adadd219346be009":"ent0w"}],"j888T":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var baseX$1 = require("edf12ae176126cfd");
var bytes = require("85aecef98cb04d07");
class Encoder {
    constructor(name, prefix, baseEncode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
    }
    encode(bytes) {
        if (bytes instanceof Uint8Array) return `${this.prefix}${this.baseEncode(bytes)}`;
        else throw Error("Unknown type, must be binary type");
    }
}
class Decoder {
    constructor(name, prefix, baseDecode){
        this.name = name;
        this.prefix = prefix;
        if (prefix.codePointAt(0) === undefined) throw new Error("Invalid prefix character");
        this.prefixCodePoint = prefix.codePointAt(0);
        this.baseDecode = baseDecode;
    }
    decode(text) {
        if (typeof text === "string") {
            if (text.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(text.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(decoder) {
        return or(this, decoder);
    }
}
class ComposedDecoder {
    constructor(decoders){
        this.decoders = decoders;
    }
    or(decoder) {
        return or(this, decoder);
    }
    decode(input) {
        const prefix = input[0];
        const decoder = this.decoders[prefix];
        if (decoder) return decoder.decode(input);
        else throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
}
const or = (left, right)=>new ComposedDecoder({
        ...left.decoders || {
            [left.prefix]: left
        },
        ...right.decoders || {
            [right.prefix]: right
        }
    });
class Codec {
    constructor(name, prefix, baseEncode, baseDecode){
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder(name, prefix, baseEncode);
        this.decoder = new Decoder(name, prefix, baseDecode);
    }
    encode(input) {
        return this.encoder.encode(input);
    }
    decode(input) {
        return this.decoder.decode(input);
    }
}
const from = ({ name , prefix , encode , decode  })=>new Codec(name, prefix, encode, decode);
const baseX = ({ prefix , name , alphabet  })=>{
    const { encode , decode  } = baseX$1(alphabet, name);
    return from({
        prefix,
        name,
        encode,
        decode: (text)=>bytes.coerce(decode(text))
    });
};
const decode = (string, alphabet, bitsPerChar, name)=>{
    const codes = {};
    for(let i = 0; i < alphabet.length; ++i)codes[alphabet[i]] = i;
    let end = string.length;
    while(string[end - 1] === "=")--end;
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = codes[string[i]];
        if (value === undefined) throw new SyntaxError(`Non-${name} character`);
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) throw new SyntaxError("Unexpected end of data");
    return out;
};
const encode = (data, alphabet, bitsPerChar)=>{
    const pad = alphabet[alphabet.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | data[i];
        bits += 8;
        while(bits > bitsPerChar){
            bits -= bitsPerChar;
            out += alphabet[mask & buffer >> bits];
        }
    }
    if (bits) out += alphabet[mask & buffer << bitsPerChar - bits];
    if (pad) while(out.length * bitsPerChar & 7)out += "=";
    return out;
};
const rfc4648 = ({ name , prefix , bitsPerChar , alphabet  })=>{
    return from({
        prefix,
        name,
        encode (input) {
            return encode(input, alphabet, bitsPerChar);
        },
        decode (input) {
            return decode(input, alphabet, bitsPerChar, name);
        }
    });
};
exports.Codec = Codec;
exports.baseX = baseX;
exports.from = from;
exports.or = or;
exports.rfc4648 = rfc4648;

},{"edf12ae176126cfd":"bPHFa","85aecef98cb04d07":"ent0w"}],"bPHFa":[function(require,module,exports) {
"use strict";
function base(ALPHABET, name) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while(pbegin !== pend){
            var carry = source[pbegin];
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            pbegin++;
        }
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        if (source[psz] === " ") return;
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while(source[psz]){
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            psz++;
        }
        if (source[psz] === " ") return;
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error(`Non-${name} character`);
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
module.exports = _brrp__multiformats_scope_baseX;

},{}],"ent0w":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const empty = new Uint8Array(0);
const toHex = (d)=>d.reduce((hex, byte)=>hex + byte.toString(16).padStart(2, "0"), "");
const fromHex = (hex)=>{
    const hexes = hex.match(/../g);
    return hexes ? new Uint8Array(hexes.map((b)=>parseInt(b, 16))) : empty;
};
const equals = (aa, bb)=>{
    if (aa === bb) return true;
    if (aa.byteLength !== bb.byteLength) return false;
    for(let ii = 0; ii < aa.byteLength; ii++){
        if (aa[ii] !== bb[ii]) return false;
    }
    return true;
};
const coerce = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
};
const isBinary = (o)=>o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = (str)=>new TextEncoder().encode(str);
const toString = (b)=>new TextDecoder().decode(b);
exports.coerce = coerce;
exports.empty = empty;
exports.equals = equals;
exports.fromHex = fromHex;
exports.fromString = fromString;
exports.isBinary = isBinary;
exports.toHex = toHex;
exports.toString = toString;

},{}],"jAOxB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("1a8d9e65d9e8cc9");
const base2 = base.rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
exports.base2 = base2;

},{"1a8d9e65d9e8cc9":"j888T"}],"3WMjP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("44cdcee838b2525e");
const base8 = base.rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
exports.base8 = base8;

},{"44cdcee838b2525e":"j888T"}],"aFB7O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("c703916abcffbdcb");
const base10 = base.baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
exports.base10 = base10;

},{"c703916abcffbdcb":"j888T"}],"e5DKK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("b1b6a019a0136c21");
const base16 = base.rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
});
const base16upper = base.rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
exports.base16 = base16;
exports.base16upper = base16upper;

},{"b1b6a019a0136c21":"j888T"}],"apmz1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("4b16c54c8a6cf88");
const base32 = base.rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
});
const base32upper = base.rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
});
const base32pad = base.rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
});
const base32padupper = base.rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
});
const base32hex = base.rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
});
const base32hexupper = base.rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
});
const base32hexpad = base.rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
});
const base32hexpadupper = base.rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
});
const base32z = base.rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
exports.base32 = base32;
exports.base32hex = base32hex;
exports.base32hexpad = base32hexpad;
exports.base32hexpadupper = base32hexpadupper;
exports.base32hexupper = base32hexupper;
exports.base32pad = base32pad;
exports.base32padupper = base32padupper;
exports.base32upper = base32upper;
exports.base32z = base32z;

},{"4b16c54c8a6cf88":"j888T"}],"22c8Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("b648aee85c5c06fc");
const base36 = base.baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = base.baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
exports.base36 = base36;
exports.base36upper = base36upper;

},{"b648aee85c5c06fc":"j888T"}],"9KkrI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("e9b59abf7660f791");
const base58btc = base.baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = base.baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
exports.base58btc = base58btc;
exports.base58flickr = base58flickr;

},{"e9b59abf7660f791":"j888T"}],"3gCnk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("66623d749e60077e");
const base64 = base.rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
});
const base64pad = base.rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
});
const base64url = base.rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
});
const base64urlpad = base.rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
exports.base64 = base64;
exports.base64pad = base64pad;
exports.base64url = base64url;
exports.base64urlpad = base64urlpad;

},{"66623d749e60077e":"j888T"}],"cSiGJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = require("17dafc7b0f47de9a");
const alphabet = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42");
const alphabetBytesToChars = alphabet.reduce((p, c, i)=>{
    p[i] = c;
    return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i)=>{
    p[c.codePointAt(0)] = i;
    return p;
}, []);
function encode(data) {
    return data.reduce((p, c)=>{
        p += alphabetBytesToChars[c];
        return p;
    }, "");
}
function decode(str) {
    const byts = [];
    for (const char of str){
        const byt = alphabetCharsToBytes[char.codePointAt(0)];
        if (byt === undefined) throw new Error(`Non-base256emoji character: ${char}`);
        byts.push(byt);
    }
    return new Uint8Array(byts);
}
const base256emoji = base.from({
    prefix: "\uD83D\uDE80",
    name: "base256emoji",
    encode,
    decode
});
exports.base256emoji = base256emoji;

},{"17dafc7b0f47de9a":"j888T"}],"7U0mx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var hasher = require("772f0da16a8e2689");
const sha = (name)=>async (data)=>new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = hasher.from({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
});
const sha512 = hasher.from({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
});
exports.sha256 = sha256;
exports.sha512 = sha512;

},{"772f0da16a8e2689":"lU6YS"}],"lU6YS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var digest = require("47f07a53afeac957");
const from = ({ name , code , encode  })=>new Hasher(name, code, encode);
class Hasher {
    constructor(name, code, encode){
        this.name = name;
        this.code = code;
        this.encode = encode;
    }
    digest(input) {
        if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? digest.create(this.code, result) : result.then((digest$1)=>digest.create(this.code, digest$1));
        } else throw Error("Unknown type, must be binary type");
    }
}
exports.Hasher = Hasher;
exports.from = from;

},{"47f07a53afeac957":"9JdI8"}],"9JdI8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var bytes = require("b1968335e2cf5196");
var varint = require("f3dc6a225fe0838b");
const create = (code, digest)=>{
    const size = digest.byteLength;
    const sizeOffset = varint.encodingLength(code);
    const digestOffset = sizeOffset + varint.encodingLength(size);
    const bytes = new Uint8Array(digestOffset + size);
    varint.encodeTo(code, bytes, 0);
    varint.encodeTo(size, bytes, sizeOffset);
    bytes.set(digest, digestOffset);
    return new Digest(code, size, digest, bytes);
};
const decode = (multihash)=>{
    const bytes$1 = bytes.coerce(multihash);
    const [code, sizeOffset] = varint.decode(bytes$1);
    const [size, digestOffset] = varint.decode(bytes$1.subarray(sizeOffset));
    const digest = bytes$1.subarray(sizeOffset + digestOffset);
    if (digest.byteLength !== size) throw new Error("Incorrect length");
    return new Digest(code, size, digest, bytes$1);
};
const equals = (a, b)=>{
    if (a === b) return true;
    else return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
};
class Digest {
    constructor(code, size, digest, bytes){
        this.code = code;
        this.size = size;
        this.digest = digest;
        this.bytes = bytes;
    }
}
exports.Digest = Digest;
exports.create = create;
exports.decode = decode;
exports.equals = equals;

},{"b1968335e2cf5196":"ent0w","f3dc6a225fe0838b":"8P1F2"}],"8P1F2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var varint$1 = require("9ea0e9d2e1b49670");
const decode = (data, offset = 0)=>{
    const code = varint$1.decode(data, offset);
    return [
        code,
        varint$1.decode.bytes
    ];
};
const encodeTo = (int, target, offset = 0)=>{
    varint$1.encode(int, target, offset);
    return target;
};
const encodingLength = (int)=>{
    return varint$1.encodingLength(int);
};
exports.decode = decode;
exports.encodeTo = encodeTo;
exports.encodingLength = encodingLength;

},{"9ea0e9d2e1b49670":"lYpdI"}],"lYpdI":[function(require,module,exports) {
"use strict";
var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while(num >= INT){
        out[offset++] = num & 255 | MSB;
        num /= 128;
    }
    while(num & MSBALL){
        out[offset++] = num & 255 | MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
        if (counter >= l) {
            read.bytes = 0;
            throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
        shift += 7;
    }while (b >= MSB$1);
    read.bytes = counter - offset;
    return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
    encode: encode_1,
    decode: decode,
    encodingLength: length
};
var _brrp_varint = varint;
var varint$1 = _brrp_varint;
module.exports = varint$1;

},{}],"bj4ky":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var bytes = require("4e53d800f62f09c9");
var digest$1 = require("773113a01d31efc6");
const code = 0;
const name = "identity";
const encode = bytes.coerce;
const digest = (input)=>digest$1.create(code, encode(input));
const identity = {
    code,
    name,
    encode,
    digest
};
exports.identity = identity;

},{"4e53d800f62f09c9":"ent0w","773113a01d31efc6":"9JdI8"}],"cxcPD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var bytes = require("d678df9c17bed6f0");
const name = "raw";
const code = 85;
const encode = (node)=>bytes.coerce(node);
const decode = (data)=>bytes.coerce(data);
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{"d678df9c17bed6f0":"ent0w"}],"7lUAp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = "json";
const code = 512;
const encode = (node)=>textEncoder.encode(JSON.stringify(node));
const decode = (data)=>JSON.parse(textDecoder.decode(data));
exports.code = code;
exports.decode = decode;
exports.encode = encode;
exports.name = name;

},{}],"3QFUn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var cid = require("a1022e54ccca3d93");
var varint = require("c65b9858a58a2d10");
var bytes = require("aae87281e839babc");
var hasher = require("dbf22732e74531c");
var digest = require("b2f3a4d0e1b689ae");
exports.CID = cid.CID;
exports.varint = varint;
exports.bytes = bytes;
exports.hasher = hasher;
exports.digest = digest;

},{"a1022e54ccca3d93":"4uoBU","c65b9858a58a2d10":"8P1F2","aae87281e839babc":"ent0w","dbf22732e74531c":"lU6YS","b2f3a4d0e1b689ae":"9JdI8"}],"4uoBU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var varint = require("4cdf3a1a7c01522");
var digest = require("76df5270c77ccbdc");
var base58 = require("663562472340110a");
var base32 = require("ec21c33a03ff22a1");
var bytes = require("391919f2868880e4");
class CID {
    constructor(version, code, multihash, bytes){
        this.code = code;
        this.version = version;
        this.multihash = multihash;
        this.bytes = bytes;
        this.byteOffset = bytes.byteOffset;
        this.byteLength = bytes.byteLength;
        this.asCID = this;
        this._baseCache = new Map();
        Object.defineProperties(this, {
            byteOffset: hidden,
            byteLength: hidden,
            code: readonly,
            version: readonly,
            multihash: readonly,
            bytes: readonly,
            _baseCache: hidden,
            asCID: hidden
        });
    }
    toV0() {
        switch(this.version){
            case 0:
                return this;
            default:
                {
                    const { code , multihash  } = this;
                    if (code !== DAG_PB_CODE) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                    if (multihash.code !== SHA_256_CODE) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                    return CID.createV0(multihash);
                }
        }
    }
    toV1() {
        switch(this.version){
            case 0:
                {
                    const { code , digest: digest$1  } = this.multihash;
                    const multihash = digest.create(code, digest$1);
                    return CID.createV1(this.code, multihash);
                }
            case 1:
                return this;
            default:
                throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
    equals(other) {
        return other && this.code === other.code && this.version === other.version && digest.equals(this.multihash, other.multihash);
    }
    toString(base) {
        const { bytes , version , _baseCache  } = this;
        switch(version){
            case 0:
                return toStringV0(bytes, _baseCache, base || base58.base58btc.encoder);
            default:
                return toStringV1(bytes, _baseCache, base || base32.base32.encoder);
        }
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        };
    }
    get [Symbol.toStringTag]() {
        return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
        deprecate(/^0\.0/, IS_CID_DEPRECATION);
        return !!(value && (value[cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()");
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
        if (value instanceof CID) return value;
        else if (value != null && value.asCID === value) {
            const { version , code , multihash , bytes  } = value;
            return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
        } else if (value != null && value[cidSymbol] === true) {
            const { version , multihash , code  } = value;
            const digest$1 = digest.decode(multihash);
            return CID.create(version, code, digest$1);
        } else return null;
    }
    static create(version, code, digest) {
        if (typeof code !== "number") throw new Error("String codecs are no longer supported");
        switch(version){
            case 0:
                if (code !== DAG_PB_CODE) throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
                else return new CID(version, code, digest, digest.bytes);
            case 1:
                {
                    const bytes = encodeCID(version, code, digest.bytes);
                    return new CID(version, code, digest, bytes);
                }
            default:
                throw new Error("Invalid version");
        }
    }
    static createV0(digest) {
        return CID.create(0, DAG_PB_CODE, digest);
    }
    static createV1(code, digest) {
        return CID.create(1, code, digest);
    }
    static decode(bytes) {
        const [cid, remainder] = CID.decodeFirst(bytes);
        if (remainder.length) throw new Error("Incorrect length");
        return cid;
    }
    static decodeFirst(bytes$1) {
        const specs = CID.inspectBytes(bytes$1);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = bytes.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) throw new Error("Incorrect length");
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest$1 = new digest.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid = specs.version === 0 ? CID.createV0(digest$1) : CID.createV1(specs.codec, digest$1);
        return [
            cid,
            bytes$1.subarray(specs.size)
        ];
    }
    static inspectBytes(initialBytes) {
        let offset = 0;
        const next = ()=>{
            const [i, length] = varint.decode(initialBytes.subarray(offset));
            offset += length;
            return i;
        };
        let version = next();
        let codec = DAG_PB_CODE;
        if (version === 18) {
            version = 0;
            offset = 0;
        } else if (version === 1) codec = next();
        if (version !== 0 && version !== 1) throw new RangeError(`Invalid CID version ${version}`);
        const prefixSize = offset;
        const multihashCode = next();
        const digestSize = next();
        const size = offset + digestSize;
        const multihashSize = size - prefixSize;
        return {
            version,
            codec,
            multihashCode,
            digestSize,
            multihashSize,
            size
        };
    }
    static parse(source, base) {
        const [prefix, bytes] = parseCIDtoBytes(source, base);
        const cid = CID.decode(bytes);
        cid._baseCache.set(prefix, source);
        return cid;
    }
}
const parseCIDtoBytes = (source, base)=>{
    switch(source[0]){
        case "Q":
            {
                const decoder = base || base58.base58btc;
                return [
                    base58.base58btc.prefix,
                    decoder.decode(`${base58.base58btc.prefix}${source}`)
                ];
            }
        case base58.base58btc.prefix:
            {
                const decoder = base || base58.base58btc;
                return [
                    base58.base58btc.prefix,
                    decoder.decode(source)
                ];
            }
        case base32.base32.prefix:
            {
                const decoder = base || base32.base32;
                return [
                    base32.base32.prefix,
                    decoder.decode(source)
                ];
            }
        default:
            if (base == null) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            return [
                source[0],
                base.decode(source)
            ];
    }
};
const toStringV0 = (bytes, cache, base)=>{
    const { prefix  } = base;
    if (prefix !== base58.base58btc.prefix) throw Error(`Cannot string encode V0 in ${base.name} encoding`);
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes).slice(1);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const toStringV1 = (bytes, cache, base)=>{
    const { prefix  } = base;
    const cid = cache.get(prefix);
    if (cid == null) {
        const cid = base.encode(bytes);
        cache.set(prefix, cid);
        return cid;
    } else return cid;
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash)=>{
    const codeOffset = varint.encodingLength(version);
    const hashOffset = codeOffset + varint.encodingLength(code);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    varint.encodeTo(version, bytes, 0);
    varint.encodeTo(code, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
};
const cidSymbol = Symbol.for("@ipld/js-cid/CID");
const readonly = {
    writable: false,
    configurable: false,
    enumerable: true
};
const hidden = {
    writable: false,
    enumerable: false,
    configurable: false
};
const version = "0.0.0-dev";
const deprecate = (range, message)=>{
    if (range.test(version)) console.warn(message);
    else throw new Error(message);
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
exports.CID = CID;

},{"4cdf3a1a7c01522":"8P1F2","76df5270c77ccbdc":"9JdI8","663562472340110a":"9KkrI","ec21c33a03ff22a1":"apmz1","391919f2868880e4":"ent0w"}],"w8mvE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var bases = require("b018221ee9e55ed3");
function toString(array, encoding = "utf8") {
    const base = bases[encoding];
    if (!base) throw new Error(`Unsupported encoding "${encoding}"`);
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    return base.encoder.encode(array).substring(1);
}
exports.toString = toString;

},{"b018221ee9e55ed3":"ekopG"}],"6tR3H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var alloc = require("3de295245db5f63a");
var asUint8array = require("9b46fb36b5276aae");
function xor(a, b) {
    if (a.length !== b.length) throw new Error("Inputs should have the same length");
    const result = alloc.allocUnsafe(a.length);
    for(let i = 0; i < a.length; i++)result[i] = a[i] ^ b[i];
    return asUint8array.asUint8Array(result);
}
exports.xor = xor;

},{"3de295245db5f63a":"jsZij","9b46fb36b5276aae":"hN1l1"}],"2pU52":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserInfo", ()=>BrowserInfo);
parcelHelpers.export(exports, "NodeInfo", ()=>NodeInfo);
parcelHelpers.export(exports, "SearchBotDeviceInfo", ()=>SearchBotDeviceInfo);
parcelHelpers.export(exports, "BotInfo", ()=>BotInfo);
parcelHelpers.export(exports, "ReactNativeInfo", ()=>ReactNativeInfo);
parcelHelpers.export(exports, "detect", ()=>detect);
parcelHelpers.export(exports, "browserName", ()=>browserName);
parcelHelpers.export(exports, "parseUserAgent", ()=>parseUserAgent);
parcelHelpers.export(exports, "detectOS", ()=>detectOS);
parcelHelpers.export(exports, "getNodeVersion", ()=>getNodeVersion);
var process = require("1c84075007dbb0");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ function() {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = "browser";
    }
    return BrowserInfo;
}();
var NodeInfo = /** @class */ function() {
    function NodeInfo(version) {
        this.version = version;
        this.type = "node";
        this.name = "node";
        this.os = process.platform;
    }
    return NodeInfo;
}();
var SearchBotDeviceInfo = /** @class */ function() {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = "bot-device";
    }
    return SearchBotDeviceInfo;
}();
var BotInfo = /** @class */ function() {
    function BotInfo() {
        this.type = "bot";
        this.bot = true; // NOTE: deprecated test name instead
        this.name = "bot";
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}();
var ReactNativeInfo = /** @class */ function() {
    function ReactNativeInfo() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}();
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    [
        "aol",
        /AOLShield\/([0-9\._]+)/
    ],
    [
        "edge",
        /Edge\/([0-9\._]+)/
    ],
    [
        "edge-ios",
        /EdgiOS\/([0-9\._]+)/
    ],
    [
        "yandexbrowser",
        /YaBrowser\/([0-9\._]+)/
    ],
    [
        "kakaotalk",
        /KAKAOTALK\s([0-9\.]+)/
    ],
    [
        "samsung",
        /SamsungBrowser\/([0-9\.]+)/
    ],
    [
        "silk",
        /\bSilk\/([0-9._-]+)\b/
    ],
    [
        "miui",
        /MiuiBrowser\/([0-9\.]+)$/
    ],
    [
        "beaker",
        /BeakerBrowser\/([0-9\.]+)/
    ],
    [
        "edge-chromium",
        /EdgA?\/([0-9\.]+)/
    ],
    [
        "chromium-webview",
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "chrome",
        /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "phantomjs",
        /PhantomJS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "crios",
        /CriOS\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "firefox",
        /Firefox\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "fxios",
        /FxiOS\/([0-9\.]+)/
    ],
    [
        "opera-mini",
        /Opera Mini.*Version\/([0-9\.]+)/
    ],
    [
        "opera",
        /Opera\/([0-9\.]+)(?:\s|$)/
    ],
    [
        "opera",
        /OPR\/([0-9\.]+)(:?\s|$)/
    ],
    [
        "pie",
        /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/
    ],
    [
        "pie",
        /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/
    ],
    [
        "netfront",
        /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/
    ],
    [
        "ie",
        /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/
    ],
    [
        "ie",
        /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/
    ],
    [
        "ie",
        /MSIE\s(7\.0)/
    ],
    [
        "bb10",
        /BB10;\sTouch.*Version\/([0-9\.]+)/
    ],
    [
        "android",
        /Android\s([0-9\.]+)/
    ],
    [
        "ios",
        /Version\/([0-9\._]+).*Mobile.*Safari.*/
    ],
    [
        "safari",
        /Version\/([0-9\._]+).*Safari/
    ],
    [
        "facebook",
        /FB[AS]V\/([0-9\.]+)/
    ],
    [
        "instagram",
        /Instagram\s([0-9\.]+)/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Mobile/
    ],
    [
        "ios-webview",
        /AppleWebKit\/([0-9\.]+).*Gecko\)$/
    ],
    [
        "curl",
        /^curl\/([0-9\.]+)$/
    ],
    [
        "searchbot",
        SEARCHBOX_UA_REGEX
    ]
];
var operatingSystemRules = [
    [
        "iOS",
        /iP(hone|od|ad)/
    ],
    [
        "Android OS",
        /Android/
    ],
    [
        "BlackBerry OS",
        /BlackBerry|BB10/
    ],
    [
        "Windows Mobile",
        /IEMobile/
    ],
    [
        "Amazon OS",
        /Kindle/
    ],
    [
        "Windows 3.11",
        /Win16/
    ],
    [
        "Windows 95",
        /(Windows 95)|(Win95)|(Windows_95)/
    ],
    [
        "Windows 98",
        /(Windows 98)|(Win98)/
    ],
    [
        "Windows 2000",
        /(Windows NT 5.0)|(Windows 2000)/
    ],
    [
        "Windows XP",
        /(Windows NT 5.1)|(Windows XP)/
    ],
    [
        "Windows Server 2003",
        /(Windows NT 5.2)/
    ],
    [
        "Windows Vista",
        /(Windows NT 6.0)/
    ],
    [
        "Windows 7",
        /(Windows NT 6.1)/
    ],
    [
        "Windows 8",
        /(Windows NT 6.2)/
    ],
    [
        "Windows 8.1",
        /(Windows NT 6.3)/
    ],
    [
        "Windows 10",
        /(Windows NT 10.0)/
    ],
    [
        "Windows ME",
        /Windows ME/
    ],
    [
        "Windows CE",
        /Windows CE|WinCE|Microsoft Pocket Internet Explorer/
    ],
    [
        "Open BSD",
        /OpenBSD/
    ],
    [
        "Sun OS",
        /SunOS/
    ],
    [
        "Chrome OS",
        /CrOS/
    ],
    [
        "Linux",
        /(Linux)|(X11)/
    ],
    [
        "Mac OS",
        /(Mac_PowerPC)|(Macintosh)/
    ],
    [
        "QNX",
        /QNX/
    ],
    [
        "BeOS",
        /BeOS/
    ],
    [
        "OS/2",
        /OS\/2/
    ]
];
function detect(userAgent) {
    if (!!userAgent) return parseUserAgent(userAgent);
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") return new ReactNativeInfo();
    if (typeof navigator !== "undefined") return parseUserAgent(navigator.userAgent);
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return ua !== "" && userAgentRules.reduce(function(matched, _a) {
        var browser = _a[0], regex = _a[1];
        if (matched) return matched;
        var uaMatch = regex.exec(ua);
        return !!uaMatch && [
            browser,
            uaMatch
        ];
    }, false);
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) return null;
    var name = matchedRule[0], match = matchedRule[1];
    if (name === "searchbot") return new BotInfo();
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    } else versionParts = [];
    var version = versionParts.join(".");
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for(var ii = 0, count = operatingSystemRules.length; ii < count; ii++){
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) return os;
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== "undefined" && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for(var ii = 0; ii < count; ii++)output.push("0");
    return output;
}

},{"1c84075007dbb0":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2hzsP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("bad8540b1b820e23");
tslib_1.__exportStar(require("a1c4276e4510d6ba"), exports);
tslib_1.__exportStar(require("dc805663eb5c22a9"), exports);
tslib_1.__exportStar(require("bca879e8a8439153"), exports);
tslib_1.__exportStar(require("63efe642844bec4d"), exports);

},{"bad8540b1b820e23":"lRdW5","a1c4276e4510d6ba":"llJJV","dc805663eb5c22a9":"fK9IB","bca879e8a8439153":"cLyNr","63efe642844bec4d":"haD5H"}],"lRdW5":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llJJV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("425fcd0bfbacbf78");
tslib_1.__exportStar(require("a6e0b85ec3269080"), exports);
tslib_1.__exportStar(require("a50f2152f671a41c"), exports);

},{"425fcd0bfbacbf78":"lRdW5","a6e0b85ec3269080":"h9MW7","a50f2152f671a41c":"g6oQy"}],"h9MW7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delay = void 0;
function delay(timeout) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true);
        }, timeout);
    });
}
exports.delay = delay;

},{}],"g6oQy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromMiliseconds = exports.toMiliseconds = void 0;
const constants_1 = require("1be05ec1ee1e2b67");
function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
}
exports.toMiliseconds = toMiliseconds;
function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
}
exports.fromMiliseconds = fromMiliseconds;

},{"1be05ec1ee1e2b67":"haD5H"}],"haD5H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("c8e238e90d1dc0a8");
tslib_1.__exportStar(require("c4fdb595d3c1b842"), exports);
tslib_1.__exportStar(require("30845926638d2d1c"), exports);

},{"c8e238e90d1dc0a8":"lRdW5","c4fdb595d3c1b842":"duIKl","30845926638d2d1c":"iENbz"}],"duIKl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
exports.ONE_HUNDRED = 100;
exports.ONE_THOUSAND = 1000;

},{}],"iENbz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
exports.ONE_SECOND = 1;
exports.FIVE_SECONDS = 5;
exports.TEN_SECONDS = 10;
exports.THIRTY_SECONDS = 30;
exports.SIXTY_SECONDS = 60;
exports.ONE_MINUTE = exports.SIXTY_SECONDS;
exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
exports.ONE_HOUR = exports.SIXTY_MINUTES;
exports.THREE_HOURS = exports.ONE_HOUR * 3;
exports.SIX_HOURS = exports.ONE_HOUR * 6;
exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
exports.THREE_DAYS = exports.ONE_DAY * 3;
exports.FIVE_DAYS = exports.ONE_DAY * 5;
exports.SEVEN_DAYS = exports.ONE_DAY * 7;
exports.THIRTY_DAYS = exports.ONE_DAY * 30;
exports.ONE_WEEK = exports.SEVEN_DAYS;
exports.TWO_WEEKS = exports.ONE_WEEK * 2;
exports.THREE_WEEKS = exports.ONE_WEEK * 3;
exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
exports.ONE_YEAR = exports.ONE_DAY * 365;

},{}],"fK9IB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Watch = void 0;
class Watch {
    constructor(){
        this.timestamps = new Map();
    }
    start(label) {
        if (this.timestamps.has(label)) throw new Error(`Watch already started for label: ${label}`);
        this.timestamps.set(label, {
            started: Date.now()
        });
    }
    stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") throw new Error(`Watch already stopped for label: ${label}`);
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, {
            started: timestamp.started,
            elapsed
        });
    }
    get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") throw new Error(`No timestamp found for label: ${label}`);
        return timestamp;
    }
    elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
    }
}
exports.Watch = Watch;
exports.default = Watch;

},{}],"cLyNr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = require("af7e783aec09320a");
tslib_1.__exportStar(require("eb0e904c21f01407"), exports);

},{"af7e783aec09320a":"lRdW5","eb0e904c21f01407":"hs39c"}],"hs39c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IWatch = void 0;
class IWatch {
}
exports.IWatch = IWatch;

},{}],"7XcJM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") res = window[name];
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) throw new Error(`${name} is not defined in Window`);
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;

},{}],"ga1jf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWindowMetadata = void 0;
const window_getters_1 = require("1821215fd67d0449");
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    } catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for(let i = 0; i < links.length; i++){
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) absoluteHref += href;
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        } else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        } else icons.push(href);
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for(let i = 0; i < metaTags.length; i++){
            const tag = metaTags[i];
            const attributes = [
                "itemprop",
                "property",
                "name"
            ].map((target)=>tag.getAttribute(target)).filter((attr)=>{
                if (attr) return args.includes(attr);
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) return content;
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) name = doc.title;
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata;

},{"1821215fd67d0449":"7XcJM"}],"oefkS":[function(require,module,exports) {
"use strict";
const strictUriEncode = require("80c7cef19dd026dc");
const decodeComponent = require("65bb9f54dfa9d773");
const splitOnFirst = require("18258afaf4230e91");
const filterObject = require("284430587131b6c4");
const isNullOrUndefined = (value)=>value === null || value === undefined;
const encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function encoderForArrayFormat(options) {
    switch(options.arrayFormat){
        case "index":
            return (key)=>(result, value)=>{
                    const index = result.length;
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            "[",
                            index,
                            "]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "[",
                            encode(index, options),
                            "]=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "bracket":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            "[]"
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "[]=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "colon-list-separator":
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        [
                            encode(key, options),
                            ":list="
                        ].join("")
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            ":list=",
                            encode(value, options)
                        ].join("")
                    ];
                };
        case "comma":
        case "separator":
        case "bracket-separator":
            {
                const keyValueSep = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
                return (key)=>(result, value)=>{
                        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                        // Translate null to an empty string so that it doesn't serialize as 'null'
                        value = value === null ? "" : value;
                        if (result.length === 0) return [
                            [
                                encode(key, options),
                                keyValueSep,
                                encode(value, options)
                            ].join("")
                        ];
                        return [
                            [
                                result,
                                encode(value, options)
                            ].join(options.arrayFormatSeparator)
                        ];
                    };
            }
        default:
            return (key)=>(result, value)=>{
                    if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === "") return result;
                    if (value === null) return [
                        ...result,
                        encode(key, options)
                    ];
                    return [
                        ...result,
                        [
                            encode(key, options),
                            "=",
                            encode(value, options)
                        ].join("")
                    ];
                };
    }
}
function parserForArrayFormat(options) {
    let result;
    switch(options.arrayFormat){
        case "index":
            return (key, value, accumulator)=>{
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) accumulator[key] = {};
                accumulator[key][result[1]] = value;
            };
        case "bracket":
            return (key, value, accumulator)=>{
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "colon-list-separator":
            return (key, value, accumulator)=>{
                result = /(:list)$/.exec(key);
                key = key.replace(/:list$/, "");
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = [
                        value
                    ];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        case "comma":
        case "separator":
            return (key, value, accumulator)=>{
                const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
                const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
                value = isEncodedArray ? decode(value, options) : value;
                const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item)=>decode(item, options)) : value === null ? value : decode(value, options);
                accumulator[key] = newValue;
            };
        case "bracket-separator":
            return (key, value, accumulator)=>{
                const isArray = /(\[\])$/.test(key);
                key = key.replace(/\[\]$/, "");
                if (!isArray) {
                    accumulator[key] = value ? decode(value, options) : value;
                    return;
                }
                const arrayValue = value === null ? [] : value.split(options.arrayFormatSeparator).map((item)=>decode(item, options));
                if (accumulator[key] === undefined) {
                    accumulator[key] = arrayValue;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], arrayValue);
            };
        default:
            return (key, value, accumulator)=>{
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
}
function encode(value, options) {
    if (options.encode) return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
    return value;
}
function decode(value, options) {
    if (options.decode) return decodeComponent(value);
    return value;
}
function keysSorter(input) {
    if (Array.isArray(input)) return input.sort();
    if (typeof input === "object") return keysSorter(Object.keys(input)).sort((a, b)=>Number(a) - Number(b)).map((key)=>input[key]);
    return input;
}
function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) input = input.slice(0, hashStart);
    return input;
}
function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) hash = url.slice(hashStart);
    return hash;
}
function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) return "";
    return input.slice(queryStart + 1);
}
function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") value = Number(value);
    else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) value = value.toLowerCase() === "true";
    return value;
}
function parse(query, options) {
    options = Object.assign({
        decode: true,
        sort: true,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: false,
        parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    // Create an object with no prototype
    const ret = Object.create(null);
    if (typeof query !== "string") return ret;
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) return ret;
    for (const param of query.split("&")){
        if (param === "") continue;
        let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
        // Missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        value = value === undefined ? null : [
            "comma",
            "separator",
            "bracket-separator"
        ].includes(options.arrayFormat) ? value : decode(value, options);
        formatter(decode(key, options), value, ret);
    }
    for (const key of Object.keys(ret)){
        const value = ret[key];
        if (typeof value === "object" && value !== null) for (const k of Object.keys(value))value[k] = parseValue(value[k], options);
        else ret[key] = parseValue(value, options);
    }
    if (options.sort === false) return ret;
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key)=>{
        const value = ret[key];
        if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) // Sort object keys, not values
        result[key] = keysSorter(value);
        else result[key] = value;
        return result;
    }, Object.create(null));
}
exports.extract = extract;
exports.parse = parse;
exports.stringify = (object, options)=>{
    if (!object) return "";
    options = Object.assign({
        encode: true,
        strict: true,
        arrayFormat: "none",
        arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key)=>options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object))if (!shouldFilter(key)) objectCopy[key] = object[key];
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) keys.sort(options.sort);
    return keys.map((key)=>{
        const value = object[key];
        if (value === undefined) return "";
        if (value === null) return encode(key, options);
        if (Array.isArray(value)) {
            if (value.length === 0 && options.arrayFormat === "bracket-separator") return encode(key, options) + "[]";
            return value.reduce(formatter(key), []).join("&");
        }
        return encode(key, options) + "=" + encode(value, options);
    }).filter((x)=>x.length > 0).join("&");
};
exports.parseUrl = (url, options)=>{
    options = Object.assign({
        decode: true
    }, options);
    const [url_, hash] = splitOnFirst(url, "#");
    return Object.assign({
        url: url_.split("?")[0] || "",
        query: parse(extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
        fragmentIdentifier: decode(hash, options)
    } : {});
};
exports.stringifyUrl = (object, options)=>{
    options = Object.assign({
        encode: true,
        strict: true,
        [encodeFragmentIdentifier]: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, {
        sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString = exports.stringify(query, options);
    if (queryString) queryString = `?${queryString}`;
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
    return `${url}${queryString}${hash}`;
};
exports.pick = (input, filter, options)=>{
    options = Object.assign({
        parseFragmentIdentifier: true,
        [encodeFragmentIdentifier]: false
    }, options);
    const { url , query , fragmentIdentifier  } = exports.parseUrl(input, options);
    return exports.stringifyUrl({
        url,
        query: filterObject(query, filter),
        fragmentIdentifier
    }, options);
};
exports.exclude = (input, filter, options)=>{
    const exclusionFilter = Array.isArray(filter) ? (key)=>!filter.includes(key) : (key, value)=>!filter(key, value);
    return exports.pick(input, exclusionFilter, options);
};

},{"80c7cef19dd026dc":"72Fvn","65bb9f54dfa9d773":"1clyr","18258afaf4230e91":"70WYe","284430587131b6c4":"1up0E"}],"72Fvn":[function(require,module,exports) {
"use strict";
module.exports = (str)=>encodeURIComponent(str).replace(/[!'()*]/g, (x)=>`%${x.charCodeAt(0).toString(16).toUpperCase()}`);

},{}],"1clyr":[function(require,module,exports) {
"use strict";
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return [
            decodeURIComponent(components.join(""))
        ];
    } catch (err) {
    // Do nothing
    }
    if (components.length === 1) return components;
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    } catch (err) {
        var tokens = input.match(singleMatcher) || [];
        for(var i = 1; i < tokens.length; i++){
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher) || [];
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    };
    var match = multiMatcher.exec(input);
    while(match){
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) replaceMap[match[0]] = result;
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap["%C2"] = "�";
    var entries = Object.keys(replaceMap);
    for(var i = 0; i < entries.length; i++){
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, "g"), replaceMap[key]);
    }
    return input;
}
module.exports = function(encodedURI) {
    if (typeof encodedURI !== "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
    try {
        encodedURI = encodedURI.replace(/\+/g, " ");
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    } catch (err) {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
};

},{}],"70WYe":[function(require,module,exports) {
"use strict";
module.exports = (string, separator)=>{
    if (!(typeof string === "string" && typeof separator === "string")) throw new TypeError("Expected the arguments to be of type `string`");
    if (separator === "") return [
        string
    ];
    const separatorIndex = string.indexOf(separator);
    if (separatorIndex === -1) return [
        string
    ];
    return [
        string.slice(0, separatorIndex),
        string.slice(separatorIndex + separator.length)
    ];
};

},{}],"1up0E":[function(require,module,exports) {
"use strict";
module.exports = function(obj, predicate) {
    var ret = {};
    var keys = Object.keys(obj);
    var isArr = Array.isArray(predicate);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var val = obj[key];
        if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) ret[key] = val;
    }
    return ret;
};

},{}],"1SxNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _parsers = require("./parsers");
parcelHelpers.exportAll(_parsers, exports);
var _jsonrpc = require("./jsonrpc");
parcelHelpers.exportAll(_jsonrpc, exports);
var _validators = require("./validators");
parcelHelpers.exportAll(_validators, exports);

},{"./types":"k3brK","./parsers":"iipfW","./jsonrpc":"jNbf4","./validators":"bbijs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k3brK":[function(require,module,exports) {

},{}],"iipfW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseSubscribeRequest", ()=>parseSubscribeRequest);
parcelHelpers.export(exports, "parsePublishRequest", ()=>parsePublishRequest);
parcelHelpers.export(exports, "parseUnsubscribeRequest", ()=>parseUnsubscribeRequest);
parcelHelpers.export(exports, "parseSubscriptionRequest", ()=>parseSubscriptionRequest);
var _misc = require("./misc");
var _validators = require("./validators");
function parseSubscribeRequest(request) {
    if (!(0, _validators.isSubscribeMethod)(request.method)) throw new Error("JSON-RPC Request has invalid subscribe method");
    if (!(0, _validators.isSubscribeParams)(request.params)) throw new Error("JSON-RPC Request has invalid subscribe params");
    const params = request.params;
    (0, _misc.assertType)(params, "topic");
    return params;
}
function parsePublishRequest(request) {
    if (!(0, _validators.isPublishMethod)(request.method)) throw new Error("JSON-RPC Request has invalid publish method");
    if (!(0, _validators.isPublishParams)(request.params)) throw new Error("JSON-RPC Request has invalid publish params");
    const params = request.params;
    (0, _misc.assertType)(params, "topic");
    (0, _misc.assertType)(params, "message");
    (0, _misc.assertType)(params, "ttl", "number");
    return params;
}
function parseUnsubscribeRequest(request) {
    if (!(0, _validators.isUnsubscribeMethod)(request.method)) throw new Error("JSON-RPC Request has invalid unsubscribe method");
    if (!(0, _validators.isUnsubscribeParams)(request.params)) throw new Error("JSON-RPC Request has invalid unsubscribe params");
    const params = request.params;
    (0, _misc.assertType)(params, "id");
    return params;
}
function parseSubscriptionRequest(request) {
    if (!(0, _validators.isSubscriptionMethod)(request.method)) throw new Error("JSON-RPC Request has invalid subscription method");
    if (!(0, _validators.isSubscriptionParams)(request.params)) throw new Error("JSON-RPC Request has invalid subscription params");
    const params = request.params;
    (0, _misc.assertType)(params, "id");
    (0, _misc.assertType)(params, "data");
    return params;
}

},{"./misc":"jc0TB","./validators":"bbijs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jc0TB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertType", ()=>assertType);
parcelHelpers.export(exports, "hasRequiredParams", ()=>hasRequiredParams);
parcelHelpers.export(exports, "hasExactParamsLength", ()=>hasExactParamsLength);
parcelHelpers.export(exports, "hasRequiredParamsLength", ()=>hasRequiredParamsLength);
parcelHelpers.export(exports, "checkParams", ()=>checkParams);
parcelHelpers.export(exports, "methodEndsWith", ()=>methodEndsWith);
function assertType(obj, key, type = "string") {
    if (!obj[key] || typeof obj[key] !== type) throw new Error(`Missing or invalid "${key}" param`);
}
function hasRequiredParams(params, required) {
    let matches = true;
    required.forEach((key)=>{
        const exists = key in params;
        if (!exists) matches = false;
    });
    return matches;
}
function hasExactParamsLength(params, length) {
    return Array.isArray(params) ? params.length === length : Object.keys(params).length === length;
}
function hasRequiredParamsLength(params, minLength) {
    return Array.isArray(params) ? params.length >= minLength : Object.keys(params).length >= minLength;
}
function checkParams(params, required, optional) {
    const exact = !optional.length;
    const matchesLength = exact ? hasExactParamsLength(params, required.length) : hasRequiredParamsLength(params, required.length);
    if (!matchesLength) return false;
    return hasRequiredParams(params, required);
}
function methodEndsWith(method, expected, separator = "_") {
    const split = method.split(separator);
    return split[split.length - 1].trim().toLowerCase() === expected.trim().toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbijs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSubscribeRequest", ()=>isSubscribeRequest);
parcelHelpers.export(exports, "isSubscribeMethod", ()=>isSubscribeMethod);
parcelHelpers.export(exports, "isSubscribeParams", ()=>isSubscribeParams);
parcelHelpers.export(exports, "isPublishRequest", ()=>isPublishRequest);
parcelHelpers.export(exports, "isPublishMethod", ()=>isPublishMethod);
parcelHelpers.export(exports, "isPublishParams", ()=>isPublishParams);
parcelHelpers.export(exports, "isUnsubscribeRequest", ()=>isUnsubscribeRequest);
parcelHelpers.export(exports, "isUnsubscribeMethod", ()=>isUnsubscribeMethod);
parcelHelpers.export(exports, "isUnsubscribeParams", ()=>isUnsubscribeParams);
parcelHelpers.export(exports, "isSubscriptionRequest", ()=>isSubscriptionRequest);
parcelHelpers.export(exports, "isSubscriptionMethod", ()=>isSubscriptionMethod);
parcelHelpers.export(exports, "isSubscriptionParams", ()=>isSubscriptionParams);
var _misc = require("./misc");
function isSubscribeRequest(request) {
    return isSubscribeMethod(request.method) && isSubscribeParams(request.params);
}
function isSubscribeMethod(method) {
    return (0, _misc.methodEndsWith)(method, "subscribe");
}
function isSubscribeParams(params) {
    const required = [
        "topic"
    ];
    const optional = [];
    return (0, _misc.checkParams)(params, required, optional);
}
function isPublishRequest(request) {
    return isPublishMethod(request.method) && isPublishParams(request.params);
}
function isPublishMethod(method) {
    return (0, _misc.methodEndsWith)(method, "publish");
}
function isPublishParams(params) {
    const required = [
        "message",
        "topic",
        "ttl"
    ];
    const optional = [
        "prompt",
        "tag"
    ];
    return (0, _misc.checkParams)(params, required, optional);
}
function isUnsubscribeRequest(request) {
    return isUnsubscribeMethod(request.method) && isUnsubscribeParams(request.params);
}
function isUnsubscribeMethod(method) {
    return (0, _misc.methodEndsWith)(method, "unsubscribe");
}
function isUnsubscribeParams(params) {
    const required = [
        "id",
        "topic"
    ];
    const optional = [];
    return (0, _misc.checkParams)(params, required, optional);
}
function isSubscriptionRequest(request) {
    return isSubscriptionMethod(request.method) && isSubscriptionParams(request.params);
}
function isSubscriptionMethod(method) {
    return (0, _misc.methodEndsWith)(method, "subscription");
}
function isSubscriptionParams(params) {
    const required = [
        "id",
        "data"
    ];
    const optional = [];
    return (0, _misc.checkParams)(params, required, optional);
}

},{"./misc":"jc0TB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNbf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RELAY_JSONRPC", ()=>RELAY_JSONRPC);
const RELAY_JSONRPC = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCWZv":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
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
exports.computeVersionedHash = exports.TransactionFactory = exports.Transaction = exports.kzg = exports.initKZG = exports.BlobEIP4844Transaction = exports.AccessListEIP2930Transaction = exports.FeeMarketEIP1559Transaction = void 0;
var eip1559Transaction_1 = require("fd27ebae9b95145a");
Object.defineProperty(exports, "FeeMarketEIP1559Transaction", {
    enumerable: true,
    get: function() {
        return eip1559Transaction_1.FeeMarketEIP1559Transaction;
    }
});
var eip2930Transaction_1 = require("5dce12e61853c98d");
Object.defineProperty(exports, "AccessListEIP2930Transaction", {
    enumerable: true,
    get: function() {
        return eip2930Transaction_1.AccessListEIP2930Transaction;
    }
});
var eip4844Transaction_1 = require("1a9f0eeb6711366a");
Object.defineProperty(exports, "BlobEIP4844Transaction", {
    enumerable: true,
    get: function() {
        return eip4844Transaction_1.BlobEIP4844Transaction;
    }
});
var kzg_1 = require("8f52cb7ea095e1a8");
Object.defineProperty(exports, "initKZG", {
    enumerable: true,
    get: function() {
        return kzg_1.initKZG;
    }
});
Object.defineProperty(exports, "kzg", {
    enumerable: true,
    get: function() {
        return kzg_1.kzg;
    }
});
var legacyTransaction_1 = require("c17e676360bc1594");
Object.defineProperty(exports, "Transaction", {
    enumerable: true,
    get: function() {
        return legacyTransaction_1.Transaction;
    }
});
var transactionFactory_1 = require("cc2df24f82400376");
Object.defineProperty(exports, "TransactionFactory", {
    enumerable: true,
    get: function() {
        return transactionFactory_1.TransactionFactory;
    }
});
__exportStar(require("b4e8212db0343cfa"), exports);
var blobHelpers_1 = require("d9069728543be98b");
Object.defineProperty(exports, "computeVersionedHash", {
    enumerable: true,
    get: function() {
        return blobHelpers_1.computeVersionedHash;
    }
});

},{"fd27ebae9b95145a":"8R3Ks","5dce12e61853c98d":"56Q0M","1a9f0eeb6711366a":"71ylt","8f52cb7ea095e1a8":"4RVGS","c17e676360bc1594":"lqFvu","cc2df24f82400376":"dfSOO","b4e8212db0343cfa":"4zxw4","d9069728543be98b":"eK56v"}],"8R3Ks":[function(require,module,exports) {
var Buffer = require("23d4fe79d48e72e").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeeMarketEIP1559Transaction = void 0;
const rlp_1 = require("9440f81164644718");
const util_1 = require("f885330d35b9e6ef");
const keccak_1 = require("db4d05c963ac6f91");
const baseTransaction_1 = require("2a0256d9fdfae4c2");
const util_2 = require("ccedb897234898b");
const TRANSACTION_TYPE = 2;
const TRANSACTION_TYPE_BUFFER = Buffer.from(TRANSACTION_TYPE.toString(16).padStart(2, "0"), "hex");
/**
 * Typed transaction with a new gas fee market mechanism
 *
 * - TransactionType: 2
 * - EIP: [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)
 */ class FeeMarketEIP1559Transaction extends baseTransaction_1.BaseTransaction {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        super({
            ...txData,
            type: TRANSACTION_TYPE
        }, opts);
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = "london";
        const { chainId , accessList , maxFeePerGas , maxPriorityFeePerGas  } = txData;
        this.common = this._getCommon(opts.common, chainId);
        this.chainId = this.common.chainId();
        if (this.common.isActivatedEIP(1559) === false) throw new Error("EIP-1559 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([
            1559,
            2718,
            2930
        ]);
        // Populate the access list fields
        const accessListData = util_2.AccessLists.getAccessListData(accessList ?? []);
        this.accessList = accessListData.accessList;
        this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        util_2.AccessLists.verifyAccessList(this.accessList);
        this.maxFeePerGas = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(maxFeePerGas === "" ? "0x" : maxFeePerGas));
        this.maxPriorityFeePerGas = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(maxPriorityFeePerGas === "" ? "0x" : maxPriorityFeePerGas));
        this._validateCannotExceedMaxInteger({
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas
        });
        baseTransaction_1.BaseTransaction._validateNotArray(txData);
        if (this.gasLimit * this.maxFeePerGas > util_1.MAX_INTEGER) {
            const msg = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(msg);
        }
        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
            const msg = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
            throw new Error(msg);
        }
        this._validateYParity();
        this._validateHighS();
        if (this.common.isActivatedEIP(3860)) (0, util_2.checkMaxInitCodeSize)(this.common, this.data.length);
        const freeze = opts?.freeze ?? true;
        if (freeze) Object.freeze(this);
    }
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new FeeMarketEIP1559Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     */ static fromSerializedTx(serialized, opts = {}) {
        if (!serialized.slice(0, 1).equals(TRANSACTION_TYPE_BUFFER)) throw new Error(`Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ${TRANSACTION_TYPE}, received: ${serialized.slice(0, 1).toString("hex")}`);
        const values = (0, util_1.arrToBufArr)(rlp_1.RLP.decode(serialized.slice(1)));
        if (!Array.isArray(values)) throw new Error("Invalid serialized tx input: must be array");
        return FeeMarketEIP1559Transaction.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     */ static fromValuesArray(values, opts = {}) {
        if (values.length !== 9 && values.length !== 12) throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");
        const [chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, v, r, s] = values;
        this._validateNotArray({
            chainId,
            v
        });
        (0, util_1.validateNoLeadingZeroes)({
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gasLimit,
            value,
            v,
            r,
            s
        });
        return new FeeMarketEIP1559Transaction({
            chainId: (0, util_1.bufferToBigInt)(chainId),
            nonce,
            maxPriorityFeePerGas,
            maxFeePerGas,
            gasLimit,
            to,
            value,
            data,
            accessList: accessList ?? [],
            v: v !== undefined ? (0, util_1.bufferToBigInt)(v) : undefined,
            r,
            s
        }, opts);
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
        let cost = super.getDataFee();
        cost += BigInt(util_2.AccessLists.getDataFeeEIP2930(this.accessList, this.common));
        if (Object.isFrozen(this)) this.cache.dataFee = {
            value: cost,
            hardfork: this.common.hardfork()
        };
        return cost;
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */ getUpfrontCost(baseFee = BigInt(0)) {
        const prio = this.maxPriorityFeePerGas;
        const maxBase = this.maxFeePerGas - baseFee;
        const inclusionFeePerGas = prio < maxBase ? prio : maxBase;
        const gasPrice = inclusionFeePerGas + baseFee;
        return this.gasLimit * gasPrice + this.value;
    }
    /**
     * Returns a Buffer Array of the raw Buffers of the EIP-1559 transaction, in order.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     *
     * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, util_1.bigIntToUnpaddedBuffer)(this.chainId),
            (0, util_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, util_1.bigIntToUnpaddedBuffer)(this.maxPriorityFeePerGas),
            (0, util_1.bigIntToUnpaddedBuffer)(this.maxFeePerGas),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, util_1.bigIntToUnpaddedBuffer)(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the EIP-1559 transaction.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */ serialize() {
        const base = this.raw();
        return Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            Buffer.from(rlp_1.RLP.encode((0, util_1.bufArrToArr)(base)))
        ]);
    }
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */ getMessageToSign(hashMessage = true) {
        const base = this.raw().slice(0, 9);
        const message = Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            Buffer.from(rlp_1.RLP.encode((0, util_1.bufArrToArr)(base)))
        ]);
        if (hashMessage) return Buffer.from((0, keccak_1.keccak256)(message));
        else return message;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) this.cache.hash = Buffer.from((0, keccak_1.keccak256)(this.serialize()));
            return this.cache.hash;
        }
        return Buffer.from((0, keccak_1.keccak256)(this.serialize()));
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(msg);
        }
        const msgHash = this.getMessageToVerifySignature();
        const { v , r , s  } = this;
        this._validateHighS();
        try {
            return (0, util_1.ecrecover)(msgHash, v + BigInt(27), (0, util_1.bigIntToUnpaddedBuffer)(r), (0, util_1.bigIntToUnpaddedBuffer)(s));
        } catch (e) {
            const msg = this._errorMsg("Invalid Signature");
            throw new Error(msg);
        }
    }
    _processSignature(v, r, s) {
        const opts = {
            ...this.txOptions,
            common: this.common
        };
        return FeeMarketEIP1559Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: v - BigInt(27),
            r: (0, util_1.bufferToBigInt)(r),
            s: (0, util_1.bufferToBigInt)(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     */ toJSON() {
        const accessListJSON = util_2.AccessLists.getAccessListJSON(this.accessList);
        return {
            chainId: (0, util_1.bigIntToHex)(this.chainId),
            nonce: (0, util_1.bigIntToHex)(this.nonce),
            maxPriorityFeePerGas: (0, util_1.bigIntToHex)(this.maxPriorityFeePerGas),
            maxFeePerGas: (0, util_1.bigIntToHex)(this.maxFeePerGas),
            gasLimit: (0, util_1.bigIntToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, util_1.bigIntToHex)(this.value),
            data: "0x" + this.data.toString("hex"),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, util_1.bigIntToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, util_1.bigIntToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, util_1.bigIntToHex)(this.s) : undefined
        };
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
}
exports.FeeMarketEIP1559Transaction = FeeMarketEIP1559Transaction;

},{"23d4fe79d48e72e":"fCgem","9440f81164644718":"chaum","f885330d35b9e6ef":"2ctjb","db4d05c963ac6f91":"e6qJj","2a0256d9fdfae4c2":"54vs0","ccedb897234898b":"1dOHp"}],"e6qJj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak512 = exports.keccak384 = exports.keccak256 = exports.keccak224 = void 0;
const sha3_1 = require("185481c48b95d0b1");
const utils_1 = require("568acb8f9c834785");
exports.keccak224 = (0, utils_1.wrapHash)(sha3_1.keccak_224);
exports.keccak256 = (()=>{
    const k = (0, utils_1.wrapHash)(sha3_1.keccak_256);
    k.create = sha3_1.keccak_256.create;
    return k;
})();
exports.keccak384 = (0, utils_1.wrapHash)(sha3_1.keccak_384);
exports.keccak512 = (0, utils_1.wrapHash)(sha3_1.keccak_512);

},{"185481c48b95d0b1":"7YJSg","568acb8f9c834785":"aXCOG"}],"aXCOG":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = exports.wrapHash = exports.equalsBytes = exports.hexToBytes = exports.bytesToUtf8 = exports.utf8ToBytes = exports.createView = exports.concatBytes = exports.toHex = exports.bytesToHex = exports.assertBytes = exports.assertBool = void 0;
// buf.toString('hex') -> toHex(buf)
const _assert_1 = __importDefault(require("6556d918ad69d9ad"));
const utils_1 = require("6d3bb62b51d4e5a9");
const assertBool = _assert_1.default.bool;
exports.assertBool = assertBool;
const assertBytes = _assert_1.default.bytes;
exports.assertBytes = assertBytes;
var utils_2 = require("6d3bb62b51d4e5a9");
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return utils_2.bytesToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return utils_2.bytesToHex;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return utils_2.concatBytes;
    }
});
Object.defineProperty(exports, "createView", {
    enumerable: true,
    get: function() {
        return utils_2.createView;
    }
});
Object.defineProperty(exports, "utf8ToBytes", {
    enumerable: true,
    get: function() {
        return utils_2.utf8ToBytes;
    }
});
// buf.toString('utf8') -> bytesToUtf8(buf)
function bytesToUtf8(data) {
    if (!(data instanceof Uint8Array)) throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof data}`);
    return new TextDecoder().decode(data);
}
exports.bytesToUtf8 = bytesToUtf8;
function hexToBytes(data) {
    const sliced = data.startsWith("0x") ? data.substring(2) : data;
    return (0, utils_1.hexToBytes)(sliced);
}
exports.hexToBytes = hexToBytes;
// buf.equals(buf2) -> equalsBytes(buf, buf2)
function equalsBytes(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
exports.equalsBytes = equalsBytes;
// Internal utils
function wrapHash(hash) {
    return (msg)=>{
        _assert_1.default.bytes(msg);
        return hash(msg);
    };
}
exports.wrapHash = wrapHash;
exports.crypto = (()=>{
    const webCrypto = typeof self === "object" && "crypto" in self ? self.crypto : undefined;
    const nodeRequire = typeof module.require === "function" && module.require.bind(module);
    return {
        node: nodeRequire && !webCrypto ? nodeRequire("crypto") : undefined,
        web: webCrypto
    };
})();

},{"6556d918ad69d9ad":"BFdql","6d3bb62b51d4e5a9":"2ehgp"}],"54vs0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseTransaction = void 0;
const common_1 = require("7096278d021ef693");
const util_1 = require("207c63430a9d5c99");
const types_1 = require("f70efdaf8c064608");
/**
 * This base class will likely be subject to further
 * refactoring along the introduction of additional tx types
 * on the Ethereum network.
 *
 * It is therefore not recommended to use directly.
 */ class BaseTransaction {
    constructor(txData, opts){
        this.cache = {
            hash: undefined,
            dataFee: undefined
        };
        /**
         * List of tx type defining EIPs,
         * e.g. 1559 (fee market) and 2930 (access lists)
         * for FeeMarketEIP1559Transaction objects
         */ this.activeCapabilities = [];
        /**
         * The default chain the tx falls back to if no Common
         * is provided and if the chain can't be derived from
         * a passed in chainId (only EIP-2718 typed txs) or
         * EIP-155 signature (legacy txs).
         *
         * @hidden
         */ this.DEFAULT_CHAIN = common_1.Chain.Mainnet;
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = common_1.Hardfork.Merge;
        const { nonce , gasLimit , to , value , data , v , r , s , type  } = txData;
        this._type = Number((0, util_1.bufferToBigInt)((0, util_1.toBuffer)(type)));
        this.txOptions = opts;
        const toB = (0, util_1.toBuffer)(to === "" ? "0x" : to);
        const vB = (0, util_1.toBuffer)(v === "" ? "0x" : v);
        const rB = (0, util_1.toBuffer)(r === "" ? "0x" : r);
        const sB = (0, util_1.toBuffer)(s === "" ? "0x" : s);
        this.nonce = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(nonce === "" ? "0x" : nonce));
        this.gasLimit = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(gasLimit === "" ? "0x" : gasLimit));
        this.to = toB.length > 0 ? new util_1.Address(toB) : undefined;
        this.value = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(value === "" ? "0x" : value));
        this.data = (0, util_1.toBuffer)(data === "" ? "0x" : data);
        this.v = vB.length > 0 ? (0, util_1.bufferToBigInt)(vB) : undefined;
        this.r = rB.length > 0 ? (0, util_1.bufferToBigInt)(rB) : undefined;
        this.s = sB.length > 0 ? (0, util_1.bufferToBigInt)(sB) : undefined;
        this._validateCannotExceedMaxInteger({
            value: this.value,
            r: this.r,
            s: this.s
        });
        // geth limits gasLimit to 2^64-1
        this._validateCannotExceedMaxInteger({
            gasLimit: this.gasLimit
        }, 64);
        // EIP-2681 limits nonce to 2^64-1 (cannot equal 2^64-1)
        this._validateCannotExceedMaxInteger({
            nonce: this.nonce
        }, 64, true);
    }
    /**
     * Returns the transaction type.
     *
     * Note: legacy txs will return tx type `0`.
     */ get type() {
        return this._type;
    }
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilites` in the `types` module for a reference
     * on all supported capabilities.
     */ supports(capability) {
        return this.activeCapabilities.includes(capability);
    }
    validate(stringError = false) {
        const errors = [];
        if (this.getBaseFee() > this.gasLimit) errors.push(`gasLimit is too low. given ${this.gasLimit}, need at least ${this.getBaseFee()}`);
        if (this.isSigned() && !this.verifySignature()) errors.push("Invalid Signature");
        return stringError ? errors : errors.length === 0;
    }
    _validateYParity() {
        const { v  } = this;
        if (v !== undefined && v !== BigInt(0) && v !== BigInt(1)) {
            const msg = this._errorMsg("The y-parity of the transaction should either be 0 or 1");
            throw new Error(msg);
        }
    }
    /**
     * EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2are considered invalid.
     * Reasoning: https://ethereum.stackexchange.com/a/55728
     */ _validateHighS() {
        const { s  } = this;
        if (this.common.gteHardfork("homestead") && s !== undefined && s > util_1.SECP256K1_ORDER_DIV_2) {
            const msg = this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");
            throw new Error(msg);
        }
    }
    /**
     * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
     */ getBaseFee() {
        const txFee = this.common.param("gasPrices", "tx");
        let fee = this.getDataFee();
        if (txFee) fee += txFee;
        if (this.common.gteHardfork("homestead") && this.toCreationAddress()) {
            const txCreationFee = this.common.param("gasPrices", "txCreation");
            if (txCreationFee) fee += txCreationFee;
        }
        return fee;
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        const txDataZero = this.common.param("gasPrices", "txDataZero");
        const txDataNonZero = this.common.param("gasPrices", "txDataNonZero");
        let cost = BigInt(0);
        for(let i = 0; i < this.data.length; i++)this.data[i] === 0 ? cost += txDataZero : cost += txDataNonZero;
        if ((this.to === undefined || this.to === null) && this.common.isActivatedEIP(3860)) {
            const dataLength = BigInt(Math.ceil(this.data.length / 32));
            const initCodeCost = this.common.param("gasPrices", "initCodeWordCost") * dataLength;
            cost += initCodeCost;
        }
        return cost;
    }
    /**
     * If the tx's `to` is to the creation address
     */ toCreationAddress() {
        return this.to === undefined || this.to.buf.length === 0;
    }
    isSigned() {
        const { v , r , s  } = this;
        if (v === undefined || r === undefined || s === undefined) return false;
        else return true;
    }
    /**
     * Determines if the signature is valid
     */ verifySignature() {
        try {
            // Main signature verification is done in `getSenderPublicKey()`
            const publicKey = this.getSenderPublicKey();
            return (0, util_1.unpadBuffer)(publicKey).length !== 0;
        } catch (e) {
            return false;
        }
    }
    /**
     * Returns the sender's address
     */ getSenderAddress() {
        return new util_1.Address((0, util_1.publicToAddress)(this.getSenderPublicKey()));
    }
    /**
     * Signs a transaction.
     *
     * Note that the signed tx is returned as a new object,
     * use as follows:
     * ```javascript
     * const signedTx = tx.sign(privateKey)
     * ```
     */ sign(privateKey) {
        if (privateKey.length !== 32) {
            const msg = this._errorMsg("Private key must be 32 bytes in length.");
            throw new Error(msg);
        }
        // Hack for the constellation that we have got a legacy tx after spuriousDragon with a non-EIP155 conforming signature
        // and want to recreate a signature (where EIP155 should be applied)
        // Leaving this hack lets the legacy.spec.ts -> sign(), verifySignature() test fail
        // 2021-06-23
        let hackApplied = false;
        if (this.type === 0 && this.common.gteHardfork("spuriousDragon") && !this.supports(types_1.Capability.EIP155ReplayProtection)) {
            this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
            hackApplied = true;
        }
        const msgHash = this.getMessageToSign(true);
        const { v , r , s  } = (0, util_1.ecsign)(msgHash, privateKey);
        const tx = this._processSignature(v, r, s);
        // Hack part 2
        if (hackApplied) {
            const index = this.activeCapabilities.indexOf(types_1.Capability.EIP155ReplayProtection);
            if (index > -1) this.activeCapabilities.splice(index, 1);
        }
        return tx;
    }
    /**
     * Does chain ID checks on common and returns a common
     * to be used on instantiation
     * @hidden
     *
     * @param common - {@link Common} instance from tx options
     * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
     */ _getCommon(common, chainId) {
        // Chain ID provided
        if (chainId !== undefined) {
            const chainIdBigInt = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(chainId));
            if (common) {
                if (common.chainId() !== chainIdBigInt) {
                    const msg = this._errorMsg("The chain ID does not match the chain ID of Common");
                    throw new Error(msg);
                }
                // Common provided, chain ID does match
                // -> Return provided Common
                return common.copy();
            } else {
                if (common_1.Common.isSupportedChainId(chainIdBigInt)) // No Common, chain ID supported by Common
                // -> Instantiate Common with chain ID
                return new common_1.Common({
                    chain: chainIdBigInt,
                    hardfork: this.DEFAULT_HARDFORK
                });
                else // No Common, chain ID not supported by Common
                // -> Instantiate custom Common derived from DEFAULT_CHAIN
                return common_1.Common.custom({
                    name: "custom-chain",
                    networkId: chainIdBigInt,
                    chainId: chainIdBigInt
                }, {
                    baseChain: this.DEFAULT_CHAIN,
                    hardfork: this.DEFAULT_HARDFORK
                });
            }
        } else // No chain ID provided
        // -> return Common provided or create new default Common
        return common?.copy() ?? new common_1.Common({
            chain: this.DEFAULT_CHAIN,
            hardfork: this.DEFAULT_HARDFORK
        });
    }
    /**
     * Validates that an object with BigInt values cannot exceed the specified bit limit.
     * @param values Object containing string keys and BigInt values
     * @param bits Number of bits to check (64 or 256)
     * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
     */ _validateCannotExceedMaxInteger(values, bits = 256, cannotEqual = false) {
        for (const [key, value] of Object.entries(values))switch(bits){
            case 64:
                if (cannotEqual) {
                    if (value !== undefined && value >= util_1.MAX_UINT64) {
                        const msg = this._errorMsg(`${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`);
                        throw new Error(msg);
                    }
                } else if (value !== undefined && value > util_1.MAX_UINT64) {
                    const msg = this._errorMsg(`${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`);
                    throw new Error(msg);
                }
                break;
            case 256:
                if (cannotEqual) {
                    if (value !== undefined && value >= util_1.MAX_INTEGER) {
                        const msg = this._errorMsg(`${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`);
                        throw new Error(msg);
                    }
                } else if (value !== undefined && value > util_1.MAX_INTEGER) {
                    const msg = this._errorMsg(`${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`);
                    throw new Error(msg);
                }
                break;
            default:
                {
                    const msg = this._errorMsg("unimplemented bits value");
                    throw new Error(msg);
                }
        }
    }
    static _validateNotArray(values) {
        const txDataKeys = [
            "nonce",
            "gasPrice",
            "gasLimit",
            "to",
            "value",
            "data",
            "v",
            "r",
            "s",
            "type",
            "baseFee",
            "maxFeePerGas",
            "chainId"
        ];
        for (const [key, value] of Object.entries(values))if (txDataKeys.includes(key)) {
            if (Array.isArray(value)) throw new Error(`${key} cannot be an array`);
        }
    }
    /**
     * Returns the shared error postfix part for _error() method
     * tx type implementations.
     */ _getSharedErrorPostfix() {
        let hash = "";
        try {
            hash = this.isSigned() ? (0, util_1.bufferToHex)(this.hash()) : "not available (unsigned)";
        } catch (e) {
            hash = "error";
        }
        let isSigned = "";
        try {
            isSigned = this.isSigned().toString();
        } catch (e) {
            hash = "error";
        }
        let hf = "";
        try {
            hf = this.common.hardfork();
        } catch (e) {
            hf = "error";
        }
        let postfix = `tx type=${this.type} hash=${hash} nonce=${this.nonce} value=${this.value} `;
        postfix += `signed=${isSigned} hf=${hf}`;
        return postfix;
    }
}
exports.BaseTransaction = BaseTransaction;

},{"7096278d021ef693":"4czRJ","207c63430a9d5c99":"2ctjb","f70efdaf8c064608":"4zxw4"}],"4czRJ":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
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
__exportStar(require("f8d52f2db071e35b"), exports);
__exportStar(require("ae4c1b4bd837de42"), exports);
__exportStar(require("4b86ac6f1b9df881"), exports);
__exportStar(require("6b4efe3a13dad430"), exports);

},{"f8d52f2db071e35b":"gGOl7","ae4c1b4bd837de42":"6L8wT","4b86ac6f1b9df881":"l9kQE","6b4efe3a13dad430":"demc7"}],"gGOl7":[function(require,module,exports) {
var Buffer = require("6054da6d327c040f").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Common = void 0;
const util_1 = require("751e19f029046797");
const crc_32_1 = require("b4930f2bffe9a750");
const events_1 = require("4171b37d40009f1f");
const goerli = require("2d6fe906b1fc0b2c");
const mainnet = require("bd01ac3d9d204508");
const rinkeby = require("b268de40e6e0a864");
const ropsten = require("de085cf0244ae84");
const sepolia = require("17e2b0ce18bb8c22");
const eips_1 = require("5223477a25a74cf6");
const enums_1 = require("93e11e760794077c");
const hardforks_1 = require("98b7af4975ce5822");
const utils_1 = require("c9a6e45d48e8b4d9");
/**
 * Common class to access chain and hardfork parameters and to provide
 * a unified and shared view on the network and hardfork state.
 *
 * Use the {@link Common.custom} static constructor for creating simple
 * custom chain {@link Common} objects (more complete custom chain setups
 * can be created via the main constructor and the {@link CommonOpts.customChains} parameter).
 */ class Common extends events_1.EventEmitter {
    constructor(opts){
        super();
        this._eips = [];
        this._customChains = opts.customChains ?? [];
        this._chainParams = this.setChain(opts.chain);
        this.DEFAULT_HARDFORK = this._chainParams.defaultHardfork ?? enums_1.Hardfork.Merge;
        // Assign hardfork changes in the sequence of the applied hardforks
        this.HARDFORK_CHANGES = this.hardforks().map((hf)=>[
                hf.name,
                hardforks_1.hardforks[hf.name]
            ]);
        this._hardfork = this.DEFAULT_HARDFORK;
        if (opts.hardfork !== undefined) this.setHardfork(opts.hardfork);
        if (opts.eips) this.setEIPs(opts.eips);
    }
    /**
     * Creates a {@link Common} object for a custom chain, based on a standard one.
     *
     * It uses all the {@link Chain} parameters from the {@link baseChain} option except the ones overridden
     * in a provided {@link chainParamsOrName} dictionary. Some usage example:
     *
     * ```javascript
     * Common.custom({chainId: 123})
     * ```
     *
     * There are also selected supported custom chains which can be initialized by using one of the
     * {@link CustomChains} for {@link chainParamsOrName}, e.g.:
     *
     * ```javascript
     * Common.custom(CustomChains.MaticMumbai)
     * ```
     *
     * Note that these supported custom chains only provide some base parameters (usually the chain and
     * network ID and a name) and can only be used for selected use cases (e.g. sending a tx with
     * the `@ethereumjs/tx` library to a Layer-2 chain).
     *
     * @param chainParamsOrName Custom parameter dict (`name` will default to `custom-chain`) or string with name of a supported custom chain
     * @param opts Custom chain options to set the {@link CustomCommonOpts.baseChain}, selected {@link CustomCommonOpts.hardfork} and others
     */ static custom(chainParamsOrName, opts = {}) {
        const baseChain = opts.baseChain ?? "mainnet";
        const standardChainParams = {
            ...Common._getChainParams(baseChain)
        };
        standardChainParams["name"] = "custom-chain";
        if (typeof chainParamsOrName !== "string") return new Common({
            chain: {
                ...standardChainParams,
                ...chainParamsOrName
            },
            ...opts
        });
        else {
            if (chainParamsOrName === enums_1.CustomChain.PolygonMainnet) return Common.custom({
                name: enums_1.CustomChain.PolygonMainnet,
                chainId: 137,
                networkId: 137
            }, opts);
            if (chainParamsOrName === enums_1.CustomChain.PolygonMumbai) return Common.custom({
                name: enums_1.CustomChain.PolygonMumbai,
                chainId: 80001,
                networkId: 80001
            }, opts);
            if (chainParamsOrName === enums_1.CustomChain.ArbitrumRinkebyTestnet) return Common.custom({
                name: enums_1.CustomChain.ArbitrumRinkebyTestnet,
                chainId: 421611,
                networkId: 421611
            }, opts);
            if (chainParamsOrName === enums_1.CustomChain.ArbitrumOne) return Common.custom({
                name: enums_1.CustomChain.ArbitrumOne,
                chainId: 42161,
                networkId: 42161
            }, opts);
            if (chainParamsOrName === enums_1.CustomChain.xDaiChain) return Common.custom({
                name: enums_1.CustomChain.xDaiChain,
                chainId: 100,
                networkId: 100
            }, opts);
            if (chainParamsOrName === enums_1.CustomChain.OptimisticKovan) return Common.custom({
                name: enums_1.CustomChain.OptimisticKovan,
                chainId: 69,
                networkId: 69
            }, // Optimism has not implemented the London hardfork yet (targeting Q1.22)
            {
                hardfork: enums_1.Hardfork.Berlin,
                ...opts
            });
            if (chainParamsOrName === enums_1.CustomChain.OptimisticEthereum) return Common.custom({
                name: enums_1.CustomChain.OptimisticEthereum,
                chainId: 10,
                networkId: 10
            }, // Optimism has not implemented the London hardfork yet (targeting Q1.22)
            {
                hardfork: enums_1.Hardfork.Berlin,
                ...opts
            });
            throw new Error(`Custom chain ${chainParamsOrName} not supported`);
        }
    }
    /**
     * Static method to load and set common from a geth genesis json
     * @param genesisJson json of geth configuration
     * @param { chain, eips, genesisHash, hardfork, mergeForkIdPostMerge } to further configure the common instance
     * @returns Common
     */ static fromGethGenesis(genesisJson, { chain , eips , genesisHash , hardfork , mergeForkIdPostMerge  }) {
        const genesisParams = (0, utils_1.parseGethGenesis)(genesisJson, chain, mergeForkIdPostMerge);
        const common = new Common({
            chain: genesisParams.name ?? "custom",
            customChains: [
                genesisParams
            ],
            eips,
            hardfork: hardfork ?? genesisParams.hardfork
        });
        if (genesisHash !== undefined) common.setForkHashes(genesisHash);
        return common;
    }
    /**
     * Static method to determine if a {@link chainId} is supported as a standard chain
     * @param chainId bigint id (`1`) of a standard chain
     * @returns boolean
     */ static isSupportedChainId(chainId) {
        const initializedChains = this._getInitializedChains();
        return Boolean(initializedChains["names"][chainId.toString()]);
    }
    static _getChainParams(chain, customChains) {
        const initializedChains = this._getInitializedChains(customChains);
        if (typeof chain === "number" || typeof chain === "bigint") {
            chain = chain.toString();
            if (initializedChains["names"][chain]) {
                const name = initializedChains["names"][chain];
                return initializedChains[name];
            }
            throw new Error(`Chain with ID ${chain} not supported`);
        }
        if (initializedChains[chain] !== undefined) return initializedChains[chain];
        throw new Error(`Chain with name ${chain} not supported`);
    }
    /**
     * Sets the chain
     * @param chain String ('mainnet') or Number (1) chain representation.
     *              Or, a Dictionary of chain parameters for a private network.
     * @returns The dictionary with parameters set as chain
     */ setChain(chain) {
        if (typeof chain === "number" || typeof chain === "bigint" || typeof chain === "string") this._chainParams = Common._getChainParams(chain, this._customChains);
        else if (typeof chain === "object") {
            if (this._customChains.length > 0) throw new Error("Chain must be a string, number, or bigint when initialized with customChains passed in");
            const required = [
                "networkId",
                "genesis",
                "hardforks",
                "bootstrapNodes"
            ];
            for (const param of required){
                if (!(param in chain)) throw new Error(`Missing required chain parameter: ${param}`);
            }
            this._chainParams = chain;
        } else throw new Error("Wrong input format");
        for (const hf of this.hardforks()){
            if (hf.block === undefined) throw new Error(`Hardfork cannot have undefined block number`);
        }
        return this._chainParams;
    }
    /**
     * Sets the hardfork to get params for
     * @param hardfork String identifier (e.g. 'byzantium') or {@link Hardfork} enum
     */ setHardfork(hardfork) {
        let existing = false;
        for (const hfChanges of this.HARDFORK_CHANGES)if (hfChanges[0] === hardfork) {
            if (this._hardfork !== hardfork) {
                this._hardfork = hardfork;
                this.emit("hardforkChanged", hardfork);
            }
            existing = true;
        }
        if (!existing) throw new Error(`Hardfork with name ${hardfork} not supported`);
    }
    /**
     * Returns the hardfork based on the block number or an optional
     * total difficulty (Merge HF) provided.
     *
     * An optional TD takes precedence in case the corresponding HF block
     * is set to `null` or otherwise needs to match (if not an error
     * will be thrown).
     *
     * @param blockNumber
     * @param td : total difficulty of the parent block (for block hf) OR of the chain latest (for chain hf)
     * @param timestamp: timestamp in seconds at which block was/is to be minted
     * @returns The name of the HF
     */ getHardforkByBlockNumber(blockNumber, td, timestamp) {
        blockNumber = (0, util_1.toType)(blockNumber, util_1.TypeOutput.BigInt);
        td = (0, util_1.toType)(td, util_1.TypeOutput.BigInt);
        timestamp = (0, util_1.toType)(timestamp, util_1.TypeOutput.Number);
        // Filter out hardforks with no block number, no ttd or no timestamp (i.e. unapplied hardforks)
        const hfs = this.hardforks().filter((hf)=>hf.block !== null || hf.ttd !== null && hf.ttd !== undefined || hf.timestamp !== undefined);
        const mergeIndex = hfs.findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
        const doubleTTDHF = hfs.slice(mergeIndex + 1).findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
        if (doubleTTDHF >= 0) throw Error(`More than one merge hardforks found with ttd specified`);
        // Find the first hardfork that has a block number greater than `blockNumber`
        // (skips the merge hardfork since it cannot have a block number specified).
        // If timestamp is not provided, it also skips timestamps hardforks to continue
        // discovering/checking number hardforks.
        let hfIndex = hfs.findIndex((hf)=>hf.block !== null && hf.block > blockNumber || timestamp !== undefined && Number(hf.timestamp) > timestamp);
        if (hfIndex === -1) // all hardforks apply, set hfIndex to the last one as that's the candidate
        hfIndex = hfs.length;
        else if (hfIndex === 0) // cannot have a case where a block number is before all applied hardforks
        // since the chain has to start with a hardfork
        throw Error("Must have at least one hardfork at block 0");
        // If timestamp is not provided, we need to rollback to the last hf with block or ttd
        if (timestamp === undefined) {
            const stepBack = hfs.slice(0, hfIndex).reverse().findIndex((hf)=>hf.block !== null || hf.ttd !== undefined);
            hfIndex = hfIndex - stepBack;
        }
        // Move hfIndex one back to arrive at candidate hardfork
        hfIndex = hfIndex - 1;
        // If the timestamp was not provided, we could have skipped timestamp hardforks to look for number
        // hardforks. so it will now be needed to rollback
        if (hfs[hfIndex].block === null && hfs[hfIndex].timestamp === undefined) // We're on the merge hardfork.  Let's check the TTD
        {
            if (td === undefined || td === null || BigInt(hfs[hfIndex].ttd) > td) // Merge ttd greater than current td so we're on hardfork before merge
            hfIndex -= 1;
        } else if (mergeIndex >= 0 && td !== undefined && td !== null) {
            if (hfIndex >= mergeIndex && BigInt(hfs[mergeIndex].ttd) > td) throw Error("Maximum HF determined by total difficulty is lower than the block number HF");
            else if (hfIndex < mergeIndex && BigInt(hfs[mergeIndex].ttd) <= td) throw Error("HF determined by block number is lower than the minimum total difficulty HF");
        }
        const hfStartIndex = hfIndex;
        // Move the hfIndex to the end of the hardforks that might be scheduled on the same block/timestamp
        // This won't anyway be the case with Merge hfs
        for(; hfIndex < hfs.length - 1; hfIndex++){
            // break out if hfIndex + 1 is not scheduled at hfIndex
            if (hfs[hfIndex].block !== hfs[hfIndex + 1].block || hfs[hfIndex].timestamp !== hfs[hfIndex + 1].timestamp) break;
        }
        if (timestamp) {
            const minTimeStamp = hfs.slice(0, hfStartIndex).reduce((acc, hf)=>Math.max(Number(hf.timestamp ?? "0"), acc), 0);
            if (minTimeStamp > timestamp) throw Error(`Maximum HF determined by timestamp is lower than the block number/ttd HF`);
            const maxTimeStamp = hfs.slice(hfIndex + 1).reduce((acc, hf)=>Math.min(Number(hf.timestamp ?? timestamp), acc), timestamp);
            if (maxTimeStamp < timestamp) throw Error(`Maximum HF determined by block number/ttd is lower than timestamp HF`);
        }
        const hardfork = hfs[hfIndex];
        return hardfork.name;
    }
    /**
     * Sets a new hardfork based on the block number or an optional
     * total difficulty (Merge HF) provided.
     *
     * An optional TD takes precedence in case the corresponding HF block
     * is set to `null` or otherwise needs to match (if not an error
     * will be thrown).
     *
     * @param blockNumber
     * @param td
     * @param timestamp
     * @returns The name of the HF set
     */ setHardforkByBlockNumber(blockNumber, td, timestamp) {
        const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
        this.setHardfork(hardfork);
        return hardfork;
    }
    /**
     * Internal helper function, returns the params for the given hardfork for the chain set
     * @param hardfork Hardfork name
     * @returns Dictionary with hardfork params or null if hardfork not on chain
     */ _getHardfork(hardfork) {
        const hfs = this.hardforks();
        for (const hf of hfs){
            if (hf["name"] === hardfork) return hf;
        }
        return null;
    }
    /**
     * Sets the active EIPs
     * @param eips
     */ setEIPs(eips = []) {
        for (const eip of eips){
            if (!(eip in eips_1.EIPs)) throw new Error(`${eip} not supported`);
            const minHF = this.gteHardfork(eips_1.EIPs[eip]["minimumHardfork"]);
            if (!minHF) throw new Error(`${eip} cannot be activated on hardfork ${this.hardfork()}, minimumHardfork: ${minHF}`);
            if (eips_1.EIPs[eip].requiredEIPs !== undefined) for (const elem of eips_1.EIPs[eip].requiredEIPs){
                if (!(eips.includes(elem) || this.isActivatedEIP(elem))) throw new Error(`${eip} requires EIP ${elem}, but is not included in the EIP list`);
            }
        }
        this._eips = eips;
    }
    /**
     * Returns a parameter for the current chain setup
     *
     * If the parameter is present in an EIP, the EIP always takes precedence.
     * Otherwise the parameter if taken from the latest applied HF with
     * a change on the respective parameter.
     *
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @returns The value requested or `BigInt(0)` if not found
     */ param(topic, name) {
        // TODO: consider the case that different active EIPs
        // can change the same parameter
        let value;
        for (const eip of this._eips){
            value = this.paramByEIP(topic, name, eip);
            if (value !== undefined) return value;
        }
        return this.paramByHardfork(topic, name, this._hardfork);
    }
    /**
     * Returns the parameter corresponding to a hardfork
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param hardfork Hardfork name
     * @returns The value requested or `BigInt(0)` if not found
     */ paramByHardfork(topic, name, hardfork) {
        let value = null;
        for (const hfChanges of this.HARDFORK_CHANGES){
            // EIP-referencing HF file (e.g. berlin.json)
            if ("eips" in hfChanges[1]) {
                const hfEIPs = hfChanges[1]["eips"];
                for (const eip of hfEIPs){
                    const valueEIP = this.paramByEIP(topic, name, eip);
                    value = typeof valueEIP === "bigint" ? valueEIP : value;
                }
            // Parameter-inlining HF file (e.g. istanbul.json)
            } else {
                if (hfChanges[1][topic] === undefined) throw new Error(`Topic ${topic} not defined`);
                if (hfChanges[1][topic][name] !== undefined) value = hfChanges[1][topic][name].v;
            }
            if (hfChanges[0] === hardfork) break;
        }
        return BigInt(value ?? 0);
    }
    /**
     * Returns a parameter corresponding to an EIP
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param eip Number of the EIP
     * @returns The value requested or `undefined` if not found
     */ paramByEIP(topic, name, eip) {
        if (!(eip in eips_1.EIPs)) throw new Error(`${eip} not supported`);
        const eipParams = eips_1.EIPs[eip];
        if (!(topic in eipParams)) throw new Error(`Topic ${topic} not defined`);
        if (eipParams[topic][name] === undefined) return undefined;
        const value = eipParams[topic][name].v;
        return BigInt(value);
    }
    /**
     * Returns a parameter for the hardfork active on block number or
     * optional provided total difficulty (Merge HF)
     * @param topic Parameter topic
     * @param name Parameter name
     * @param blockNumber Block number
     * @param td Total difficulty
     *    * @returns The value requested or `BigInt(0)` if not found
     */ paramByBlock(topic, name, blockNumber, td, timestamp) {
        const hardfork = this.getHardforkByBlockNumber(blockNumber, td, timestamp);
        return this.paramByHardfork(topic, name, hardfork);
    }
    /**
     * Checks if an EIP is activated by either being included in the EIPs
     * manually passed in with the {@link CommonOpts.eips} or in a
     * hardfork currently being active
     *
     * Note: this method only works for EIPs being supported
     * by the {@link CommonOpts.eips} constructor option
     * @param eip
     */ isActivatedEIP(eip) {
        if (this.eips().includes(eip)) return true;
        for (const hfChanges of this.HARDFORK_CHANGES){
            const hf = hfChanges[1];
            if (this.gteHardfork(hf["name"]) && "eips" in hf) {
                if (hf["eips"].includes(eip)) return true;
            }
        }
        return false;
    }
    /**
     * Checks if set or provided hardfork is active on block number
     * @param hardfork Hardfork name or null (for HF set)
     * @param blockNumber
     * @returns True if HF is active on block number
     */ hardforkIsActiveOnBlock(hardfork, blockNumber) {
        blockNumber = (0, util_1.toType)(blockNumber, util_1.TypeOutput.BigInt);
        hardfork = hardfork ?? this._hardfork;
        const hfBlock = this.hardforkBlock(hardfork);
        if (typeof hfBlock === "bigint" && hfBlock !== BigInt(0) && blockNumber >= hfBlock) return true;
        return false;
    }
    /**
     * Alias to hardforkIsActiveOnBlock when hardfork is set
     * @param blockNumber
     * @returns True if HF is active on block number
     */ activeOnBlock(blockNumber) {
        return this.hardforkIsActiveOnBlock(null, blockNumber);
    }
    /**
     * Sequence based check if given or set HF1 is greater than or equal HF2
     * @param hardfork1 Hardfork name or null (if set)
     * @param hardfork2 Hardfork name
     * @param opts Hardfork options
     * @returns True if HF1 gte HF2
     */ hardforkGteHardfork(hardfork1, hardfork2) {
        hardfork1 = hardfork1 ?? this._hardfork;
        const hardforks = this.hardforks();
        let posHf1 = -1, posHf2 = -1;
        let index = 0;
        for (const hf of hardforks){
            if (hf["name"] === hardfork1) posHf1 = index;
            if (hf["name"] === hardfork2) posHf2 = index;
            index += 1;
        }
        return posHf1 >= posHf2 && posHf2 !== -1;
    }
    /**
     * Alias to hardforkGteHardfork when hardfork is set
     * @param hardfork Hardfork name
     * @returns True if hardfork set is greater than hardfork provided
     */ gteHardfork(hardfork) {
        return this.hardforkGteHardfork(null, hardfork);
    }
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if unscheduled
     */ hardforkBlock(hardfork) {
        hardfork = hardfork ?? this._hardfork;
        const block = this._getHardfork(hardfork)?.["block"];
        if (block === undefined || block === null) return null;
        return BigInt(block);
    }
    hardforkTimestamp(hardfork) {
        hardfork = hardfork ?? this._hardfork;
        const timestamp = this._getHardfork(hardfork)?.["timestamp"];
        if (timestamp === undefined || timestamp === null) return null;
        return BigInt(timestamp);
    }
    /**
     * Returns the hardfork change block for eip
     * @param eip EIP number
     * @returns Block number or null if unscheduled
     */ eipBlock(eip) {
        for (const hfChanges of this.HARDFORK_CHANGES){
            const hf = hfChanges[1];
            if ("eips" in hf) {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (hf["eips"].includes(eip)) return this.hardforkBlock(hfChanges[0]);
            }
        }
        return null;
    }
    /**
     * Returns the hardfork change total difficulty (Merge HF) for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Total difficulty or null if no set
     */ hardforkTTD(hardfork) {
        hardfork = hardfork ?? this._hardfork;
        const ttd = this._getHardfork(hardfork)?.["ttd"];
        if (ttd === undefined || ttd === null) return null;
        return BigInt(ttd);
    }
    /**
     * True if block number provided is the hardfork (given or set) change block
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     * @deprecated
     */ isHardforkBlock(blockNumber, hardfork) {
        blockNumber = (0, util_1.toType)(blockNumber, util_1.TypeOutput.BigInt);
        hardfork = hardfork ?? this._hardfork;
        const block = this.hardforkBlock(hardfork);
        return typeof block === "bigint" && block !== BigInt(0) ? block === blockNumber : false;
    }
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block timestamp, number or null if not available
     */ nextHardforkBlockOrTimestamp(hardfork) {
        hardfork = hardfork ?? this._hardfork;
        const hfs = this.hardforks();
        let hfIndex = hfs.findIndex((hf)=>hf.name === hardfork);
        // If the current hardfork is merge, go one behind as merge hf is not part of these
        // calcs even if the merge hf block is set
        if (hardfork === enums_1.Hardfork.Merge) hfIndex -= 1;
        // Hardfork not found
        if (hfIndex < 0) return null;
        let currHfTimeOrBlock = hfs[hfIndex].timestamp ?? hfs[hfIndex].block;
        currHfTimeOrBlock = currHfTimeOrBlock !== null && currHfTimeOrBlock !== undefined ? Number(currHfTimeOrBlock) : null;
        const nextHf = hfs.slice(hfIndex + 1).find((hf)=>{
            let hfTimeOrBlock = hf.timestamp ?? hf.block;
            hfTimeOrBlock = hfTimeOrBlock !== null && hfTimeOrBlock !== undefined ? Number(hfTimeOrBlock) : null;
            return hf.name !== enums_1.Hardfork.Merge && hfTimeOrBlock !== null && hfTimeOrBlock !== undefined && hfTimeOrBlock !== currHfTimeOrBlock;
        });
        // If no next hf found with valid block or timestamp return null
        if (nextHf === undefined) return null;
        const nextHfBlock = nextHf.timestamp ?? nextHf.block;
        if (nextHfBlock === null || nextHfBlock === undefined) return null;
        return BigInt(nextHfBlock);
    }
    /**
     * Returns the change block for the next hardfork after the hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number or null if not available
     * @deprecated
     */ nextHardforkBlock(hardfork) {
        hardfork = hardfork ?? this._hardfork;
        let hfBlock = this.hardforkBlock(hardfork);
        // If this is a merge hardfork with block not set, then we fallback to previous hardfork
        // to find the nextHardforkBlock
        if (hfBlock === null && hardfork === enums_1.Hardfork.Merge) {
            const hfs = this.hardforks();
            const mergeIndex = hfs.findIndex((hf)=>hf.ttd !== null && hf.ttd !== undefined);
            if (mergeIndex < 0) throw Error(`Merge hardfork should have been found`);
            hfBlock = this.hardforkBlock(hfs[mergeIndex - 1].name);
        }
        if (hfBlock === null) return null;
        // Next fork block number or null if none available
        // Logic: if accumulator is still null and on the first occurrence of
        // a block greater than the current hfBlock set the accumulator,
        // pass on the accumulator as the final result from this time on
        const nextHfBlock = this.hardforks().reduce((acc, hf)=>{
            // We need to ignore the merge block in our next hardfork calc
            const block = BigInt(hf.block === null || hf.ttd !== undefined && hf.ttd !== null ? 0 : hf.block);
            // Typescript can't seem to follow that the hfBlock is not null at this point
            return block > hfBlock && acc === null ? block : acc;
        }, null);
        return nextHfBlock;
    }
    /**
     * True if block number provided is the hardfork change block following the hardfork given or set
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     * @deprecated
     */ isNextHardforkBlock(blockNumber, hardfork) {
        blockNumber = (0, util_1.toType)(blockNumber, util_1.TypeOutput.BigInt);
        hardfork = hardfork ?? this._hardfork;
        const nextHardforkBlock = this.nextHardforkBlock(hardfork);
        return nextHardforkBlock === null ? false : nextHardforkBlock === blockNumber;
    }
    /**
     * Internal helper function to calculate a fork hash
     * @param hardfork Hardfork name
     * @param genesisHash Genesis block hash of the chain
     * @returns Fork hash as hex string
     */ _calcForkHash(hardfork, genesisHash) {
        let hfBuffer = Buffer.alloc(0);
        let prevBlockOrTime = 0;
        for (const hf of this.hardforks()){
            const { block , timestamp , name  } = hf;
            // Timestamp to be used for timestamp based hfs even if we may bundle
            // block number with them retrospectively
            let blockOrTime = timestamp ?? block;
            blockOrTime = blockOrTime !== null ? Number(blockOrTime) : null;
            // Skip for chainstart (0), not applied HFs (null) and
            // when already applied on same blockOrTime HFs
            // and on the merge since forkhash doesn't change on merge hf
            if (typeof blockOrTime === "number" && blockOrTime !== 0 && blockOrTime !== prevBlockOrTime && name !== enums_1.Hardfork.Merge) {
                const hfBlockBuffer = Buffer.from(blockOrTime.toString(16).padStart(16, "0"), "hex");
                hfBuffer = Buffer.concat([
                    hfBuffer,
                    hfBlockBuffer
                ]);
                prevBlockOrTime = blockOrTime;
            }
            if (hf.name === hardfork) break;
        }
        const inputBuffer = Buffer.concat([
            genesisHash,
            hfBuffer
        ]);
        // CRC32 delivers result as signed (negative) 32-bit integer,
        // convert to hex string
        const forkhash = (0, util_1.intToBuffer)((0, crc_32_1.buf)(inputBuffer) >>> 0).toString("hex");
        return `0x${forkhash}`;
    }
    /**
     * Returns an eth/64 compliant fork hash (EIP-2124)
     * @param hardfork Hardfork name, optional if HF set
     * @param genesisHash Genesis block hash of the chain, optional if already defined and not needed to be calculated
     */ forkHash(hardfork, genesisHash) {
        hardfork = hardfork ?? this._hardfork;
        const data = this._getHardfork(hardfork);
        if (data === null || data?.block === null && data?.timestamp === undefined && data?.ttd === undefined) {
            const msg = "No fork hash calculation possible for future hardfork";
            throw new Error(msg);
        }
        if (data?.forkHash !== null && data?.forkHash !== undefined) return data.forkHash;
        if (!genesisHash) throw new Error("genesisHash required for forkHash calculation");
        return this._calcForkHash(hardfork, genesisHash);
    }
    /**
     *
     * @param forkHash Fork hash as a hex string
     * @returns Array with hardfork data (name, block, forkHash)
     */ hardforkForForkHash(forkHash) {
        const resArray = this.hardforks().filter((hf)=>{
            return hf.forkHash === forkHash;
        });
        return resArray.length >= 1 ? resArray[resArray.length - 1] : null;
    }
    /**
     * Sets any missing forkHashes on the passed-in {@link Common} instance
     * @param common The {@link Common} to set the forkHashes for
     * @param genesisHash The genesis block hash
     */ setForkHashes(genesisHash) {
        for (const hf of this.hardforks()){
            const blockOrTime = hf.timestamp ?? hf.block;
            if ((hf.forkHash === null || hf.forkHash === undefined) && (blockOrTime !== null && blockOrTime !== undefined || typeof hf.ttd !== "undefined")) hf.forkHash = this.forkHash(hf.name, genesisHash);
        }
    }
    /**
     * Returns the Genesis parameters of the current chain
     * @returns Genesis dictionary
     */ genesis() {
        return this._chainParams.genesis;
    }
    /**
     * Returns the hardforks for current chain
     * @returns {Array} Array with arrays of hardforks
     */ hardforks() {
        return this._chainParams.hardforks;
    }
    /**
     * Returns bootstrap nodes for the current chain
     * @returns {Dictionary} Dict with bootstrap nodes
     */ bootstrapNodes() {
        return this._chainParams.bootstrapNodes;
    }
    /**
     * Returns DNS networks for the current chain
     * @returns {String[]} Array of DNS ENR urls
     */ dnsNetworks() {
        return this._chainParams.dnsNetworks;
    }
    /**
     * Returns the hardfork set
     * @returns Hardfork name
     */ hardfork() {
        return this._hardfork;
    }
    /**
     * Returns the Id of current chain
     * @returns chain Id
     */ chainId() {
        return BigInt(this._chainParams.chainId);
    }
    /**
     * Returns the name of current chain
     * @returns chain name (lower case)
     */ chainName() {
        return this._chainParams.name;
    }
    /**
     * Returns the Id of current network
     * @returns network Id
     */ networkId() {
        return BigInt(this._chainParams.networkId);
    }
    /**
     * Returns the active EIPs
     * @returns List of EIPs
     */ eips() {
        return this._eips;
    }
    /**
     * Returns the consensus type of the network
     * Possible values: "pow"|"poa"|"pos"
     *
     * Note: This value can update along a Hardfork.
     */ consensusType() {
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ("consensus" in hfChanges[1]) value = hfChanges[1]["consensus"]["type"];
            if (hfChanges[0] === hardfork) break;
        }
        return value ?? this._chainParams["consensus"]["type"];
    }
    /**
     * Returns the concrete consensus implementation
     * algorithm or protocol for the network
     * e.g. "ethash" for "pow" consensus type,
     * "clique" for "poa" consensus type or
     * "casper" for "pos" consensus type.
     *
     * Note: This value can update along a Hardfork.
     */ consensusAlgorithm() {
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ("consensus" in hfChanges[1]) value = hfChanges[1]["consensus"]["algorithm"];
            if (hfChanges[0] === hardfork) break;
        }
        return value ?? this._chainParams["consensus"]["algorithm"];
    }
    /**
     * Returns a dictionary with consensus configuration
     * parameters based on the consensus algorithm
     *
     * Expected returns (parameters must be present in
     * the respective chain json files):
     *
     * ethash: empty object
     * clique: period, epoch
     * casper: empty object
     *
     * Note: This value can update along a Hardfork.
     */ consensusConfig() {
        const hardfork = this.hardfork();
        let value;
        for (const hfChanges of this.HARDFORK_CHANGES){
            if ("consensus" in hfChanges[1]) // The config parameter is named after the respective consensus algorithm
            value = hfChanges[1]["consensus"][hfChanges[1]["consensus"]["algorithm"]];
            if (hfChanges[0] === hardfork) break;
        }
        return value ?? this._chainParams["consensus"][this.consensusAlgorithm()] ?? {};
    }
    /**
     * Returns a deep copy of this {@link Common} instance.
     */ copy() {
        const copy = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        copy.removeAllListeners();
        return copy;
    }
    static _getInitializedChains(customChains) {
        const names = {};
        for (const [name, id] of Object.entries(enums_1.Chain))names[id] = name.toLowerCase();
        const chains = {
            mainnet,
            ropsten,
            rinkeby,
            goerli,
            sepolia
        };
        if (customChains) for (const chain of customChains){
            const { name  } = chain;
            names[chain.chainId.toString()] = name;
            chains[name] = chain;
        }
        chains.names = names;
        return chains;
    }
}
exports.Common = Common;

},{"6054da6d327c040f":"fCgem","751e19f029046797":"2ctjb","b4930f2bffe9a750":"1lOc6","4171b37d40009f1f":"1VQLm","2d6fe906b1fc0b2c":"jaEkq","bd01ac3d9d204508":"2xM5Y","b268de40e6e0a864":"i5f4f","de085cf0244ae84":"2iYWN","17e2b0ce18bb8c22":"iHc1E","5223477a25a74cf6":"ljThh","93e11e760794077c":"6L8wT","98b7af4975ce5822":"cwRUf","c9a6e45d48e8b4d9":"demc7"}],"1lOc6":[function(require,module,exports) {
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */ /* vim: set ts=2: */ /*exported CRC32 */ var CRC32;
(function(factory) {
    /*jshint ignore:start */ /*eslint-disable */ if (typeof DO_NOT_EXPORT_CRC === "undefined") factory(exports);
    else factory(CRC32 = {});
/*eslint-enable */ /*jshint ignore:end */ })(function(CRC32) {
    CRC32.version = "1.2.2";
    /*global Int32Array */ function signed_crc_table() {
        var c = 0, table = new Array(256);
        for(var n = 0; n != 256; ++n){
            c = n;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
            table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
    }
    var T0 = signed_crc_table();
    function slice_by_16_tables(T) {
        var c = 0, v = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for(n = 0; n != 256; ++n)table[n] = T[n];
        for(n = 0; n != 256; ++n){
            v = T[n];
            for(c = 256 + n; c < 4096; c += 256)v = table[c] = v >>> 8 ^ T[v & 0xFF];
        }
        var out = [];
        for(n = 1; n != 16; ++n)out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
    }
    var TT = slice_by_16_tables(T0);
    var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
    var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
    var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
    function crc32_bstr(bstr, seed) {
        var C = seed ^ -1;
        for(var i = 0, L = bstr.length; i < L;)C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 0xFF];
        return ~C;
    }
    function crc32_buf(B, seed) {
        var C = seed ^ -1, L = B.length - 15, i = 0;
        for(; i < L;)C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
        L += 15;
        while(i < L)C = C >>> 8 ^ T0[(C ^ B[i++]) & 0xFF];
        return ~C;
    }
    function crc32_str(str, seed) {
        var C = seed ^ -1;
        for(var i = 0, L = str.length, c = 0, d = 0; i < L;){
            c = str.charCodeAt(i++);
            if (c < 0x80) C = C >>> 8 ^ T0[(C ^ c) & 0xFF];
            else if (c < 0x800) {
                C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 0xFF];
            } else if (c >= 0xD800 && c < 0xE000) {
                c = (c & 1023) + 64;
                d = str.charCodeAt(i++) & 1023;
                C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 0xFF];
            } else {
                C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 0xFF];
                C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 0xFF];
            }
        }
        return ~C;
    }
    CRC32.table = T0;
    // $FlowIgnore
    CRC32.bstr = crc32_bstr;
    // $FlowIgnore
    CRC32.buf = crc32_buf;
    // $FlowIgnore
    CRC32.str = crc32_str;
});

},{}],"jaEkq":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"goerli","chainId":5,"networkId":5,"defaultHardfork":"merge","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xa3f5ab08"},{"name":"homestead","block":0,"forkHash":"0xa3f5ab08"},{"name":"tangerineWhistle","block":0,"forkHash":"0xa3f5ab08"},{"name":"spuriousDragon","block":0,"forkHash":"0xa3f5ab08"},{"name":"byzantium","block":0,"forkHash":"0xa3f5ab08"},{"name":"constantinople","block":0,"forkHash":"0xa3f5ab08"},{"name":"petersburg","block":0,"forkHash":"0xa3f5ab08"},{"name":"istanbul","block":1561651,"forkHash":"0xc25efa5c"},{"name":"berlin","block":4460644,"forkHash":"0x757a1c47"},{"name":"london","block":5062605,"forkHash":"0xb8c6299d"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://goerli.etherscan.io/block/7382818","name":"merge","ttd":"10790000","block":7382819,"forkHash":"0xb8c6299d"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"18.218.250.66","port":30313,"id":"b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949","location":"","comment":"Upstream bootnode 4"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"},{"ip":"51.15.116.226","port":30303,"id":"a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":30303,"id":"807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":40303,"id":"a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd","location":"","comment":"Goerli Initiative bootnode"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]}');

},{}],"2xM5Y":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"mainnet","chainId":1,"networkId":1,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfc64ec04"},{"name":"homestead","block":1150000,"forkHash":"0x97c2c34c"},{"name":"dao","block":1920000,"forkHash":"0x91d1f948"},{"name":"tangerineWhistle","block":2463000,"forkHash":"0x7a64da13"},{"name":"spuriousDragon","block":2675000,"forkHash":"0x3edd5b10"},{"name":"byzantium","block":4370000,"forkHash":"0xa00bc324"},{"name":"constantinople","block":7280000,"forkHash":"0x668db0af"},{"name":"petersburg","block":7280000,"forkHash":"0x668db0af"},{"name":"istanbul","block":9069000,"forkHash":"0x879d6e30"},{"name":"muirGlacier","block":9200000,"forkHash":"0xe029e991"},{"name":"berlin","block":12244000,"forkHash":"0x0eb440f6"},{"name":"london","block":12965000,"forkHash":"0xb715077d"},{"name":"arrowGlacier","block":13773000,"forkHash":"0x20c327fc"},{"name":"grayGlacier","block":15050000,"forkHash":"0xf0afd0e3"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://etherscan.io/block/15537393","name":"merge","ttd":"58750000000000000000000","block":15537394,"forkHash":"0xf0afd0e3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"34.255.23.113","port":30303,"id":"ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758","location":"eu-west-1-001","comment":"bootnode-aws-eu-west-1-001"},{"ip":"35.158.244.151","port":30303,"id":"279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8","location":"eu-central-1-001","comment":"bootnode-aws-eu-central-1-001"},{"ip":"52.187.207.27","port":30303,"id":"8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a","location":"australiaeast-001","comment":"bootnode-azure-australiaeast-001"},{"ip":"191.234.162.198","port":30303,"id":"103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1","location":"brazilsouth-001","comment":"bootnode-azure-brazilsouth-001"},{"ip":"52.231.165.108","port":30303,"id":"715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8","location":"koreasouth-001","comment":"bootnode-azure-koreasouth-001"},{"ip":"104.42.217.25","port":30303,"id":"5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f","location":"westus-001","comment":"bootnode-azure-westus-001"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]}');

},{}],"i5f4f":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"rinkeby","chainId":4,"networkId":4,"defaultHardfork":"london","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x3b8e0691"},{"name":"homestead","block":1,"forkHash":"0x60949295"},{"name":"tangerineWhistle","block":2,"forkHash":"0x8bde40dd"},{"name":"spuriousDragon","block":3,"forkHash":"0xcb3a64bb"},{"name":"byzantium","block":1035301,"forkHash":"0x8d748b57"},{"name":"constantinople","block":3660663,"forkHash":"0xe49cab14"},{"name":"petersburg","block":4321234,"forkHash":"0xafec6b27"},{"name":"istanbul","block":5435345,"forkHash":"0xcbdb8838"},{"name":"berlin","block":8290928,"forkHash":"0x6910c8bd"},{"name":"london","block":8897988,"forkHash":"0x8e29f2f3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]}');

},{}],"2iYWN":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"ropsten","chainId":3,"networkId":3,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x30c7ddbc"},{"name":"homestead","block":0,"forkHash":"0x30c7ddbc"},{"name":"tangerineWhistle","block":0,"forkHash":"0x30c7ddbc"},{"name":"spuriousDragon","block":10,"forkHash":"0x63760190"},{"name":"byzantium","block":1700000,"forkHash":"0x3ea159c7"},{"name":"constantinople","block":4230000,"forkHash":"0x97b544f3"},{"name":"petersburg","block":4939394,"forkHash":"0xd6e2149b"},{"name":"istanbul","block":6485846,"forkHash":"0x4bc66396"},{"name":"muirGlacier","block":7117117,"forkHash":"0x6727ef90"},{"name":"berlin","block":9812189,"forkHash":"0xa157d377"},{"name":"london","block":10499401,"forkHash":"0x7119b6b3"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge","name":"merge","ttd":"50000000000000000","block":null,"forkHash":"0x7119b6b3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]}');

},{}],"iHc1E":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"sepolia","chainId":11155111,"networkId":11155111,"defaultHardfork":"merge","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network to replace Ropsten","url":"https://github.com/ethereum/go-ethereum/pull/23730","genesis":{"timestamp":"0x6159af19","gasLimit":30000000,"difficulty":131072,"nonce":"0x0000000000000000","extraData":"0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfe3366e7"},{"name":"homestead","block":0,"forkHash":"0xfe3366e7"},{"name":"tangerineWhistle","block":0,"forkHash":"0xfe3366e7"},{"name":"spuriousDragon","block":0,"forkHash":"0xfe3366e7"},{"name":"byzantium","block":0,"forkHash":"0xfe3366e7"},{"name":"constantinople","block":0,"forkHash":"0xfe3366e7"},{"name":"petersburg","block":0,"forkHash":"0xfe3366e7"},{"name":"istanbul","block":0,"forkHash":"0xfe3366e7"},{"name":"muirGlacier","block":0,"forkHash":"0xfe3366e7"},{"name":"berlin","block":0,"forkHash":"0xfe3366e7"},{"name":"london","block":0,"forkHash":"0xfe3366e7"},{"//_comment":"The forkHash will remain same as mergeForkIdTransition is post merge, terminal block: https://sepolia.etherscan.io/block/1450408","name":"merge","ttd":"17000000000000000","block":1450409,"forkHash":"0xfe3366e7"},{"name":"mergeForkIdTransition","block":1735371,"forkHash":"0xb96cbd13"},{"name":"shanghai","block":null,"timestamp":"1677557088","forkHash":"0xf7f9bc08"}],"bootstrapNodes":[{"ip":"18.168.182.86","port":30303,"id":"9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066","location":"","comment":"geth"},{"ip":"52.14.151.177","port":30303,"id":"ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7","location":"","comment":"besu"},{"ip":"165.22.196.173","port":30303,"id":"ce970ad2e9daa9e14593de84a8b49da3d54ccfdf83cbc4fe519cb8b36b5918ed4eab087dedd4a62479b8d50756b492d5f762367c8d20329a7854ec01547568a6","location":"","comment":"EF"},{"ip":"65.108.95.67","port":30303,"id":"075503b13ed736244896efcde2a992ec0b451357d46cb7a8132c0384721742597fc8f0d91bbb40bb52e7d6e66728d36a1fda09176294e4a30cfac55dcce26bc6","location":"","comment":"lodestar"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.sepolia.ethdisco.net"]}');

},{}],"ljThh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EIPs = void 0;
exports.EIPs = {
    1153: require("496db3d8c97e2bfb"),
    1559: require("5a88b8533870dd57"),
    2315: require("808d9e33b6998606"),
    2537: require("ed2895a099e93f43"),
    2565: require("d0c45b8ad0eae65d"),
    2718: require("8a46226038b515de"),
    2929: require("7bff957b9e5fbaf7"),
    2930: require("f5eb5ce5b53fcba0"),
    3074: require("e962408abb470920"),
    3198: require("b44f50e24877c3f0"),
    3529: require("fa23bfdd2e81e440"),
    3540: require("4091c5198825d234"),
    3541: require("a97234bc39fa09c0"),
    3554: require("b7b42f4a8b79253f"),
    3607: require("7e2239f96a88c85"),
    3651: require("bfc0b04ec791c965"),
    3670: require("711286b4b3e67abc"),
    3675: require("192c971bff06c3e7"),
    3855: require("441cfb1ad3f279a2"),
    3860: require("5e469cf98adcee66"),
    4345: require("89e5b3832bb95ed0"),
    4399: require("cf14e2850a63791d"),
    4844: require("2fad609be09ec5ef"),
    4895: require("725b936f8d160e66"),
    5133: require("6c55f44f49940e98")
};

},{"496db3d8c97e2bfb":"eBl3T","5a88b8533870dd57":"hxgNT","808d9e33b6998606":"kkTmW","ed2895a099e93f43":"evhKs","d0c45b8ad0eae65d":"ec9oK","8a46226038b515de":"9wAzB","7bff957b9e5fbaf7":"6ODhD","f5eb5ce5b53fcba0":"hGcC2","e962408abb470920":"haTH2","b44f50e24877c3f0":"jDO5T","fa23bfdd2e81e440":"bnQo3","4091c5198825d234":"8zQiS","a97234bc39fa09c0":"66Bg0","b7b42f4a8b79253f":"75f7j","7e2239f96a88c85":"jBoKq","bfc0b04ec791c965":"dPEpD","711286b4b3e67abc":"7r3rC","192c971bff06c3e7":"bF3E5","441cfb1ad3f279a2":"59OLA","5e469cf98adcee66":"d8BBz","89e5b3832bb95ed0":"eBcxt","cf14e2850a63791d":"eXR1m","2fad609be09ec5ef":"eTHFS","725b936f8d160e66":"iXhT9","6c55f44f49940e98":"4iDdU"}],"eBl3T":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-1153","number":1153,"comment":"Transient Storage","url":"https://eips.ethereum.org/EIPS/eip-1153","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"tstore":{"v":100,"d":"Base fee of the TSTORE opcode"},"tload":{"v":100,"d":"Base fee of the TLOAD opcode"}},"vm":{},"pow":{}}');

},{}],"hxgNT":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-1559","number":1559,"comment":"Fee market change for ETH 1.0 chain","url":"https://eips.ethereum.org/EIPS/eip-1559","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2930],"gasConfig":{"baseFeeMaxChangeDenominator":{"v":8,"d":"Maximum base fee change denominator"},"elasticityMultiplier":{"v":2,"d":"Maximum block gas target elasticity"},"initialBaseFee":{"v":1000000000,"d":"Initial base fee on first EIP1559 block"}},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"kkTmW":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2315","number":2315,"comment":"Simple subroutines for the EVM","url":"https://eips.ethereum.org/EIPS/eip-2315","status":"Draft","minimumHardfork":"istanbul","gasConfig":{},"gasPrices":{"beginsub":{"v":2,"d":"Base fee of the BEGINSUB opcode"},"returnsub":{"v":5,"d":"Base fee of the RETURNSUB opcode"},"jumpsub":{"v":10,"d":"Base fee of the JUMPSUB opcode"}},"vm":{},"pow":{}}');

},{}],"evhKs":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2537","number":2537,"comment":"BLS12-381 precompiles","url":"https://eips.ethereum.org/EIPS/eip-2537","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"Bls12381G1AddGas":{"v":600,"d":"Gas cost of a single BLS12-381 G1 addition precompile-call"},"Bls12381G1MulGas":{"v":12000,"d":"Gas cost of a single BLS12-381 G1 multiplication precompile-call"},"Bls12381G2AddGas":{"v":4500,"d":"Gas cost of a single BLS12-381 G2 addition precompile-call"},"Bls12381G2MulGas":{"v":55000,"d":"Gas cost of a single BLS12-381 G2 multiplication precompile-call"},"Bls12381PairingBaseGas":{"v":115000,"d":"Base gas cost of BLS12-381 pairing check"},"Bls12381PairingPerPairGas":{"v":23000,"d":"Per-pair gas cost of BLS12-381 pairing check"},"Bls12381MapG1Gas":{"v":5500,"d":"Gas cost of BLS12-381 map field element to G1"},"Bls12381MapG2Gas":{"v":110000,"d":"Gas cost of BLS12-381 map field element to G2"},"Bls12381MultiExpGasDiscount":{"v":[[1,1200],[2,888],[3,764],[4,641],[5,594],[6,547],[7,500],[8,453],[9,438],[10,423],[11,408],[12,394],[13,379],[14,364],[15,349],[16,334],[17,330],[18,326],[19,322],[20,318],[21,314],[22,310],[23,306],[24,302],[25,298],[26,294],[27,289],[28,285],[29,281],[30,277],[31,273],[32,269],[33,268],[34,266],[35,265],[36,263],[37,262],[38,260],[39,259],[40,257],[41,256],[42,254],[43,253],[44,251],[45,250],[46,248],[47,247],[48,245],[49,244],[50,242],[51,241],[52,239],[53,238],[54,236],[55,235],[56,233],[57,232],[58,231],[59,229],[60,228],[61,226],[62,225],[63,223],[64,222],[65,221],[66,220],[67,219],[68,219],[69,218],[70,217],[71,216],[72,216],[73,215],[74,214],[75,213],[76,213],[77,212],[78,211],[79,211],[80,210],[81,209],[82,208],[83,208],[84,207],[85,206],[86,205],[87,205],[88,204],[89,203],[90,202],[91,202],[92,201],[93,200],[94,199],[95,199],[96,198],[97,197],[98,196],[99,196],[100,195],[101,194],[102,193],[103,193],[104,192],[105,191],[106,191],[107,190],[108,189],[109,188],[110,188],[111,187],[112,186],[113,185],[114,185],[115,184],[116,183],[117,182],[118,182],[119,181],[120,180],[121,179],[122,179],[123,178],[124,177],[125,176],[126,176],[127,175],[128,174]],"d":"Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"}},"vm":{},"pow":{}}');

},{}],"ec9oK":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2565","number":2565,"comment":"ModExp gas cost","url":"https://eips.ethereum.org/EIPS/eip-2565","status":"Final","minimumHardfork":"byzantium","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":3,"d":"Gquaddivisor from modexp precompile for gas calculation"}},"vm":{},"pow":{}}');

},{}],"9wAzB":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2718","comment":"Typed Transaction Envelope","url":"https://eips.ethereum.org/EIPS/eip-2718","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"6ODhD":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2929","comment":"Gas cost increases for state access opcodes","url":"https://eips.ethereum.org/EIPS/eip-2929","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"coldsload":{"v":2100,"d":"Gas cost of the first read of storage from a given location (per transaction)"},"coldaccountaccess":{"v":2600,"d":"Gas cost of the first read of a given address (per transaction)"},"warmstorageread":{"v":100,"d":"Gas cost of reading storage locations which have already loaded \'cold\'"},"sstoreCleanGasEIP2200":{"v":2900,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreNoopGasEIP2200":{"v":100,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":100,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitRefundEIP2200":{"v":19900,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanRefundEIP2200":{"v":4900,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"call":{"v":0,"d":"Base fee of the CALL opcode"},"callcode":{"v":0,"d":"Base fee of the CALLCODE opcode"},"delegatecall":{"v":0,"d":"Base fee of the DELEGATECALL opcode"},"staticcall":{"v":0,"d":"Base fee of the STATICCALL opcode"},"balance":{"v":0,"d":"Base fee of the BALANCE opcode"},"extcodesize":{"v":0,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":0,"d":"Base fee of the EXTCODECOPY opcode"},"extcodehash":{"v":0,"d":"Base fee of the EXTCODEHASH opcode"},"sload":{"v":0,"d":"Base fee of the SLOAD opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"}},"vm":{},"pow":{}}');

},{}],"hGcC2":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-2930","comment":"Optional access lists","url":"https://eips.ethereum.org/EIPS/eip-2930","status":"Final","minimumHardfork":"istanbul","requiredEIPs":[2718,2929],"gasConfig":{},"gasPrices":{"accessListStorageKeyCost":{"v":1900,"d":"Gas cost per storage key in an Access List transaction"},"accessListAddressCost":{"v":2400,"d":"Gas cost per storage key in an Access List transaction"}},"vm":{},"pow":{}}');

},{}],"haTH2":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3074","number":3074,"comment":"AUTH and AUTHCALL opcodes","url":"https://eips.ethereum.org/EIPS/eip-3074","status":"Review","minimumHardfork":"london","gasConfig":{},"gasPrices":{"auth":{"v":3100,"d":"Gas cost of the AUTH opcode"},"authcall":{"v":0,"d":"Gas cost of the AUTHCALL opcode"},"authcallValueTransfer":{"v":6700,"d":"Paid for CALL when the value transfer is non-zero"}},"vm":{},"pow":{}}');

},{}],"jDO5T":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3198","number":3198,"comment":"BASEFEE opcode","url":"https://eips.ethereum.org/EIPS/eip-3198","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{"basefee":{"v":2,"d":"Gas cost of the BASEFEE opcode"}},"vm":{},"pow":{}}');

},{}],"bnQo3":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3529","comment":"Reduction in refunds","url":"https://eips.ethereum.org/EIPS/eip-3529","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2929],"gasConfig":{"maxRefundQuotient":{"v":5,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"selfdestructRefund":{"v":0,"d":"Refunded following a selfdestruct operation"},"sstoreClearRefundEIP2200":{"v":4800,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{}}');

},{}],"8zQiS":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3540","number":3540,"comment":"EVM Object Format (EOF) v1","url":"https://eips.ethereum.org/EIPS/eip-3540","status":"Review","minimumHardfork":"london","requiredEIPs":[3541],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"66Bg0":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3541","comment":"Reject new contracts starting with the 0xEF byte","url":"https://eips.ethereum.org/EIPS/eip-3541","status":"Final","minimumHardfork":"berlin","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"75f7j":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3554","comment":"Reduction in refunds","url":"Difficulty Bomb Delay to December 1st 2021","status":"Final","minimumHardfork":"muirGlacier","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9500000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"jBoKq":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3607","number":3607,"comment":"Reject transactions from senders with deployed code","url":"https://eips.ethereum.org/EIPS/eip-3607","status":"Final","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"dPEpD":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3651","number":3198,"comment":"Warm COINBASE","url":"https://eips.ethereum.org/EIPS/eip-3651","status":"Review","minimumHardfork":"london","requiredEIPs":[2929],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"7r3rC":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3670","number":3670,"comment":"EOF - Code Validation","url":"https://eips.ethereum.org/EIPS/eip-3670","status":"Review","minimumHardfork":"london","requiredEIPs":[3540],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"bF3E5":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3675","number":3675,"comment":"Upgrade consensus to Proof-of-Stake","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Final","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"59OLA":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3855","number":3855,"comment":"PUSH0 instruction","url":"https://eips.ethereum.org/EIPS/eip-3855","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"push0":{"v":2,"d":"Base fee of the PUSH0 opcode"}},"vm":{},"pow":{}}');

},{}],"d8BBz":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-3860","number":3860,"comment":"Limit and meter initcode","url":"https://eips.ethereum.org/EIPS/eip-3860","status":"Review","minimumHardfork":"spuriousDragon","requiredEIPs":[],"gasConfig":{},"gasPrices":{"initCodeWordCost":{"v":2,"d":"Gas to pay for each word (32 bytes) of initcode when creating a contract"}},"vm":{"maxInitCodeSize":{"v":49152,"d":"Maximum length of initialization code when creating a contract"}},"pow":{}}');

},{}],"eBcxt":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-4345","number":4345,"comment":"Difficulty Bomb Delay to June 2022","url":"https://eips.ethereum.org/EIPS/eip-4345","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":10700000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"eXR1m":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-4399","number":4399,"comment":"Supplant DIFFICULTY opcode with PREVRANDAO","url":"https://eips.ethereum.org/EIPS/eip-4399","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"eTHFS":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-4844","number":4844,"comment":"Shard Blob Transactions","url":"https://eips.ethereum.org/EIPS/eip-4844","status":"Draft","minimumHardfork":"merge","requiredEIPs":[1559,2718,2930,4895],"gasConfig":{"dataGasPerBlob":{"v":131072,"d":"The base fee for data gas per blob"},"targetDataGasPerBlock":{"v":262144,"d":"The target data gas consumed per block"},"maxDataGasPerBlock":{"v":524288,"d":"The max data gas allowable per block"},"dataGasPriceUpdateFraction":{"v":2225652,"d":"The denominator used in the exponential when calculating a data gas price"}},"gasPrices":{"simpleGasPerBlob":{"v":12000,"d":"The basic gas fee for each blob"},"minDataGasPrice":{"v":1,"d":"The minimum fee per data gas"},"kzgPointEvaluationGasPrecompilePrice":{"v":50000,"d":"The fee associated with the point evaluation precompile"},"datahash":{"v":3,"d":"Base fee of the DATAHASH opcode"}},"sharding":{"blobCommitmentVersionKzg":{"v":1,"d":"The number indicated a versioned hash is a KZG commitment"},"fieldElementsPerBlob":{"v":4096,"d":"The number of field elements allowed per blob"}},"vm":{},"pow":{}}');

},{}],"iXhT9":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-4895","number":4895,"comment":"Beacon chain push withdrawals as operations","url":"https://eips.ethereum.org/EIPS/eip-4895","status":"Review","minimumHardfork":"merge","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"4iDdU":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"EIP-5133","number":5133,"comment":"Delaying Difficulty Bomb to mid-September 2022","url":"https://eips.ethereum.org/EIPS/eip-5133","status":"Draft","minimumHardfork":"grayGlacier","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":11400000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"6L8wT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomChain = exports.ConsensusAlgorithm = exports.ConsensusType = exports.Hardfork = exports.Chain = void 0;
var Chain;
(function(Chain) {
    Chain[Chain["Mainnet"] = 1] = "Mainnet";
    Chain[Chain["Ropsten"] = 3] = "Ropsten";
    Chain[Chain["Rinkeby"] = 4] = "Rinkeby";
    Chain[Chain["Goerli"] = 5] = "Goerli";
    Chain[Chain["Sepolia"] = 11155111] = "Sepolia";
})(Chain = exports.Chain || (exports.Chain = {}));
var Hardfork;
(function(Hardfork) {
    Hardfork["Chainstart"] = "chainstart";
    Hardfork["Homestead"] = "homestead";
    Hardfork["Dao"] = "dao";
    Hardfork["TangerineWhistle"] = "tangerineWhistle";
    Hardfork["SpuriousDragon"] = "spuriousDragon";
    Hardfork["Byzantium"] = "byzantium";
    Hardfork["Constantinople"] = "constantinople";
    Hardfork["Petersburg"] = "petersburg";
    Hardfork["Istanbul"] = "istanbul";
    Hardfork["MuirGlacier"] = "muirGlacier";
    Hardfork["Berlin"] = "berlin";
    Hardfork["London"] = "london";
    Hardfork["ArrowGlacier"] = "arrowGlacier";
    Hardfork["GrayGlacier"] = "grayGlacier";
    Hardfork["MergeForkIdTransition"] = "mergeForkIdTransition";
    Hardfork["Merge"] = "merge";
    Hardfork["Shanghai"] = "shanghai";
    Hardfork["ShardingForkDev"] = "shardingFork";
})(Hardfork = exports.Hardfork || (exports.Hardfork = {}));
var ConsensusType;
(function(ConsensusType) {
    ConsensusType["ProofOfStake"] = "pos";
    ConsensusType["ProofOfWork"] = "pow";
    ConsensusType["ProofOfAuthority"] = "poa";
})(ConsensusType = exports.ConsensusType || (exports.ConsensusType = {}));
var ConsensusAlgorithm;
(function(ConsensusAlgorithm) {
    ConsensusAlgorithm["Ethash"] = "ethash";
    ConsensusAlgorithm["Clique"] = "clique";
    ConsensusAlgorithm["Casper"] = "casper";
})(ConsensusAlgorithm = exports.ConsensusAlgorithm || (exports.ConsensusAlgorithm = {}));
var CustomChain;
(function(CustomChain) {
    /**
     * Polygon (Matic) Mainnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */ CustomChain["PolygonMainnet"] = "polygon-mainnet";
    /**
     * Polygon (Matic) Mumbai Testnet
     *
     * - [Documentation](https://docs.matic.network/docs/develop/network-details/network)
     */ CustomChain["PolygonMumbai"] = "polygon-mumbai";
    /**
     * Arbitrum Rinkeby Testnet
     *
     * - [Documentation](https://developer.offchainlabs.com/docs/public_testnet)
     */ CustomChain["ArbitrumRinkebyTestnet"] = "arbitrum-rinkeby-testnet";
    /**
     * Arbitrum One - mainnet for Arbitrum roll-up
     *
     * - [Documentation](https://developer.offchainlabs.com/public-chains)
     */ CustomChain["ArbitrumOne"] = "arbitrum-one";
    /**
     * xDai EVM sidechain with a native stable token
     *
     * - [Documentation](https://www.xdaichain.com/)
     */ CustomChain["xDaiChain"] = "x-dai-chain";
    /**
     * Optimistic Kovan - testnet for Optimism roll-up
     *
     * - [Documentation](https://community.optimism.io/docs/developers/tutorials.html)
     */ CustomChain["OptimisticKovan"] = "optimistic-kovan";
    /**
     * Optimistic Ethereum - mainnet for Optimism roll-up
     *
     * - [Documentation](https://community.optimism.io/docs/developers/tutorials.html)
     */ CustomChain["OptimisticEthereum"] = "optimistic-ethereum";
})(CustomChain = exports.CustomChain || (exports.CustomChain = {}));

},{}],"cwRUf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hardforks = void 0;
exports.hardforks = {
    chainstart: require("37715039049fd480"),
    homestead: require("da45fee90c8eaa2e"),
    dao: require("bf42101762581fc4"),
    tangerineWhistle: require("40391506d2e4a766"),
    spuriousDragon: require("b74b5bddd81fc0a"),
    byzantium: require("afc3d19db2114153"),
    constantinople: require("753030cb51b5c088"),
    petersburg: require("3e7610ef18bcc480"),
    istanbul: require("de8a5b7d12cbf8e1"),
    muirGlacier: require("cc2dbc4d53e50099"),
    berlin: require("b37d06e7ebf7dee7"),
    london: require("89e67f0cdfe4ac67"),
    shanghai: require("133039ceff7a40fb"),
    arrowGlacier: require("b04d75d81f002003"),
    grayGlacier: require("b0de3009325d0ea3"),
    mergeForkIdTransition: require("526d8d58a8127463"),
    merge: require("85da1607fc83c639"),
    shardingFork: require("1e607d7bef250bf3")
};

},{"37715039049fd480":"6Y0HQ","da45fee90c8eaa2e":"76kCf","bf42101762581fc4":"4WhM5","40391506d2e4a766":"l75SK","b74b5bddd81fc0a":"4jnRi","afc3d19db2114153":"kh9eb","753030cb51b5c088":"l1pbI","3e7610ef18bcc480":"c57I9","de8a5b7d12cbf8e1":"aeIce","cc2dbc4d53e50099":"kZoIb","b37d06e7ebf7dee7":"8xaRe","89e67f0cdfe4ac67":"8pPHf","133039ceff7a40fb":"5pGHk","b04d75d81f002003":"4Fy3b","b0de3009325d0ea3":"ajE5r","526d8d58a8127463":"c53ls","85da1607fc83c639":"56EPo","1e607d7bef250bf3":"3U7Dc"}],"6Y0HQ":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"chainstart","comment":"Start of the Ethereum main chain","url":"","status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"},"maxRefundQuotient":{"v":2,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Base fee of the EXP opcode"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Base fee of the SHA3 opcode"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Base fee of the SLOAD opcode"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Base fee of the JUMPDEST opcode"},"log":{"v":375,"d":"Base fee of the LOG opcode"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Base fee of the CREATE opcode"},"call":{"v":40,"d":"Base fee of the CALL opcode"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""},"stop":{"v":0,"d":"Base fee of the STOP opcode"},"add":{"v":3,"d":"Base fee of the ADD opcode"},"mul":{"v":5,"d":"Base fee of the MUL opcode"},"sub":{"v":3,"d":"Base fee of the SUB opcode"},"div":{"v":5,"d":"Base fee of the DIV opcode"},"sdiv":{"v":5,"d":"Base fee of the SDIV opcode"},"mod":{"v":5,"d":"Base fee of the MOD opcode"},"smod":{"v":5,"d":"Base fee of the SMOD opcode"},"addmod":{"v":8,"d":"Base fee of the ADDMOD opcode"},"mulmod":{"v":8,"d":"Base fee of the MULMOD opcode"},"signextend":{"v":5,"d":"Base fee of the SIGNEXTEND opcode"},"lt":{"v":3,"d":"Base fee of the LT opcode"},"gt":{"v":3,"d":"Base fee of the GT opcode"},"slt":{"v":3,"d":"Base fee of the SLT opcode"},"sgt":{"v":3,"d":"Base fee of the SGT opcode"},"eq":{"v":3,"d":"Base fee of the EQ opcode"},"iszero":{"v":3,"d":"Base fee of the ISZERO opcode"},"and":{"v":3,"d":"Base fee of the AND opcode"},"or":{"v":3,"d":"Base fee of the OR opcode"},"xor":{"v":3,"d":"Base fee of the XOR opcode"},"not":{"v":3,"d":"Base fee of the NOT opcode"},"byte":{"v":3,"d":"Base fee of the BYTE opcode"},"address":{"v":2,"d":"Base fee of the ADDRESS opcode"},"balance":{"v":20,"d":"Base fee of the BALANCE opcode"},"origin":{"v":2,"d":"Base fee of the ORIGIN opcode"},"caller":{"v":2,"d":"Base fee of the CALLER opcode"},"callvalue":{"v":2,"d":"Base fee of the CALLVALUE opcode"},"calldataload":{"v":3,"d":"Base fee of the CALLDATALOAD opcode"},"calldatasize":{"v":2,"d":"Base fee of the CALLDATASIZE opcode"},"calldatacopy":{"v":3,"d":"Base fee of the CALLDATACOPY opcode"},"codesize":{"v":2,"d":"Base fee of the CODESIZE opcode"},"codecopy":{"v":3,"d":"Base fee of the CODECOPY opcode"},"gasprice":{"v":2,"d":"Base fee of the GASPRICE opcode"},"extcodesize":{"v":20,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":20,"d":"Base fee of the EXTCODECOPY opcode"},"blockhash":{"v":20,"d":"Base fee of the BLOCKHASH opcode"},"coinbase":{"v":2,"d":"Base fee of the COINBASE opcode"},"timestamp":{"v":2,"d":"Base fee of the TIMESTAMP opcode"},"number":{"v":2,"d":"Base fee of the NUMBER opcode"},"difficulty":{"v":2,"d":"Base fee of the DIFFICULTY opcode"},"gaslimit":{"v":2,"d":"Base fee of the GASLIMIT opcode"},"pop":{"v":2,"d":"Base fee of the POP opcode"},"mload":{"v":3,"d":"Base fee of the MLOAD opcode"},"mstore":{"v":3,"d":"Base fee of the MSTORE opcode"},"mstore8":{"v":3,"d":"Base fee of the MSTORE8 opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"},"jump":{"v":8,"d":"Base fee of the JUMP opcode"},"jumpi":{"v":10,"d":"Base fee of the JUMPI opcode"},"pc":{"v":2,"d":"Base fee of the PC opcode"},"msize":{"v":2,"d":"Base fee of the MSIZE opcode"},"gas":{"v":2,"d":"Base fee of the GAS opcode"},"push":{"v":3,"d":"Base fee of the PUSH opcode"},"dup":{"v":3,"d":"Base fee of the DUP opcode"},"swap":{"v":3,"d":"Base fee of the SWAP opcode"},"callcode":{"v":40,"d":"Base fee of the CALLCODE opcode"},"return":{"v":0,"d":"Base fee of the RETURN opcode"},"invalid":{"v":0,"d":"Base fee of the INVALID opcode"},"selfdestruct":{"v":0,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":0,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"76kCf":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final","gasConfig":{},"gasPrices":{"delegatecall":{"v":40,"d":"Base fee of the DELEGATECALL opcode"}},"vm":{},"pow":{}}');

},{}],"4WhM5":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"dao","comment":"DAO rescue hardfork","url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"l75SK":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final","gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"},"extcodesize":{"v":700,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":700,"d":"Base fee of the EXTCODECOPY opcode"},"balance":{"v":400,"d":"Base fee of the BALANCE opcode"},"delegatecall":{"v":700,"d":"Base fee of the DELEGATECALL opcode"},"callcode":{"v":700,"d":"Base fee of the CALLCODE opcode"},"selfdestruct":{"v":5000,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{},"pow":{}}');

},{}],"4jnRi":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final","gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{}}');

},{}],"kh9eb":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"},"revert":{"v":0,"d":"Base fee of the REVERT opcode"},"staticcall":{"v":700,"d":"Base fee of the STATICCALL opcode"},"returndatasize":{"v":2,"d":"Base fee of the RETURNDATASIZE opcode"},"returndatacopy":{"v":3,"d":"Base fee of the RETURNDATACOPY opcode"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":3000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"l1pbI":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"},"shl":{"v":3,"d":"Base fee of the SHL opcode"},"shr":{"v":3,"d":"Base fee of the SHR opcode"},"sar":{"v":3,"d":"Base fee of the SAR opcode"},"extcodehash":{"v":400,"d":"Base fee of the EXTCODEHASH opcode"},"create2":{"v":32000,"d":"Base fee of the CREATE2 opcode"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"},"difficultyBombDelay":{"v":5000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"c57I9":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{}}');

},{}],"aeIce":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Final","gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"balance":{"v":700,"d":"Base fee of the BALANCE opcode"},"extcodehash":{"v":700,"d":"Base fee of the EXTCODEHASH opcode"},"chainid":{"v":2,"d":"Base fee of the CHAINID opcode"},"selfbalance":{"v":5,"d":"Base fee of the SELFBALANCE opcode"},"sload":{"v":800,"d":"Base fee of the SLOAD opcode"}},"vm":{},"pow":{}}');

},{}],"kZoIb":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}');

},{}],"8xaRe":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"berlin","comment":"HF targeted for July 2020 following the Muir Glacier HF","url":"https://eips.ethereum.org/EIPS/eip-2070","status":"Final","eips":[2565,2929,2718,2930]}');

},{}],"8pPHf":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"london","comment":"HF targeted for July 2021 following the Berlin fork","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md","status":"Final","eips":[1559,3198,3529,3541]}');

},{}],"5pGHk":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"shanghai","comment":"Next feature hardfork after the merge hardfork having withdrawals, warm coinbase, push0, limit/meter initcode","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md","status":"Final","eips":[3651,3855,3860,4895]}');

},{}],"4Fy3b":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"arrowGlacier","comment":"HF to delay the difficulty bomb","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md","status":"Final","eips":[4345],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"ajE5r":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"grayGlacier","comment":"Delaying the difficulty bomb to Mid September 2022","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md","status":"Draft","eips":[5133],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}');

},{}],"c53ls":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"mergeForkIdTransition","comment":"Pre-merge hardfork to fork off non-upgraded clients","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Draft","eips":[]}');

},{}],"56EPo":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"merge","comment":"Hardfork to upgrade the consensus mechanism to Proof-of-Stake","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md","status":"Final","consensus":{"type":"pos","algorithm":"casper","casper":{}},"eips":[3675,4399]}');

},{}],"3U7Dc":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"shardingFork","comment":"Internal hardfork to test proto-danksharding (do not use in production)","url":"https://eips.ethereum.org/EIPS/eip-4844","status":"Experimental","eips":[4844]}');

},{}],"demc7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseGethGenesis = void 0;
const util_1 = require("f3ec3368a1b4ba81");
const enums_1 = require("27ec9419229433b3");
/**
 * Transforms Geth formatted nonce (i.e. hex string) to 8 byte 0x-prefixed string used internally
 * @param nonce string parsed from the Geth genesis file
 * @returns nonce as a 0x-prefixed 8 byte string
 */ function formatNonce(nonce) {
    if (!nonce || nonce === "0x0") return "0x0000000000000000";
    if ((0, util_1.isHexPrefixed)(nonce)) return "0x" + (0, util_1.stripHexPrefix)(nonce).padStart(16, "0");
    return "0x" + nonce.padStart(16, "0");
}
/**
 * Converts Geth genesis parameters to an EthereumJS compatible `CommonOpts` object
 * @param json object representing the Geth genesis file
 * @param optional mergeForkIdPostMerge which clarifies the placement of MergeForkIdTransition
 * hardfork, which by default is post merge as with the merged eth networks but could also come
 * before merge like in kiln genesis
 * @returns genesis parameters in a `CommonOpts` compliant object
 */ function parseGethParams(json, mergeForkIdPostMerge = true) {
    const { name , config , difficulty , mixHash , gasLimit , coinbase , baseFeePerGas  } = json;
    let { extraData , timestamp , nonce  } = json;
    const genesisTimestamp = Number(timestamp);
    const { chainId  } = config;
    // geth is not strictly putting empty fields with a 0x prefix
    if (extraData === "") extraData = "0x";
    // geth may use number for timestamp
    if (!(0, util_1.isHexPrefixed)(timestamp)) timestamp = (0, util_1.intToHex)(parseInt(timestamp));
    // geth may not give us a nonce strictly formatted to an 8 byte hex string
    if (nonce.length !== 18) nonce = formatNonce(nonce);
    // EIP155 and EIP158 are both part of Spurious Dragon hardfork and must occur at the same time
    // but have different configuration parameters in geth genesis parameters
    if (config.eip155Block !== config.eip158Block) throw new Error("EIP155 block number must equal EIP 158 block number since both are part of SpuriousDragon hardfork and the client only supports activating the full hardfork");
    const params = {
        name,
        chainId,
        networkId: chainId,
        genesis: {
            timestamp,
            gasLimit: parseInt(gasLimit),
            difficulty: parseInt(difficulty),
            nonce,
            extraData,
            mixHash,
            coinbase,
            baseFeePerGas
        },
        hardfork: undefined,
        hardforks: [],
        bootstrapNodes: [],
        consensus: config.clique !== undefined ? {
            type: "poa",
            algorithm: "clique",
            clique: {
                // The recent geth genesis seems to be using blockperiodseconds
                // and epochlength for clique specification
                // see: https://hackmd.io/PqZgMpnkSWCWv5joJoFymQ
                period: config.clique.period ?? config.clique.blockperiodseconds,
                epoch: config.clique.epoch ?? config.clique.epochlength
            }
        } : {
            type: "pow",
            algorithm: "ethash",
            ethash: {}
        }
    };
    const forkMap = {
        [enums_1.Hardfork.Homestead]: {
            name: "homesteadBlock"
        },
        [enums_1.Hardfork.Dao]: {
            name: "daoForkBlock"
        },
        [enums_1.Hardfork.TangerineWhistle]: {
            name: "eip150Block"
        },
        [enums_1.Hardfork.SpuriousDragon]: {
            name: "eip155Block"
        },
        [enums_1.Hardfork.Byzantium]: {
            name: "byzantiumBlock"
        },
        [enums_1.Hardfork.Constantinople]: {
            name: "constantinopleBlock"
        },
        [enums_1.Hardfork.Petersburg]: {
            name: "petersburgBlock"
        },
        [enums_1.Hardfork.Istanbul]: {
            name: "istanbulBlock"
        },
        [enums_1.Hardfork.MuirGlacier]: {
            name: "muirGlacierBlock"
        },
        [enums_1.Hardfork.Berlin]: {
            name: "berlinBlock"
        },
        [enums_1.Hardfork.London]: {
            name: "londonBlock"
        },
        [enums_1.Hardfork.MergeForkIdTransition]: {
            name: "mergeForkBlock",
            postMerge: mergeForkIdPostMerge
        },
        [enums_1.Hardfork.Shanghai]: {
            name: "shanghaiTime",
            postMerge: true,
            isTimestamp: true
        },
        [enums_1.Hardfork.ShardingForkDev]: {
            name: "shardingForkTime",
            postMerge: true,
            isTimestamp: true
        }
    };
    // forkMapRev is the map from config field name to Hardfork
    const forkMapRev = Object.keys(forkMap).reduce((acc, elem)=>{
        acc[forkMap[elem].name] = elem;
        return acc;
    }, {});
    const configHardforkNames = Object.keys(config).filter((key)=>forkMapRev[key] !== undefined && config[key] !== undefined && config[key] !== null);
    params.hardforks = configHardforkNames.map((nameBlock)=>({
            name: forkMapRev[nameBlock],
            block: forkMap[forkMapRev[nameBlock]].isTimestamp === true || typeof config[nameBlock] !== "number" ? null : config[nameBlock],
            timestamp: forkMap[forkMapRev[nameBlock]].isTimestamp === true && typeof config[nameBlock] === "number" ? config[nameBlock] : undefined
        })).filter((fork)=>fork.block !== null || fork.timestamp !== undefined);
    params.hardforks.sort(function(a, b) {
        return (a.block ?? Infinity) - (b.block ?? Infinity);
    });
    params.hardforks.sort(function(a, b) {
        return (a.timestamp ?? genesisTimestamp) - (b.timestamp ?? genesisTimestamp);
    });
    if (config.terminalTotalDifficulty !== undefined) {
        // Following points need to be considered for placement of merge hf
        // - Merge hardfork can't be placed at genesis
        // - Place merge hf before any hardforks that require CL participation for e.g. withdrawals
        // - Merge hardfork has to be placed just after genesis if any of the genesis hardforks make CL
        //   necessary for e.g. withdrawals
        const mergeConfig = {
            name: enums_1.Hardfork.Merge,
            ttd: config.terminalTotalDifficulty,
            block: null
        };
        // Merge hardfork has to be placed before first hardfork that is dependent on merge
        const postMergeIndex = params.hardforks.findIndex((hf)=>forkMap[hf.name]?.postMerge === true);
        if (postMergeIndex !== -1) params.hardforks.splice(postMergeIndex, 0, mergeConfig);
        else params.hardforks.push(mergeConfig);
    }
    const latestHardfork = params.hardforks.length > 0 ? params.hardforks.slice(-1)[0] : undefined;
    params.hardfork = latestHardfork?.name;
    params.hardforks.unshift({
        name: enums_1.Hardfork.Chainstart,
        block: 0
    });
    return params;
}
/**
 * Parses a genesis.json exported from Geth into parameters for Common instance
 * @param json representing the Geth genesis file
 * @param name optional chain name
 * @returns parsed params
 */ function parseGethGenesis(json, name, mergeForkIdPostMerge) {
    try {
        if ([
            "config",
            "difficulty",
            "gasLimit",
            "alloc"
        ].some((field)=>!(field in json))) throw new Error("Invalid format, expected geth genesis fields missing");
        if (name !== undefined) json.name = name;
        return parseGethParams(json, mergeForkIdPostMerge);
    } catch (e) {
        throw new Error(`Error parsing parameters file: ${e.message}`);
    }
}
exports.parseGethGenesis = parseGethGenesis;

},{"f3ec3368a1b4ba81":"2ctjb","27ec9419229433b3":"6L8wT"}],"l9kQE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"4zxw4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlobNetworkTransactionWrapper = exports.KZGProofType = exports.KZGCommitmentType = exports.SignedBlobTransactionType = exports.ECDSASignatureType = exports.BlobTransactionType = exports.AccessTupleType = exports.AddressType = exports.isAccessList = exports.isAccessListBuffer = exports.Capability = void 0;
const ssz_1 = require("48c4c4aca86c1043");
const constants_1 = require("af63dbc0251d9e3a");
const Bytes20 = new ssz_1.ByteVectorType(20);
const Bytes32 = new ssz_1.ByteVectorType(32);
const Bytes48 = new ssz_1.ByteVectorType(48);
const Uint64 = new ssz_1.UintBigintType(8);
const Uint256 = new ssz_1.UintBigintType(32);
/**
 * Can be used in conjunction with {@link Transaction.supports}
 * to query on tx capabilities
 */ var Capability;
(function(Capability) {
    /**
     * Tx supports EIP-155 replay protection
     * See: [155](https://eips.ethereum.org/EIPS/eip-155) Replay Attack Protection EIP
     */ Capability[Capability["EIP155ReplayProtection"] = 155] = "EIP155ReplayProtection";
    /**
     * Tx supports EIP-1559 gas fee market mechanism
     * See: [1559](https://eips.ethereum.org/EIPS/eip-1559) Fee Market EIP
     */ Capability[Capability["EIP1559FeeMarket"] = 1559] = "EIP1559FeeMarket";
    /**
     * Tx is a typed transaction as defined in EIP-2718
     * See: [2718](https://eips.ethereum.org/EIPS/eip-2718) Transaction Type EIP
     */ Capability[Capability["EIP2718TypedTransaction"] = 2718] = "EIP2718TypedTransaction";
    /**
     * Tx supports access list generation as defined in EIP-2930
     * See: [2930](https://eips.ethereum.org/EIPS/eip-2930) Access Lists EIP
     */ Capability[Capability["EIP2930AccessLists"] = 2930] = "EIP2930AccessLists";
})(Capability = exports.Capability || (exports.Capability = {}));
function isAccessListBuffer(input) {
    if (input.length === 0) return true;
    const firstItem = input[0];
    if (Array.isArray(firstItem)) return true;
    return false;
}
exports.isAccessListBuffer = isAccessListBuffer;
function isAccessList(input) {
    return !isAccessListBuffer(input); // This is exactly the same method, except the output is negated.
}
exports.isAccessList = isAccessList;
/** EIP4844 types */ exports.AddressType = Bytes20; // SSZ encoded address
// SSZ encoded container for address and storage keys
exports.AccessTupleType = new ssz_1.ContainerType({
    address: exports.AddressType,
    storageKeys: new ssz_1.ListCompositeType(Bytes32, constants_1.MAX_VERSIONED_HASHES_LIST_SIZE)
});
// SSZ encoded blob transaction
exports.BlobTransactionType = new ssz_1.ContainerType({
    chainId: Uint256,
    nonce: Uint64,
    maxPriorityFeePerGas: Uint256,
    maxFeePerGas: Uint256,
    gas: Uint64,
    to: new ssz_1.UnionType([
        new ssz_1.NoneType(),
        exports.AddressType
    ]),
    value: Uint256,
    data: new ssz_1.ByteListType(constants_1.MAX_CALLDATA_SIZE),
    accessList: new ssz_1.ListCompositeType(exports.AccessTupleType, constants_1.MAX_ACCESS_LIST_SIZE),
    maxFeePerDataGas: Uint256,
    blobVersionedHashes: new ssz_1.ListCompositeType(Bytes32, constants_1.MAX_VERSIONED_HASHES_LIST_SIZE)
});
// SSZ encoded ECDSA Signature
exports.ECDSASignatureType = new ssz_1.ContainerType({
    yParity: new ssz_1.BooleanType(),
    r: Uint256,
    s: Uint256
});
// SSZ encoded signed blob transaction
exports.SignedBlobTransactionType = new ssz_1.ContainerType({
    message: exports.BlobTransactionType,
    signature: exports.ECDSASignatureType
});
// SSZ encoded KZG Commitment/Proof (48 bytes)
exports.KZGCommitmentType = Bytes48;
exports.KZGProofType = exports.KZGCommitmentType;
// SSZ encoded blob network transaction wrapper
exports.BlobNetworkTransactionWrapper = new ssz_1.ContainerType({
    tx: exports.SignedBlobTransactionType,
    blobKzgs: new ssz_1.ListCompositeType(exports.KZGCommitmentType, constants_1.MAX_TX_WRAP_KZG_COMMITMENTS),
    blobs: new ssz_1.ListCompositeType(new ssz_1.ByteVectorType(constants_1.FIELD_ELEMENTS_PER_BLOB * constants_1.BYTES_PER_FIELD_ELEMENT), constants_1.LIMIT_BLOBS_PER_TX),
    kzgAggregatedProof: exports.KZGProofType
});

},{"48c4c4aca86c1043":"7Mrge","af63dbc0251d9e3a":"25Jaz"}],"25Jaz":[function(require,module,exports) {
"use strict";
/** EIP4844 constants */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BYTES_PER_FIELD_ELEMENT = exports.FIELD_ELEMENTS_PER_BLOB = exports.MAX_TX_WRAP_KZG_COMMITMENTS = exports.LIMIT_BLOBS_PER_TX = exports.MAX_VERSIONED_HASHES_LIST_SIZE = exports.MAX_ACCESS_LIST_SIZE = exports.MAX_CALLDATA_SIZE = void 0;
exports.MAX_CALLDATA_SIZE = 16777216; // 2 ** 24
exports.MAX_ACCESS_LIST_SIZE = 16777216; // 2 ** 24
exports.MAX_VERSIONED_HASHES_LIST_SIZE = 16777216; // 2 ** 24
exports.LIMIT_BLOBS_PER_TX = 16777216; // 2 ** 24
exports.MAX_TX_WRAP_KZG_COMMITMENTS = 16777216; // 2 ** 24
exports.FIELD_ELEMENTS_PER_BLOB = 4096; // This is also in the Common 4844 parameters but needed here since types can't access Common params
exports.BYTES_PER_FIELD_ELEMENT = 32;

},{}],"1dOHp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.blobTxToNetworkWrapperDataFormat = exports.AccessLists = exports.checkMaxInitCodeSize = void 0;
const util_1 = require("b94831058d793b72");
const types_1 = require("72556d2439c86f3f");
function checkMaxInitCodeSize(common, length) {
    const maxInitCodeSize = common.param("vm", "maxInitCodeSize");
    if (maxInitCodeSize && BigInt(length) > maxInitCodeSize) throw new Error(`the initcode size of this transaction is too large: it is ${length} while the max is ${common.param("vm", "maxInitCodeSize")}`);
}
exports.checkMaxInitCodeSize = checkMaxInitCodeSize;
class AccessLists {
    static getAccessListData(accessList) {
        let AccessListJSON;
        let bufferAccessList;
        if ((0, types_1.isAccessList)(accessList)) {
            AccessListJSON = accessList;
            const newAccessList = [];
            for(let i = 0; i < accessList.length; i++){
                const item = accessList[i];
                const addressBuffer = (0, util_1.toBuffer)(item.address);
                const storageItems = [];
                for(let index = 0; index < item.storageKeys.length; index++)storageItems.push((0, util_1.toBuffer)(item.storageKeys[index]));
                newAccessList.push([
                    addressBuffer,
                    storageItems
                ]);
            }
            bufferAccessList = newAccessList;
        } else {
            bufferAccessList = accessList ?? [];
            // build the JSON
            const json = [];
            for(let i = 0; i < bufferAccessList.length; i++){
                const data = bufferAccessList[i];
                const address = (0, util_1.bufferToHex)(data[0]);
                const storageKeys = [];
                for(let item = 0; item < data[1].length; item++)storageKeys.push((0, util_1.bufferToHex)(data[1][item]));
                const jsonItem = {
                    address,
                    storageKeys
                };
                json.push(jsonItem);
            }
            AccessListJSON = json;
        }
        return {
            AccessListJSON,
            accessList: bufferAccessList
        };
    }
    static verifyAccessList(accessList) {
        for(let key = 0; key < accessList.length; key++){
            const accessListItem = accessList[key];
            const address = accessListItem[0];
            const storageSlots = accessListItem[1];
            if (accessListItem[2] !== undefined) throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");
            if (address.length !== 20) throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");
            for(let storageSlot = 0; storageSlot < storageSlots.length; storageSlot++){
                if (storageSlots[storageSlot].length !== 32) throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes");
            }
        }
    }
    static getAccessListJSON(accessList) {
        const accessListJSON = [];
        for(let index = 0; index < accessList.length; index++){
            const item = accessList[index];
            const JSONItem = {
                address: "0x" + (0, util_1.setLengthLeft)(item[0], 20).toString("hex"),
                storageKeys: []
            };
            const storageSlots = item[1];
            for(let slot = 0; slot < storageSlots.length; slot++){
                const storageSlot = storageSlots[slot];
                JSONItem.storageKeys.push("0x" + (0, util_1.setLengthLeft)(storageSlot, 32).toString("hex"));
            }
            accessListJSON.push(JSONItem);
        }
        return accessListJSON;
    }
    static getDataFeeEIP2930(accessList, common) {
        const accessListStorageKeyCost = common.param("gasPrices", "accessListStorageKeyCost");
        const accessListAddressCost = common.param("gasPrices", "accessListAddressCost");
        let slots = 0;
        for(let index = 0; index < accessList.length; index++){
            const item = accessList[index];
            const storageSlots = item[1];
            slots += storageSlots.length;
        }
        const addresses = accessList.length;
        return addresses * Number(accessListAddressCost) + slots * Number(accessListStorageKeyCost);
    }
}
exports.AccessLists = AccessLists;
const blobTxToNetworkWrapperDataFormat = (tx)=>{
    const to = {
        selector: tx.to !== undefined ? 1 : 0,
        value: tx.to?.toBuffer() ?? null
    };
    return {
        message: {
            chainId: tx.common.chainId(),
            nonce: tx.nonce,
            maxPriorityFeePerGas: tx.maxPriorityFeePerGas,
            maxFeePerGas: tx.maxFeePerGas,
            gas: tx.gasLimit,
            to,
            value: tx.value,
            data: tx.data,
            accessList: tx.accessList.map((listItem)=>{
                return {
                    address: listItem[0],
                    storageKeys: listItem[1]
                };
            }),
            blobVersionedHashes: tx.versionedHashes,
            maxFeePerDataGas: tx.maxFeePerDataGas
        },
        // If transaction is unsigned, signature fields will be initialized to zeroes
        signature: {
            r: tx.r ?? BigInt(0),
            s: tx.s ?? BigInt(0),
            yParity: tx.v === BigInt(1) ? true : false
        }
    };
};
exports.blobTxToNetworkWrapperDataFormat = blobTxToNetworkWrapperDataFormat;

},{"b94831058d793b72":"2ctjb","72556d2439c86f3f":"4zxw4"}],"56Q0M":[function(require,module,exports) {
var Buffer = require("7c7178f624ffe52a").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessListEIP2930Transaction = void 0;
const rlp_1 = require("704339da22ec30de");
const util_1 = require("b34d45eaf3545f2e");
const keccak_1 = require("aa1352442424e618");
const baseTransaction_1 = require("49723ac15806f4bc");
const util_2 = require("326ffb3b5b1217c2");
const TRANSACTION_TYPE = 1;
const TRANSACTION_TYPE_BUFFER = Buffer.from(TRANSACTION_TYPE.toString(16).padStart(2, "0"), "hex");
/**
 * Typed transaction with optional access lists
 *
 * - TransactionType: 1
 * - EIP: [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)
 */ class AccessListEIP2930Transaction extends baseTransaction_1.BaseTransaction {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        super({
            ...txData,
            type: TRANSACTION_TYPE
        }, opts);
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */ this.DEFAULT_HARDFORK = "berlin";
        const { chainId , accessList , gasPrice  } = txData;
        this.common = this._getCommon(opts.common, chainId);
        this.chainId = this.common.chainId();
        // EIP-2718 check is done in Common
        if (!this.common.isActivatedEIP(2930)) throw new Error("EIP-2930 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([
            2718,
            2930
        ]);
        // Populate the access list fields
        const accessListData = util_2.AccessLists.getAccessListData(accessList ?? []);
        this.accessList = accessListData.accessList;
        this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        util_2.AccessLists.verifyAccessList(this.accessList);
        this.gasPrice = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(gasPrice === "" ? "0x" : gasPrice));
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        });
        baseTransaction_1.BaseTransaction._validateNotArray(txData);
        if (this.gasPrice * this.gasLimit > util_1.MAX_INTEGER) {
            const msg = this._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");
            throw new Error(msg);
        }
        this._validateYParity();
        this._validateHighS();
        if (this.common.isActivatedEIP(3860)) (0, util_2.checkMaxInitCodeSize)(this.common, this.data.length);
        const freeze = opts?.freeze ?? true;
        if (freeze) Object.freeze(this);
    }
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new AccessListEIP2930Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     */ static fromSerializedTx(serialized, opts = {}) {
        if (!serialized.slice(0, 1).equals(TRANSACTION_TYPE_BUFFER)) throw new Error(`Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ${TRANSACTION_TYPE}, received: ${serialized.slice(0, 1).toString("hex")}`);
        const values = (0, util_1.arrToBufArr)(rlp_1.RLP.decode(Uint8Array.from(serialized.slice(1))));
        if (!Array.isArray(values)) throw new Error("Invalid serialized tx input: must be array");
        return AccessListEIP2930Transaction.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     */ static fromValuesArray(values, opts = {}) {
        if (values.length !== 8 && values.length !== 11) throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");
        const [chainId, nonce, gasPrice, gasLimit, to, value, data, accessList, v, r, s] = values;
        this._validateNotArray({
            chainId,
            v
        });
        (0, util_1.validateNoLeadingZeroes)({
            nonce,
            gasPrice,
            gasLimit,
            value,
            v,
            r,
            s
        });
        const emptyAccessList = [];
        return new AccessListEIP2930Transaction({
            chainId: (0, util_1.bufferToBigInt)(chainId),
            nonce,
            gasPrice,
            gasLimit,
            to,
            value,
            data,
            accessList: accessList ?? emptyAccessList,
            v: v !== undefined ? (0, util_1.bufferToBigInt)(v) : undefined,
            r,
            s
        }, opts);
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
        let cost = super.getDataFee();
        cost += BigInt(util_2.AccessLists.getDataFeeEIP2930(this.accessList, this.common));
        if (Object.isFrozen(this)) this.cache.dataFee = {
            value: cost,
            hardfork: this.common.hardfork()
        };
        return cost;
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */ getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * Returns a Buffer Array of the raw Buffers of the EIP-2930 transaction, in order.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     *
     * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, util_1.bigIntToUnpaddedBuffer)(this.chainId),
            (0, util_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasPrice),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, util_1.bigIntToUnpaddedBuffer)(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the EIP-2930 transaction.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */ serialize() {
        const base = this.raw();
        return Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            Buffer.from(rlp_1.RLP.encode((0, util_1.bufArrToArr)(base)))
        ]);
    }
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */ getMessageToSign(hashMessage = true) {
        const base = this.raw().slice(0, 8);
        const message = Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            Buffer.from(rlp_1.RLP.encode((0, util_1.bufArrToArr)(base)))
        ]);
        if (hashMessage) return Buffer.from((0, keccak_1.keccak256)(message));
        else return message;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) this.cache.hash = Buffer.from((0, keccak_1.keccak256)(this.serialize()));
            return this.cache.hash;
        }
        return Buffer.from((0, keccak_1.keccak256)(this.serialize()));
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(msg);
        }
        const msgHash = this.getMessageToVerifySignature();
        const { v , r , s  } = this;
        this._validateHighS();
        try {
            return (0, util_1.ecrecover)(msgHash, v + BigInt(27), (0, util_1.bigIntToUnpaddedBuffer)(r), (0, util_1.bigIntToUnpaddedBuffer)(s));
        } catch (e) {
            const msg = this._errorMsg("Invalid Signature");
            throw new Error(msg);
        }
    }
    _processSignature(v, r, s) {
        const opts = {
            ...this.txOptions,
            common: this.common
        };
        return AccessListEIP2930Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: v - BigInt(27),
            r: (0, util_1.bufferToBigInt)(r),
            s: (0, util_1.bufferToBigInt)(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction
     */ toJSON() {
        const accessListJSON = util_2.AccessLists.getAccessListJSON(this.accessList);
        return {
            chainId: (0, util_1.bigIntToHex)(this.chainId),
            nonce: (0, util_1.bigIntToHex)(this.nonce),
            gasPrice: (0, util_1.bigIntToHex)(this.gasPrice),
            gasLimit: (0, util_1.bigIntToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, util_1.bigIntToHex)(this.value),
            data: "0x" + this.data.toString("hex"),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, util_1.bigIntToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, util_1.bigIntToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, util_1.bigIntToHex)(this.s) : undefined
        };
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        // Keep ? for this.accessList since this otherwise causes Hardhat E2E tests to fail
        errorStr += ` gasPrice=${this.gasPrice} accessListCount=${this.accessList?.length ?? 0}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
}
exports.AccessListEIP2930Transaction = AccessListEIP2930Transaction;

},{"7c7178f624ffe52a":"fCgem","704339da22ec30de":"chaum","b34d45eaf3545f2e":"2ctjb","aa1352442424e618":"e6qJj","49723ac15806f4bc":"54vs0","326ffb3b5b1217c2":"1dOHp"}],"71ylt":[function(require,module,exports) {
var Buffer = require("bdffe745ff20892b").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlobEIP4844Transaction = void 0;
const ssz_1 = require("33d905984fdd1301");
const util_1 = require("c1267cbed82dfc75");
const keccak_1 = require("b233dea635830469");
const baseTransaction_1 = require("9d9ede8fb78df486");
const constants_1 = require("d400719c44302b55");
const kzg_1 = require("7a6a3d871bce941e");
const types_1 = require("7c64ce4870d3ee70");
const util_2 = require("2f8827f185a184a7");
const blobHelpers_1 = require("a9684a80ac904e7c");
const TRANSACTION_TYPE = 0x05;
const TRANSACTION_TYPE_BUFFER = Buffer.from(TRANSACTION_TYPE.toString(16).padStart(2, "0"), "hex");
const validateBlobTransactionNetworkWrapper = (versionedHashes, blobs, commitments, kzgProof, version)=>{
    if (!(versionedHashes.length === blobs.length && blobs.length === commitments.length)) throw new Error("Number of versionedHashes, blobs, and commitments not all equal");
    try {
        kzg_1.kzg.verifyAggregateKzgProof(blobs, commitments, kzgProof);
    } catch (e) {
        throw new Error("KZG proof cannot be verified from blobs/commitments");
    }
    for(let x = 0; x < versionedHashes.length; x++){
        const computedVersionedHash = (0, blobHelpers_1.computeVersionedHash)(commitments[x], version);
        if (!(0, ssz_1.byteArrayEquals)(computedVersionedHash, versionedHashes[x])) throw new Error(`commitment for blob at index ${x} does not match versionedHash`);
    }
};
/**
 * Typed transaction with a new gas fee market mechanism for transactions that include "blobs" of data
 *
 * - TransactionType: 5
 * - EIP: [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844)
 */ class BlobEIP4844Transaction extends baseTransaction_1.BaseTransaction {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static constructors or factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        super({
            ...txData,
            type: TRANSACTION_TYPE
        }, opts);
        const { chainId , accessList , maxFeePerGas , maxPriorityFeePerGas , maxFeePerDataGas  } = txData;
        this.common = this._getCommon(opts.common, chainId);
        this.chainId = this.common.chainId();
        if (this.common.isActivatedEIP(1559) === false) throw new Error("EIP-1559 not enabled on Common");
        if (this.common.isActivatedEIP(4844) === false) throw new Error("EIP-4844 not enabled on Common");
        this.activeCapabilities = this.activeCapabilities.concat([
            1559,
            2718,
            2930
        ]);
        // Populate the access list fields
        const accessListData = util_2.AccessLists.getAccessListData(accessList ?? []);
        this.accessList = accessListData.accessList;
        this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        util_2.AccessLists.verifyAccessList(this.accessList);
        this.maxFeePerGas = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(maxFeePerGas === "" ? "0x" : maxFeePerGas));
        this.maxPriorityFeePerGas = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(maxPriorityFeePerGas === "" ? "0x" : maxPriorityFeePerGas));
        this._validateCannotExceedMaxInteger({
            maxFeePerGas: this.maxFeePerGas,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas
        });
        baseTransaction_1.BaseTransaction._validateNotArray(txData);
        if (this.gasLimit * this.maxFeePerGas > util_1.MAX_INTEGER) {
            const msg = this._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(msg);
        }
        if (this.maxFeePerGas < this.maxPriorityFeePerGas) {
            const msg = this._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");
            throw new Error(msg);
        }
        this.maxFeePerDataGas = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)((maxFeePerDataGas ?? "") === "" ? "0x" : maxFeePerDataGas));
        this.versionedHashes = (txData.versionedHashes ?? []).map((vh)=>(0, util_1.toBuffer)(vh));
        this._validateYParity();
        this._validateHighS();
        if (this.common.isActivatedEIP(3860)) (0, util_2.checkMaxInitCodeSize)(this.common, this.data.length);
        for (const hash of this.versionedHashes){
            if (hash.length !== 32) {
                const msg = this._errorMsg("versioned hash is invalid length");
                throw new Error(msg);
            }
            if (BigInt(hash[0]) !== this.common.paramByEIP("sharding", "blobCommitmentVersionKzg", 4844)) {
                const msg = this._errorMsg("versioned hash does not start with KZG commitment version");
                throw new Error(msg);
            }
        }
        if (this.versionedHashes.length > constants_1.LIMIT_BLOBS_PER_TX) {
            const msg = this._errorMsg(`tx can contain at most ${constants_1.LIMIT_BLOBS_PER_TX} blobs`);
            throw new Error(msg);
        }
        this.blobs = txData.blobs?.map((blob)=>(0, util_1.toBuffer)(blob));
        this.kzgCommitments = txData.kzgCommitments?.map((commitment)=>(0, util_1.toBuffer)(commitment));
        this.aggregateKzgProof = (0, util_1.toBuffer)(txData.kzgProof);
        const freeze = opts?.freeze ?? true;
        if (freeze) Object.freeze(this);
    }
    static fromTxData(txData, opts) {
        return new BlobEIP4844Transaction(txData, opts);
    }
    /**
     * Creates the minimal representation of a blob transaction from the network wrapper version.
     * The minimal representation is used when adding transactions to an execution payload/block
     * @param txData a {@link BlobEIP4844Transaction} containing optional blobs/kzg commitments
     * @param opts - dictionary of {@link TxOptions}
     * @returns the "minimal" representation of a BlobEIP4844Transaction (i.e. transaction object minus blobs and kzg commitments)
     */ static minimalFromNetworkWrapper(txData, opts) {
        const tx = BlobEIP4844Transaction.fromTxData({
            ...txData,
            blobs: undefined,
            kzgCommitments: undefined,
            kzgProof: undefined
        }, opts);
        return tx;
    }
    /**
     * Creates a transaction from the network encoding of a blob transaction (with blobs/commitments/proof)
     * @param serialized a buffer representing a serialized BlobTransactionNetworkWrapper
     * @param opts any TxOptions defined
     * @returns a BlobEIP4844Transaction
     * @throws if no KZG library is loaded -- using the `initKzg` helper method -- or if `opts.common` not provided
     */ static fromSerializedBlobTxNetworkWrapper(serialized, opts) {
        if (!opts || !opts.common) throw new Error("common instance required to validate versioned hashes");
        // Validate network wrapper
        const wrapper = types_1.BlobNetworkTransactionWrapper.deserialize(serialized.slice(1));
        const decodedTx = wrapper.tx.message;
        const version = Number(opts.common.paramByEIP("sharding", "blobCommitmentVersionKzg", 4844));
        validateBlobTransactionNetworkWrapper(decodedTx.blobVersionedHashes, wrapper.blobs, wrapper.blobKzgs, wrapper.kzgAggregatedProof, version);
        const accessList = [];
        for (const listItem of decodedTx.accessList){
            const address = Buffer.from(listItem.address);
            const storageKeys = listItem.storageKeys.map((key)=>Buffer.from(key));
            const accessListItem = [
                address,
                storageKeys
            ];
            accessList.push(accessListItem);
        }
        const to = decodedTx.to.value === null ? undefined : util_1.Address.fromString((0, util_1.bufferToHex)(Buffer.from(decodedTx.to.value)));
        const versionedHashes = decodedTx.blobVersionedHashes.map((el)=>Buffer.from(el));
        const commitments = wrapper.blobKzgs.map((el)=>Buffer.from(el));
        const blobs = wrapper.blobs.map((el)=>Buffer.from(el));
        const txData = {
            ...decodedTx,
            versionedHashes,
            accessList,
            to,
            blobs,
            kzgCommitments: commitments,
            kzgProof: Buffer.from(wrapper.kzgAggregatedProof),
            r: wrapper.tx.signature.r,
            s: wrapper.tx.signature.s,
            v: BigInt(wrapper.tx.signature.yParity),
            gasLimit: decodedTx.gas,
            maxFeePerGas: decodedTx.maxFeePerGas,
            maxPriorityFeePerGas: decodedTx.maxPriorityFeePerGas
        };
        return new BlobEIP4844Transaction(txData, opts);
    }
    /**
     * Creates a transaction from the "minimal" encoding of a blob transaction (without blobs/commitments/kzg proof)
     * @param serialized a buffer representing a serialized signed blob transaction
     * @param opts any TxOptions defined
     * @returns a BlobEIP4844Transaction
     */ static fromSerializedTx(serialized, opts) {
        const decoded = types_1.SignedBlobTransactionType.deserialize(serialized.slice(1));
        const tx = decoded.message;
        const accessList = [];
        for (const listItem of tx.accessList){
            const address = Buffer.from(listItem.address);
            const storageKeys = listItem.storageKeys.map((key)=>Buffer.from(key));
            const accessListItem = [
                address,
                storageKeys
            ];
            accessList.push(accessListItem);
        }
        const to = tx.to.value === null ? undefined : util_1.Address.fromString((0, util_1.bufferToHex)(Buffer.from(tx.to.value)));
        const versionedHashes = tx.blobVersionedHashes.map((el)=>Buffer.from(el));
        const txData = {
            ...tx,
            versionedHashes,
            to,
            accessList,
            r: decoded.signature.r,
            s: decoded.signature.s,
            v: BigInt(decoded.signature.yParity),
            gasLimit: decoded.message.gas
        };
        return new BlobEIP4844Transaction(txData, opts);
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */ getUpfrontCost(baseFee = BigInt(0)) {
        const prio = this.maxPriorityFeePerGas;
        const maxBase = this.maxFeePerGas - baseFee;
        const inclusionFeePerGas = prio < maxBase ? prio : maxBase;
        const gasPrice = inclusionFeePerGas + baseFee;
        return this.gasLimit * gasPrice + this.value;
    }
    /**
     * This method is not implemented for blob transactions as the `raw` method is used exclusively with
     * rlp encoding and these transactions use SSZ for serialization.
     */ raw() {
        throw new Error("Method not implemented.");
    }
    toValue() {
        const to = {
            selector: this.to !== undefined ? 1 : 0,
            value: this.to?.toBuffer() ?? null
        };
        return {
            message: {
                chainId: this.common.chainId(),
                nonce: this.nonce,
                maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                maxFeePerGas: this.maxFeePerGas,
                gas: this.gasLimit,
                to,
                value: this.value,
                data: this.data,
                accessList: this.accessList.map((listItem)=>{
                    return {
                        address: listItem[0],
                        storageKeys: listItem[1]
                    };
                }),
                blobVersionedHashes: this.versionedHashes,
                maxFeePerDataGas: this.maxFeePerDataGas
            },
            // TODO: Decide how to serialize an unsigned transaction
            signature: {
                r: this.r ?? BigInt(0),
                s: this.s ?? BigInt(0),
                yParity: this.v === BigInt(1) ? true : false
            }
        };
    }
    /**
     * Serialize a blob transaction to the execution payload variant
     * @returns the minimum (execution payload) serialization of a signed transaction
     */ serialize() {
        const sszEncodedTx = types_1.SignedBlobTransactionType.serialize(this.toValue());
        return Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            sszEncodedTx
        ]);
    }
    /**
     * @returns the serialized form of a blob transaction in the network wrapper format (used for gossipping mempool transactions over devp2p)
     */ serializeNetworkWrapper() {
        if (this.blobs === undefined || this.kzgCommitments === undefined || this.aggregateKzgProof === undefined) throw new Error("cannot serialize network wrapper without blobs, KZG commitments and aggregate KZG proof provided");
        const to = {
            selector: this.to !== undefined ? 1 : 0,
            value: this.to?.toBuffer() ?? null
        };
        const blobArrays = this.blobs?.map((blob)=>Uint8Array.from(blob)) ?? [];
        const serializedTxWrapper = types_1.BlobNetworkTransactionWrapper.serialize({
            blobs: blobArrays,
            blobKzgs: this.kzgCommitments?.map((commitment)=>Uint8Array.from(commitment)) ?? [],
            tx: {
                ...(0, util_2.blobTxToNetworkWrapperDataFormat)(this),
                ...to
            },
            kzgAggregatedProof: Uint8Array.from(this.aggregateKzgProof ?? [])
        });
        return Buffer.concat([
            Buffer.from([
                0x05
            ]),
            serializedTxWrapper
        ]);
    }
    getMessageToSign(_hashMessage) {
        return this.unsignedHash();
    }
    /**
     * Returns the hash of a blob transaction
     */ unsignedHash() {
        const serializedTx = types_1.BlobTransactionType.serialize(this.toValue().message);
        return Buffer.from((0, keccak_1.keccak256)(Buffer.concat([
            TRANSACTION_TYPE_BUFFER,
            serializedTx
        ])));
    }
    hash() {
        return Buffer.from((0, keccak_1.keccak256)(this.serialize()));
    }
    getMessageToVerifySignature() {
        return this.getMessageToSign();
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call this method if transaction is not signed");
            throw new Error(msg);
        }
        const msgHash = this.getMessageToVerifySignature();
        const { v , r , s  } = this;
        this._validateHighS();
        try {
            return (0, util_1.ecrecover)(msgHash, v + BigInt(27), (0, util_1.bigIntToUnpaddedBuffer)(r), (0, util_1.bigIntToUnpaddedBuffer)(s));
        } catch (e) {
            const msg = this._errorMsg("Invalid Signature");
            throw new Error(msg);
        }
    }
    toJSON() {
        const accessListJSON = util_2.AccessLists.getAccessListJSON(this.accessList);
        return {
            chainId: (0, util_1.bigIntToHex)(this.chainId),
            nonce: (0, util_1.bigIntToHex)(this.nonce),
            maxPriorityFeePerGas: (0, util_1.bigIntToHex)(this.maxPriorityFeePerGas),
            maxFeePerGas: (0, util_1.bigIntToHex)(this.maxFeePerGas),
            gasLimit: (0, util_1.bigIntToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, util_1.bigIntToHex)(this.value),
            data: "0x" + this.data.toString("hex"),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, util_1.bigIntToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, util_1.bigIntToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, util_1.bigIntToHex)(this.s) : undefined,
            maxFeePerDataGas: (0, util_1.bigIntToHex)(this.maxFeePerDataGas),
            versionedHashes: this.versionedHashes.map((hash)=>(0, util_1.bufferToHex)(hash))
        };
    }
    _processSignature(v, r, s) {
        const opts = {
            ...this.txOptions,
            common: this.common
        };
        return BlobEIP4844Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: v - BigInt(27),
            r: (0, util_1.bufferToBigInt)(r),
            s: (0, util_1.bufferToBigInt)(s),
            maxFeePerDataGas: this.maxFeePerDataGas,
            versionedHashes: this.versionedHashes,
            blobs: this.blobs,
            kzgCommitments: this.kzgCommitments,
            kzgProof: this.aggregateKzgProof
        }, opts);
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        errorStr += ` maxFeePerGas=${this.maxFeePerGas} maxPriorityFeePerGas=${this.maxPriorityFeePerGas}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
    /**
     * @returns the number of blobs included with this transaction
     */ numBlobs() {
        return this.versionedHashes.length;
    }
}
exports.BlobEIP4844Transaction = BlobEIP4844Transaction;

},{"bdffe745ff20892b":"fCgem","33d905984fdd1301":"7Mrge","c1267cbed82dfc75":"2ctjb","b233dea635830469":"e6qJj","9d9ede8fb78df486":"54vs0","d400719c44302b55":"25Jaz","7a6a3d871bce941e":"4RVGS","7c64ce4870d3ee70":"4zxw4","2f8827f185a184a7":"1dOHp","a9684a80ac904e7c":"eK56v"}],"4RVGS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initKZG = exports.kzg = void 0;
function kzgNotLoaded() {
    throw Error("kzg library not loaded");
}
// eslint-disable-next-line import/no-mutable-exports
exports.kzg = {
    freeTrustedSetup: kzgNotLoaded,
    loadTrustedSetup: kzgNotLoaded,
    blobToKzgCommitment: kzgNotLoaded,
    computeAggregateKzgProof: kzgNotLoaded,
    verifyKzgProof: kzgNotLoaded,
    verifyAggregateKzgProof: kzgNotLoaded
};
/**
 * @param kzgLib a KZG implementation (defaults to c-kzg)
 * @param trustedSetupPath the full path (e.g. "/home/linux/devnet4.txt") to a kzg trusted setup text file
 */ function initKZG(kzgLib, trustedSetupPath) {
    exports.kzg = kzgLib;
    exports.kzg.loadTrustedSetup(trustedSetupPath);
}
exports.initKZG = initKZG;

},{}],"eK56v":[function(require,module,exports) {
var Buffer = require("19d5aed9fb84f66e").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commitmentsToVersionedHashes = exports.computeVersionedHash = exports.blobsToCommitments = exports.getBlobs = void 0;
const sha256_1 = require("19aa4402e98d9df3");
const kzg_1 = require("c5ee2a9ce7e3c66b");
/**
 * These utilities for constructing blobs are borrowed from https://github.com/Inphi/eip4844-interop.git
 */ const BYTES_PER_FIELD_ELEMENT = 32;
const FIELD_ELEMENTS_PER_BLOB = 4096;
const USEFUL_BYTES_PER_BLOB = 32 * FIELD_ELEMENTS_PER_BLOB;
const MAX_BLOBS_PER_TX = 2;
const MAX_USEFUL_BYTES_PER_TX = USEFUL_BYTES_PER_BLOB * MAX_BLOBS_PER_TX - 1;
const BLOB_SIZE = BYTES_PER_FIELD_ELEMENT * FIELD_ELEMENTS_PER_BLOB;
function get_padded(data, blobs_len) {
    const pdata = Buffer.alloc(blobs_len * USEFUL_BYTES_PER_BLOB);
    const datalen = Buffer.byteLength(data);
    pdata.fill(data, 0, datalen);
    pdata[datalen] = 0x80;
    return pdata;
}
function get_blob(data) {
    const blob = Buffer.alloc(BLOB_SIZE, "binary");
    for(let i = 0; i < FIELD_ELEMENTS_PER_BLOB; i++){
        const chunk = Buffer.alloc(32, "binary");
        chunk.fill(data.subarray(i * 31, (i + 1) * 31), 0, 31);
        blob.fill(chunk, i * 32, (i + 1) * 32);
    }
    return blob;
}
const getBlobs = (input)=>{
    const data = Buffer.from(input, "binary");
    const len = Buffer.byteLength(data);
    if (len === 0) throw Error("invalid blob data");
    if (len > MAX_USEFUL_BYTES_PER_TX) throw Error("blob data is too large");
    const blobs_len = Math.ceil(len / USEFUL_BYTES_PER_BLOB);
    const pdata = get_padded(data, blobs_len);
    const blobs = [];
    for(let i = 0; i < blobs_len; i++){
        const chunk = pdata.subarray(i * USEFUL_BYTES_PER_BLOB, (i + 1) * USEFUL_BYTES_PER_BLOB);
        const blob = get_blob(chunk);
        blobs.push(blob);
    }
    return blobs;
};
exports.getBlobs = getBlobs;
const blobsToCommitments = (blobs)=>{
    const commitments = [];
    for (const blob of blobs)commitments.push(Buffer.from(kzg_1.kzg.blobToKzgCommitment(blob)));
    return commitments;
};
exports.blobsToCommitments = blobsToCommitments;
/**
 * Converts a vector commitment for a given data blob to its versioned hash.  For 4844, this version
 * number will be 0x01 for KZG vector commitments but could be different if future vector commitment
 * types are introduced
 * @param commitment a vector commitment to a blob
 * @param blobCommitmentVersion the version number corresponding to the type of vector commitment
 * @returns a versioned hash corresponding to a given blob vector commitment
 */ const computeVersionedHash = (commitment, blobCommitmentVersion)=>{
    const computedVersionedHash = new Uint8Array(32);
    computedVersionedHash.set([
        blobCommitmentVersion
    ], 0);
    computedVersionedHash.set((0, sha256_1.sha256)(commitment).slice(1), 1);
    return computedVersionedHash;
};
exports.computeVersionedHash = computeVersionedHash;
/**
 * Generate an array of versioned hashes from corresponding kzg commitments
 * @param commitments array of kzg commitments
 * @returns array of versioned hashes
 * Note: assumes KZG commitments (version 1 version hashes)
 */ const commitmentsToVersionedHashes = (commitments)=>{
    const hashes = [];
    for (const commitment of commitments)hashes.push(Buffer.from((0, exports.computeVersionedHash)(commitment, 0x01)));
    return hashes;
};
exports.commitmentsToVersionedHashes = commitmentsToVersionedHashes;

},{"19d5aed9fb84f66e":"fCgem","19aa4402e98d9df3":"1j3oh","c5ee2a9ce7e3c66b":"4RVGS"}],"1j3oh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha256 = void 0;
const sha256_1 = require("c49d3a314a24964f");
const utils_1 = require("7310f9545e9fe495");
exports.sha256 = (0, utils_1.wrapHash)(sha256_1.sha256);

},{"c49d3a314a24964f":"JjjO8","7310f9545e9fe495":"aXCOG"}],"lqFvu":[function(require,module,exports) {
var Buffer = require("36b56920cf470209").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Transaction = void 0;
const rlp_1 = require("ec3117ece11d96d1");
const util_1 = require("df3cdbea7c6b87e");
const keccak_1 = require("336fb12b7030f638");
const baseTransaction_1 = require("fbf84e5c6cd479f3");
const types_1 = require("a6c428796f0e7fb9");
const util_2 = require("a0986940198daa1d");
const TRANSACTION_TYPE = 0;
function meetsEIP155(_v, chainId) {
    const v = Number(_v);
    const chainIdDoubled = Number(chainId) * 2;
    return v === chainIdDoubled + 35 || v === chainIdDoubled + 36;
}
/**
 * An Ethereum non-typed (legacy) transaction
 */ class Transaction extends baseTransaction_1.BaseTransaction {
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */ constructor(txData, opts = {}){
        super({
            ...txData,
            type: TRANSACTION_TYPE
        }, opts);
        this.common = this._validateTxV(this.v, opts.common);
        this.gasPrice = (0, util_1.bufferToBigInt)((0, util_1.toBuffer)(txData.gasPrice === "" ? "0x" : txData.gasPrice));
        if (this.gasPrice * this.gasLimit > util_1.MAX_INTEGER) {
            const msg = this._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");
            throw new Error(msg);
        }
        this._validateCannotExceedMaxInteger({
            gasPrice: this.gasPrice
        });
        baseTransaction_1.BaseTransaction._validateNotArray(txData);
        if (this.common.gteHardfork("spuriousDragon")) {
            if (!this.isSigned()) this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
            else // EIP155 spec:
            // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36
            // then when computing the hash of a transaction for purposes of signing or recovering
            // instead of hashing only the first six elements (i.e. nonce, gasprice, startgas, to, value, data)
            // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0.
            // v and chain ID meet EIP-155 conditions
            if (meetsEIP155(this.v, this.common.chainId())) this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
        }
        if (this.common.isActivatedEIP(3860)) (0, util_2.checkMaxInitCodeSize)(this.common, this.data.length);
        const freeze = opts?.freeze ?? true;
        if (freeze) Object.freeze(this);
    }
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
     *
     * Notes:
     * - All parameters are optional and have some basic default values
     */ static fromTxData(txData, opts = {}) {
        return new Transaction(txData, opts);
    }
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     */ static fromSerializedTx(serialized, opts = {}) {
        const values = (0, util_1.arrToBufArr)(rlp_1.RLP.decode(Uint8Array.from(serialized)));
        if (!Array.isArray(values)) throw new Error("Invalid serialized tx input. Must be array");
        return this.fromValuesArray(values, opts);
    }
    /**
     * Create a transaction from a values array.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     */ static fromValuesArray(values, opts = {}) {
        // If length is not 6, it has length 9. If v/r/s are empty Buffers, it is still an unsigned transaction
        // This happens if you get the RLP data from `raw()`
        if (values.length !== 6 && values.length !== 9) throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");
        const [nonce, gasPrice, gasLimit, to, value, data, v, r, s] = values;
        (0, util_1.validateNoLeadingZeroes)({
            nonce,
            gasPrice,
            gasLimit,
            value,
            v,
            r,
            s
        });
        return new Transaction({
            nonce,
            gasPrice,
            gasLimit,
            to,
            value,
            data,
            v,
            r,
            s
        }, opts);
    }
    /**
     * Returns a Buffer Array of the raw Buffers of the legacy transaction, in order.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     *
     * For legacy txs this is also the correct format to add transactions
     * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
     * for typed txs).
     *
     * For an unsigned tx this method returns the empty Buffer values
     * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
     * representation have a look at {@link Transaction.getMessageToSign}.
     */ raw() {
        return [
            (0, util_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasPrice),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, util_1.bigIntToUnpaddedBuffer)(this.value),
            this.data,
            this.v !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, util_1.bigIntToUnpaddedBuffer)(this.s) : Buffer.from([])
        ];
    }
    /**
     * Returns the serialized encoding of the legacy transaction.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link Transaction.getMessageToSign}.
     */ serialize() {
        return Buffer.from(rlp_1.RLP.encode((0, util_1.bufArrToArr)(this.raw())));
    }
    _getMessageToSign() {
        const values = [
            (0, util_1.bigIntToUnpaddedBuffer)(this.nonce),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasPrice),
            (0, util_1.bigIntToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, util_1.bigIntToUnpaddedBuffer)(this.value),
            this.data
        ];
        if (this.supports(types_1.Capability.EIP155ReplayProtection)) {
            values.push((0, util_1.toBuffer)(this.common.chainId()));
            values.push((0, util_1.unpadBuffer)((0, util_1.toBuffer)(0)));
            values.push((0, util_1.unpadBuffer)((0, util_1.toBuffer)(0)));
        }
        return values;
    }
    getMessageToSign(hashMessage = true) {
        const message = this._getMessageToSign();
        if (hashMessage) return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, util_1.bufArrToArr)(message))));
        else return message;
    }
    /**
     * The amount of gas paid for the data in this tx
     */ getDataFee() {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) return this.cache.dataFee.value;
        if (Object.isFrozen(this)) this.cache.dataFee = {
            value: super.getDataFee(),
            hardfork: this.common.hardfork()
        };
        return super.getDataFee();
    }
    /**
     * The up front amount that an account must have for this transaction to be valid
     */ getUpfrontCost() {
        return this.gasLimit * this.gasPrice + this.value;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */ hash() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("Cannot call hash method if transaction is not signed");
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) this.cache.hash = Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, util_1.bufArrToArr)(this.raw()))));
            return this.cache.hash;
        }
        return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, util_1.bufArrToArr)(this.raw()))));
    }
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */ getMessageToVerifySignature() {
        if (!this.isSigned()) {
            const msg = this._errorMsg("This transaction is not signed");
            throw new Error(msg);
        }
        const message = this._getMessageToSign();
        return Buffer.from((0, keccak_1.keccak256)(rlp_1.RLP.encode((0, util_1.bufArrToArr)(message))));
    }
    /**
     * Returns the public key of the sender
     */ getSenderPublicKey() {
        const msgHash = this.getMessageToVerifySignature();
        const { v , r , s  } = this;
        this._validateHighS();
        try {
            return (0, util_1.ecrecover)(msgHash, v, (0, util_1.bigIntToUnpaddedBuffer)(r), (0, util_1.bigIntToUnpaddedBuffer)(s), this.supports(types_1.Capability.EIP155ReplayProtection) ? this.common.chainId() : undefined);
        } catch (e) {
            const msg = this._errorMsg("Invalid Signature");
            throw new Error(msg);
        }
    }
    /**
     * Process the v, r, s values from the `sign` method of the base transaction.
     */ _processSignature(v, r, s) {
        if (this.supports(types_1.Capability.EIP155ReplayProtection)) v += this.common.chainId() * BigInt(2) + BigInt(8);
        const opts = {
            ...this.txOptions,
            common: this.common
        };
        return Transaction.fromTxData({
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            v,
            r: (0, util_1.bufferToBigInt)(r),
            s: (0, util_1.bufferToBigInt)(s)
        }, opts);
    }
    /**
     * Returns an object with the JSON representation of the transaction.
     */ toJSON() {
        return {
            nonce: (0, util_1.bigIntToHex)(this.nonce),
            gasPrice: (0, util_1.bigIntToHex)(this.gasPrice),
            gasLimit: (0, util_1.bigIntToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, util_1.bigIntToHex)(this.value),
            data: "0x" + this.data.toString("hex"),
            v: this.v !== undefined ? (0, util_1.bigIntToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, util_1.bigIntToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, util_1.bigIntToHex)(this.s) : undefined
        };
    }
    /**
     * Validates tx's `v` value
     */ _validateTxV(_v, common) {
        let chainIdBigInt;
        const v = _v !== undefined ? Number(_v) : undefined;
        // Check for valid v values in the scope of a signed legacy tx
        if (v !== undefined) {
            // v is 1. not matching the EIP-155 chainId included case and...
            // v is 2. not matching the classic v=27 or v=28 case
            if (v < 37 && v !== 27 && v !== 28) throw new Error(`Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ${v}`);
        }
        // No unsigned tx and EIP-155 activated and chain ID included
        if (v !== undefined && v !== 0 && (!common || common.gteHardfork("spuriousDragon")) && v !== 27 && v !== 28) {
            if (common) {
                if (!meetsEIP155(BigInt(v), common.chainId())) throw new Error(`Incompatible EIP155-based V ${v} and chain id ${common.chainId()}. See the Common parameter of the Transaction constructor to set the chain id.`);
            } else {
                // Derive the original chain ID
                let numSub;
                if ((v - 35) % 2 === 0) numSub = 35;
                else numSub = 36;
                // Use derived chain ID to create a proper Common
                chainIdBigInt = BigInt(v - numSub) / BigInt(2);
            }
        }
        return this._getCommon(common, chainIdBigInt);
    }
    /**
     * Return a compact error string representation of the object
     */ errorStr() {
        let errorStr = this._getSharedErrorPostfix();
        errorStr += ` gasPrice=${this.gasPrice}`;
        return errorStr;
    }
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */ _errorMsg(msg) {
        return `${msg} (${this.errorStr()})`;
    }
}
exports.Transaction = Transaction;

},{"36b56920cf470209":"fCgem","ec3117ece11d96d1":"chaum","df3cdbea7c6b87e":"2ctjb","336fb12b7030f638":"e6qJj","fbf84e5c6cd479f3":"54vs0","a6c428796f0e7fb9":"4zxw4","a0986940198daa1d":"1dOHp"}],"dfSOO":[function(require,module,exports) {
var Buffer = require("29d77f8785d5e478").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TransactionFactory = void 0;
const util_1 = require("fb49c4e704348487");
const providers_1 = require("4013da8c5c5868b8");
const eip1559Transaction_1 = require("182d5ac044042529");
const eip2930Transaction_1 = require("211092bae377762f");
const eip4844Transaction_1 = require("337fcbdeada34750");
const fromRpc_1 = require("d0193bf8a87d3fc7");
const legacyTransaction_1 = require("5fe28f62ab01ab75");
class TransactionFactory {
    // It is not possible to instantiate a TransactionFactory object.
    constructor(){}
    /**
     * Create a transaction from a `txData` object
     *
     * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
     * @param txOptions - Options to pass on to the constructor of the transaction
     */ static fromTxData(txData, txOptions = {}) {
        if (!("type" in txData) || txData.type === undefined) // Assume legacy transaction
        return legacyTransaction_1.Transaction.fromTxData(txData, txOptions);
        else {
            const txType = Number((0, util_1.bufferToBigInt)((0, util_1.toBuffer)(txData.type)));
            if (txType === 0) return legacyTransaction_1.Transaction.fromTxData(txData, txOptions);
            else if (txType === 1) return eip2930Transaction_1.AccessListEIP2930Transaction.fromTxData(txData, txOptions);
            else if (txType === 2) return eip1559Transaction_1.FeeMarketEIP1559Transaction.fromTxData(txData, txOptions);
            else if (txType === 5) return eip4844Transaction_1.BlobEIP4844Transaction.fromTxData(txData, txOptions);
            else throw new Error(`Tx instantiation with type ${txType} not supported`);
        }
    }
    /**
     * This method tries to decode serialized data.
     *
     * @param data - The data Buffer
     * @param txOptions - The transaction options
     */ static fromSerializedData(data, txOptions = {}) {
        if (data[0] <= 0x7f) // Determine the type.
        switch(data[0]){
            case 1:
                return eip2930Transaction_1.AccessListEIP2930Transaction.fromSerializedTx(data, txOptions);
            case 2:
                return eip1559Transaction_1.FeeMarketEIP1559Transaction.fromSerializedTx(data, txOptions);
            case 5:
                return eip4844Transaction_1.BlobEIP4844Transaction.fromSerializedTx(data, txOptions);
            default:
                throw new Error(`TypedTransaction with ID ${data[0]} unknown`);
        }
        else return legacyTransaction_1.Transaction.fromSerializedTx(data, txOptions);
    }
    /**
     * When decoding a BlockBody, in the transactions field, a field is either:
     * A Buffer (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
     * A Buffer[] (Legacy Transaction)
     * This method returns the right transaction.
     *
     * @param data - A Buffer or Buffer[]
     * @param txOptions - The transaction options
     */ static fromBlockBodyData(data, txOptions = {}) {
        if (Buffer.isBuffer(data)) return this.fromSerializedData(data, txOptions);
        else if (Array.isArray(data)) // It is a legacy transaction
        return legacyTransaction_1.Transaction.fromValuesArray(data, txOptions);
        else throw new Error("Cannot decode transaction: unknown type input");
    }
    /**
     *  Method to retrieve a transaction from the provider
     * @param provider - An Ethers JsonRPCProvider
     * @param txHash - Transaction hash
     * @param txOptions - The transaction options
     * @returns the transaction specified by `txHash`
     */ static async fromEthersProvider(provider, txHash, txOptions) {
        const prov = typeof provider === "string" ? new providers_1.JsonRpcProvider(provider) : provider;
        const txData = await prov.send("eth_getTransactionByHash", [
            txHash
        ]);
        const normedTx = (0, fromRpc_1.normalizeTxParams)(txData);
        return TransactionFactory.fromTxData(normedTx, txOptions);
    }
}
exports.TransactionFactory = TransactionFactory;

},{"29d77f8785d5e478":"fCgem","fb49c4e704348487":"2ctjb","4013da8c5c5868b8":"bErvj","182d5ac044042529":"8R3Ks","211092bae377762f":"56Q0M","337fcbdeada34750":"71ylt","d0193bf8a87d3fc7":"8Qfmz","5fe28f62ab01ab75":"lqFvu"}],"8Qfmz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeTxParams = void 0;
const util_1 = require("c69047c1f150d8c3");
const normalizeTxParams = (_txParams)=>{
    const txParams = Object.assign({}, _txParams);
    txParams.gasLimit = (0, util_1.toType)(txParams.gasLimit ?? txParams.gas, util_1.TypeOutput.BigInt);
    txParams.data = txParams.data === undefined ? txParams.input : txParams.data;
    // check and convert gasPrice and value params
    txParams.gasPrice = txParams.gasPrice !== undefined ? BigInt(txParams.gasPrice) : undefined;
    txParams.value = txParams.value !== undefined ? BigInt(txParams.value) : undefined;
    // strict byte length checking
    txParams.to = txParams.to !== null && txParams.to !== undefined ? (0, util_1.setLengthLeft)((0, util_1.toBuffer)(txParams.to), 20) : null;
    txParams.v = (0, util_1.toType)(txParams.v, util_1.TypeOutput.BigInt);
    return txParams;
};
exports.normalizeTxParams = normalizeTxParams;

},{"c69047c1f150d8c3":"2ctjb"}],"bhyIZ":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
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
exports.normalize = exports.concatSig = void 0;
__exportStar(require("96734d36661c0143"), exports);
__exportStar(require("7be5cc9dae73d928"), exports);
__exportStar(require("3b37debe523d571f"), exports);
var utils_1 = require("17c8f6a46f746a3d");
Object.defineProperty(exports, "concatSig", {
    enumerable: true,
    get: function() {
        return utils_1.concatSig;
    }
});
Object.defineProperty(exports, "normalize", {
    enumerable: true,
    get: function() {
        return utils_1.normalize;
    }
});

},{"96734d36661c0143":"8IuS7","7be5cc9dae73d928":"3gcOQ","3b37debe523d571f":"dF7D7","17c8f6a46f746a3d":"k3HiS"}],"8IuS7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractPublicKey = exports.recoverPersonalSignature = exports.personalSign = void 0;
const util_1 = require("8e762cece90c8bd9");
const utils_1 = require("7472fac25b9e77f0");
/**
 * Create an Ethereum-specific signature for a message.
 *
 * This function is equivalent to the `eth_sign` Ethereum JSON-RPC method as specified in EIP-1417,
 * as well as the MetaMask's `personal_sign` method.
 *
 * @param options - The personal sign options.
 * @param options.privateKey - The key to sign with.
 * @param options.data - The hex data to sign.
 * @returns The '0x'-prefixed hex encoded signature.
 */ function personalSign({ privateKey , data  }) {
    if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(privateKey)) throw new Error("Missing privateKey parameter");
    const message = (0, utils_1.legacyToBuffer)(data);
    const msgHash = (0, util_1.hashPersonalMessage)(message);
    const sig = (0, util_1.ecsign)(msgHash, privateKey);
    const serialized = (0, utils_1.concatSig)((0, util_1.toBuffer)(sig.v), sig.r, sig.s);
    return serialized;
}
exports.personalSign = personalSign;
/**
 * Recover the address of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The signature recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded address of the message signer.
 */ function recoverPersonalSignature({ data , signature  }) {
    if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(signature)) throw new Error("Missing signature parameter");
    const publicKey = getPublicKeyFor(data, signature);
    const sender = (0, util_1.publicToAddress)(publicKey);
    const senderHex = (0, util_1.bufferToHex)(sender);
    return senderHex;
}
exports.recoverPersonalSignature = recoverPersonalSignature;
/**
 * Recover the public key of the account used to create the given Ethereum signature. The message
 * must have been signed using the `personalSign` function, or an equivalent function.
 *
 * @param options - The public key recovery options.
 * @param options.data - The hex data that was signed.
 * @param options.signature - The '0x'-prefixed hex encoded message signature.
 * @returns The '0x'-prefixed hex encoded public key of the message signer.
 */ function extractPublicKey({ data , signature  }) {
    if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(signature)) throw new Error("Missing signature parameter");
    const publicKey = getPublicKeyFor(data, signature);
    return `0x${publicKey.toString("hex")}`;
}
exports.extractPublicKey = extractPublicKey;
/**
 * Get the public key for the given signature and message.
 *
 * @param message - The message that was signed.
 * @param signature - The '0x'-prefixed hex encoded message signature.
 * @returns The public key of the signer.
 */ function getPublicKeyFor(message, signature) {
    const messageHash = (0, util_1.hashPersonalMessage)((0, utils_1.legacyToBuffer)(message));
    return (0, utils_1.recoverPublicKey)(messageHash, signature);
}

},{"8e762cece90c8bd9":"2ctjb","7472fac25b9e77f0":"k3HiS"}],"k3HiS":[function(require,module,exports) {
var Buffer = require("6f0f0ac465379e95").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numberToBuffer = exports.normalize = exports.recoverPublicKey = exports.concatSig = exports.legacyToBuffer = exports.isNullish = exports.padWithZeroes = void 0;
const util_1 = require("79ed9cb3d8ecdbb5");
const ethjs_util_1 = require("4b4cd5e68d4287d0");
/**
 * Pads the front of the given hex string with zeroes until it reaches the
 * target length. If the input string is already longer than or equal to the
 * target length, it is returned unmodified.
 *
 * If the input string is "0x"-prefixed or not a hex string, an error will be
 * thrown.
 *
 * @param hexString - The hexadecimal string to pad with zeroes.
 * @param targetLength - The target length of the hexadecimal string.
 * @returns The input string front-padded with zeroes, or the original string
 * if it was already greater than or equal to to the target length.
 */ function padWithZeroes(hexString, targetLength) {
    if (hexString !== "" && !/^[a-f0-9]+$/iu.test(hexString)) throw new Error(`Expected an unprefixed hex string. Received: ${hexString}`);
    if (targetLength < 0) throw new Error(`Expected a non-negative integer target length. Received: ${targetLength}`);
    return String.prototype.padStart.call(hexString, targetLength, "0");
}
exports.padWithZeroes = padWithZeroes;
/**
 * Returns `true` if the given value is nullish.
 *
 * @param value - The value being checked.
 * @returns Whether the value is nullish.
 */ function isNullish(value) {
    return value === null || value === undefined;
}
exports.isNullish = isNullish;
/**
 * Convert a value to a Buffer. This function should be equivalent to the `toBuffer` function in
 * `ethereumjs-util@5.2.1`.
 *
 * @param value - The value to convert to a Buffer.
 * @returns The given value as a Buffer.
 */ function legacyToBuffer(value) {
    return typeof value === "string" && !(0, ethjs_util_1.isHexString)(value) ? Buffer.from(value) : (0, util_1.toBuffer)(value);
}
exports.legacyToBuffer = legacyToBuffer;
/**
 * Concatenate an extended ECDSA signature into a single '0x'-prefixed hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature as a '0x'-prefixed string.
 */ function concatSig(v, r, s) {
    const rSig = (0, util_1.fromSigned)(r);
    const sSig = (0, util_1.fromSigned)(s);
    const vSig = (0, util_1.bufferToInt)(v);
    const rStr = padWithZeroes((0, util_1.toUnsigned)(rSig).toString("hex"), 64);
    const sStr = padWithZeroes((0, util_1.toUnsigned)(sSig).toString("hex"), 64);
    const vStr = (0, ethjs_util_1.stripHexPrefix)((0, ethjs_util_1.intToHex)(vSig));
    return (0, util_1.addHexPrefix)(rStr.concat(sStr, vStr));
}
exports.concatSig = concatSig;
/**
 * Recover the public key from the given signature and message hash.
 *
 * @param messageHash - The hash of the signed message.
 * @param signature - The signature.
 * @returns The public key of the signer.
 */ function recoverPublicKey(messageHash, signature) {
    const sigParams = (0, util_1.fromRpcSig)(signature);
    return (0, util_1.ecrecover)(messageHash, sigParams.v, sigParams.r, sigParams.s);
}
exports.recoverPublicKey = recoverPublicKey;
/**
 * Normalize the input to a lower-cased '0x'-prefixed hex string.
 *
 * @param input - The value to normalize.
 * @returns The normalized value.
 */ function normalize(input) {
    if (!input) return undefined;
    if (typeof input === "number") {
        if (input < 0) return "0x";
        const buffer = (0, util_1.toBuffer)(input);
        input = (0, util_1.bufferToHex)(buffer);
    }
    if (typeof input !== "string") {
        let msg = "eth-sig-util.normalize() requires hex string or integer input.";
        msg += ` received ${typeof input}: ${input}`;
        throw new Error(msg);
    }
    return (0, util_1.addHexPrefix)(input.toLowerCase());
}
exports.normalize = normalize;
/**
 * Node's Buffer.from() method does not seem to buffer numbers correctly out of the box.
 * This helper method formats the number correct for Buffer.from to return correct buffer.
 *
 * @param num - The number to convert to buffer.
 * @returns The number in buffer form.
 */ function numberToBuffer(num) {
    const hexVal = num.toString(16);
    const prepend = hexVal.length % 2 ? "0" : "";
    return Buffer.from(prepend + hexVal, "hex");
}
exports.numberToBuffer = numberToBuffer;

},{"6f0f0ac465379e95":"fCgem","79ed9cb3d8ecdbb5":"2ctjb","4b4cd5e68d4287d0":"iVRAn"}],"iVRAn":[function(require,module,exports) {
var Buffer = require("a6345d504e7bb88c").Buffer;
"use strict";
var isHexPrefixed = require("198257ec5fdd8b51");
var stripHexPrefix = require("97fe8b7298df2d54");
/**
 * Pads a `String` to have an even length
 * @param {String} value
 * @return {String} output
 */ function padToEven(value) {
    var a = value; // eslint-disable-line
    if (typeof a !== "string") throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof a + ", while padToEven.");
    if (a.length % 2) a = "0" + a;
    return a;
}
/**
 * Converts a `Number` into a hex `String`
 * @param {Number} i
 * @return {String}
 */ function intToHex(i) {
    var hex = i.toString(16); // eslint-disable-line
    return "0x" + hex;
}
/**
 * Converts an `Number` to a `Buffer`
 * @param {Number} i
 * @return {Buffer}
 */ function intToBuffer(i) {
    var hex = intToHex(i);
    return new Buffer(padToEven(hex.slice(2)), "hex");
}
/**
 * Get the binary size of a string
 * @param {String} str
 * @return {Number}
 */ function getBinarySize(str) {
    if (typeof str !== "string") throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof str + "'.");
    return Buffer.byteLength(str, "utf8");
}
/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */ function arrayContainsArray(superset, subset, some) {
    if (Array.isArray(superset) !== true) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof superset + "'");
    if (Array.isArray(subset) !== true) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof subset + "'");
    return subset[Boolean(some) && "some" || "every"](function(value) {
        return superset.indexOf(value) >= 0;
    });
}
/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method toUtf8
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */ function toUtf8(hex) {
    var bufferValue = new Buffer(padToEven(stripHexPrefix(hex).replace(/^0+|0+$/g, "")), "hex");
    return bufferValue.toString("utf8");
}
/**
 * Should be called to get ascii from it's hex representation
 *
 * @method toAscii
 * @param {String} string in hex
 * @returns {String} ascii string representation of hex value
 */ function toAscii(hex) {
    var str = ""; // eslint-disable-line
    var i = 0, l = hex.length; // eslint-disable-line
    if (hex.substring(0, 2) === "0x") i = 2;
    for(; i < l; i += 2){
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
    }
    return str;
}
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method fromUtf8
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */ function fromUtf8(stringValue) {
    var str = new Buffer(stringValue, "utf8");
    return "0x" + padToEven(str.toString("hex")).replace(/^0+|0+$/g, "");
}
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method fromAscii
 * @param {String} string
 * @param {Number} optional padding
 * @returns {String} hex representation of input string
 */ function fromAscii(stringValue) {
    var hex = ""; // eslint-disable-line
    for(var i = 0; i < stringValue.length; i++){
        // eslint-disable-line
        var code = stringValue.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? "0" + n : n;
    }
    return "0x" + hex;
}
/**
 * getKeys([{a: 1, b: 2}, {a: 3, b: 4}], 'a') => [1, 3]
 *
 * @method getKeys get specific key from inner object array of objects
 * @param {String} params
 * @param {String} key
 * @param {Boolean} allowEmpty
 * @returns {Array} output just a simple array of output keys
 */ function getKeys(params, key, allowEmpty) {
    if (!Array.isArray(params)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof params + "'");
    if (typeof key !== "string") throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof key + "'.");
    var result = []; // eslint-disable-line
    for(var i = 0; i < params.length; i++){
        // eslint-disable-line
        var value = params[i][key]; // eslint-disable-line
        if (allowEmpty && !value) value = "";
        else if (typeof value !== "string") throw new Error("invalid abi");
        result.push(value);
    }
    return result;
}
/**
 * Is the string a hex string.
 *
 * @method check if string is hex string of specific length
 * @param {String} value
 * @param {Number} length
 * @returns {Boolean} output the string is a hex string
 */ function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
    if (length && value.length !== 2 + 2 * length) return false;
    return true;
}
module.exports = {
    arrayContainsArray: arrayContainsArray,
    intToBuffer: intToBuffer,
    getBinarySize: getBinarySize,
    isHexPrefixed: isHexPrefixed,
    stripHexPrefix: stripHexPrefix,
    padToEven: padToEven,
    intToHex: intToHex,
    fromAscii: fromAscii,
    fromUtf8: fromUtf8,
    toAscii: toAscii,
    toUtf8: toUtf8,
    getKeys: getKeys,
    isHexString: isHexString
};

},{"a6345d504e7bb88c":"fCgem","198257ec5fdd8b51":"1YjCl","97fe8b7298df2d54":"5tFR0"}],"1YjCl":[function(require,module,exports) {
/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param {String} str the string input value
 * @return {Boolean} a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */ module.exports = function isHexPrefixed(str) {
    if (typeof str !== "string") throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof str + ", while checking isHexPrefixed.");
    return str.slice(0, 2) === "0x";
};

},{}],"5tFR0":[function(require,module,exports) {
var isHexPrefixed = require("40aaf74235eccd61");
/**
 * Removes '0x' from a given `String` is present
 * @param {String} str the string value
 * @return {String|Optional} a string by pass if necessary
 */ module.exports = function stripHexPrefix(str) {
    if (typeof str !== "string") return str;
    return isHexPrefixed(str) ? str.slice(2) : str;
};

},{"40aaf74235eccd61":"1YjCl"}],"3gcOQ":[function(require,module,exports) {
var Buffer = require("a73ea370d40735ba").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recoverTypedSignature = exports.signTypedData = exports.typedSignatureHash = exports.TypedDataUtils = exports.TYPED_MESSAGE_SCHEMA = exports.SignTypedDataVersion = void 0;
const ethjs_util_1 = require("5a4c09a9d85547c8");
const util_1 = require("3197c916dc1efda4");
const keccak_1 = require("bfdecc3ddbc02986");
const ethereumjs_abi_utils_1 = require("880aaa11f6800b7c");
const utils_1 = require("2bc4443b4454b562");
/**
 * Represents the version of `signTypedData` being used.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on EIP-712, except that arrays and recursive data structures are not supported.
 *
 * V4 is based on EIP-712, and includes full support of arrays and recursive data structures.
 */ var SignTypedDataVersion;
(function(SignTypedDataVersion) {
    SignTypedDataVersion["V1"] = "V1";
    SignTypedDataVersion["V3"] = "V3";
    SignTypedDataVersion["V4"] = "V4";
})(SignTypedDataVersion = exports.SignTypedDataVersion || (exports.SignTypedDataVersion = {}));
exports.TYPED_MESSAGE_SCHEMA = {
    type: "object",
    properties: {
        types: {
            type: "object",
            additionalProperties: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        type: {
                            type: "string"
                        }
                    },
                    required: [
                        "name",
                        "type"
                    ]
                }
            }
        },
        primaryType: {
            type: "string"
        },
        domain: {
            type: "object"
        },
        message: {
            type: "object"
        }
    },
    required: [
        "types",
        "primaryType",
        "domain",
        "message"
    ]
};
/**
 * Validate that the given value is a valid version string.
 *
 * @param version - The version value to validate.
 * @param allowedVersions - A list of allowed versions. If omitted, all versions are assumed to be
 * allowed.
 */ function validateVersion(version, allowedVersions) {
    if (!Object.keys(SignTypedDataVersion).includes(version)) throw new Error(`Invalid version: '${version}'`);
    else if (allowedVersions && !allowedVersions.includes(version)) throw new Error(`SignTypedDataVersion not allowed: '${version}'. Allowed versions are: ${allowedVersions.join(", ")}`);
}
/**
 * Encode a single field.
 *
 * @param types - All type definitions.
 * @param name - The name of the field to encode.
 * @param type - The type of the field being encoded.
 * @param value - The value to encode.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns Encoded representation of the field.
 */ function encodeField(types, name, type, value, version) {
    validateVersion(version, [
        SignTypedDataVersion.V3,
        SignTypedDataVersion.V4
    ]);
    if (types[type] !== undefined) return [
        "bytes32",
        version === SignTypedDataVersion.V4 && value == null // eslint-disable-line no-eq-null
         ? "0x0000000000000000000000000000000000000000000000000000000000000000" : (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(encodeData(type, value, types, version)))
    ];
    if (value === undefined) throw new Error(`missing value for field ${name} of type ${type}`);
    if (type === "bytes") {
        if (typeof value === "number") value = (0, utils_1.numberToBuffer)(value);
        else if ((0, ethjs_util_1.isHexString)(value)) {
            const prepend = value.length % 2 ? "0" : "";
            value = Buffer.from(prepend + value.slice(2), "hex");
        } else value = Buffer.from(value, "utf8");
        return [
            "bytes32",
            (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(value))
        ];
    }
    if (type === "string") {
        if (typeof value === "number") value = (0, utils_1.numberToBuffer)(value);
        else value = Buffer.from(value !== null && value !== void 0 ? value : "", "utf8");
        return [
            "bytes32",
            (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(value))
        ];
    }
    if (type.lastIndexOf("]") === type.length - 1) {
        if (version === SignTypedDataVersion.V3) throw new Error("Arrays are unimplemented in encodeData; use V4 extension");
        const parsedType = type.slice(0, type.lastIndexOf("["));
        const typeValuePairs = value.map((item)=>encodeField(types, name, parsedType, item, version));
        return [
            "bytes32",
            (0, util_1.arrToBufArr)((0, keccak_1.keccak256)((0, ethereumjs_abi_utils_1.rawEncode)(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v))))
        ];
    }
    return [
        type,
        value
    ];
}
/**
 * Encodes an object by encoding and concatenating each of its members.
 *
 * @param primaryType - The root type.
 * @param data - The object to encode.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns An encoded representation of an object.
 */ function encodeData(primaryType, data, types, version) {
    validateVersion(version, [
        SignTypedDataVersion.V3,
        SignTypedDataVersion.V4
    ]);
    const encodedTypes = [
        "bytes32"
    ];
    const encodedValues = [
        hashType(primaryType, types)
    ];
    for (const field of types[primaryType]){
        if (version === SignTypedDataVersion.V3 && data[field.name] === undefined) continue;
        const [type, value] = encodeField(types, field.name, field.type, data[field.name], version);
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, ethereumjs_abi_utils_1.rawEncode)(encodedTypes, encodedValues);
}
/**
 * Encodes the type of an object by encoding a comma delimited list of its members.
 *
 * @param primaryType - The root type to encode.
 * @param types - Type definitions for all types included in the message.
 * @returns An encoded representation of the primary type.
 */ function encodeType(primaryType, types) {
    let result = "";
    const unsortedDeps = findTypeDependencies(primaryType, types);
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        const children = types[type];
        if (!children) throw new Error(`No type definition specified: ${type}`);
        result += `${type}(${types[type].map(({ name , type: t  })=>`${t} ${name}`).join(",")})`;
    }
    return result;
}
/**
 * Finds all types within a type definition object.
 *
 * @param primaryType - The root type.
 * @param types - Type definitions for all types included in the message.
 * @param results - The current set of accumulated types.
 * @returns The set of all types found in the type definition.
 */ function findTypeDependencies(primaryType, types, results = new Set()) {
    [primaryType] = primaryType.match(/^\w*/u);
    if (results.has(primaryType) || types[primaryType] === undefined) return results;
    results.add(primaryType);
    for (const field of types[primaryType])findTypeDependencies(field.type, types, results);
    return results;
}
/**
 * Hashes an object.
 *
 * @param primaryType - The root type.
 * @param data - The object to hash.
 * @param types - Type definitions for all types included in the message.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the object.
 */ function hashStruct(primaryType, data, types, version) {
    validateVersion(version, [
        SignTypedDataVersion.V3,
        SignTypedDataVersion.V4
    ]);
    return (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(encodeData(primaryType, data, types, version)));
}
/**
 * Hashes the type of an object.
 *
 * @param primaryType - The root type to hash.
 * @param types - Type definitions for all types included in the message.
 * @returns The hash of the object type.
 */ function hashType(primaryType, types) {
    const encodedHashType = Buffer.from(encodeType(primaryType, types), "utf-8");
    return (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(encodedHashType));
}
/**
 * Removes properties from a message object that are not defined per EIP-712.
 *
 * @param data - The typed message object.
 * @returns The typed message object with only allowed fields.
 */ function sanitizeData(data) {
    const sanitizedData = {};
    for(const key in exports.TYPED_MESSAGE_SCHEMA.properties)if (data[key]) sanitizedData[key] = data[key];
    if ("types" in sanitizedData) sanitizedData.types = Object.assign({
        EIP712Domain: []
    }, sanitizedData.types);
    return sanitizedData;
}
/**
 * Hash a typed message according to EIP-712. The returned message starts with the EIP-712 prefix,
 * which is "1901", followed by the hash of the domain separator, then the data (if any).
 * The result is hashed again and returned.
 *
 * This function does not sign the message. The resulting hash must still be signed to create an
 * EIP-712 signature.
 *
 * @param typedData - The typed message to hash.
 * @param version - The EIP-712 version the encoding should comply with.
 * @returns The hash of the typed message.
 */ function eip712Hash(typedData, version) {
    validateVersion(version, [
        SignTypedDataVersion.V3,
        SignTypedDataVersion.V4
    ]);
    const sanitizedData = sanitizeData(typedData);
    const parts = [
        Buffer.from("1901", "hex")
    ];
    parts.push(hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, version));
    if (sanitizedData.primaryType !== "EIP712Domain") parts.push(hashStruct(// TODO: Validate that this is a string, so this type cast can be removed.
    sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, version));
    return (0, util_1.arrToBufArr)((0, keccak_1.keccak256)(Buffer.concat(parts)));
}
/**
 * A collection of utility functions used for signing typed data.
 */ exports.TypedDataUtils = {
    encodeData,
    encodeType,
    findTypeDependencies,
    hashStruct,
    hashType,
    sanitizeData,
    eip712Hash
};
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The '0x'-prefixed hex encoded hash representing the type of the provided message.
 */ function typedSignatureHash(typedData) {
    const hashBuffer = _typedSignatureHash(typedData);
    return (0, util_1.bufferToHex)(hashBuffer);
}
exports.typedSignatureHash = typedSignatureHash;
/**
 * Generate the "V1" hash for the provided typed message.
 *
 * The hash will be generated in accordance with an earlier version of the EIP-712
 * specification. This hash is used in `signTypedData_v1`.
 *
 * @param typedData - The typed message.
 * @returns The hash representing the type of the provided message.
 */ function _typedSignatureHash(typedData) {
    const error = new Error("Expect argument to be non-empty array");
    if (typeof typedData !== "object" || !("length" in typedData) || !typedData.length) throw error;
    const data = typedData.map(function(e) {
        if (e.type !== "bytes") return e.value;
        return (0, utils_1.legacyToBuffer)(e.value);
    });
    const types = typedData.map(function(e) {
        return e.type;
    });
    const schema = typedData.map(function(e) {
        if (!e.name) throw error;
        return `${e.type} ${e.name}`;
    });
    return (0, util_1.arrToBufArr)((0, keccak_1.keccak256)((0, ethereumjs_abi_utils_1.solidityPack)([
        "bytes32",
        "bytes32"
    ], [
        (0, keccak_1.keccak256)((0, ethereumjs_abi_utils_1.solidityPack)(new Array(typedData.length).fill("string"), schema)),
        (0, keccak_1.keccak256)((0, ethereumjs_abi_utils_1.solidityPack)(types, data))
    ])));
}
/**
 * Sign typed data according to EIP-712. The signing differs based upon the `version`.
 *
 * V1 is based upon [an early version of EIP-712](https://github.com/ethereum/EIPs/pull/712/commits/21abe254fe0452d8583d5b132b1d7be87c0439ca)
 * that lacked some later security improvements, and should generally be neglected in favor of
 * later versions.
 *
 * V3 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), except that arrays and
 * recursive data structures are not supported.
 *
 * V4 is based on [EIP-712](https://eips.ethereum.org/EIPS/eip-712), and includes full support of
 * arrays and recursive data structures.
 *
 * @param options - The signing options.
 * @param options.privateKey - The private key to sign with.
 * @param options.data - The typed data to sign.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex encoded signature.
 */ function signTypedData({ privateKey , data , version  }) {
    validateVersion(version);
    if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(privateKey)) throw new Error("Missing private key parameter");
    const messageHash = version === SignTypedDataVersion.V1 ? _typedSignatureHash(data) : exports.TypedDataUtils.eip712Hash(data, version);
    const sig = (0, util_1.ecsign)(messageHash, privateKey);
    return (0, utils_1.concatSig)((0, util_1.toBuffer)(sig.v), sig.r, sig.s);
}
exports.signTypedData = signTypedData;
/**
 * Recover the address of the account that created the given EIP-712
 * signature. The version provided must match the version used to
 * create the signature.
 *
 * @param options - The signature recovery options.
 * @param options.data - The typed data that was signed.
 * @param options.signature - The '0x-prefixed hex encoded message signature.
 * @param options.version - The signing version to use.
 * @returns The '0x'-prefixed hex address of the signer.
 */ function recoverTypedSignature({ data , signature , version  }) {
    validateVersion(version);
    if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(signature)) throw new Error("Missing signature parameter");
    const messageHash = version === SignTypedDataVersion.V1 ? _typedSignatureHash(data) : exports.TypedDataUtils.eip712Hash(data, version);
    const publicKey = (0, utils_1.recoverPublicKey)(messageHash, signature);
    const sender = (0, util_1.publicToAddress)(publicKey);
    return (0, util_1.bufferToHex)(sender);
}
exports.recoverTypedSignature = recoverTypedSignature;

},{"a73ea370d40735ba":"fCgem","5a4c09a9d85547c8":"iVRAn","3197c916dc1efda4":"2ctjb","bfdecc3ddbc02986":"k4pOe","880aaa11f6800b7c":"fxLpQ","2bc4443b4454b562":"k3HiS"}],"k4pOe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keccak512 = exports.keccak384 = exports.keccak256 = exports.keccak224 = void 0;
const sha3_1 = require("54150d6a2b68c6ef");
const utils_1 = require("9b35767a24a7efbe");
exports.keccak224 = (0, utils_1.wrapHash)(sha3_1.keccak_224);
exports.keccak256 = (()=>{
    const k = (0, utils_1.wrapHash)(sha3_1.keccak_256);
    k.create = sha3_1.keccak_256.create;
    return k;
})();
exports.keccak384 = (0, utils_1.wrapHash)(sha3_1.keccak_384);
exports.keccak512 = (0, utils_1.wrapHash)(sha3_1.keccak_512);

},{"54150d6a2b68c6ef":"7YJSg","9b35767a24a7efbe":"8y6tF"}],"8y6tF":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = exports.wrapHash = exports.equalsBytes = exports.hexToBytes = exports.bytesToUtf8 = exports.utf8ToBytes = exports.createView = exports.concatBytes = exports.toHex = exports.bytesToHex = exports.assertBytes = exports.assertBool = void 0;
// buf.toString('hex') -> toHex(buf)
const _assert_1 = __importDefault(require("fa180f5914f192a9"));
const utils_1 = require("442d3c8c9a4d491c");
const assertBool = _assert_1.default.bool;
exports.assertBool = assertBool;
const assertBytes = _assert_1.default.bytes;
exports.assertBytes = assertBytes;
var utils_2 = require("442d3c8c9a4d491c");
Object.defineProperty(exports, "bytesToHex", {
    enumerable: true,
    get: function() {
        return utils_2.bytesToHex;
    }
});
Object.defineProperty(exports, "toHex", {
    enumerable: true,
    get: function() {
        return utils_2.bytesToHex;
    }
});
Object.defineProperty(exports, "concatBytes", {
    enumerable: true,
    get: function() {
        return utils_2.concatBytes;
    }
});
Object.defineProperty(exports, "createView", {
    enumerable: true,
    get: function() {
        return utils_2.createView;
    }
});
Object.defineProperty(exports, "utf8ToBytes", {
    enumerable: true,
    get: function() {
        return utils_2.utf8ToBytes;
    }
});
// buf.toString('utf8') -> bytesToUtf8(buf)
function bytesToUtf8(data) {
    if (!(data instanceof Uint8Array)) throw new TypeError(`bytesToUtf8 expected Uint8Array, got ${typeof data}`);
    return new TextDecoder().decode(data);
}
exports.bytesToUtf8 = bytesToUtf8;
function hexToBytes(data) {
    const sliced = data.startsWith("0x") ? data.substring(2) : data;
    return (0, utils_1.hexToBytes)(sliced);
}
exports.hexToBytes = hexToBytes;
// buf.equals(buf2) -> equalsBytes(buf, buf2)
function equalsBytes(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
exports.equalsBytes = equalsBytes;
// Internal utils
function wrapHash(hash) {
    return (msg)=>{
        _assert_1.default.bytes(msg);
        return hash(msg);
    };
}
exports.wrapHash = wrapHash;
exports.crypto = (()=>{
    const webCrypto = typeof self === "object" && "crypto" in self ? self.crypto : undefined;
    const nodeRequire = typeof module.require === "function" && module.require.bind(module);
    return {
        node: nodeRequire && !webCrypto ? nodeRequire("crypto") : undefined,
        web: webCrypto
    };
})();

},{"fa180f5914f192a9":"BFdql","442d3c8c9a4d491c":"2ehgp"}],"fxLpQ":[function(require,module,exports) {
var Buffer = require("caa312e2831bf9f3").Buffer;
"use strict";
/* eslint jsdoc/require-description: 0 */ /* eslint jsdoc/require-returns: 0 */ /* eslint jsdoc/match-description: 0 */ /* eslint jsdoc/require-param-description: 0 */ var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rawEncode = exports.parseNumber = exports.solidityPack = void 0;
const util_1 = require("681a592f13e9cda1");
const ethjs_util_1 = require("e90bec1f8a2fe9a3");
const bn_js_1 = __importDefault(require("fe43d410ee3e93be"));
const utils_1 = require("c51295c265d236c9");
//
// Methods borrowed and somewhat adapted from ethereumjs-abi@0.6.8:
// https://npmfs.com/package/ethereumjs-abi/0.6.8/lib/index.js
//
/**
 * Packs non-standard encoded values packed according to their respective type in types in a buffer.
 *
 * @param types - Array of types of each value to encode.
 * @param values - Array of values to encode.
 * @returns A buffer containing the packed values.
 */ function solidityPack(types, values) {
    if (types.length !== values.length) throw new Error("Number of types are not matching the values");
    const ret = [];
    for(let i = 0; i < types.length; i++){
        const type = elementaryName(types[i]);
        const value = values[i];
        ret.push(solidityHexValue(type, value, null));
    }
    return Buffer.concat(ret);
}
exports.solidityPack = solidityPack;
/**
 * Checks if a value is an array (represented as a string).
 *
 * @param type - The value to check whether it is an array.
 * @returns A boolean indicating whether the passed value is an array.
 */ function isArray(type) {
    return type.lastIndexOf("]") === type.length - 1;
}
/**
 * Parse array type for packing solidity values.
 *
 * @param type - A string that may be an array to parse.
 * @returns A parsed value from the array.
 */ function parseTypeArray(type) {
    const tmp = type.match(/(.*)\[(.*?)\]$/u);
    if (tmp) return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
    return null;
}
/**
 * Parse N from type<N>.
 *
 * @param type - Value to parse.
 * @returns Parsed value.
 */ function parseTypeN(type) {
    return parseInt(/^\D+(\d+)$/u.exec(type)[1], 10);
}
/**
 * Parse a number for determining a solidity hexvalue.
 *
 * @param arg - Number to parse.
 * @returns Parsed value.
 */ function parseNumber(arg) {
    const type = typeof arg;
    if (type === "string") {
        if ((0, util_1.isHexPrefixed)(arg)) return new bn_js_1.default((0, ethjs_util_1.stripHexPrefix)(arg), 16);
        return new bn_js_1.default(arg, 10);
    } else if (type === "number") return new bn_js_1.default(arg);
    else if (arg.toArray) // assume this is a BN for the moment, replace with BN.isBN soon
    return arg;
    throw new Error("Argument is not a number");
}
exports.parseNumber = parseNumber;
/**
 * Get solidity hex value from type, value and bitsize inputs for packing these values in a buffer.
 *
 * @param type - The type of the value to encode.
 * @param value - The value to encode.
 * @param bitsize - The bitsize of the value to encode.
 * @returns The encoded soldity hex value.
 */ function solidityHexValue(type, value, bitsize) {
    // pass in bitsize = null if use default bitsize
    let size, num;
    if (isArray(type)) {
        const subType = type.replace(/\[.*?\]/u, "");
        if (!isArray(subType)) {
            const arraySize = parseTypeArray(type);
            if (arraySize !== "dynamic" && arraySize !== 0 && value.length > arraySize) throw new Error(`Elements exceed array size: ${arraySize}`);
        }
        const arrayValues = value.map(function(v) {
            return solidityHexValue(subType, v, 256);
        });
        return Buffer.concat(arrayValues);
    } else if (type === "bytes") return value;
    else if (type === "string") return Buffer.from(value, "utf8");
    else if (type === "bool") {
        bitsize = bitsize || 8;
        const padding = Array(bitsize / 4).join("0");
        return Buffer.from(value ? `${padding}1` : `${padding}0`, "hex");
    } else if (type === "address") {
        let bytesize = 20;
        if (bitsize) bytesize = bitsize / 8;
        return (0, util_1.setLengthLeft)((0, util_1.toBuffer)(value), bytesize);
    } else if (type.startsWith("bytes")) {
        size = parseTypeN(type);
        if (size < 1 || size > 32) throw new Error(`Invalid bytes<N> width: ${size}`);
        if (typeof value === "number") value = (0, utils_1.normalize)(value);
        return (0, util_1.setLengthRight)((0, util_1.toBuffer)(value), size);
    } else if (type.startsWith("uint")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error(`Invalid uint<N> width: ${size}`);
        num = parseNumber(value);
        if (num.bitLength() > size) throw new Error(`Supplied uint exceeds width: ${size} vs ${num.bitLength()}`);
        bitsize = bitsize || size;
        return num.toArrayLike(Buffer, "be", bitsize / 8);
    } else if (type.startsWith("int")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error(`Invalid int<N> width: ${size}`);
        num = parseNumber(value);
        if (num.bitLength() > size) throw new Error(`Supplied int exceeds width: ${size} vs ${num.bitLength()}`);
        bitsize = bitsize || size;
        return num.toTwos(size).toArrayLike(Buffer, "be", bitsize / 8);
    }
    // FIXME: support all other types
    throw new Error(`Unsupported or invalid type: ${type}`);
}
/**
 * Gets the correct solidity type name.
 *
 * @param name - The type name for which we want the corresponding solidity type name.
 * @returns The solidity type name for the input value.
 */ function elementaryName(name) {
    if (name.startsWith("int[")) return `int256${name.slice(3)}`;
    else if (name === "int") return "int256";
    else if (name.startsWith("uint[")) return `uint256${name.slice(4)}`;
    else if (name === "uint") return "uint256";
    else if (name.startsWith("fixed[")) return `fixed128x128${name.slice(5)}`;
    else if (name === "fixed") return "fixed128x128";
    else if (name.startsWith("ufixed[")) return `ufixed128x128${name.slice(6)}`;
    else if (name === "ufixed") return "ufixed128x128";
    return name;
}
/**
 * @param types
 * @param values
 */ function rawEncode(types, values) {
    const output = [];
    const data = [];
    let headLength = 0;
    types.forEach(function(type) {
        if (isArray(type)) {
            const size = parseTypeArray(type);
            // eslint-disable-next-line no-negated-condition
            if (size !== "dynamic") headLength += 32 * size;
            else headLength += 32;
        } else headLength += 32;
    });
    for(let i = 0; i < types.length; i++){
        const type = elementaryName(types[i]);
        const value = values[i];
        const cur = encodeSingle(type, value);
        // Use the head/tail method for storing dynamic data
        if (isDynamic(type)) {
            output.push(encodeSingle("uint256", headLength));
            data.push(cur);
            headLength += cur.length;
        } else output.push(cur);
    }
    return Buffer.concat(output.concat(data));
}
exports.rawEncode = rawEncode;
// Encodes a single item (can be dynamic array)
// @returns: Buffer
/**
 * @param type
 * @param arg
 */ function encodeSingle(type, arg) {
    let size, num, ret, i;
    if (type === "address") return encodeSingle("uint160", parseNumber(arg));
    else if (type === "bool") return encodeSingle("uint8", arg ? 1 : 0);
    else if (type === "string") return encodeSingle("bytes", Buffer.from(arg, "utf8"));
    else if (isArray(type)) {
        // this part handles fixed-length ([2]) and variable length ([]) arrays
        // NOTE: we catch here all calls to arrays, that simplifies the rest
        if (typeof arg.length === "undefined") throw new Error("Not an array?");
        size = parseTypeArray(type);
        if (size !== "dynamic" && size !== 0 && arg.length > size) throw new Error(`Elements exceed array size: ${size}`);
        ret = [];
        type = type.slice(0, type.lastIndexOf("["));
        if (typeof arg === "string") arg = JSON.parse(arg);
        for(i in arg)if (Object.prototype.hasOwnProperty.call(arg, i)) ret.push(encodeSingle(type, arg[i]));
        if (size === "dynamic") {
            const length = encodeSingle("uint256", arg.length);
            ret.unshift(length);
        }
        return Buffer.concat(ret);
    } else if (type === "bytes") {
        arg = Buffer.from(arg);
        ret = Buffer.concat([
            encodeSingle("uint256", arg.length),
            arg
        ]);
        if (arg.length % 32 !== 0) ret = Buffer.concat([
            ret,
            (0, util_1.zeros)(32 - arg.length % 32)
        ]);
        return ret;
    } else if (type.startsWith("bytes")) {
        size = parseTypeN(type);
        if (size < 1 || size > 32) throw new Error(`Invalid bytes<N> width: ${size}`);
        if (typeof arg === "number") arg = (0, utils_1.normalize)(arg);
        return (0, util_1.setLengthRight)((0, util_1.toBuffer)(arg), 32);
    } else if (type.startsWith("uint")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error(`Invalid uint<N> width: ${size}`);
        num = parseNumber(arg);
        if (num.bitLength() > size) throw new Error(`Supplied uint exceeds width: ${size} vs ${num.bitLength()}`);
        if (num < 0) throw new Error("Supplied uint is negative");
        return num.toArrayLike(Buffer, "be", 32);
    } else if (type.startsWith("int")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error(`Invalid int<N> width: ${size}`);
        num = parseNumber(arg);
        if (num.bitLength() > size) throw new Error(`Supplied int exceeds width: ${size} vs ${num.bitLength()}`);
        return num.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (type.startsWith("ufixed")) {
        size = parseTypeNxM(type);
        num = parseNumber(arg);
        if (num < 0) throw new Error("Supplied ufixed is negative");
        return encodeSingle("uint256", num.mul(new bn_js_1.default(2).pow(new bn_js_1.default(size[1]))));
    } else if (type.startsWith("fixed")) {
        size = parseTypeNxM(type);
        return encodeSingle("int256", parseNumber(arg).mul(new bn_js_1.default(2).pow(new bn_js_1.default(size[1]))));
    }
    throw new Error(`Unsupported or invalid type: ${type}`);
}
// Is a type dynamic?
/**
 * @param type
 */ function isDynamic(type) {
    // FIXME: handle all types? I don't think anything is missing now
    return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
}
// Parse N,M from type<N>x<M>
/**
 * @param type
 */ function parseTypeNxM(type) {
    const tmp = /^\D+(\d+)x(\d+)$/u.exec(type);
    return [
        parseInt(tmp[1], 10),
        parseInt(tmp[2], 10)
    ];
}

},{"caa312e2831bf9f3":"fCgem","681a592f13e9cda1":"2ctjb","e90bec1f8a2fe9a3":"iVRAn","fe43d410ee3e93be":"kiBCt","c51295c265d236c9":"k3HiS"}],"kiBCt":[function(require,module,exports) {
(function(module1, exports) {
    "use strict";
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || "Assertion failed");
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) return number;
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === "le" || base === "be") {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || "be");
        }
    }
    if (typeof module1 === "object") module1.exports = BN;
    else exports.BN = BN;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") Buffer = window.Buffer;
        else Buffer = require("a56bc31501f9e3c2").Buffer;
    } catch (e) {}
    BN.isBN = function isBN(num) {
        if (num instanceof BN) return true;
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === "number") return this._initNumber(number, base, endian);
        if (typeof number === "object") return this._initArray(number, base, endian);
        if (base === "hex") base = 16;
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
            start++;
            this.negative = 1;
        }
        if (start < number.length) {
            if (base === 16) this._parseHex(number, start, endian);
            else {
                this._parseBase(number, base, start);
                if (endian === "le") this._initArray(this.toArray(), base, endian);
            }
        }
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 0x4000000) {
            this.words = [
                number & 0x3ffffff
            ];
            this.length = 1;
        } else if (number < 0x10000000000000) {
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff
            ];
            this.length = 2;
        } else {
            assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff,
                1
            ];
            this.length = 3;
        }
        if (endian !== "le") return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === "number");
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        var off = 0;
        if (endian === "be") for(i = number.length - 1, j = 0; i >= 0; i -= 3){
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        else if (endian === "le") for(i = 0, j = 0; i < number.length; i += 3){
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        return this.strip();
    };
    function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        // 'A' - 'F'
        if (c >= 65 && c <= 70) return c - 55;
        else if (c >= 97 && c <= 102) return c - 87;
        else return c - 48 & 0xf;
    }
    function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) r |= parseHex4Bits(string, index - 1) << 4;
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start, endian) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        // 24-bits chunks
        var off = 0;
        var j = 0;
        var w;
        if (endian === "be") for(i = number.length - 1; i >= start; i -= 2){
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 0x3ffffff;
            if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
            } else off += 8;
        }
        else {
            var parseLength = number.length - start;
            for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 0x3ffffff;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else off += 8;
            }
        }
        this.strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) r += c - 49 + 0xa;
            else if (c >= 17) r += c - 17 + 0xa;
            else r += c;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base)limbLen++;
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 0x4000000) this.words[0] += word;
            else this._iaddn(word);
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++)pow *= base;
            this.imuln(pow);
            if (this.words[0] + word < 0x4000000) this.words[0] += word;
            else this._iaddn(word);
        }
        this.strip();
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)dest.words[i] = this.words[i];
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size)this.words[this.length++] = 0;
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype.strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0)this.length--;
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) this.negative = 0;
        return this;
    };
    BN.prototype.inspect = function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
            out = "";
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 0xffffff).toString(16);
                carry = w >>> 24 - off & 0xffffff;
                if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out;
                else out = word + out;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) out = carry.toString(16) + out;
            while(out.length % padding !== 0)out = "0" + out;
            if (this.negative !== 0) out = "-" + out;
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = "";
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) out = zeros[groupSize - r.length] + r + out;
                else out = r + out;
            }
            if (this.isZero()) out = "0" + out;
            while(out.length % padding !== 0)out = "0" + out;
            if (this.negative !== 0) out = "-" + out;
            return out;
        }
        assert(false, "Base should be between 2 and 36");
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) ret += this.words[1] * 0x4000000;
        else if (this.length === 3 && this.words[2] === 0x01) // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
        else if (this.length > 2) assert(false, "Number can only safely store up to 53 bits");
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16);
    };
    BN.prototype.toBuffer = function toBuffer(endian, length) {
        assert(typeof Buffer !== "undefined");
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, "byte array longer than desired length");
        assert(reqLength > 0, "Requested array length <= 0");
        this.strip();
        var littleEndian = endian === "le";
        var res = new ArrayType(reqLength);
        var b, i;
        var q = this.clone();
        if (!littleEndian) {
            // Assume big-endian
            for(i = 0; i < reqLength - byteLength; i++)res[i] = 0;
            for(i = 0; !q.isZero(); i++){
                b = q.andln(0xff);
                q.iushrn(8);
                res[reqLength - i - 1] = b;
            }
        } else {
            for(i = 0; !q.isZero(); i++){
                b = q.andln(0xff);
                q.iushrn(8);
                res[i] = b;
            }
            for(; i < reqLength; i++)res[i] = 0;
        }
        return res;
    };
    if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
    };
    else BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 0x1000) {
            r += 13;
            t >>>= 13;
        }
        if (t >= 0x40) {
            r += 7;
            t >>>= 7;
        }
        if (t >= 0x8) {
            r += 4;
            t >>>= 4;
        }
        if (t >= 0x02) {
            r += 2;
            t >>>= 2;
        }
        return r + t;
    };
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 0x1fff) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 0x7f) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 0xf) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 0x3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 0x1) === 0) r++;
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) this.negative ^= 1;
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length)this.words[this.length++] = 0;
        for(var i = 0; i < num.length; i++)this.words[i] = this.words[i] | num.words[i];
        return this.strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) b = num;
        else b = this;
        for(var i = 0; i < b.length; i++)this.words[i] = this.words[i] & num.words[i];
        this.length = b.length;
        return this.strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++)this.words[i] = a.words[i] ^ b.words[i];
        if (this !== a) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = a.length;
        return this.strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) bytesNeeded--;
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++)this.words[i] = ~this.words[i] & 0x3ffffff;
        // Handle the residue
        if (bitsLeft > 0) this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        // And remove leading zeroes
        return this.strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) this.words[off] = this.words[off] | 1 << wbit;
        else this.words[off] = this.words[off] & ~(1 << wbit);
        return this.strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = Math.max(this.length, i);
        if (a !== this) this.negative = 1;
        return this.strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 0x4000000 | 0;
                rword = r & 0x3ffffff;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) out.words[k] = carry | 0;
        else out.length--;
        return out.strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) comb10MulTo = smallMulTo;
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 0x3ffffff;
                ncarry = ncarry + (r / 0x4000000 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 0x3ffffff;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 0x3ffffff;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) out.words[k] = carry;
        else out.length--;
        return out.strip();
    }
    function jumboMulTo(self, num, out) {
        var fftm = new FFTM();
        return fftm.mulp(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out);
        else if (len < 63) res = smallMulTo(this, num, out);
        else if (len < 1024) res = bigMulTo(this, num, out);
        else res = jumboMulTo(this, num, out);
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++)t[i] = this.revBin(i, l, N);
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1)i++;
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 0x3ffffff;
            if (w < 0x4000000) carry = 0;
            else carry = w / 0x4000000 | 0;
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 0x1fff;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 0x1fff;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i)rws[i] = 0;
        assert(carry === 0);
        assert((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++)ph[i] = 0;
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out.strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        assert(typeof num === "number");
        assert(num < 0x4000000);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
            carry >>= 26;
            carry += w / 0x4000000 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 0x3ffffff;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
            if (w[i] === 0) continue;
            res = res.mul(q);
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--)this.words[i + s] = this.words[i];
            for(i = 0; i < s; i++)this.words[i] = 0;
            this.length += s;
        }
        return this.strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === "number" && bits >= 0);
        var h;
        if (hint) h = (hint - hint % 26) / 26;
        else h = 0;
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++)maskedWords.words[i] = this.words[i];
            maskedWords.length = s;
        }
        if (s === 0) ;
        else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++)this.words[i] = this.words[i + s];
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this.strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) return this;
        if (r !== 0) s++;
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this.strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === "number");
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) < num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 0x4000000; i++){
            this.words[i] -= 0x4000000;
            if (i === this.length - 1) this.words[i + 1] = 1;
            else this.words[i + 1]++;
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === "number");
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else // Carry
        for(var i = 0; i < this.length && this.words[i] < 0; i++){
            this.words[i] += 0x4000000;
            this.words[i + 1] -= 1;
        }
        return this.strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 0x3ffffff;
            carry = (w >> 26) - (right / 0x4000000 | 0);
            this.words[i + shift] = w & 0x3ffffff;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 0x3ffffff;
        }
        if (carry === 0) return this.strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 0x3ffffff;
        }
        this.negative = 1;
        return this.strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== "mod") {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++)q.words[i] = 0;
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) q.words[m] = 1;
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 0x3ffffff);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) a.negative ^= 1;
            }
            if (q) q.words[j] = qj;
        }
        if (q) q.strip();
        a.strip();
        // Denormalize
        if (mode !== "div" && shift !== 0) a.iushrn(shift);
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) return {
            div: new BN(0),
            mod: new BN(0)
        };
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== "mod") div = res.div.neg();
            if (mode !== "div") {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.iadd(num);
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== "mod") div = res.div.neg();
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== "div") {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.isub(num);
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) return {
            div: new BN(0),
            mod: this
        };
        // Very short reduction
        if (num.length === 1) {
            if (mode === "div") return {
                div: this.divn(num.words[0]),
                mod: null
            };
            if (mode === "mod") return {
                div: null,
                mod: new BN(this.modn(num.words[0]))
            };
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modn = function modn(num) {
        assert(num <= 0x3ffffff);
        var p = 67108864 % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--)acc = (p * acc + (this.words[i] | 0)) % num;
        return acc;
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        assert(num <= 0x3ffffff);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 0x4000000;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        return this.strip();
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) x = x.umod(p);
        else x = x.clone();
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) a = a.umod(p);
        else a = a.clone();
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) x1.iadd(delta);
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) x2.iadd(delta);
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) res = x1;
        else res = x2;
        if (res.cmpn(0) < 0) res.iadd(p);
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven())a.iushrn(1);
            while(b.isEven())b.iushrn(1);
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) break;
            a.isub(b);
        }while (true);
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 0x3ffffff;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this.strip();
        var res;
        if (this.length > 1) res = 1;
        else {
            if (negative) num = -num;
            assert(num <= 0x3ffffff, "Number is too big");
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) res = -1;
            else if (a > b) res = 1;
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        assert(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) r.isub(this.p);
        else if (r.strip !== undefined) // r is BN v4 instance
        r.strip();
        else // r is BN v5 instance
        r._strip();
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++)output.words[i] = input.words[i];
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) input.length -= 10;
        else input.length -= 9;
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 0x3d1;
            num.words[i] = lo & 0x3ffffff;
            lo = w * 0x40 + (lo / 0x4000000 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) num.length--;
        }
        return num;
    };
    function P224() {
        MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 0x13 + carry;
            var lo = hi & 0x3ffffff;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) num.words[num.length++] = carry;
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === "k256") prime = new K256();
        else if (name === "p224") prime = new P224();
        else if (name === "p192") prime = new P192();
        else if (name === "p25519") prime = new P25519();
        else throw new Error("Unknown prime " + name);
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === "string") {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), "modulus must be greater than 1");
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, "red works only with positives");
        assert(a.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, "red works only with positives");
        assert(a.red && a.red === b.red, "red works only with red numbers");
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) return a.clone();
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0)z.redIAdd(nOne);
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++)tmp = tmp.redSqr();
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else return this.imod(inv);
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++)wnd[i] = this.mul(wnd[i - 1], a);
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) start = 26;
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) res = this.sqr(res);
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(module, this);

},{"a56bc31501f9e3c2":"jhUEF"}],"dF7D7":[function(require,module,exports) {
var Buffer = require("9e7d95febb78571d").Buffer;
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEncryptionPublicKey = exports.decryptSafely = exports.decrypt = exports.encryptSafely = exports.encrypt = void 0;
const nacl = __importStar(require("78567b4b5f0d870"));
const naclUtil = __importStar(require("ab573d741f70d1cb"));
const utils_1 = require("213ab001f298c987");
/**
 * Encrypt a message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */ function encrypt({ publicKey , data , version  }) {
    if ((0, utils_1.isNullish)(publicKey)) throw new Error("Missing publicKey parameter");
    else if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(version)) throw new Error("Missing version parameter");
    switch(version){
        case "x25519-xsalsa20-poly1305":
            {
                if (typeof data !== "string") throw new Error("Message data must be given as a string");
                // generate ephemeral keypair
                const ephemeralKeyPair = nacl.box.keyPair();
                // assemble encryption parameters - from string to UInt8
                let pubKeyUInt8Array;
                try {
                    pubKeyUInt8Array = naclUtil.decodeBase64(publicKey);
                } catch (err) {
                    throw new Error("Bad public key");
                }
                const msgParamsUInt8Array = naclUtil.decodeUTF8(data);
                const nonce = nacl.randomBytes(nacl.box.nonceLength);
                // encrypt
                const encryptedMessage = nacl.box(msgParamsUInt8Array, nonce, pubKeyUInt8Array, ephemeralKeyPair.secretKey);
                // handle encrypted data
                const output = {
                    version: "x25519-xsalsa20-poly1305",
                    nonce: naclUtil.encodeBase64(nonce),
                    ephemPublicKey: naclUtil.encodeBase64(ephemeralKeyPair.publicKey),
                    ciphertext: naclUtil.encodeBase64(encryptedMessage)
                };
                // return encrypted msg data
                return output;
            }
        default:
            throw new Error("Encryption type/version not supported");
    }
}
exports.encrypt = encrypt;
/**
 * Encrypt a message in a way that obscures the message length.
 *
 * The message is padded to a multiple of 2048 before being encrypted so that the length of the
 * resulting encrypted message can't be used to guess the exact length of the original message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */ function encryptSafely({ publicKey , data , version  }) {
    if ((0, utils_1.isNullish)(publicKey)) throw new Error("Missing publicKey parameter");
    else if ((0, utils_1.isNullish)(data)) throw new Error("Missing data parameter");
    else if ((0, utils_1.isNullish)(version)) throw new Error("Missing version parameter");
    const DEFAULT_PADDING_LENGTH = 2048;
    const NACL_EXTRA_BYTES = 16;
    if (typeof data === "object" && "toJSON" in data) // remove toJSON attack vector
    // TODO, check all possible children
    throw new Error("Cannot encrypt with toJSON property.  Please remove toJSON property");
    // add padding
    const dataWithPadding = {
        data,
        padding: ""
    };
    // calculate padding
    const dataLength = Buffer.byteLength(JSON.stringify(dataWithPadding), "utf-8");
    const modVal = dataLength % DEFAULT_PADDING_LENGTH;
    let padLength = 0;
    // Only pad if necessary
    if (modVal > 0) padLength = DEFAULT_PADDING_LENGTH - modVal - NACL_EXTRA_BYTES; // nacl extra bytes
    dataWithPadding.padding = "0".repeat(padLength);
    const paddedMessage = JSON.stringify(dataWithPadding);
    return encrypt({
        publicKey,
        data: paddedMessage,
        version
    });
}
exports.encryptSafely = encryptSafely;
/**
 * Decrypt a message.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */ function decrypt({ encryptedData , privateKey  }) {
    if ((0, utils_1.isNullish)(encryptedData)) throw new Error("Missing encryptedData parameter");
    else if ((0, utils_1.isNullish)(privateKey)) throw new Error("Missing privateKey parameter");
    switch(encryptedData.version){
        case "x25519-xsalsa20-poly1305":
            {
                // string to buffer to UInt8Array
                const recieverPrivateKeyUint8Array = nacl_decodeHex(privateKey);
                const recieverEncryptionPrivateKey = nacl.box.keyPair.fromSecretKey(recieverPrivateKeyUint8Array).secretKey;
                // assemble decryption parameters
                const nonce = naclUtil.decodeBase64(encryptedData.nonce);
                const ciphertext = naclUtil.decodeBase64(encryptedData.ciphertext);
                const ephemPublicKey = naclUtil.decodeBase64(encryptedData.ephemPublicKey);
                // decrypt
                const decryptedMessage = nacl.box.open(ciphertext, nonce, ephemPublicKey, recieverEncryptionPrivateKey);
                // return decrypted msg data
                let output;
                try {
                    output = naclUtil.encodeUTF8(decryptedMessage);
                } catch (err) {
                    throw new Error("Decryption failed.");
                }
                if (output) return output;
                throw new Error("Decryption failed.");
            }
        default:
            throw new Error("Encryption type/version not supported.");
    }
}
exports.decrypt = decrypt;
/**
 * Decrypt a message that has been encrypted using `encryptSafely`.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */ function decryptSafely({ encryptedData , privateKey  }) {
    if ((0, utils_1.isNullish)(encryptedData)) throw new Error("Missing encryptedData parameter");
    else if ((0, utils_1.isNullish)(privateKey)) throw new Error("Missing privateKey parameter");
    const dataWithPadding = JSON.parse(decrypt({
        encryptedData,
        privateKey
    }));
    return dataWithPadding.data;
}
exports.decryptSafely = decryptSafely;
/**
 * Get the encryption public key for the given key.
 *
 * @param privateKey - The private key to generate the encryption public key with.
 * @returns The encryption public key.
 */ function getEncryptionPublicKey(privateKey) {
    const privateKeyUint8Array = nacl_decodeHex(privateKey);
    const encryptionPublicKey = nacl.box.keyPair.fromSecretKey(privateKeyUint8Array).publicKey;
    return naclUtil.encodeBase64(encryptionPublicKey);
}
exports.getEncryptionPublicKey = getEncryptionPublicKey;
/**
 * Convert a hex string to the UInt8Array format used by nacl.
 *
 * @param msgHex - The string to convert.
 * @returns The converted string.
 */ function nacl_decodeHex(msgHex) {
    const msgBase64 = Buffer.from(msgHex, "hex").toString("base64");
    return naclUtil.decodeBase64(msgBase64);
}

},{"9e7d95febb78571d":"fCgem","78567b4b5f0d870":"3J9rh","ab573d741f70d1cb":"iqvvT","213ab001f298c987":"k3HiS"}],"3J9rh":[function(require,module,exports) {
(function(nacl) {
    "use strict";
    // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
    // Public domain.
    //
    // Implementation derived from TweetNaCl version 20140427.
    // See for details: http://tweetnacl.cr.yp.to/
    var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init) for(i = 0; i < init.length; i++)r[i] = init[i];
        return r;
    };
    //  Pluggable, initialized in high-level API below.
    var randombytes = function() {
        throw new Error("no PRNG");
    };
    var _0 = new Uint8Array(16);
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf(), gf1 = gf([
        1
    ]), _121665 = gf([
        0xdb41,
        1
    ]), D = gf([
        0x78a3,
        0x1359,
        0x4dca,
        0x75eb,
        0xd8ab,
        0x4141,
        0x0a4d,
        0x0070,
        0xe898,
        0x7779,
        0x4079,
        0x8cc7,
        0xfe73,
        0x2b6f,
        0x6cee,
        0x5203
    ]), D2 = gf([
        0xf159,
        0x26b2,
        0x9b94,
        0xebd6,
        0xb156,
        0x8283,
        0x149a,
        0x00e0,
        0xd130,
        0xeef3,
        0x80f2,
        0x198e,
        0xfce7,
        0x56df,
        0xd9dc,
        0x2406
    ]), X = gf([
        0xd51a,
        0x8f25,
        0x2d60,
        0xc956,
        0xa7b2,
        0x9525,
        0xc760,
        0x692c,
        0xdc5c,
        0xfdd6,
        0xe231,
        0xc0a4,
        0x53fe,
        0xcd6e,
        0x36d3,
        0x2169
    ]), Y = gf([
        0x6658,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666,
        0x6666
    ]), I = gf([
        0xa0b0,
        0x4a0e,
        0x1b27,
        0xc4ee,
        0xe478,
        0xad2f,
        0x1806,
        0x2f43,
        0xd7a7,
        0x3dfb,
        0x0099,
        0x2b4d,
        0xdf0b,
        0x4fc1,
        0x2480,
        0x2b83
    ]);
    function ts64(x, i, h, l) {
        x[i] = h >> 24 & 0xff;
        x[i + 1] = h >> 16 & 0xff;
        x[i + 2] = h >> 8 & 0xff;
        x[i + 3] = h & 0xff;
        x[i + 4] = l >> 24 & 0xff;
        x[i + 5] = l >> 16 & 0xff;
        x[i + 6] = l >> 8 & 0xff;
        x[i + 7] = l & 0xff;
    }
    function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for(i = 0; i < n; i++)d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
    }
    function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
    }
    function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
    }
    function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24, j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24, j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24, j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24, j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24, j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24, j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24, j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24, j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24, j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24, j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24, j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24, j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24, j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24, j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24, j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 0xff;
        o[1] = x0 >>> 8 & 0xff;
        o[2] = x0 >>> 16 & 0xff;
        o[3] = x0 >>> 24 & 0xff;
        o[4] = x1 >>> 0 & 0xff;
        o[5] = x1 >>> 8 & 0xff;
        o[6] = x1 >>> 16 & 0xff;
        o[7] = x1 >>> 24 & 0xff;
        o[8] = x2 >>> 0 & 0xff;
        o[9] = x2 >>> 8 & 0xff;
        o[10] = x2 >>> 16 & 0xff;
        o[11] = x2 >>> 24 & 0xff;
        o[12] = x3 >>> 0 & 0xff;
        o[13] = x3 >>> 8 & 0xff;
        o[14] = x3 >>> 16 & 0xff;
        o[15] = x3 >>> 24 & 0xff;
        o[16] = x4 >>> 0 & 0xff;
        o[17] = x4 >>> 8 & 0xff;
        o[18] = x4 >>> 16 & 0xff;
        o[19] = x4 >>> 24 & 0xff;
        o[20] = x5 >>> 0 & 0xff;
        o[21] = x5 >>> 8 & 0xff;
        o[22] = x5 >>> 16 & 0xff;
        o[23] = x5 >>> 24 & 0xff;
        o[24] = x6 >>> 0 & 0xff;
        o[25] = x6 >>> 8 & 0xff;
        o[26] = x6 >>> 16 & 0xff;
        o[27] = x6 >>> 24 & 0xff;
        o[28] = x7 >>> 0 & 0xff;
        o[29] = x7 >>> 8 & 0xff;
        o[30] = x7 >>> 16 & 0xff;
        o[31] = x7 >>> 24 & 0xff;
        o[32] = x8 >>> 0 & 0xff;
        o[33] = x8 >>> 8 & 0xff;
        o[34] = x8 >>> 16 & 0xff;
        o[35] = x8 >>> 24 & 0xff;
        o[36] = x9 >>> 0 & 0xff;
        o[37] = x9 >>> 8 & 0xff;
        o[38] = x9 >>> 16 & 0xff;
        o[39] = x9 >>> 24 & 0xff;
        o[40] = x10 >>> 0 & 0xff;
        o[41] = x10 >>> 8 & 0xff;
        o[42] = x10 >>> 16 & 0xff;
        o[43] = x10 >>> 24 & 0xff;
        o[44] = x11 >>> 0 & 0xff;
        o[45] = x11 >>> 8 & 0xff;
        o[46] = x11 >>> 16 & 0xff;
        o[47] = x11 >>> 24 & 0xff;
        o[48] = x12 >>> 0 & 0xff;
        o[49] = x12 >>> 8 & 0xff;
        o[50] = x12 >>> 16 & 0xff;
        o[51] = x12 >>> 24 & 0xff;
        o[52] = x13 >>> 0 & 0xff;
        o[53] = x13 >>> 8 & 0xff;
        o[54] = x13 >>> 16 & 0xff;
        o[55] = x13 >>> 24 & 0xff;
        o[56] = x14 >>> 0 & 0xff;
        o[57] = x14 >>> 8 & 0xff;
        o[58] = x14 >>> 16 & 0xff;
        o[59] = x14 >>> 24 & 0xff;
        o[60] = x15 >>> 0 & 0xff;
        o[61] = x15 >>> 8 & 0xff;
        o[62] = x15 >>> 16 & 0xff;
        o[63] = x15 >>> 24 & 0xff;
    }
    function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24, j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24, j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24, j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24, j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24, j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24, j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24, j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24, j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24, j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24, j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24, j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24, j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24, j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24, j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24, j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for(var i = 0; i < 20; i += 2){
            u = x0 + x12 | 0;
            x4 ^= u << 7 | u >>> 25;
            u = x4 + x0 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x4 | 0;
            x12 ^= u << 13 | u >>> 19;
            u = x12 + x8 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x1 | 0;
            x9 ^= u << 7 | u >>> 25;
            u = x9 + x5 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x9 | 0;
            x1 ^= u << 13 | u >>> 19;
            u = x1 + x13 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x6 | 0;
            x14 ^= u << 7 | u >>> 25;
            u = x14 + x10 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x14 | 0;
            x6 ^= u << 13 | u >>> 19;
            u = x6 + x2 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x11 | 0;
            x3 ^= u << 7 | u >>> 25;
            u = x3 + x15 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x3 | 0;
            x11 ^= u << 13 | u >>> 19;
            u = x11 + x7 | 0;
            x15 ^= u << 18 | u >>> 14;
            u = x0 + x3 | 0;
            x1 ^= u << 7 | u >>> 25;
            u = x1 + x0 | 0;
            x2 ^= u << 9 | u >>> 23;
            u = x2 + x1 | 0;
            x3 ^= u << 13 | u >>> 19;
            u = x3 + x2 | 0;
            x0 ^= u << 18 | u >>> 14;
            u = x5 + x4 | 0;
            x6 ^= u << 7 | u >>> 25;
            u = x6 + x5 | 0;
            x7 ^= u << 9 | u >>> 23;
            u = x7 + x6 | 0;
            x4 ^= u << 13 | u >>> 19;
            u = x4 + x7 | 0;
            x5 ^= u << 18 | u >>> 14;
            u = x10 + x9 | 0;
            x11 ^= u << 7 | u >>> 25;
            u = x11 + x10 | 0;
            x8 ^= u << 9 | u >>> 23;
            u = x8 + x11 | 0;
            x9 ^= u << 13 | u >>> 19;
            u = x9 + x8 | 0;
            x10 ^= u << 18 | u >>> 14;
            u = x15 + x14 | 0;
            x12 ^= u << 7 | u >>> 25;
            u = x12 + x15 | 0;
            x13 ^= u << 9 | u >>> 23;
            u = x13 + x12 | 0;
            x14 ^= u << 13 | u >>> 19;
            u = x14 + x13 | 0;
            x15 ^= u << 18 | u >>> 14;
        }
        o[0] = x0 >>> 0 & 0xff;
        o[1] = x0 >>> 8 & 0xff;
        o[2] = x0 >>> 16 & 0xff;
        o[3] = x0 >>> 24 & 0xff;
        o[4] = x5 >>> 0 & 0xff;
        o[5] = x5 >>> 8 & 0xff;
        o[6] = x5 >>> 16 & 0xff;
        o[7] = x5 >>> 24 & 0xff;
        o[8] = x10 >>> 0 & 0xff;
        o[9] = x10 >>> 8 & 0xff;
        o[10] = x10 >>> 16 & 0xff;
        o[11] = x10 >>> 24 & 0xff;
        o[12] = x15 >>> 0 & 0xff;
        o[13] = x15 >>> 8 & 0xff;
        o[14] = x15 >>> 16 & 0xff;
        o[15] = x15 >>> 24 & 0xff;
        o[16] = x6 >>> 0 & 0xff;
        o[17] = x6 >>> 8 & 0xff;
        o[18] = x6 >>> 16 & 0xff;
        o[19] = x6 >>> 24 & 0xff;
        o[20] = x7 >>> 0 & 0xff;
        o[21] = x7 >>> 8 & 0xff;
        o[22] = x7 >>> 16 & 0xff;
        o[23] = x7 >>> 24 & 0xff;
        o[24] = x8 >>> 0 & 0xff;
        o[25] = x8 >>> 8 & 0xff;
        o[26] = x8 >>> 16 & 0xff;
        o[27] = x8 >>> 24 & 0xff;
        o[28] = x9 >>> 0 & 0xff;
        o[29] = x9 >>> 8 & 0xff;
        o[30] = x9 >>> 16 & 0xff;
        o[31] = x9 >>> 24 & 0xff;
    }
    function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
    }
    function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
    }
    var sigma = new Uint8Array([
        101,
        120,
        112,
        97,
        110,
        100,
        32,
        51,
        50,
        45,
        98,
        121,
        116,
        101,
        32,
        107
    ]);
    // "expand 32-byte k"
    function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = m[mpos + i] ^ x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
            mpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
    }
    function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for(i = 0; i < 16; i++)z[i] = 0;
        for(i = 0; i < 8; i++)z[i] = n[i];
        while(b >= 64){
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < 64; i++)c[cpos + i] = x[i];
            u = 1;
            for(i = 8; i < 16; i++){
                u = u + (z[i] & 0xff) | 0;
                z[i] = u & 0xff;
                u >>>= 8;
            }
            b -= 64;
            cpos += 64;
        }
        if (b > 0) {
            crypto_core_salsa20(x, z, k, sigma);
            for(i = 0; i < b; i++)c[cpos + i] = x[i];
        }
        return 0;
    }
    function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
    }
    function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
    }
    /*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/ var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
        this.r[0] = t0 & 0x1fff;
        t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this.r[5] = t4 >>> 1 & 0x1ffe;
        t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this.r[9] = t7 >>> 5 & 0x007f;
        this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
        this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
        this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
        this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
        this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
        this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
        this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
        this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
    };
    poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 2048;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while(bytes >= 16){
            t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
            h0 += t0 & 0x1fff;
            t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
            h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
            t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
            h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
            t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
            h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
            t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
            h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
            h5 += t4 >>> 1 & 0x1fff;
            t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
            h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
            t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
            h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
            t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
            h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
            h9 += t7 >>> 5 | hibit;
            c = 0;
            d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = d0 >>> 13;
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += d0 >>> 13;
            d0 &= 0x1fff;
            d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = d1 >>> 13;
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += d1 >>> 13;
            d1 &= 0x1fff;
            d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = d2 >>> 13;
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += d2 >>> 13;
            d2 &= 0x1fff;
            d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = d3 >>> 13;
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += d3 >>> 13;
            d3 &= 0x1fff;
            d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = d4 >>> 13;
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += d4 >>> 13;
            d4 &= 0x1fff;
            d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = d5 >>> 13;
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += d5 >>> 13;
            d5 &= 0x1fff;
            d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = d6 >>> 13;
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += d6 >>> 13;
            d6 &= 0x1fff;
            d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = d7 >>> 13;
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += d7 >>> 13;
            d7 &= 0x1fff;
            d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = d8 >>> 13;
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += d8 >>> 13;
            d8 &= 0x1fff;
            d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = d9 >>> 13;
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += d9 >>> 13;
            d9 &= 0x1fff;
            c = (c << 2) + c | 0;
            c = c + d0 | 0;
            d0 = c & 0x1fff;
            c = c >>> 13;
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
    };
    poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
            i = this.leftover;
            this.buffer[i++] = 1;
            for(; i < 16; i++)this.buffer[i] = 0;
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        for(i = 2; i < 10; i++){
            this.h[i] += c;
            c = this.h[i] >>> 13;
            this.h[i] &= 0x1fff;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 0x1fff;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 0x1fff;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(i = 1; i < 10; i++){
            g[i] = this.h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 8192;
        mask = (c ^ 1) - 1;
        for(i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(i = 0; i < 10; i++)this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 0xffff;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 0xffff;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 0xffff;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 0xffff;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 0xffff;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 0xffff;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 0xffff;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 0xffff;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 0xffff;
        for(i = 1; i < 8; i++){
            f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
            this.h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 0xff;
        mac[macpos + 1] = this.h[0] >>> 8 & 0xff;
        mac[macpos + 2] = this.h[1] >>> 0 & 0xff;
        mac[macpos + 3] = this.h[1] >>> 8 & 0xff;
        mac[macpos + 4] = this.h[2] >>> 0 & 0xff;
        mac[macpos + 5] = this.h[2] >>> 8 & 0xff;
        mac[macpos + 6] = this.h[3] >>> 0 & 0xff;
        mac[macpos + 7] = this.h[3] >>> 8 & 0xff;
        mac[macpos + 8] = this.h[4] >>> 0 & 0xff;
        mac[macpos + 9] = this.h[4] >>> 8 & 0xff;
        mac[macpos + 10] = this.h[5] >>> 0 & 0xff;
        mac[macpos + 11] = this.h[5] >>> 8 & 0xff;
        mac[macpos + 12] = this.h[6] >>> 0 & 0xff;
        mac[macpos + 13] = this.h[6] >>> 8 & 0xff;
        mac[macpos + 14] = this.h[7] >>> 0 & 0xff;
        mac[macpos + 15] = this.h[7] >>> 8 & 0xff;
    };
    poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
            want = 16 - this.leftover;
            if (want > bytes) want = bytes;
            for(i = 0; i < want; i++)this.buffer[this.leftover + i] = m[mpos + i];
            bytes -= want;
            mpos += want;
            this.leftover += want;
            if (this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - bytes % 16;
            this.blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for(i = 0; i < bytes; i++)this.buffer[this.leftover + i] = m[mpos + i];
            this.leftover += bytes;
        }
    };
    function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
    }
    function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
    }
    function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for(i = 0; i < 16; i++)c[i] = 0;
        return 0;
    }
    function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for(i = 0; i < 32; i++)m[i] = 0;
        return 0;
    }
    function set25519(r, a) {
        var i;
        for(i = 0; i < 16; i++)r[i] = a[i] | 0;
    }
    function car25519(o) {
        var i, v, c = 1;
        for(i = 0; i < 16; i++){
            v = o[i] + c + 65535;
            c = Math.floor(v / 65536);
            o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
    }
    function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for(var i = 0; i < 16; i++){
            t = c & (p[i] ^ q[i]);
            p[i] ^= t;
            q[i] ^= t;
        }
    }
    function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for(i = 0; i < 16; i++)t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for(j = 0; j < 2; j++){
            m[0] = t[0] - 0xffed;
            for(i = 1; i < 15; i++){
                m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
                m[i - 1] &= 0xffff;
            }
            m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
            b = m[15] >> 16 & 1;
            m[14] &= 0xffff;
            sel25519(t, m, 1 - b);
        }
        for(i = 0; i < 16; i++){
            o[2 * i] = t[i] & 0xff;
            o[2 * i + 1] = t[i] >> 8;
        }
    }
    function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
    }
    function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
    }
    function unpack25519(o, n) {
        var i;
        for(i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 0x7fff;
    }
    function A(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] + b[i];
    }
    function Z(o, a, b) {
        for(var i = 0; i < 16; i++)o[i] = a[i] - b[i];
    }
    function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        // t15 left as is
        // first car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        // second car
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
    }
    function S(o, a) {
        M(o, a, a);
    }
    function inv25519(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 253; a >= 0; a--){
            S(c, c);
            if (a !== 2 && a !== 4) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function pow2523(o, i) {
        var c = gf();
        var a;
        for(a = 0; a < 16; a++)c[a] = i[a];
        for(a = 250; a >= 0; a--){
            S(c, c);
            if (a !== 1) M(c, c, i);
        }
        for(a = 0; a < 16; a++)o[a] = c[a];
    }
    function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for(i = 0; i < 31; i++)z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for(i = 0; i < 16; i++){
            b[i] = x[i];
            d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for(i = 254; i >= 0; --i){
            r = z[i >>> 3] >>> (i & 7) & 1;
            sel25519(a, b, r);
            sel25519(c, d, r);
            A(e, a, c);
            Z(a, a, c);
            A(c, b, d);
            Z(b, b, d);
            S(d, e);
            S(f, a);
            M(a, c, a);
            M(c, b, e);
            A(e, a, c);
            Z(a, a, c);
            S(b, a);
            Z(c, d, f);
            M(a, c, _121665);
            A(a, a, d);
            M(c, c, a);
            M(a, d, f);
            M(d, b, x);
            S(b, e);
            sel25519(a, b, r);
            sel25519(c, d, r);
        }
        for(i = 0; i < 16; i++){
            x[i + 16] = a[i];
            x[i + 32] = c[i];
            x[i + 48] = b[i];
            x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
    }
    function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
    }
    function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
    }
    function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
    }
    var crypto_box_afternm = crypto_secretbox;
    var crypto_box_open_afternm = crypto_secretbox_open;
    function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
    }
    function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
    }
    var K = [
        0x428a2f98,
        0xd728ae22,
        0x71374491,
        0x23ef65cd,
        0xb5c0fbcf,
        0xec4d3b2f,
        0xe9b5dba5,
        0x8189dbbc,
        0x3956c25b,
        0xf348b538,
        0x59f111f1,
        0xb605d019,
        0x923f82a4,
        0xaf194f9b,
        0xab1c5ed5,
        0xda6d8118,
        0xd807aa98,
        0xa3030242,
        0x12835b01,
        0x45706fbe,
        0x243185be,
        0x4ee4b28c,
        0x550c7dc3,
        0xd5ffb4e2,
        0x72be5d74,
        0xf27b896f,
        0x80deb1fe,
        0x3b1696b1,
        0x9bdc06a7,
        0x25c71235,
        0xc19bf174,
        0xcf692694,
        0xe49b69c1,
        0x9ef14ad2,
        0xefbe4786,
        0x384f25e3,
        0x0fc19dc6,
        0x8b8cd5b5,
        0x240ca1cc,
        0x77ac9c65,
        0x2de92c6f,
        0x592b0275,
        0x4a7484aa,
        0x6ea6e483,
        0x5cb0a9dc,
        0xbd41fbd4,
        0x76f988da,
        0x831153b5,
        0x983e5152,
        0xee66dfab,
        0xa831c66d,
        0x2db43210,
        0xb00327c8,
        0x98fb213f,
        0xbf597fc7,
        0xbeef0ee4,
        0xc6e00bf3,
        0x3da88fc2,
        0xd5a79147,
        0x930aa725,
        0x06ca6351,
        0xe003826f,
        0x14292967,
        0x0a0e6e70,
        0x27b70a85,
        0x46d22ffc,
        0x2e1b2138,
        0x5c26c926,
        0x4d2c6dfc,
        0x5ac42aed,
        0x53380d13,
        0x9d95b3df,
        0x650a7354,
        0x8baf63de,
        0x766a0abb,
        0x3c77b2a8,
        0x81c2c92e,
        0x47edaee6,
        0x92722c85,
        0x1482353b,
        0xa2bfe8a1,
        0x4cf10364,
        0xa81a664b,
        0xbc423001,
        0xc24b8b70,
        0xd0f89791,
        0xc76c51a3,
        0x0654be30,
        0xd192e819,
        0xd6ef5218,
        0xd6990624,
        0x5565a910,
        0xf40e3585,
        0x5771202a,
        0x106aa070,
        0x32bbd1b8,
        0x19a4c116,
        0xb8d2d0c8,
        0x1e376c08,
        0x5141ab53,
        0x2748774c,
        0xdf8eeb99,
        0x34b0bcb5,
        0xe19b48a8,
        0x391c0cb3,
        0xc5c95a63,
        0x4ed8aa4a,
        0xe3418acb,
        0x5b9cca4f,
        0x7763e373,
        0x682e6ff3,
        0xd6b2b8a3,
        0x748f82ee,
        0x5defb2fc,
        0x78a5636f,
        0x43172f60,
        0x84c87814,
        0xa1f0ab72,
        0x8cc70208,
        0x1a6439ec,
        0x90befffa,
        0x23631e28,
        0xa4506ceb,
        0xde82bde9,
        0xbef9a3f7,
        0xb2c67915,
        0xc67178f2,
        0xe372532b,
        0xca273ece,
        0xea26619c,
        0xd186b8c7,
        0x21c0c207,
        0xeada7dd6,
        0xcde0eb1e,
        0xf57d4f7f,
        0xee6ed178,
        0x06f067aa,
        0x72176fba,
        0x0a637dc5,
        0xa2c898a6,
        0x113f9804,
        0xbef90dae,
        0x1b710b35,
        0x131c471b,
        0x28db77f5,
        0x23047d84,
        0x32caab7b,
        0x40c72493,
        0x3c9ebe0a,
        0x15c9bebc,
        0x431d67c4,
        0x9c100d4c,
        0x4cc5d4be,
        0xcb3e42b6,
        0x597f299c,
        0xfc657e2a,
        0x5fcb6fab,
        0x3ad6faec,
        0x6c44198c,
        0x4a475817
    ];
    function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while(n >= 128){
            for(i = 0; i < 16; i++){
                j = 8 * i + pos;
                wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
            }
            for(i = 0; i < 80; i++){
                bh0 = ah0;
                bh1 = ah1;
                bh2 = ah2;
                bh3 = ah3;
                bh4 = ah4;
                bh5 = ah5;
                bh6 = ah6;
                bh7 = ah7;
                bl0 = al0;
                bl1 = al1;
                bl2 = al2;
                bl3 = al3;
                bl4 = al4;
                bl5 = al5;
                bl6 = al6;
                bl7 = al7;
                // add
                h = ah7;
                l = al7;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma1
                h = (ah4 >>> 14 | al4 << 18) ^ (ah4 >>> 18 | al4 << 14) ^ (al4 >>> 9 | ah4 << 23);
                l = (al4 >>> 14 | ah4 << 18) ^ (al4 >>> 18 | ah4 << 14) ^ (ah4 >>> 9 | al4 << 23);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Ch
                h = ah4 & ah5 ^ ~ah4 & ah6;
                l = al4 & al5 ^ ~al4 & al6;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // K
                h = K[i * 2];
                l = K[i * 2 + 1];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // w
                h = wh[i % 16];
                l = wl[i % 16];
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                th = c & 0xffff | d << 16;
                tl = a & 0xffff | b << 16;
                // add
                h = th;
                l = tl;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                // Sigma0
                h = (ah0 >>> 28 | al0 << 4) ^ (al0 >>> 2 | ah0 << 30) ^ (al0 >>> 7 | ah0 << 25);
                l = (al0 >>> 28 | ah0 << 4) ^ (ah0 >>> 2 | al0 << 30) ^ (ah0 >>> 7 | al0 << 25);
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                // Maj
                h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh7 = c & 0xffff | d << 16;
                bl7 = a & 0xffff | b << 16;
                // add
                h = bh3;
                l = bl3;
                a = l & 0xffff;
                b = l >>> 16;
                c = h & 0xffff;
                d = h >>> 16;
                h = th;
                l = tl;
                a += l & 0xffff;
                b += l >>> 16;
                c += h & 0xffff;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                bh3 = c & 0xffff | d << 16;
                bl3 = a & 0xffff | b << 16;
                ah1 = bh0;
                ah2 = bh1;
                ah3 = bh2;
                ah4 = bh3;
                ah5 = bh4;
                ah6 = bh5;
                ah7 = bh6;
                ah0 = bh7;
                al1 = bl0;
                al2 = bl1;
                al3 = bl2;
                al4 = bl3;
                al5 = bl4;
                al6 = bl5;
                al7 = bl6;
                al0 = bl7;
                if (i % 16 === 15) for(j = 0; j < 16; j++){
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = (th >>> 1 | tl << 31) ^ (th >>> 8 | tl << 24) ^ th >>> 7;
                    l = (tl >>> 1 | th << 31) ^ (tl >>> 8 | th << 24) ^ (tl >>> 7 | th << 25);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = (th >>> 19 | tl << 13) ^ (tl >>> 29 | th << 3) ^ th >>> 6;
                    l = (tl >>> 19 | th << 13) ^ (th >>> 29 | tl << 3) ^ (tl >>> 6 | th << 26);
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = c & 0xffff | d << 16;
                    wl[j] = a & 0xffff | b << 16;
                }
            }
            // add
            h = ah0;
            l = al0;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[0];
            l = hl[0];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[0] = ah0 = c & 0xffff | d << 16;
            hl[0] = al0 = a & 0xffff | b << 16;
            h = ah1;
            l = al1;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[1];
            l = hl[1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[1] = ah1 = c & 0xffff | d << 16;
            hl[1] = al1 = a & 0xffff | b << 16;
            h = ah2;
            l = al2;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[2];
            l = hl[2];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[2] = ah2 = c & 0xffff | d << 16;
            hl[2] = al2 = a & 0xffff | b << 16;
            h = ah3;
            l = al3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[3];
            l = hl[3];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[3] = ah3 = c & 0xffff | d << 16;
            hl[3] = al3 = a & 0xffff | b << 16;
            h = ah4;
            l = al4;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[4];
            l = hl[4];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[4] = ah4 = c & 0xffff | d << 16;
            hl[4] = al4 = a & 0xffff | b << 16;
            h = ah5;
            l = al5;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[5];
            l = hl[5];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[5] = ah5 = c & 0xffff | d << 16;
            hl[5] = al5 = a & 0xffff | b << 16;
            h = ah6;
            l = al6;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[6];
            l = hl[6];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[6] = ah6 = c & 0xffff | d << 16;
            hl[6] = al6 = a & 0xffff | b << 16;
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = hh[7];
            l = hl[7];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            hh[7] = ah7 = c & 0xffff | d << 16;
            hl[7] = al7 = a & 0xffff | b << 16;
            pos += 128;
            n -= 128;
        }
        return n;
    }
    function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 0x6a09e667;
        hh[1] = 0xbb67ae85;
        hh[2] = 0x3c6ef372;
        hh[3] = 0xa54ff53a;
        hh[4] = 0x510e527f;
        hh[5] = 0x9b05688c;
        hh[6] = 0x1f83d9ab;
        hh[7] = 0x5be0cd19;
        hl[0] = 0xf3bcc908;
        hl[1] = 0x84caa73b;
        hl[2] = 0xfe94f82b;
        hl[3] = 0x5f1d36f1;
        hl[4] = 0xade682d1;
        hl[5] = 0x2b3e6c1f;
        hl[6] = 0xfb41bd6b;
        hl[7] = 0x137e2179;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for(i = 0; i < n; i++)x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 0x20000000 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for(i = 0; i < 8; i++)ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
    }
    function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
    }
    function cswap(p, q, b) {
        var i;
        for(i = 0; i < 4; i++)sel25519(p[i], q[i], b);
    }
    function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for(i = 255; i >= 0; --i){
            b = s[i / 8 | 0] >> (i & 7) & 1;
            cswap(p, q, b);
            add(q, p);
            add(p, p);
            cswap(p, q, b);
        }
    }
    function scalarbase(p, s) {
        var q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
    }
    function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for(i = 0; i < 32; i++)sk[i + 32] = pk[i];
        return 0;
    }
    var L = new Float64Array([
        0xed,
        0xd3,
        0xf5,
        0x5c,
        0x1a,
        0x63,
        0x12,
        0x58,
        0xd6,
        0x9c,
        0xf7,
        0xa2,
        0xde,
        0xf9,
        0xde,
        0x14,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0x10
    ]);
    function modL(r, x) {
        var carry, i, j, k;
        for(i = 63; i >= 32; --i){
            carry = 0;
            for(j = i - 32, k = i - 12; j < k; ++j){
                x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                carry = Math.floor((x[j] + 128) / 256);
                x[j] -= carry * 256;
            }
            x[j] += carry;
            x[i] = 0;
        }
        carry = 0;
        for(j = 0; j < 32; j++){
            x[j] += carry - (x[31] >> 4) * L[j];
            carry = x[j] >> 8;
            x[j] &= 255;
        }
        for(j = 0; j < 32; j++)x[j] -= carry * L[j];
        for(i = 0; i < 32; i++){
            x[i + 1] += x[i] >> 8;
            r[i] = x[i] & 255;
        }
    }
    function reduce(r) {
        var x = new Float64Array(64), i;
        for(i = 0; i < 64; i++)x[i] = r[i];
        for(i = 0; i < 64; i++)r[i] = 0;
        modL(r, x);
    }
    // Note: difference from C - smlen returned, not passed as argument.
    function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for(i = 0; i < n; i++)sm[64 + i] = m[i];
        for(i = 0; i < 32; i++)sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for(i = 32; i < 64; i++)sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for(i = 0; i < 64; i++)x[i] = 0;
        for(i = 0; i < 32; i++)x[i] = r[i];
        for(i = 0; i < 32; i++)for(j = 0; j < 32; j++)x[i + j] += h[i] * d[j];
        modL(sm.subarray(32), x);
        return smlen;
    }
    function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
    }
    function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [
            gf(),
            gf(),
            gf(),
            gf()
        ], q = [
            gf(),
            gf(),
            gf(),
            gf()
        ];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for(i = 0; i < n; i++)m[i] = sm[i];
        for(i = 0; i < 32; i++)m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
            for(i = 0; i < n; i++)m[i] = 0;
            return -1;
        }
        for(i = 0; i < n; i++)m[i] = sm[i + 64];
        return n;
    }
    var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
    nacl.lowlevel = {
        crypto_core_hsalsa20: crypto_core_hsalsa20,
        crypto_stream_xor: crypto_stream_xor,
        crypto_stream: crypto_stream,
        crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
        crypto_stream_salsa20: crypto_stream_salsa20,
        crypto_onetimeauth: crypto_onetimeauth,
        crypto_onetimeauth_verify: crypto_onetimeauth_verify,
        crypto_verify_16: crypto_verify_16,
        crypto_verify_32: crypto_verify_32,
        crypto_secretbox: crypto_secretbox,
        crypto_secretbox_open: crypto_secretbox_open,
        crypto_scalarmult: crypto_scalarmult,
        crypto_scalarmult_base: crypto_scalarmult_base,
        crypto_box_beforenm: crypto_box_beforenm,
        crypto_box_afternm: crypto_box_afternm,
        crypto_box: crypto_box,
        crypto_box_open: crypto_box_open,
        crypto_box_keypair: crypto_box_keypair,
        crypto_hash: crypto_hash,
        crypto_sign: crypto_sign,
        crypto_sign_keypair: crypto_sign_keypair,
        crypto_sign_open: crypto_sign_open,
        crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES: crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
        crypto_hash_BYTES: crypto_hash_BYTES,
        gf: gf,
        D: D,
        L: L,
        pack25519: pack25519,
        unpack25519: unpack25519,
        M: M,
        A: A,
        S: S,
        Z: Z,
        pow2523: pow2523,
        add: add,
        set25519: set25519,
        modL: modL,
        scalarmult: scalarmult,
        scalarbase: scalarbase
    };
    /* High-level API */ function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
    }
    function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
    }
    function checkArrayTypes() {
        for(var i = 0; i < arguments.length; i++){
            if (!(arguments[i] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
        }
    }
    function cleanup(arr) {
        for(var i = 0; i < arr.length; i++)arr[i] = 0;
    }
    nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
    };
    nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for(var i = 0; i < msg.length; i++)m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
    };
    nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for(var i = 0; i < box.length; i++)c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
    };
    nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
    nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
    nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
    nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
    };
    nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
    };
    nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
    nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
    nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
    };
    nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
    };
    nacl.box.after = nacl.secretbox;
    nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
    };
    nacl.box.open.after = nacl.secretbox.open;
    nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
    nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
    nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
    nacl.box.nonceLength = crypto_box_NONCEBYTES;
    nacl.box.overheadLength = nacl.secretbox.overheadLength;
    nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
    };
    nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for(var i = 0; i < m.length; i++)m[i] = tmp[i];
        return m;
    };
    nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for(var i = 0; i < sig.length; i++)sig[i] = signedMsg[i];
        return sig;
    };
    nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES) throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for(i = 0; i < crypto_sign_BYTES; i++)sm[i] = sig[i];
        for(i = 0; i < msg.length; i++)sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
    };
    nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for(var i = 0; i < pk.length; i++)pk[i] = secretKey[32 + i];
        return {
            publicKey: pk,
            secretKey: new Uint8Array(secretKey)
        };
    };
    nacl.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES) throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for(var i = 0; i < 32; i++)sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return {
            publicKey: pk,
            secretKey: sk
        };
    };
    nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
    nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
    nacl.sign.seedLength = crypto_sign_SEEDBYTES;
    nacl.sign.signatureLength = crypto_sign_BYTES;
    nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
    };
    nacl.hash.hashLength = crypto_hash_BYTES;
    nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        // Zero length arguments are considered not equal.
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
    };
    nacl.setPRNG = function(fn) {
        randombytes = fn;
    };
    (function() {
        // Initialize PRNG if environment provides CSPRNG.
        // If not, methods calling randombytes will throw.
        var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
            // Browsers.
            var QUOTA = 65536;
            nacl.setPRNG(function(x, n) {
                var i, v = new Uint8Array(n);
                for(i = 0; i < n; i += QUOTA)crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        } else {
            // Node.js.
            crypto = require("7417f3302e796833");
            if (crypto && crypto.randomBytes) nacl.setPRNG(function(x, n) {
                var i, v = crypto.randomBytes(n);
                for(i = 0; i < n; i++)x[i] = v[i];
                cleanup(v);
            });
        }
    })();
})((0, module.exports) ? module.exports : self.nacl = self.nacl || {});

},{"7417f3302e796833":"jhUEF"}],"iqvvT":[function(require,module,exports) {
var Buffer = require("eaf21b9e8decbaf2").Buffer;
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
    "use strict";
    if (0, module.exports) module.exports = f();
    else if (root.nacl) root.nacl.util = f();
    else {
        root.nacl = {};
        root.nacl.util = f();
    }
})(this, function() {
    "use strict";
    var util = {};
    function validateBase64(s) {
        if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s)) throw new TypeError("invalid encoding");
    }
    util.decodeUTF8 = function(s) {
        if (typeof s !== "string") throw new TypeError("expected string");
        var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
        for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
        return b;
    };
    util.encodeUTF8 = function(arr) {
        var i, s = [];
        for(i = 0; i < arr.length; i++)s.push(String.fromCharCode(arr[i]));
        return decodeURIComponent(escape(s.join("")));
    };
    if (typeof atob === "undefined") {
        // Node.js
        if (typeof Buffer.from !== "undefined") {
            // Node v6 and later
            util.encodeBase64 = function(arr) {
                return Buffer.from(arr).toString("base64");
            };
            util.decodeBase64 = function(s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, "base64"), 0));
            };
        } else {
            // Node earlier than v6
            util.encodeBase64 = function(arr) {
                return new Buffer(arr).toString("base64");
            };
            util.decodeBase64 = function(s) {
                validateBase64(s);
                return new Uint8Array(Array.prototype.slice.call(new Buffer(s, "base64"), 0));
            };
        }
    } else {
        // Browsers
        util.encodeBase64 = function(arr) {
            var i, s = [], len = arr.length;
            for(i = 0; i < len; i++)s.push(String.fromCharCode(arr[i]));
            return btoa(s.join(""));
        };
        util.decodeBase64 = function(s) {
            validateBase64(s);
            var i, d = atob(s), b = new Uint8Array(d.length);
            for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
            return b;
        };
    }
    return util;
});

},{"eaf21b9e8decbaf2":"jhUEF"}],"1FHqv":[function(require,module,exports) {
"use strict";
var Validator = module.exports.Validator = require("41b3c70611c9a315");
module.exports.ValidatorResult = require("d8866e42e250d740").ValidatorResult;
module.exports.ValidatorResultError = require("d8866e42e250d740").ValidatorResultError;
module.exports.ValidationError = require("d8866e42e250d740").ValidationError;
module.exports.SchemaError = require("d8866e42e250d740").SchemaError;
module.exports.SchemaScanResult = require("cf9ffcdb4f733cab").SchemaScanResult;
module.exports.scan = require("cf9ffcdb4f733cab").scan;
module.exports.validate = function(instance, schema, options) {
    var v = new Validator();
    return v.validate(instance, schema, options);
};

},{"41b3c70611c9a315":"lAuUg","d8866e42e250d740":"5kpID","cf9ffcdb4f733cab":"bHmlS"}],"lAuUg":[function(require,module,exports) {
"use strict";
var urilib = require("d2a7ed8d1efed17c");
var attribute = require("43c7b5dfe2370b33");
var helpers = require("eb90f32a03270929");
var scanSchema = require("8ecf621e66894c52").scan;
var ValidatorResult = helpers.ValidatorResult;
var ValidatorResultError = helpers.ValidatorResultError;
var SchemaError = helpers.SchemaError;
var SchemaContext = helpers.SchemaContext;
//var anonymousBase = 'vnd.jsonschema:///';
var anonymousBase = "/";
/**
 * Creates a new Validator object
 * @name Validator
 * @constructor
 */ var Validator = function Validator() {
    // Allow a validator instance to override global custom formats or to have their
    // own custom formats.
    this.customFormats = Object.create(Validator.prototype.customFormats);
    this.schemas = {};
    this.unresolvedRefs = [];
    // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
    this.types = Object.create(types);
    this.attributes = Object.create(attribute.validators);
};
// Allow formats to be registered globally.
Validator.prototype.customFormats = {};
// Hint at the presence of a property
Validator.prototype.schemas = null;
Validator.prototype.types = null;
Validator.prototype.attributes = null;
Validator.prototype.unresolvedRefs = null;
/**
 * Adds a schema with a certain urn to the Validator instance.
 * @param schema
 * @param urn
 * @return {Object}
 */ Validator.prototype.addSchema = function addSchema(schema, base) {
    var self = this;
    if (!schema) return null;
    var scan = scanSchema(base || anonymousBase, schema);
    var ourUri = base || schema.$id || schema.id;
    for(var uri in scan.id)this.schemas[uri] = scan.id[uri];
    for(var uri in scan.ref)// If this schema is already defined, it will be filtered out by the next step
    this.unresolvedRefs.push(uri);
    // Remove newly defined schemas from unresolvedRefs
    this.unresolvedRefs = this.unresolvedRefs.filter(function(uri) {
        return typeof self.schemas[uri] === "undefined";
    });
    return this.schemas[ourUri];
};
Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
    if (!Array.isArray(schemas)) return;
    for(var i = 0; i < schemas.length; i++)this.addSubSchema(baseuri, schemas[i]);
};
Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
    if (!schemas || typeof schemas != "object") return;
    for(var p in schemas)this.addSubSchema(baseuri, schemas[p]);
};
/**
 * Sets all the schemas of the Validator instance.
 * @param schemas
 */ Validator.prototype.setSchemas = function setSchemas(schemas) {
    this.schemas = schemas;
};
/**
 * Returns the schema of a certain urn
 * @param urn
 */ Validator.prototype.getSchema = function getSchema(urn) {
    return this.schemas[urn];
};
/**
 * Validates instance against the provided schema
 * @param instance
 * @param schema
 * @param [options]
 * @param [ctx]
 * @return {Array}
 */ Validator.prototype.validate = function validate(instance, schema, options, ctx) {
    if (typeof schema !== "boolean" && typeof schema !== "object" || schema === null) throw new SchemaError("Expected `schema` to be an object or boolean");
    if (!options) options = {};
    // This section indexes subschemas in the provided schema, so they don't need to be added with Validator#addSchema
    // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
    var id = schema.$id || schema.id;
    var base = urilib.resolve(options.base || anonymousBase, id || "");
    if (!ctx) {
        ctx = new SchemaContext(schema, options, [], base, Object.create(this.schemas));
        if (!ctx.schemas[base]) ctx.schemas[base] = schema;
        var found = scanSchema(base, schema);
        for(var n in found.id){
            var sch = found.id[n];
            ctx.schemas[n] = sch;
        }
    }
    if (options.required && instance === undefined) {
        var result = new ValidatorResult(instance, schema, options, ctx);
        result.addError("is required, but is undefined");
        return result;
    }
    var result = this.validateSchema(instance, schema, options, ctx);
    if (!result) throw new Error("Result undefined");
    else if (options.throwAll && result.errors.length) throw new ValidatorResultError(result);
    return result;
};
/**
* @param Object schema
* @return mixed schema uri or false
*/ function shouldResolve(schema) {
    var ref = typeof schema === "string" ? schema : schema.$ref;
    if (typeof ref == "string") return ref;
    return false;
}
/**
 * Validates an instance against the schema (the actual work horse)
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @private
 * @return {ValidatorResult}
 */ Validator.prototype.validateSchema = function validateSchema(instance, schema, options, ctx) {
    var result = new ValidatorResult(instance, schema, options, ctx);
    // Support for the true/false schemas
    if (typeof schema === "boolean") {
        if (schema === true) // `true` is always valid
        schema = {};
        else if (schema === false) // `false` is always invalid
        schema = {
            type: []
        };
    } else if (!schema) // This might be a string
    throw new Error("schema is undefined");
    if (schema["extends"]) {
        if (Array.isArray(schema["extends"])) {
            var schemaobj = {
                schema: schema,
                ctx: ctx
            };
            schema["extends"].forEach(this.schemaTraverser.bind(this, schemaobj));
            schema = schemaobj.schema;
            schemaobj.schema = null;
            schemaobj.ctx = null;
            schemaobj = null;
        } else schema = helpers.deepMerge(schema, this.superResolve(schema["extends"], ctx));
    }
    // If passed a string argument, load that schema URI
    var switchSchema = shouldResolve(schema);
    if (switchSchema) {
        var resolved = this.resolve(schema, switchSchema, ctx);
        var subctx = new SchemaContext(resolved.subschema, options, ctx.path, resolved.switchSchema, ctx.schemas);
        return this.validateSchema(instance, resolved.subschema, options, subctx);
    }
    var skipAttributes = options && options.skipAttributes || [];
    // Validate each schema attribute against the instance
    for(var key in schema)if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
        var validatorErr = null;
        var validator = this.attributes[key];
        if (validator) validatorErr = validator.call(this, instance, schema, options, ctx);
        else if (options.allowUnknownAttributes === false) // This represents an error with the schema itself, not an invalid instance
        throw new SchemaError("Unsupported attribute: " + key, schema);
        if (validatorErr) result.importErrors(validatorErr);
    }
    if (typeof options.rewrite == "function") {
        var value = options.rewrite.call(this, instance, schema, options, ctx);
        result.instance = value;
    }
    return result;
};
/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/ Validator.prototype.schemaTraverser = function schemaTraverser(schemaobj, s) {
    schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
};
/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/ Validator.prototype.superResolve = function superResolve(schema, ctx) {
    var ref = shouldResolve(schema);
    if (ref) return this.resolve(schema, ref, ctx).subschema;
    return schema;
};
/**
* @private
* @param Object schema
* @param Object switchSchema
* @param SchemaContext ctx
* @return Object resolved schemas {subschema:String, switchSchema: String}
* @throws SchemaError
*/ Validator.prototype.resolve = function resolve(schema, switchSchema, ctx) {
    switchSchema = ctx.resolve(switchSchema);
    // First see if the schema exists under the provided URI
    if (ctx.schemas[switchSchema]) return {
        subschema: ctx.schemas[switchSchema],
        switchSchema: switchSchema
    };
    // Else try walking the property pointer
    var parsed = urilib.parse(switchSchema);
    var fragment = parsed && parsed.hash;
    var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
    if (!document || !ctx.schemas[document]) throw new SchemaError("no such schema <" + switchSchema + ">", schema);
    var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
    if (subschema === undefined) throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
    return {
        subschema: subschema,
        switchSchema: switchSchema
    };
};
/**
 * Tests whether the instance if of a certain type.
 * @private
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @param type
 * @return {boolean}
 */ Validator.prototype.testType = function validateType(instance, schema, options, ctx, type) {
    if (type === undefined) return;
    else if (type === null) throw new SchemaError('Unexpected null in "type" keyword');
    if (typeof this.types[type] == "function") return this.types[type].call(this, instance);
    if (type && typeof type == "object") {
        var res = this.validateSchema(instance, type, options, ctx);
        return res === undefined || !(res && res.errors.length);
    }
    // Undefined or properties not on the list are acceptable, same as not being defined
    return true;
};
var types = Validator.prototype.types = {};
types.string = function testString(instance) {
    return typeof instance == "string";
};
types.number = function testNumber(instance) {
    // isFinite returns false for NaN, Infinity, and -Infinity
    return typeof instance == "number" && isFinite(instance);
};
types.integer = function testInteger(instance) {
    return typeof instance == "number" && instance % 1 === 0;
};
types.boolean = function testBoolean(instance) {
    return typeof instance == "boolean";
};
types.array = function testArray(instance) {
    return Array.isArray(instance);
};
types["null"] = function testNull(instance) {
    return instance === null;
};
types.date = function testDate(instance) {
    return instance instanceof Date;
};
types.any = function testAny(instance) {
    return true;
};
types.object = function testObject(instance) {
    // TODO: fix this - see #15
    return instance && typeof instance === "object" && !Array.isArray(instance) && !(instance instanceof Date);
};
module.exports = Validator;

},{"d2a7ed8d1efed17c":"7qjc7","43c7b5dfe2370b33":"iVdIg","eb90f32a03270929":"5kpID","8ecf621e66894c52":"bHmlS"}],"7qjc7":[function(require,module,exports) {
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
var punycode = require("53382df4c721d33");
var util = require("ecddd04d95de245f");
exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;
function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
}
// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = [
    "<",
    ">",
    '"',
    "`",
    " ",
    "\r",
    "\n",
    "	"
], // RFC 2396: characters not allowed for various reasons.
unwise = [
    "{",
    "}",
    "|",
    "\\",
    "^",
    "`"
].concat(delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = [
    "'"
].concat(unwise), // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(autoEscape), hostEndingChars = [
    "/",
    "?",
    "#"
], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
    "javascript": true,
    "javascript:": true
}, // protocols that never have a hostname.
hostlessProtocol = {
    "javascript": true,
    "javascript:": true
}, // protocols that always contain a // bit.
slashedProtocol = {
    "http": true,
    "https": true,
    "ftp": true,
    "gopher": true,
    "file": true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
}, querystring = require("c28d02ee31e2a78b");
function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url = uSplit.join(splitter);
    var rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
                else this.query = this.search.substr(1);
            } else if (parseQueryString) {
                this.search = "";
                this.query = {};
            }
            return this;
        }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c
        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.
        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for(var i = 0; i < hostEndingChars.length; i++){
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) // atSign can be anywhere.
        atSign = rest.lastIndexOf("@");
        else // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf("@", hostEnd);
        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
        }
        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for(var i = 0; i < nonHostChars.length; i++){
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        // pull out port.
        this.parseHost();
        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || "";
        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        // validate a little.
        if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for(var i = 0, l = hostparts.length; i < l; i++){
                var part = hostparts[i];
                if (!part) continue;
                if (!part.match(hostnamePartPattern)) {
                    var newpart = "";
                    for(var j = 0, k = part.length; j < k; j++)if (part.charCodeAt(j) > 127) // we replace non-ASCII char with a temporary placeholder
                    // we need this to make sure size of hostname is not
                    // broken by replacing non-ASCII by nothing
                    newpart += "x";
                    else newpart += part[j];
                    // we test again with ASCII char only
                    if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) rest = "/" + notHost.join(".") + rest;
                        this.hostname = validParts.join(".");
                        break;
                    }
                }
            }
        }
        if (this.hostname.length > hostnameMaxLen) this.hostname = "";
        else // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
        if (!ipv6Hostname) // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
        var p = this.port ? ":" + this.port : "";
        var h = this.hostname || "";
        this.host = h + p;
        this.href += this.host;
        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== "/") rest = "/" + rest;
        }
    }
    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for(var i = 0, l = autoEscape.length; i < l; i++){
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) esc = escape(ae);
        rest = rest.split(ae).join(esc);
    }
    // chop off from the tail first.
    var hash = rest.indexOf("#");
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) this.query = querystring.parse(this.query);
        rest = rest.slice(0, qm);
    } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = "";
        this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = "/";
    //to support http.request
    if (this.pathname || this.search) {
        var p = this.pathname || "";
        var s = this.search || "";
        this.path = p + s;
    }
    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
};
// format a parsed object into a url string
function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
}
Url.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) host = auth + this.host;
    else if (this.hostname) {
        host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
        if (this.port) host += ":" + this.port;
    }
    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) query = querystring.stringify(this.query);
    var search = this.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":") protocol += ":";
    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
    } else if (!host) host = "";
    if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
    if (search && search.charAt(0) !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
};
function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
}
Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
};
function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
}
Url.prototype.resolveObject = function(relative) {
    if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for(var tk = 0; tk < tkeys.length; tk++){
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
    }
    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;
    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === "") {
        result.href = result.format();
        return result;
    }
    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for(var rk = 0; rk < rkeys.length; rk++){
            var rkey = rkeys[rk];
            if (rkey !== "protocol") result[rkey] = relative[rkey];
        }
        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) result.path = result.pathname = "/";
        result.href = result.format();
        return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for(var v = 0; v < keys.length; v++){
                var k = keys[v];
                result[k] = relative[k];
            }
            result.href = result.format();
            return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || "").split("/");
            while(relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = "";
            if (!relative.hostname) relative.hostname = "";
            if (relPath[0] !== "") relPath.unshift("");
            if (relPath.length < 2) relPath.unshift("");
            result.pathname = relPath.join("/");
        } else result.pathname = relative.pathname;
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
            var p = result.pathname || "";
            var s = result.search || "";
            result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
            if (srcPath[0] === "") srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
                if (relPath[0] === "") relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    if (isRelAbs) {
        // it's absolute.
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
    // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especially happens in cases like
            //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
            var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        result.href = result.format();
        return result;
    }
    if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) result.path = "/" + result.search;
        else result.path = null;
        result.href = result.format();
        return result;
    }
    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for(var i = srcPath.length; i >= 0; i--){
        last = srcPath[i];
        if (last === ".") srcPath.splice(i, 1);
        else if (last === "..") {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) for(; up--; up)srcPath.unshift("..");
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) srcPath.unshift("");
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") srcPath.push("");
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) srcPath.unshift("");
    if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
    } else result.pathname = srcPath.join("/");
    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
};
Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ":") this.port = port.substr(1);
        host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
};

},{"53382df4c721d33":"4SwIZ","ecddd04d95de245f":"8nk0t","c28d02ee31e2a78b":"7oCJH"}],"4SwIZ":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    /** Detect free variables */ var freeExports = exports && !exports.nodeType && exports;
    var freeModule = module && !module.nodeType && module;
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
    /**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */ var punycode, /** Highest positive signed 32-bit float value */ maxInt = 2147483647, /** Bootstring parameters */ base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", /** Regular expressions */ regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, /** Error messages */ errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, /** Convenience shortcuts */ baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable */ key;
    /*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */ function error(type) {
        throw new RangeError(errors[type]);
    }
    /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */ function map(array, fn) {
        var length = array.length;
        var result = [];
        while(length--)result[length] = fn(array[length]);
        return result;
    }
    /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */ function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + "@";
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
    }
    /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */ function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while(counter < length){
            value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    }
    /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */ function ucs2encode(array) {
        return map(array, function(value) {
            var output = "";
            if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
            }
            output += stringFromCharCode(value);
            return output;
        }).join("");
    }
    /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */ function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) return codePoint - 22;
        if (codePoint - 65 < 26) return codePoint - 65;
        if (codePoint - 97 < 26) return codePoint - 97;
        return base;
    }
    /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */ function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */ function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */ function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results */ baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for(j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) error("not-basic");
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(index = basic > 0 ? basic + 1 : 0; index < inputLength;){
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for(oldi = i, w = 1, k = base;; k += base){
                if (index >= inputLength) error("invalid-input");
                digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) error("overflow");
                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) break;
                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) error("overflow");
                w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) error("overflow");
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
        }
        return ucs2encode(output);
    }
    /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */ function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`. */ inputLength, /** Cached calculation results */ handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for(j = 0; j < inputLength; ++j){
            currentValue = input[j];
            if (currentValue < 0x80) output.push(stringFromCharCode(currentValue));
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) output.push(delimiter);
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for(m = maxInt, j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) m = currentValue;
            }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error("overflow");
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for(j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue < n && ++delta > maxInt) error("overflow");
                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for(q = delta, k = base;; k += base){
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) break;
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join("");
    }
    /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */ function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    }
    /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */ function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
    }
    /*--------------------------------------------------------------------------*/ /** Define the public API */ punycode = {
        /**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */ "version": "1.4.1",
        /**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
    };
    /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) define("punycode", function() {
        return punycode;
    });
    else if (freeExports && freeModule) {
        if (module.exports == freeExports) // in Node.js, io.js, or RingoJS v0.8.0+
        freeModule.exports = punycode;
        else // in Narwhal or RingoJS v0.7.0-
        for(key in punycode)punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
    } else // in Rhino or a web browser
    root.punycode = punycode;
})(this);

},{}],"8nk0t":[function(require,module,exports) {
"use strict";
module.exports = {
    isString: function(arg) {
        return typeof arg === "string";
    },
    isObject: function(arg) {
        return typeof arg === "object" && arg !== null;
    },
    isNull: function(arg) {
        return arg === null;
    },
    isNullOrUndefined: function(arg) {
        return arg == null;
    }
};

},{}],"7oCJH":[function(require,module,exports) {
"use strict";
exports.decode = exports.parse = require("3557c860a80335a");
exports.encode = exports.stringify = require("df5eda273fd87f30");

},{"3557c860a80335a":"3WtwQ","df5eda273fd87f30":"i5gNM"}],"3WtwQ":[function(require,module,exports) {
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
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = function(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};
    if (typeof qs !== "string" || qs.length === 0) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === "number") maxKeys = options.maxKeys;
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for(var i = 0; i < len; ++i){
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) obj[k] = v;
        else if (isArray(obj[k])) obj[k].push(v);
        else obj[k] = [
            obj[k],
            v
        ];
    }
    return obj;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};

},{}],"i5gNM":[function(require,module,exports) {
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
var stringifyPrimitive = function(v) {
    switch(typeof v){
        case "string":
            return v;
        case "boolean":
            return v ? "true" : "false";
        case "number":
            return isFinite(v) ? v : "";
        default:
            return "";
    }
};
module.exports = function(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) obj = undefined;
    if (typeof obj === "object") return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
        else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
    if (!name) return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};
function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)res.push(f(xs[i], i));
    return res;
}
var objectKeys = Object.keys || function(obj) {
    var res = [];
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
};

},{}],"iVdIg":[function(require,module,exports) {
"use strict";
var helpers = require("caccaa59e823b15b");
/** @type ValidatorResult */ var ValidatorResult = helpers.ValidatorResult;
/** @type SchemaError */ var SchemaError = helpers.SchemaError;
var attribute = {};
attribute.ignoreProperties = {
    // informative properties
    "id": true,
    "default": true,
    "description": true,
    "title": true,
    // arguments to other properties
    "additionalItems": true,
    "then": true,
    "else": true,
    // special-handled properties
    "$schema": true,
    "$ref": true,
    "extends": true
};
/**
 * @name validators
 */ var validators = attribute.validators = {};
/**
 * Validates whether the instance if of a certain type
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {ValidatorResult|null}
 */ validators.type = function validateType(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var types = Array.isArray(schema.type) ? schema.type : [
        schema.type
    ];
    if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
        var list = types.map(function(v) {
            if (!v) return;
            var id = v.$id || v.id;
            return id ? "<" + id + ">" : v + "";
        });
        result.addError({
            name: "type",
            argument: list,
            message: "is not of a type(s) " + list
        });
    }
    return result;
};
function testSchemaNoThrow(instance, options, ctx, callback, schema) {
    var throwError = options.throwError;
    var throwAll = options.throwAll;
    options.throwError = false;
    options.throwAll = false;
    var res = this.validateSchema(instance, schema, options, ctx);
    options.throwError = throwError;
    options.throwAll = throwAll;
    if (!res.valid && callback instanceof Function) callback(res);
    return res.valid;
}
/**
 * Validates whether the instance matches some of the given schemas
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {ValidatorResult|null}
 */ validators.anyOf = function validateAnyOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var inner = new ValidatorResult(instance, schema, options, ctx);
    if (!Array.isArray(schema.anyOf)) throw new SchemaError("anyOf must be an array");
    if (!schema.anyOf.some(testSchemaNoThrow.bind(this, instance, options, ctx, function(res) {
        inner.importErrors(res);
    }))) {
        var list = schema.anyOf.map(function(v, i) {
            var id = v.$id || v.id;
            if (id) return "<" + id + ">";
            return v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
        });
        if (options.nestedErrors) result.importErrors(inner);
        result.addError({
            name: "anyOf",
            argument: list,
            message: "is not any of " + list.join(",")
        });
    }
    return result;
};
/**
 * Validates whether the instance matches every given schema
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null}
 */ validators.allOf = function validateAllOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    if (!Array.isArray(schema.allOf)) throw new SchemaError("allOf must be an array");
    var result = new ValidatorResult(instance, schema, options, ctx);
    var self = this;
    schema.allOf.forEach(function(v, i) {
        var valid = self.validateSchema(instance, v, options, ctx);
        if (!valid.valid) {
            var id = v.$id || v.id;
            var msg = id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
            result.addError({
                name: "allOf",
                argument: {
                    id: msg,
                    length: valid.errors.length,
                    valid: valid
                },
                message: "does not match allOf schema " + msg + " with " + valid.errors.length + " error[s]:"
            });
            result.importErrors(valid);
        }
    });
    return result;
};
/**
 * Validates whether the instance matches exactly one of the given schemas
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null}
 */ validators.oneOf = function validateOneOf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    if (!Array.isArray(schema.oneOf)) throw new SchemaError("oneOf must be an array");
    var result = new ValidatorResult(instance, schema, options, ctx);
    var inner = new ValidatorResult(instance, schema, options, ctx);
    var count = schema.oneOf.filter(testSchemaNoThrow.bind(this, instance, options, ctx, function(res) {
        inner.importErrors(res);
    })).length;
    var list = schema.oneOf.map(function(v, i) {
        var id = v.$id || v.id;
        return id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
    });
    if (count !== 1) {
        if (options.nestedErrors) result.importErrors(inner);
        result.addError({
            name: "oneOf",
            argument: list,
            message: "is not exactly one from " + list.join(",")
        });
    }
    return result;
};
/**
 * Validates "then" or "else" depending on the result of validating "if"
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null}
 */ validators.if = function validateIf(instance, schema, options, ctx) {
    // Ignore undefined instances
    if (instance === undefined) return null;
    if (!helpers.isSchema(schema.if)) throw new Error('Expected "if" keyword to be a schema');
    var ifValid = testSchemaNoThrow.call(this, instance, options, ctx, null, schema.if);
    var result = new ValidatorResult(instance, schema, options, ctx);
    var res;
    if (ifValid) {
        if (schema.then === undefined) return;
        if (!helpers.isSchema(schema.then)) throw new Error('Expected "then" keyword to be a schema');
        res = this.validateSchema(instance, schema.then, options, ctx.makeChild(schema.then));
        result.importErrors(res);
    } else {
        if (schema.else === undefined) return;
        if (!helpers.isSchema(schema.else)) throw new Error('Expected "else" keyword to be a schema');
        res = this.validateSchema(instance, schema.else, options, ctx.makeChild(schema.else));
        result.importErrors(res);
    }
    return result;
};
function getEnumerableProperty(object, key) {
    // Determine if `key` shows up in `for(var key in object)`
    // First test Object.hasOwnProperty.call as an optimization: that guarantees it does
    if (Object.hasOwnProperty.call(object, key)) return object[key];
    // Test `key in object` as an optimization; false means it won't
    if (!(key in object)) return;
    while(object = Object.getPrototypeOf(object)){
        if (Object.propertyIsEnumerable.call(object, key)) return object[key];
    }
}
/**
 * Validates propertyNames
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.propertyNames = function validatePropertyNames(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var subschema = schema.propertyNames !== undefined ? schema.propertyNames : {};
    if (!helpers.isSchema(subschema)) throw new SchemaError('Expected "propertyNames" to be a schema (object or boolean)');
    for(var property in instance)if (getEnumerableProperty(instance, property) !== undefined) {
        var res = this.validateSchema(property, subschema, options, ctx.makeChild(subschema));
        result.importErrors(res);
    }
    return result;
};
/**
 * Validates properties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.properties = function validateProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var properties = schema.properties || {};
    for(var property in properties){
        var subschema = properties[property];
        if (subschema === undefined) continue;
        else if (subschema === null) throw new SchemaError('Unexpected null, expected schema in "properties"');
        if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, subschema, options, ctx);
        var prop = getEnumerableProperty(instance, property);
        var res = this.validateSchema(prop, subschema, options, ctx.makeChild(subschema, property));
        if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
        result.importErrors(res);
    }
    return result;
};
/**
 * Test a specific property within in instance against the additionalProperties schema attribute
 * This ignores properties with definitions in the properties schema attribute, but no other attributes.
 * If too many more types of property-existence tests pop up they may need their own class of tests (like `type` has)
 * @private
 * @return {boolean}
 */ function testAdditionalProperty(instance, schema, options, ctx, property, result) {
    if (!this.types.object(instance)) return;
    if (schema.properties && schema.properties[property] !== undefined) return;
    if (schema.additionalProperties === false) result.addError({
        name: "additionalProperties",
        argument: property,
        message: "is not allowed to have the additional property " + JSON.stringify(property)
    });
    else {
        var additionalProperties = schema.additionalProperties || {};
        if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, additionalProperties, options, ctx);
        var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
        if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
        result.importErrors(res);
    }
}
/**
 * Validates patternProperties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.patternProperties = function validatePatternProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var patternProperties = schema.patternProperties || {};
    for(var property in instance){
        var test = true;
        for(var pattern in patternProperties){
            var subschema = patternProperties[pattern];
            if (subschema === undefined) continue;
            else if (subschema === null) throw new SchemaError('Unexpected null, expected schema in "patternProperties"');
            try {
                var regexp = new RegExp(pattern, "u");
            } catch (_e) {
                // In the event the stricter handling causes an error, fall back on the forgiving handling
                // DEPRECATED
                regexp = new RegExp(pattern);
            }
            if (!regexp.test(property)) continue;
            test = false;
            if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, subschema, options, ctx);
            var res = this.validateSchema(instance[property], subschema, options, ctx.makeChild(subschema, property));
            if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
            result.importErrors(res);
        }
        if (test) testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
    }
    return result;
};
/**
 * Validates additionalProperties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.additionalProperties = function validateAdditionalProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    // if patternProperties is defined then we'll test when that one is called instead
    if (schema.patternProperties) return null;
    var result = new ValidatorResult(instance, schema, options, ctx);
    for(var property in instance)testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
    return result;
};
/**
 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.minProperties = function validateMinProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length >= schema.minProperties)) result.addError({
        name: "minProperties",
        argument: schema.minProperties,
        message: "does not meet minimum property length of " + schema.minProperties
    });
    return result;
};
/**
 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.maxProperties = function validateMaxProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length <= schema.maxProperties)) result.addError({
        name: "maxProperties",
        argument: schema.maxProperties,
        message: "does not meet maximum property length of " + schema.maxProperties
    });
    return result;
};
/**
 * Validates items when instance is an array
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.items = function validateItems(instance, schema, options, ctx) {
    var self = this;
    if (!this.types.array(instance)) return;
    if (schema.items === undefined) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    instance.every(function(value, i) {
        if (Array.isArray(schema.items)) var items = schema.items[i] === undefined ? schema.additionalItems : schema.items[i];
        else var items = schema.items;
        if (items === undefined) return true;
        if (items === false) {
            result.addError({
                name: "items",
                message: "additionalItems not permitted"
            });
            return false;
        }
        var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
        if (res.instance !== result.instance[i]) result.instance[i] = res.instance;
        result.importErrors(res);
        return true;
    });
    return result;
};
/**
 * Validates the "contains" keyword
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */ validators.contains = function validateContains(instance, schema, options, ctx) {
    var self = this;
    if (!this.types.array(instance)) return;
    if (schema.contains === undefined) return;
    if (!helpers.isSchema(schema.contains)) throw new Error('Expected "contains" keyword to be a schema');
    var result = new ValidatorResult(instance, schema, options, ctx);
    var count = instance.some(function(value, i) {
        var res = self.validateSchema(value, schema.contains, options, ctx.makeChild(schema.contains, i));
        return res.errors.length === 0;
    });
    if (count === false) result.addError({
        name: "contains",
        argument: schema.contains,
        message: "must contain an item matching given schema"
    });
    return result;
};
/**
 * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.minimum = function validateMinimum(instance, schema, options, ctx) {
    if (!this.types.number(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
        if (!(instance > schema.minimum)) result.addError({
            name: "minimum",
            argument: schema.minimum,
            message: "must be greater than " + schema.minimum
        });
    } else if (!(instance >= schema.minimum)) result.addError({
        name: "minimum",
        argument: schema.minimum,
        message: "must be greater than or equal to " + schema.minimum
    });
    return result;
};
/**
 * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.maximum = function validateMaximum(instance, schema, options, ctx) {
    if (!this.types.number(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
        if (!(instance < schema.maximum)) result.addError({
            name: "maximum",
            argument: schema.maximum,
            message: "must be less than " + schema.maximum
        });
    } else if (!(instance <= schema.maximum)) result.addError({
        name: "maximum",
        argument: schema.maximum,
        message: "must be less than or equal to " + schema.maximum
    });
    return result;
};
/**
 * Validates the number form of exclusiveMinimum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.exclusiveMinimum = function validateExclusiveMinimum(instance, schema, options, ctx) {
    // Support the boolean form of exclusiveMinimum, which is handled by the "minimum" keyword.
    if (typeof schema.exclusiveMinimum === "boolean") return;
    if (!this.types.number(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var valid = instance > schema.exclusiveMinimum;
    if (!valid) result.addError({
        name: "exclusiveMinimum",
        argument: schema.exclusiveMinimum,
        message: "must be strictly greater than " + schema.exclusiveMinimum
    });
    return result;
};
/**
 * Validates the number form of exclusiveMaximum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.exclusiveMaximum = function validateExclusiveMaximum(instance, schema, options, ctx) {
    // Support the boolean form of exclusiveMaximum, which is handled by the "maximum" keyword.
    if (typeof schema.exclusiveMaximum === "boolean") return;
    if (!this.types.number(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var valid = instance < schema.exclusiveMaximum;
    if (!valid) result.addError({
        name: "exclusiveMaximum",
        argument: schema.exclusiveMaximum,
        message: "must be strictly less than " + schema.exclusiveMaximum
    });
    return result;
};
/**
 * Perform validation for multipleOf and divisibleBy, which are essentially the same.
 * @param instance
 * @param schema
 * @param validationType
 * @param errorMessage
 * @returns {String|null}
 */ var validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy(instance, schema, options, ctx, validationType, errorMessage) {
    if (!this.types.number(instance)) return;
    var validationArgument = schema[validationType];
    if (validationArgument == 0) throw new SchemaError(validationType + " cannot be zero");
    var result = new ValidatorResult(instance, schema, options, ctx);
    var instanceDecimals = helpers.getDecimalPlaces(instance);
    var divisorDecimals = helpers.getDecimalPlaces(validationArgument);
    var maxDecimals = Math.max(instanceDecimals, divisorDecimals);
    var multiplier = Math.pow(10, maxDecimals);
    if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) result.addError({
        name: validationType,
        argument: validationArgument,
        message: errorMessage + JSON.stringify(validationArgument)
    });
    return result;
};
/**
 * Validates divisibleBy when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.multipleOf = function validateMultipleOf(instance, schema, options, ctx) {
    return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
};
/**
 * Validates multipleOf when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.divisibleBy = function validateDivisibleBy(instance, schema, options, ctx) {
    return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
};
/**
 * Validates whether the instance value is present.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.required = function validateRequired(instance, schema, options, ctx) {
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (instance === undefined && schema.required === true) // A boolean form is implemented for reverse-compatibility with schemas written against older drafts
    result.addError({
        name: "required",
        message: "is required"
    });
    else if (this.types.object(instance) && Array.isArray(schema.required)) schema.required.forEach(function(n) {
        if (getEnumerableProperty(instance, n) === undefined) result.addError({
            name: "required",
            argument: n,
            message: "requires property " + JSON.stringify(n)
        });
    });
    return result;
};
/**
 * Validates whether the instance value matches the regular expression, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.pattern = function validatePattern(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var pattern = schema.pattern;
    try {
        var regexp = new RegExp(pattern, "u");
    } catch (_e) {
        // In the event the stricter handling causes an error, fall back on the forgiving handling
        // DEPRECATED
        regexp = new RegExp(pattern);
    }
    if (!instance.match(regexp)) result.addError({
        name: "pattern",
        argument: schema.pattern,
        message: "does not match pattern " + JSON.stringify(schema.pattern.toString())
    });
    return result;
};
/**
 * Validates whether the instance value is of a certain defined format or a custom
 * format.
 * The following formats are supported for string types:
 *   - date-time
 *   - date
 *   - time
 *   - ip-address
 *   - ipv6
 *   - uri
 *   - color
 *   - host-name
 *   - alpha
 *   - alpha-numeric
 *   - utc-millisec
 * @param instance
 * @param schema
 * @param [options]
 * @param [ctx]
 * @return {String|null}
 */ validators.format = function validateFormat(instance, schema, options, ctx) {
    if (instance === undefined) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) result.addError({
        name: "format",
        argument: schema.format,
        message: "does not conform to the " + JSON.stringify(schema.format) + " format"
    });
    return result;
};
/**
 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.minLength = function validateMinLength(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length >= schema.minLength)) result.addError({
        name: "minLength",
        argument: schema.minLength,
        message: "does not meet minimum length of " + schema.minLength
    });
    return result;
};
/**
 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.maxLength = function validateMaxLength(instance, schema, options, ctx) {
    if (!this.types.string(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    // TODO if this was already computed in "minLength", use that value instead of re-computing
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length <= schema.maxLength)) result.addError({
        name: "maxLength",
        argument: schema.maxLength,
        message: "does not meet maximum length of " + schema.maxLength
    });
    return result;
};
/**
 * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.minItems = function validateMinItems(instance, schema, options, ctx) {
    if (!this.types.array(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!(instance.length >= schema.minItems)) result.addError({
        name: "minItems",
        argument: schema.minItems,
        message: "does not meet minimum length of " + schema.minItems
    });
    return result;
};
/**
 * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
 * @param instance
 * @param schema
 * @return {String|null}
 */ validators.maxItems = function validateMaxItems(instance, schema, options, ctx) {
    if (!this.types.array(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!(instance.length <= schema.maxItems)) result.addError({
        name: "maxItems",
        argument: schema.maxItems,
        message: "does not meet maximum length of " + schema.maxItems
    });
    return result;
};
/**
 * Deep compares arrays for duplicates
 * @param v
 * @param i
 * @param a
 * @private
 * @return {boolean}
 */ function testArrays(v, i, a) {
    var j, len = a.length;
    for(j = i + 1, len; j < len; j++){
        if (helpers.deepCompareStrict(v, a[j])) return false;
    }
    return true;
}
/**
 * Validates whether there are no duplicates, when the instance is an Array.
 * @param instance
 * @return {String|null}
 */ validators.uniqueItems = function validateUniqueItems(instance, schema, options, ctx) {
    if (schema.uniqueItems !== true) return;
    if (!this.types.array(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!instance.every(testArrays)) result.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
    });
    return result;
};
/**
 * Validate for the presence of dependency properties, if the instance is an object.
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {null|ValidatorResult}
 */ validators.dependencies = function validateDependencies(instance, schema, options, ctx) {
    if (!this.types.object(instance)) return;
    var result = new ValidatorResult(instance, schema, options, ctx);
    for(var property in schema.dependencies){
        if (instance[property] === undefined) continue;
        var dep = schema.dependencies[property];
        var childContext = ctx.makeChild(dep, property);
        if (typeof dep == "string") dep = [
            dep
        ];
        if (Array.isArray(dep)) dep.forEach(function(prop) {
            if (instance[prop] === undefined) result.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: childContext.propertyPath,
                message: "property " + prop + " not found, required by " + childContext.propertyPath
            });
        });
        else {
            var res = this.validateSchema(instance, dep, options, childContext);
            if (result.instance !== res.instance) result.instance = res.instance;
            if (res && res.errors.length) {
                result.addError({
                    name: "dependencies",
                    argument: childContext.propertyPath,
                    message: "does not meet dependency required by " + childContext.propertyPath
                });
                result.importErrors(res);
            }
        }
    }
    return result;
};
/**
 * Validates whether the instance value is one of the enumerated values.
 *
 * @param instance
 * @param schema
 * @return {ValidatorResult|null}
 */ validators["enum"] = function validateEnum(instance, schema, options, ctx) {
    if (instance === undefined) return null;
    if (!Array.isArray(schema["enum"])) throw new SchemaError("enum expects an array", schema);
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!schema["enum"].some(helpers.deepCompareStrict.bind(null, instance))) result.addError({
        name: "enum",
        argument: schema["enum"],
        message: "is not one of enum values: " + schema["enum"].map(String).join(",")
    });
    return result;
};
/**
 * Validates whether the instance exactly matches a given value
 *
 * @param instance
 * @param schema
 * @return {ValidatorResult|null}
 */ validators["const"] = function validateEnum(instance, schema, options, ctx) {
    if (instance === undefined) return null;
    var result = new ValidatorResult(instance, schema, options, ctx);
    if (!helpers.deepCompareStrict(schema["const"], instance)) result.addError({
        name: "const",
        argument: schema["const"],
        message: "does not exactly match expected constant: " + schema["const"]
    });
    return result;
};
/**
 * Validates whether the instance if of a prohibited type.
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {null|ValidatorResult}
 */ validators.not = validators.disallow = function validateNot(instance, schema, options, ctx) {
    var self = this;
    if (instance === undefined) return null;
    var result = new ValidatorResult(instance, schema, options, ctx);
    var notTypes = schema.not || schema.disallow;
    if (!notTypes) return null;
    if (!Array.isArray(notTypes)) notTypes = [
        notTypes
    ];
    notTypes.forEach(function(type) {
        if (self.testType(instance, schema, options, ctx, type)) {
            var id = type && (type.$id || type.id);
            var schemaId = id || type;
            result.addError({
                name: "not",
                argument: schemaId,
                message: "is of prohibited type " + schemaId
            });
        }
    });
    return result;
};
module.exports = attribute;

},{"caccaa59e823b15b":"5kpID"}],"5kpID":[function(require,module,exports) {
"use strict";
var uri = require("59def58e85e2fc73");
var ValidationError = exports.ValidationError = function ValidationError(message, instance, schema, path, name, argument) {
    if (Array.isArray(path)) {
        this.path = path;
        this.property = path.reduce(function(sum, item) {
            return sum + makeSuffix(item);
        }, "instance");
    } else if (path !== undefined) this.property = path;
    if (message) this.message = message;
    if (schema) {
        var id = schema.$id || schema.id;
        this.schema = id || schema;
    }
    if (instance !== undefined) this.instance = instance;
    this.name = name;
    this.argument = argument;
    this.stack = this.toString();
};
ValidationError.prototype.toString = function toString() {
    return this.property + " " + this.message;
};
var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
    this.instance = instance;
    this.schema = schema;
    this.options = options;
    this.path = ctx.path;
    this.propertyPath = ctx.propertyPath;
    this.errors = [];
    this.throwError = options && options.throwError;
    this.throwFirst = options && options.throwFirst;
    this.throwAll = options && options.throwAll;
    this.disableFormat = options && options.disableFormat === true;
};
ValidatorResult.prototype.addError = function addError(detail) {
    var err;
    if (typeof detail == "string") err = new ValidationError(detail, this.instance, this.schema, this.path);
    else {
        if (!detail) throw new Error("Missing error detail");
        if (!detail.message) throw new Error("Missing error message");
        if (!detail.name) throw new Error("Missing validator type");
        err = new ValidationError(detail.message, this.instance, this.schema, this.path, detail.name, detail.argument);
    }
    this.errors.push(err);
    if (this.throwFirst) throw new ValidatorResultError(this);
    else if (this.throwError) throw err;
    return err;
};
ValidatorResult.prototype.importErrors = function importErrors(res) {
    if (typeof res == "string" || res && res.validatorType) this.addError(res);
    else if (res && res.errors) this.errors = this.errors.concat(res.errors);
};
function stringizer(v, i) {
    return i + ": " + v.toString() + "\n";
}
ValidatorResult.prototype.toString = function toString(res) {
    return this.errors.map(stringizer).join("");
};
Object.defineProperty(ValidatorResult.prototype, "valid", {
    get: function() {
        return !this.errors.length;
    }
});
module.exports.ValidatorResultError = ValidatorResultError;
function ValidatorResultError(result) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidatorResultError);
    this.instance = result.instance;
    this.schema = result.schema;
    this.options = result.options;
    this.errors = result.errors;
}
ValidatorResultError.prototype = new Error();
ValidatorResultError.prototype.constructor = ValidatorResultError;
ValidatorResultError.prototype.name = "Validation Error";
/**
 * Describes a problem with a Schema which prevents validation of an instance
 * @name SchemaError
 * @constructor
 */ var SchemaError = exports.SchemaError = function SchemaError(msg, schema) {
    this.message = msg;
    this.schema = schema;
    Error.call(this, msg);
    Error.captureStackTrace(this, SchemaError);
};
SchemaError.prototype = Object.create(Error.prototype, {
    constructor: {
        value: SchemaError,
        enumerable: false
    },
    name: {
        value: "SchemaError",
        enumerable: false
    }
});
var SchemaContext = exports.SchemaContext = function SchemaContext(schema, options, path, base, schemas) {
    this.schema = schema;
    this.options = options;
    if (Array.isArray(path)) {
        this.path = path;
        this.propertyPath = path.reduce(function(sum, item) {
            return sum + makeSuffix(item);
        }, "instance");
    } else this.propertyPath = path;
    this.base = base;
    this.schemas = schemas;
};
SchemaContext.prototype.resolve = function resolve(target) {
    return uri.resolve(this.base, target);
};
SchemaContext.prototype.makeChild = function makeChild(schema, propertyName) {
    var path = propertyName === undefined ? this.path : this.path.concat([
        propertyName
    ]);
    var id = schema.$id || schema.id;
    var base = uri.resolve(this.base, id || "");
    var ctx = new SchemaContext(schema, this.options, path, base, Object.create(this.schemas));
    if (id && !ctx.schemas[base]) ctx.schemas[base] = schema;
    return ctx;
};
var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    "date": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    "time": /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    "duration": /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    "email": /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    "ipv6": /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    "uri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    "iri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    "uuid": /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    "hostname": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(input) {
        return typeof input === "string" && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
    },
    // 7.3.8. regex
    "regex": function(input) {
        var result = true;
        try {
            new RegExp(input);
        } catch (e) {
            result = false;
        }
        return result;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    "style": /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    "color": /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    "phone": /^\+(?:[0-9] ?){6,14}[0-9]$/,
    "alpha": /^[a-zA-Z]+$/,
    "alphanumeric": /^[a-zA-Z0-9]+$/
};
FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS["ip-address"];
exports.isFormat = function isFormat(input, format, validator) {
    if (typeof input === "string" && FORMAT_REGEXPS[format] !== undefined) {
        if (FORMAT_REGEXPS[format] instanceof RegExp) return FORMAT_REGEXPS[format].test(input);
        if (typeof FORMAT_REGEXPS[format] === "function") return FORMAT_REGEXPS[format](input);
    } else if (validator && validator.customFormats && typeof validator.customFormats[format] === "function") return validator.customFormats[format](input);
    return true;
};
var makeSuffix = exports.makeSuffix = function makeSuffix(key) {
    key = key.toString();
    // This function could be capable of outputting valid a ECMAScript string, but the
    // resulting code for testing which form to use would be tens of thousands of characters long
    // That means this will use the name form for some illegal forms
    if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) return "." + key;
    if (key.match(/^\d+$/)) return "[" + key + "]";
    return "[" + JSON.stringify(key) + "]";
};
exports.deepCompareStrict = function deepCompareStrict(a, b) {
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) return false;
        if (a.length !== b.length) return false;
        return a.every(function(v, i) {
            return deepCompareStrict(a[i], b[i]);
        });
    }
    if (typeof a === "object") {
        if (!a || !b) return a === b;
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) return false;
        return aKeys.every(function(v) {
            return deepCompareStrict(a[v], b[v]);
        });
    }
    return a === b;
};
function deepMerger(target, dst, e, i) {
    if (typeof e === "object") dst[i] = deepMerge(target[i], e);
    else if (target.indexOf(e) === -1) dst.push(e);
}
function copyist(src, dst, key) {
    dst[key] = src[key];
}
function copyistWithDeepMerge(target, src, dst, key) {
    if (typeof src[key] !== "object" || !src[key]) dst[key] = src[key];
    else if (!target[key]) dst[key] = src[key];
    else dst[key] = deepMerge(target[key], src[key]);
}
function deepMerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};
    if (array) {
        target = target || [];
        dst = dst.concat(target);
        src.forEach(deepMerger.bind(null, target, dst));
    } else {
        if (target && typeof target === "object") Object.keys(target).forEach(copyist.bind(null, target, dst));
        Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
    }
    return dst;
}
module.exports.deepMerge = deepMerge;
/**
 * Validates instance against the provided schema
 * Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
 * @param o
 * @param s The path to walk o along
 * @return any
 */ exports.objectGetPath = function objectGetPath(o, s) {
    var parts = s.split("/").slice(1);
    var k;
    while(typeof (k = parts.shift()) == "string"){
        var n = decodeURIComponent(k.replace(/~0/, "~").replace(/~1/g, "/"));
        if (!(n in o)) return;
        o = o[n];
    }
    return o;
};
function pathEncoder(v) {
    return "/" + encodeURIComponent(v).replace(/~/g, "%7E");
}
/**
 * Accept an Array of property names and return a JSON Pointer URI fragment
 * @param Array a
 * @return {String}
 */ exports.encodePath = function encodePointer(a) {
    // ~ must be encoded explicitly because hacks
    // the slash is encoded by encodeURIComponent
    return a.map(pathEncoder).join("");
};
/**
 * Calculate the number of decimal places a number uses
 * We need this to get correct results out of multipleOf and divisibleBy
 * when either figure is has decimal places, due to IEEE-754 float issues.
 * @param number
 * @returns {number}
 */ exports.getDecimalPlaces = function getDecimalPlaces(number) {
    var decimalPlaces = 0;
    if (isNaN(number)) return decimalPlaces;
    if (typeof number !== "number") number = Number(number);
    var parts = number.toString().split("e");
    if (parts.length === 2) {
        if (parts[1][0] !== "-") return decimalPlaces;
        else decimalPlaces = Number(parts[1].slice(1));
    }
    var decimalParts = parts[0].split(".");
    if (decimalParts.length === 2) decimalPlaces += decimalParts[1].length;
    return decimalPlaces;
};
exports.isSchema = function isSchema(val) {
    return typeof val === "object" && val || typeof val === "boolean";
};

},{"59def58e85e2fc73":"7qjc7"}],"bHmlS":[function(require,module,exports) {
"use strict";
var urilib = require("f454a365387092ee");
var helpers = require("cd0cd34f6e1fd681");
module.exports.SchemaScanResult = SchemaScanResult;
function SchemaScanResult(found, ref) {
    this.id = found;
    this.ref = ref;
}
/**
 * Adds a schema with a certain urn to the Validator instance.
 * @param string uri
 * @param object schema
 * @return {Object}
 */ module.exports.scan = function scan(base, schema) {
    function scanSchema(baseuri, schema) {
        if (!schema || typeof schema != "object") return;
        // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
        if (schema.$ref) {
            var resolvedUri = urilib.resolve(baseuri, schema.$ref);
            ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri] + 1 : 0;
            return;
        }
        var id = schema.$id || schema.id;
        var ourBase = id ? urilib.resolve(baseuri, id) : baseuri;
        if (ourBase) {
            // If there's no fragment, append an empty one
            if (ourBase.indexOf("#") < 0) ourBase += "#";
            if (found[ourBase]) {
                if (!helpers.deepCompareStrict(found[ourBase], schema)) throw new Error("Schema <" + ourBase + "> already exists with different definition");
                return found[ourBase];
            }
            found[ourBase] = schema;
            // strip trailing fragment
            if (ourBase[ourBase.length - 1] == "#") found[ourBase.substring(0, ourBase.length - 1)] = schema;
        }
        scanArray(ourBase + "/items", Array.isArray(schema.items) ? schema.items : [
            schema.items
        ]);
        scanArray(ourBase + "/extends", Array.isArray(schema.extends) ? schema.extends : [
            schema.extends
        ]);
        scanSchema(ourBase + "/additionalItems", schema.additionalItems);
        scanObject(ourBase + "/properties", schema.properties);
        scanSchema(ourBase + "/additionalProperties", schema.additionalProperties);
        scanObject(ourBase + "/definitions", schema.definitions);
        scanObject(ourBase + "/patternProperties", schema.patternProperties);
        scanObject(ourBase + "/dependencies", schema.dependencies);
        scanArray(ourBase + "/disallow", schema.disallow);
        scanArray(ourBase + "/allOf", schema.allOf);
        scanArray(ourBase + "/anyOf", schema.anyOf);
        scanArray(ourBase + "/oneOf", schema.oneOf);
        scanSchema(ourBase + "/not", schema.not);
    }
    function scanArray(baseuri, schemas) {
        if (!Array.isArray(schemas)) return;
        for(var i = 0; i < schemas.length; i++)scanSchema(baseuri + "/" + i, schemas[i]);
    }
    function scanObject(baseuri, schemas) {
        if (!schemas || typeof schemas != "object") return;
        for(var p in schemas)scanSchema(baseuri + "/" + p, schemas[p]);
    }
    var found = {};
    var ref = {};
    scanSchema(base, schema);
    return new SchemaScanResult(found, ref);
};

},{"f454a365387092ee":"7qjc7","cd0cd34f6e1fd681":"5kpID"}]},["ghVH1"], null, "parcelRequire8d7b")

//# sourceMappingURL=ethereumProvider.esm.5da502f8.js.map
