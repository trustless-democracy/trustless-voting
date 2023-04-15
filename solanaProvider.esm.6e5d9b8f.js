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
})({"hmOoa":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fc3684d26e5d9b8f";
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

},{}],"kX9zz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PhantomInjectedProvider", ()=>PhantomInjectedProvider);
parcelHelpers.export(exports, "SlopeInjectedProxyProvider", ()=>SlopeInjectedProxyProvider);
parcelHelpers.export(exports, "SolanaPrivateKeyProvider", ()=>SolanaPrivateKeyProvider);
parcelHelpers.export(exports, "SolanaWallet", ()=>SolanaWallet);
parcelHelpers.export(exports, "SolflareInjectedProvider", ()=>SolflareInjectedProvider);
parcelHelpers.export(exports, "TorusInjectedProvider", ()=>TorusInjectedProvider);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _baseControllers = require("@toruslabs/base-controllers");
var _openloginJrpc = require("@toruslabs/openlogin-jrpc");
var _base = require("@web3auth/base");
var _baseProvider = require("@web3auth/base-provider");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var _ethRpcErrors = require("eth-rpc-errors");
var _web3Js = require("@solana/web3.js");
var _tweetnaclJs = require("@toruslabs/tweetnacl-js");
var _tweetnaclJsDefault = parcelHelpers.interopDefault(_tweetnaclJs);
var Buffer = require("7da3bce6a5f2a55f").Buffer;
function createChainIdMiddleware(chainId) {
    return (req, res, next, end)=>{
        if (req.method === "solana_chainId") {
            res.result = chainId;
            return end();
        }
        return next();
    };
}
function createProviderConfigMiddleware(providerConfig) {
    return (req, res, next, end)=>{
        if (req.method === "solana_provider_config") {
            res.result = providerConfig;
            return end();
        }
        return next();
    };
}
function createConfigMiddleware(providerConfig) {
    const { chainId  } = providerConfig;
    return (0, _openloginJrpc.mergeMiddleware)([
        createChainIdMiddleware(chainId),
        createProviderConfigMiddleware(providerConfig)
    ]);
}
function createJsonRpcClient(providerConfig) {
    const { rpcTarget  } = providerConfig;
    const fetchMiddleware = (0, _baseControllers.createFetchMiddleware)({
        rpcTarget
    });
    const networkMiddleware = (0, _openloginJrpc.mergeMiddleware)([
        createConfigMiddleware(providerConfig),
        fetchMiddleware
    ]);
    return {
        networkMiddleware,
        fetchMiddleware
    };
}
function createGetAccountsMiddleware(_ref) {
    let { getAccounts  } = _ref;
    return (0, _openloginJrpc.createAsyncMiddleware)(async (request, response, next)=>{
        const { method  } = request;
        if (method !== "getAccounts") return next();
        if (!getAccounts) throw new Error("WalletMiddleware - opts.getAccounts not provided");
        // This calls from the prefs controller
        const accounts = await getAccounts(request);
        response.result = accounts;
        return undefined;
    });
}
function createRequestAccountsMiddleware(_ref2) {
    let { requestAccounts  } = _ref2;
    return (0, _openloginJrpc.createAsyncMiddleware)(async (request, response, next)=>{
        const { method  } = request;
        if (method !== "requestAccounts") return next();
        if (!requestAccounts) throw new Error("WalletMiddleware - opts.requestAccounts not provided");
        // This calls the UI login function
        const accounts = await requestAccounts(request);
        response.result = accounts;
        return undefined;
    });
}
function createGenericJRPCMiddleware(targetMethod, handler) {
    return (0, _openloginJrpc.createAsyncMiddleware)(async (request, response, next)=>{
        const { method  } = request;
        if (method !== targetMethod) return next();
        if (!handler) throw new Error(`WalletMiddleware - ${targetMethod} not provided`);
        const result = await handler(request);
        response.result = result;
        return undefined;
    });
}
function createSolanaMiddleware(providerHandlers) {
    const { getAccounts , requestAccounts , signTransaction , signAndSendTransaction , signAllTransactions , signMessage , getPrivateKey , getSecretKey  } = providerHandlers;
    return (0, _openloginJrpc.mergeMiddleware)([
        createRequestAccountsMiddleware({
            requestAccounts
        }),
        createGetAccountsMiddleware({
            getAccounts
        }),
        createGenericJRPCMiddleware("signTransaction", signTransaction),
        createGenericJRPCMiddleware("signAndSendTransaction", signAndSendTransaction),
        createGenericJRPCMiddleware("signAllTransactions", signAllTransactions),
        createGenericJRPCMiddleware("signMessage", signMessage),
        createGenericJRPCMiddleware("solanaPrivateKey", getPrivateKey),
        createGenericJRPCMiddleware("private_key", getPrivateKey),
        createGenericJRPCMiddleware("solanaSecretKey", getSecretKey)
    ]);
}
function createChainSwitchMiddleware(_ref3) {
    let { addNewChainConfig , switchSolanaChain  } = _ref3;
    return (0, _openloginJrpc.mergeMiddleware)([
        createGenericJRPCMiddleware("addSolanaChain", addNewChainConfig),
        createGenericJRPCMiddleware("switchSolanaChain", switchSolanaChain)
    ]);
}
function createAccountMiddleware(_ref4) {
    let { updatePrivatekey  } = _ref4;
    return (0, _openloginJrpc.mergeMiddleware)([
        createGenericJRPCMiddleware("updateAccount", updatePrivatekey)
    ]);
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
class BaseInjectedProvider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread$3(_objectSpread$3({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).SOLANA
                })
            },
            state
        });
    }
    async switchChain(_) {
        throw (0, _base.WalletLoginError).unsupportedOperation("Chain switching is not supported by this adapter");
    }
    async setupProvider(injectedProvider) {
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        const providerHandlers = this.getProviderHandlers(injectedProvider);
        const solanaMiddleware = createSolanaMiddleware(providerHandlers);
        engine.push(solanaMiddleware);
        const configMiddleware = createConfigMiddleware(this.config.chainConfig);
        engine.push(configMiddleware);
        const injectedProviderProxy = this.getInjectedProviderProxy(injectedProvider);
        if (injectedProviderProxy) engine.push(injectedProviderProxy);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
        await this.lookupNetwork();
    }
    async lookupNetwork() {
        const { chainConfig  } = this.config;
        this.update({
            chainId: chainConfig.chainId
        });
        return chainConfig.chainId || "";
    }
    getInjectedProviderProxy(_) {
        return undefined;
    }
}
const getBaseProviderHandlers = (injectedProvider)=>{
    const providerHandlers = {
        requestAccounts: async ()=>{
            return injectedProvider.publicKey ? [
                (0, _bs58Default.default).encode(injectedProvider.publicKey.toBytes())
            ] : [];
        },
        getAccounts: async ()=>injectedProvider.publicKey ? [
                (0, _bs58Default.default).encode(injectedProvider.publicKey.toBytes())
            ] : [],
        getPrivateKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        getSecretKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        signTransaction: async (req)=>{
            const transaction = await injectedProvider.signTransaction(req.params.message);
            return transaction;
        },
        signMessage: async (req)=>{
            const sigData = await injectedProvider.signMessage(req.params.message, req.params.display);
            return sigData.signature;
        },
        signAllTransactions: async (req)=>{
            var _req$params, _req$params2;
            if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message) || !((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message.length)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const transaction = await injectedProvider.signAllTransactions(req.params.message);
            return transaction;
        },
        signAndSendTransaction: async (req)=>{
            const txRes = await injectedProvider.signAndSendTransaction(req.params.message);
            return {
                signature: txRes.signature
            };
        }
    };
    return providerHandlers;
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
function createInjectedProviderProxyMiddleware(provider) {
    return (0, _openloginJrpc.createAsyncMiddleware)(async (req, res, _next)=>{
        const result = await provider.request(_objectSpread$2({}, req));
        res.result = result;
    });
}
class PhantomInjectedProvider extends BaseInjectedProvider {
    getProviderHandlers(injectedProvider) {
        return getBaseProviderHandlers(injectedProvider);
    }
    getInjectedProviderProxy(injectedProvider) {
        return createInjectedProviderProxyMiddleware(injectedProvider);
    }
}
const isVersionTransction = (transaction)=>transaction.version !== undefined || transaction instanceof (0, _web3Js.VersionedTransaction);
const getSlopeHandlers = (injectedProvider, getProviderEngineProxy)=>{
    const providerHandlers = {
        requestAccounts: async ()=>{
            const { data  } = await injectedProvider.connect();
            return [
                data.publicKey
            ];
        },
        getAccounts: async ()=>{
            const { data  } = await injectedProvider.connect();
            return [
                data.publicKey
            ];
        },
        getPrivateKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        getSecretKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        signTransaction: async (req)=>{
            const txMessage = req.params.message;
            if (!txMessage) throw (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
                message: "Invalid transaction message"
            });
            const message = isVersionTransction(txMessage) ? txMessage.message.serialize() : txMessage.serializeMessage();
            const { data  } = await injectedProvider.signTransaction((0, _bs58Default.default).encode(message));
            if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
            const publicKey = new (0, _web3Js.PublicKey)(data.publicKey);
            const signature = (0, _bs58Default.default).decode(data.signature);
            txMessage.addSignature(publicKey, Buffer.from(signature));
            return txMessage;
        },
        signMessage: async (req)=>{
            const response = await injectedProvider.signMessage(req.params.message);
            return (0, _bs58Default.default).decode(response.data.signature);
        },
        signAndSendTransaction: async (req)=>{
            const provider = getProviderEngineProxy();
            if (!provider) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const txMessage = req.params.message;
            if (!txMessage) throw (0, _ethRpcErrors.ethErrors).rpc.invalidRequest({
                message: "Invalid transaction message"
            });
            const message = isVersionTransction(txMessage) ? txMessage.message.serialize() : txMessage.serializeMessage();
            const { data  } = await injectedProvider.signTransaction((0, _bs58Default.default).encode(message));
            if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
            const publicKey = new (0, _web3Js.PublicKey)(data.publicKey);
            const signature = (0, _bs58Default.default).decode(data.signature);
            txMessage.addSignature(publicKey, Buffer.from(signature));
            const chainConfig = await provider.request({
                method: "solana_provider_config",
                params: []
            });
            const conn = new (0, _web3Js.Connection)(chainConfig.rpcTarget);
            const res = await conn.sendRawTransaction(txMessage.serialize());
            return {
                signature: res
            };
        },
        signAllTransactions: async (req)=>{
            var _req$params, _req$params2, _data$signatures;
            if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message) || !((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message.length)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const allTxns = req.params.message;
            const { length  } = allTxns;
            const unsignedTx = [];
            for(let i = 0; i < length; i++){
                const item = allTxns[i];
                const message = isVersionTransction(item) ? item.message.serialize() : item.serializeMessage();
                unsignedTx.push((0, _bs58Default.default).encode(message));
            }
            const { msg , data  } = await injectedProvider.signAllTransactions(unsignedTx);
            if (!data.publicKey || ((_data$signatures = data.signatures) === null || _data$signatures === void 0 ? void 0 : _data$signatures.length) !== length) throw new Error(msg);
            const publicKey = new (0, _web3Js.PublicKey)(data.publicKey);
            for(let i = 0; i < length; i++){
                const signature = (0, _bs58Default.default).decode(data.signatures[i]);
                allTxns[i].addSignature(publicKey, Buffer.from(signature));
            }
            return allTxns;
        }
    };
    return providerHandlers;
};
class SlopeInjectedProxyProvider extends BaseInjectedProvider {
    getProviderHandlers(injectedProvider) {
        return getSlopeHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
    }
}
const getSolflareHandlers = (injectedProvider, getProviderEngineProxy)=>{
    const solflareProviderHandlers = getBaseProviderHandlers(injectedProvider);
    solflareProviderHandlers.signAndSendTransaction = async (req)=>{
        const provider = getProviderEngineProxy();
        if (!provider) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const transaction = await injectedProvider.signTransaction(req.params.message);
        const chainConfig = await provider.request({
            method: "solana_provider_config",
            params: []
        });
        const conn = new (0, _web3Js.Connection)(chainConfig.rpcTarget);
        const res = await conn.sendRawTransaction(transaction.serialize());
        return {
            signature: res
        };
    };
    return solflareProviderHandlers;
};
class SolflareInjectedProvider extends BaseInjectedProvider {
    getProviderHandlers(injectedProvider) {
        return getSolflareHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
    }
}
const getTorusHandlers = (injectedProvider)=>{
    const providerHandlers = {
        requestAccounts: async ()=>{
            const accounts = await injectedProvider.request({
                method: "solana_requestAccounts",
                params: {}
            });
            return accounts;
        },
        getAccounts: async ()=>{
            const accounts = await injectedProvider.request({
                method: "solana_requestAccounts",
                params: {}
            });
            return accounts;
        },
        getPrivateKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        getSecretKey: async ()=>{
            throw (0, _ethRpcErrors.ethErrors).rpc.methodNotSupported();
        },
        signMessage: async (req)=>{
            var _req$params;
            if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const message = await injectedProvider.signMessage(req.params.message);
            return message;
        },
        signTransaction: async (req)=>{
            var _req$params2;
            if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const txMessage = req.params.message;
            const response = await injectedProvider.signTransaction(txMessage);
            return response;
        },
        signAndSendTransaction: async (req)=>{
            var _req$params3;
            if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const txMessage = req.params.message;
            const response = await injectedProvider.sendTransaction(txMessage);
            return {
                signature: response
            };
        },
        signAllTransactions: async (req)=>{
            var _req$params4, _req$params5;
            if (!((_req$params4 = req.params) !== null && _req$params4 !== void 0 && _req$params4.message) || !((_req$params5 = req.params) !== null && _req$params5 !== void 0 && _req$params5.message.length)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const transactions = req.params.message;
            const response = await injectedProvider.signAllTransactions(transactions);
            return response;
        }
    };
    return providerHandlers;
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
class TorusInjectedProvider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread$1(_objectSpread$1({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).SOLANA
                })
            },
            state
        });
    }
    async switchChain(params) {
        // overrides the base provider implementation
        await this.provider.request({
            method: "switchSolanaChain",
            params: [
                {
                    chainId: params.chainId
                }
            ]
        });
    }
    async addChain(chainConfig) {
        super.addChain(chainConfig);
        await this.provider.request({
            method: "addNewChainConfig",
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
        });
    }
    async setupProvider(injectedProvider) {
        this.handleInjectedProviderUpdate(injectedProvider);
        await this.setupEngine(injectedProvider);
    }
    async lookupNetwork() {
        if (!this.provider) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Torus solana provider is not initialized",
            code: 4902
        });
        const { chainId  } = this.config.chainConfig;
        const connectedChainId = await this.provider.request({
            method: "solana_chainId"
        });
        const connectedHexChainId = (0, _base.isHexStrict)(connectedChainId.toString()) ? connectedChainId : `0x${parseInt(connectedChainId, 10).toString(16)}`;
        if (chainId !== connectedHexChainId) throw (0, _base.WalletInitializationError).rpcConnectionError(`Invalid network, net_version is: ${connectedHexChainId}, expected: ${chainId}`);
        this.update({
            chainId: connectedHexChainId
        });
        this.provider.emit("connect", {
            chainId: this.state.chainId
        });
        this.provider.emit("chainChanged", this.state.chainId);
        return this.state.chainId;
    }
    async setupEngine(injectedProvider) {
        const providerHandlers = getTorusHandlers(injectedProvider);
        const solanaMiddleware = createSolanaMiddleware(providerHandlers);
        const injectedProviderProxy = createInjectedProviderProxyMiddleware(injectedProvider);
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        engine.push(solanaMiddleware);
        engine.push(injectedProviderProxy);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
        await this.lookupNetwork();
    }
    async handleInjectedProviderUpdate(injectedProvider) {
        injectedProvider.on("accountsChanged", async (accounts)=>{
            this.provider.emit("accountsChanged", accounts);
        });
        injectedProvider.on("chainChanged", async (chainId)=>{
            const connectedHexChainId = (0, _base.isHexStrict)(chainId) ? chainId : `0x${parseInt(chainId, 10).toString(16)}`;
            // Check if chainId changed and trigger event
            this.configure({
                chainConfig: _objectSpread$1(_objectSpread$1({}, this.config.chainConfig), {}, {
                    chainId: connectedHexChainId
                })
            });
            await this.setupProvider(injectedProvider);
        });
    }
}
async function getProviderHandlers(_ref) {
    let { privKey , getProviderEngineProxy  } = _ref;
    const keyPairGenerator = ()=>{
        return (0, _web3Js.Keypair).fromSecretKey(Buffer.from(privKey, "hex"));
    };
    if (typeof privKey !== "string") throw (0, _base.WalletInitializationError).invalidParams("privKey must be a string");
    const keyPair = keyPairGenerator();
    const providerHandlers = {
        requestAccounts: async ()=>{
            return [
                keyPair.publicKey.toBase58()
            ];
        },
        getAccounts: async ()=>[
                keyPair.publicKey.toBase58()
            ],
        getPrivateKey: async ()=>privKey,
        getSecretKey: async ()=>(0, _bs58Default.default).encode(keyPair.secretKey),
        signTransaction: async (req)=>{
            var _req$params;
            if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const transaction = req.params.message;
            if (transaction.version !== undefined || transaction instanceof (0, _web3Js.VersionedTransaction)) transaction.sign([
                keyPair
            ]);
            else transaction.partialSign(keyPair);
            return transaction;
        },
        signMessage: async (req)=>{
            var _req$params2;
            if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const signedMsg = (0, _tweetnaclJsDefault.default).sign.detached(req.params.message, keyPair.secretKey);
            return signedMsg;
        },
        signAndSendTransaction: async (req)=>{
            var _req$params3;
            if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const _providerEngineProxy = getProviderEngineProxy();
            if (!_providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
                message: "Provider is not initialized",
                code: 4902
            });
            const transaction = req.params.message;
            if (transaction.version !== undefined || transaction instanceof (0, _web3Js.VersionedTransaction)) transaction.sign([
                keyPair
            ]);
            else transaction.partialSign(keyPair);
            const sig = await _providerEngineProxy.request({
                method: "sendTransaction",
                params: [
                    Buffer.from(transaction.serialize()).toString("base64"),
                    {
                        encoding: "base64",
                        preflightCommitment: "confirmed"
                    }
                ]
            });
            return {
                signature: sig
            };
        },
        signAllTransactions: async (req)=>{
            var _req$params4, _req$params5, _req$params6;
            if (!((_req$params4 = req.params) !== null && _req$params4 !== void 0 && _req$params4.message) || !((_req$params5 = req.params) !== null && _req$params5 !== void 0 && _req$params5.message.length)) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("message");
            const txns = (_req$params6 = req.params) === null || _req$params6 === void 0 ? void 0 : _req$params6.message;
            for (const tx of txns || []){
                const transaction = tx;
                if (transaction.version !== undefined || transaction instanceof (0, _web3Js.VersionedTransaction)) transaction.sign([
                    keyPair
                ]);
                else transaction.partialSign(keyPair);
            }
            return txns;
        }
    };
    return providerHandlers;
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
class SolanaPrivateKeyProvider extends (0, _baseProvider.BaseProvider) {
    constructor(_ref){
        let { config , state  } = _ref;
        super({
            config: {
                chainConfig: _objectSpread(_objectSpread({}, config.chainConfig), {}, {
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).SOLANA
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
        const providerHandlers = await getProviderHandlers({
            privKey,
            getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
        });
        const solanaMiddleware = createSolanaMiddleware(providerHandlers);
        const engine = new (0, _openloginJrpc.JRPCEngine)();
        const { networkMiddleware  } = createJsonRpcClient(this.config.chainConfig);
        engine.push(this.getChainSwitchMiddleware());
        engine.push(this.getAccountMiddleware());
        engine.push(solanaMiddleware);
        engine.push(networkMiddleware);
        const provider = (0, _baseControllers.providerFromEngine)(engine);
        this.updateProviderEngineProxy(provider);
        await this.lookupNetwork();
    }
    async updateAccount(params) {
        if (!this._providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const existingKey = await this._providerEngineProxy.request({
            method: "solanaPrivateKey"
        });
        if (existingKey !== params.privateKey) {
            await this.setupProvider(params.privateKey);
            this._providerEngineProxy.emit("accountsChanged", {
                accounts: await this._providerEngineProxy.request({
                    method: "requestAccounts"
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
            method: "solanaPrivateKey"
        });
        await this.setupProvider(privKey);
    }
    async lookupNetwork() {
        if (!this._providerEngineProxy) throw (0, _ethRpcErrors.ethErrors).provider.custom({
            message: "Provider is not initialized",
            code: 4902
        });
        const health = await this._providerEngineProxy.request({
            method: "getHealth",
            params: []
        });
        const { chainConfig  } = this.config;
        if (health !== "ok") throw (0, _base.WalletInitializationError).rpcConnectionError(`Failed to lookup network for following rpc target: ${chainConfig.rpcTarget}`);
        this.update({
            chainId: chainConfig.chainId
        });
        if (this.state.chainId !== chainConfig.chainId) {
            this.provider.emit("chainChanged", this.state.chainId);
            this.provider.emit("connect", {
                chainId: this.state.chainId
            });
        }
        return this.state.chainId;
    }
    getChainSwitchMiddleware() {
        const chainSwitchHandlers = {
            addNewChainConfig: async (req)=>{
                if (!req.params) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing request params");
                const { chainId , chainName , rpcUrls , blockExplorerUrls , nativeCurrency  } = req.params;
                if (!chainId) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing chainId in chainParams");
                if (!rpcUrls || rpcUrls.length === 0) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing rpcUrls in chainParams");
                if (!nativeCurrency) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing nativeCurrency in chainParams");
                this.addChain({
                    chainNamespace: (0, _base.CHAIN_NAMESPACES).SOLANA,
                    chainId,
                    ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "SOL",
                    tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Solana",
                    displayName: chainName,
                    rpcTarget: rpcUrls[0],
                    blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || "",
                    decimals: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.decimals) || 9
                });
            },
            switchSolanaChain: async (req)=>{
                if (!req.params) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing request params");
                if (!req.params.chainId) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing chainId");
                await this.switchChain(req.params);
            }
        };
        const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
        return chainSwitchMiddleware;
    }
    getAccountMiddleware() {
        const accountHandlers = {
            updatePrivatekey: async (req)=>{
                if (!req.params) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing request params");
                if (!req.params.privateKey) throw (0, _ethRpcErrors.ethErrors).rpc.invalidParams("Missing privateKey");
                const { privateKey  } = req.params;
                await this.updateAccount({
                    privateKey
                });
            }
        };
        return createAccountMiddleware(accountHandlers);
    }
}
(0, _definePropertyDefault.default)(SolanaPrivateKeyProvider, "getProviderInstance", async (params)=>{
    const providerFactory = new SolanaPrivateKeyProvider({
        config: {
            chainConfig: params.chainConfig
        }
    });
    await providerFactory.setupProvider(params.privKey);
    return providerFactory;
});
class SolanaWallet {
    constructor(provider){
        (0, _definePropertyDefault.default)(this, "provider", void 0);
        this.provider = provider;
    }
    async requestAccounts() {
        const accounts = await this.provider.request({
            method: "requestAccounts",
            params: {}
        });
        return accounts;
    }
    async signAndSendTransaction(transaction) {
        const { signature  } = await this.provider.request({
            method: "signAndSendTransaction",
            params: {
                message: transaction
            }
        });
        return {
            signature
        };
    }
    async signTransaction(transaction) {
        const signedTransaction = await this.provider.request({
            method: "signTransaction",
            params: {
                message: transaction
            }
        });
        return signedTransaction;
    }
    async signAllTransactions(transactions) {
        const signedTransactions = await this.provider.request({
            method: "signAllTransactions",
            params: {
                message: transactions
            }
        });
        return signedTransactions;
    }
    async signMessage(data) {
        const response = await this.provider.request({
            method: "signMessage",
            params: {
                message: data
            }
        });
        return response;
    }
    async request(args) {
        const result = await this.provider.request(args);
        return result;
    }
}

},{"7da3bce6a5f2a55f":"fCgem","@babel/runtime/helpers/defineProperty":"4x6r7","@toruslabs/base-controllers":"bWbve","@toruslabs/openlogin-jrpc":"hHcJo","@web3auth/base":"7HmU4","@web3auth/base-provider":"h0enr","bs58":"4ji3p","eth-rpc-errors":"apfts","@solana/web3.js":"5JBKN","@toruslabs/tweetnacl-js":"kFi2f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ji3p":[function(require,module,exports) {
var basex = require("e2eb28f8482e73af");
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
module.exports = basex(ALPHABET);

},{"e2eb28f8482e73af":"inVbl"}],"inVbl":[function(require,module,exports) {
"use strict";
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = require("9dbabf458d1d34b5").Buffer;
function base(ALPHABET) {
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
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) source = _Buffer.from(source);
        if (!_Buffer.isBuffer(source)) throw new TypeError("Expected Buffer");
        if (source.length === 0) return "";
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
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
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return _Buffer.alloc(0);
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
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
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0x00, 0, zeroes);
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;

},{"9dbabf458d1d34b5":"eW7r9"}],"5JBKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Account", ()=>Account);
parcelHelpers.export(exports, "AddressLookupTableAccount", ()=>AddressLookupTableAccount);
parcelHelpers.export(exports, "AddressLookupTableInstruction", ()=>AddressLookupTableInstruction);
parcelHelpers.export(exports, "AddressLookupTableProgram", ()=>AddressLookupTableProgram);
parcelHelpers.export(exports, "Authorized", ()=>Authorized);
parcelHelpers.export(exports, "BLOCKHASH_CACHE_TIMEOUT_MS", ()=>BLOCKHASH_CACHE_TIMEOUT_MS);
parcelHelpers.export(exports, "BPF_LOADER_DEPRECATED_PROGRAM_ID", ()=>BPF_LOADER_DEPRECATED_PROGRAM_ID);
parcelHelpers.export(exports, "BPF_LOADER_PROGRAM_ID", ()=>BPF_LOADER_PROGRAM_ID);
parcelHelpers.export(exports, "BpfLoader", ()=>BpfLoader);
parcelHelpers.export(exports, "COMPUTE_BUDGET_INSTRUCTION_LAYOUTS", ()=>COMPUTE_BUDGET_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "ComputeBudgetInstruction", ()=>ComputeBudgetInstruction);
parcelHelpers.export(exports, "ComputeBudgetProgram", ()=>ComputeBudgetProgram);
parcelHelpers.export(exports, "Connection", ()=>Connection);
parcelHelpers.export(exports, "Ed25519Program", ()=>Ed25519Program);
parcelHelpers.export(exports, "Enum", ()=>Enum);
parcelHelpers.export(exports, "EpochSchedule", ()=>EpochSchedule);
parcelHelpers.export(exports, "FeeCalculatorLayout", ()=>FeeCalculatorLayout);
parcelHelpers.export(exports, "Keypair", ()=>Keypair);
parcelHelpers.export(exports, "LAMPORTS_PER_SOL", ()=>LAMPORTS_PER_SOL);
parcelHelpers.export(exports, "LOOKUP_TABLE_INSTRUCTION_LAYOUTS", ()=>LOOKUP_TABLE_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "Loader", ()=>Loader);
parcelHelpers.export(exports, "Lockup", ()=>Lockup);
parcelHelpers.export(exports, "MAX_SEED_LENGTH", ()=>MAX_SEED_LENGTH);
parcelHelpers.export(exports, "Message", ()=>Message);
parcelHelpers.export(exports, "MessageAccountKeys", ()=>MessageAccountKeys);
parcelHelpers.export(exports, "MessageV0", ()=>MessageV0);
parcelHelpers.export(exports, "NONCE_ACCOUNT_LENGTH", ()=>NONCE_ACCOUNT_LENGTH);
parcelHelpers.export(exports, "NonceAccount", ()=>NonceAccount);
parcelHelpers.export(exports, "PACKET_DATA_SIZE", ()=>PACKET_DATA_SIZE);
parcelHelpers.export(exports, "PUBLIC_KEY_LENGTH", ()=>PUBLIC_KEY_LENGTH);
parcelHelpers.export(exports, "PublicKey", ()=>PublicKey);
parcelHelpers.export(exports, "SIGNATURE_LENGTH_IN_BYTES", ()=>SIGNATURE_LENGTH_IN_BYTES);
parcelHelpers.export(exports, "SOLANA_SCHEMA", ()=>SOLANA_SCHEMA);
parcelHelpers.export(exports, "STAKE_CONFIG_ID", ()=>STAKE_CONFIG_ID);
parcelHelpers.export(exports, "STAKE_INSTRUCTION_LAYOUTS", ()=>STAKE_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "SYSTEM_INSTRUCTION_LAYOUTS", ()=>SYSTEM_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "SYSVAR_CLOCK_PUBKEY", ()=>SYSVAR_CLOCK_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_EPOCH_SCHEDULE_PUBKEY", ()=>SYSVAR_EPOCH_SCHEDULE_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_INSTRUCTIONS_PUBKEY", ()=>SYSVAR_INSTRUCTIONS_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_RECENT_BLOCKHASHES_PUBKEY", ()=>SYSVAR_RECENT_BLOCKHASHES_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_RENT_PUBKEY", ()=>SYSVAR_RENT_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_REWARDS_PUBKEY", ()=>SYSVAR_REWARDS_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_SLOT_HASHES_PUBKEY", ()=>SYSVAR_SLOT_HASHES_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_SLOT_HISTORY_PUBKEY", ()=>SYSVAR_SLOT_HISTORY_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_STAKE_HISTORY_PUBKEY", ()=>SYSVAR_STAKE_HISTORY_PUBKEY);
parcelHelpers.export(exports, "Secp256k1Program", ()=>Secp256k1Program);
parcelHelpers.export(exports, "SendTransactionError", ()=>SendTransactionError);
parcelHelpers.export(exports, "SolanaJSONRPCError", ()=>SolanaJSONRPCError);
parcelHelpers.export(exports, "SolanaJSONRPCErrorCode", ()=>SolanaJSONRPCErrorCode);
parcelHelpers.export(exports, "StakeAuthorizationLayout", ()=>StakeAuthorizationLayout);
parcelHelpers.export(exports, "StakeInstruction", ()=>StakeInstruction);
parcelHelpers.export(exports, "StakeProgram", ()=>StakeProgram);
parcelHelpers.export(exports, "Struct", ()=>Struct);
parcelHelpers.export(exports, "SystemInstruction", ()=>SystemInstruction);
parcelHelpers.export(exports, "SystemProgram", ()=>SystemProgram);
parcelHelpers.export(exports, "Transaction", ()=>Transaction);
parcelHelpers.export(exports, "TransactionExpiredBlockheightExceededError", ()=>TransactionExpiredBlockheightExceededError);
parcelHelpers.export(exports, "TransactionExpiredNonceInvalidError", ()=>TransactionExpiredNonceInvalidError);
parcelHelpers.export(exports, "TransactionExpiredTimeoutError", ()=>TransactionExpiredTimeoutError);
parcelHelpers.export(exports, "TransactionInstruction", ()=>TransactionInstruction);
parcelHelpers.export(exports, "TransactionMessage", ()=>TransactionMessage);
parcelHelpers.export(exports, "TransactionStatus", ()=>TransactionStatus);
parcelHelpers.export(exports, "VALIDATOR_INFO_KEY", ()=>VALIDATOR_INFO_KEY);
parcelHelpers.export(exports, "VERSION_PREFIX_MASK", ()=>VERSION_PREFIX_MASK);
parcelHelpers.export(exports, "VOTE_PROGRAM_ID", ()=>VOTE_PROGRAM_ID);
parcelHelpers.export(exports, "ValidatorInfo", ()=>ValidatorInfo);
parcelHelpers.export(exports, "VersionedMessage", ()=>VersionedMessage);
parcelHelpers.export(exports, "VersionedTransaction", ()=>VersionedTransaction);
parcelHelpers.export(exports, "VoteAccount", ()=>VoteAccount);
parcelHelpers.export(exports, "VoteAuthorizationLayout", ()=>VoteAuthorizationLayout);
parcelHelpers.export(exports, "VoteInit", ()=>VoteInit);
parcelHelpers.export(exports, "VoteInstruction", ()=>VoteInstruction);
parcelHelpers.export(exports, "VoteProgram", ()=>VoteProgram);
parcelHelpers.export(exports, "clusterApiUrl", ()=>clusterApiUrl);
parcelHelpers.export(exports, "sendAndConfirmRawTransaction", ()=>sendAndConfirmRawTransaction);
parcelHelpers.export(exports, "sendAndConfirmTransaction", ()=>sendAndConfirmTransaction);
var _buffer = require("buffer");
var _sha512 = require("@noble/hashes/sha512");
var _ed25519 = require("@noble/ed25519");
var _bnJs = require("bn.js");
var _bnJsDefault = parcelHelpers.interopDefault(_bnJs);
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var _sha256 = require("@noble/hashes/sha256");
var _borsh = require("borsh");
var _bufferLayout = require("@solana/buffer-layout");
var _bigintBuffer = require("bigint-buffer");
var _superstruct = require("superstruct");
var _browser = require("jayson/lib/client/browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _client = require("rpc-websockets/dist/lib/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _websocketBrowser = require("rpc-websockets/dist/lib/client/websocket.browser");
var _websocketBrowserDefault = parcelHelpers.interopDefault(_websocketBrowser);
var _sha3 = require("@noble/hashes/sha3");
var _hmac = require("@noble/hashes/hmac");
var _secp256K1 = require("@noble/secp256k1");
/**
 * A 64 byte secret key, the first 32 bytes of which is the
 * private scalar and the last 32 bytes is the public key.
 * Read more: https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
 */ _ed25519.utils.sha512Sync = (...m)=>(0, _sha512.sha512)(_ed25519.utils.concatBytes(...m));
const generatePrivateKey = _ed25519.utils.randomPrivateKey;
const generateKeypair = ()=>{
    const privateScalar = _ed25519.utils.randomPrivateKey();
    const publicKey = getPublicKey(privateScalar);
    const secretKey = new Uint8Array(64);
    secretKey.set(privateScalar);
    secretKey.set(publicKey, 32);
    return {
        publicKey,
        secretKey
    };
};
const getPublicKey = _ed25519.sync.getPublicKey;
function isOnCurve(publicKey) {
    try {
        _ed25519.Point.fromHex(publicKey, true);
        return true;
    } catch  {
        return false;
    }
}
const sign = (message, secretKey)=>_ed25519.sync.sign(message, secretKey.slice(0, 32));
const verify = _ed25519.sync.verify;
const toBuffer = (arr)=>{
    if ((0, _buffer.Buffer).isBuffer(arr)) return arr;
    else if (arr instanceof Uint8Array) return (0, _buffer.Buffer).from(arr.buffer, arr.byteOffset, arr.byteLength);
    else return (0, _buffer.Buffer).from(arr);
};
// Class wrapping a plain object
class Struct {
    constructor(properties){
        Object.assign(this, properties);
    }
    encode() {
        return (0, _buffer.Buffer).from((0, _borsh.serialize)(SOLANA_SCHEMA, this));
    }
    static decode(data) {
        return (0, _borsh.deserialize)(SOLANA_SCHEMA, this, data);
    }
    static decodeUnchecked(data) {
        return (0, _borsh.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
    }
}
// Class representing a Rust-compatible enum, since enums are only strings or
// numbers in pure JS
class Enum extends Struct {
    constructor(properties){
        super(properties);
        this.enum = "";
        if (Object.keys(properties).length !== 1) throw new Error("Enum can only take single value");
        Object.keys(properties).map((key)=>{
            this.enum = key;
        });
    }
}
const SOLANA_SCHEMA = new Map();
let _Symbol$toStringTag;
/**
 * Maximum length of derived pubkey seed
 */ const MAX_SEED_LENGTH = 32;
/**
 * Size of public key in bytes
 */ const PUBLIC_KEY_LENGTH = 32;
/**
 * Value to be converted into public key
 */ function isPublicKeyData(value) {
    return value._bn !== undefined;
}
// local counter used by PublicKey.unique()
let uniquePublicKeyCounter = 1;
/**
 * A public key
 */ _Symbol$toStringTag = Symbol.toStringTag;
class PublicKey extends Struct {
    /** @internal */ /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */ constructor(value){
        super({});
        this._bn = void 0;
        if (isPublicKeyData(value)) this._bn = value._bn;
        else {
            if (typeof value === "string") {
                // assume base 58 encoding by default
                const decoded = (0, _bs58Default.default).decode(value);
                if (decoded.length != PUBLIC_KEY_LENGTH) throw new Error(`Invalid public key input`);
                this._bn = new (0, _bnJsDefault.default)(decoded);
            } else this._bn = new (0, _bnJsDefault.default)(value);
            if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) throw new Error(`Invalid public key input`);
        }
    }
    /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */ static unique() {
        const key = new PublicKey(uniquePublicKeyCounter);
        uniquePublicKeyCounter += 1;
        return new PublicKey(key.toBuffer());
    }
    /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */ /**
   * Checks if two publicKeys are equal
   */ equals(publicKey) {
        return this._bn.eq(publicKey._bn);
    }
    /**
   * Return the base-58 representation of the public key
   */ toBase58() {
        return (0, _bs58Default.default).encode(this.toBytes());
    }
    toJSON() {
        return this.toBase58();
    }
    /**
   * Return the byte array representation of the public key in big endian
   */ toBytes() {
        const buf = this.toBuffer();
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    /**
   * Return the Buffer representation of the public key in big endian
   */ toBuffer() {
        const b = this._bn.toArrayLike((0, _buffer.Buffer));
        if (b.length === PUBLIC_KEY_LENGTH) return b;
        const zeroPad = (0, _buffer.Buffer).alloc(32);
        b.copy(zeroPad, 32 - b.length);
        return zeroPad;
    }
    get [_Symbol$toStringTag]() {
        return `PublicKey(${this.toString()})`;
    }
    /**
   * Return the base-58 representation of the public key
   */ toString() {
        return this.toBase58();
    }
    /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */ /* eslint-disable require-await */ static async createWithSeed(fromPublicKey, seed, programId) {
        const buffer = (0, _buffer.Buffer).concat([
            fromPublicKey.toBuffer(),
            (0, _buffer.Buffer).from(seed),
            programId.toBuffer()
        ]);
        const publicKeyBytes = (0, _sha256.sha256)(buffer);
        return new PublicKey(publicKeyBytes);
    }
    /**
   * Derive a program address from seeds and a program ID.
   */ /* eslint-disable require-await */ static createProgramAddressSync(seeds, programId) {
        let buffer = (0, _buffer.Buffer).alloc(0);
        seeds.forEach(function(seed) {
            if (seed.length > MAX_SEED_LENGTH) throw new TypeError(`Max seed length exceeded`);
            buffer = (0, _buffer.Buffer).concat([
                buffer,
                toBuffer(seed)
            ]);
        });
        buffer = (0, _buffer.Buffer).concat([
            buffer,
            programId.toBuffer(),
            (0, _buffer.Buffer).from("ProgramDerivedAddress")
        ]);
        const publicKeyBytes = (0, _sha256.sha256)(buffer);
        if (isOnCurve(publicKeyBytes)) throw new Error(`Invalid seeds, address must fall off the curve`);
        return new PublicKey(publicKeyBytes);
    }
    /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */ /* eslint-disable require-await */ static async createProgramAddress(seeds, programId) {
        return this.createProgramAddressSync(seeds, programId);
    }
    /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */ static findProgramAddressSync(seeds, programId) {
        let nonce = 255;
        let address;
        while(nonce != 0){
            try {
                const seedsWithNonce = seeds.concat((0, _buffer.Buffer).from([
                    nonce
                ]));
                address = this.createProgramAddressSync(seedsWithNonce, programId);
            } catch (err) {
                if (err instanceof TypeError) throw err;
                nonce--;
                continue;
            }
            return [
                address,
                nonce
            ];
        }
        throw new Error(`Unable to find a viable program address nonce`);
    }
    /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */ static async findProgramAddress(seeds, programId) {
        return this.findProgramAddressSync(seeds, programId);
    }
    /**
   * Check that a pubkey is on the ed25519 curve.
   */ static isOnCurve(pubkeyData) {
        const pubkey = new PublicKey(pubkeyData);
        return isOnCurve(pubkey.toBytes());
    }
}
PublicKey.default = new PublicKey("11111111111111111111111111111111");
SOLANA_SCHEMA.set(PublicKey, {
    kind: "struct",
    fields: [
        [
            "_bn",
            "u256"
        ]
    ]
});
/**
 * An account key pair (public and secret keys).
 *
 * @deprecated since v1.10.0, please use {@link Keypair} instead.
 */ class Account {
    /** @internal */ /** @internal */ /**
   * Create a new Account object
   *
   * If the secretKey parameter is not provided a new key pair is randomly
   * created for the account
   *
   * @param secretKey Secret key for the account
   */ constructor(secretKey){
        this._publicKey = void 0;
        this._secretKey = void 0;
        if (secretKey) {
            const secretKeyBuffer = toBuffer(secretKey);
            if (secretKey.length !== 64) throw new Error("bad secret key size");
            this._publicKey = secretKeyBuffer.slice(32, 64);
            this._secretKey = secretKeyBuffer.slice(0, 32);
        } else {
            this._secretKey = toBuffer(generatePrivateKey());
            this._publicKey = toBuffer(getPublicKey(this._secretKey));
        }
    }
    /**
   * The public key for this account
   */ get publicKey() {
        return new PublicKey(this._publicKey);
    }
    /**
   * The **unencrypted** secret key for this account. The first 32 bytes
   * is the private scalar and the last 32 bytes is the public key.
   * Read more: https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
   */ get secretKey() {
        return (0, _buffer.Buffer).concat([
            this._secretKey,
            this._publicKey
        ], 64);
    }
}
const BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey("BPFLoader1111111111111111111111111111111111");
/**
 * Maximum over-the-wire size of a Transaction
 *
 * 1280 is IPv6 minimum MTU
 * 40 bytes is the size of the IPv6 header
 * 8 bytes is the size of the fragment header
 */ const PACKET_DATA_SIZE = 1232;
const VERSION_PREFIX_MASK = 0x7f;
const SIGNATURE_LENGTH_IN_BYTES = 64;
class TransactionExpiredBlockheightExceededError extends Error {
    constructor(signature){
        super(`Signature ${signature} has expired: block height exceeded.`);
        this.signature = void 0;
        this.signature = signature;
    }
}
Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class TransactionExpiredTimeoutError extends Error {
    constructor(signature, timeoutSeconds){
        super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is ` + "unknown if it succeeded or failed. Check signature " + `${signature} using the Solana Explorer or CLI tools.`);
        this.signature = void 0;
        this.signature = signature;
    }
}
Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
class TransactionExpiredNonceInvalidError extends Error {
    constructor(signature){
        super(`Signature ${signature} has expired: the nonce is no longer valid.`);
        this.signature = void 0;
        this.signature = signature;
    }
}
Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
});
class MessageAccountKeys {
    constructor(staticAccountKeys, accountKeysFromLookups){
        this.staticAccountKeys = void 0;
        this.accountKeysFromLookups = void 0;
        this.staticAccountKeys = staticAccountKeys;
        this.accountKeysFromLookups = accountKeysFromLookups;
    }
    keySegments() {
        const keySegments = [
            this.staticAccountKeys
        ];
        if (this.accountKeysFromLookups) {
            keySegments.push(this.accountKeysFromLookups.writable);
            keySegments.push(this.accountKeysFromLookups.readonly);
        }
        return keySegments;
    }
    get(index) {
        for (const keySegment of this.keySegments()){
            if (index < keySegment.length) return keySegment[index];
            else index -= keySegment.length;
        }
        return;
    }
    get length() {
        return this.keySegments().flat().length;
    }
    compileInstructions(instructions) {
        // Bail early if any account indexes would overflow a u8
        const U8_MAX = 255;
        if (this.length > U8_MAX + 1) throw new Error("Account index overflow encountered during compilation");
        const keyIndexMap = new Map();
        this.keySegments().flat().forEach((key, index)=>{
            keyIndexMap.set(key.toBase58(), index);
        });
        const findKeyIndex = (key)=>{
            const keyIndex = keyIndexMap.get(key.toBase58());
            if (keyIndex === undefined) throw new Error("Encountered an unknown instruction account key during compilation");
            return keyIndex;
        };
        return instructions.map((instruction)=>{
            return {
                programIdIndex: findKeyIndex(instruction.programId),
                accountKeyIndexes: instruction.keys.map((meta)=>findKeyIndex(meta.pubkey)),
                data: instruction.data
            };
        });
    }
}
/**
 * Layout for a public key
 */ const publicKey = (property = "publicKey")=>{
    return _bufferLayout.blob(32, property);
};
/**
 * Layout for a signature
 */ const signature = (property = "signature")=>{
    return _bufferLayout.blob(64, property);
};
/**
 * Layout for a Rust String type
 */ const rustString = (property = "string")=>{
    const rsl = _bufferLayout.struct([
        _bufferLayout.u32("length"),
        _bufferLayout.u32("lengthPadding"),
        _bufferLayout.blob(_bufferLayout.offset(_bufferLayout.u32(), -8), "chars")
    ], property);
    const _decode = rsl.decode.bind(rsl);
    const _encode = rsl.encode.bind(rsl);
    const rslShim = rsl;
    rslShim.decode = (b, offset)=>{
        const data = _decode(b, offset);
        return data["chars"].toString();
    };
    rslShim.encode = (str, b, offset)=>{
        const data = {
            chars: (0, _buffer.Buffer).from(str, "utf8")
        };
        return _encode(data, b, offset);
    };
    rslShim.alloc = (str)=>{
        return _bufferLayout.u32().span + _bufferLayout.u32().span + (0, _buffer.Buffer).from(str, "utf8").length;
    };
    return rslShim;
};
/**
 * Layout for an Authorized object
 */ const authorized = (property = "authorized")=>{
    return _bufferLayout.struct([
        publicKey("staker"),
        publicKey("withdrawer")
    ], property);
};
/**
 * Layout for a Lockup object
 */ const lockup = (property = "lockup")=>{
    return _bufferLayout.struct([
        _bufferLayout.ns64("unixTimestamp"),
        _bufferLayout.ns64("epoch"),
        publicKey("custodian")
    ], property);
};
/**
 *  Layout for a VoteInit object
 */ const voteInit = (property = "voteInit")=>{
    return _bufferLayout.struct([
        publicKey("nodePubkey"),
        publicKey("authorizedVoter"),
        publicKey("authorizedWithdrawer"),
        _bufferLayout.u8("commission")
    ], property);
};
/**
 *  Layout for a VoteAuthorizeWithSeedArgs object
 */ const voteAuthorizeWithSeedArgs = (property = "voteAuthorizeWithSeedArgs")=>{
    return _bufferLayout.struct([
        _bufferLayout.u32("voteAuthorizationType"),
        publicKey("currentAuthorityDerivedKeyOwnerPubkey"),
        rustString("currentAuthorityDerivedKeySeed"),
        publicKey("newAuthorized")
    ], property);
};
function getAlloc(type, fields) {
    const getItemAlloc = (item)=>{
        if (item.span >= 0) return item.span;
        else if (typeof item.alloc === "function") return item.alloc(fields[item.property]);
        else if ("count" in item && "elementLayout" in item) {
            const field = fields[item.property];
            if (Array.isArray(field)) return field.length * getItemAlloc(item.elementLayout);
        } else if ("fields" in item) // This is a `Structure` whose size needs to be recursively measured.
        return getAlloc({
            layout: item
        }, fields[item.property]);
        // Couldn't determine allocated size of layout
        return 0;
    };
    let alloc = 0;
    type.layout.fields.forEach((item)=>{
        alloc += getItemAlloc(item);
    });
    return alloc;
}
function decodeLength(bytes) {
    let len = 0;
    let size = 0;
    for(;;){
        let elem = bytes.shift();
        len |= (elem & 0x7f) << size * 7;
        size += 1;
        if ((elem & 0x80) === 0) break;
    }
    return len;
}
function encodeLength(bytes, len) {
    let rem_len = len;
    for(;;){
        let elem = rem_len & 0x7f;
        rem_len >>= 7;
        if (rem_len == 0) {
            bytes.push(elem);
            break;
        } else {
            elem |= 0x80;
            bytes.push(elem);
        }
    }
}
function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed");
}
class CompiledKeys {
    constructor(payer, keyMetaMap){
        this.payer = void 0;
        this.keyMetaMap = void 0;
        this.payer = payer;
        this.keyMetaMap = keyMetaMap;
    }
    static compile(instructions, payer) {
        const keyMetaMap = new Map();
        const getOrInsertDefault = (pubkey)=>{
            const address = pubkey.toBase58();
            let keyMeta = keyMetaMap.get(address);
            if (keyMeta === undefined) {
                keyMeta = {
                    isSigner: false,
                    isWritable: false,
                    isInvoked: false
                };
                keyMetaMap.set(address, keyMeta);
            }
            return keyMeta;
        };
        const payerKeyMeta = getOrInsertDefault(payer);
        payerKeyMeta.isSigner = true;
        payerKeyMeta.isWritable = true;
        for (const ix of instructions){
            getOrInsertDefault(ix.programId).isInvoked = true;
            for (const accountMeta of ix.keys){
                const keyMeta = getOrInsertDefault(accountMeta.pubkey);
                keyMeta.isSigner || (keyMeta.isSigner = accountMeta.isSigner);
                keyMeta.isWritable || (keyMeta.isWritable = accountMeta.isWritable);
            }
        }
        return new CompiledKeys(payer, keyMetaMap);
    }
    getMessageComponents() {
        const mapEntries = [
            ...this.keyMetaMap.entries()
        ];
        assert(mapEntries.length <= 256, "Max static account keys length exceeded");
        const writableSigners = mapEntries.filter(([, meta])=>meta.isSigner && meta.isWritable);
        const readonlySigners = mapEntries.filter(([, meta])=>meta.isSigner && !meta.isWritable);
        const writableNonSigners = mapEntries.filter(([, meta])=>!meta.isSigner && meta.isWritable);
        const readonlyNonSigners = mapEntries.filter(([, meta])=>!meta.isSigner && !meta.isWritable);
        const header = {
            numRequiredSignatures: writableSigners.length + readonlySigners.length,
            numReadonlySignedAccounts: readonlySigners.length,
            numReadonlyUnsignedAccounts: readonlyNonSigners.length
        };
        // sanity checks
        {
            assert(writableSigners.length > 0, "Expected at least one writable signer key");
            const [payerAddress] = writableSigners[0];
            assert(payerAddress === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
        }
        const staticAccountKeys = [
            ...writableSigners.map(([address])=>new PublicKey(address)),
            ...readonlySigners.map(([address])=>new PublicKey(address)),
            ...writableNonSigners.map(([address])=>new PublicKey(address)),
            ...readonlyNonSigners.map(([address])=>new PublicKey(address))
        ];
        return [
            header,
            staticAccountKeys
        ];
    }
    extractTableLookup(lookupTable) {
        const [writableIndexes, drainedWritableKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta)=>!keyMeta.isSigner && !keyMeta.isInvoked && keyMeta.isWritable);
        const [readonlyIndexes, drainedReadonlyKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta)=>!keyMeta.isSigner && !keyMeta.isInvoked && !keyMeta.isWritable);
        // Don't extract lookup if no keys were found
        if (writableIndexes.length === 0 && readonlyIndexes.length === 0) return;
        return [
            {
                accountKey: lookupTable.key,
                writableIndexes,
                readonlyIndexes
            },
            {
                writable: drainedWritableKeys,
                readonly: drainedReadonlyKeys
            }
        ];
    }
    /** @internal */ drainKeysFoundInLookupTable(lookupTableEntries, keyMetaFilter) {
        const lookupTableIndexes = new Array();
        const drainedKeys = new Array();
        for (const [address, keyMeta] of this.keyMetaMap.entries())if (keyMetaFilter(keyMeta)) {
            const key = new PublicKey(address);
            const lookupTableIndex = lookupTableEntries.findIndex((entry)=>entry.equals(key));
            if (lookupTableIndex >= 0) {
                assert(lookupTableIndex < 256, "Max lookup table index exceeded");
                lookupTableIndexes.push(lookupTableIndex);
                drainedKeys.push(key);
                this.keyMetaMap.delete(address);
            }
        }
        return [
            lookupTableIndexes,
            drainedKeys
        ];
    }
}
/**
 * An instruction to execute by a program
 *
 * @property {number} programIdIndex
 * @property {number[]} accounts
 * @property {string} data
 */ /**
 * List of instructions to be processed atomically
 */ class Message {
    constructor(args){
        this.header = void 0;
        this.accountKeys = void 0;
        this.recentBlockhash = void 0;
        this.instructions = void 0;
        this.indexToProgramIds = new Map();
        this.header = args.header;
        this.accountKeys = args.accountKeys.map((account)=>new PublicKey(account));
        this.recentBlockhash = args.recentBlockhash;
        this.instructions = args.instructions;
        this.instructions.forEach((ix)=>this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
    }
    get version() {
        return "legacy";
    }
    get staticAccountKeys() {
        return this.accountKeys;
    }
    get compiledInstructions() {
        return this.instructions.map((ix)=>({
                programIdIndex: ix.programIdIndex,
                accountKeyIndexes: ix.accounts,
                data: (0, _bs58Default.default).decode(ix.data)
            }));
    }
    get addressTableLookups() {
        return [];
    }
    getAccountKeys() {
        return new MessageAccountKeys(this.staticAccountKeys);
    }
    static compile(args) {
        const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
        const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
        const accountKeys = new MessageAccountKeys(staticAccountKeys);
        const instructions = accountKeys.compileInstructions(args.instructions).map((ix)=>({
                programIdIndex: ix.programIdIndex,
                accounts: ix.accountKeyIndexes,
                data: (0, _bs58Default.default).encode(ix.data)
            }));
        return new Message({
            header,
            accountKeys: staticAccountKeys,
            recentBlockhash: args.recentBlockhash,
            instructions
        });
    }
    isAccountSigner(index) {
        return index < this.header.numRequiredSignatures;
    }
    isAccountWritable(index) {
        const numSignedAccounts = this.header.numRequiredSignatures;
        if (index >= this.header.numRequiredSignatures) {
            const unsignedAccountIndex = index - numSignedAccounts;
            const numUnsignedAccounts = this.accountKeys.length - numSignedAccounts;
            const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
            return unsignedAccountIndex < numWritableUnsignedAccounts;
        } else {
            const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
            return index < numWritableSignedAccounts;
        }
    }
    isProgramId(index) {
        return this.indexToProgramIds.has(index);
    }
    programIds() {
        return [
            ...this.indexToProgramIds.values()
        ];
    }
    nonProgramIds() {
        return this.accountKeys.filter((_, index)=>!this.isProgramId(index));
    }
    serialize() {
        const numKeys = this.accountKeys.length;
        let keyCount = [];
        encodeLength(keyCount, numKeys);
        const instructions = this.instructions.map((instruction)=>{
            const { accounts , programIdIndex  } = instruction;
            const data = Array.from((0, _bs58Default.default).decode(instruction.data));
            let keyIndicesCount = [];
            encodeLength(keyIndicesCount, accounts.length);
            let dataCount = [];
            encodeLength(dataCount, data.length);
            return {
                programIdIndex,
                keyIndicesCount: (0, _buffer.Buffer).from(keyIndicesCount),
                keyIndices: accounts,
                dataLength: (0, _buffer.Buffer).from(dataCount),
                data
            };
        });
        let instructionCount = [];
        encodeLength(instructionCount, instructions.length);
        let instructionBuffer = (0, _buffer.Buffer).alloc(PACKET_DATA_SIZE);
        (0, _buffer.Buffer).from(instructionCount).copy(instructionBuffer);
        let instructionBufferLength = instructionCount.length;
        instructions.forEach((instruction)=>{
            const instructionLayout = _bufferLayout.struct([
                _bufferLayout.u8("programIdIndex"),
                _bufferLayout.blob(instruction.keyIndicesCount.length, "keyIndicesCount"),
                _bufferLayout.seq(_bufferLayout.u8("keyIndex"), instruction.keyIndices.length, "keyIndices"),
                _bufferLayout.blob(instruction.dataLength.length, "dataLength"),
                _bufferLayout.seq(_bufferLayout.u8("userdatum"), instruction.data.length, "data")
            ]);
            const length = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
            instructionBufferLength += length;
        });
        instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
        const signDataLayout = _bufferLayout.struct([
            _bufferLayout.blob(1, "numRequiredSignatures"),
            _bufferLayout.blob(1, "numReadonlySignedAccounts"),
            _bufferLayout.blob(1, "numReadonlyUnsignedAccounts"),
            _bufferLayout.blob(keyCount.length, "keyCount"),
            _bufferLayout.seq(publicKey("key"), numKeys, "keys"),
            publicKey("recentBlockhash")
        ]);
        const transaction = {
            numRequiredSignatures: (0, _buffer.Buffer).from([
                this.header.numRequiredSignatures
            ]),
            numReadonlySignedAccounts: (0, _buffer.Buffer).from([
                this.header.numReadonlySignedAccounts
            ]),
            numReadonlyUnsignedAccounts: (0, _buffer.Buffer).from([
                this.header.numReadonlyUnsignedAccounts
            ]),
            keyCount: (0, _buffer.Buffer).from(keyCount),
            keys: this.accountKeys.map((key)=>toBuffer(key.toBytes())),
            recentBlockhash: (0, _bs58Default.default).decode(this.recentBlockhash)
        };
        let signData = (0, _buffer.Buffer).alloc(2048);
        const length = signDataLayout.encode(transaction, signData);
        instructionBuffer.copy(signData, length);
        return signData.slice(0, length + instructionBuffer.length);
    }
    /**
   * Decode a compiled message into a Message object.
   */ static from(buffer) {
        // Slice up wire data
        let byteArray = [
            ...buffer
        ];
        const numRequiredSignatures = byteArray.shift();
        if (numRequiredSignatures !== (numRequiredSignatures & VERSION_PREFIX_MASK)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
        const numReadonlySignedAccounts = byteArray.shift();
        const numReadonlyUnsignedAccounts = byteArray.shift();
        const accountCount = decodeLength(byteArray);
        let accountKeys = [];
        for(let i = 0; i < accountCount; i++){
            const account = byteArray.slice(0, PUBLIC_KEY_LENGTH);
            byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
            accountKeys.push(new PublicKey((0, _buffer.Buffer).from(account)));
        }
        const recentBlockhash = byteArray.slice(0, PUBLIC_KEY_LENGTH);
        byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
        const instructionCount = decodeLength(byteArray);
        let instructions = [];
        for(let i = 0; i < instructionCount; i++){
            const programIdIndex = byteArray.shift();
            const accountCount = decodeLength(byteArray);
            const accounts = byteArray.slice(0, accountCount);
            byteArray = byteArray.slice(accountCount);
            const dataLength = decodeLength(byteArray);
            const dataSlice = byteArray.slice(0, dataLength);
            const data = (0, _bs58Default.default).encode((0, _buffer.Buffer).from(dataSlice));
            byteArray = byteArray.slice(dataLength);
            instructions.push({
                programIdIndex,
                accounts,
                data
            });
        }
        const messageArgs = {
            header: {
                numRequiredSignatures,
                numReadonlySignedAccounts,
                numReadonlyUnsignedAccounts
            },
            recentBlockhash: (0, _bs58Default.default).encode((0, _buffer.Buffer).from(recentBlockhash)),
            accountKeys,
            instructions
        };
        return new Message(messageArgs);
    }
}
/**
 * Message constructor arguments
 */ class MessageV0 {
    constructor(args){
        this.header = void 0;
        this.staticAccountKeys = void 0;
        this.recentBlockhash = void 0;
        this.compiledInstructions = void 0;
        this.addressTableLookups = void 0;
        this.header = args.header;
        this.staticAccountKeys = args.staticAccountKeys;
        this.recentBlockhash = args.recentBlockhash;
        this.compiledInstructions = args.compiledInstructions;
        this.addressTableLookups = args.addressTableLookups;
    }
    get version() {
        return 0;
    }
    get numAccountKeysFromLookups() {
        let count = 0;
        for (const lookup of this.addressTableLookups)count += lookup.readonlyIndexes.length + lookup.writableIndexes.length;
        return count;
    }
    getAccountKeys(args) {
        let accountKeysFromLookups;
        if (args && "accountKeysFromLookups" in args && args.accountKeysFromLookups) {
            if (this.numAccountKeysFromLookups != args.accountKeysFromLookups.writable.length + args.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
            accountKeysFromLookups = args.accountKeysFromLookups;
        } else if (args && "addressLookupTableAccounts" in args && args.addressLookupTableAccounts) accountKeysFromLookups = this.resolveAddressTableLookups(args.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
        return new MessageAccountKeys(this.staticAccountKeys, accountKeysFromLookups);
    }
    isAccountSigner(index) {
        return index < this.header.numRequiredSignatures;
    }
    isAccountWritable(index) {
        const numSignedAccounts = this.header.numRequiredSignatures;
        const numStaticAccountKeys = this.staticAccountKeys.length;
        if (index >= numStaticAccountKeys) {
            const lookupAccountKeysIndex = index - numStaticAccountKeys;
            const numWritableLookupAccountKeys = this.addressTableLookups.reduce((count, lookup)=>count + lookup.writableIndexes.length, 0);
            return lookupAccountKeysIndex < numWritableLookupAccountKeys;
        } else if (index >= this.header.numRequiredSignatures) {
            const unsignedAccountIndex = index - numSignedAccounts;
            const numUnsignedAccounts = numStaticAccountKeys - numSignedAccounts;
            const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
            return unsignedAccountIndex < numWritableUnsignedAccounts;
        } else {
            const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
            return index < numWritableSignedAccounts;
        }
    }
    resolveAddressTableLookups(addressLookupTableAccounts) {
        const accountKeysFromLookups = {
            writable: [],
            readonly: []
        };
        for (const tableLookup of this.addressTableLookups){
            const tableAccount = addressLookupTableAccounts.find((account)=>account.key.equals(tableLookup.accountKey));
            if (!tableAccount) throw new Error(`Failed to find address lookup table account for table key ${tableLookup.accountKey.toBase58()}`);
            for (const index of tableLookup.writableIndexes){
                if (index < tableAccount.state.addresses.length) accountKeysFromLookups.writable.push(tableAccount.state.addresses[index]);
                else throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
            }
            for (const index of tableLookup.readonlyIndexes){
                if (index < tableAccount.state.addresses.length) accountKeysFromLookups.readonly.push(tableAccount.state.addresses[index]);
                else throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
            }
        }
        return accountKeysFromLookups;
    }
    static compile(args) {
        const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
        const addressTableLookups = new Array();
        const accountKeysFromLookups = {
            writable: new Array(),
            readonly: new Array()
        };
        const lookupTableAccounts = args.addressLookupTableAccounts || [];
        for (const lookupTable of lookupTableAccounts){
            const extractResult = compiledKeys.extractTableLookup(lookupTable);
            if (extractResult !== undefined) {
                const [addressTableLookup, { writable , readonly  }] = extractResult;
                addressTableLookups.push(addressTableLookup);
                accountKeysFromLookups.writable.push(...writable);
                accountKeysFromLookups.readonly.push(...readonly);
            }
        }
        const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
        const accountKeys = new MessageAccountKeys(staticAccountKeys, accountKeysFromLookups);
        const compiledInstructions = accountKeys.compileInstructions(args.instructions);
        return new MessageV0({
            header,
            staticAccountKeys,
            recentBlockhash: args.recentBlockhash,
            compiledInstructions,
            addressTableLookups
        });
    }
    serialize() {
        const encodedStaticAccountKeysLength = Array();
        encodeLength(encodedStaticAccountKeysLength, this.staticAccountKeys.length);
        const serializedInstructions = this.serializeInstructions();
        const encodedInstructionsLength = Array();
        encodeLength(encodedInstructionsLength, this.compiledInstructions.length);
        const serializedAddressTableLookups = this.serializeAddressTableLookups();
        const encodedAddressTableLookupsLength = Array();
        encodeLength(encodedAddressTableLookupsLength, this.addressTableLookups.length);
        const messageLayout = _bufferLayout.struct([
            _bufferLayout.u8("prefix"),
            _bufferLayout.struct([
                _bufferLayout.u8("numRequiredSignatures"),
                _bufferLayout.u8("numReadonlySignedAccounts"),
                _bufferLayout.u8("numReadonlyUnsignedAccounts")
            ], "header"),
            _bufferLayout.blob(encodedStaticAccountKeysLength.length, "staticAccountKeysLength"),
            _bufferLayout.seq(publicKey(), this.staticAccountKeys.length, "staticAccountKeys"),
            publicKey("recentBlockhash"),
            _bufferLayout.blob(encodedInstructionsLength.length, "instructionsLength"),
            _bufferLayout.blob(serializedInstructions.length, "serializedInstructions"),
            _bufferLayout.blob(encodedAddressTableLookupsLength.length, "addressTableLookupsLength"),
            _bufferLayout.blob(serializedAddressTableLookups.length, "serializedAddressTableLookups")
        ]);
        const serializedMessage = new Uint8Array(PACKET_DATA_SIZE);
        const MESSAGE_VERSION_0_PREFIX = 128;
        const serializedMessageLength = messageLayout.encode({
            prefix: MESSAGE_VERSION_0_PREFIX,
            header: this.header,
            staticAccountKeysLength: new Uint8Array(encodedStaticAccountKeysLength),
            staticAccountKeys: this.staticAccountKeys.map((key)=>key.toBytes()),
            recentBlockhash: (0, _bs58Default.default).decode(this.recentBlockhash),
            instructionsLength: new Uint8Array(encodedInstructionsLength),
            serializedInstructions,
            addressTableLookupsLength: new Uint8Array(encodedAddressTableLookupsLength),
            serializedAddressTableLookups
        }, serializedMessage);
        return serializedMessage.slice(0, serializedMessageLength);
    }
    serializeInstructions() {
        let serializedLength = 0;
        const serializedInstructions = new Uint8Array(PACKET_DATA_SIZE);
        for (const instruction of this.compiledInstructions){
            const encodedAccountKeyIndexesLength = Array();
            encodeLength(encodedAccountKeyIndexesLength, instruction.accountKeyIndexes.length);
            const encodedDataLength = Array();
            encodeLength(encodedDataLength, instruction.data.length);
            const instructionLayout = _bufferLayout.struct([
                _bufferLayout.u8("programIdIndex"),
                _bufferLayout.blob(encodedAccountKeyIndexesLength.length, "encodedAccountKeyIndexesLength"),
                _bufferLayout.seq(_bufferLayout.u8(), instruction.accountKeyIndexes.length, "accountKeyIndexes"),
                _bufferLayout.blob(encodedDataLength.length, "encodedDataLength"),
                _bufferLayout.blob(instruction.data.length, "data")
            ]);
            serializedLength += instructionLayout.encode({
                programIdIndex: instruction.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(encodedAccountKeyIndexesLength),
                accountKeyIndexes: instruction.accountKeyIndexes,
                encodedDataLength: new Uint8Array(encodedDataLength),
                data: instruction.data
            }, serializedInstructions, serializedLength);
        }
        return serializedInstructions.slice(0, serializedLength);
    }
    serializeAddressTableLookups() {
        let serializedLength = 0;
        const serializedAddressTableLookups = new Uint8Array(PACKET_DATA_SIZE);
        for (const lookup of this.addressTableLookups){
            const encodedWritableIndexesLength = Array();
            encodeLength(encodedWritableIndexesLength, lookup.writableIndexes.length);
            const encodedReadonlyIndexesLength = Array();
            encodeLength(encodedReadonlyIndexesLength, lookup.readonlyIndexes.length);
            const addressTableLookupLayout = _bufferLayout.struct([
                publicKey("accountKey"),
                _bufferLayout.blob(encodedWritableIndexesLength.length, "encodedWritableIndexesLength"),
                _bufferLayout.seq(_bufferLayout.u8(), lookup.writableIndexes.length, "writableIndexes"),
                _bufferLayout.blob(encodedReadonlyIndexesLength.length, "encodedReadonlyIndexesLength"),
                _bufferLayout.seq(_bufferLayout.u8(), lookup.readonlyIndexes.length, "readonlyIndexes")
            ]);
            serializedLength += addressTableLookupLayout.encode({
                accountKey: lookup.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(encodedWritableIndexesLength),
                writableIndexes: lookup.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(encodedReadonlyIndexesLength),
                readonlyIndexes: lookup.readonlyIndexes
            }, serializedAddressTableLookups, serializedLength);
        }
        return serializedAddressTableLookups.slice(0, serializedLength);
    }
    static deserialize(serializedMessage) {
        let byteArray = [
            ...serializedMessage
        ];
        const prefix = byteArray.shift();
        const maskedPrefix = prefix & VERSION_PREFIX_MASK;
        assert(prefix !== maskedPrefix, `Expected versioned message but received legacy message`);
        const version = maskedPrefix;
        assert(version === 0, `Expected versioned message with version 0 but found version ${version}`);
        const header = {
            numRequiredSignatures: byteArray.shift(),
            numReadonlySignedAccounts: byteArray.shift(),
            numReadonlyUnsignedAccounts: byteArray.shift()
        };
        const staticAccountKeys = [];
        const staticAccountKeysLength = decodeLength(byteArray);
        for(let i = 0; i < staticAccountKeysLength; i++)staticAccountKeys.push(new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH)));
        const recentBlockhash = (0, _bs58Default.default).encode(byteArray.splice(0, PUBLIC_KEY_LENGTH));
        const instructionCount = decodeLength(byteArray);
        const compiledInstructions = [];
        for(let i = 0; i < instructionCount; i++){
            const programIdIndex = byteArray.shift();
            const accountKeyIndexesLength = decodeLength(byteArray);
            const accountKeyIndexes = byteArray.splice(0, accountKeyIndexesLength);
            const dataLength = decodeLength(byteArray);
            const data = new Uint8Array(byteArray.splice(0, dataLength));
            compiledInstructions.push({
                programIdIndex,
                accountKeyIndexes,
                data
            });
        }
        const addressTableLookupsCount = decodeLength(byteArray);
        const addressTableLookups = [];
        for(let i = 0; i < addressTableLookupsCount; i++){
            const accountKey = new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH));
            const writableIndexesLength = decodeLength(byteArray);
            const writableIndexes = byteArray.splice(0, writableIndexesLength);
            const readonlyIndexesLength = decodeLength(byteArray);
            const readonlyIndexes = byteArray.splice(0, readonlyIndexesLength);
            addressTableLookups.push({
                accountKey,
                writableIndexes,
                readonlyIndexes
            });
        }
        return new MessageV0({
            header,
            staticAccountKeys,
            recentBlockhash,
            compiledInstructions,
            addressTableLookups
        });
    }
}
// eslint-disable-next-line no-redeclare
const VersionedMessage = {
    deserializeMessageVersion (serializedMessage) {
        const prefix = serializedMessage[0];
        const maskedPrefix = prefix & VERSION_PREFIX_MASK;
        // if the highest bit of the prefix is not set, the message is not versioned
        if (maskedPrefix === prefix) return "legacy";
        // the lower 7 bits of the prefix indicate the message version
        return maskedPrefix;
    },
    deserialize: (serializedMessage)=>{
        const version = VersionedMessage.deserializeMessageVersion(serializedMessage);
        if (version === "legacy") return Message.from(serializedMessage);
        if (version === 0) return MessageV0.deserialize(serializedMessage);
        else throw new Error(`Transaction message version ${version} deserialization is not supported`);
    }
};
/**
 * Transaction signature as base-58 encoded string
 */ let TransactionStatus;
/**
 * Default (empty) signature
 */ (function(TransactionStatus) {
    TransactionStatus[TransactionStatus["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
    TransactionStatus[TransactionStatus["PROCESSED"] = 1] = "PROCESSED";
    TransactionStatus[TransactionStatus["TIMED_OUT"] = 2] = "TIMED_OUT";
    TransactionStatus[TransactionStatus["NONCE_INVALID"] = 3] = "NONCE_INVALID";
})(TransactionStatus || (TransactionStatus = {}));
const DEFAULT_SIGNATURE = (0, _buffer.Buffer).alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
/**
 * Account metadata used to define instructions
 */ /**
 * Transaction Instruction class
 */ class TransactionInstruction {
    /**
   * Public keys to include in this transaction
   * Boolean represents whether this pubkey needs to sign the transaction
   */ /**
   * Program Id to execute
   */ /**
   * Program input
   */ constructor(opts){
        this.keys = void 0;
        this.programId = void 0;
        this.data = (0, _buffer.Buffer).alloc(0);
        this.programId = opts.programId;
        this.keys = opts.keys;
        if (opts.data) this.data = opts.data;
    }
    /**
   * @internal
   */ toJSON() {
        return {
            keys: this.keys.map(({ pubkey , isSigner , isWritable  })=>({
                    pubkey: pubkey.toJSON(),
                    isSigner,
                    isWritable
                })),
            programId: this.programId.toJSON(),
            data: [
                ...this.data
            ]
        };
    }
}
/**
 * Pair of signature and corresponding public key
 */ /**
 * Transaction class
 */ class Transaction {
    /**
   * Signatures for the transaction.  Typically created by invoking the
   * `sign()` method
   */ /**
   * The first (payer) Transaction signature
   */ get signature() {
        if (this.signatures.length > 0) return this.signatures[0].signature;
        return null;
    }
    /**
   * The transaction fee payer
   */ /**
   * Construct an empty Transaction
   */ constructor(opts){
        this.signatures = [];
        this.feePayer = void 0;
        this.instructions = [];
        this.recentBlockhash = void 0;
        this.lastValidBlockHeight = void 0;
        this.nonceInfo = void 0;
        this.minNonceContextSlot = void 0;
        this._message = void 0;
        this._json = void 0;
        if (!opts) return;
        if (opts.feePayer) this.feePayer = opts.feePayer;
        if (opts.signatures) this.signatures = opts.signatures;
        if (Object.prototype.hasOwnProperty.call(opts, "nonceInfo")) {
            const { minContextSlot , nonceInfo  } = opts;
            this.minNonceContextSlot = minContextSlot;
            this.nonceInfo = nonceInfo;
        } else if (Object.prototype.hasOwnProperty.call(opts, "lastValidBlockHeight")) {
            const { blockhash , lastValidBlockHeight  } = opts;
            this.recentBlockhash = blockhash;
            this.lastValidBlockHeight = lastValidBlockHeight;
        } else {
            const { recentBlockhash , nonceInfo  } = opts;
            if (nonceInfo) this.nonceInfo = nonceInfo;
            this.recentBlockhash = recentBlockhash;
        }
    }
    /**
   * @internal
   */ toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map((instruction)=>instruction.toJSON()),
            signers: this.signatures.map(({ publicKey  })=>{
                return publicKey.toJSON();
            })
        };
    }
    /**
   * Add one or more instructions to this Transaction
   */ add(...items) {
        if (items.length === 0) throw new Error("No instructions");
        items.forEach((item)=>{
            if ("instructions" in item) this.instructions = this.instructions.concat(item.instructions);
            else if ("data" in item && "programId" in item && "keys" in item) this.instructions.push(item);
            else this.instructions.push(new TransactionInstruction(item));
        });
        return this;
    }
    /**
   * Compile transaction data
   */ compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
        let recentBlockhash;
        let instructions;
        if (this.nonceInfo) {
            recentBlockhash = this.nonceInfo.nonce;
            if (this.instructions[0] != this.nonceInfo.nonceInstruction) instructions = [
                this.nonceInfo.nonceInstruction,
                ...this.instructions
            ];
            else instructions = this.instructions;
        } else {
            recentBlockhash = this.recentBlockhash;
            instructions = this.instructions;
        }
        if (!recentBlockhash) throw new Error("Transaction recentBlockhash required");
        if (instructions.length < 1) console.warn("No instructions provided");
        let feePayer;
        if (this.feePayer) feePayer = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey) // Use implicit fee payer
        feePayer = this.signatures[0].publicKey;
        else throw new Error("Transaction fee payer required");
        for(let i = 0; i < instructions.length; i++){
            if (instructions[i].programId === undefined) throw new Error(`Transaction instruction index ${i} has undefined program id`);
        }
        const programIds = [];
        const accountMetas = [];
        instructions.forEach((instruction)=>{
            instruction.keys.forEach((accountMeta)=>{
                accountMetas.push({
                    ...accountMeta
                });
            });
            const programId = instruction.programId.toString();
            if (!programIds.includes(programId)) programIds.push(programId);
        });
        // Append programID account metas
        programIds.forEach((programId)=>{
            accountMetas.push({
                pubkey: new PublicKey(programId),
                isSigner: false,
                isWritable: false
            });
        });
        // Cull duplicate account metas
        const uniqueMetas = [];
        accountMetas.forEach((accountMeta)=>{
            const pubkeyString = accountMeta.pubkey.toString();
            const uniqueIndex = uniqueMetas.findIndex((x)=>{
                return x.pubkey.toString() === pubkeyString;
            });
            if (uniqueIndex > -1) {
                uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
                uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
            } else uniqueMetas.push(accountMeta);
        });
        // Sort. Prioritizing first by signer, then by writable
        uniqueMetas.sort(function(x, y) {
            if (x.isSigner !== y.isSigner) // Signers always come before non-signers
            return x.isSigner ? -1 : 1;
            if (x.isWritable !== y.isWritable) // Writable accounts always come before read-only accounts
            return x.isWritable ? -1 : 1;
            // Otherwise, sort by pubkey, stringwise.
            return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58());
        });
        // Move fee payer to the front
        const feePayerIndex = uniqueMetas.findIndex((x)=>{
            return x.pubkey.equals(feePayer);
        });
        if (feePayerIndex > -1) {
            const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
            payerMeta.isSigner = true;
            payerMeta.isWritable = true;
            uniqueMetas.unshift(payerMeta);
        } else uniqueMetas.unshift({
            pubkey: feePayer,
            isSigner: true,
            isWritable: true
        });
        // Disallow unknown signers
        for (const signature of this.signatures){
            const uniqueIndex = uniqueMetas.findIndex((x)=>{
                return x.pubkey.equals(signature.publicKey);
            });
            if (uniqueIndex > -1) {
                if (!uniqueMetas[uniqueIndex].isSigner) {
                    uniqueMetas[uniqueIndex].isSigner = true;
                    console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.");
                }
            } else throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
        }
        let numRequiredSignatures = 0;
        let numReadonlySignedAccounts = 0;
        let numReadonlyUnsignedAccounts = 0;
        // Split out signing from non-signing keys and count header values
        const signedKeys = [];
        const unsignedKeys = [];
        uniqueMetas.forEach(({ pubkey , isSigner , isWritable  })=>{
            if (isSigner) {
                signedKeys.push(pubkey.toString());
                numRequiredSignatures += 1;
                if (!isWritable) numReadonlySignedAccounts += 1;
            } else {
                unsignedKeys.push(pubkey.toString());
                if (!isWritable) numReadonlyUnsignedAccounts += 1;
            }
        });
        const accountKeys = signedKeys.concat(unsignedKeys);
        const compiledInstructions = instructions.map((instruction)=>{
            const { data , programId  } = instruction;
            return {
                programIdIndex: accountKeys.indexOf(programId.toString()),
                accounts: instruction.keys.map((meta)=>accountKeys.indexOf(meta.pubkey.toString())),
                data: (0, _bs58Default.default).encode(data)
            };
        });
        compiledInstructions.forEach((instruction)=>{
            assert(instruction.programIdIndex >= 0);
            instruction.accounts.forEach((keyIndex)=>assert(keyIndex >= 0));
        });
        return new Message({
            header: {
                numRequiredSignatures,
                numReadonlySignedAccounts,
                numReadonlyUnsignedAccounts
            },
            accountKeys,
            recentBlockhash,
            instructions: compiledInstructions
        });
    }
    /**
   * @internal
   */ _compile() {
        const message = this.compileMessage();
        const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
        if (this.signatures.length === signedKeys.length) {
            const valid = this.signatures.every((pair, index)=>{
                return signedKeys[index].equals(pair.publicKey);
            });
            if (valid) return message;
        }
        this.signatures = signedKeys.map((publicKey)=>({
                signature: null,
                publicKey
            }));
        return message;
    }
    /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */ serializeMessage() {
        return this._compile().serialize();
    }
    /**
   * Get the estimated fee associated with a transaction
   */ async getEstimatedFee(connection) {
        return (await connection.getFeeForMessage(this.compileMessage())).value;
    }
    /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */ setSigners(...signers) {
        if (signers.length === 0) throw new Error("No signers");
        const seen = new Set();
        this.signatures = signers.filter((publicKey)=>{
            const key = publicKey.toString();
            if (seen.has(key)) return false;
            else {
                seen.add(key);
                return true;
            }
        }).map((publicKey)=>({
                signature: null,
                publicKey
            }));
    }
    /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   */ sign(...signers) {
        if (signers.length === 0) throw new Error("No signers");
        // Dedupe signers
        const seen = new Set();
        const uniqueSigners = [];
        for (const signer of signers){
            const key = signer.publicKey.toString();
            if (seen.has(key)) continue;
            else {
                seen.add(key);
                uniqueSigners.push(signer);
            }
        }
        this.signatures = uniqueSigners.map((signer)=>({
                signature: null,
                publicKey: signer.publicKey
            }));
        const message = this._compile();
        this._partialSign(message, ...uniqueSigners);
    }
    /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   */ partialSign(...signers) {
        if (signers.length === 0) throw new Error("No signers");
        // Dedupe signers
        const seen = new Set();
        const uniqueSigners = [];
        for (const signer of signers){
            const key = signer.publicKey.toString();
            if (seen.has(key)) continue;
            else {
                seen.add(key);
                uniqueSigners.push(signer);
            }
        }
        const message = this._compile();
        this._partialSign(message, ...uniqueSigners);
    }
    /**
   * @internal
   */ _partialSign(message, ...signers) {
        const signData = message.serialize();
        signers.forEach((signer)=>{
            const signature = sign(signData, signer.secretKey);
            this._addSignature(signer.publicKey, toBuffer(signature));
        });
    }
    /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   */ addSignature(pubkey, signature) {
        this._compile(); // Ensure signatures array is populated
        this._addSignature(pubkey, signature);
    }
    /**
   * @internal
   */ _addSignature(pubkey, signature) {
        assert(signature.length === 64);
        const index = this.signatures.findIndex((sigpair)=>pubkey.equals(sigpair.publicKey));
        if (index < 0) throw new Error(`unknown signer: ${pubkey.toString()}`);
        this.signatures[index].signature = (0, _buffer.Buffer).from(signature);
    }
    /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   */ verifySignatures(requireAllSignatures) {
        return this._verifySignatures(this.serializeMessage(), requireAllSignatures === undefined ? true : requireAllSignatures);
    }
    /**
   * @internal
   */ _verifySignatures(signData, requireAllSignatures) {
        for (const { signature , publicKey  } of this.signatures)if (signature === null) {
            if (requireAllSignatures) return false;
        } else {
            if (!verify(signature, signData, publicKey.toBytes())) return false;
        }
        return true;
    }
    /**
   * Serialize the Transaction in the wire format.
   */ serialize(config) {
        const { requireAllSignatures , verifySignatures  } = Object.assign({
            requireAllSignatures: true,
            verifySignatures: true
        }, config);
        const signData = this.serializeMessage();
        if (verifySignatures && !this._verifySignatures(signData, requireAllSignatures)) throw new Error("Signature verification failed");
        return this._serialize(signData);
    }
    /**
   * @internal
   */ _serialize(signData) {
        const { signatures  } = this;
        const signatureCount = [];
        encodeLength(signatureCount, signatures.length);
        const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
        const wireTransaction = (0, _buffer.Buffer).alloc(transactionLength);
        assert(signatures.length < 256);
        (0, _buffer.Buffer).from(signatureCount).copy(wireTransaction, 0);
        signatures.forEach(({ signature  }, index)=>{
            if (signature !== null) {
                assert(signature.length === 64, `signature has invalid length`);
                (0, _buffer.Buffer).from(signature).copy(wireTransaction, signatureCount.length + index * 64);
            }
        });
        signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
        assert(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
        return wireTransaction;
    }
    /**
   * Deprecated method
   * @internal
   */ get keys() {
        assert(this.instructions.length === 1);
        return this.instructions[0].keys.map((keyObj)=>keyObj.pubkey);
    }
    /**
   * Deprecated method
   * @internal
   */ get programId() {
        assert(this.instructions.length === 1);
        return this.instructions[0].programId;
    }
    /**
   * Deprecated method
   * @internal
   */ get data() {
        assert(this.instructions.length === 1);
        return this.instructions[0].data;
    }
    /**
   * Parse a wire transaction into a Transaction object.
   */ static from(buffer) {
        // Slice up wire data
        let byteArray = [
            ...buffer
        ];
        const signatureCount = decodeLength(byteArray);
        let signatures = [];
        for(let i = 0; i < signatureCount; i++){
            const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
            byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
            signatures.push((0, _bs58Default.default).encode((0, _buffer.Buffer).from(signature)));
        }
        return Transaction.populate(Message.from(byteArray), signatures);
    }
    /**
   * Populate Transaction object from message and signatures
   */ static populate(message, signatures = []) {
        const transaction = new Transaction();
        transaction.recentBlockhash = message.recentBlockhash;
        if (message.header.numRequiredSignatures > 0) transaction.feePayer = message.accountKeys[0];
        signatures.forEach((signature, index)=>{
            const sigPubkeyPair = {
                signature: signature == (0, _bs58Default.default).encode(DEFAULT_SIGNATURE) ? null : (0, _bs58Default.default).decode(signature),
                publicKey: message.accountKeys[index]
            };
            transaction.signatures.push(sigPubkeyPair);
        });
        message.instructions.forEach((instruction)=>{
            const keys = instruction.accounts.map((account)=>{
                const pubkey = message.accountKeys[account];
                return {
                    pubkey,
                    isSigner: transaction.signatures.some((keyObj)=>keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
                    isWritable: message.isAccountWritable(account)
                };
            });
            transaction.instructions.push(new TransactionInstruction({
                keys,
                programId: message.accountKeys[instruction.programIdIndex],
                data: (0, _bs58Default.default).decode(instruction.data)
            }));
        });
        transaction._message = message;
        transaction._json = transaction.toJSON();
        return transaction;
    }
}
class TransactionMessage {
    constructor(args){
        this.payerKey = void 0;
        this.instructions = void 0;
        this.recentBlockhash = void 0;
        this.payerKey = args.payerKey;
        this.instructions = args.instructions;
        this.recentBlockhash = args.recentBlockhash;
    }
    static decompile(message, args) {
        const { header , compiledInstructions , recentBlockhash  } = message;
        const { numRequiredSignatures , numReadonlySignedAccounts , numReadonlyUnsignedAccounts  } = header;
        const numWritableSignedAccounts = numRequiredSignatures - numReadonlySignedAccounts;
        assert(numWritableSignedAccounts > 0, "Message header is invalid");
        const numWritableUnsignedAccounts = message.staticAccountKeys.length - numRequiredSignatures - numReadonlyUnsignedAccounts;
        assert(numWritableUnsignedAccounts >= 0, "Message header is invalid");
        const accountKeys = message.getAccountKeys(args);
        const payerKey = accountKeys.get(0);
        if (payerKey === undefined) throw new Error("Failed to decompile message because no account keys were found");
        const instructions = [];
        for (const compiledIx of compiledInstructions){
            const keys = [];
            for (const keyIndex of compiledIx.accountKeyIndexes){
                const pubkey = accountKeys.get(keyIndex);
                if (pubkey === undefined) throw new Error(`Failed to find key for account key index ${keyIndex}`);
                const isSigner = keyIndex < numRequiredSignatures;
                let isWritable;
                if (isSigner) isWritable = keyIndex < numWritableSignedAccounts;
                else if (keyIndex < accountKeys.staticAccountKeys.length) isWritable = keyIndex - numRequiredSignatures < numWritableUnsignedAccounts;
                else isWritable = keyIndex - accountKeys.staticAccountKeys.length < // accountKeysFromLookups cannot be undefined because we already found a pubkey for this index above
                accountKeys.accountKeysFromLookups.writable.length;
                keys.push({
                    pubkey,
                    isSigner: keyIndex < header.numRequiredSignatures,
                    isWritable
                });
            }
            const programId = accountKeys.get(compiledIx.programIdIndex);
            if (programId === undefined) throw new Error(`Failed to find program id for program id index ${compiledIx.programIdIndex}`);
            instructions.push(new TransactionInstruction({
                programId,
                data: toBuffer(compiledIx.data),
                keys
            }));
        }
        return new TransactionMessage({
            payerKey,
            instructions,
            recentBlockhash
        });
    }
    compileToLegacyMessage() {
        return Message.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions
        });
    }
    compileToV0Message(addressLookupTableAccounts) {
        return MessageV0.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts
        });
    }
}
/**
 * Versioned transaction class
 */ class VersionedTransaction {
    get version() {
        return this.message.version;
    }
    constructor(message, signatures){
        this.signatures = void 0;
        this.message = void 0;
        if (signatures !== undefined) {
            assert(signatures.length === message.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures");
            this.signatures = signatures;
        } else {
            const defaultSignatures = [];
            for(let i = 0; i < message.header.numRequiredSignatures; i++)defaultSignatures.push(new Uint8Array(SIGNATURE_LENGTH_IN_BYTES));
            this.signatures = defaultSignatures;
        }
        this.message = message;
    }
    serialize() {
        const serializedMessage = this.message.serialize();
        const encodedSignaturesLength = Array();
        encodeLength(encodedSignaturesLength, this.signatures.length);
        const transactionLayout = _bufferLayout.struct([
            _bufferLayout.blob(encodedSignaturesLength.length, "encodedSignaturesLength"),
            _bufferLayout.seq(signature(), this.signatures.length, "signatures"),
            _bufferLayout.blob(serializedMessage.length, "serializedMessage")
        ]);
        const serializedTransaction = new Uint8Array(2048);
        const serializedTransactionLength = transactionLayout.encode({
            encodedSignaturesLength: new Uint8Array(encodedSignaturesLength),
            signatures: this.signatures,
            serializedMessage
        }, serializedTransaction);
        return serializedTransaction.slice(0, serializedTransactionLength);
    }
    static deserialize(serializedTransaction) {
        let byteArray = [
            ...serializedTransaction
        ];
        const signatures = [];
        const signaturesLength = decodeLength(byteArray);
        for(let i = 0; i < signaturesLength; i++)signatures.push(new Uint8Array(byteArray.splice(0, SIGNATURE_LENGTH_IN_BYTES)));
        const message = VersionedMessage.deserialize(new Uint8Array(byteArray));
        return new VersionedTransaction(message, signatures);
    }
    sign(signers) {
        const messageData = this.message.serialize();
        const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        for (const signer of signers){
            const signerIndex = signerPubkeys.findIndex((pubkey)=>pubkey.equals(signer.publicKey));
            assert(signerIndex >= 0, `Cannot sign with non signer key ${signer.publicKey.toBase58()}`);
            this.signatures[signerIndex] = sign(messageData, signer.secretKey);
        }
    }
    addSignature(publicKey, signature) {
        assert(signature.byteLength === 64, "Signature must be 64 bytes long");
        const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        const signerIndex = signerPubkeys.findIndex((pubkey)=>pubkey.equals(publicKey));
        assert(signerIndex >= 0, `Can not add signature; \`${publicKey.toBase58()}\` is not required to sign this transaction`);
        this.signatures[signerIndex] = signature;
    }
}
const SYSVAR_CLOCK_PUBKEY = new PublicKey("SysvarC1ock11111111111111111111111111111111");
const SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
const SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey("Sysvar1nstructions1111111111111111111111111");
const SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
const SYSVAR_RENT_PUBKEY = new PublicKey("SysvarRent111111111111111111111111111111111");
const SYSVAR_REWARDS_PUBKEY = new PublicKey("SysvarRewards111111111111111111111111111111");
const SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey("SysvarS1otHashes111111111111111111111111111");
const SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey("SysvarS1otHistory11111111111111111111111111");
const SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey("SysvarStakeHistory1111111111111111111111111");
/**
 * Sign, send and confirm a transaction.
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Transaction} transaction
 * @param {Array<Signer>} signers
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */ async function sendAndConfirmTransaction(connection, transaction, signers, options) {
    const sendOptions = options && {
        skipPreflight: options.skipPreflight,
        preflightCommitment: options.preflightCommitment || options.commitment,
        maxRetries: options.maxRetries,
        minContextSlot: options.minContextSlot
    };
    const signature = await connection.sendTransaction(transaction, signers, sendOptions);
    let status;
    if (transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null) status = (await connection.confirmTransaction({
        abortSignal: options?.abortSignal,
        signature: signature,
        blockhash: transaction.recentBlockhash,
        lastValidBlockHeight: transaction.lastValidBlockHeight
    }, options && options.commitment)).value;
    else if (transaction.minNonceContextSlot != null && transaction.nonceInfo != null) {
        const { nonceInstruction  } = transaction.nonceInfo;
        const nonceAccountPubkey = nonceInstruction.keys[0].pubkey;
        status = (await connection.confirmTransaction({
            abortSignal: options?.abortSignal,
            minContextSlot: transaction.minNonceContextSlot,
            nonceAccountPubkey,
            nonceValue: transaction.nonceInfo.nonce,
            signature
        }, options && options.commitment)).value;
    } else {
        if (options?.abortSignal != null) console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.");
        status = (await connection.confirmTransaction(signature, options && options.commitment)).value;
    }
    if (status.err) throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
    return signature;
}
// zzz
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/**
 * Populate a buffer of instruction data using an InstructionType
 * @internal
 */ function encodeData(type, fields) {
    const allocLength = type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
    const data = (0, _buffer.Buffer).alloc(allocLength);
    const layoutFields = Object.assign({
        instruction: type.index
    }, fields);
    type.layout.encode(layoutFields, data);
    return data;
}
/**
 * Decode instruction data buffer using an InstructionType
 * @internal
 */ function decodeData$1(type, buffer) {
    let data;
    try {
        data = type.layout.decode(buffer);
    } catch (err) {
        throw new Error("invalid instruction; " + err);
    }
    if (data.instruction !== type.index) throw new Error(`invalid instruction; instruction index mismatch ${data.instruction} != ${type.index}`);
    return data;
}
/**
 * https://github.com/solana-labs/solana/blob/90bedd7e067b5b8f3ddbb45da00a4e9cabb22c62/sdk/src/fee_calculator.rs#L7-L11
 *
 * @internal
 */ const FeeCalculatorLayout = _bufferLayout.nu64("lamportsPerSignature");
/**
 * Calculator for transaction fees.
 *
 * @deprecated Deprecated since Solana v1.8.0.
 */ /**
 * See https://github.com/solana-labs/solana/blob/0ea2843ec9cdc517572b8e62c959f41b55cf4453/sdk/src/nonce_state.rs#L29-L32
 *
 * @internal
 */ const NonceAccountLayout = _bufferLayout.struct([
    _bufferLayout.u32("version"),
    _bufferLayout.u32("state"),
    publicKey("authorizedPubkey"),
    publicKey("nonce"),
    _bufferLayout.struct([
        FeeCalculatorLayout
    ], "feeCalculator")
]);
const NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;
/**
 * A durable nonce is a 32 byte value encoded as a base58 string.
 */ /**
 * NonceAccount class
 */ class NonceAccount {
    /**
   * @internal
   */ constructor(args){
        this.authorizedPubkey = void 0;
        this.nonce = void 0;
        this.feeCalculator = void 0;
        this.authorizedPubkey = args.authorizedPubkey;
        this.nonce = args.nonce;
        this.feeCalculator = args.feeCalculator;
    }
    /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */ static fromAccountData(buffer) {
        const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
        return new NonceAccount({
            authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
            nonce: new PublicKey(nonceAccount.nonce).toString(),
            feeCalculator: nonceAccount.feeCalculator
        });
    }
}
const encodeDecode = (layout)=>{
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return {
        decode,
        encode
    };
};
const bigInt = (length)=>(property)=>{
        const layout = (0, _bufferLayout.blob)(length, property);
        const { encode , decode  } = encodeDecode(layout);
        const bigIntLayout = layout;
        bigIntLayout.decode = (buffer, offset)=>{
            const src = decode(buffer, offset);
            return (0, _bigintBuffer.toBigIntLE)((0, _buffer.Buffer).from(src));
        };
        bigIntLayout.encode = (bigInt, buffer, offset)=>{
            const src = (0, _bigintBuffer.toBufferLE)(bigInt, length);
            return encode(src, buffer, offset);
        };
        return bigIntLayout;
    };
const u64 = bigInt(8);
/**
 * Create account system transaction params
 */ /**
 * System Instruction class
 */ class SystemInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a system instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(SYSTEM_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a SystemInstruction");
        return type;
    }
    /**
   * Decode a create account system instruction and retrieve the instruction params.
   */ static decodeCreateAccount(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { lamports , space , programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Create, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            newAccountPubkey: instruction.keys[1].pubkey,
            lamports,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a transfer system instruction and retrieve the instruction params.
   */ static decodeTransfer(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { lamports  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Transfer, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            lamports
        };
    }
    /**
   * Decode a transfer with seed system instruction and retrieve the instruction params.
   */ static decodeTransferWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports , seed , programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            basePubkey: instruction.keys[1].pubkey,
            toPubkey: instruction.keys[2].pubkey,
            lamports,
            seed,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an allocate system instruction and retrieve the instruction params.
   */ static decodeAllocate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { space  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Allocate, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            space
        };
    }
    /**
   * Decode an allocate with seed system instruction and retrieve the instruction params.
   */ static decodeAllocateWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { base , seed , space , programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an assign system instruction and retrieve the instruction params.
   */ static decodeAssign(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Assign, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an assign with seed system instruction and retrieve the instruction params.
   */ static decodeAssignWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { base , seed , programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a create account with seed system instruction and retrieve the instruction params.
   */ static decodeCreateWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { base , seed , lamports , space , programId  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            newAccountPubkey: instruction.keys[1].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            lamports,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a nonce initialize system instruction and retrieve the instruction params.
   */ static decodeNonceInitialize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { authorized  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: new PublicKey(authorized)
        };
    }
    /**
   * Decode a nonce advance system instruction and retrieve the instruction params.
   */ static decodeNonceAdvance(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey
        };
    }
    /**
   * Decode a nonce withdraw system instruction and retrieve the instruction params.
   */ static decodeNonceWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 5);
        const { lamports  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey,
            lamports
        };
    }
    /**
   * Decode a nonce authorize system instruction and retrieve the instruction params.
   */ static decodeNonceAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { authorized  } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[1].pubkey,
            newAuthorizedPubkey: new PublicKey(authorized)
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(SystemProgram.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid SystemInstructionType's
 */ /**
 * An enumeration of valid system InstructionType's
 * @internal
 */ const SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
    Create: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    Assign: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("programId")
        ])
    },
    Transfer: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64("lamports")
        ])
    },
    CreateWithSeed: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            _bufferLayout.ns64("lamports"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    AdvanceNonceAccount: {
        index: 4,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    WithdrawNonceAccount: {
        index: 5,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    InitializeNonceAccount: {
        index: 6,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("authorized")
        ])
    },
    AuthorizeNonceAccount: {
        index: 7,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("authorized")
        ])
    },
    Allocate: {
        index: 8,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("space")
        ])
    },
    AllocateWithSeed: {
        index: 9,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    AssignWithSeed: {
        index: 10,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            publicKey("programId")
        ])
    },
    TransferWithSeed: {
        index: 11,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64("lamports"),
            rustString("seed"),
            publicKey("programId")
        ])
    },
    UpgradeNonceAccount: {
        index: 12,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    }
});
/**
 * Factory class for transactions to interact with the System program
 */ class SystemProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the System program
   */ /**
   * Generate a transaction instruction that creates a new account
   */ static createAccount(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.Create;
        const data = encodeData(type, {
            lamports: params.lamports,
            space: params.space,
            programId: toBuffer(params.programId.toBuffer())
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.fromPubkey,
                    isSigner: true,
                    isWritable: true
                },
                {
                    pubkey: params.newAccountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */ static transfer(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
            data = encodeData(type, {
                lamports: BigInt(params.lamports),
                seed: params.seed,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.fromPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
            data = encodeData(type, {
                lamports: BigInt(params.lamports)
            });
            keys = [
                {
                    pubkey: params.fromPubkey,
                    isSigner: true,
                    isWritable: true
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that assigns an account to a program
   */ static assign(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
            data = encodeData(type, {
                base: toBuffer(params.basePubkey.toBuffer()),
                seed: params.seed,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
            data = encodeData(type, {
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */ static createAccountWithSeed(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
        const data = encodeData(type, {
            base: toBuffer(params.basePubkey.toBuffer()),
            seed: params.seed,
            lamports: params.lamports,
            space: params.space,
            programId: toBuffer(params.programId.toBuffer())
        });
        let keys = [
            {
                pubkey: params.fromPubkey,
                isSigner: true,
                isWritable: true
            },
            {
                pubkey: params.newAccountPubkey,
                isSigner: false,
                isWritable: true
            }
        ];
        if (params.basePubkey != params.fromPubkey) keys.push({
            pubkey: params.basePubkey,
            isSigner: true,
            isWritable: false
        });
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction that creates a new Nonce account
   */ static createNonceAccount(params) {
        const transaction = new Transaction();
        if ("basePubkey" in params && "seed" in params) transaction.add(SystemProgram.createAccountWithSeed({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.noncePubkey,
            basePubkey: params.basePubkey,
            seed: params.seed,
            lamports: params.lamports,
            space: NONCE_ACCOUNT_LENGTH,
            programId: this.programId
        }));
        else transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.noncePubkey,
            lamports: params.lamports,
            space: NONCE_ACCOUNT_LENGTH,
            programId: this.programId
        }));
        const initParams = {
            noncePubkey: params.noncePubkey,
            authorizedPubkey: params.authorizedPubkey
        };
        transaction.add(this.nonceInitialize(initParams));
        return transaction;
    }
    /**
   * Generate an instruction to initialize a Nonce account
   */ static nonceInitialize(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
        const data = encodeData(type, {
            authorized: toBuffer(params.authorizedPubkey.toBuffer())
        });
        const instructionData = {
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate an instruction to advance the nonce in a Nonce account
   */ static nonceAdvance(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
        const data = encodeData(type);
        const instructionData = {
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */ static nonceWithdraw(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
        const data = encodeData(type, {
            lamports: params.lamports
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */ static nonceAuthorize(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
        const data = encodeData(type, {
            authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that allocates space in an account without funding
   */ static allocate(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
            data = encodeData(type, {
                base: toBuffer(params.basePubkey.toBuffer()),
                seed: params.seed,
                space: params.space,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
            data = encodeData(type, {
                space: params.space
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
}
SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
// Keep program chunks under PACKET_DATA_SIZE, leaving enough room for the
// rest of the Transaction fields
//
// TODO: replace 300 with a proper constant for the size of the other
// Transaction fields
const CHUNK_SIZE = PACKET_DATA_SIZE - 300;
/**
 * Program loader interface
 */ class Loader {
    /**
   * @internal
   */ constructor(){}
    /**
   * Amount of program data placed in each load Transaction
   */ /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */ static getMinNumSignatures(dataLength) {
        return 2 * // Every transaction requires two signatures (payer + program)
        (Math.ceil(dataLength / Loader.chunkSize) + 1 + // Add one for Create transaction
        1 // Add one for Finalize transaction
        );
    }
    /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */ static async load(connection, payer, program, programId, data) {
        {
            const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length);
            // Fetch program account info to check if it has already been created
            const programInfo = await connection.getAccountInfo(program.publicKey, "confirmed");
            let transaction = null;
            if (programInfo !== null) {
                if (programInfo.executable) {
                    console.error("Program load failed, account is already executable");
                    return false;
                }
                if (programInfo.data.length !== data.length) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.allocate({
                        accountPubkey: program.publicKey,
                        space: data.length
                    }));
                }
                if (!programInfo.owner.equals(programId)) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.assign({
                        accountPubkey: program.publicKey,
                        programId
                    }));
                }
                if (programInfo.lamports < balanceNeeded) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.transfer({
                        fromPubkey: payer.publicKey,
                        toPubkey: program.publicKey,
                        lamports: balanceNeeded - programInfo.lamports
                    }));
                }
            } else transaction = new Transaction().add(SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: program.publicKey,
                lamports: balanceNeeded > 0 ? balanceNeeded : 1,
                space: data.length,
                programId
            }));
            // If the account is already created correctly, skip this step
            // and proceed directly to loading instructions
            if (transaction !== null) await sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            });
        }
        const dataLayout = _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.u32("offset"),
            _bufferLayout.u32("bytesLength"),
            _bufferLayout.u32("bytesLengthPadding"),
            _bufferLayout.seq(_bufferLayout.u8("byte"), _bufferLayout.offset(_bufferLayout.u32(), -8), "bytes")
        ]);
        const chunkSize = Loader.chunkSize;
        let offset = 0;
        let array = data;
        let transactions = [];
        while(array.length > 0){
            const bytes = array.slice(0, chunkSize);
            const data = (0, _buffer.Buffer).alloc(chunkSize + 16);
            dataLayout.encode({
                instruction: 0,
                // Load instruction
                offset,
                bytes: bytes,
                bytesLength: 0,
                bytesLengthPadding: 0
            }, data);
            const transaction = new Transaction().add({
                keys: [
                    {
                        pubkey: program.publicKey,
                        isSigner: true,
                        isWritable: true
                    }
                ],
                programId,
                data
            });
            transactions.push(sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            }));
            // Delay between sends in an attempt to reduce rate limit errors
            if (connection._rpcEndpoint.includes("solana.com")) {
                const REQUESTS_PER_SECOND = 4;
                await sleep(1000 / REQUESTS_PER_SECOND);
            }
            offset += chunkSize;
            array = array.slice(chunkSize);
        }
        await Promise.all(transactions);
        // Finalize the account loaded with program data for execution
        {
            const dataLayout = _bufferLayout.struct([
                _bufferLayout.u32("instruction")
            ]);
            const data = (0, _buffer.Buffer).alloc(dataLayout.span);
            dataLayout.encode({
                instruction: 1 // Finalize instruction
            }, data);
            const transaction = new Transaction().add({
                keys: [
                    {
                        pubkey: program.publicKey,
                        isSigner: true,
                        isWritable: true
                    },
                    {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }
                ],
                programId,
                data
            });
            await sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            });
        }
        // success
        return true;
    }
}
Loader.chunkSize = CHUNK_SIZE;
const BPF_LOADER_PROGRAM_ID = new PublicKey("BPFLoader2111111111111111111111111111111111");
/**
 * Factory class for transactions to interact with a program loader
 */ class BpfLoader {
    /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */ static getMinNumSignatures(dataLength) {
        return Loader.getMinNumSignatures(dataLength);
    }
    /**
   * Load a SBF program
   *
   * @param connection The connection to use
   * @param payer Account that will pay program loading fees
   * @param program Account to load the program into
   * @param elf The entire ELF containing the SBF program
   * @param loaderProgramId The program id of the BPF loader to use
   * @return true if program was loaded successfully, false if program was already loaded
   */ static load(connection, payer, program, elf, loaderProgramId) {
        return Loader.load(connection, payer, program, loaderProgramId, elf);
    }
}
var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
    var keys = [];
    for(var name in obj)keys.push(name);
    return keys;
};
function stringify(val, isArrayProp) {
    var i, max, str, keys, key, propVal, toStr;
    if (val === true) return "true";
    if (val === false) return "false";
    switch(typeof val){
        case "object":
            if (val === null) return null;
            else if (val.toJSON && typeof val.toJSON === "function") return stringify(val.toJSON(), isArrayProp);
            else {
                toStr = objToString.call(val);
                if (toStr === "[object Array]") {
                    str = "[";
                    max = val.length - 1;
                    for(i = 0; i < max; i++)str += stringify(val[i], true) + ",";
                    if (max > -1) str += stringify(val[i], true);
                    return str + "]";
                } else if (toStr === "[object Object]") {
                    // only object is left
                    keys = objKeys(val).sort();
                    max = keys.length;
                    str = "";
                    i = 0;
                    while(i < max){
                        key = keys[i];
                        propVal = stringify(val[key], false);
                        if (propVal !== undefined) {
                            if (str) str += ",";
                            str += JSON.stringify(key) + ":" + propVal;
                        }
                        i++;
                    }
                    return "{" + str + "}";
                } else return JSON.stringify(val);
            }
        case "function":
        case "undefined":
            return isArrayProp ? null : undefined;
        case "string":
            return JSON.stringify(val);
        default:
            return isFinite(val) ? val : null;
    }
}
var fastStableStringify = function(val) {
    var returnVal = stringify(val, false);
    if (returnVal !== undefined) return "" + returnVal;
};
var fastStableStringify$1 = fastStableStringify;
const MINIMUM_SLOT_PER_EPOCH = 32;
// Returns the number of trailing zeros in the binary representation of self.
function trailingZeros(n) {
    let trailingZeros = 0;
    while(n > 1){
        n /= 2;
        trailingZeros++;
    }
    return trailingZeros;
}
// Returns the smallest power of two greater than or equal to n
function nextPowerOfTwo(n) {
    if (n === 0) return 1;
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n |= n >> 32;
    return n + 1;
}
/**
 * Epoch schedule
 * (see https://docs.solana.com/terminology#epoch)
 * Can be retrieved with the {@link Connection.getEpochSchedule} method
 */ class EpochSchedule {
    /** The maximum number of slots in each epoch */ /** The number of slots before beginning of an epoch to calculate a leader schedule for that epoch */ /** Indicates whether epochs start short and grow */ /** The first epoch with `slotsPerEpoch` slots */ /** The first slot of `firstNormalEpoch` */ constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot){
        this.slotsPerEpoch = void 0;
        this.leaderScheduleSlotOffset = void 0;
        this.warmup = void 0;
        this.firstNormalEpoch = void 0;
        this.firstNormalSlot = void 0;
        this.slotsPerEpoch = slotsPerEpoch;
        this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
        this.warmup = warmup;
        this.firstNormalEpoch = firstNormalEpoch;
        this.firstNormalSlot = firstNormalSlot;
    }
    getEpoch(slot) {
        return this.getEpochAndSlotIndex(slot)[0];
    }
    getEpochAndSlotIndex(slot) {
        if (slot < this.firstNormalSlot) {
            const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
            const epochLen = this.getSlotsInEpoch(epoch);
            const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
            return [
                epoch,
                slotIndex
            ];
        } else {
            const normalSlotIndex = slot - this.firstNormalSlot;
            const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
            const epoch = this.firstNormalEpoch + normalEpochIndex;
            const slotIndex = normalSlotIndex % this.slotsPerEpoch;
            return [
                epoch,
                slotIndex
            ];
        }
    }
    getFirstSlotInEpoch(epoch) {
        if (epoch <= this.firstNormalEpoch) return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH;
        else return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(epoch) {
        return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
    }
    getSlotsInEpoch(epoch) {
        if (epoch < this.firstNormalEpoch) return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH));
        else return this.slotsPerEpoch;
    }
}
class SendTransactionError extends Error {
    constructor(message, logs){
        super(message);
        this.logs = void 0;
        this.logs = logs;
    }
}
// Keep in sync with client/src/rpc_custom_errors.rs
// Typescript `enums` thwart tree-shaking. See https://bargsten.org/jsts/enums/
const SolanaJSONRPCErrorCode = {
    JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
    JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
    JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
    JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
    JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
    JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
    JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
    JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
    JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
    JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
    JSON_RPC_SCAN_ERROR: -32012,
    JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
    JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
    JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
    JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
};
class SolanaJSONRPCError extends Error {
    constructor({ code , message , data  }, customMessage){
        super(customMessage != null ? `${customMessage}: ${message}` : message);
        this.code = void 0;
        this.data = void 0;
        this.code = code;
        this.data = data;
        this.name = "SolanaJSONRPCError";
    }
}
var fetchImpl = globalThis.fetch;
class RpcWebSocketClient extends (0, _clientDefault.default) {
    constructor(address, options, generate_request_id){
        const webSocketFactory = (url)=>{
            const rpc = (0, _websocketBrowserDefault.default)(url, {
                autoconnect: true,
                max_reconnects: 5,
                reconnect: true,
                reconnect_interval: 1000,
                ...options
            });
            if ("socket" in rpc) this.underlyingSocket = rpc.socket;
            else this.underlyingSocket = rpc;
            return rpc;
        };
        super(webSocketFactory, address, options, generate_request_id);
        this.underlyingSocket = void 0;
    }
    call(...args) {
        const readyState = this.underlyingSocket?.readyState;
        if (readyState === 1 /* WebSocket.OPEN */ ) return super.call(...args);
        return Promise.reject(new Error("Tried to call a JSON-RPC method `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
    }
    notify(...args) {
        const readyState = this.underlyingSocket?.readyState;
        if (readyState === 1 /* WebSocket.OPEN */ ) return super.notify(...args);
        return Promise.reject(new Error("Tried to send a JSON-RPC notification `" + args[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + readyState + ")"));
    }
}
// TODO: These constants should be removed in favor of reading them out of a
// Syscall account
/**
 * @internal
 */ const NUM_TICKS_PER_SECOND = 160;
/**
 * @internal
 */ const DEFAULT_TICKS_PER_SLOT = 64;
/**
 * @internal
 */ const NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
/**
 * @internal
 */ const MS_PER_SLOT = 1000 / NUM_SLOTS_PER_SECOND;
/**
 * @internal
 */ /**
 * Decode account data buffer using an AccountType
 * @internal
 */ function decodeData(type, data) {
    let decoded;
    try {
        decoded = type.layout.decode(data);
    } catch (err) {
        throw new Error("invalid instruction; " + err);
    }
    if (decoded.typeIndex !== type.index) throw new Error(`invalid account data; account type mismatch ${decoded.typeIndex} != ${type.index}`);
    return decoded;
}
/// The serialized size of lookup table metadata
const LOOKUP_TABLE_META_SIZE = 56;
class AddressLookupTableAccount {
    constructor(args){
        this.key = void 0;
        this.state = void 0;
        this.key = args.key;
        this.state = args.state;
    }
    isActive() {
        const U64_MAX = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === U64_MAX;
    }
    static deserialize(accountData) {
        const meta = decodeData(LookupTableMetaLayout, accountData);
        const serializedAddressesLen = accountData.length - LOOKUP_TABLE_META_SIZE;
        assert(serializedAddressesLen >= 0, "lookup table is invalid");
        assert(serializedAddressesLen % 32 === 0, "lookup table is invalid");
        const numSerializedAddresses = serializedAddressesLen / 32;
        const { addresses  } = _bufferLayout.struct([
            _bufferLayout.seq(publicKey(), numSerializedAddresses, "addresses")
        ]).decode(accountData.slice(LOOKUP_TABLE_META_SIZE));
        return {
            deactivationSlot: meta.deactivationSlot,
            lastExtendedSlot: meta.lastExtendedSlot,
            lastExtendedSlotStartIndex: meta.lastExtendedStartIndex,
            authority: meta.authority.length !== 0 ? new PublicKey(meta.authority[0]) : undefined,
            addresses: addresses.map((address)=>new PublicKey(address))
        };
    }
}
const LookupTableMetaLayout = {
    index: 1,
    layout: _bufferLayout.struct([
        _bufferLayout.u32("typeIndex"),
        u64("deactivationSlot"),
        _bufferLayout.nu64("lastExtendedSlot"),
        _bufferLayout.u8("lastExtendedStartIndex"),
        _bufferLayout.u8(),
        // option
        _bufferLayout.seq(publicKey(), _bufferLayout.offset(_bufferLayout.u8(), -1), "authority")
    ])
};
const URL_RE = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function makeWebsocketUrl(endpoint) {
    const matches = endpoint.match(URL_RE);
    if (matches == null) throw TypeError(`Failed to validate endpoint URL \`${endpoint}\``);
    const [_, // eslint-disable-line @typescript-eslint/no-unused-vars
    hostish, portWithColon, rest] = matches;
    const protocol = endpoint.startsWith("https:") ? "wss:" : "ws:";
    const startPort = portWithColon == null ? null : parseInt(portWithColon.slice(1), 10);
    const websocketPort = // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explictly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to solana-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    startPort == null ? "" : `:${startPort + 1}`;
    return `${protocol}//${hostish}${websocketPort}${rest}`;
}
const PublicKeyFromString = (0, _superstruct.coerce)((0, _superstruct.instance)(PublicKey), (0, _superstruct.string)(), (value)=>new PublicKey(value));
const RawAccountDataResult = (0, _superstruct.tuple)([
    (0, _superstruct.string)(),
    (0, _superstruct.literal)("base64")
]);
const BufferFromRawAccountData = (0, _superstruct.coerce)((0, _superstruct.instance)((0, _buffer.Buffer)), RawAccountDataResult, (value)=>(0, _buffer.Buffer).from(value[0], "base64"));
/**
 * Attempt to use a recent blockhash for up to 30 seconds
 * @internal
 */ const BLOCKHASH_CACHE_TIMEOUT_MS = 30000;
/**
 * HACK.
 * Copied from rpc-websockets/dist/lib/client.
 * Otherwise, `yarn build` fails with:
 * https://gist.github.com/steveluscher/c057eca81d479ef705cdb53162f9971d
 */ /* @internal */ function assertEndpointUrl(putativeUrl) {
    if (/^https?:/.test(putativeUrl) === false) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return putativeUrl;
}
/** @internal */ function extractCommitmentFromConfig(commitmentOrConfig) {
    let commitment;
    let config;
    if (typeof commitmentOrConfig === "string") commitment = commitmentOrConfig;
    else if (commitmentOrConfig) {
        const { commitment: specifiedCommitment , ...specifiedConfig } = commitmentOrConfig;
        commitment = specifiedCommitment;
        config = specifiedConfig;
    }
    return {
        commitment,
        config
    };
}
/**
 * @internal
 */ function createRpcResult(result) {
    return (0, _superstruct.union)([
        (0, _superstruct.type)({
            jsonrpc: (0, _superstruct.literal)("2.0"),
            id: (0, _superstruct.string)(),
            result
        }),
        (0, _superstruct.type)({
            jsonrpc: (0, _superstruct.literal)("2.0"),
            id: (0, _superstruct.string)(),
            error: (0, _superstruct.type)({
                code: (0, _superstruct.unknown)(),
                message: (0, _superstruct.string)(),
                data: (0, _superstruct.optional)((0, _superstruct.any)())
            })
        })
    ]);
}
const UnknownRpcResult = createRpcResult((0, _superstruct.unknown)());
/**
 * @internal
 */ function jsonRpcResult(schema) {
    return (0, _superstruct.coerce)(createRpcResult(schema), UnknownRpcResult, (value)=>{
        if ("error" in value) return value;
        else return {
            ...value,
            result: (0, _superstruct.create)(value.result, schema)
        };
    });
}
/**
 * @internal
 */ function jsonRpcResultAndContext(value) {
    return jsonRpcResult((0, _superstruct.type)({
        context: (0, _superstruct.type)({
            slot: (0, _superstruct.number)()
        }),
        value
    }));
}
/**
 * @internal
 */ function notificationResultAndContext(value) {
    return (0, _superstruct.type)({
        context: (0, _superstruct.type)({
            slot: (0, _superstruct.number)()
        }),
        value
    });
}
/**
 * @internal
 */ function versionedMessageFromResponse(version, response) {
    if (version === 0) return new MessageV0({
        header: response.header,
        staticAccountKeys: response.accountKeys.map((accountKey)=>new PublicKey(accountKey)),
        recentBlockhash: response.recentBlockhash,
        compiledInstructions: response.instructions.map((ix)=>({
                programIdIndex: ix.programIdIndex,
                accountKeyIndexes: ix.accounts,
                data: (0, _bs58Default.default).decode(ix.data)
            })),
        addressTableLookups: response.addressTableLookups
    });
    else return new Message(response);
}
/**
 * The level of commitment desired when querying state
 * <pre>
 *   'processed': Query the most recent block which has reached 1 confirmation by the connected node
 *   'confirmed': Query the most recent block which has reached 1 confirmation by the cluster
 *   'finalized': Query the most recent block which has been finalized by the cluster
 * </pre>
 */ const GetInflationGovernorResult = (0, _superstruct.type)({
    foundation: (0, _superstruct.number)(),
    foundationTerm: (0, _superstruct.number)(),
    initial: (0, _superstruct.number)(),
    taper: (0, _superstruct.number)(),
    terminal: (0, _superstruct.number)()
});
/**
 * The inflation reward for an epoch
 */ /**
 * Expected JSON RPC response for the "getInflationReward" message
 */ const GetInflationRewardResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.nullable)((0, _superstruct.type)({
    epoch: (0, _superstruct.number)(),
    effectiveSlot: (0, _superstruct.number)(),
    amount: (0, _superstruct.number)(),
    postBalance: (0, _superstruct.number)(),
    commission: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
}))));
/**
 * Expected JSON RPC response for the "getRecentPrioritizationFees" message
 */ const GetRecentPrioritizationFeesResult = (0, _superstruct.array)((0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    prioritizationFee: (0, _superstruct.number)()
}));
/**
 * Expected JSON RPC response for the "getInflationRate" message
 */ const GetInflationRateResult = (0, _superstruct.type)({
    total: (0, _superstruct.number)(),
    validator: (0, _superstruct.number)(),
    foundation: (0, _superstruct.number)(),
    epoch: (0, _superstruct.number)()
});
/**
 * Information about the current epoch
 */ const GetEpochInfoResult = (0, _superstruct.type)({
    epoch: (0, _superstruct.number)(),
    slotIndex: (0, _superstruct.number)(),
    slotsInEpoch: (0, _superstruct.number)(),
    absoluteSlot: (0, _superstruct.number)(),
    blockHeight: (0, _superstruct.optional)((0, _superstruct.number)()),
    transactionCount: (0, _superstruct.optional)((0, _superstruct.number)())
});
const GetEpochScheduleResult = (0, _superstruct.type)({
    slotsPerEpoch: (0, _superstruct.number)(),
    leaderScheduleSlotOffset: (0, _superstruct.number)(),
    warmup: (0, _superstruct.boolean)(),
    firstNormalEpoch: (0, _superstruct.number)(),
    firstNormalSlot: (0, _superstruct.number)()
});
/**
 * Leader schedule
 * (see https://docs.solana.com/terminology#leader-schedule)
 */ const GetLeaderScheduleResult = (0, _superstruct.record)((0, _superstruct.string)(), (0, _superstruct.array)((0, _superstruct.number)()));
/**
 * Transaction error or null
 */ const TransactionErrorResult = (0, _superstruct.nullable)((0, _superstruct.union)([
    (0, _superstruct.type)({}),
    (0, _superstruct.string)()
]));
/**
 * Signature status for a transaction
 */ const SignatureStatusResult = (0, _superstruct.type)({
    err: TransactionErrorResult
});
/**
 * Transaction signature received notification
 */ const SignatureReceivedResult = (0, _superstruct.literal)("receivedSignature");
/**
 * Version info for a node
 */ const VersionResult = (0, _superstruct.type)({
    "solana-core": (0, _superstruct.string)(),
    "feature-set": (0, _superstruct.optional)((0, _superstruct.number)())
});
const SimulatedTransactionResponseStruct = jsonRpcResultAndContext((0, _superstruct.type)({
    err: (0, _superstruct.nullable)((0, _superstruct.union)([
        (0, _superstruct.type)({}),
        (0, _superstruct.string)()
    ])),
    logs: (0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)())),
    accounts: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.nullable)((0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: (0, _superstruct.string)(),
        lamports: (0, _superstruct.number)(),
        data: (0, _superstruct.array)((0, _superstruct.string)()),
        rentEpoch: (0, _superstruct.optional)((0, _superstruct.number)())
    }))))),
    unitsConsumed: (0, _superstruct.optional)((0, _superstruct.number)()),
    returnData: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.type)({
        programId: (0, _superstruct.string)(),
        data: (0, _superstruct.tuple)([
            (0, _superstruct.string)(),
            (0, _superstruct.literal)("base64")
        ])
    })))
}));
/**
 * Expected JSON RPC response for the "getBlockProduction" message
 */ const BlockProductionResponseStruct = jsonRpcResultAndContext((0, _superstruct.type)({
    byIdentity: (0, _superstruct.record)((0, _superstruct.string)(), (0, _superstruct.array)((0, _superstruct.number)())),
    range: (0, _superstruct.type)({
        firstSlot: (0, _superstruct.number)(),
        lastSlot: (0, _superstruct.number)()
    })
}));
/**
 * A performance sample
 */ function createRpcClient(url, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent) {
    const fetch = customFetch ? customFetch : fetchImpl;
    let agent;
    if (httpAgent != null) console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let fetchWithMiddleware;
    if (fetchMiddleware) fetchWithMiddleware = async (info, init)=>{
        const modifiedFetchArgs = await new Promise((resolve, reject)=>{
            try {
                fetchMiddleware(info, init, (modifiedInfo, modifiedInit)=>resolve([
                        modifiedInfo,
                        modifiedInit
                    ]));
            } catch (error) {
                reject(error);
            }
        });
        return await fetch(...modifiedFetchArgs);
    };
    const clientBrowser = new (0, _browserDefault.default)(async (request, callback)=>{
        const options = {
            method: "POST",
            body: request,
            agent,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, httpHeaders || {}, COMMON_HTTP_HEADERS)
        };
        try {
            let too_many_requests_retries = 5;
            let res;
            let waitTime = 500;
            for(;;){
                if (fetchWithMiddleware) res = await fetchWithMiddleware(url, options);
                else res = await fetch(url, options);
                if (res.status !== 429 /* Too many requests */ ) break;
                if (disableRetryOnRateLimit === true) break;
                too_many_requests_retries -= 1;
                if (too_many_requests_retries === 0) break;
                console.log(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
                await sleep(waitTime);
                waitTime *= 2;
            }
            const text = await res.text();
            if (res.ok) callback(null, text);
            else callback(new Error(`${res.status} ${res.statusText}: ${text}`));
        } catch (err) {
            if (err instanceof Error) callback(err);
        }
    }, {});
    return clientBrowser;
}
function createRpcRequest(client) {
    return (method, args)=>{
        return new Promise((resolve, reject)=>{
            client.request(method, args, (err, response)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    };
}
function createRpcBatchRequest(client) {
    return (requests)=>{
        return new Promise((resolve, reject)=>{
            // Do nothing if requests is empty
            if (requests.length === 0) resolve([]);
            const batch = requests.map((params)=>{
                return client.request(params.methodName, params.args);
            });
            client.request(batch, (err, response)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    };
}
/**
 * Expected JSON RPC response for the "getInflationGovernor" message
 */ const GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
/**
 * Expected JSON RPC response for the "getInflationRate" message
 */ const GetInflationRateRpcResult = jsonRpcResult(GetInflationRateResult);
/**
 * Expected JSON RPC response for the "getRecentPrioritizationFees" message
 */ const GetRecentPrioritizationFeesRpcResult = jsonRpcResult(GetRecentPrioritizationFeesResult);
/**
 * Expected JSON RPC response for the "getEpochInfo" message
 */ const GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
/**
 * Expected JSON RPC response for the "getEpochSchedule" message
 */ const GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
/**
 * Expected JSON RPC response for the "getLeaderSchedule" message
 */ const GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
/**
 * Expected JSON RPC response for the "minimumLedgerSlot" and "getFirstAvailableBlock" messages
 */ const SlotRpcResult = jsonRpcResult((0, _superstruct.number)());
/**
 * Supply
 */ /**
 * Expected JSON RPC response for the "getSupply" message
 */ const GetSupplyRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    total: (0, _superstruct.number)(),
    circulating: (0, _superstruct.number)(),
    nonCirculating: (0, _superstruct.number)(),
    nonCirculatingAccounts: (0, _superstruct.array)(PublicKeyFromString)
}));
/**
 * Token amount object which returns a token amount in different formats
 * for various client use cases.
 */ /**
 * Expected JSON RPC structure for token amounts
 */ const TokenAmountResult = (0, _superstruct.type)({
    amount: (0, _superstruct.string)(),
    uiAmount: (0, _superstruct.nullable)((0, _superstruct.number)()),
    decimals: (0, _superstruct.number)(),
    uiAmountString: (0, _superstruct.optional)((0, _superstruct.string)())
});
/**
 * Token address and balance.
 */ /**
 * Expected JSON RPC response for the "getTokenLargestAccounts" message
 */ const GetTokenLargestAccountsResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    address: PublicKeyFromString,
    amount: (0, _superstruct.string)(),
    uiAmount: (0, _superstruct.nullable)((0, _superstruct.number)()),
    decimals: (0, _superstruct.number)(),
    uiAmountString: (0, _superstruct.optional)((0, _superstruct.string)())
})));
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message
 */ const GetTokenAccountsByOwner = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: (0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: PublicKeyFromString,
        lamports: (0, _superstruct.number)(),
        data: BufferFromRawAccountData,
        rentEpoch: (0, _superstruct.number)()
    })
})));
const ParsedAccountDataResult = (0, _superstruct.type)({
    program: (0, _superstruct.string)(),
    parsed: (0, _superstruct.unknown)(),
    space: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message with parsed data
 */ const GetParsedTokenAccountsByOwner = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: (0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: PublicKeyFromString,
        lamports: (0, _superstruct.number)(),
        data: ParsedAccountDataResult,
        rentEpoch: (0, _superstruct.number)()
    })
})));
/**
 * Pair of an account address and its balance
 */ /**
 * Expected JSON RPC response for the "getLargestAccounts" message
 */ const GetLargestAccountsRpcResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    lamports: (0, _superstruct.number)(),
    address: PublicKeyFromString
})));
/**
 * @internal
 */ const AccountInfoResult = (0, _superstruct.type)({
    executable: (0, _superstruct.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0, _superstruct.number)(),
    data: BufferFromRawAccountData,
    rentEpoch: (0, _superstruct.number)()
});
/**
 * @internal
 */ const KeyedAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
});
const ParsedOrRawAccountData = (0, _superstruct.coerce)((0, _superstruct.union)([
    (0, _superstruct.instance)((0, _buffer.Buffer)),
    ParsedAccountDataResult
]), (0, _superstruct.union)([
    RawAccountDataResult,
    ParsedAccountDataResult
]), (value)=>{
    if (Array.isArray(value)) return (0, _superstruct.create)(value, BufferFromRawAccountData);
    else return value;
});
/**
 * @internal
 */ const ParsedAccountInfoResult = (0, _superstruct.type)({
    executable: (0, _superstruct.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0, _superstruct.number)(),
    data: ParsedOrRawAccountData,
    rentEpoch: (0, _superstruct.number)()
});
const KeyedParsedAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: ParsedAccountInfoResult
});
/**
 * @internal
 */ const StakeActivationResult = (0, _superstruct.type)({
    state: (0, _superstruct.union)([
        (0, _superstruct.literal)("active"),
        (0, _superstruct.literal)("inactive"),
        (0, _superstruct.literal)("activating"),
        (0, _superstruct.literal)("deactivating")
    ]),
    active: (0, _superstruct.number)(),
    inactive: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "getConfirmedSignaturesForAddress2" message
 */ const GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.type)({
    signature: (0, _superstruct.string)(),
    slot: (0, _superstruct.number)(),
    err: TransactionErrorResult,
    memo: (0, _superstruct.nullable)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
})));
/**
 * Expected JSON RPC response for the "getSignaturesForAddress" message
 */ const GetSignaturesForAddressRpcResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.type)({
    signature: (0, _superstruct.string)(),
    slot: (0, _superstruct.number)(),
    err: TransactionErrorResult,
    memo: (0, _superstruct.nullable)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
})));
/***
 * Expected JSON RPC response for the "accountNotification" message
 */ const AccountNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext(AccountInfoResult)
});
/**
 * @internal
 */ const ProgramAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
});
/***
 * Expected JSON RPC response for the "programNotification" message
 */ const ProgramAccountNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext(ProgramAccountInfoResult)
});
/**
 * @internal
 */ const SlotInfoResult = (0, _superstruct.type)({
    parent: (0, _superstruct.number)(),
    slot: (0, _superstruct.number)(),
    root: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "slotNotification" message
 */ const SlotNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: SlotInfoResult
});
/**
 * Slot updates which can be used for tracking the live progress of a cluster.
 * - `"firstShredReceived"`: connected node received the first shred of a block.
 * Indicates that a new block that is being produced.
 * - `"completed"`: connected node has received all shreds of a block. Indicates
 * a block was recently produced.
 * - `"optimisticConfirmation"`: block was optimistically confirmed by the
 * cluster. It is not guaranteed that an optimistic confirmation notification
 * will be sent for every finalized blocks.
 * - `"root"`: the connected node rooted this block.
 * - `"createdBank"`: the connected node has started validating this block.
 * - `"frozen"`: the connected node has validated this block.
 * - `"dead"`: the connected node failed to validate this block.
 */ /**
 * @internal
 */ const SlotUpdateResult = (0, _superstruct.union)([
    (0, _superstruct.type)({
        type: (0, _superstruct.union)([
            (0, _superstruct.literal)("firstShredReceived"),
            (0, _superstruct.literal)("completed"),
            (0, _superstruct.literal)("optimisticConfirmation"),
            (0, _superstruct.literal)("root")
        ]),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)()
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("createdBank"),
        parent: (0, _superstruct.number)(),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)()
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("frozen"),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)(),
        stats: (0, _superstruct.type)({
            numTransactionEntries: (0, _superstruct.number)(),
            numSuccessfulTransactions: (0, _superstruct.number)(),
            numFailedTransactions: (0, _superstruct.number)(),
            maxTransactionsPerEntry: (0, _superstruct.number)()
        })
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("dead"),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)(),
        err: (0, _superstruct.string)()
    })
]);
/**
 * Expected JSON RPC response for the "slotsUpdatesNotification" message
 */ const SlotUpdateNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: SlotUpdateResult
});
/**
 * Expected JSON RPC response for the "signatureNotification" message
 */ const SignatureNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext((0, _superstruct.union)([
        SignatureStatusResult,
        SignatureReceivedResult
    ]))
});
/**
 * Expected JSON RPC response for the "rootNotification" message
 */ const RootNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: (0, _superstruct.number)()
});
const ContactInfoResult = (0, _superstruct.type)({
    pubkey: (0, _superstruct.string)(),
    gossip: (0, _superstruct.nullable)((0, _superstruct.string)()),
    tpu: (0, _superstruct.nullable)((0, _superstruct.string)()),
    rpc: (0, _superstruct.nullable)((0, _superstruct.string)()),
    version: (0, _superstruct.nullable)((0, _superstruct.string)())
});
const VoteAccountInfoResult = (0, _superstruct.type)({
    votePubkey: (0, _superstruct.string)(),
    nodePubkey: (0, _superstruct.string)(),
    activatedStake: (0, _superstruct.number)(),
    epochVoteAccount: (0, _superstruct.boolean)(),
    epochCredits: (0, _superstruct.array)((0, _superstruct.tuple)([
        (0, _superstruct.number)(),
        (0, _superstruct.number)(),
        (0, _superstruct.number)()
    ])),
    commission: (0, _superstruct.number)(),
    lastVote: (0, _superstruct.number)(),
    rootSlot: (0, _superstruct.nullable)((0, _superstruct.number)())
});
/**
 * Expected JSON RPC response for the "getVoteAccounts" message
 */ const GetVoteAccounts = jsonRpcResult((0, _superstruct.type)({
    current: (0, _superstruct.array)(VoteAccountInfoResult),
    delinquent: (0, _superstruct.array)(VoteAccountInfoResult)
}));
const ConfirmationStatus = (0, _superstruct.union)([
    (0, _superstruct.literal)("processed"),
    (0, _superstruct.literal)("confirmed"),
    (0, _superstruct.literal)("finalized")
]);
const SignatureStatusResponse = (0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    confirmations: (0, _superstruct.nullable)((0, _superstruct.number)()),
    err: TransactionErrorResult,
    confirmationStatus: (0, _superstruct.optional)(ConfirmationStatus)
});
/**
 * Expected JSON RPC response for the "getSignatureStatuses" message
 */ const GetSignatureStatusesRpcResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.nullable)(SignatureStatusResponse)));
/**
 * Expected JSON RPC response for the "getMinimumBalanceForRentExemption" message
 */ const GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult((0, _superstruct.number)());
const AddressTableLookupStruct = (0, _superstruct.type)({
    accountKey: PublicKeyFromString,
    writableIndexes: (0, _superstruct.array)((0, _superstruct.number)()),
    readonlyIndexes: (0, _superstruct.array)((0, _superstruct.number)())
});
const ConfirmedTransactionResult = (0, _superstruct.type)({
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    message: (0, _superstruct.type)({
        accountKeys: (0, _superstruct.array)((0, _superstruct.string)()),
        header: (0, _superstruct.type)({
            numRequiredSignatures: (0, _superstruct.number)(),
            numReadonlySignedAccounts: (0, _superstruct.number)(),
            numReadonlyUnsignedAccounts: (0, _superstruct.number)()
        }),
        instructions: (0, _superstruct.array)((0, _superstruct.type)({
            accounts: (0, _superstruct.array)((0, _superstruct.number)()),
            data: (0, _superstruct.string)(),
            programIdIndex: (0, _superstruct.number)()
        })),
        recentBlockhash: (0, _superstruct.string)(),
        addressTableLookups: (0, _superstruct.optional)((0, _superstruct.array)(AddressTableLookupStruct))
    })
});
const AnnotatedAccountKey = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    signer: (0, _superstruct.boolean)(),
    writable: (0, _superstruct.boolean)(),
    source: (0, _superstruct.optional)((0, _superstruct.union)([
        (0, _superstruct.literal)("transaction"),
        (0, _superstruct.literal)("lookupTable")
    ]))
});
const ConfirmedTransactionAccountsModeResult = (0, _superstruct.type)({
    accountKeys: (0, _superstruct.array)(AnnotatedAccountKey),
    signatures: (0, _superstruct.array)((0, _superstruct.string)())
});
const ParsedInstructionResult = (0, _superstruct.type)({
    parsed: (0, _superstruct.unknown)(),
    program: (0, _superstruct.string)(),
    programId: PublicKeyFromString
});
const RawInstructionResult = (0, _superstruct.type)({
    accounts: (0, _superstruct.array)(PublicKeyFromString),
    data: (0, _superstruct.string)(),
    programId: PublicKeyFromString
});
const InstructionResult = (0, _superstruct.union)([
    RawInstructionResult,
    ParsedInstructionResult
]);
const UnknownInstructionResult = (0, _superstruct.union)([
    (0, _superstruct.type)({
        parsed: (0, _superstruct.unknown)(),
        program: (0, _superstruct.string)(),
        programId: (0, _superstruct.string)()
    }),
    (0, _superstruct.type)({
        accounts: (0, _superstruct.array)((0, _superstruct.string)()),
        data: (0, _superstruct.string)(),
        programId: (0, _superstruct.string)()
    })
]);
const ParsedOrRawInstruction = (0, _superstruct.coerce)(InstructionResult, UnknownInstructionResult, (value)=>{
    if ("accounts" in value) return (0, _superstruct.create)(value, RawInstructionResult);
    else return (0, _superstruct.create)(value, ParsedInstructionResult);
});
/**
 * @internal
 */ const ParsedConfirmedTransactionResult = (0, _superstruct.type)({
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    message: (0, _superstruct.type)({
        accountKeys: (0, _superstruct.array)(AnnotatedAccountKey),
        instructions: (0, _superstruct.array)(ParsedOrRawInstruction),
        recentBlockhash: (0, _superstruct.string)(),
        addressTableLookups: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(AddressTableLookupStruct)))
    })
});
const TokenBalanceResult = (0, _superstruct.type)({
    accountIndex: (0, _superstruct.number)(),
    mint: (0, _superstruct.string)(),
    owner: (0, _superstruct.optional)((0, _superstruct.string)()),
    uiTokenAmount: TokenAmountResult
});
const LoadedAddressesResult = (0, _superstruct.type)({
    writable: (0, _superstruct.array)(PublicKeyFromString),
    readonly: (0, _superstruct.array)(PublicKeyFromString)
});
/**
 * @internal
 */ const ConfirmedTransactionMetaResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    fee: (0, _superstruct.number)(),
    innerInstructions: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.type)({
        index: (0, _superstruct.number)(),
        instructions: (0, _superstruct.array)((0, _superstruct.type)({
            accounts: (0, _superstruct.array)((0, _superstruct.number)()),
            data: (0, _superstruct.string)(),
            programIdIndex: (0, _superstruct.number)()
        }))
    })))),
    preBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    postBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    logMessages: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)()))),
    preTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    postTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    loadedAddresses: (0, _superstruct.optional)(LoadedAddressesResult),
    computeUnitsConsumed: (0, _superstruct.optional)((0, _superstruct.number)())
});
/**
 * @internal
 */ const ParsedConfirmedTransactionMetaResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    fee: (0, _superstruct.number)(),
    innerInstructions: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.type)({
        index: (0, _superstruct.number)(),
        instructions: (0, _superstruct.array)(ParsedOrRawInstruction)
    })))),
    preBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    postBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    logMessages: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)()))),
    preTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    postTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    loadedAddresses: (0, _superstruct.optional)(LoadedAddressesResult),
    computeUnitsConsumed: (0, _superstruct.optional)((0, _superstruct.number)())
});
const TransactionVersionStruct = (0, _superstruct.union)([
    (0, _superstruct.literal)(0),
    (0, _superstruct.literal)("legacy")
]);
/** @internal */ const RewardsResult = (0, _superstruct.type)({
    pubkey: (0, _superstruct.string)(),
    lamports: (0, _superstruct.number)(),
    postBalance: (0, _superstruct.nullable)((0, _superstruct.number)()),
    rewardType: (0, _superstruct.nullable)((0, _superstruct.string)()),
    commission: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
});
/**
 * Expected JSON RPC response for the "getBlock" message
 */ const GetBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionResult,
        meta: (0, _superstruct.nullable)(ConfirmedTransactionMetaResult),
        version: (0, _superstruct.optional)(TransactionVersionStruct)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getBlock" message when `transactionDetails` is `none`
 */ const GetNoneModeBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getBlock" message when `transactionDetails` is `accounts`
 */ const GetAccountsModeBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionAccountsModeResult,
        meta: (0, _superstruct.nullable)(ConfirmedTransactionMetaResult),
        version: (0, _superstruct.optional)(TransactionVersionStruct)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected parsed JSON RPC response for the "getBlock" message
 */ const GetParsedBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ParsedConfirmedTransactionResult,
        meta: (0, _superstruct.nullable)(ParsedConfirmedTransactionMetaResult),
        version: (0, _superstruct.optional)(TransactionVersionStruct)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected parsed JSON RPC response for the "getBlock" message  when `transactionDetails` is `accounts`
 */ const GetParsedAccountsModeBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionAccountsModeResult,
        meta: (0, _superstruct.nullable)(ParsedConfirmedTransactionMetaResult),
        version: (0, _superstruct.optional)(TransactionVersionStruct)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected parsed JSON RPC response for the "getBlock" message  when `transactionDetails` is `none`
 */ const GetParsedNoneModeBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getConfirmedBlock" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetBlockRpcResult} instead.
 */ const GetConfirmedBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionResult,
        meta: (0, _superstruct.nullable)(ConfirmedTransactionMetaResult)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)(RewardsResult)),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getBlock" message
 */ const GetBlockSignaturesRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getTransaction" message
 */ const GetTransactionRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    meta: ConfirmedTransactionMetaResult,
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)())),
    transaction: ConfirmedTransactionResult,
    version: (0, _superstruct.optional)(TransactionVersionStruct)
})));
/**
 * Expected parsed JSON RPC response for the "getTransaction" message
 */ const GetParsedTransactionRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    transaction: ParsedConfirmedTransactionResult,
    meta: (0, _superstruct.nullable)(ParsedConfirmedTransactionMetaResult),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)())),
    version: (0, _superstruct.optional)(TransactionVersionStruct)
})));
/**
 * Expected JSON RPC response for the "getRecentBlockhash" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetLatestBlockhashRpcResult} instead.
 */ const GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    feeCalculator: (0, _superstruct.type)({
        lamportsPerSignature: (0, _superstruct.number)()
    })
}));
/**
 * Expected JSON RPC response for the "getLatestBlockhash" message
 */ const GetLatestBlockhashRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    lastValidBlockHeight: (0, _superstruct.number)()
}));
const PerfSampleResult = (0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    numTransactions: (0, _superstruct.number)(),
    numSlots: (0, _superstruct.number)(),
    samplePeriodSecs: (0, _superstruct.number)()
});
/*
 * Expected JSON RPC response for "getRecentPerformanceSamples" message
 */ const GetRecentPerformanceSamplesRpcResult = jsonRpcResult((0, _superstruct.array)(PerfSampleResult));
/**
 * Expected JSON RPC response for the "getFeeCalculatorForBlockhash" message
 */ const GetFeeCalculatorRpcResult = jsonRpcResultAndContext((0, _superstruct.nullable)((0, _superstruct.type)({
    feeCalculator: (0, _superstruct.type)({
        lamportsPerSignature: (0, _superstruct.number)()
    })
})));
/**
 * Expected JSON RPC response for the "requestAirdrop" message
 */ const RequestAirdropRpcResult = jsonRpcResult((0, _superstruct.string)());
/**
 * Expected JSON RPC response for the "sendTransaction" message
 */ const SendTransactionRpcResult = jsonRpcResult((0, _superstruct.string)());
/**
 * Information about the latest slot being processed by a node
 */ /**
 * @internal
 */ const LogsResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    logs: (0, _superstruct.array)((0, _superstruct.string)()),
    signature: (0, _superstruct.string)()
});
/**
 * Logs result.
 */ /**
 * Expected JSON RPC response for the "logsNotification" message.
 */ const LogsNotificationResult = (0, _superstruct.type)({
    result: notificationResultAndContext(LogsResult),
    subscription: (0, _superstruct.number)()
});
/**
 * Filter for log subscriptions.
 */ /** @internal */ const COMMON_HTTP_HEADERS = {
    "solana-client": `js/${"0.0.0-development"}`
};
/**
 * A connection to a fullnode JSON RPC endpoint
 */ class Connection {
    /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal
   * A number that we increment every time an active connection closes.
   * Used to determine whether the same socket connection that was open
   * when an async operation started is the same one that's active when
   * its continuation fires.
   *
   */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /**
   * Special case.
   * After a signature is processed, RPCs automatically dispose of the
   * subscription on the server side. We need to track which of these
   * subscriptions have been disposed in such a way, so that we know
   * whether the client is dealing with a not-yet-processed signature
   * (in which case we must tear down the server subscription) or an
   * already-processed signature (in which case the client can simply
   * clear out the subscription locally without telling the server).
   *
   * NOTE: There is a proposal to eliminate this special case, here:
   * https://github.com/solana-labs/solana/issues/18892
   */ /** @internal */ /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */ constructor(endpoint, _commitmentOrConfig){
        this._commitment = void 0;
        this._confirmTransactionInitialTimeout = void 0;
        this._rpcEndpoint = void 0;
        this._rpcWsEndpoint = void 0;
        this._rpcClient = void 0;
        this._rpcRequest = void 0;
        this._rpcBatchRequest = void 0;
        this._rpcWebSocket = void 0;
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketHeartbeat = null;
        this._rpcWebSocketIdleTimeout = null;
        this._rpcWebSocketGeneration = 0;
        this._disableBlockhashCaching = false;
        this._pollingBlockhash = false;
        this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        };
        this._nextClientSubscriptionId = 0;
        this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
        this._subscriptionHashByClientSubscriptionId = {};
        this._subscriptionStateChangeCallbacksByHash = {};
        this._subscriptionCallbacksByServerSubscriptionId = {};
        this._subscriptionsByHash = {};
        this._subscriptionsAutoDisposedByRpc = new Set();
        this.getBlockHeight = (()=>{
            const requestPromises = {};
            return async (commitmentOrConfig)=>{
                const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
                const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
                const requestHash = fastStableStringify$1(args);
                requestPromises[requestHash] = requestPromises[requestHash] ?? (async ()=>{
                    try {
                        const unsafeRes = await this._rpcRequest("getBlockHeight", args);
                        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
                        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block height information");
                        return res.result;
                    } finally{
                        delete requestPromises[requestHash];
                    }
                })();
                return await requestPromises[requestHash];
            };
        })();
        let wsEndpoint;
        let httpHeaders;
        let fetch;
        let fetchMiddleware;
        let disableRetryOnRateLimit;
        let httpAgent;
        if (_commitmentOrConfig && typeof _commitmentOrConfig === "string") this._commitment = _commitmentOrConfig;
        else if (_commitmentOrConfig) {
            this._commitment = _commitmentOrConfig.commitment;
            this._confirmTransactionInitialTimeout = _commitmentOrConfig.confirmTransactionInitialTimeout;
            wsEndpoint = _commitmentOrConfig.wsEndpoint;
            httpHeaders = _commitmentOrConfig.httpHeaders;
            fetch = _commitmentOrConfig.fetch;
            fetchMiddleware = _commitmentOrConfig.fetchMiddleware;
            disableRetryOnRateLimit = _commitmentOrConfig.disableRetryOnRateLimit;
            httpAgent = _commitmentOrConfig.httpAgent;
        }
        this._rpcEndpoint = assertEndpointUrl(endpoint);
        this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);
        this._rpcClient = createRpcClient(endpoint, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent);
        this._rpcRequest = createRpcRequest(this._rpcClient);
        this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
        this._rpcWebSocket = new RpcWebSocketClient(this._rpcWsEndpoint, {
            autoconnect: false,
            max_reconnects: Infinity
        });
        this._rpcWebSocket.on("open", this._wsOnOpen.bind(this));
        this._rpcWebSocket.on("error", this._wsOnError.bind(this));
        this._rpcWebSocket.on("close", this._wsOnClose.bind(this));
        this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this));
        this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this));
        this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this));
        this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this));
        this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this));
        this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this));
        this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
    }
    /**
   * The default commitment used for requests
   */ get commitment() {
        return this._commitment;
    }
    /**
   * The RPC endpoint
   */ get rpcEndpoint() {
        return this._rpcEndpoint;
    }
    /**
   * Fetch the balance for the specified public key, return with context
   */ async getBalanceAndContext(publicKey, commitmentOrConfig) {
        /** @internal */ const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([
            publicKey.toBase58()
        ], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getBalance", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.number)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get balance for ${publicKey.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch the balance for the specified public key
   */ async getBalance(publicKey, commitmentOrConfig) {
        return await this.getBalanceAndContext(publicKey, commitmentOrConfig).then((x)=>x.value).catch((e)=>{
            throw new Error("failed to get balance of account " + publicKey.toBase58() + ": " + e);
        });
    }
    /**
   * Fetch the estimated production time of a block
   */ async getBlockTime(slot) {
        const unsafeRes = await this._rpcRequest("getBlockTime", [
            slot
        ]);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.number)())));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get block time for slot ${slot}`);
        return res.result;
    }
    /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */ async getMinimumLedgerSlot() {
        const unsafeRes = await this._rpcRequest("minimumLedgerSlot", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get minimum ledger slot");
        return res.result;
    }
    /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */ async getFirstAvailableBlock() {
        const unsafeRes = await this._rpcRequest("getFirstAvailableBlock", []);
        const res = (0, _superstruct.create)(unsafeRes, SlotRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get first available block");
        return res.result;
    }
    /**
   * Fetch information about the current supply
   */ async getSupply(config) {
        let configArg = {};
        if (typeof config === "string") configArg = {
            commitment: config
        };
        else if (config) configArg = {
            ...config,
            commitment: config && config.commitment || this.commitment
        };
        else configArg = {
            commitment: this.commitment
        };
        const unsafeRes = await this._rpcRequest("getSupply", [
            configArg
        ]);
        const res = (0, _superstruct.create)(unsafeRes, GetSupplyRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get supply");
        return res.result;
    }
    /**
   * Fetch the current supply of a token mint
   */ async getTokenSupply(tokenMintAddress, commitment) {
        const args = this._buildArgs([
            tokenMintAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenSupply", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token supply");
        return res.result;
    }
    /**
   * Fetch the current balance of a token account
   */ async getTokenAccountBalance(tokenAddress, commitment) {
        const args = this._buildArgs([
            tokenAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenAccountBalance", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token account balance");
        return res.result;
    }
    /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>>}
   */ async getTokenAccountsByOwner(ownerAddress, filter, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        let _args = [
            ownerAddress.toBase58()
        ];
        if ("mint" in filter) _args.push({
            mint: filter.mint.toBase58()
        });
        else _args.push({
            programId: filter.programId.toBase58()
        });
        const args = this._buildArgs(_args, commitment, "base64", config);
        const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTokenAccountsByOwner);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */ async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
        let _args = [
            ownerAddress.toBase58()
        ];
        if ("mint" in filter) _args.push({
            mint: filter.mint.toBase58()
        });
        else _args.push({
            programId: filter.programId.toBase58()
        });
        const args = this._buildArgs(_args, commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTokenAccountsByOwner);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch the 20 largest accounts with their current balances
   */ async getLargestAccounts(config) {
        const arg = {
            ...config,
            commitment: config && config.commitment || this.commitment
        };
        const args = arg.filter || arg.commitment ? [
            arg
        ] : [];
        const unsafeRes = await this._rpcRequest("getLargestAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetLargestAccountsRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get largest accounts");
        return res.result;
    }
    /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */ async getTokenLargestAccounts(mintAddress, commitment) {
        const args = this._buildArgs([
            mintAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenLargestAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTokenLargestAccountsResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get token largest accounts");
        return res.result;
    }
    /**
   * Fetch all the account info for the specified public key, return with context
   */ async getAccountInfoAndContext(publicKey, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([
            publicKey.toBase58()
        ], commitment, "base64", config);
        const unsafeRes = await this._rpcRequest("getAccountInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)(AccountInfoResult)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch parsed account info for the specified public key
   */ async getParsedAccountInfo(publicKey, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([
            publicKey.toBase58()
        ], commitment, "jsonParsed", config);
        const unsafeRes = await this._rpcRequest("getAccountInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)(ParsedAccountInfoResult)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch all the account info for the specified public key
   */ async getAccountInfo(publicKey, commitmentOrConfig) {
        try {
            const res = await this.getAccountInfoAndContext(publicKey, commitmentOrConfig);
            return res.value;
        } catch (e) {
            throw new Error("failed to get info about account " + publicKey.toBase58() + ": " + e);
        }
    }
    /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */ async getMultipleParsedAccounts(publicKeys, rawConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(rawConfig);
        const keys = publicKeys.map((key)=>key.toBase58());
        const args = this._buildArgs([
            keys
        ], commitment, "jsonParsed", config);
        const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.nullable)(ParsedAccountInfoResult))));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
        return res.result;
    }
    /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */ async getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const keys = publicKeys.map((key)=>key.toBase58());
        const args = this._buildArgs([
            keys
        ], commitment, "base64", config);
        const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.nullable)(AccountInfoResult))));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
        return res.result;
    }
    /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */ async getMultipleAccountsInfo(publicKeys, commitmentOrConfig) {
        const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig);
        return res.value;
    }
    /**
   * Returns epoch activation information for a stake account that has been delegated
   */ async getStakeActivation(publicKey, commitmentOrConfig, epoch) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([
            publicKey.toBase58()
        ], commitment, undefined /* encoding */ , {
            ...config,
            epoch: epoch != null ? epoch : config?.epoch
        });
        const unsafeRes = await this._rpcRequest("getStakeActivation", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult(StakeActivationResult));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get Stake Activation ${publicKey.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */ async getProgramAccounts(programId, configOrCommitment) {
        const { commitment , config  } = extractCommitmentFromConfig(configOrCommitment);
        const { encoding , ...configWithoutEncoding } = config || {};
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment, encoding || "base64", configWithoutEncoding);
        const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(KeyedAccountInfoResult)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
        return res.result;
    }
    /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */ async getParsedProgramAccounts(programId, configOrCommitment) {
        const { commitment , config  } = extractCommitmentFromConfig(configOrCommitment);
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment, "jsonParsed", config);
        const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(KeyedParsedAccountInfoResult)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
        return res.result;
    }
    // eslint-disable-next-line no-dupe-class-members
    async confirmTransaction(strategy, commitment) {
        let rawSignature;
        if (typeof strategy == "string") rawSignature = strategy;
        else {
            const config = strategy;
            if (config.abortSignal?.aborted) return Promise.reject(config.abortSignal.reason);
            rawSignature = config.signature;
        }
        let decodedSignature;
        try {
            decodedSignature = (0, _bs58Default.default).decode(rawSignature);
        } catch (err) {
            throw new Error("signature must be base58 encoded: " + rawSignature);
        }
        assert(decodedSignature.length === 64, "signature has invalid length");
        if (typeof strategy === "string") return await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: commitment || this.commitment,
            signature: rawSignature
        });
        else if ("lastValidBlockHeight" in strategy) return await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: commitment || this.commitment,
            strategy
        });
        else return await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: commitment || this.commitment,
            strategy
        });
    }
    getCancellationPromise(signal) {
        return new Promise((_, reject)=>{
            if (signal == null) return;
            if (signal.aborted) reject(signal.reason);
            else signal.addEventListener("abort", ()=>{
                reject(signal.reason);
            });
        });
    }
    getTransactionConfirmationPromise({ commitment , signature  }) {
        let signatureSubscriptionId;
        let disposeSignatureSubscriptionStateChangeObserver;
        let done = false;
        const confirmationPromise = new Promise((resolve, reject)=>{
            try {
                signatureSubscriptionId = this.onSignature(signature, (result, context)=>{
                    signatureSubscriptionId = undefined;
                    const response = {
                        context,
                        value: result
                    };
                    resolve({
                        __type: TransactionStatus.PROCESSED,
                        response
                    });
                }, commitment);
                const subscriptionSetupPromise = new Promise((resolveSubscriptionSetup)=>{
                    if (signatureSubscriptionId == null) resolveSubscriptionSetup();
                    else disposeSignatureSubscriptionStateChangeObserver = this._onSubscriptionStateChange(signatureSubscriptionId, (nextState)=>{
                        if (nextState === "subscribed") resolveSubscriptionSetup();
                    });
                });
                (async ()=>{
                    await subscriptionSetupPromise;
                    if (done) return;
                    const response = await this.getSignatureStatus(signature);
                    if (done) return;
                    if (response == null) return;
                    const { context , value  } = response;
                    if (value == null) return;
                    if (value?.err) reject(value.err);
                    else {
                        switch(commitment){
                            case "confirmed":
                            case "single":
                            case "singleGossip":
                                if (value.confirmationStatus === "processed") return;
                                break;
                            case "finalized":
                            case "max":
                            case "root":
                                if (value.confirmationStatus === "processed" || value.confirmationStatus === "confirmed") return;
                                break;
                            // exhaust enums to ensure full coverage
                            case "processed":
                            case "recent":
                        }
                        done = true;
                        resolve({
                            __type: TransactionStatus.PROCESSED,
                            response: {
                                context,
                                value
                            }
                        });
                    }
                })();
            } catch (err) {
                reject(err);
            }
        });
        const abortConfirmation = ()=>{
            if (disposeSignatureSubscriptionStateChangeObserver) {
                disposeSignatureSubscriptionStateChangeObserver();
                disposeSignatureSubscriptionStateChangeObserver = undefined;
            }
            if (signatureSubscriptionId != null) {
                this.removeSignatureListener(signatureSubscriptionId);
                signatureSubscriptionId = undefined;
            }
        };
        return {
            abortConfirmation,
            confirmationPromise
        };
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({ commitment , strategy: { abortSignal , lastValidBlockHeight , signature  }  }) {
        let done = false;
        const expiryPromise = new Promise((resolve)=>{
            const checkBlockHeight = async ()=>{
                try {
                    const blockHeight = await this.getBlockHeight(commitment);
                    return blockHeight;
                } catch (_e) {
                    return -1;
                }
            };
            (async ()=>{
                let currentBlockHeight = await checkBlockHeight();
                if (done) return;
                while(currentBlockHeight <= lastValidBlockHeight){
                    await sleep(1000);
                    if (done) return;
                    currentBlockHeight = await checkBlockHeight();
                    if (done) return;
                }
                resolve({
                    __type: TransactionStatus.BLOCKHEIGHT_EXCEEDED
                });
            })();
        });
        const { abortConfirmation , confirmationPromise  } = this.getTransactionConfirmationPromise({
            commitment,
            signature
        });
        const cancellationPromise = this.getCancellationPromise(abortSignal);
        let result;
        try {
            const outcome = await Promise.race([
                cancellationPromise,
                confirmationPromise,
                expiryPromise
            ]);
            if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response;
            else throw new TransactionExpiredBlockheightExceededError(signature);
        } finally{
            done = true;
            abortConfirmation();
        }
        return result;
    }
    async confirmTransactionUsingDurableNonceStrategy({ commitment , strategy: { abortSignal , minContextSlot , nonceAccountPubkey , nonceValue , signature  }  }) {
        let done = false;
        const expiryPromise = new Promise((resolve)=>{
            let currentNonceValue = nonceValue;
            let lastCheckedSlot = null;
            const getCurrentNonceValue = async ()=>{
                try {
                    const { context , value: nonceAccount  } = await this.getNonceAndContext(nonceAccountPubkey, {
                        commitment,
                        minContextSlot
                    });
                    lastCheckedSlot = context.slot;
                    return nonceAccount?.nonce;
                } catch (e) {
                    // If for whatever reason we can't reach/read the nonce
                    // account, just keep using the last-known value.
                    return currentNonceValue;
                }
            };
            (async ()=>{
                currentNonceValue = await getCurrentNonceValue();
                if (done) return;
                while(true // eslint-disable-line no-constant-condition
                ){
                    if (nonceValue !== currentNonceValue) {
                        resolve({
                            __type: TransactionStatus.NONCE_INVALID,
                            slotInWhichNonceDidAdvance: lastCheckedSlot
                        });
                        return;
                    }
                    await sleep(2000);
                    if (done) return;
                    currentNonceValue = await getCurrentNonceValue();
                    if (done) return;
                }
            })();
        });
        const { abortConfirmation , confirmationPromise  } = this.getTransactionConfirmationPromise({
            commitment,
            signature
        });
        const cancellationPromise = this.getCancellationPromise(abortSignal);
        let result;
        try {
            const outcome = await Promise.race([
                cancellationPromise,
                confirmationPromise,
                expiryPromise
            ]);
            if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response;
            else {
                // Double check that the transaction is indeed unconfirmed.
                let signatureStatus;
                while(true // eslint-disable-line no-constant-condition
                ){
                    const status = await this.getSignatureStatus(signature);
                    if (status == null) break;
                    if (status.context.slot < (outcome.slotInWhichNonceDidAdvance ?? minContextSlot)) {
                        await sleep(400);
                        continue;
                    }
                    signatureStatus = status;
                    break;
                }
                if (signatureStatus?.value) {
                    const commitmentForStatus = commitment || "finalized";
                    const { confirmationStatus  } = signatureStatus.value;
                    switch(commitmentForStatus){
                        case "processed":
                        case "recent":
                            if (confirmationStatus !== "processed" && confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                            break;
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                            if (confirmationStatus !== "confirmed" && confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                            break;
                        case "finalized":
                        case "max":
                        case "root":
                            if (confirmationStatus !== "finalized") throw new TransactionExpiredNonceInvalidError(signature);
                            break;
                        default:
                            // Exhaustive switch.
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            ((_)=>{})(commitmentForStatus);
                    }
                    result = {
                        context: signatureStatus.context,
                        value: {
                            err: signatureStatus.value.err
                        }
                    };
                } else throw new TransactionExpiredNonceInvalidError(signature);
            }
        } finally{
            done = true;
            abortConfirmation();
        }
        return result;
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({ commitment , signature  }) {
        let timeoutId;
        const expiryPromise = new Promise((resolve)=>{
            let timeoutMs = this._confirmTransactionInitialTimeout || 60000;
            switch(commitment){
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                    timeoutMs = this._confirmTransactionInitialTimeout || 30000;
                    break;
            }
            timeoutId = setTimeout(()=>resolve({
                    __type: TransactionStatus.TIMED_OUT,
                    timeoutMs
                }), timeoutMs);
        });
        const { abortConfirmation , confirmationPromise  } = this.getTransactionConfirmationPromise({
            commitment,
            signature
        });
        let result;
        try {
            const outcome = await Promise.race([
                confirmationPromise,
                expiryPromise
            ]);
            if (outcome.__type === TransactionStatus.PROCESSED) result = outcome.response;
            else throw new TransactionExpiredTimeoutError(signature, outcome.timeoutMs / 1000);
        } finally{
            clearTimeout(timeoutId);
            abortConfirmation();
        }
        return result;
    }
    /**
   * Return the list of nodes that are currently participating in the cluster
   */ async getClusterNodes() {
        const unsafeRes = await this._rpcRequest("getClusterNodes", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(ContactInfoResult)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get cluster nodes");
        return res.result;
    }
    /**
   * Return the list of nodes that are currently participating in the cluster
   */ async getVoteAccounts(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getVoteAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetVoteAccounts);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get vote accounts");
        return res.result;
    }
    /**
   * Fetch the current slot that the node is processing
   */ async getSlot(commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getSlot", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot");
        return res.result;
    }
    /**
   * Fetch the current slot leader of the cluster
   */ async getSlotLeader(commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getSlotLeader", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.string)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot leader");
        return res.result;
    }
    /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */ async getSlotLeaders(startSlot, limit) {
        const args = [
            startSlot,
            limit
        ];
        const unsafeRes = await this._rpcRequest("getSlotLeaders", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(PublicKeyFromString)));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get slot leaders");
        return res.result;
    }
    /**
   * Fetch the current status of a signature
   */ async getSignatureStatus(signature, config) {
        const { context , value: values  } = await this.getSignatureStatuses([
            signature
        ], config);
        assert(values.length === 1);
        const value = values[0];
        return {
            context,
            value
        };
    }
    /**
   * Fetch the current statuses of a batch of signatures
   */ async getSignatureStatuses(signatures, config) {
        const params = [
            signatures
        ];
        if (config) params.push(config);
        const unsafeRes = await this._rpcRequest("getSignatureStatuses", params);
        const res = (0, _superstruct.create)(unsafeRes, GetSignatureStatusesRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get signature status");
        return res.result;
    }
    /**
   * Fetch the current transaction count of the cluster
   */ async getTransactionCount(commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getTransactionCount", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction count");
        return res.result;
    }
    /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */ async getTotalSupply(commitment) {
        const result = await this.getSupply({
            commitment,
            excludeNonCirculatingAccountsList: true
        });
        return result.value.total;
    }
    /**
   * Fetch the cluster InflationGovernor parameters
   */ async getInflationGovernor(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getInflationGovernor", args);
        const res = (0, _superstruct.create)(unsafeRes, GetInflationGovernorRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation");
        return res.result;
    }
    /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */ async getInflationReward(addresses, epoch, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([
            addresses.map((pubkey)=>pubkey.toBase58())
        ], commitment, undefined /* encoding */ , {
            ...config,
            epoch: epoch != null ? epoch : config?.epoch
        });
        const unsafeRes = await this._rpcRequest("getInflationReward", args);
        const res = (0, _superstruct.create)(unsafeRes, GetInflationRewardResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation reward");
        return res.result;
    }
    /**
   * Fetch the specific inflation values for the current epoch
   */ async getInflationRate() {
        const unsafeRes = await this._rpcRequest("getInflationRate", []);
        const res = (0, _superstruct.create)(unsafeRes, GetInflationRateRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get inflation rate");
        return res.result;
    }
    /**
   * Fetch the Epoch Info parameters
   */ async getEpochInfo(commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getEpochInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, GetEpochInfoRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get epoch info");
        return res.result;
    }
    /**
   * Fetch the Epoch Schedule parameters
   */ async getEpochSchedule() {
        const unsafeRes = await this._rpcRequest("getEpochSchedule", []);
        const res = (0, _superstruct.create)(unsafeRes, GetEpochScheduleRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get epoch schedule");
        const epochSchedule = res.result;
        return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
    }
    /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */ async getLeaderSchedule() {
        const unsafeRes = await this._rpcRequest("getLeaderSchedule", []);
        const res = (0, _superstruct.create)(unsafeRes, GetLeaderScheduleRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get leader schedule");
        return res.result;
    }
    /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */ async getMinimumBalanceForRentExemption(dataLength, commitment) {
        const args = this._buildArgs([
            dataLength
        ], commitment);
        const unsafeRes = await this._rpcRequest("getMinimumBalanceForRentExemption", args);
        const res = (0, _superstruct.create)(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);
        if ("error" in res) {
            console.warn("Unable to fetch minimum balance for rent exemption");
            return 0;
        }
        return res.result;
    }
    /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */ async getRecentBlockhashAndContext(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getRecentBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetRecentBlockhashAndContextRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent blockhash");
        return res.result;
    }
    /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */ async getRecentPerformanceSamples(limit) {
        const unsafeRes = await this._rpcRequest("getRecentPerformanceSamples", limit ? [
            limit
        ] : []);
        const res = (0, _superstruct.create)(unsafeRes, GetRecentPerformanceSamplesRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent performance samples");
        return res.result;
    }
    /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */ async getFeeCalculatorForBlockhash(blockhash, commitment) {
        const args = this._buildArgs([
            blockhash
        ], commitment);
        const unsafeRes = await this._rpcRequest("getFeeCalculatorForBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetFeeCalculatorRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get fee calculator");
        const { context , value  } = res.result;
        return {
            context,
            value: value !== null ? value.feeCalculator : null
        };
    }
    /**
   * Fetch the fee for a message from the cluster, return with context
   */ async getFeeForMessage(message, commitment) {
        const wireMessage = toBuffer(message.serialize()).toString("base64");
        const args = this._buildArgs([
            wireMessage
        ], commitment);
        const unsafeRes = await this._rpcRequest("getFeeForMessage", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)((0, _superstruct.number)())));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get fee for message");
        if (res.result === null) throw new Error("invalid blockhash");
        return res.result;
    }
    /**
   * Fetch a list of prioritization fees from recent blocks.
   */ async getRecentPrioritizationFees(config) {
        const accounts = config?.lockedWritableAccounts?.map((key)=>key.toBase58());
        const args = this._buildArgs(accounts?.length ? [
            accounts
        ] : []);
        const unsafeRes = await this._rpcRequest("getRecentPrioritizationFees", args);
        const res = (0, _superstruct.create)(unsafeRes, GetRecentPrioritizationFeesRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get recent prioritization fees");
        return res.result;
    }
    /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */ async getRecentBlockhash(commitment) {
        try {
            const res = await this.getRecentBlockhashAndContext(commitment);
            return res.value;
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e);
        }
    }
    /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */ async getLatestBlockhash(commitmentOrConfig) {
        try {
            const res = await this.getLatestBlockhashAndContext(commitmentOrConfig);
            return res.value;
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e);
        }
    }
    /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */ async getLatestBlockhashAndContext(commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getLatestBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetLatestBlockhashRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get latest blockhash");
        return res.result;
    }
    /**
   * Fetch the node version
   */ async getVersion() {
        const unsafeRes = await this._rpcRequest("getVersion", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult(VersionResult));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get version");
        return res.result;
    }
    /**
   * Fetch the genesis hash
   */ async getGenesisHash() {
        const unsafeRes = await this._rpcRequest("getGenesisHash", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.string)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get genesis hash");
        return res.result;
    }
    /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */ /**
   * Fetch a processed block from the cluster.
   */ // eslint-disable-next-line no-dupe-class-members
    async getBlock(slot, rawConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(rawConfig);
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getBlock", args);
        try {
            switch(config?.transactionDetails){
                case "accounts":
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetAccountsModeBlockRpcResult);
                        if ("error" in res) throw res.error;
                        return res.result;
                    }
                case "none":
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetNoneModeBlockRpcResult);
                        if ("error" in res) throw res.error;
                        return res.result;
                    }
                default:
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetBlockRpcResult);
                        if ("error" in res) throw res.error;
                        const { result  } = res;
                        return result ? {
                            ...result,
                            transactions: result.transactions.map(({ transaction , meta , version  })=>({
                                    meta,
                                    transaction: {
                                        ...transaction,
                                        message: versionedMessageFromResponse(version, transaction.message)
                                    },
                                    version
                                }))
                        } : null;
                    }
            }
        } catch (e) {
            throw new SolanaJSONRPCError(e, "failed to get confirmed block");
        }
    }
    /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */ // eslint-disable-next-line no-dupe-class-members
    async getParsedBlock(slot, rawConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(rawConfig);
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, "jsonParsed", config);
        const unsafeRes = await this._rpcRequest("getBlock", args);
        try {
            switch(config?.transactionDetails){
                case "accounts":
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetParsedAccountsModeBlockRpcResult);
                        if ("error" in res) throw res.error;
                        return res.result;
                    }
                case "none":
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetParsedNoneModeBlockRpcResult);
                        if ("error" in res) throw res.error;
                        return res.result;
                    }
                default:
                    {
                        const res = (0, _superstruct.create)(unsafeRes, GetParsedBlockRpcResult);
                        if ("error" in res) throw res.error;
                        return res.result;
                    }
            }
        } catch (e) {
            throw new SolanaJSONRPCError(e, "failed to get block");
        }
    }
    /*
   * Returns the current block height of the node
   */ /*
   * Returns recent block production information from the current or previous epoch
   */ async getBlockProduction(configOrCommitment) {
        let extra;
        let commitment;
        if (typeof configOrCommitment === "string") commitment = configOrCommitment;
        else if (configOrCommitment) {
            const { commitment: c , ...rest } = configOrCommitment;
            commitment = c;
            extra = rest;
        }
        const args = this._buildArgs([], commitment, "base64", extra);
        const unsafeRes = await this._rpcRequest("getBlockProduction", args);
        const res = (0, _superstruct.create)(unsafeRes, BlockProductionResponseStruct);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block production information");
        return res.result;
    }
    /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */ /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */ // eslint-disable-next-line no-dupe-class-members
    async getTransaction(signature, rawConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(rawConfig);
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment, undefined /* encoding */ , config);
        const unsafeRes = await this._rpcRequest("getTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
        const result = res.result;
        if (!result) return result;
        return {
            ...result,
            transaction: {
                ...result.transaction,
                message: versionedMessageFromResponse(result.version, result.transaction.message)
            }
        };
    }
    /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */ async getParsedTransaction(signature, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment, "jsonParsed", config);
        const unsafeRes = await this._rpcRequest("getTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
        return res.result;
    }
    /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */ async getParsedTransactions(signatures, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment, "jsonParsed", config);
            return {
                methodName: "getTransaction",
                args
            };
        });
        const unsafeRes = await this._rpcBatchRequest(batch);
        const res = unsafeRes.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
            if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transactions");
            return res.result;
        });
        return res;
    }
    /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */ /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */ // eslint-disable-next-line no-dupe-class-members
    async getTransactions(signatures, commitmentOrConfig) {
        const { commitment , config  } = extractCommitmentFromConfig(commitmentOrConfig);
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment, undefined /* encoding */ , config);
            return {
                methodName: "getTransaction",
                args
            };
        });
        const unsafeRes = await this._rpcBatchRequest(batch);
        const res = unsafeRes.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
            if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transactions");
            const result = res.result;
            if (!result) return result;
            return {
                ...result,
                transaction: {
                    ...result.transaction,
                    message: versionedMessageFromResponse(result.version, result.transaction.message)
                }
            };
        });
        return res;
    }
    /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */ async getConfirmedBlock(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment);
        const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetConfirmedBlockRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
        const result = res.result;
        if (!result) throw new Error("Confirmed block " + slot + " not found");
        const block = {
            ...result,
            transactions: result.transactions.map(({ transaction , meta  })=>{
                const message = new Message(transaction.message);
                return {
                    meta,
                    transaction: {
                        ...transaction,
                        message
                    }
                };
            })
        };
        return {
            ...block,
            transactions: block.transactions.map(({ transaction , meta  })=>{
                return {
                    meta,
                    transaction: Transaction.populate(transaction.message, transaction.signatures)
                };
            })
        };
    }
    /**
   * Fetch confirmed blocks between two slots
   */ async getBlocks(startSlot, endSlot, commitment) {
        const args = this._buildArgsAtLeastConfirmed(endSlot !== undefined ? [
            startSlot,
            endSlot
        ] : [
            startSlot
        ], commitment);
        const unsafeRes = await this._rpcRequest("getBlocks", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)((0, _superstruct.number)())));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get blocks");
        return res.result;
    }
    /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */ async getBlockSignatures(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, undefined, {
            transactionDetails: "signatures",
            rewards: false
        });
        const unsafeRes = await this._rpcRequest("getBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetBlockSignaturesRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get block");
        const result = res.result;
        if (!result) throw new Error("Block " + slot + " not found");
        return result;
    }
    /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */ async getConfirmedBlockSignatures(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, undefined, {
            transactionDetails: "signatures",
            rewards: false
        });
        const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetBlockSignaturesRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed block");
        const result = res.result;
        if (!result) throw new Error("Confirmed block " + slot + " not found");
        return result;
    }
    /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */ async getConfirmedTransaction(signature, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment);
        const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get transaction");
        const result = res.result;
        if (!result) return result;
        const message = new Message(result.transaction.message);
        const signatures = result.transaction.signatures;
        return {
            ...result,
            transaction: Transaction.populate(message, signatures)
        };
    }
    /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */ async getParsedConfirmedTransaction(signature, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed transaction");
        return res.result;
    }
    /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */ async getParsedConfirmedTransactions(signatures, commitment) {
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment, "jsonParsed");
            return {
                methodName: "getConfirmedTransaction",
                args
            };
        });
        const unsafeRes = await this._rpcBatchRequest(batch);
        const res = unsafeRes.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
            if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed transactions");
            return res.result;
        });
        return res;
    }
    /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */ async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
        let options = {};
        let firstAvailableBlock = await this.getFirstAvailableBlock();
        while(!("until" in options)){
            startSlot--;
            if (startSlot <= 0 || startSlot < firstAvailableBlock) break;
            try {
                const block = await this.getConfirmedBlockSignatures(startSlot, "finalized");
                if (block.signatures.length > 0) options.until = block.signatures[block.signatures.length - 1].toString();
            } catch (err) {
                if (err instanceof Error && err.message.includes("skipped")) continue;
                else throw err;
            }
        }
        let highestConfirmedRoot = await this.getSlot("finalized");
        while(!("before" in options)){
            endSlot++;
            if (endSlot > highestConfirmedRoot) break;
            try {
                const block = await this.getConfirmedBlockSignatures(endSlot);
                if (block.signatures.length > 0) options.before = block.signatures[block.signatures.length - 1].toString();
            } catch (err) {
                if (err instanceof Error && err.message.includes("skipped")) continue;
                else throw err;
            }
        }
        const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
        return confirmedSignatureInfo.map((info)=>info.signature);
    }
    /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */ async getConfirmedSignaturesForAddress2(address, options, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            address.toBase58()
        ], commitment, undefined, options);
        const unsafeRes = await this._rpcRequest("getConfirmedSignaturesForAddress2", args);
        const res = (0, _superstruct.create)(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get confirmed signatures for address");
        return res.result;
    }
    /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */ async getSignaturesForAddress(address, options, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            address.toBase58()
        ], commitment, undefined, options);
        const unsafeRes = await this._rpcRequest("getSignaturesForAddress", args);
        const res = (0, _superstruct.create)(unsafeRes, GetSignaturesForAddressRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, "failed to get signatures for address");
        return res.result;
    }
    async getAddressLookupTable(accountKey, config) {
        const { context , value: accountInfo  } = await this.getAccountInfoAndContext(accountKey, config);
        let value = null;
        if (accountInfo !== null) value = new AddressLookupTableAccount({
            key: accountKey,
            state: AddressLookupTableAccount.deserialize(accountInfo.data)
        });
        return {
            context,
            value
        };
    }
    /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */ async getNonceAndContext(nonceAccount, commitmentOrConfig) {
        const { context , value: accountInfo  } = await this.getAccountInfoAndContext(nonceAccount, commitmentOrConfig);
        let value = null;
        if (accountInfo !== null) value = NonceAccount.fromAccountData(accountInfo.data);
        return {
            context,
            value
        };
    }
    /**
   * Fetch the contents of a Nonce account from the cluster
   */ async getNonce(nonceAccount, commitmentOrConfig) {
        return await this.getNonceAndContext(nonceAccount, commitmentOrConfig).then((x)=>x.value).catch((e)=>{
            throw new Error("failed to get nonce for account " + nonceAccount.toBase58() + ": " + e);
        });
    }
    /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */ async requestAirdrop(to, lamports) {
        const unsafeRes = await this._rpcRequest("requestAirdrop", [
            to.toBase58(),
            lamports
        ]);
        const res = (0, _superstruct.create)(unsafeRes, RequestAirdropRpcResult);
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `airdrop to ${to.toBase58()} failed`);
        return res.result;
    }
    /**
   * @internal
   */ async _blockhashWithExpiryBlockHeight(disableCache) {
        if (!disableCache) {
            // Wait for polling to finish
            while(this._pollingBlockhash)await sleep(100);
            const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;
            const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;
            if (this._blockhashInfo.latestBlockhash !== null && !expired) return this._blockhashInfo.latestBlockhash;
        }
        return await this._pollNewBlockhash();
    }
    /**
   * @internal
   */ async _pollNewBlockhash() {
        this._pollingBlockhash = true;
        try {
            const startTime = Date.now();
            const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
            const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;
            for(let i = 0; i < 50; i++){
                const latestBlockhash = await this.getLatestBlockhash("finalized");
                if (cachedBlockhash !== latestBlockhash.blockhash) {
                    this._blockhashInfo = {
                        latestBlockhash,
                        lastFetch: Date.now(),
                        transactionSignatures: [],
                        simulatedSignatures: []
                    };
                    return latestBlockhash;
                }
                // Sleep for approximately half a slot
                await sleep(MS_PER_SLOT / 2);
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
        } finally{
            this._pollingBlockhash = false;
        }
    }
    /**
   * get the stake minimum delegation
   */ async getStakeMinimumDelegation(config) {
        const { commitment , config: configArg  } = extractCommitmentFromConfig(config);
        const args = this._buildArgs([], commitment, "base64", configArg);
        const unsafeRes = await this._rpcRequest("getStakeMinimumDelegation", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.number)()));
        if ("error" in res) throw new SolanaJSONRPCError(res.error, `failed to get stake minimum delegation`);
        return res.result;
    }
    /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */ /**
   * Simulate a transaction
   */ // eslint-disable-next-line no-dupe-class-members
    async simulateTransaction(transactionOrMessage, configOrSigners, includeAccounts) {
        if ("message" in transactionOrMessage) {
            const versionedTx = transactionOrMessage;
            const wireTransaction = versionedTx.serialize();
            const encodedTransaction = (0, _buffer.Buffer).from(wireTransaction).toString("base64");
            if (Array.isArray(configOrSigners) || includeAccounts !== undefined) throw new Error("Invalid arguments");
            const config = configOrSigners || {};
            config.encoding = "base64";
            if (!("commitment" in config)) config.commitment = this.commitment;
            const args = [
                encodedTransaction,
                config
            ];
            const unsafeRes = await this._rpcRequest("simulateTransaction", args);
            const res = (0, _superstruct.create)(unsafeRes, SimulatedTransactionResponseStruct);
            if ("error" in res) throw new Error("failed to simulate transaction: " + res.error.message);
            return res.result;
        }
        let transaction;
        if (transactionOrMessage instanceof Transaction) {
            let originalTx = transactionOrMessage;
            transaction = new Transaction();
            transaction.feePayer = originalTx.feePayer;
            transaction.instructions = transactionOrMessage.instructions;
            transaction.nonceInfo = originalTx.nonceInfo;
            transaction.signatures = originalTx.signatures;
        } else {
            transaction = Transaction.populate(transactionOrMessage);
            // HACK: this function relies on mutating the populated transaction
            transaction._message = transaction._json = undefined;
        }
        if (configOrSigners !== undefined && !Array.isArray(configOrSigners)) throw new Error("Invalid arguments");
        const signers = configOrSigners;
        if (transaction.nonceInfo && signers) transaction.sign(...signers);
        else {
            let disableCache = this._disableBlockhashCaching;
            for(;;){
                const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                transaction.recentBlockhash = latestBlockhash.blockhash;
                if (!signers) break;
                transaction.sign(...signers);
                if (!transaction.signature) throw new Error("!signature"); // should never happen
                const signature = transaction.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(signature) && !this._blockhashInfo.transactionSignatures.includes(signature)) {
                    // The signature of this transaction has not been seen before with the
                    // current recentBlockhash, all done. Let's break
                    this._blockhashInfo.simulatedSignatures.push(signature);
                    break;
                } else // This transaction would be treated as duplicate (its derived signature
                // matched to one of already recorded signatures).
                // So, we must fetch a new blockhash for a different signature by disabling
                // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
                disableCache = true;
            }
        }
        const message = transaction._compile();
        const signData = message.serialize();
        const wireTransaction = transaction._serialize(signData);
        const encodedTransaction = wireTransaction.toString("base64");
        const config = {
            encoding: "base64",
            commitment: this.commitment
        };
        if (includeAccounts) {
            const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map((key)=>key.toBase58());
            config["accounts"] = {
                encoding: "base64",
                addresses
            };
        }
        if (signers) config.sigVerify = true;
        const args = [
            encodedTransaction,
            config
        ];
        const unsafeRes = await this._rpcRequest("simulateTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, SimulatedTransactionResponseStruct);
        if ("error" in res) {
            let logs;
            if ("data" in res.error) {
                logs = res.error.data.logs;
                if (logs && Array.isArray(logs)) {
                    const traceIndent = "\n    ";
                    const logTrace = traceIndent + logs.join(traceIndent);
                    console.error(res.error.message, logTrace);
                }
            }
            throw new SendTransactionError("failed to simulate transaction: " + res.error.message, logs);
        }
        return res.result;
    }
    /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */ /**
   * Sign and send a transaction
   */ // eslint-disable-next-line no-dupe-class-members
    async sendTransaction(transaction, signersOrOptions, options) {
        if ("version" in transaction) {
            if (signersOrOptions && Array.isArray(signersOrOptions)) throw new Error("Invalid arguments");
            const wireTransaction = transaction.serialize();
            return await this.sendRawTransaction(wireTransaction, signersOrOptions);
        }
        if (signersOrOptions === undefined || !Array.isArray(signersOrOptions)) throw new Error("Invalid arguments");
        const signers = signersOrOptions;
        if (transaction.nonceInfo) transaction.sign(...signers);
        else {
            let disableCache = this._disableBlockhashCaching;
            for(;;){
                const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                transaction.recentBlockhash = latestBlockhash.blockhash;
                transaction.sign(...signers);
                if (!transaction.signature) throw new Error("!signature"); // should never happen
                const signature = transaction.signature.toString("base64");
                if (!this._blockhashInfo.transactionSignatures.includes(signature)) {
                    // The signature of this transaction has not been seen before with the
                    // current recentBlockhash, all done. Let's break
                    this._blockhashInfo.transactionSignatures.push(signature);
                    break;
                } else // This transaction would be treated as duplicate (its derived signature
                // matched to one of already recorded signatures).
                // So, we must fetch a new blockhash for a different signature by disabling
                // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
                disableCache = true;
            }
        }
        const wireTransaction = transaction.serialize();
        return await this.sendRawTransaction(wireTransaction, options);
    }
    /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */ async sendRawTransaction(rawTransaction, options) {
        const encodedTransaction = toBuffer(rawTransaction).toString("base64");
        const result = await this.sendEncodedTransaction(encodedTransaction, options);
        return result;
    }
    /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */ async sendEncodedTransaction(encodedTransaction, options) {
        const config = {
            encoding: "base64"
        };
        const skipPreflight = options && options.skipPreflight;
        const preflightCommitment = options && options.preflightCommitment || this.commitment;
        if (options && options.maxRetries != null) config.maxRetries = options.maxRetries;
        if (options && options.minContextSlot != null) config.minContextSlot = options.minContextSlot;
        if (skipPreflight) config.skipPreflight = skipPreflight;
        if (preflightCommitment) config.preflightCommitment = preflightCommitment;
        const args = [
            encodedTransaction,
            config
        ];
        const unsafeRes = await this._rpcRequest("sendTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, SendTransactionRpcResult);
        if ("error" in res) {
            let logs;
            if ("data" in res.error) logs = res.error.data.logs;
            throw new SendTransactionError("failed to send transaction: " + res.error.message, logs);
        }
        return res.result;
    }
    /**
   * @internal
   */ _wsOnOpen() {
        this._rpcWebSocketConnected = true;
        this._rpcWebSocketHeartbeat = setInterval(()=>{
            // Ping server every 5s to prevent idle timeouts
            (async ()=>{
                try {
                    await this._rpcWebSocket.notify("ping");
                // eslint-disable-next-line no-empty
                } catch  {}
            })();
        }, 5000);
        this._updateSubscriptions();
    }
    /**
   * @internal
   */ _wsOnError(err) {
        this._rpcWebSocketConnected = false;
        console.error("ws error:", err.message);
    }
    /**
   * @internal
   */ _wsOnClose(code) {
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER;
        if (this._rpcWebSocketIdleTimeout) {
            clearTimeout(this._rpcWebSocketIdleTimeout);
            this._rpcWebSocketIdleTimeout = null;
        }
        if (this._rpcWebSocketHeartbeat) {
            clearInterval(this._rpcWebSocketHeartbeat);
            this._rpcWebSocketHeartbeat = null;
        }
        if (code === 1000) {
            // explicit close, check if any subscriptions have been made since close
            this._updateSubscriptions();
            return;
        }
        // implicit close, prepare subscriptions for auto-reconnect
        this._subscriptionCallbacksByServerSubscriptionId = {};
        Object.entries(this._subscriptionsByHash).forEach(([hash, subscription])=>{
            this._setSubscription(hash, {
                ...subscription,
                state: "pending"
            });
        });
    }
    /**
   * @internal
   */ _setSubscription(hash, nextSubscription) {
        const prevState = this._subscriptionsByHash[hash]?.state;
        this._subscriptionsByHash[hash] = nextSubscription;
        if (prevState !== nextSubscription.state) {
            const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash];
            if (stateChangeCallbacks) stateChangeCallbacks.forEach((cb)=>{
                try {
                    cb(nextSubscription.state);
                // eslint-disable-next-line no-empty
                } catch  {}
            });
        }
    }
    /**
   * @internal
   */ _onSubscriptionStateChange(clientSubscriptionId, callback) {
        var _this$_subscriptionSt;
        const hash = this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
        if (hash == null) return ()=>{};
        const stateChangeCallbacks = (_this$_subscriptionSt = this._subscriptionStateChangeCallbacksByHash)[hash] || (_this$_subscriptionSt[hash] = new Set());
        stateChangeCallbacks.add(callback);
        return ()=>{
            stateChangeCallbacks.delete(callback);
            if (stateChangeCallbacks.size === 0) delete this._subscriptionStateChangeCallbacksByHash[hash];
        };
    }
    /**
   * @internal
   */ async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            if (this._rpcWebSocketConnected) {
                this._rpcWebSocketConnected = false;
                this._rpcWebSocketIdleTimeout = setTimeout(()=>{
                    this._rpcWebSocketIdleTimeout = null;
                    try {
                        this._rpcWebSocket.close();
                    } catch (err) {
                        // swallow error if socket has already been closed.
                        if (err instanceof Error) console.log(`Error when closing socket connection: ${err.message}`);
                    }
                }, 500);
            }
            return;
        }
        if (this._rpcWebSocketIdleTimeout !== null) {
            clearTimeout(this._rpcWebSocketIdleTimeout);
            this._rpcWebSocketIdleTimeout = null;
            this._rpcWebSocketConnected = true;
        }
        if (!this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return;
        }
        const activeWebSocketGeneration = this._rpcWebSocketGeneration;
        const isCurrentConnectionStillActive = ()=>{
            return activeWebSocketGeneration === this._rpcWebSocketGeneration;
        };
        await Promise.all(// Don't be tempted to change this to `Object.entries`. We call
        // `_updateSubscriptions` recursively when processing the state,
        // so it's important that we look up the *current* version of
        // each subscription, every time we process a hash.
        Object.keys(this._subscriptionsByHash).map(async (hash)=>{
            const subscription = this._subscriptionsByHash[hash];
            if (subscription === undefined) // This entry has since been deleted. Skip.
            return;
            switch(subscription.state){
                case "pending":
                case "unsubscribed":
                    if (subscription.callbacks.size === 0) {
                        /**
             * You can end up here when:
             *
             * - a subscription has recently unsubscribed
             *   without having new callbacks added to it
             *   while the unsubscribe was in flight, or
             * - when a pending subscription has its
             *   listeners removed before a request was
             *   sent to the server.
             *
             * Being that nobody is interested in this
             * subscription any longer, delete it.
             */ delete this._subscriptionsByHash[hash];
                        if (subscription.state === "unsubscribed") delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
                        await this._updateSubscriptions();
                        return;
                    }
                    await (async ()=>{
                        const { args , method  } = subscription;
                        try {
                            this._setSubscription(hash, {
                                ...subscription,
                                state: "subscribing"
                            });
                            const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
                            this._setSubscription(hash, {
                                ...subscription,
                                serverSubscriptionId,
                                state: "subscribed"
                            });
                            this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
                            await this._updateSubscriptions();
                        } catch (e) {
                            if (e instanceof Error) console.error(`${method} error for argument`, args, e.message);
                            if (!isCurrentConnectionStillActive()) return;
                            // TODO: Maybe add an 'errored' state or a retry limit?
                            this._setSubscription(hash, {
                                ...subscription,
                                state: "pending"
                            });
                            await this._updateSubscriptions();
                        }
                    })();
                    break;
                case "subscribed":
                    if (subscription.callbacks.size === 0) // By the time we successfully set up a subscription
                    // with the server, the client stopped caring about it.
                    // Tear it down now.
                    await (async ()=>{
                        const { serverSubscriptionId , unsubscribeMethod  } = subscription;
                        if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) /**
                 * Special case.
                 * If we're dealing with a subscription that has been auto-
                 * disposed by the RPC, then we can skip the RPC call to
                 * tear down the subscription here.
                 *
                 * NOTE: There is a proposal to eliminate this special case, here:
                 * https://github.com/solana-labs/solana/issues/18892
                 */ this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId);
                        else {
                            this._setSubscription(hash, {
                                ...subscription,
                                state: "unsubscribing"
                            });
                            this._setSubscription(hash, {
                                ...subscription,
                                state: "unsubscribing"
                            });
                            try {
                                await this._rpcWebSocket.call(unsubscribeMethod, [
                                    serverSubscriptionId
                                ]);
                            } catch (e) {
                                if (e instanceof Error) console.error(`${unsubscribeMethod} error:`, e.message);
                                if (!isCurrentConnectionStillActive()) return;
                                // TODO: Maybe add an 'errored' state or a retry limit?
                                this._setSubscription(hash, {
                                    ...subscription,
                                    state: "subscribed"
                                });
                                await this._updateSubscriptions();
                                return;
                            }
                        }
                        this._setSubscription(hash, {
                            ...subscription,
                            state: "unsubscribed"
                        });
                        await this._updateSubscriptions();
                    })();
                    break;
            }
        }));
    }
    /**
   * @internal
   */ _handleServerNotification(serverSubscriptionId, callbackArgs) {
        const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];
        if (callbacks === undefined) return;
        callbacks.forEach((cb)=>{
            try {
                cb(// I failed to find a way to convince TypeScript that `cb` is of type
                // `TCallback` which is certainly compatible with `Parameters<TCallback>`.
                // See https://github.com/microsoft/TypeScript/issues/47615
                // @ts-ignore
                ...callbackArgs);
            } catch (e) {
                console.error(e);
            }
        });
    }
    /**
   * @internal
   */ _wsOnAccountNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, AccountNotificationResult);
        this._handleServerNotification(subscription, [
            result.value,
            result.context
        ]);
    }
    /**
   * @internal
   */ _makeSubscription(subscriptionConfig, /**
   * When preparing `args` for a call to `_makeSubscription`, be sure
   * to carefully apply a default `commitment` property, if necessary.
   *
   * - If the user supplied a `commitment` use that.
   * - Otherwise, if the `Connection::commitment` is set, use that.
   * - Otherwise, set it to the RPC server default: `finalized`.
   *
   * This is extremely important to ensure that these two fundamentally
   * identical subscriptions produce the same identifying hash:
   *
   * - A subscription made without specifying a commitment.
   * - A subscription made where the commitment specified is the same
   *   as the default applied to the subscription above.
   *
   * Example; these two subscriptions must produce the same hash:
   *
   * - An `accountSubscribe` subscription for `'PUBKEY'`
   * - An `accountSubscribe` subscription for `'PUBKEY'` with commitment
   *   `'finalized'`.
   *
   * See the 'making a subscription with defaulted params omitted' test
   * in `connection-subscriptions.ts` for more.
   */ args) {
        const clientSubscriptionId = this._nextClientSubscriptionId++;
        const hash = fastStableStringify$1([
            subscriptionConfig.method,
            args
        ]);
        const existingSubscription = this._subscriptionsByHash[hash];
        if (existingSubscription === undefined) this._subscriptionsByHash[hash] = {
            ...subscriptionConfig,
            args,
            callbacks: new Set([
                subscriptionConfig.callback
            ]),
            state: "pending"
        };
        else existingSubscription.callbacks.add(subscriptionConfig.callback);
        this._subscriptionHashByClientSubscriptionId[clientSubscriptionId] = hash;
        this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async ()=>{
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
            delete this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
            const subscription = this._subscriptionsByHash[hash];
            assert(subscription !== undefined, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
            subscription.callbacks.delete(subscriptionConfig.callback);
            await this._updateSubscriptions();
        };
        this._updateSubscriptions();
        return clientSubscriptionId;
    }
    /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */ onAccountChange(publicKey, callback, commitment) {
        const args = this._buildArgs([
            publicKey.toBase58()
        ], commitment || this._commitment || "finalized", // Apply connection/server default.
        "base64");
        return this._makeSubscription({
            callback,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, args);
    }
    /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */ async removeAccountChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "account change");
    }
    /**
   * @internal
   */ _wsOnProgramAccountNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, ProgramAccountNotificationResult);
        this._handleServerNotification(subscription, [
            {
                accountId: result.value.pubkey,
                accountInfo: result.value.account
            },
            result.context
        ]);
    }
    /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */ onProgramAccountChange(programId, callback, commitment, filters) {
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment || this._commitment || "finalized", // Apply connection/server default.
        "base64" /* encoding */ , filters ? {
            filters: filters
        } : undefined /* extra */ );
        return this._makeSubscription({
            callback,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, args);
    }
    /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */ async removeProgramAccountChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "program account change");
    }
    /**
   * Registers a callback to be invoked whenever logs are emitted.
   */ onLogs(filter, callback, commitment) {
        const args = this._buildArgs([
            typeof filter === "object" ? {
                mentions: [
                    filter.toString()
                ]
            } : filter
        ], commitment || this._commitment || "finalized" // Apply connection/server default.
        );
        return this._makeSubscription({
            callback,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, args);
    }
    /**
   * Deregister a logs callback.
   *
   * @param id client subscription id to deregister.
   */ async removeOnLogsListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "logs");
    }
    /**
   * @internal
   */ _wsOnLogsNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, LogsNotificationResult);
        this._handleServerNotification(subscription, [
            result.value,
            result.context
        ]);
    }
    /**
   * @internal
   */ _wsOnSlotNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SlotNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */ onSlotChange(callback) {
        return this._makeSubscription({
            callback,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, []);
    }
    /**
   * Deregister a slot notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSlotChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "slot change");
    }
    /**
   * @internal
   */ _wsOnSlotUpdatesNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SlotUpdateNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */ onSlotUpdate(callback) {
        return this._makeSubscription({
            callback,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, []);
    }
    /**
   * Deregister a slot update notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSlotUpdateListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "slot update");
    }
    /**
   * @internal
   */ async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
        const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
        if (dispose) await dispose();
        else console.warn("Ignored unsubscribe request because an active subscription with id " + `\`${clientSubscriptionId}\` for '${subscriptionName}' events ` + "could not be found.");
    }
    _buildArgs(args, override, encoding, extra) {
        const commitment = override || this._commitment;
        if (commitment || encoding || extra) {
            let options = {};
            if (encoding) options.encoding = encoding;
            if (commitment) options.commitment = commitment;
            if (extra) options = Object.assign(options, extra);
            args.push(options);
        }
        return args;
    }
    /**
   * @internal
   */ _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
        const commitment = override || this._commitment;
        if (commitment && ![
            "confirmed",
            "finalized"
        ].includes(commitment)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(args, override, encoding, extra);
    }
    /**
   * @internal
   */ _wsOnSignatureNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SignatureNotificationResult);
        if (result.value !== "receivedSignature") /**
       * Special case.
       * After a signature is processed, RPCs automatically dispose of the
       * subscription on the server side. We need to track which of these
       * subscriptions have been disposed in such a way, so that we know
       * whether the client is dealing with a not-yet-processed signature
       * (in which case we must tear down the server subscription) or an
       * already-processed signature (in which case the client can simply
       * clear out the subscription locally without telling the server).
       *
       * NOTE: There is a proposal to eliminate this special case, here:
       * https://github.com/solana-labs/solana/issues/18892
       */ this._subscriptionsAutoDisposedByRpc.add(subscription);
        this._handleServerNotification(subscription, result.value === "receivedSignature" ? [
            {
                type: "received"
            },
            result.context
        ] : [
            {
                type: "status",
                result: result.value
            },
            result.context
        ]);
    }
    /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */ onSignature(signature, callback, commitment) {
        const args = this._buildArgs([
            signature
        ], commitment || this._commitment || "finalized" // Apply connection/server default.
        );
        const clientSubscriptionId = this._makeSubscription({
            callback: (notification, context)=>{
                if (notification.type === "status") {
                    callback(notification.result, context);
                    // Signatures subscriptions are auto-removed by the RPC service
                    // so no need to explicitly send an unsubscribe message.
                    try {
                        this.removeSignatureListener(clientSubscriptionId);
                    // eslint-disable-next-line no-empty
                    } catch (_err) {
                    // Already removed.
                    }
                }
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, args);
        return clientSubscriptionId;
    }
    /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */ onSignatureWithOptions(signature, callback, options) {
        const { commitment , ...extra } = {
            ...options,
            commitment: options && options.commitment || this._commitment || "finalized" // Apply connection/server default.
        };
        const args = this._buildArgs([
            signature
        ], commitment, undefined /* encoding */ , extra);
        const clientSubscriptionId = this._makeSubscription({
            callback: (notification, context)=>{
                callback(notification, context);
                // Signatures subscriptions are auto-removed by the RPC service
                // so no need to explicitly send an unsubscribe message.
                try {
                    this.removeSignatureListener(clientSubscriptionId);
                // eslint-disable-next-line no-empty
                } catch (_err) {
                // Already removed.
                }
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, args);
        return clientSubscriptionId;
    }
    /**
   * Deregister a signature notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSignatureListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "signature result");
    }
    /**
   * @internal
   */ _wsOnRootNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, RootNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */ onRootChange(callback) {
        return this._makeSubscription({
            callback,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, []);
    }
    /**
   * Deregister a root notification callback
   *
   * @param id client subscription id to deregister
   */ async removeRootChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "root change");
    }
}
/**
 * Keypair signer interface
 */ /**
 * An account keypair used for signing transactions.
 */ class Keypair {
    /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair ed25519 keypair
   */ constructor(keypair){
        this._keypair = void 0;
        this._keypair = keypair ?? generateKeypair();
    }
    /**
   * Generate a new random keypair
   */ static generate() {
        return new Keypair(generateKeypair());
    }
    /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */ static fromSecretKey(secretKey, options) {
        if (secretKey.byteLength !== 64) throw new Error("bad secret key size");
        const publicKey = secretKey.slice(32, 64);
        if (!options || !options.skipValidation) {
            const privateScalar = secretKey.slice(0, 32);
            const computedPublicKey = getPublicKey(privateScalar);
            for(let ii = 0; ii < 32; ii++){
                if (publicKey[ii] !== computedPublicKey[ii]) throw new Error("provided secretKey is invalid");
            }
        }
        return new Keypair({
            publicKey,
            secretKey
        });
    }
    /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   */ static fromSeed(seed) {
        const publicKey = getPublicKey(seed);
        const secretKey = new Uint8Array(64);
        secretKey.set(seed);
        secretKey.set(publicKey, 32);
        return new Keypair({
            publicKey,
            secretKey
        });
    }
    /**
   * The public key for this keypair
   */ get publicKey() {
        return new PublicKey(this._keypair.publicKey);
    }
    /**
   * The raw secret key for this keypair
   */ get secretKey() {
        return new Uint8Array(this._keypair.secretKey);
    }
}
/**
 * An enumeration of valid address lookup table InstructionType's
 * @internal
 */ const LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
    CreateLookupTable: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64("recentSlot"),
            _bufferLayout.u8("bumpSeed")
        ])
    },
    FreezeLookupTable: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    ExtendLookupTable: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64(),
            _bufferLayout.seq(publicKey(), _bufferLayout.offset(_bufferLayout.u32(), -8), "addresses")
        ])
    },
    DeactivateLookupTable: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    CloseLookupTable: {
        index: 4,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    }
});
class AddressLookupTableInstruction {
    /**
   * @internal
   */ constructor(){}
    static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const index = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [layoutType, layout] of Object.entries(LOOKUP_TABLE_INSTRUCTION_LAYOUTS))if (layout.index == index) {
            type = layoutType;
            break;
        }
        if (!type) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
        return type;
    }
    static decodeCreateLookupTable(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeysLength(instruction.keys, 4);
        const { recentSlot  } = decodeData$1(LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable, instruction.data);
        return {
            authority: instruction.keys[1].pubkey,
            payer: instruction.keys[2].pubkey,
            recentSlot: Number(recentSlot)
        };
    }
    static decodeExtendLookupTable(instruction) {
        this.checkProgramId(instruction.programId);
        if (instruction.keys.length < 2) throw new Error(`invalid instruction; found ${instruction.keys.length} keys, expected at least 2`);
        const { addresses  } = decodeData$1(LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable, instruction.data);
        return {
            lookupTable: instruction.keys[0].pubkey,
            authority: instruction.keys[1].pubkey,
            payer: instruction.keys.length > 2 ? instruction.keys[2].pubkey : undefined,
            addresses: addresses.map((buffer)=>new PublicKey(buffer))
        };
    }
    static decodeCloseLookupTable(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeysLength(instruction.keys, 3);
        return {
            lookupTable: instruction.keys[0].pubkey,
            authority: instruction.keys[1].pubkey,
            recipient: instruction.keys[2].pubkey
        };
    }
    static decodeFreezeLookupTable(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeysLength(instruction.keys, 2);
        return {
            lookupTable: instruction.keys[0].pubkey,
            authority: instruction.keys[1].pubkey
        };
    }
    static decodeDeactivateLookupTable(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeysLength(instruction.keys, 2);
        return {
            lookupTable: instruction.keys[0].pubkey,
            authority: instruction.keys[1].pubkey
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(AddressLookupTableProgram.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program");
    }
    /**
   * @internal
   */ static checkKeysLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
class AddressLookupTableProgram {
    /**
   * @internal
   */ constructor(){}
    static createLookupTable(params) {
        const [lookupTableAddress, bumpSeed] = PublicKey.findProgramAddressSync([
            params.authority.toBuffer(),
            (0, _bigintBuffer.toBufferLE)(BigInt(params.recentSlot), 8)
        ], this.programId);
        const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable;
        const data = encodeData(type, {
            recentSlot: BigInt(params.recentSlot),
            bumpSeed: bumpSeed
        });
        const keys = [
            {
                pubkey: lookupTableAddress,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: params.authority,
                isSigner: true,
                isWritable: false
            },
            {
                pubkey: params.payer,
                isSigner: true,
                isWritable: true
            },
            {
                pubkey: SystemProgram.programId,
                isSigner: false,
                isWritable: false
            }
        ];
        return [
            new TransactionInstruction({
                programId: this.programId,
                keys: keys,
                data: data
            }),
            lookupTableAddress
        ];
    }
    static freezeLookupTable(params) {
        const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.FreezeLookupTable;
        const data = encodeData(type);
        const keys = [
            {
                pubkey: params.lookupTable,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: params.authority,
                isSigner: true,
                isWritable: false
            }
        ];
        return new TransactionInstruction({
            programId: this.programId,
            keys: keys,
            data: data
        });
    }
    static extendLookupTable(params) {
        const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable;
        const data = encodeData(type, {
            addresses: params.addresses.map((addr)=>addr.toBytes())
        });
        const keys = [
            {
                pubkey: params.lookupTable,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: params.authority,
                isSigner: true,
                isWritable: false
            }
        ];
        if (params.payer) keys.push({
            pubkey: params.payer,
            isSigner: true,
            isWritable: true
        }, {
            pubkey: SystemProgram.programId,
            isSigner: false,
            isWritable: false
        });
        return new TransactionInstruction({
            programId: this.programId,
            keys: keys,
            data: data
        });
    }
    static deactivateLookupTable(params) {
        const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.DeactivateLookupTable;
        const data = encodeData(type);
        const keys = [
            {
                pubkey: params.lookupTable,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: params.authority,
                isSigner: true,
                isWritable: false
            }
        ];
        return new TransactionInstruction({
            programId: this.programId,
            keys: keys,
            data: data
        });
    }
    static closeLookupTable(params) {
        const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CloseLookupTable;
        const data = encodeData(type);
        const keys = [
            {
                pubkey: params.lookupTable,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: params.authority,
                isSigner: true,
                isWritable: false
            },
            {
                pubkey: params.recipient,
                isSigner: false,
                isWritable: true
            }
        ];
        return new TransactionInstruction({
            programId: this.programId,
            keys: keys,
            data: data
        });
    }
}
AddressLookupTableProgram.programId = new PublicKey("AddressLookupTab1e1111111111111111111111111");
/**
 * Compute Budget Instruction class
 */ class ComputeBudgetInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a compute budget instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u8("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
        return type;
    }
    /**
   * Decode request units compute budget instruction and retrieve the instruction params.
   */ static decodeRequestUnits(instruction) {
        this.checkProgramId(instruction.programId);
        const { units , additionalFee  } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits, instruction.data);
        return {
            units,
            additionalFee
        };
    }
    /**
   * Decode request heap frame compute budget instruction and retrieve the instruction params.
   */ static decodeRequestHeapFrame(instruction) {
        this.checkProgramId(instruction.programId);
        const { bytes  } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame, instruction.data);
        return {
            bytes
        };
    }
    /**
   * Decode set compute unit limit compute budget instruction and retrieve the instruction params.
   */ static decodeSetComputeUnitLimit(instruction) {
        this.checkProgramId(instruction.programId);
        const { units  } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit, instruction.data);
        return {
            units
        };
    }
    /**
   * Decode set compute unit price compute budget instruction and retrieve the instruction params.
   */ static decodeSetComputeUnitPrice(instruction) {
        this.checkProgramId(instruction.programId);
        const { microLamports  } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice, instruction.data);
        return {
            microLamports
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(ComputeBudgetProgram.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
}
/**
 * An enumeration of valid ComputeBudgetInstructionType's
 */ /**
 * An enumeration of valid ComputeBudget InstructionType's
 * @internal
 */ const COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
    RequestUnits: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("units"),
            _bufferLayout.u32("additionalFee")
        ])
    },
    RequestHeapFrame: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("bytes")
        ])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("units")
        ])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            u64("microLamports")
        ])
    }
});
/**
 * Factory class for transaction instructions to interact with the Compute Budget program
 */ class ComputeBudgetProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Compute Budget program
   */ /**
   * @deprecated Instead, call {@link setComputeUnitLimit} and/or {@link setComputeUnitPrice}
   */ static requestUnits(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static requestHeapFrame(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static setComputeUnitLimit(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static setComputeUnitPrice(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
        const data = encodeData(type, {
            microLamports: BigInt(params.microLamports)
        });
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
}
ComputeBudgetProgram.programId = new PublicKey("ComputeBudget111111111111111111111111111111");
const PRIVATE_KEY_BYTES$1 = 64;
const PUBLIC_KEY_BYTES$1 = 32;
const SIGNATURE_BYTES = 64;
/**
 * Params for creating an ed25519 instruction using a public key
 */ const ED25519_INSTRUCTION_LAYOUT = _bufferLayout.struct([
    _bufferLayout.u8("numSignatures"),
    _bufferLayout.u8("padding"),
    _bufferLayout.u16("signatureOffset"),
    _bufferLayout.u16("signatureInstructionIndex"),
    _bufferLayout.u16("publicKeyOffset"),
    _bufferLayout.u16("publicKeyInstructionIndex"),
    _bufferLayout.u16("messageDataOffset"),
    _bufferLayout.u16("messageDataSize"),
    _bufferLayout.u16("messageInstructionIndex")
]);
class Ed25519Program {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the ed25519 program
   */ /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */ static createInstructionWithPublicKey(params) {
        const { publicKey , message , signature , instructionIndex  } = params;
        assert(publicKey.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey.length} bytes`);
        assert(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
        const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
        const signatureOffset = publicKeyOffset + publicKey.length;
        const messageDataOffset = signatureOffset + signature.length;
        const numSignatures = 1;
        const instructionData = (0, _buffer.Buffer).alloc(messageDataOffset + message.length);
        const index = instructionIndex == null ? 0xffff // An index of `u16::MAX` makes it default to the current instruction.
         : instructionIndex;
        ED25519_INSTRUCTION_LAYOUT.encode({
            numSignatures,
            padding: 0,
            signatureOffset,
            signatureInstructionIndex: index,
            publicKeyOffset,
            publicKeyInstructionIndex: index,
            messageDataOffset,
            messageDataSize: message.length,
            messageInstructionIndex: index
        }, instructionData);
        instructionData.fill(publicKey, publicKeyOffset);
        instructionData.fill(signature, signatureOffset);
        instructionData.fill(message, messageDataOffset);
        return new TransactionInstruction({
            keys: [],
            programId: Ed25519Program.programId,
            data: instructionData
        });
    }
    /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */ static createInstructionWithPrivateKey(params) {
        const { privateKey , message , instructionIndex  } = params;
        assert(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
        try {
            const keypair = Keypair.fromSecretKey(privateKey);
            const publicKey = keypair.publicKey.toBytes();
            const signature = sign(message, keypair.secretKey);
            return this.createInstructionWithPublicKey({
                publicKey,
                message,
                signature,
                instructionIndex
            });
        } catch (error) {
            throw new Error(`Error creating instruction; ${error}`);
        }
    }
}
Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
// Supply a synchronous hashing algorithm to make this
// library interoperable with the synchronous APIs in web3.js.
_secp256K1.utils.hmacSha256Sync = (key, ...msgs)=>{
    const h = (0, _hmac.hmac).create((0, _sha256.sha256), key);
    msgs.forEach((msg)=>h.update(msg));
    return h.digest();
};
const ecdsaSign = (msgHash, privKey)=>_secp256K1.signSync(msgHash, privKey, {
        der: false,
        recovered: true
    });
_secp256K1.utils.isValidPrivateKey;
const publicKeyCreate = _secp256K1.getPublicKey;
const PRIVATE_KEY_BYTES = 32;
const ETHEREUM_ADDRESS_BYTES = 20;
const PUBLIC_KEY_BYTES = 64;
const SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
/**
 * Params for creating an secp256k1 instruction using a public key
 */ const SECP256K1_INSTRUCTION_LAYOUT = _bufferLayout.struct([
    _bufferLayout.u8("numSignatures"),
    _bufferLayout.u16("signatureOffset"),
    _bufferLayout.u8("signatureInstructionIndex"),
    _bufferLayout.u16("ethAddressOffset"),
    _bufferLayout.u8("ethAddressInstructionIndex"),
    _bufferLayout.u16("messageDataOffset"),
    _bufferLayout.u16("messageDataSize"),
    _bufferLayout.u8("messageInstructionIndex"),
    _bufferLayout.blob(20, "ethAddress"),
    _bufferLayout.blob(64, "signature"),
    _bufferLayout.u8("recoveryId")
]);
class Secp256k1Program {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the secp256k1 program
   */ /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */ static publicKeyToEthAddress(publicKey) {
        assert(publicKey.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey.length} bytes`);
        try {
            return (0, _buffer.Buffer).from((0, _sha3.keccak_256)(toBuffer(publicKey))).slice(-ETHEREUM_ADDRESS_BYTES);
        } catch (error) {
            throw new Error(`Error constructing Ethereum address: ${error}`);
        }
    }
    /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */ static createInstructionWithPublicKey(params) {
        const { publicKey , message , signature , recoveryId , instructionIndex  } = params;
        return Secp256k1Program.createInstructionWithEthAddress({
            ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey),
            message,
            signature,
            recoveryId,
            instructionIndex
        });
    }
    /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */ static createInstructionWithEthAddress(params) {
        const { ethAddress: rawAddress , message , signature , recoveryId , instructionIndex =0  } = params;
        let ethAddress;
        if (typeof rawAddress === "string") {
            if (rawAddress.startsWith("0x")) ethAddress = (0, _buffer.Buffer).from(rawAddress.substr(2), "hex");
            else ethAddress = (0, _buffer.Buffer).from(rawAddress, "hex");
        } else ethAddress = rawAddress;
        assert(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
        const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
        const ethAddressOffset = dataStart;
        const signatureOffset = dataStart + ethAddress.length;
        const messageDataOffset = signatureOffset + signature.length + 1;
        const numSignatures = 1;
        const instructionData = (0, _buffer.Buffer).alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
        SECP256K1_INSTRUCTION_LAYOUT.encode({
            numSignatures,
            signatureOffset,
            signatureInstructionIndex: instructionIndex,
            ethAddressOffset,
            ethAddressInstructionIndex: instructionIndex,
            messageDataOffset,
            messageDataSize: message.length,
            messageInstructionIndex: instructionIndex,
            signature: toBuffer(signature),
            ethAddress: toBuffer(ethAddress),
            recoveryId
        }, instructionData);
        instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
        return new TransactionInstruction({
            keys: [],
            programId: Secp256k1Program.programId,
            data: instructionData
        });
    }
    /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */ static createInstructionWithPrivateKey(params) {
        const { privateKey: pkey , message , instructionIndex  } = params;
        assert(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
        try {
            const privateKey = toBuffer(pkey);
            const publicKey = publicKeyCreate(privateKey, false).slice(1); // throw away leading byte
            const messageHash = (0, _buffer.Buffer).from((0, _sha3.keccak_256)(toBuffer(message)));
            const [signature, recoveryId] = ecdsaSign(messageHash, privateKey);
            return this.createInstructionWithPublicKey({
                publicKey,
                message,
                signature,
                recoveryId,
                instructionIndex
            });
        } catch (error) {
            throw new Error(`Error creating instruction; ${error}`);
        }
    }
}
Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
/**
 * Address of the stake config account which configures the rate
 * of stake warmup and cooldown as well as the slashing penalty.
 */ const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
/**
 * Stake account authority info
 */ class Authorized {
    /** stake authority */ /** withdraw authority */ /**
   * Create a new Authorized object
   * @param staker the stake authority
   * @param withdrawer the withdraw authority
   */ constructor(staker, withdrawer){
        this.staker = void 0;
        this.withdrawer = void 0;
        this.staker = staker;
        this.withdrawer = withdrawer;
    }
}
/**
 * Stake account lockup info
 */ class Lockup {
    /** Unix timestamp of lockup expiration */ /** Epoch of lockup expiration */ /** Lockup custodian authority */ /**
   * Create a new Lockup object
   */ constructor(unixTimestamp, epoch, custodian){
        this.unixTimestamp = void 0;
        this.epoch = void 0;
        this.custodian = void 0;
        this.unixTimestamp = unixTimestamp;
        this.epoch = epoch;
        this.custodian = custodian;
    }
}
Lockup.default = new Lockup(0, 0, PublicKey.default);
/**
 * Stake Instruction class
 */ class StakeInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a stake instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(STAKE_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a StakeInstruction");
        return type;
    }
    /**
   * Decode a initialize stake instruction and retrieve the instruction params.
   */ static decodeInitialize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { authorized , lockup  } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Initialize, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            authorized: new Authorized(new PublicKey(authorized.staker), new PublicKey(authorized.withdrawer)),
            lockup: new Lockup(lockup.unixTimestamp, lockup.epoch, new PublicKey(lockup.custodian))
        };
    }
    /**
   * Decode a delegate stake instruction and retrieve the instruction params.
   */ static decodeDelegate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 6);
        decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Delegate, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            votePubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[5].pubkey
        };
    }
    /**
   * Decode an authorize stake instruction and retrieve the instruction params.
   */ static decodeAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { newAuthorized , stakeAuthorizationType  } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            stakeAuthorizationType: {
                index: stakeAuthorizationType
            }
        };
        if (instruction.keys.length > 3) o.custodianPubkey = instruction.keys[3].pubkey;
        return o;
    }
    /**
   * Decode an authorize-with-seed stake instruction and retrieve the instruction params.
   */ static decodeAuthorizeWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { newAuthorized , stakeAuthorizationType , authoritySeed , authorityOwner  } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            authorityBase: instruction.keys[1].pubkey,
            authoritySeed: authoritySeed,
            authorityOwner: new PublicKey(authorityOwner),
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            stakeAuthorizationType: {
                index: stakeAuthorizationType
            }
        };
        if (instruction.keys.length > 3) o.custodianPubkey = instruction.keys[3].pubkey;
        return o;
    }
    /**
   * Decode a split stake instruction and retrieve the instruction params.
   */ static decodeSplit(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports  } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Split, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            splitStakePubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            lamports
        };
    }
    /**
   * Decode a merge stake instruction and retrieve the instruction params.
   */ static decodeMerge(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Merge, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            sourceStakePubKey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey
        };
    }
    /**
   * Decode a withdraw stake instruction and retrieve the instruction params.
   */ static decodeWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 5);
        const { lamports  } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey,
            lamports
        };
        if (instruction.keys.length > 5) o.custodianPubkey = instruction.keys[5].pubkey;
        return o;
    }
    /**
   * Decode a deactivate stake instruction and retrieve the instruction params.
   */ static decodeDeactivate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Deactivate, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(StakeProgram.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid StakeInstructionType's
 */ /**
 * An enumeration of valid stake InstructionType's
 * @internal
 */ const STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
    Initialize: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            authorized(),
            lockup()
        ])
    },
    Authorize: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("stakeAuthorizationType")
        ])
    },
    Delegate: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    Split: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    Withdraw: {
        index: 4,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    Deactivate: {
        index: 5,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    Merge: {
        index: 7,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    AuthorizeWithSeed: {
        index: 8,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("stakeAuthorizationType"),
            rustString("authoritySeed"),
            publicKey("authorityOwner")
        ])
    }
});
/**
 * Stake authorization type
 */ /**
 * An enumeration of valid StakeAuthorizationLayout's
 */ const StakeAuthorizationLayout = Object.freeze({
    Staker: {
        index: 0
    },
    Withdrawer: {
        index: 1
    }
});
/**
 * Factory class for transactions to interact with the Stake program
 */ class StakeProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Stake program
   */ /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */ static initialize(params) {
        const { stakePubkey , authorized , lockup: maybeLockup  } = params;
        const lockup = maybeLockup || Lockup.default;
        const type = STAKE_INSTRUCTION_LAYOUTS.Initialize;
        const data = encodeData(type, {
            authorized: {
                staker: toBuffer(authorized.staker.toBuffer()),
                withdrawer: toBuffer(authorized.withdrawer.toBuffer())
            },
            lockup: {
                unixTimestamp: lockup.unixTimestamp,
                epoch: lockup.epoch,
                custodian: toBuffer(lockup.custodian.toBuffer())
            }
        });
        const instructionData = {
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */ static createAccountWithSeed(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccountWithSeed({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.stakePubkey,
            basePubkey: params.basePubkey,
            seed: params.seed,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        const { stakePubkey , authorized , lockup  } = params;
        return transaction.add(this.initialize({
            stakePubkey,
            authorized,
            lockup
        }));
    }
    /**
   * Generate a Transaction that creates a new Stake account
   */ static createAccount(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.stakePubkey,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        const { stakePubkey , authorized , lockup  } = params;
        return transaction.add(this.initialize({
            stakePubkey,
            authorized,
            lockup
        }));
    }
    /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */ static delegate(params) {
        const { stakePubkey , authorizedPubkey , votePubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Delegate;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: STAKE_CONFIG_ID,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */ static authorize(params) {
        const { stakePubkey , authorizedPubkey , newAuthorizedPubkey , stakeAuthorizationType , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Authorize;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            stakeAuthorizationType: stakeAuthorizationType.index
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */ static authorizeWithSeed(params) {
        const { stakePubkey , authorityBase , authoritySeed , authorityOwner , newAuthorizedPubkey , stakeAuthorizationType , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            stakeAuthorizationType: stakeAuthorizationType.index,
            authoritySeed: authoritySeed,
            authorityOwner: toBuffer(authorityOwner.toBuffer())
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorityBase,
                isSigner: true,
                isWritable: false
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * @internal
   */ static splitInstruction(params) {
        const { stakePubkey , authorizedPubkey , splitStakePubkey , lamports  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Split;
        const data = encodeData(type, {
            lamports
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: splitStakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */ static split(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.authorizedPubkey,
            newAccountPubkey: params.splitStakePubkey,
            lamports: 0,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.splitInstruction(params));
    }
    /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */ static splitWithSeed(params) {
        const { stakePubkey , authorizedPubkey , splitStakePubkey , basePubkey , seed , lamports  } = params;
        const transaction = new Transaction();
        transaction.add(SystemProgram.allocate({
            accountPubkey: splitStakePubkey,
            basePubkey,
            seed,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.splitInstruction({
            stakePubkey,
            authorizedPubkey,
            splitStakePubkey,
            lamports
        }));
    }
    /**
   * Generate a Transaction that merges Stake accounts.
   */ static merge(params) {
        const { stakePubkey , sourceStakePubKey , authorizedPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Merge;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: sourceStakePubKey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */ static withdraw(params) {
        const { stakePubkey , authorizedPubkey , toPubkey , lamports , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
        const data = encodeData(type, {
            lamports
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: toPubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that deactivates Stake tokens.
   */ static deactivate(params) {
        const { stakePubkey , authorizedPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
}
StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111");
StakeProgram.space = 200;
/**
 * Vote account info
 */ class VoteInit {
    /** [0, 100] */ constructor(nodePubkey, authorizedVoter, authorizedWithdrawer, commission){
        this.nodePubkey = void 0;
        this.authorizedVoter = void 0;
        this.authorizedWithdrawer = void 0;
        this.commission = void 0;
        this.nodePubkey = nodePubkey;
        this.authorizedVoter = authorizedVoter;
        this.authorizedWithdrawer = authorizedWithdrawer;
        this.commission = commission;
    }
}
/**
 * Create vote account transaction params
 */ /**
 * Vote Instruction class
 */ class VoteInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a vote instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(VOTE_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a VoteInstruction");
        return type;
    }
    /**
   * Decode an initialize vote instruction and retrieve the instruction params.
   */ static decodeInitializeAccount(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 4);
        const { voteInit  } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.InitializeAccount, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            nodePubkey: instruction.keys[3].pubkey,
            voteInit: new VoteInit(new PublicKey(voteInit.nodePubkey), new PublicKey(voteInit.authorizedVoter), new PublicKey(voteInit.authorizedWithdrawer), voteInit.commission)
        };
    }
    /**
   * Decode an authorize instruction and retrieve the instruction params.
   */ static decodeAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { newAuthorized , voteAuthorizationType  } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            voteAuthorizationType: {
                index: voteAuthorizationType
            }
        };
    }
    /**
   * Decode an authorize instruction and retrieve the instruction params.
   */ static decodeAuthorizeWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { voteAuthorizeWithSeedArgs: { currentAuthorityDerivedKeyOwnerPubkey , currentAuthorityDerivedKeySeed , newAuthorized , voteAuthorizationType  }  } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
        return {
            currentAuthorityDerivedKeyBasePubkey: instruction.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new PublicKey(currentAuthorityDerivedKeyOwnerPubkey),
            currentAuthorityDerivedKeySeed: currentAuthorityDerivedKeySeed,
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            voteAuthorizationType: {
                index: voteAuthorizationType
            },
            votePubkey: instruction.keys[0].pubkey
        };
    }
    /**
   * Decode a withdraw instruction and retrieve the instruction params.
   */ static decodeWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports  } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            authorizedWithdrawerPubkey: instruction.keys[2].pubkey,
            lamports,
            toPubkey: instruction.keys[1].pubkey
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(VoteProgram.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid VoteInstructionType's
 */ const VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
    InitializeAccount: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            voteInit()
        ])
    },
    Authorize: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("voteAuthorizationType")
        ])
    },
    Withdraw: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    AuthorizeWithSeed: {
        index: 10,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            voteAuthorizeWithSeedArgs()
        ])
    }
});
/**
 * VoteAuthorize type
 */ /**
 * An enumeration of valid VoteAuthorization layouts.
 */ const VoteAuthorizationLayout = Object.freeze({
    Voter: {
        index: 0
    },
    Withdrawer: {
        index: 1
    }
});
/**
 * Factory class for transactions to interact with the Vote program
 */ class VoteProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Vote program
   */ /**
   * Generate an Initialize instruction.
   */ static initializeAccount(params) {
        const { votePubkey , nodePubkey , voteInit  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
        const data = encodeData(type, {
            voteInit: {
                nodePubkey: toBuffer(voteInit.nodePubkey.toBuffer()),
                authorizedVoter: toBuffer(voteInit.authorizedVoter.toBuffer()),
                authorizedWithdrawer: toBuffer(voteInit.authorizedWithdrawer.toBuffer()),
                commission: voteInit.commission
            }
        });
        const instructionData = {
            keys: [
                {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: nodePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a transaction that creates a new Vote account.
   */ static createAccount(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.votePubkey,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.initializeAccount({
            votePubkey: params.votePubkey,
            nodePubkey: params.voteInit.nodePubkey,
            voteInit: params.voteInit
        }));
    }
    /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */ static authorize(params) {
        const { votePubkey , authorizedPubkey , newAuthorizedPubkey , voteAuthorizationType  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.Authorize;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            voteAuthorizationType: voteAuthorizationType.index
        });
        const keys = [
            {
                pubkey: votePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account
   * where the current Voter or Withdrawer authority is a derived key.
   */ static authorizeWithSeed(params) {
        const { currentAuthorityDerivedKeyBasePubkey , currentAuthorityDerivedKeyOwnerPubkey , currentAuthorityDerivedKeySeed , newAuthorizedPubkey , voteAuthorizationType , votePubkey  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
        const data = encodeData(type, {
            voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: toBuffer(currentAuthorityDerivedKeyOwnerPubkey.toBuffer()),
                currentAuthorityDerivedKeySeed: currentAuthorityDerivedKeySeed,
                newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
                voteAuthorizationType: voteAuthorizationType.index
            }
        });
        const keys = [
            {
                pubkey: votePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: currentAuthorityDerivedKeyBasePubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction to withdraw from a Vote account.
   */ static withdraw(params) {
        const { votePubkey , authorizedWithdrawerPubkey , lamports , toPubkey  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
        const data = encodeData(type, {
            lamports
        });
        const keys = [
            {
                pubkey: votePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: toPubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorizedWithdrawerPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction to withdraw safely from a Vote account.
   *
   * This function was created as a safeguard for vote accounts running validators, `safeWithdraw`
   * checks that the withdraw amount will not exceed the specified balance while leaving enough left
   * to cover rent. If you wish to close the vote account by withdrawing the full amount, call the
   * `withdraw` method directly.
   */ static safeWithdraw(params, currentVoteAccountBalance, rentExemptMinimum) {
        if (params.lamports > currentVoteAccountBalance - rentExemptMinimum) throw new Error("Withdraw will leave vote account with insuffcient funds.");
        return VoteProgram.withdraw(params);
    }
}
VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111");
VoteProgram.space = 3731;
const VALIDATOR_INFO_KEY = new PublicKey("Va1idator1nfo111111111111111111111111111111");
/**
 * @internal
 */ const InfoString = (0, _superstruct.type)({
    name: (0, _superstruct.string)(),
    website: (0, _superstruct.optional)((0, _superstruct.string)()),
    details: (0, _superstruct.optional)((0, _superstruct.string)()),
    keybaseUsername: (0, _superstruct.optional)((0, _superstruct.string)())
});
/**
 * ValidatorInfo class
 */ class ValidatorInfo {
    /**
   * validator public key
   */ /**
   * validator information
   */ /**
   * Construct a valid ValidatorInfo
   *
   * @param key validator public key
   * @param info validator information
   */ constructor(key, info){
        this.key = void 0;
        this.info = void 0;
        this.key = key;
        this.info = info;
    }
    /**
   * Deserialize ValidatorInfo from the config account data. Exactly two config
   * keys are required in the data.
   *
   * @param buffer config account data
   * @return null if info was not found
   */ static fromConfigData(buffer) {
        let byteArray = [
            ...buffer
        ];
        const configKeyCount = decodeLength(byteArray);
        if (configKeyCount !== 2) return null;
        const configKeys = [];
        for(let i = 0; i < 2; i++){
            const publicKey = new PublicKey(byteArray.slice(0, PUBLIC_KEY_LENGTH));
            byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
            const isSigner = byteArray.slice(0, 1)[0] === 1;
            byteArray = byteArray.slice(1);
            configKeys.push({
                publicKey,
                isSigner
            });
        }
        if (configKeys[0].publicKey.equals(VALIDATOR_INFO_KEY)) {
            if (configKeys[1].isSigner) {
                const rawInfo = rustString().decode((0, _buffer.Buffer).from(byteArray));
                const info = JSON.parse(rawInfo);
                (0, _superstruct.assert)(info, InfoString);
                return new ValidatorInfo(configKeys[1].publicKey, info);
            }
        }
        return null;
    }
}
const VOTE_PROGRAM_ID = new PublicKey("Vote111111111111111111111111111111111111111");
/**
 * See https://github.com/solana-labs/solana/blob/8a12ed029cfa38d4a45400916c2463fb82bbec8c/programs/vote_api/src/vote_state.rs#L68-L88
 *
 * @internal
 */ const VoteAccountLayout = _bufferLayout.struct([
    publicKey("nodePubkey"),
    publicKey("authorizedWithdrawer"),
    _bufferLayout.u8("commission"),
    _bufferLayout.nu64(),
    // votes.length
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("slot"),
        _bufferLayout.u32("confirmationCount")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "votes"),
    _bufferLayout.u8("rootSlotValid"),
    _bufferLayout.nu64("rootSlot"),
    _bufferLayout.nu64(),
    // authorizedVoters.length
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("epoch"),
        publicKey("authorizedVoter")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "authorizedVoters"),
    _bufferLayout.struct([
        _bufferLayout.seq(_bufferLayout.struct([
            publicKey("authorizedPubkey"),
            _bufferLayout.nu64("epochOfLastAuthorizedSwitch"),
            _bufferLayout.nu64("targetEpoch")
        ]), 32, "buf"),
        _bufferLayout.nu64("idx"),
        _bufferLayout.u8("isEmpty")
    ], "priorVoters"),
    _bufferLayout.nu64(),
    // epochCredits.length
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("epoch"),
        _bufferLayout.nu64("credits"),
        _bufferLayout.nu64("prevCredits")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "epochCredits"),
    _bufferLayout.struct([
        _bufferLayout.nu64("slot"),
        _bufferLayout.nu64("timestamp")
    ], "lastTimestamp")
]);
/**
 * VoteAccount class
 */ class VoteAccount {
    /**
   * @internal
   */ constructor(args){
        this.nodePubkey = void 0;
        this.authorizedWithdrawer = void 0;
        this.commission = void 0;
        this.rootSlot = void 0;
        this.votes = void 0;
        this.authorizedVoters = void 0;
        this.priorVoters = void 0;
        this.epochCredits = void 0;
        this.lastTimestamp = void 0;
        this.nodePubkey = args.nodePubkey;
        this.authorizedWithdrawer = args.authorizedWithdrawer;
        this.commission = args.commission;
        this.rootSlot = args.rootSlot;
        this.votes = args.votes;
        this.authorizedVoters = args.authorizedVoters;
        this.priorVoters = args.priorVoters;
        this.epochCredits = args.epochCredits;
        this.lastTimestamp = args.lastTimestamp;
    }
    /**
   * Deserialize VoteAccount from the account data.
   *
   * @param buffer account data
   * @return VoteAccount
   */ static fromAccountData(buffer) {
        const versionOffset = 4;
        const va = VoteAccountLayout.decode(toBuffer(buffer), versionOffset);
        let rootSlot = va.rootSlot;
        if (!va.rootSlotValid) rootSlot = null;
        return new VoteAccount({
            nodePubkey: new PublicKey(va.nodePubkey),
            authorizedWithdrawer: new PublicKey(va.authorizedWithdrawer),
            commission: va.commission,
            votes: va.votes,
            rootSlot,
            authorizedVoters: va.authorizedVoters.map(parseAuthorizedVoter),
            priorVoters: getPriorVoters(va.priorVoters),
            epochCredits: va.epochCredits,
            lastTimestamp: va.lastTimestamp
        });
    }
}
function parseAuthorizedVoter({ authorizedVoter , epoch  }) {
    return {
        epoch,
        authorizedVoter: new PublicKey(authorizedVoter)
    };
}
function parsePriorVoters({ authorizedPubkey , epochOfLastAuthorizedSwitch , targetEpoch  }) {
    return {
        authorizedPubkey: new PublicKey(authorizedPubkey),
        epochOfLastAuthorizedSwitch,
        targetEpoch
    };
}
function getPriorVoters({ buf , idx , isEmpty  }) {
    if (isEmpty) return [];
    return [
        ...buf.slice(idx + 1).map(parsePriorVoters),
        ...buf.slice(0, idx).map(parsePriorVoters)
    ];
}
const endpoint = {
    http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/"
    },
    https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/"
    }
};
/**
 * Retrieves the RPC API URL for the specified cluster
 */ function clusterApiUrl(cluster, tls) {
    const key = tls === false ? "http" : "https";
    if (!cluster) return endpoint[key]["devnet"];
    const url = endpoint[key][cluster];
    if (!url) throw new Error(`Unknown ${key} cluster: ${cluster}`);
    return url;
}
/**
 * Send and confirm a raw transaction
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Buffer} rawTransaction
 * @param {TransactionConfirmationStrategy} confirmationStrategy
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */ /**
 * @deprecated Calling `sendAndConfirmRawTransaction()` without a `confirmationStrategy`
 * is no longer supported and will be removed in a future version.
 */ // eslint-disable-next-line no-redeclare
// eslint-disable-next-line no-redeclare
async function sendAndConfirmRawTransaction(connection, rawTransaction, confirmationStrategyOrConfirmOptions, maybeConfirmOptions) {
    let confirmationStrategy;
    let options;
    if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, "lastValidBlockHeight")) {
        confirmationStrategy = confirmationStrategyOrConfirmOptions;
        options = maybeConfirmOptions;
    } else if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, "nonceValue")) {
        confirmationStrategy = confirmationStrategyOrConfirmOptions;
        options = maybeConfirmOptions;
    } else options = confirmationStrategyOrConfirmOptions;
    const sendOptions = options && {
        skipPreflight: options.skipPreflight,
        preflightCommitment: options.preflightCommitment || options.commitment,
        minContextSlot: options.minContextSlot
    };
    const signature = await connection.sendRawTransaction(rawTransaction, sendOptions);
    const commitment = options && options.commitment;
    const confirmationPromise = confirmationStrategy ? connection.confirmTransaction(confirmationStrategy, commitment) : connection.confirmTransaction(signature, commitment);
    const status = (await confirmationPromise).value;
    if (status.err) throw new Error(`Raw transaction ${signature} failed (${JSON.stringify(status)})`);
    return signature;
}
/**
 * There are 1-billion lamports in one SOL
 */ const LAMPORTS_PER_SOL = 1000000000;

},{"buffer":"fCgem","@noble/hashes/sha512":"dMOJN","@noble/ed25519":"4eJG5","bn.js":"VopIn","bs58":"4ji3p","@noble/hashes/sha256":"lhTdJ","borsh":"4JCmN","@solana/buffer-layout":"jD9A8","bigint-buffer":"b5EGn","superstruct":"kxTXl","jayson/lib/client/browser":"ckwy4","rpc-websockets/dist/lib/client":"bMhve","rpc-websockets/dist/lib/client/websocket.browser":"aM9iU","@noble/hashes/sha3":"2HLbt","@noble/hashes/hmac":"6C6bW","@noble/secp256k1":"eyYsH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMOJN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
const _sha2_js_1 = require("538559caefba2707");
const _u64_js_1 = require("e6315e2c3746c99f");
const utils_js_1 = require("9f2cf9f0a88b9866");
// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = _u64_js_1.default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
].map((n)=>BigInt(n)));
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class SHA512 extends _sha2_js_1.SHA2 {
    constructor(){
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 1779033703;
        this.Al = -205731576;
        this.Bh = -1150833019;
        this.Bl = -2067093701;
        this.Ch = 1013904242;
        this.Cl = -23791573;
        this.Dh = -1521486534;
        this.Dl = 1595750129;
        this.Eh = 1359893119;
        this.El = -1377402159;
        this.Fh = -1694144372;
        this.Fl = 725511199;
        this.Gh = 528734635;
        this.Gl = -79577749;
        this.Hh = 1541459225;
        this.Hl = 327033209;
    }
    // prettier-ignore
    get() {
        const { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
            const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
            const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
            const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh , l: El  } = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah , l: Al  } = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh , l: Bl  } = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch , l: Cl  } = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh , l: Dl  } = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh , l: El  } = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh , l: Fl  } = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh , l: Gl  } = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh , l: Hl  } = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
exports.SHA512 = SHA512;
class SHA512_224 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -1942145080;
        this.Al = 424955298;
        this.Bh = 1944164710;
        this.Bl = -1982016298;
        this.Ch = 502970286;
        this.Cl = 855612546;
        this.Dh = 1738396948;
        this.Dl = 1479516111;
        this.Eh = 258812777;
        this.El = 2077511080;
        this.Fh = 2011393907;
        this.Fl = 79989058;
        this.Gh = 1067287976;
        this.Gl = 1780299464;
        this.Hh = 286451373;
        this.Hl = -1848208735;
        this.outputLen = 28;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 573645204;
        this.Al = -64227540;
        this.Bh = -1621794909;
        this.Bl = -934517566;
        this.Ch = 596883563;
        this.Cl = 1867755857;
        this.Dh = -1774684391;
        this.Dl = 1497426621;
        this.Eh = -1775747358;
        this.El = -1467023389;
        this.Fh = -1101128155;
        this.Fl = 1401305490;
        this.Gh = 721525244;
        this.Gl = 746961066;
        this.Hh = 246885852;
        this.Hl = -2117784414;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -876896931;
        this.Al = -1056596264;
        this.Bh = 1654270250;
        this.Bl = 914150663;
        this.Ch = -1856437926;
        this.Cl = 812702999;
        this.Dh = 355462360;
        this.Dl = -150054599;
        this.Eh = 1731405415;
        this.El = -4191439;
        this.Fh = -1900787065;
        this.Fl = 1750603025;
        this.Gh = -619958771;
        this.Gl = 1694076839;
        this.Hh = 1203062813;
        this.Hl = -1090891868;
        this.outputLen = 48;
    }
}
exports.sha512 = (0, utils_js_1.wrapConstructor)(()=>new SHA512());
exports.sha512_224 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_224());
exports.sha512_256 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_256());
exports.sha384 = (0, utils_js_1.wrapConstructor)(()=>new SHA384());

},{"538559caefba2707":"hJqOM","e6315e2c3746c99f":"fhGhD","9f2cf9f0a88b9866":"26nMd"}],"hJqOM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("8399993e457732b1");
const utils_js_1 = require("ac3d5dd81b558fe0");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        _assert_js_1.default.exists(this);
        const { view , buffer , blockLen  } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer , view , blockLen , isLE  } = this;
        let { pos  } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer , outputLen  } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen , buffer , length , finished , destroyed , pos  } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"8399993e457732b1":"fGq6C","ac3d5dd81b558fe0":"26nMd"}],"fGq6C":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"26nMd":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// We use `globalThis.crypto`, but node.js versions earlier than v19 don't
// declare it in global scope. For node.js, package.json#exports field mapping
// rewrites import from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
const crypto_1 = require("16ec6ed323b55b76");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef])) // 'deadbeef'
 */ function bytesToHex(uint8a) {
    // pre-caching improves the speed 6x
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('deadbeef') // Uint8Array.from([0xde, 0xad, 0xbe, 0xef])
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
function utf8ToBytes(str) {
    if (typeof str !== "string") throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    return new TextEncoder().encode(str);
}
exports.utf8ToBytes = utf8ToBytes;
function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */ function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj)=>Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== "object" || !isPlainObject(opts))) throw new TypeError("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashConstructor) {
    const hashC = (message)=>hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashConstructor();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
/**
 * Secure PRNG. Uses `globalThis.crypto` or node.js crypto module.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error("crypto.getRandomValues must be defined");
}
exports.randomBytes = randomBytes;

},{"16ec6ed323b55b76":"88SNA"}],"88SNA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : undefined;

},{}],"fhGhD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = exports.toBig = exports.split = exports.fromBig = void 0;
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
exports.fromBig = fromBig;
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h , l  } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
exports.split = split;
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (h, l)=>l;
const rotr32L = (h, l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
exports.add = add;
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig: exports.toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64;

},{}],"4eJG5":[function(require,module,exports) {
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CURVE", ()=>CURVE);
parcelHelpers.export(exports, "ExtendedPoint", ()=>ExtendedPoint);
parcelHelpers.export(exports, "RistrettoPoint", ()=>RistrettoPoint);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "Signature", ()=>Signature);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "verify", ()=>verify);
parcelHelpers.export(exports, "sync", ()=>sync);
parcelHelpers.export(exports, "getSharedSecret", ()=>getSharedSecret);
parcelHelpers.export(exports, "curve25519", ()=>curve25519);
parcelHelpers.export(exports, "utils", ()=>utils);
var _crypto = require("crypto");
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _8n = BigInt(8);
const CU_O = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989");
const CURVE = Object.freeze({
    a: BigInt(-1),
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
    l: CU_O,
    n: CU_O,
    h: BigInt(8),
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
});
const POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
const SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
const SQRT_D = BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
const SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
const INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
const ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
const D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
class ExtendedPoint {
    constructor(x, y, z, t){
        this.x = x;
        this.y = y;
        this.z = z;
        this.t = t;
    }
    static fromAffine(p) {
        if (!(p instanceof Point)) throw new TypeError("ExtendedPoint#fromAffine: expected Point");
        if (p.equals(Point.ZERO)) return ExtendedPoint.ZERO;
        return new ExtendedPoint(p.x, p.y, _1n, mod(p.x * p.y));
    }
    static toAffineBatch(points) {
        const toInv = invertBatch(points.map((p)=>p.z));
        return points.map((p, i)=>p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
        return this.toAffineBatch(points).map(this.fromAffine);
    }
    equals(other) {
        assertExtPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        const X1Z2 = mod(X1 * Z2);
        const X2Z1 = mod(X2 * Z1);
        const Y1Z2 = mod(Y1 * Z2);
        const Y2Z1 = mod(Y2 * Z1);
        return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    negate() {
        return new ExtendedPoint(mod(-this.x), this.y, this.z, mod(-this.t));
    }
    double() {
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { a  } = CURVE;
        const A = mod(X1 * X1);
        const B = mod(Y1 * Y1);
        const C = mod(_2n * mod(Z1 * Z1));
        const D = mod(a * A);
        const x1y1 = X1 + Y1;
        const E = mod(mod(x1y1 * x1y1) - A - B);
        const G = D + B;
        const F = G - C;
        const H = D - B;
        const X3 = mod(E * F);
        const Y3 = mod(G * H);
        const T3 = mod(E * H);
        const Z3 = mod(F * G);
        return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    add(other) {
        assertExtPoint(other);
        const { x: X1 , y: Y1 , z: Z1 , t: T1  } = this;
        const { x: X2 , y: Y2 , z: Z2 , t: T2  } = other;
        const A = mod((Y1 - X1) * (Y2 + X2));
        const B = mod((Y1 + X1) * (Y2 - X2));
        const F = mod(B - A);
        if (F === _0n) return this.double();
        const C = mod(Z1 * _2n * T2);
        const D = mod(T1 * _2n * Z2);
        const E = D + C;
        const G = B + A;
        const H = D - C;
        const X3 = mod(E * F);
        const Y3 = mod(G * H);
        const T3 = mod(E * H);
        const Z3 = mod(F * G);
        return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    precomputeWindow(W) {
        const windows = 1 + 256 / W;
        const points = [];
        let p = this;
        let base = p;
        for(let window = 0; window < windows; window++){
            base = p;
            points.push(base);
            for(let i = 1; i < 2 ** (W - 1); i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(ExtendedPoint.BASE)) affinePoint = Point.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
        if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
                precomputes = ExtendedPoint.normalizeZ(precomputes);
                pointPrecomputes.set(affinePoint, precomputes);
            }
        }
        let p = ExtendedPoint.ZERO;
        let f = ExtendedPoint.BASE;
        const windows = 1 + 256 / W;
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window = 0; window < windows; window++){
            const offset = window * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
        return ExtendedPoint.normalizeZ([
            p,
            f
        ])[0];
    }
    multiply(scalar, affinePoint) {
        return this.wNAF(normalizeScalar(scalar, CURVE.l), affinePoint);
    }
    multiplyUnsafe(scalar) {
        let n = normalizeScalar(scalar, CURVE.l, false);
        const G = ExtendedPoint.BASE;
        const P0 = ExtendedPoint.ZERO;
        if (n === _0n) return P0;
        if (this.equals(P0) || n === _1n) return this;
        if (this.equals(G)) return this.wNAF(n);
        let p = P0;
        let d = this;
        while(n > _0n){
            if (n & _1n) p = p.add(d);
            d = d.double();
            n >>= _1n;
        }
        return p;
    }
    isSmallOrder() {
        return this.multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
    }
    isTorsionFree() {
        let p = this.multiplyUnsafe(CURVE.l / _2n).double();
        if (CURVE.l % _2n) p = p.add(this);
        return p.equals(ExtendedPoint.ZERO);
    }
    toAffine(invZ) {
        const { x , y , z  } = this;
        const is0 = this.equals(ExtendedPoint.ZERO);
        if (invZ == null) invZ = is0 ? _8n : invert(z);
        const ax = mod(x * invZ);
        const ay = mod(y * invZ);
        const zz = mod(z * invZ);
        if (is0) return Point.ZERO;
        if (zz !== _1n) throw new Error("invZ was invalid");
        return new Point(ax, ay);
    }
    fromRistrettoBytes() {
        legacyRist();
    }
    toRistrettoBytes() {
        legacyRist();
    }
    fromRistrettoHash() {
        legacyRist();
    }
}
ExtendedPoint.BASE = new ExtendedPoint(CURVE.Gx, CURVE.Gy, _1n, mod(CURVE.Gx * CURVE.Gy));
ExtendedPoint.ZERO = new ExtendedPoint(_0n, _1n, _1n, _0n);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
function assertExtPoint(other) {
    if (!(other instanceof ExtendedPoint)) throw new TypeError("ExtendedPoint expected");
}
function assertRstPoint(other) {
    if (!(other instanceof RistrettoPoint)) throw new TypeError("RistrettoPoint expected");
}
function legacyRist() {
    throw new Error("Legacy method: switch to RistrettoPoint");
}
class RistrettoPoint {
    constructor(ep){
        this.ep = ep;
    }
    static calcElligatorRistrettoMap(r0) {
        const { d  } = CURVE;
        const r = mod(SQRT_M1 * r0 * r0);
        const Ns = mod((r + _1n) * ONE_MINUS_D_SQ);
        let c = BigInt(-1);
        const D = mod((c - d * r) * mod(r + d));
        let { isValid: Ns_D_is_sq , value: s  } = uvRatio(Ns, D);
        let s_ = mod(s * r0);
        if (!edIsNegative(s_)) s_ = mod(-s_);
        if (!Ns_D_is_sq) s = s_;
        if (!Ns_D_is_sq) c = r;
        const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D);
        const s2 = s * s;
        const W0 = mod((s + s) * D);
        const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
        const W2 = mod(_1n - s2);
        const W3 = mod(_1n + s2);
        return new ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
    }
    static hashToCurve(hex) {
        hex = ensureBytes(hex, 64);
        const r1 = bytes255ToNumberLE(hex.slice(0, 32));
        const R1 = this.calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE(hex.slice(32, 64));
        const R2 = this.calcElligatorRistrettoMap(r2);
        return new RistrettoPoint(R1.add(R2));
    }
    static fromHex(hex) {
        hex = ensureBytes(hex, 32);
        const { a , d  } = CURVE;
        const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
        const s = bytes255ToNumberLE(hex);
        if (!equalBytes(numberTo32BytesLE(s), hex) || edIsNegative(s)) throw new Error(emsg);
        const s2 = mod(s * s);
        const u1 = mod(_1n + a * s2);
        const u2 = mod(_1n - a * s2);
        const u1_2 = mod(u1 * u1);
        const u2_2 = mod(u2 * u2);
        const v = mod(a * d * u1_2 - u2_2);
        const { isValid , value: I  } = invertSqrt(mod(v * u2_2));
        const Dx = mod(I * u2);
        const Dy = mod(I * Dx * v);
        let x = mod((s + s) * Dx);
        if (edIsNegative(x)) x = mod(-x);
        const y = mod(u1 * Dy);
        const t = mod(x * y);
        if (!isValid || edIsNegative(t) || y === _0n) throw new Error(emsg);
        return new RistrettoPoint(new ExtendedPoint(x, y, _1n, t));
    }
    toRawBytes() {
        let { x , y , z , t  } = this.ep;
        const u1 = mod(mod(z + y) * mod(z - y));
        const u2 = mod(x * y);
        const u2sq = mod(u2 * u2);
        const { value: invsqrt  } = invertSqrt(mod(u1 * u2sq));
        const D1 = mod(invsqrt * u1);
        const D2 = mod(invsqrt * u2);
        const zInv = mod(D1 * D2 * t);
        let D;
        if (edIsNegative(t * zInv)) {
            let _x = mod(y * SQRT_M1);
            let _y = mod(x * SQRT_M1);
            x = _x;
            y = _y;
            D = mod(D1 * INVSQRT_A_MINUS_D);
        } else D = D2;
        if (edIsNegative(x * zInv)) y = mod(-y);
        let s = mod((z - y) * D);
        if (edIsNegative(s)) s = mod(-s);
        return numberTo32BytesLE(s);
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
    toString() {
        return this.toHex();
    }
    equals(other) {
        assertRstPoint(other);
        const a = this.ep;
        const b = other.ep;
        const one = mod(a.x * b.y) === mod(a.y * b.x);
        const two = mod(a.y * b.y) === mod(a.x * b.x);
        return one || two;
    }
    add(other) {
        assertRstPoint(other);
        return new RistrettoPoint(this.ep.add(other.ep));
    }
    subtract(other) {
        assertRstPoint(other);
        return new RistrettoPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
        return new RistrettoPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
        return new RistrettoPoint(this.ep.multiplyUnsafe(scalar));
    }
}
RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE);
RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
const pointPrecomputes = new WeakMap();
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
    }
    static fromHex(hex, strict = true) {
        const { d , P  } = CURVE;
        hex = ensureBytes(hex, 32);
        const normed = hex.slice();
        normed[31] = hex[31] & -129;
        const y = bytesToNumberLE(normed);
        if (strict && y >= P) throw new Error("Expected 0 < hex < P");
        if (!strict && y >= POW_2_256) throw new Error("Expected 0 < hex < 2**256");
        const y2 = mod(y * y);
        const u = mod(y2 - _1n);
        const v = mod(d * y2 + _1n);
        let { isValid , value: x  } = uvRatio(u, v);
        if (!isValid) throw new Error("Point.fromHex: invalid y coordinate");
        const isXOdd = (x & _1n) === _1n;
        const isLastByteOdd = (hex[31] & 0x80) !== 0;
        if (isLastByteOdd !== isXOdd) x = mod(-x);
        return new Point(x, y);
    }
    static async fromPrivateKey(privateKey) {
        return (await getExtendedPublicKey(privateKey)).point;
    }
    toRawBytes() {
        const bytes = numberTo32BytesLE(this.y);
        bytes[31] |= this.x & _1n ? 0x80 : 0;
        return bytes;
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
    toX25519() {
        const { y  } = this;
        const u = mod((_1n + y) * invert(_1n - y));
        return numberTo32BytesLE(u);
    }
    isTorsionFree() {
        return ExtendedPoint.fromAffine(this).isTorsionFree();
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    negate() {
        return new Point(mod(-this.x), this.y);
    }
    add(other) {
        return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiply(scalar) {
        return ExtendedPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _1n);
class Signature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex, 64);
        const r = Point.fromHex(bytes.slice(0, 32), false);
        const s = bytesToNumberLE(bytes.slice(32, 64));
        return new Signature(r, s);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!(r instanceof Point)) throw new Error("Expected Point instance");
        normalizeScalar(s, CURVE.l, false);
        return this;
    }
    toRawBytes() {
        const u8 = new Uint8Array(64);
        u8.set(this.r.toRawBytes());
        u8.set(numberTo32BytesLE(this.s), 32);
        return u8;
    }
    toHex() {
        return bytesToHex(this.toRawBytes());
    }
}
function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error("Expected Uint8Array list");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
function numberTo32BytesBE(num) {
    const length = 32;
    const hex = num.toString(16).padStart(length * 2, "0");
    return hexToBytes(hex);
}
function numberTo32BytesLE(num) {
    return numberTo32BytesBE(num).reverse();
}
function edIsNegative(num) {
    return (mod(num) & _1n) === _1n;
}
function bytesToNumberLE(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    return BigInt("0x" + bytesToHex(Uint8Array.from(uint8a).reverse()));
}
const MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function bytes255ToNumberLE(bytes) {
    return mod(bytesToNumberLE(bytes) & MAX_255B);
}
function mod(a, b = CURVE.P) {
    const res = a % b;
    return res >= _0n ? res : b + res;
}
function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error("invert: does not exist");
    return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (num === _0n) return acc;
        tmp[i] = acc;
        return mod(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i)=>{
        if (num === _0n) return acc;
        tmp[i] = mod(acc * tmp[i], p);
        return mod(acc * num, p);
    }, inverted);
    return tmp;
}
function pow2(x, power) {
    const { P  } = CURVE;
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= P;
    }
    return res;
}
function pow_2_252_3(x) {
    const { P  } = CURVE;
    const _5n = BigInt(5);
    const _10n = BigInt(10);
    const _20n = BigInt(20);
    const _40n = BigInt(40);
    const _80n = BigInt(80);
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, _2n) * b2 % P;
    const b5 = pow2(b4, _1n) * x % P;
    const b10 = pow2(b5, _5n) * b5 % P;
    const b20 = pow2(b10, _10n) * b10 % P;
    const b40 = pow2(b20, _20n) * b20 % P;
    const b80 = pow2(b40, _40n) * b40 % P;
    const b160 = pow2(b80, _80n) * b80 % P;
    const b240 = pow2(b160, _80n) * b80 % P;
    const b250 = pow2(b240, _10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, _2n) * x % P;
    return {
        pow_p_5_8,
        b2
    };
}
function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7).pow_p_5_8;
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * SQRT_M1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * SQRT_M1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if (edIsNegative(x)) x = mod(-x);
    return {
        isValid: useRoot1 || useRoot2,
        value: x
    };
}
function invertSqrt(number) {
    return uvRatio(_1n, number);
}
function modlLE(hash) {
    return mod(bytesToNumberLE(hash), CURVE.l);
}
function equalBytes(b1, b2) {
    if (b1.length !== b2.length) return false;
    for(let i = 0; i < b1.length; i++){
        if (b1[i] !== b2[i]) return false;
    }
    return true;
}
function ensureBytes(hex, expectedLength) {
    const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
    if (typeof expectedLength === "number" && bytes.length !== expectedLength) throw new Error(`Expected ${expectedLength} bytes`);
    return bytes;
}
function normalizeScalar(num, max, strict = true) {
    if (!max) throw new TypeError("Specify max value");
    if (typeof num === "number" && Number.isSafeInteger(num)) num = BigInt(num);
    if (typeof num === "bigint" && num < max) {
        if (strict) {
            if (_0n < num) return num;
        } else {
            if (_0n <= num) return num;
        }
    }
    throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function adjustBytes25519(bytes) {
    bytes[0] &= 248;
    bytes[31] &= 127;
    bytes[31] |= 64;
    return bytes;
}
function decodeScalar25519(n) {
    return bytesToNumberLE(adjustBytes25519(ensureBytes(n, 32)));
}
function checkPrivateKey(key) {
    key = typeof key === "bigint" || typeof key === "number" ? numberTo32BytesBE(normalizeScalar(key, POW_2_256)) : ensureBytes(key);
    if (key.length !== 32) throw new Error(`Expected 32 bytes`);
    return key;
}
function getKeyFromHash(hashed) {
    const head = adjustBytes25519(hashed.slice(0, 32));
    const prefix = hashed.slice(32, 64);
    const scalar = modlLE(head);
    const point = Point.BASE.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return {
        head,
        prefix,
        scalar,
        point,
        pointBytes
    };
}
let _sha512Sync;
function sha512s(...m) {
    if (typeof _sha512Sync !== "function") throw new Error("utils.sha512Sync must be set to use sync methods");
    return _sha512Sync(...m);
}
async function getExtendedPublicKey(key) {
    return getKeyFromHash(await utils.sha512(checkPrivateKey(key)));
}
function getExtendedPublicKeySync(key) {
    return getKeyFromHash(sha512s(checkPrivateKey(key)));
}
async function getPublicKey(privateKey) {
    return (await getExtendedPublicKey(privateKey)).pointBytes;
}
function getPublicKeySync(privateKey) {
    return getExtendedPublicKeySync(privateKey).pointBytes;
}
async function sign(message, privateKey) {
    message = ensureBytes(message);
    const { prefix , scalar , pointBytes  } = await getExtendedPublicKey(privateKey);
    const r = modlLE(await utils.sha512(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(await utils.sha512(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
}
function signSync(message, privateKey) {
    message = ensureBytes(message);
    const { prefix , scalar , pointBytes  } = getExtendedPublicKeySync(privateKey);
    const r = modlLE(sha512s(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(sha512s(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
}
function prepareVerification(sig, message, publicKey) {
    message = ensureBytes(message);
    if (!(publicKey instanceof Point)) publicKey = Point.fromHex(publicKey, false);
    const { r , s  } = sig instanceof Signature ? sig.assertValidity() : Signature.fromHex(sig);
    const SB = ExtendedPoint.BASE.multiplyUnsafe(s);
    return {
        r,
        s,
        SB,
        pub: publicKey,
        msg: message
    };
}
function finishVerification(publicKey, r, SB, hashed) {
    const k = modlLE(hashed);
    const kA = ExtendedPoint.fromAffine(publicKey).multiplyUnsafe(k);
    const RkA = ExtendedPoint.fromAffine(r).add(kA);
    return RkA.subtract(SB).multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
}
async function verify(sig, message, publicKey) {
    const { r , SB , msg , pub  } = prepareVerification(sig, message, publicKey);
    const hashed = await utils.sha512(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
}
function verifySync(sig, message, publicKey) {
    const { r , SB , msg , pub  } = prepareVerification(sig, message, publicKey);
    const hashed = sha512s(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
}
const sync = {
    getExtendedPublicKey: getExtendedPublicKeySync,
    getPublicKey: getPublicKeySync,
    sign: signSync,
    verify: verifySync
};
async function getSharedSecret(privateKey, publicKey) {
    const { head  } = await getExtendedPublicKey(privateKey);
    const u = Point.fromHex(publicKey).toX25519();
    return curve25519.scalarMult(head, u);
}
Point.BASE._setWindowSize(8);
function cswap(swap, x_2, x_3) {
    const dummy = mod(swap * (x_2 - x_3));
    x_2 = mod(x_2 - dummy);
    x_3 = mod(x_3 + dummy);
    return [
        x_2,
        x_3
    ];
}
function montgomeryLadder(pointU, scalar) {
    const { P  } = CURVE;
    const u = normalizeScalar(pointU, P);
    const k = normalizeScalar(scalar, P);
    const a24 = BigInt(121665);
    const x_1 = u;
    let x_2 = _1n;
    let z_2 = _0n;
    let x_3 = u;
    let z_3 = _1n;
    let swap = _0n;
    let sw;
    for(let t = BigInt(254); t >= _0n; t--){
        const k_t = k >> t & _1n;
        swap ^= k_t;
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        swap = k_t;
        const A = x_2 + z_2;
        const AA = mod(A * A);
        const B = x_2 - z_2;
        const BB = mod(B * B);
        const E = AA - BB;
        const C = x_3 + z_3;
        const D = x_3 - z_3;
        const DA = mod(D * A);
        const CB = mod(C * B);
        const dacb = DA + CB;
        const da_cb = DA - CB;
        x_3 = mod(dacb * dacb);
        z_3 = mod(x_1 * mod(da_cb * da_cb));
        x_2 = mod(AA * BB);
        z_2 = mod(E * (AA + mod(a24 * E)));
    }
    sw = cswap(swap, x_2, x_3);
    x_2 = sw[0];
    x_3 = sw[1];
    sw = cswap(swap, z_2, z_3);
    z_2 = sw[0];
    z_3 = sw[1];
    const { pow_p_5_8 , b2  } = pow_2_252_3(z_2);
    const xp2 = mod(pow2(pow_p_5_8, BigInt(3)) * b2);
    return mod(x_2 * xp2);
}
function encodeUCoordinate(u) {
    return numberTo32BytesLE(mod(u, CURVE.P));
}
function decodeUCoordinate(uEnc) {
    const u = ensureBytes(uEnc, 32);
    u[31] &= 127;
    return bytesToNumberLE(u);
}
const curve25519 = {
    BASE_POINT_U: "0900000000000000000000000000000000000000000000000000000000000000",
    scalarMult (privateKey, publicKey) {
        const u = decodeUCoordinate(publicKey);
        const p = decodeScalar25519(privateKey);
        const pu = montgomeryLadder(u, p);
        if (pu === _0n) throw new Error("Invalid private or public key received");
        return encodeUCoordinate(pu);
    },
    scalarMultBase (privateKey) {
        return curve25519.scalarMult(privateKey, curve25519.BASE_POINT_U);
    }
};
const crypto = {
    node: _crypto,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};
const utils = {
    bytesToHex,
    hexToBytes,
    concatBytes,
    getExtendedPublicKey,
    mod,
    invert,
    TORSION_SUBGROUP: [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
    ],
    hashToPrivateScalar: (hash)=>{
        hash = ensureBytes(hash);
        if (hash.length < 40 || hash.length > 1024) throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
        return mod(bytesToNumberLE(hash), CURVE.l - _1n) + _1n;
    },
    randomBytes: (bytesLength = 32)=>{
        if (crypto.web) return crypto.web.getRandomValues(new Uint8Array(bytesLength));
        else if (crypto.node) {
            const { randomBytes  } = crypto.node;
            return new Uint8Array(randomBytes(bytesLength).buffer);
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>{
        return utils.randomBytes(32);
    },
    sha512: async (...messages)=>{
        const message = concatBytes(...messages);
        if (crypto.web) {
            const buffer = await crypto.web.subtle.digest("SHA-512", message.buffer);
            return new Uint8Array(buffer);
        } else if (crypto.node) return Uint8Array.from(crypto.node.createHash("sha512").update(message).digest());
        else throw new Error("The environment doesn't have sha512 function");
    },
    precompute (windowSize = 8, point = Point.BASE) {
        const cached = point.equals(Point.BASE) ? point : new Point(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_2n);
        return cached;
    },
    sha512Sync: undefined
};
Object.defineProperties(utils, {
    sha512Sync: {
        configurable: false,
        get () {
            return _sha512Sync;
        },
        set (val) {
            if (!_sha512Sync) _sha512Sync = val;
        }
    }
});

},{"crypto":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhTdJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("7367fd60fd0e4558");
const utils_js_1 = require("842a3d43ccf09392");
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
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
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A , B , C , D , E , F , G , H  } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A , B , C , D , E , F , G , H  } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"7367fd60fd0e4558":"hJqOM","842a3d43ccf09392":"26nMd"}],"4JCmN":[function(require,module,exports) {
var Buffer = require("c1f06394553ea8fd").Buffer;
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
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
const bn_js_1 = __importDefault(require("56c5c6ec72ad5d3e"));
const bs58_1 = __importDefault(require("88cd2506ab8c176a"));
// TODO: Make sure this polyfill not included when not required
const encoding = __importStar(require("f3cd2af20737b0b1"));
const ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
const textDecoder = new ResolvedTextDecoder("utf-8", {
    fatal: true
});
function baseEncode(value) {
    if (typeof value === "string") value = Buffer.from(value, "utf8");
    return bs58_1.default.encode(Buffer.from(value));
}
exports.baseEncode = baseEncode;
function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
}
exports.baseDecode = baseDecode;
const INITIAL_LENGTH = 1024;
class BorshError extends Error {
    constructor(message){
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        // NOTE: Modifying message directly as jest doesn't use .toString()
        this.message = this.originalMessage + ": " + this.fieldPath.join(".");
    }
}
exports.BorshError = BorshError;
/// Binary encoder.
class BinaryWriter {
    constructor(){
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
    }
    maybeResize() {
        if (this.buf.length < 16 + this.length) this.buf = Buffer.concat([
            this.buf,
            Buffer.alloc(INITIAL_LENGTH)
        ]);
    }
    writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
    }
    writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
    }
    writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
    }
    writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
    }
    writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
    }
    writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
    }
    writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
    }
    writeBuffer(buffer) {
        // Buffer.from is needed as this.buf.subarray can return plain Uint8Array in browser
        this.buf = Buffer.concat([
            Buffer.from(this.buf.subarray(0, this.length)),
            buffer,
            Buffer.alloc(INITIAL_LENGTH)
        ]);
        this.length += buffer.length;
    }
    writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, "utf8");
        this.writeU32(b.length);
        this.writeBuffer(b);
    }
    writeFixedArray(array) {
        this.writeBuffer(Buffer.from(array));
    }
    writeArray(array, fn) {
        this.maybeResize();
        this.writeU32(array.length);
        for (const elem of array){
            this.maybeResize();
            fn(elem);
        }
    }
    toArray() {
        return this.buf.subarray(0, this.length);
    }
}
exports.BinaryWriter = BinaryWriter;
function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function(...args) {
        try {
            return originalMethod.apply(this, args);
        } catch (e) {
            if (e instanceof RangeError) {
                const code = e.code;
                if ([
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    "ERR_OUT_OF_RANGE"
                ].indexOf(code) >= 0) throw new BorshError("Reached the end of buffer when deserializing");
            }
            throw e;
        }
    };
}
class BinaryReader {
    constructor(buf){
        this.buf = buf;
        this.offset = 0;
    }
    readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, "le");
    }
    readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, "le");
    }
    readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, "le");
    }
    readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, "le");
    }
    readBuffer(len) {
        if (this.offset + len > this.buf.length) throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
    }
    readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
            // NOTE: Using TextDecoder to fail on invalid UTF-8
            return textDecoder.decode(buf);
        } catch (e) {
            throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
    }
    readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
    }
    readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for(let i = 0; i < len; ++i)result.push(fn());
        return result;
    }
}
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU8", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU16", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU32", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU64", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU128", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU256", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU512", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readString", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readFixedArray", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readArray", null);
exports.BinaryReader = BinaryReader;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
        // TODO: Handle missing values properly (make sure they never result in just skipped write)
        if (typeof fieldType === "string") writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        else if (fieldType instanceof Array) {
            if (typeof fieldType[0] === "number") {
                if (value.length !== fieldType[0]) throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                writer.writeFixedArray(value);
            } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
                if (value.length !== fieldType[1]) throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                for(let i = 0; i < fieldType[1]; i++)serializeField(schema, null, value[i], fieldType[0], writer);
            } else writer.writeArray(value, (item)=>{
                serializeField(schema, fieldName, item, fieldType[0], writer);
            });
        } else if (fieldType.kind !== undefined) switch(fieldType.kind){
            case "option":
                if (value === null || value === undefined) writer.writeU8(0);
                else {
                    writer.writeU8(1);
                    serializeField(schema, fieldName, value, fieldType.type, writer);
                }
                break;
            case "map":
                writer.writeU32(value.size);
                value.forEach((val, key)=>{
                    serializeField(schema, fieldName, key, fieldType.key, writer);
                    serializeField(schema, fieldName, val, fieldType.value, writer);
                });
                break;
            default:
                throw new BorshError(`FieldType ${fieldType} unrecognized`);
        }
        else serializeStruct(schema, value, writer);
    } catch (error) {
        if (error instanceof BorshError) error.addToFieldPath(fieldName);
        throw error;
    }
}
function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === "function") {
        obj.borshSerialize(writer);
        return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    if (structSchema.kind === "struct") structSchema.fields.map(([fieldName, fieldType])=>{
        serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
    });
    else if (structSchema.kind === "enum") {
        const name = obj[structSchema.field];
        for(let idx = 0; idx < structSchema.values.length; ++idx){
            const [fieldName, fieldType] = structSchema.values[idx];
            if (fieldName === name) {
                writer.writeU8(idx);
                serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                break;
            }
        }
    } else throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
}
/// Serialize given object using schema of the form:
/// { class_name -> [ [field_name, field_type], .. ], .. }
function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
}
exports.serialize = serialize;
function deserializeField(schema, fieldName, fieldType, reader) {
    try {
        if (typeof fieldType === "string") return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        if (fieldType instanceof Array) {
            if (typeof fieldType[0] === "number") return reader.readFixedArray(fieldType[0]);
            else if (typeof fieldType[1] === "number") {
                const arr = [];
                for(let i = 0; i < fieldType[1]; i++)arr.push(deserializeField(schema, null, fieldType[0], reader));
                return arr;
            } else return reader.readArray(()=>deserializeField(schema, fieldName, fieldType[0], reader));
        }
        if (fieldType.kind === "option") {
            const option = reader.readU8();
            if (option) return deserializeField(schema, fieldName, fieldType.type, reader);
            return undefined;
        }
        if (fieldType.kind === "map") {
            let map = new Map();
            const length = reader.readU32();
            for(let i = 0; i < length; i++){
                const key = deserializeField(schema, fieldName, fieldType.key, reader);
                const val = deserializeField(schema, fieldName, fieldType.value, reader);
                map.set(key, val);
            }
            return map;
        }
        return deserializeStruct(schema, fieldType, reader);
    } catch (error) {
        if (error instanceof BorshError) error.addToFieldPath(fieldName);
        throw error;
    }
}
function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === "function") return classType.borshDeserialize(reader);
    const structSchema = schema.get(classType);
    if (!structSchema) throw new BorshError(`Class ${classType.name} is missing in schema`);
    if (structSchema.kind === "struct") {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields)result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        return new classType(result);
    }
    if (structSchema.kind === "enum") {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) throw new BorshError(`Enum index: ${idx} is out of range`);
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({
            [fieldName]: fieldValue
        });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
}
/// Deserializes object from bytes using schema.
function deserialize(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer.length) throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
    return result;
}
exports.deserialize = deserialize;
/// Deserializes object from bytes using schema, without checking the length read
function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    return deserializeStruct(schema, classType, reader);
}
exports.deserializeUnchecked = deserializeUnchecked;

},{"c1f06394553ea8fd":"fCgem","56c5c6ec72ad5d3e":"VopIn","88cd2506ab8c176a":"4ji3p","f3cd2af20737b0b1":"feCA6"}],"feCA6":[function(require,module,exports) {
"use strict";
// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.
//
// Utilities
//
/**
 * @param {number} a The number to test.
 * @param {number} min The minimum value in the range, inclusive.
 * @param {number} max The maximum value in the range, inclusive.
 * @return {boolean} True if a >= min and a <= max.
 */ function inRange(a, min, max) {
    return min <= a && a <= max;
}
/**
 * @param {*} o
 * @return {Object}
 */ function ToDictionary(o) {
    if (o === undefined) return {};
    if (o === Object(o)) return o;
    throw TypeError("Could not convert argument to dictionary");
}
/**
 * @param {string} string Input string of UTF-16 code units.
 * @return {!Array.<number>} Code points.
 */ function stringToCodePoints(string) {
    // https://heycam.github.io/webidl/#dfn-obtain-unicode
    // 1. Let S be the DOMString value.
    var s = String(string);
    // 2. Let n be the length of S.
    var n = s.length;
    // 3. Initialize i to 0.
    var i = 0;
    // 4. Initialize U to be an empty sequence of Unicode characters.
    var u = [];
    // 5. While i < n:
    while(i < n){
        // 1. Let c be the code unit in S at index i.
        var c = s.charCodeAt(i);
        // 2. Depending on the value of c:
        // c < 0xD800 or c > 0xDFFF
        if (c < 0xD800 || c > 0xDFFF) // Append to U the Unicode character with code point c.
        u.push(c);
        else if (0xDC00 <= c && c <= 0xDFFF) // Append to U a U+FFFD REPLACEMENT CHARACTER.
        u.push(0xFFFD);
        else if (0xD800 <= c && c <= 0xDBFF) {
            // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
            // CHARACTER.
            if (i === n - 1) u.push(0xFFFD);
            else {
                // 1. Let d be the code unit in S at index i+1.
                var d = string.charCodeAt(i + 1);
                // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
                if (0xDC00 <= d && d <= 0xDFFF) {
                    // 1. Let a be c & 0x3FF.
                    var a = c & 0x3FF;
                    // 2. Let b be d & 0x3FF.
                    var b = d & 0x3FF;
                    // 3. Append to U the Unicode character with code point
                    // 2^16+2^10*a+b.
                    u.push(0x10000 + (a << 10) + b);
                    // 4. Set i to i+1.
                    i += 1;
                } else u.push(0xFFFD);
            }
        }
        // 3. Set i to i+1.
        i += 1;
    }
    // 6. Return U.
    return u;
}
/**
 * @param {!Array.<number>} code_points Array of code points.
 * @return {string} string String of UTF-16 code units.
 */ function codePointsToString(code_points) {
    var s = "";
    for(var i = 0; i < code_points.length; ++i){
        var cp = code_points[i];
        if (cp <= 0xFFFF) s += String.fromCharCode(cp);
        else {
            cp -= 0x10000;
            s += String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);
        }
    }
    return s;
}
//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//
//
// 3. Terminology
//
/**
 * End-of-stream is a special token that signifies no more tokens
 * are in the stream.
 * @const
 */ var end_of_stream = -1;
/**
 * A stream represents an ordered sequence of tokens.
 *
 * @constructor
 * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide the
 * stream.
 */ function Stream(tokens) {
    /** @type {!Array.<number>} */ this.tokens = [].slice.call(tokens);
}
Stream.prototype = {
    /**
   * @return {boolean} True if end-of-stream has been hit.
   */ endOfStream: function() {
        return !this.tokens.length;
    },
    /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */ read: function() {
        if (!this.tokens.length) return end_of_stream;
        return this.tokens.shift();
    },
    /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */ prepend: function(token) {
        if (Array.isArray(token)) {
            var tokens = /**@type {!Array.<number>}*/ token;
            while(tokens.length)this.tokens.unshift(tokens.pop());
        } else this.tokens.unshift(token);
    },
    /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */ push: function(token) {
        if (Array.isArray(token)) {
            var tokens = /**@type {!Array.<number>}*/ token;
            while(tokens.length)this.tokens.push(tokens.shift());
        } else this.tokens.push(token);
    }
};
//
// 4. Encodings
//
// 4.1 Encoders and decoders
/** @const */ var finished = -1;
/**
 * @param {boolean} fatal If true, decoding errors raise an exception.
 * @param {number=} opt_code_point Override the standard fallback code point.
 * @return {number} The code point to insert on a decoding error.
 */ function decoderError(fatal, opt_code_point) {
    if (fatal) throw TypeError("Decoder error");
    return opt_code_point || 0xFFFD;
}
//
// 7. API
//
/** @const */ var DEFAULT_ENCODING = "utf-8";
// 7.1 Interface TextDecoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextDecoder(encoding, options) {
    if (!(this instanceof TextDecoder)) return new TextDecoder(encoding, options);
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {boolean} */ this._BOMseen = false;
    /** @private @type {?Decoder} */ this._decoder = null;
    /** @private @type {boolean} */ this._fatal = Boolean(options["fatal"]);
    /** @private @type {boolean} */ this._ignoreBOM = Boolean(options["ignoreBOM"]);
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    });
    Object.defineProperty(this, "fatal", {
        value: this._fatal
    });
    Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    });
}
TextDecoder.prototype = {
    /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */ decode: function decode(input, options) {
        var bytes;
        if (typeof input === "object" && input instanceof ArrayBuffer) bytes = new Uint8Array(input);
        else if (typeof input === "object" && "buffer" in input && input.buffer instanceof ArrayBuffer) bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        else bytes = new Uint8Array(0);
        options = ToDictionary(options);
        if (!this._streaming) {
            this._decoder = new UTF8Decoder({
                fatal: this._fatal
            });
            this._BOMseen = false;
        }
        this._streaming = Boolean(options["stream"]);
        var input_stream = new Stream(bytes);
        var code_points = [];
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._decoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (result === null) continue;
            if (Array.isArray(result)) code_points.push.apply(code_points, /**@type {!Array.<number>}*/ result);
            else code_points.push(result);
        }
        if (!this._streaming) {
            do {
                result = this._decoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (result === null) continue;
                if (Array.isArray(result)) code_points.push.apply(code_points, /**@type {!Array.<number>}*/ result);
                else code_points.push(result);
            }while (!input_stream.endOfStream());
            this._decoder = null;
        }
        if (code_points.length) // If encoding is one of utf-8, utf-16be, and utf-16le, and
        // ignore BOM flag and BOM seen flag are unset, run these
        // subsubsteps:
        {
            if ([
                "utf-8"
            ].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
                // If token is U+FEFF, set BOM seen flag.
                if (code_points[0] === 0xFEFF) {
                    this._BOMseen = true;
                    code_points.shift();
                } else // Otherwise, if token is not end-of-stream, set BOM seen
                // flag and append token to output.
                this._BOMseen = true;
            }
        }
        return codePointsToString(code_points);
    }
};
// 7.2 Interface TextEncoder
/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */ function TextEncoder(encoding, options) {
    if (!(this instanceof TextEncoder)) return new TextEncoder(encoding, options);
    encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
    if (encoding !== DEFAULT_ENCODING) throw new Error("Encoding not supported. Only utf-8 is supported");
    options = ToDictionary(options);
    /** @private @type {boolean} */ this._streaming = false;
    /** @private @type {?Encoder} */ this._encoder = null;
    /** @private @type {{fatal: boolean}} */ this._options = {
        fatal: Boolean(options["fatal"])
    };
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    });
}
TextEncoder.prototype = {
    /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */ encode: function encode(opt_string, options) {
        opt_string = opt_string ? String(opt_string) : "";
        options = ToDictionary(options);
        // NOTE: This option is nonstandard. None of the encodings
        // permitted for encoding (i.e. UTF-8, UTF-16) are stateful,
        // so streaming is not necessary.
        if (!this._streaming) this._encoder = new UTF8Encoder(this._options);
        this._streaming = Boolean(options["stream"]);
        var bytes = [];
        var input_stream = new Stream(stringToCodePoints(opt_string));
        /** @type {?(number|!Array.<number>)} */ var result;
        while(!input_stream.endOfStream()){
            result = this._encoder.handler(input_stream, input_stream.read());
            if (result === finished) break;
            if (Array.isArray(result)) bytes.push.apply(bytes, /**@type {!Array.<number>}*/ result);
            else bytes.push(result);
        }
        if (!this._streaming) {
            while(true){
                result = this._encoder.handler(input_stream, input_stream.read());
                if (result === finished) break;
                if (Array.isArray(result)) bytes.push.apply(bytes, /**@type {!Array.<number>}*/ result);
                else bytes.push(result);
            }
            this._encoder = null;
        }
        return new Uint8Array(bytes);
    }
};
//
// 8. The encoding
//
// 8.1 utf-8
/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Decoder(options) {
    var fatal = options.fatal;
    // utf-8's decoder's has an associated utf-8 code point, utf-8
    // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
    // lower boundary (initially 0x80), and a utf-8 upper boundary
    // (initially 0xBF).
    var /** @type {number} */ utf8_code_point = 0, /** @type {number} */ utf8_bytes_seen = 0, /** @type {number} */ utf8_bytes_needed = 0, /** @type {number} */ utf8_lower_boundary = 0x80, /** @type {number} */ utf8_upper_boundary = 0xBF;
    /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point.
   */ this.handler = function(stream, bite) {
        // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
        // set utf-8 bytes needed to 0 and return error.
        if (bite === end_of_stream && utf8_bytes_needed !== 0) {
            utf8_bytes_needed = 0;
            return decoderError(fatal);
        }
        // 2. If byte is end-of-stream, return finished.
        if (bite === end_of_stream) return finished;
        // 3. If utf-8 bytes needed is 0, based on byte:
        if (utf8_bytes_needed === 0) {
            // 0x00 to 0x7F
            if (inRange(bite, 0x00, 0x7F)) // Return a code point whose value is byte.
            return bite;
            // 0xC2 to 0xDF
            if (inRange(bite, 0xC2, 0xDF)) {
                // Set utf-8 bytes needed to 1 and utf-8 code point to byte
                // − 0xC0.
                utf8_bytes_needed = 1;
                utf8_code_point = bite - 0xC0;
            } else if (inRange(bite, 0xE0, 0xEF)) {
                // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
                if (bite === 0xE0) utf8_lower_boundary = 0xA0;
                // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
                if (bite === 0xED) utf8_upper_boundary = 0x9F;
                // 3. Set utf-8 bytes needed to 2 and utf-8 code point to
                // byte − 0xE0.
                utf8_bytes_needed = 2;
                utf8_code_point = bite - 0xE0;
            } else if (inRange(bite, 0xF0, 0xF4)) {
                // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
                if (bite === 0xF0) utf8_lower_boundary = 0x90;
                // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
                if (bite === 0xF4) utf8_upper_boundary = 0x8F;
                // 3. Set utf-8 bytes needed to 3 and utf-8 code point to
                // byte − 0xF0.
                utf8_bytes_needed = 3;
                utf8_code_point = bite - 0xF0;
            } else // Return error.
            return decoderError(fatal);
            // Then (byte is in the range 0xC2 to 0xF4) set utf-8 code
            // point to utf-8 code point << (6 × utf-8 bytes needed) and
            // return continue.
            utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
            return null;
        }
        // 4. If byte is not in the range utf-8 lower boundary to utf-8
        // upper boundary, run these substeps:
        if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
            // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
            // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
            // utf-8 upper boundary to 0xBF.
            utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
            utf8_lower_boundary = 0x80;
            utf8_upper_boundary = 0xBF;
            // 2. Prepend byte to stream.
            stream.prepend(bite);
            // 3. Return error.
            return decoderError(fatal);
        }
        // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
        // to 0xBF.
        utf8_lower_boundary = 0x80;
        utf8_upper_boundary = 0xBF;
        // 6. Increase utf-8 bytes seen by one and set utf-8 code point
        // to utf-8 code point + (byte − 0x80) << (6 × (utf-8 bytes
        // needed − utf-8 bytes seen)).
        utf8_bytes_seen += 1;
        utf8_code_point += bite - 0x80 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
        // 7. If utf-8 bytes seen is not equal to utf-8 bytes needed,
        // continue.
        if (utf8_bytes_seen !== utf8_bytes_needed) return null;
        // 8. Let code point be utf-8 code point.
        var code_point = utf8_code_point;
        // 9. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
        // seen to 0.
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        // 10. Return a code point whose value is code point.
        return code_point;
    };
}
/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */ function UTF8Encoder(options) {
    var fatal = options.fatal;
    /**
   * @param {Stream} stream Input stream.
   * @param {number} code_point Next code point read from the stream.
   * @return {(number|!Array.<number>)} Byte(s) to emit.
   */ this.handler = function(stream, code_point) {
        // 1. If code point is end-of-stream, return finished.
        if (code_point === end_of_stream) return finished;
        // 2. If code point is in the range U+0000 to U+007F, return a
        // byte whose value is code point.
        if (inRange(code_point, 0x0000, 0x007f)) return code_point;
        // 3. Set count and offset based on the range code point is in:
        var count, offset;
        // U+0080 to U+07FF:    1 and 0xC0
        if (inRange(code_point, 0x0080, 0x07FF)) {
            count = 1;
            offset = 0xC0;
        } else if (inRange(code_point, 0x0800, 0xFFFF)) {
            count = 2;
            offset = 0xE0;
        } else if (inRange(code_point, 0x10000, 0x10FFFF)) {
            count = 3;
            offset = 0xF0;
        }
        // 4.Let bytes be a byte sequence whose first byte is (code
        // point >> (6 × count)) + offset.
        var bytes = [
            (code_point >> 6 * count) + offset
        ];
        // 5. Run these substeps while count is greater than 0:
        while(count > 0){
            // 1. Set temp to code point >> (6 × (count − 1)).
            var temp = code_point >> 6 * (count - 1);
            // 2. Append to bytes 0x80 | (temp & 0x3F).
            bytes.push(0x80 | temp & 0x3F);
            // 3. Decrease count by one.
            count -= 1;
        }
        // 6. Return bytes bytes, in order.
        return bytes;
    };
}
exports.TextEncoder = TextEncoder;
exports.TextDecoder = TextDecoder;

},{}],"jD9A8":[function(require,module,exports) {
/* The MIT License (MIT)
 *
 * Copyright 2015-2018 Peter A. Bigot
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ /**
 * Support for translating between Uint8Array instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.s16 = exports.s8 = exports.nu64be = exports.u48be = exports.u40be = exports.u32be = exports.u24be = exports.u16be = exports.nu64 = exports.u48 = exports.u40 = exports.u32 = exports.u24 = exports.u16 = exports.u8 = exports.offset = exports.greedy = exports.Constant = exports.UTF8 = exports.CString = exports.Blob = exports.Boolean = exports.BitField = exports.BitStructure = exports.VariantLayout = exports.Union = exports.UnionLayoutDiscriminator = exports.UnionDiscriminator = exports.Structure = exports.Sequence = exports.DoubleBE = exports.Double = exports.FloatBE = exports.Float = exports.NearInt64BE = exports.NearInt64 = exports.NearUInt64BE = exports.NearUInt64 = exports.IntBE = exports.Int = exports.UIntBE = exports.UInt = exports.OffsetLayout = exports.GreedyCount = exports.ExternalLayout = exports.bindConstructorLayout = exports.nameWithProperty = exports.Layout = exports.uint8ArrayToBuffer = exports.checkUint8Array = void 0;
exports.constant = exports.utf8 = exports.cstr = exports.blob = exports.unionLayoutDiscriminator = exports.union = exports.seq = exports.bits = exports.struct = exports.f64be = exports.f64 = exports.f32be = exports.f32 = exports.ns64be = exports.s48be = exports.s40be = exports.s32be = exports.s24be = exports.s16be = exports.ns64 = exports.s48 = exports.s40 = exports.s32 = exports.s24 = void 0;
const buffer_1 = require("ee79a132a8187a91");
/* Check if a value is a Uint8Array.
 *
 * @ignore */ function checkUint8Array(b) {
    if (!(b instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array");
}
exports.checkUint8Array = checkUint8Array;
/* Create a Buffer instance from a Uint8Array.
 *
 * @ignore */ function uint8ArrayToBuffer(b) {
    checkUint8Array(b);
    return buffer_1.Buffer.from(b.buffer, b.byteOffset, b.length);
}
exports.uint8ArrayToBuffer = uint8ArrayToBuffer;
/**
 * Base class for layout objects.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * Layout#encode|encode} or {@link Layout#decode|decode} functions.
 *
 * @param {Number} span - Initializer for {@link Layout#span|span}.  The
 * parameter must be an integer; a negative value signifies that the
 * span is {@link Layout#getSpan|value-specific}.
 *
 * @param {string} [property] - Initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 */ class Layout {
    constructor(span, property){
        if (!Number.isInteger(span)) throw new TypeError("span must be an integer");
        /** The span of the layout in bytes.
         *
         * Positive values are generally expected.
         *
         * Zero will only appear in {@link Constant}s and in {@link
         * Sequence}s where the {@link Sequence#count|count} is zero.
         *
         * A negative value indicates that the span is value-specific, and
         * must be obtained using {@link Layout#getSpan|getSpan}. */ this.span = span;
        /** The property name used when this layout is represented in an
         * Object.
         *
         * Used only for layouts that {@link Layout#decode|decode} to Object
         * instances.  If left undefined the span of the unnamed layout will
         * be treated as padding: it will not be mutated by {@link
         * Layout#encode|encode} nor represented as a property in the
         * decoded Object. */ this.property = property;
    }
    /** Function to create an Object into which decoded properties will
     * be written.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances, which means:
     * * {@link Structure}
     * * {@link Union}
     * * {@link VariantLayout}
     * * {@link BitStructure}
     *
     * If left undefined the JavaScript representation of these layouts
     * will be Object instances.
     *
     * See {@link bindConstructorLayout}.
     */ makeDestinationObject() {
        return {};
    }
    /**
     * Calculate the span of a specific instance of a layout.
     *
     * @param {Uint8Array} b - the buffer that contains an encoded instance.
     *
     * @param {Number} [offset] - the offset at which the encoded instance
     * starts.  If absent a zero offset is inferred.
     *
     * @return {Number} - the number of bytes covered by the layout
     * instance.  If this method is not overridden in a subclass the
     * definition-time constant {@link Layout#span|span} will be
     * returned.
     *
     * @throws {RangeError} - if the length of the value cannot be
     * determined.
     */ getSpan(b, offset) {
        if (0 > this.span) throw new RangeError("indeterminate span");
        return this.span;
    }
    /**
     * Replicate the layout using a new property.
     *
     * This function must be used to get a structurally-equivalent layout
     * with a different name since all {@link Layout} instances are
     * immutable.
     *
     * **NOTE** This is a shallow copy.  All fields except {@link
     * Layout#property|property} are strictly equal to the origin layout.
     *
     * @param {String} property - the value for {@link
     * Layout#property|property} in the replica.
     *
     * @returns {Layout} - the copy with {@link Layout#property|property}
     * set to `property`.
     */ replicate(property) {
        const rv = Object.create(this.constructor.prototype);
        Object.assign(rv, this);
        rv.property = property;
        return rv;
    }
    /**
     * Create an object from layout properties and an array of values.
     *
     * **NOTE** This function returns `undefined` if invoked on a layout
     * that does not return its value as an Object.  Objects are
     * returned for things that are a {@link Structure}, which includes
     * {@link VariantLayout|variant layouts} if they are structures, and
     * excludes {@link Union}s.  If you want this feature for a union
     * you must use {@link Union.getVariant|getVariant} to select the
     * desired layout.
     *
     * @param {Array} values - an array of values that correspond to the
     * default order for properties.  As with {@link Layout#decode|decode}
     * layout elements that have no property name are skipped when
     * iterating over the array values.  Only the top-level properties are
     * assigned; arguments are not assigned to properties of contained
     * layouts.  Any unused values are ignored.
     *
     * @return {(Object|undefined)}
     */ fromArray(values) {
        return undefined;
    }
}
exports.Layout = Layout;
/* Provide text that carries a name (such as for a function that will
 * be throwing an error) annotated with the property of a given layout
 * (such as one for which the value was unacceptable).
 *
 * @ignore */ function nameWithProperty(name, lo) {
    if (lo.property) return name + "[" + lo.property + "]";
    return name;
}
exports.nameWithProperty = nameWithProperty;
/**
 * Augment a class so that instances can be encoded/decoded using a
 * given layout.
 *
 * Calling this function couples `Class` with `layout` in several ways:
 *
 * * `Class.layout_` becomes a static member property equal to `layout`;
 * * `layout.boundConstructor_` becomes a static member property equal
 *    to `Class`;
 * * The {@link Layout#makeDestinationObject|makeDestinationObject()}
 *   property of `layout` is set to a function that returns a `new
 *   Class()`;
 * * `Class.decode(b, offset)` becomes a static member function that
 *   delegates to {@link Layout#decode|layout.decode}.  The
 *   synthesized function may be captured and extended.
 * * `Class.prototype.encode(b, offset)` provides an instance member
 *   function that delegates to {@link Layout#encode|layout.encode}
 *   with `src` set to `this`.  The synthesized function may be
 *   captured and extended, but when the extension is invoked `this`
 *   must be explicitly bound to the instance.
 *
 * @param {class} Class - a JavaScript class with a nullary
 * constructor.
 *
 * @param {Layout} layout - the {@link Layout} instance used to encode
 * instances of `Class`.
 */ // `Class` must be a constructor Function, but the assignment of a `layout_` property to it makes it difficult to type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function bindConstructorLayout(Class, layout) {
    if ("function" !== typeof Class) throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(Class, "layout_")) throw new Error("Class is already bound to a layout");
    if (!(layout && layout instanceof Layout)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(layout, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
    Class.layout_ = layout;
    layout.boundConstructor_ = Class;
    layout.makeDestinationObject = ()=>new Class();
    Object.defineProperty(Class.prototype, "encode", {
        value (b, offset) {
            return layout.encode(this, b, offset);
        },
        writable: true
    });
    Object.defineProperty(Class, "decode", {
        value (b, offset) {
            return layout.decode(b, offset);
        },
        writable: true
    });
}
exports.bindConstructorLayout = bindConstructorLayout;
/**
 * An object that behaves like a layout but does not consume space
 * within its containing layout.
 *
 * This is primarily used to obtain metadata about a member, such as a
 * {@link OffsetLayout} that can provide data about a {@link
 * Layout#getSpan|value-specific span}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support {@link
 * ExternalLayout#isCount|isCount} or other {@link Layout} functions.
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 * @augments {Layout}
 */ class ExternalLayout extends Layout {
    /**
     * Return `true` iff the external layout decodes to an unsigned
     * integer layout.
     *
     * In that case it can be used as the source of {@link
     * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
     * or as {@link UnionLayoutDiscriminator#layout|external union
     * discriminators}.
     *
     * @abstract
     */ isCount() {
        throw new Error("ExternalLayout is abstract");
    }
}
exports.ExternalLayout = ExternalLayout;
/**
 * An {@link ExternalLayout} that determines its {@link
 * Layout#decode|value} based on offset into and length of the buffer
 * on which it is invoked.
 *
 * *Factory*: {@link module:Layout.greedy|greedy}
 *
 * @param {Number} [elementSpan] - initializer for {@link
 * GreedyCount#elementSpan|elementSpan}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {ExternalLayout}
 */ class GreedyCount extends ExternalLayout {
    constructor(elementSpan = 1, property){
        if (!Number.isInteger(elementSpan) || 0 >= elementSpan) throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, property);
        /** The layout for individual elements of the sequence.  The value
         * must be a positive integer.  If not provided, the value will be
         * 1. */ this.elementSpan = elementSpan;
    }
    /** @override */ isCount() {
        return true;
    }
    /** @override */ decode(b, offset = 0) {
        checkUint8Array(b);
        const rem = b.length - offset;
        return Math.floor(rem / this.elementSpan);
    }
    /** @override */ encode(src, b, offset) {
        return 0;
    }
}
exports.GreedyCount = GreedyCount;
/**
 * An {@link ExternalLayout} that supports accessing a {@link Layout}
 * at a fixed offset from the start of another Layout.  The offset may
 * be before, within, or after the base layout.
 *
 * *Factory*: {@link module:Layout.offset|offset}
 *
 * @param {Layout} layout - initializer for {@link
 * OffsetLayout#layout|layout}, modulo `property`.
 *
 * @param {Number} [offset] - Initializes {@link
 * OffsetLayout#offset|offset}.  Defaults to zero.
 *
 * @param {string} [property] - Optional new property name for a
 * {@link Layout#replicate| replica} of `layout` to be used as {@link
 * OffsetLayout#layout|layout}.  If not provided the `layout` is used
 * unchanged.
 *
 * @augments {Layout}
 */ class OffsetLayout extends ExternalLayout {
    constructor(layout, offset = 0, property){
        if (!(layout instanceof Layout)) throw new TypeError("layout must be a Layout");
        if (!Number.isInteger(offset)) throw new TypeError("offset must be integer or undefined");
        super(layout.span, property || layout.property);
        /** The subordinated layout. */ this.layout = layout;
        /** The location of {@link OffsetLayout#layout} relative to the
         * start of another layout.
         *
         * The value may be positive or negative, but an error will thrown
         * if at the point of use it goes outside the span of the Uint8Array
         * being accessed.  */ this.offset = offset;
    }
    /** @override */ isCount() {
        return this.layout instanceof UInt || this.layout instanceof UIntBE;
    }
    /** @override */ decode(b, offset = 0) {
        return this.layout.decode(b, offset + this.offset);
    }
    /** @override */ encode(src, b, offset = 0) {
        return this.layout.encode(src, b, offset + this.offset);
    }
}
exports.OffsetLayout = OffsetLayout;
/**
 * Represent an unsigned integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.u8|u8}, {@link
 *  module:Layout.u16|u16}, {@link module:Layout.u24|u24}, {@link
 *  module:Layout.u32|u32}, {@link module:Layout.u40|u40}, {@link
 *  module:Layout.u48|u48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UInt extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readUIntLE(offset, this.span);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeUIntLE(src, offset, this.span);
        return this.span;
    }
}
exports.UInt = UInt;
/**
 * Represent an unsigned integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.u8be|u8be}, {@link
 * module:Layout.u16be|u16be}, {@link module:Layout.u24be|u24be},
 * {@link module:Layout.u32be|u32be}, {@link
 * module:Layout.u40be|u40be}, {@link module:Layout.u48be|u48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UIntBE extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readUIntBE(offset, this.span);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeUIntBE(src, offset, this.span);
        return this.span;
    }
}
exports.UIntBE = UIntBE;
/**
 * Represent a signed integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.s8|s8}, {@link
 *  module:Layout.s16|s16}, {@link module:Layout.s24|s24}, {@link
 *  module:Layout.s32|s32}, {@link module:Layout.s40|s40}, {@link
 *  module:Layout.s48|s48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Int extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readIntLE(offset, this.span);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeIntLE(src, offset, this.span);
        return this.span;
    }
}
exports.Int = Int;
/**
 * Represent a signed integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.s8be|s8be}, {@link
 * module:Layout.s16be|s16be}, {@link module:Layout.s24be|s24be},
 * {@link module:Layout.s32be|s32be}, {@link
 * module:Layout.s40be|s40be}, {@link module:Layout.s48be|s48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class IntBE extends Layout {
    constructor(span, property){
        super(span, property);
        if (6 < this.span) throw new RangeError("span must not exceed 6 bytes");
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readIntBE(offset, this.span);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeIntBE(src, offset, this.span);
        return this.span;
    }
}
exports.IntBE = IntBE;
const V2E32 = Math.pow(2, 32);
/* True modulus high and low 32-bit words, where low word is always
 * non-negative. */ function divmodInt64(src) {
    const hi32 = Math.floor(src / V2E32);
    const lo32 = src - hi32 * V2E32;
    return {
        hi32,
        lo32
    };
}
/* Reconstruct Number from quotient and non-negative remainder */ function roundedInt64(hi32, lo32) {
    return hi32 * V2E32 + lo32;
}
/**
 * Represent an unsigned 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64|nu64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearUInt64 extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset);
        const hi32 = buffer.readUInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset);
        buffer.writeUInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
exports.NearUInt64 = NearUInt64;
/**
 * Represent an unsigned 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64be|nu64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearUInt64BE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readUInt32BE(offset);
        const lo32 = buffer.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32BE(split.hi32, offset);
        buffer.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
exports.NearUInt64BE = NearUInt64BE;
/**
 * Represent a signed 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64|ns64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearInt64 extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset);
        const hi32 = buffer.readInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset);
        buffer.writeInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
exports.NearInt64 = NearInt64;
/**
 * Represent a signed 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64be|ns64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */ class NearInt64BE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readInt32BE(offset);
        const lo32 = buffer.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */ encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeInt32BE(split.hi32, offset);
        buffer.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
exports.NearInt64BE = NearInt64BE;
/**
 * Represent a 32-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f32|f32}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Float extends Layout {
    constructor(property){
        super(4, property);
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readFloatLE(offset);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeFloatLE(src, offset);
        return 4;
    }
}
exports.Float = Float;
/**
 * Represent a 32-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f32be|f32be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class FloatBE extends Layout {
    constructor(property){
        super(4, property);
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readFloatBE(offset);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeFloatBE(src, offset);
        return 4;
    }
}
exports.FloatBE = FloatBE;
/**
 * Represent a 64-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f64|f64}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Double extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readDoubleLE(offset);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeDoubleLE(src, offset);
        return 8;
    }
}
exports.Double = Double;
/**
 * Represent a 64-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f64be|f64be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class DoubleBE extends Layout {
    constructor(property){
        super(8, property);
    }
    /** @override */ decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readDoubleBE(offset);
    }
    /** @override */ encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeDoubleBE(src, offset);
        return 8;
    }
}
exports.DoubleBE = DoubleBE;
/**
 * Represent a contiguous sequence of a specific layout as an Array.
 *
 * *Factory*: {@link module:Layout.seq|seq}
 *
 * @param {Layout} elementLayout - initializer for {@link
 * Sequence#elementLayout|elementLayout}.
 *
 * @param {(Number|ExternalLayout)} count - initializer for {@link
 * Sequence#count|count}.  The parameter must be either a positive
 * integer or an instance of {@link ExternalLayout}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Sequence extends Layout {
    constructor(elementLayout, count, property){
        if (!(elementLayout instanceof Layout)) throw new TypeError("elementLayout must be a Layout");
        if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let span = -1;
        if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) span = count * elementLayout.span;
        super(span, property);
        /** The layout for individual elements of the sequence. */ this.elementLayout = elementLayout;
        /** The number of elements in the sequence.
         *
         * This will be either a non-negative integer or an instance of
         * {@link ExternalLayout} for which {@link
         * ExternalLayout#isCount|isCount()} is `true`. */ this.count = count;
    }
    /** @override */ getSpan(b, offset = 0) {
        if (0 <= this.span) return this.span;
        let span = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) count = count.decode(b, offset);
        if (0 < this.elementLayout.span) span = count * this.elementLayout.span;
        else {
            let idx = 0;
            while(idx < count){
                span += this.elementLayout.getSpan(b, offset + span);
                ++idx;
            }
        }
        return span;
    }
    /** @override */ decode(b, offset = 0) {
        const rv = [];
        let i = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) count = count.decode(b, offset);
        while(i < count){
            rv.push(this.elementLayout.decode(b, offset));
            offset += this.elementLayout.getSpan(b, offset);
            i += 1;
        }
        return rv;
    }
    /** Implement {@link Layout#encode|encode} for {@link Sequence}.
     *
     * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
     * the unused space in the buffer is left unchanged.  If `src` is
     * longer than {@link Sequence#count|count} the unneeded elements are
     * ignored.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */ encode(src, b, offset = 0) {
        const elo = this.elementLayout;
        const span = src.reduce((span, v)=>{
            return span + elo.encode(v, b, offset + span);
        }, 0);
        if (this.count instanceof ExternalLayout) this.count.encode(src.length, b, offset);
        return span;
    }
}
exports.Sequence = Sequence;
/**
 * Represent a contiguous sequence of arbitrary layout elements as an
 * Object.
 *
 * *Factory*: {@link module:Layout.struct|struct}
 *
 * **NOTE** The {@link Layout#span|span} of the structure is variable
 * if any layout in {@link Structure#fields|fields} has a variable
 * span.  When {@link Layout#encode|encoding} we must have a value for
 * all variable-length fields, or we wouldn't be able to figure out
 * how much space to use for storage.  We can only identify the value
 * for a field when it has a {@link Layout#property|property}.  As
 * such, although a structure may contain both unnamed fields and
 * variable-length fields, it cannot contain an unnamed
 * variable-length field.
 *
 * @param {Layout[]} fields - initializer for {@link
 * Structure#fields|fields}.  An error is raised if this contains a
 * variable-length field for which a {@link Layout#property|property}
 * is not defined.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @param {Boolean} [decodePrefixes] - initializer for {@link
 * Structure#decodePrefixes|property}.
 *
 * @throws {Error} - if `fields` contains an unnamed variable-length
 * layout.
 *
 * @augments {Layout}
 */ class Structure extends Layout {
    constructor(fields, property, decodePrefixes){
        if (!(Array.isArray(fields) && fields.reduce((acc, v)=>acc && v instanceof Layout, true))) throw new TypeError("fields must be array of Layout instances");
        if ("boolean" === typeof property && undefined === decodePrefixes) {
            decodePrefixes = property;
            property = undefined;
        }
        /* Verify absence of unnamed variable-length fields. */ for (const fd of fields){
            if (0 > fd.span && undefined === fd.property) throw new Error("fields cannot contain unnamed variable-length layout");
        }
        let span = -1;
        try {
            span = fields.reduce((span, fd)=>span + fd.getSpan(), 0);
        } catch (e) {
        // ignore error
        }
        super(span, property);
        /** The sequence of {@link Layout} values that comprise the
         * structure.
         *
         * The individual elements need not be the same type, and may be
         * either scalar or aggregate layouts.  If a member layout leaves
         * its {@link Layout#property|property} undefined the
         * corresponding region of the buffer associated with the element
         * will not be mutated.
         *
         * @type {Layout[]} */ this.fields = fields;
        /** Control behavior of {@link Layout#decode|decode()} given short
         * buffers.
         *
         * In some situations a structure many be extended with additional
         * fields over time, with older installations providing only a
         * prefix of the full structure.  If this property is `true`
         * decoding will accept those buffers and leave subsequent fields
         * undefined, as long as the buffer ends at a field boundary.
         * Defaults to `false`. */ this.decodePrefixes = !!decodePrefixes;
    }
    /** @override */ getSpan(b, offset = 0) {
        if (0 <= this.span) return this.span;
        let span = 0;
        try {
            span = this.fields.reduce((span, fd)=>{
                const fsp = fd.getSpan(b, offset);
                offset += fsp;
                return span + fsp;
            }, 0);
        } catch (e) {
            throw new RangeError("indeterminate span");
        }
        return span;
    }
    /** @override */ decode(b, offset = 0) {
        checkUint8Array(b);
        const dest = this.makeDestinationObject();
        for (const fd of this.fields){
            if (undefined !== fd.property) dest[fd.property] = fd.decode(b, offset);
            offset += fd.getSpan(b, offset);
            if (this.decodePrefixes && b.length === offset) break;
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */ encode(src, b, offset = 0) {
        const firstOffset = offset;
        let lastOffset = 0;
        let lastWrote = 0;
        for (const fd of this.fields){
            let span = fd.span;
            lastWrote = 0 < span ? span : 0;
            if (undefined !== fd.property) {
                const fv = src[fd.property];
                if (undefined !== fv) {
                    lastWrote = fd.encode(fv, b, offset);
                    if (0 > span) /* Read the as-encoded span, which is not necessarily the
                         * same as what we wrote. */ span = fd.getSpan(b, offset);
                }
            }
            lastOffset = offset;
            offset += span;
        }
        /* Use (lastOffset + lastWrote) instead of offset because the last
         * item may have had a dynamic length and we don't want to include
         * the padding between it and the end of the space reserved for
         * it. */ return lastOffset + lastWrote - firstOffset;
    }
    /** @override */ fromArray(values) {
        const dest = this.makeDestinationObject();
        for (const fd of this.fields)if (undefined !== fd.property && 0 < values.length) dest[fd.property] = values.shift();
        return dest;
    }
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */ layoutFor(property) {
        if ("string" !== typeof property) throw new TypeError("property must be string");
        for (const fd of this.fields){
            if (fd.property === property) return fd;
        }
        return undefined;
    }
    /**
     * Get the offset of a structure member.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Number} - the offset in bytes to the start of `property`
     * within the structure, or undefined if `property` is not a field
     * within the structure.  If the property is a member but follows a
     * variable-length structure member a negative number will be
     * returned.
     */ offsetOf(property) {
        if ("string" !== typeof property) throw new TypeError("property must be string");
        let offset = 0;
        for (const fd of this.fields){
            if (fd.property === property) return offset;
            if (0 > fd.span) offset = -1;
            else if (0 <= offset) offset += fd.span;
        }
        return undefined;
    }
}
exports.Structure = Structure;
/**
 * An object that can provide a {@link
 * Union#discriminator|discriminator} API for {@link Union}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * UnionDiscriminator#encode|encode} or {@link
 * UnionDiscriminator#decode|decode} functions.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}.
 *
 * @abstract
 */ class UnionDiscriminator {
    constructor(property){
        /** The {@link Layout#property|property} to be used when the
         * discriminator is referenced in isolation (generally when {@link
         * Union#decode|Union decode} cannot delegate to a specific
         * variant). */ this.property = property;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
     *
     * The implementation of this method need not reference the buffer if
     * variant information is available through other means. */ decode(b, offset) {
        throw new Error("UnionDiscriminator is abstract");
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
     *
     * The implementation of this method need not store the value if
     * variant information is maintained through other means. */ encode(src, b, offset) {
        throw new Error("UnionDiscriminator is abstract");
    }
}
exports.UnionDiscriminator = UnionDiscriminator;
/**
 * An object that can provide a {@link
 * UnionDiscriminator|discriminator API} for {@link Union} using an
 * unsigned integral {@link Layout} instance located either inside or
 * outside the union.
 *
 * @param {ExternalLayout} layout - initializes {@link
 * UnionLayoutDiscriminator#layout|layout}.  Must satisfy {@link
 * ExternalLayout#isCount|isCount()}.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}, superseding the property
 * from `layout`, but defaulting to `variant` if neither `property`
 * nor layout provide a property name.
 *
 * @augments {UnionDiscriminator}
 */ class UnionLayoutDiscriminator extends UnionDiscriminator {
    constructor(layout, property){
        if (!(layout instanceof ExternalLayout && layout.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(property || layout.property || "variant");
        /** The {@link ExternalLayout} used to access the discriminator
         * value. */ this.layout = layout;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */ decode(b, offset) {
        return this.layout.decode(b, offset);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */ encode(src, b, offset) {
        return this.layout.encode(src, b, offset);
    }
}
exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
/**
 * Represent any number of span-compatible layouts.
 *
 * *Factory*: {@link module:Layout.union|union}
 *
 * If the union has a {@link Union#defaultLayout|default layout} that
 * layout must have a non-negative {@link Layout#span|span}.  The span
 * of a fixed-span union includes its {@link
 * Union#discriminator|discriminator} if the variant is a {@link
 * Union#usesPrefixDiscriminator|prefix of the union}, plus the span
 * of its {@link Union#defaultLayout|default layout}.
 *
 * If the union does not have a default layout then the encoded span
 * of the union depends on the encoded span of its variant (which may
 * be fixed or variable).
 *
 * {@link VariantLayout#layout|Variant layout}s are added through
 * {@link Union#addVariant|addVariant}.  If the union has a default
 * layout, the span of the {@link VariantLayout#layout|layout
 * contained by the variant} must not exceed the span of the {@link
 * Union#defaultLayout|default layout} (minus the span of a {@link
 * Union#usesPrefixDiscriminator|prefix disriminator}, if used).  The
 * span of the variant will equal the span of the union itself.
 *
 * The variant for a buffer can only be identified from the {@link
 * Union#discriminator|discriminator} {@link
 * UnionDiscriminator#property|property} (in the case of the {@link
 * Union#defaultLayout|default layout}), or by using {@link
 * Union#getVariant|getVariant} and examining the resulting {@link
 * VariantLayout} instance.
 *
 * A variant compatible with a JavaScript object can be identified
 * using {@link Union#getSourceVariant|getSourceVariant}.
 *
 * @param {(UnionDiscriminator|ExternalLayout|Layout)} discr - How to
 * identify the layout used to interpret the union contents.  The
 * parameter must be an instance of {@link UnionDiscriminator}, an
 * {@link ExternalLayout} that satisfies {@link
 * ExternalLayout#isCount|isCount()}, or {@link UInt} (or {@link
 * UIntBE}).  When a non-external layout element is passed the layout
 * appears at the start of the union.  In all cases the (synthesized)
 * {@link UnionDiscriminator} instance is recorded as {@link
 * Union#discriminator|discriminator}.
 *
 * @param {(Layout|null)} defaultLayout - initializer for {@link
 * Union#defaultLayout|defaultLayout}.  If absent defaults to `null`.
 * If `null` there is no default layout: the union has data-dependent
 * length and attempts to decode or encode unrecognized variants will
 * throw an exception.  A {@link Layout} instance must have a
 * non-negative {@link Layout#span|span}, and if it lacks a {@link
 * Layout#property|property} the {@link
 * Union#defaultLayout|defaultLayout} will be a {@link
 * Layout#replicate|replica} with property `content`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Union extends Layout {
    constructor(discr, defaultLayout, property){
        let discriminator;
        if (discr instanceof UInt || discr instanceof UIntBE) discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr));
        else if (discr instanceof ExternalLayout && discr.isCount()) discriminator = new UnionLayoutDiscriminator(discr);
        else if (!(discr instanceof UnionDiscriminator)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        else discriminator = discr;
        if (undefined === defaultLayout) defaultLayout = null;
        if (!(null === defaultLayout || defaultLayout instanceof Layout)) throw new TypeError("defaultLayout must be null or a Layout");
        if (null !== defaultLayout) {
            if (0 > defaultLayout.span) throw new Error("defaultLayout must have constant span");
            if (undefined === defaultLayout.property) defaultLayout = defaultLayout.replicate("content");
        }
        /* The union span can be estimated only if there's a default
         * layout.  The union spans its default layout, plus any prefix
         * variant layout.  By construction both layouts, if present, have
         * non-negative span. */ let span = -1;
        if (defaultLayout) {
            span = defaultLayout.span;
            if (0 <= span && (discr instanceof UInt || discr instanceof UIntBE)) span += discriminator.layout.span;
        }
        super(span, property);
        /** The interface for the discriminator value in isolation.
         *
         * This a {@link UnionDiscriminator} either passed to the
         * constructor or synthesized from the `discr` constructor
         * argument.  {@link
         * Union#usesPrefixDiscriminator|usesPrefixDiscriminator} will be
         * `true` iff the `discr` parameter was a non-offset {@link
         * Layout} instance. */ this.discriminator = discriminator;
        /** `true` if the {@link Union#discriminator|discriminator} is the
         * first field in the union.
         *
         * If `false` the discriminator is obtained from somewhere
         * else. */ this.usesPrefixDiscriminator = discr instanceof UInt || discr instanceof UIntBE;
        /** The layout for non-discriminator content when the value of the
         * discriminator is not recognized.
         *
         * This is the value passed to the constructor.  It is
         * structurally equivalent to the second component of {@link
         * Union#layout|layout} but may have a different property
         * name. */ this.defaultLayout = defaultLayout;
        /** A registry of allowed variants.
         *
         * The keys are unsigned integers which should be compatible with
         * {@link Union.discriminator|discriminator}.  The property value
         * is the corresponding {@link VariantLayout} instances assigned
         * to this union by {@link Union#addVariant|addVariant}.
         *
         * **NOTE** The registry remains mutable so that variants can be
         * {@link Union#addVariant|added} at any time.  Users should not
         * manipulate the content of this property. */ this.registry = {};
        /* Private variable used when invoking getSourceVariant */ let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
        /** Function to infer the variant selected by a source object.
         *
         * Defaults to {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant} but may
         * be overridden using {@link
         * Union#configGetSourceVariant|configGetSourceVariant}.
         *
         * @param {Object} src - as with {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
         *
         * @returns {(undefined|VariantLayout)} The default variant
         * (`undefined`) or first registered variant that uses a property
         * available in `src`. */ this.getSourceVariant = function(src) {
            return boundGetSourceVariant(src);
        };
        /** Function to override the implementation of {@link
         * Union#getSourceVariant|getSourceVariant}.
         *
         * Use this if the desired variant cannot be identified using the
         * algorithm of {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
         *
         * **NOTE** The provided function will be invoked bound to this
         * Union instance, providing local access to {@link
         * Union#registry|registry}.
         *
         * @param {Function} gsv - a function that follows the API of
         * {@link Union#defaultGetSourceVariant|defaultGetSourceVariant}. */ this.configGetSourceVariant = function(gsv) {
            boundGetSourceVariant = gsv.bind(this);
        };
    }
    /** @override */ getSpan(b, offset = 0) {
        if (0 <= this.span) return this.span;
        /* Default layouts always have non-negative span, so we don't have
         * one and we have to recognize the variant which will in turn
         * determine the span. */ const vlo = this.getVariant(b, offset);
        if (!vlo) throw new Error("unable to determine span for unrecognized variant");
        return vlo.getSpan(b, offset);
    }
    /**
     * Method to infer a registered Union variant compatible with `src`.
     *
     * The first satisfied rule in the following sequence defines the
     * return value:
     * * If `src` has properties matching the Union discriminator and
     *   the default layout, `undefined` is returned regardless of the
     *   value of the discriminator property (this ensures the default
     *   layout will be used);
     * * If `src` has a property matching the Union discriminator, the
     *   value of the discriminator identifies a registered variant, and
     *   either (a) the variant has no layout, or (b) `src` has the
     *   variant's property, then the variant is returned (because the
     *   source satisfies the constraints of the variant it identifies);
     * * If `src` does not have a property matching the Union
     *   discriminator, but does have a property matching a registered
     *   variant, then the variant is returned (because the source
     *   matches a variant without an explicit conflict);
     * * An error is thrown (because we either can't identify a variant,
     *   or we were explicitly told the variant but can't satisfy it).
     *
     * @param {Object} src - an object presumed to be compatible with
     * the content of the Union.
     *
     * @return {(undefined|VariantLayout)} - as described above.
     *
     * @throws {Error} - if `src` cannot be associated with a default or
     * registered variant.
     */ defaultGetSourceVariant(src) {
        if (Object.prototype.hasOwnProperty.call(src, this.discriminator.property)) {
            if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(src, this.defaultLayout.property)) return undefined;
            const vlo = this.registry[src[this.discriminator.property]];
            if (vlo && (!vlo.layout || vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property))) return vlo;
        } else for(const tag in this.registry){
            const vlo = this.registry[tag];
            if (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)) return vlo;
        }
        throw new Error("unable to infer src variant");
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
     *
     * If the variant is {@link Union#addVariant|registered} the return
     * value is an instance of that variant, with no explicit
     * discriminator.  Otherwise the {@link Union#defaultLayout|default
     * layout} is used to decode the content. */ decode(b, offset = 0) {
        let dest;
        const dlo = this.discriminator;
        const discr = dlo.decode(b, offset);
        const clo = this.registry[discr];
        if (undefined === clo) {
            const defaultLayout = this.defaultLayout;
            let contentOffset = 0;
            if (this.usesPrefixDiscriminator) contentOffset = dlo.layout.span;
            dest = this.makeDestinationObject();
            dest[dlo.property] = discr;
            // defaultLayout.property can be undefined, but this is allowed by buffer-layout
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            dest[defaultLayout.property] = defaultLayout.decode(b, offset + contentOffset);
        } else dest = clo.decode(b, offset);
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
     *
     * This API assumes the `src` object is consistent with the union's
     * {@link Union#defaultLayout|default layout}.  To encode variants
     * use the appropriate variant-specific {@link VariantLayout#encode}
     * method. */ encode(src, b, offset = 0) {
        const vlo = this.getSourceVariant(src);
        if (undefined === vlo) {
            const dlo = this.discriminator;
            // this.defaultLayout is not undefined when vlo is undefined
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const clo = this.defaultLayout;
            let contentOffset = 0;
            if (this.usesPrefixDiscriminator) contentOffset = dlo.layout.span;
            dlo.encode(src[dlo.property], b, offset);
            // clo.property is not undefined when vlo is undefined
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return contentOffset + clo.encode(src[clo.property], b, offset + contentOffset);
        }
        return vlo.encode(src, b, offset);
    }
    /** Register a new variant structure within a union.  The newly
     * created variant is returned.
     *
     * @param {Number} variant - initializer for {@link
     * VariantLayout#variant|variant}.
     *
     * @param {Layout} layout - initializer for {@link
     * VariantLayout#layout|layout}.
     *
     * @param {String} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {VariantLayout} */ addVariant(variant, layout, property) {
        const rv = new VariantLayout(this, variant, layout, property);
        this.registry[variant] = rv;
        return rv;
    }
    /**
     * Get the layout associated with a registered variant.
     *
     * If `vb` does not produce a registered variant the function returns
     * `undefined`.
     *
     * @param {(Number|Uint8Array)} vb - either the variant number, or a
     * buffer from which the discriminator is to be read.
     *
     * @param {Number} offset - offset into `vb` for the start of the
     * union.  Used only when `vb` is an instance of {Uint8Array}.
     *
     * @return {({VariantLayout}|undefined)}
     */ getVariant(vb, offset = 0) {
        let variant;
        if (vb instanceof Uint8Array) variant = this.discriminator.decode(vb, offset);
        else variant = vb;
        return this.registry[variant];
    }
}
exports.Union = Union;
/**
 * Represent a specific variant within a containing union.
 *
 * **NOTE** The {@link Layout#span|span} of the variant may include
 * the span of the {@link Union#discriminator|discriminator} used to
 * identify it, but values read and written using the variant strictly
 * conform to the content of {@link VariantLayout#layout|layout}.
 *
 * **NOTE** User code should not invoke this constructor directly.  Use
 * the union {@link Union#addVariant|addVariant} helper method.
 *
 * @param {Union} union - initializer for {@link
 * VariantLayout#union|union}.
 *
 * @param {Number} variant - initializer for {@link
 * VariantLayout#variant|variant}.
 *
 * @param {Layout} [layout] - initializer for {@link
 * VariantLayout#layout|layout}.  If absent the variant carries no
 * data.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.  Unlike many other layouts, variant
 * layouts normally include a property name so they can be identified
 * within their containing {@link Union}.  The property identifier may
 * be absent only if `layout` is is absent.
 *
 * @augments {Layout}
 */ class VariantLayout extends Layout {
    constructor(union, variant, layout, property){
        if (!(union instanceof Union)) throw new TypeError("union must be a Union");
        if (!Number.isInteger(variant) || 0 > variant) throw new TypeError("variant must be a (non-negative) integer");
        if ("string" === typeof layout && undefined === property) {
            property = layout;
            layout = null;
        }
        if (layout) {
            if (!(layout instanceof Layout)) throw new TypeError("layout must be a Layout");
            if (null !== union.defaultLayout && 0 <= layout.span && layout.span > union.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
            if ("string" !== typeof property) throw new TypeError("variant must have a String property");
        }
        let span = union.span;
        if (0 > union.span) {
            span = layout ? layout.span : 0;
            if (0 <= span && union.usesPrefixDiscriminator) span += union.discriminator.layout.span;
        }
        super(span, property);
        /** The {@link Union} to which this variant belongs. */ this.union = union;
        /** The unsigned integral value identifying this variant within
         * the {@link Union#discriminator|discriminator} of the containing
         * union. */ this.variant = variant;
        /** The {@link Layout} to be used when reading/writing the
         * non-discriminator part of the {@link
         * VariantLayout#union|union}.  If `null` the variant carries no
         * data. */ this.layout = layout || null;
    }
    /** @override */ getSpan(b, offset = 0) {
        if (0 <= this.span) /* Will be equal to the containing union span if that is not
             * variable. */ return this.span;
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
        /* Span is defined solely by the variant (and prefix discriminator) */ let span = 0;
        if (this.layout) span = this.layout.getSpan(b, offset + contentOffset);
        return contentOffset + span;
    }
    /** @override */ decode(b, offset = 0) {
        const dest = this.makeDestinationObject();
        if (this !== this.union.getVariant(b, offset)) throw new Error("variant mismatch");
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
        if (this.layout) dest[this.property] = this.layout.decode(b, offset + contentOffset);
        else if (this.property) dest[this.property] = true;
        else if (this.union.usesPrefixDiscriminator) dest[this.union.discriminator.property] = this.variant;
        return dest;
    }
    /** @override */ encode(src, b, offset = 0) {
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) contentOffset = this.union.discriminator.layout.span;
        if (this.layout && !Object.prototype.hasOwnProperty.call(src, this.property)) throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, b, offset);
        let span = contentOffset;
        if (this.layout) {
            this.layout.encode(src[this.property], b, offset + contentOffset);
            span += this.layout.getSpan(b, offset + contentOffset);
            if (0 <= this.union.span && span > this.union.span) throw new Error("encoded variant overruns containing union");
        }
        return span;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
     * VariantLayout#layout|layout}. */ fromArray(values) {
        if (this.layout) return this.layout.fromArray(values);
        return undefined;
    }
}
exports.VariantLayout = VariantLayout;
/** JavaScript chose to define bitwise operations as operating on
 * signed 32-bit values in 2's complement form, meaning any integer
 * with bit 31 set is going to look negative.  For right shifts that's
 * not a problem, because `>>>` is a logical shift, but for every
 * other bitwise operator we have to compensate for possible negative
 * results. */ function fixBitwiseResult(v) {
    if (0 > v) v += 0x100000000;
    return v;
}
/**
 * Contain a sequence of bit fields as an unsigned integer.
 *
 * *Factory*: {@link module:Layout.bits|bits}
 *
 * This is a container element; within it there are {@link BitField}
 * instances that provide the extracted properties.  The container
 * simply defines the aggregate representation and its bit ordering.
 * The representation is an object containing properties with numeric
 * or {@link Boolean} values.
 *
 * {@link BitField}s are added with the {@link
 * BitStructure#addField|addField} and {@link
 * BitStructure#addBoolean|addBoolean} methods.

 * @param {Layout} word - initializer for {@link
 * BitStructure#word|word}.  The parameter must be an instance of
 * {@link UInt} (or {@link UIntBE}) that is no more than 4 bytes wide.
 *
 * @param {bool} [msb] - `true` if the bit numbering starts at the
 * most significant bit of the containing word; `false` (default) if
 * it starts at the least significant bit of the containing word.  If
 * the parameter at this position is a string and `property` is
 * `undefined` the value of this argument will instead be used as the
 * value of `property`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class BitStructure extends Layout {
    constructor(word, msb, property){
        if (!(word instanceof UInt || word instanceof UIntBE)) throw new TypeError("word must be a UInt or UIntBE layout");
        if ("string" === typeof msb && undefined === property) {
            property = msb;
            msb = false;
        }
        if (4 < word.span) throw new RangeError("word cannot exceed 32 bits");
        super(word.span, property);
        /** The layout used for the packed value.  {@link BitField}
         * instances are packed sequentially depending on {@link
         * BitStructure#msb|msb}. */ this.word = word;
        /** Whether the bit sequences are packed starting at the most
         * significant bit growing down (`true`), or the least significant
         * bit growing up (`false`).
         *
         * **NOTE** Regardless of this value, the least significant bit of
         * any {@link BitField} value is the least significant bit of the
         * corresponding section of the packed value. */ this.msb = !!msb;
        /** The sequence of {@link BitField} layouts that comprise the
         * packed structure.
         *
         * **NOTE** The array remains mutable to allow fields to be {@link
         * BitStructure#addField|added} after construction.  Users should
         * not manipulate the content of this property.*/ this.fields = [];
        /* Storage for the value.  Capture a variable instead of using an
         * instance property because we don't want anything to change the
         * value without going through the mutator. */ let value = 0;
        this._packedSetValue = function(v) {
            value = fixBitwiseResult(v);
            return this;
        };
        this._packedGetValue = function() {
            return value;
        };
    }
    /** @override */ decode(b, offset = 0) {
        const dest = this.makeDestinationObject();
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields)if (undefined !== fd.property) dest[fd.property] = fd.decode(b);
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the packed
     * value is left unmodified.  Unused bits are also left unmodified. */ encode(src, b, offset = 0) {
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields)if (undefined !== fd.property) {
            const fv = src[fd.property];
            if (undefined !== fv) fd.encode(fv);
        }
        return this.word.encode(this._packedGetValue(), b, offset);
    }
    /** Register a new bitfield with a containing bit structure.  The
     * resulting bitfield is returned.
     *
     * @param {Number} bits - initializer for {@link BitField#bits|bits}.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {BitField} */ addField(bits, property) {
        const bf = new BitField(this, bits, property);
        this.fields.push(bf);
        return bf;
    }
    /** As with {@link BitStructure#addField|addField} for single-bit
     * fields with `boolean` value representation.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {Boolean} */ // `Boolean` conflicts with the native primitive type
    // eslint-disable-next-line @typescript-eslint/ban-types
    addBoolean(property) {
        // This is my Boolean, not the Javascript one.
        const bf = new Boolean(this, property);
        this.fields.push(bf);
        return bf;
    }
    /**
     * Get access to the bit field for a given property.
     *
     * @param {String} property - the bit field of interest.
     *
     * @return {BitField} - the field associated with `property`, or
     * undefined if there is no such property.
     */ fieldFor(property) {
        if ("string" !== typeof property) throw new TypeError("property must be string");
        for (const fd of this.fields){
            if (fd.property === property) return fd;
        }
        return undefined;
    }
}
exports.BitStructure = BitStructure;
/**
 * Represent a sequence of bits within a {@link BitStructure}.
 *
 * All bit field values are represented as unsigned integers.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addField|addField} helper
 * method.
 *
 * **NOTE** BitField instances are not instances of {@link Layout}
 * since {@link Layout#span|span} measures 8-bit units.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {Number} bits - initializer for {@link BitField#bits|bits}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 */ class BitField {
    constructor(container, bits, property){
        if (!(container instanceof BitStructure)) throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(bits) || 0 >= bits) throw new TypeError("bits must be positive integer");
        const totalBits = 8 * container.span;
        const usedBits = container.fields.reduce((sum, fd)=>sum + fd.bits, 0);
        if (bits + usedBits > totalBits) throw new Error("bits too long for span remainder (" + (totalBits - usedBits) + " of " + totalBits + " remain)");
        /** The {@link BitStructure} instance to which this bit field
         * belongs. */ this.container = container;
        /** The span of this value in bits. */ this.bits = bits;
        /** A mask of {@link BitField#bits|bits} bits isolating value bits
         * that fit within the field.
         *
         * That is, it masks a value that has not yet been shifted into
         * position within its containing packed integer. */ this.valueMask = (1 << bits) - 1;
        if (32 === bits) this.valueMask = 0xFFFFFFFF;
        /** The offset of the value within the containing packed unsigned
         * integer.  The least significant bit of the packed value is at
         * offset zero, regardless of bit ordering used. */ this.start = usedBits;
        if (this.container.msb) this.start = totalBits - usedBits - bits;
        /** A mask of {@link BitField#bits|bits} isolating the field value
         * within the containing packed unsigned integer. */ this.wordMask = fixBitwiseResult(this.valueMask << this.start);
        /** The property name used when this bitfield is represented in an
         * Object.
         *
         * Intended to be functionally equivalent to {@link
         * Layout#property}.
         *
         * If left undefined the corresponding span of bits will be
         * treated as padding: it will not be mutated by {@link
         * Layout#encode|encode} nor represented as a property in the
         * decoded Object. */ this.property = property;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field. */ decode(b, offset) {
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(word & this.wordMask);
        const value = wordValue >>> this.start;
        return value;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field.
     *
     * **NOTE** This is not a specialization of {@link
     * Layout#encode|Layout.encode} and there is no return value. */ encode(value) {
        if ("number" !== typeof value || !Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) throw new TypeError(nameWithProperty("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(value << this.start);
        this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
    }
}
exports.BitField = BitField;
/**
 * Represent a single bit within a {@link BitStructure} as a
 * JavaScript boolean.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addBoolean|addBoolean} helper
 * method.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {BitField}
 */ /* eslint-disable no-extend-native */ class Boolean extends BitField {
    constructor(container, property){
        super(container, 1, property);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
     *
     * @returns {boolean} */ decode(b, offset) {
        return !!super.decode(b, offset);
    }
    /** @override */ encode(value) {
        if ("boolean" === typeof value) // BitField requires integer values
        value = +value;
        super.encode(value);
    }
}
exports.Boolean = Boolean;
/* eslint-enable no-extend-native */ /**
 * Contain a fixed-length block of arbitrary data, represented as a
 * Uint8Array.
 *
 * *Factory*: {@link module:Layout.blob|blob}
 *
 * @param {(Number|ExternalLayout)} length - initializes {@link
 * Blob#length|length}.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Blob extends Layout {
    constructor(length, property){
        if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let span = -1;
        if (!(length instanceof ExternalLayout)) span = length;
        super(span, property);
        /** The number of bytes in the blob.
         *
         * This may be a non-negative integer, or an instance of {@link
         * ExternalLayout} that satisfies {@link
         * ExternalLayout#isCount|isCount()}. */ this.length = length;
    }
    /** @override */ getSpan(b, offset) {
        let span = this.span;
        if (0 > span) span = this.length.decode(b, offset);
        return span;
    }
    /** @override */ decode(b, offset = 0) {
        let span = this.span;
        if (0 > span) span = this.length.decode(b, offset);
        return uint8ArrayToBuffer(b).slice(offset, offset + span);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */ encode(src, b, offset) {
        let span = this.length;
        if (this.length instanceof ExternalLayout) span = src.length;
        if (!(src instanceof Uint8Array && span === src.length)) throw new TypeError(nameWithProperty("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src");
        if (offset + span > b.length) throw new RangeError("encoding overruns Uint8Array");
        const srcBuffer = uint8ArrayToBuffer(src);
        uint8ArrayToBuffer(b).write(srcBuffer.toString("hex"), offset, span, "hex");
        if (this.length instanceof ExternalLayout) this.length.encode(span, b, offset);
        return span;
    }
}
exports.Blob = Blob;
/**
 * Contain a `NUL`-terminated UTF8 string.
 *
 * *Factory*: {@link module:Layout.cstr|cstr}
 *
 * **NOTE** Any UTF8 string that incorporates a zero-valued byte will
 * not be correctly decoded by this layout.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class CString extends Layout {
    constructor(property){
        super(-1, property);
    }
    /** @override */ getSpan(b, offset = 0) {
        checkUint8Array(b);
        let idx = offset;
        while(idx < b.length && 0 !== b[idx])idx += 1;
        return 1 + idx - offset;
    }
    /** @override */ decode(b, offset = 0) {
        const span = this.getSpan(b, offset);
        return uint8ArrayToBuffer(b).slice(offset, offset + span - 1).toString("utf-8");
    }
    /** @override */ encode(src, b, offset = 0) {
        /* Must force this to a string, lest it be a number and the
         * "utf8-encoding" below actually allocate a buffer of length
         * src */ if ("string" !== typeof src) src = String(src);
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (offset + span > b.length) throw new RangeError("encoding overruns Buffer");
        const buffer = uint8ArrayToBuffer(b);
        srcb.copy(buffer, offset);
        buffer[offset + span] = 0;
        return span + 1;
    }
}
exports.CString = CString;
/**
 * Contain a UTF8 string with implicit length.
 *
 * *Factory*: {@link module:Layout.utf8|utf8}
 *
 * **NOTE** Because the length is implicit in the size of the buffer
 * this layout should be used only in isolation, or in a situation
 * where the length can be expressed by operating on a slice of the
 * containing buffer.
 *
 * @param {Number} [maxSpan] - the maximum length allowed for encoded
 * string content.  If not provided there is no bound on the allowed
 * content.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class UTF8 extends Layout {
    constructor(maxSpan, property){
        if ("string" === typeof maxSpan && undefined === property) {
            property = maxSpan;
            maxSpan = undefined;
        }
        if (undefined === maxSpan) maxSpan = -1;
        else if (!Number.isInteger(maxSpan)) throw new TypeError("maxSpan must be an integer");
        super(-1, property);
        /** The maximum span of the layout in bytes.
         *
         * Positive values are generally expected.  Zero is abnormal.
         * Attempts to encode or decode a value that exceeds this length
         * will throw a `RangeError`.
         *
         * A negative value indicates that there is no bound on the length
         * of the content. */ this.maxSpan = maxSpan;
    }
    /** @override */ getSpan(b, offset = 0) {
        checkUint8Array(b);
        return b.length - offset;
    }
    /** @override */ decode(b, offset = 0) {
        const span = this.getSpan(b, offset);
        if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan");
        return uint8ArrayToBuffer(b).slice(offset, offset + span).toString("utf-8");
    }
    /** @override */ encode(src, b, offset = 0) {
        /* Must force this to a string, lest it be a number and the
         * "utf8-encoding" below actually allocate a buffer of length
         * src */ if ("string" !== typeof src) src = String(src);
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (0 <= this.maxSpan && this.maxSpan < span) throw new RangeError("text length exceeds maxSpan");
        if (offset + span > b.length) throw new RangeError("encoding overruns Buffer");
        srcb.copy(uint8ArrayToBuffer(b), offset);
        return span;
    }
}
exports.UTF8 = UTF8;
/**
 * Contain a constant value.
 *
 * This layout may be used in cases where a JavaScript value can be
 * inferred without an expression in the binary encoding.  An example
 * would be a {@link VariantLayout|variant layout} where the content
 * is implied by the union {@link Union#discriminator|discriminator}.
 *
 * @param {Object|Number|String} value - initializer for {@link
 * Constant#value|value}.  If the value is an object (or array) and
 * the application intends the object to remain unchanged regardless
 * of what is done to values decoded by this layout, the value should
 * be frozen prior passing it to this constructor.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */ class Constant extends Layout {
    constructor(value, property){
        super(0, property);
        /** The value produced by this constant when the layout is {@link
         * Constant#decode|decoded}.
         *
         * Any JavaScript value including `null` and `undefined` is
         * permitted.
         *
         * **WARNING** If `value` passed in the constructor was not
         * frozen, it is possible for users of decoded values to change
         * the content of the value. */ this.value = value;
    }
    /** @override */ decode(b, offset) {
        return this.value;
    }
    /** @override */ encode(src, b, offset) {
        /* Constants take no space */ return 0;
    }
}
exports.Constant = Constant;
/** Factory for {@link GreedyCount}. */ exports.greedy = (elementSpan, property)=>new GreedyCount(elementSpan, property);
/** Factory for {@link OffsetLayout}. */ exports.offset = (layout, offset, property)=>new OffsetLayout(layout, offset, property);
/** Factory for {@link UInt|unsigned int layouts} spanning one
 * byte. */ exports.u8 = (property)=>new UInt(1, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning two bytes. */ exports.u16 = (property)=>new UInt(2, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning three bytes. */ exports.u24 = (property)=>new UInt(3, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning four bytes. */ exports.u32 = (property)=>new UInt(4, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning five bytes. */ exports.u40 = (property)=>new UInt(5, property);
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning six bytes. */ exports.u48 = (property)=>new UInt(6, property);
/** Factory for {@link NearUInt64|little-endian unsigned int
 * layouts} interpreted as Numbers. */ exports.nu64 = (property)=>new NearUInt64(property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning two bytes. */ exports.u16be = (property)=>new UIntBE(2, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning three bytes. */ exports.u24be = (property)=>new UIntBE(3, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning four bytes. */ exports.u32be = (property)=>new UIntBE(4, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning five bytes. */ exports.u40be = (property)=>new UIntBE(5, property);
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning six bytes. */ exports.u48be = (property)=>new UIntBE(6, property);
/** Factory for {@link NearUInt64BE|big-endian unsigned int
 * layouts} interpreted as Numbers. */ exports.nu64be = (property)=>new NearUInt64BE(property);
/** Factory for {@link Int|signed int layouts} spanning one
 * byte. */ exports.s8 = (property)=>new Int(1, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning two bytes. */ exports.s16 = (property)=>new Int(2, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning three bytes. */ exports.s24 = (property)=>new Int(3, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning four bytes. */ exports.s32 = (property)=>new Int(4, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning five bytes. */ exports.s40 = (property)=>new Int(5, property);
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning six bytes. */ exports.s48 = (property)=>new Int(6, property);
/** Factory for {@link NearInt64|little-endian signed int layouts}
 * interpreted as Numbers. */ exports.ns64 = (property)=>new NearInt64(property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning two bytes. */ exports.s16be = (property)=>new IntBE(2, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning three bytes. */ exports.s24be = (property)=>new IntBE(3, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning four bytes. */ exports.s32be = (property)=>new IntBE(4, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning five bytes. */ exports.s40be = (property)=>new IntBE(5, property);
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning six bytes. */ exports.s48be = (property)=>new IntBE(6, property);
/** Factory for {@link NearInt64BE|big-endian signed int layouts}
 * interpreted as Numbers. */ exports.ns64be = (property)=>new NearInt64BE(property);
/** Factory for {@link Float|little-endian 32-bit floating point} values. */ exports.f32 = (property)=>new Float(property);
/** Factory for {@link FloatBE|big-endian 32-bit floating point} values. */ exports.f32be = (property)=>new FloatBE(property);
/** Factory for {@link Double|little-endian 64-bit floating point} values. */ exports.f64 = (property)=>new Double(property);
/** Factory for {@link DoubleBE|big-endian 64-bit floating point} values. */ exports.f64be = (property)=>new DoubleBE(property);
/** Factory for {@link Structure} values. */ exports.struct = (fields, property, decodePrefixes)=>new Structure(fields, property, decodePrefixes);
/** Factory for {@link BitStructure} values. */ exports.bits = (word, msb, property)=>new BitStructure(word, msb, property);
/** Factory for {@link Sequence} values. */ exports.seq = (elementLayout, count, property)=>new Sequence(elementLayout, count, property);
/** Factory for {@link Union} values. */ exports.union = (discr, defaultLayout, property)=>new Union(discr, defaultLayout, property);
/** Factory for {@link UnionLayoutDiscriminator} values. */ exports.unionLayoutDiscriminator = (layout, property)=>new UnionLayoutDiscriminator(layout, property);
/** Factory for {@link Blob} values. */ exports.blob = (length, property)=>new Blob(length, property);
/** Factory for {@link CString} values. */ exports.cstr = (property)=>new CString(property);
/** Factory for {@link UTF8} values. */ exports.utf8 = (maxSpan, property)=>new UTF8(maxSpan, property);
/** Factory for {@link Constant} values. */ exports.constant = (value, property)=>new Constant(value, property);

},{"ee79a132a8187a91":"fCgem"}],"b5EGn":[function(require,module,exports) {
var Buffer = require("424ea7b7b2aa6c3f").Buffer;
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let converter;
/**
 * Convert a little-endian buffer into a BigInt.
 * @param buf The little-endian buffer to convert
 * @returns A BigInt with the little-endian representation of buf.
 */ function toBigIntLE(buf) {
    {
        const reversed = Buffer.from(buf);
        reversed.reverse();
        const hex = reversed.toString("hex");
        if (hex.length === 0) return BigInt(0);
        return BigInt(`0x${hex}`);
    }
    return converter.toBigInt(buf, false);
}
exports.toBigIntLE = toBigIntLE;
/**
 * Convert a big-endian buffer into a BigInt
 * @param buf The big-endian buffer to convert.
 * @returns A BigInt with the big-endian representation of buf.
 */ function toBigIntBE(buf) {
    {
        const hex = buf.toString("hex");
        if (hex.length === 0) return BigInt(0);
        return BigInt(`0x${hex}`);
    }
    return converter.toBigInt(buf, true);
}
exports.toBigIntBE = toBigIntBE;
/**
 * Convert a BigInt to a little-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A little-endian buffer representation of num.
 */ function toBufferLE(num, width) {
    {
        const hex = num.toString(16);
        const buffer = Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
        buffer.reverse();
        return buffer;
    }
    // Allocation is done here, since it is slower using napi in C
    return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);
}
exports.toBufferLE = toBufferLE;
/**
 * Convert a BigInt to a big-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A big-endian buffer representation of num.
 */ function toBufferBE(num, width) {
    {
        const hex = num.toString(16);
        return Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
    }
    return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);
}
exports.toBufferBE = toBufferBE;

},{"424ea7b7b2aa6c3f":"fCgem"}],"kxTXl":[function(require,module,exports) {
/**
 * A `StructFailure` represents a single specific failure in validation.
 */ /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Struct", ()=>Struct);
parcelHelpers.export(exports, "StructError", ()=>StructError);
parcelHelpers.export(exports, "any", ()=>any);
parcelHelpers.export(exports, "array", ()=>array);
parcelHelpers.export(exports, "assert", ()=>assert);
parcelHelpers.export(exports, "assign", ()=>assign);
parcelHelpers.export(exports, "boolean", ()=>boolean);
parcelHelpers.export(exports, "coerce", ()=>coerce);
parcelHelpers.export(exports, "create", ()=>create);
parcelHelpers.export(exports, "date", ()=>date);
parcelHelpers.export(exports, "defaulted", ()=>defaulted);
parcelHelpers.export(exports, "define", ()=>define);
parcelHelpers.export(exports, "deprecated", ()=>deprecated);
parcelHelpers.export(exports, "dynamic", ()=>dynamic);
parcelHelpers.export(exports, "empty", ()=>empty);
parcelHelpers.export(exports, "enums", ()=>enums);
parcelHelpers.export(exports, "func", ()=>func);
parcelHelpers.export(exports, "instance", ()=>instance);
parcelHelpers.export(exports, "integer", ()=>integer);
parcelHelpers.export(exports, "intersection", ()=>intersection);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "lazy", ()=>lazy);
parcelHelpers.export(exports, "literal", ()=>literal);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "mask", ()=>mask);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "never", ()=>never);
parcelHelpers.export(exports, "nullable", ()=>nullable);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "object", ()=>object);
parcelHelpers.export(exports, "omit", ()=>omit);
parcelHelpers.export(exports, "optional", ()=>optional);
parcelHelpers.export(exports, "partial", ()=>partial);
parcelHelpers.export(exports, "pattern", ()=>pattern);
parcelHelpers.export(exports, "pick", ()=>pick);
parcelHelpers.export(exports, "record", ()=>record);
parcelHelpers.export(exports, "refine", ()=>refine);
parcelHelpers.export(exports, "regexp", ()=>regexp);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "size", ()=>size);
parcelHelpers.export(exports, "string", ()=>string);
parcelHelpers.export(exports, "struct", ()=>struct);
parcelHelpers.export(exports, "trimmed", ()=>trimmed);
parcelHelpers.export(exports, "tuple", ()=>tuple);
parcelHelpers.export(exports, "type", ()=>type);
parcelHelpers.export(exports, "union", ()=>union);
parcelHelpers.export(exports, "unknown", ()=>unknown);
parcelHelpers.export(exports, "validate", ()=>validate);
class StructError extends TypeError {
    constructor(failure, failures){
        let cached;
        const { message , ...rest } = failure;
        const { path  } = failure;
        const msg = path.length === 0 ? message : "At path: " + path.join(".") + " -- " + message;
        super(msg);
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = ()=>{
            var _cached;
            return (_cached = cached) != null ? _cached : cached = [
                failure,
                ...failures()
            ];
        };
    }
}
/**
 * Check if a value is an iterator.
 */ function isIterable(x) {
    return isObject(x) && typeof x[Symbol.iterator] === "function";
}
/**
 * Check if a value is a plain object.
 */ function isObject(x) {
    return typeof x === "object" && x != null;
}
/**
 * Check if a value is a plain object.
 */ function isPlainObject(x) {
    if (Object.prototype.toString.call(x) !== "[object Object]") return false;
    const prototype = Object.getPrototypeOf(x);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Return a value as a printable string.
 */ function print(value) {
    return typeof value === "string" ? JSON.stringify(value) : "" + value;
}
/**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */ function shiftIterator(input) {
    const { done , value  } = input.next();
    return done ? undefined : value;
}
/**
 * Convert a single validation result to a failure.
 */ function toFailure(result, context, struct, value) {
    if (result === true) return;
    else if (result === false) result = {};
    else if (typeof result === "string") result = {
        message: result
    };
    const { path , branch  } = context;
    const { type  } = struct;
    const { refinement , message ="Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + print(value) + "`"  } = result;
    return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
    };
}
/**
 * Convert a validation result to an iterable of failures.
 */ function* toFailures(result, context, struct, value) {
    if (!isIterable(result)) result = [
        result
    ];
    for (const r of result){
        const failure = toFailure(r, context, struct, value);
        if (failure) yield failure;
    }
}
/**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */ function* run(value, struct, options = {}) {
    const { path =[] , branch =[
        value
    ] , coerce =false , mask =false  } = options;
    const ctx = {
        path,
        branch
    };
    if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && struct.type !== "type" && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) {
            for(const key in value)if (struct.schema[key] === undefined) delete value[key];
        }
    }
    let valid = true;
    for (const failure of struct.validator(value, ctx)){
        valid = false;
        yield [
            failure,
            undefined
        ];
    }
    for (let [k, v, s] of struct.entries(value, ctx)){
        const ts = run(v, s, {
            path: k === undefined ? path : [
                ...path,
                k
            ],
            branch: k === undefined ? branch : [
                ...branch,
                v
            ],
            coerce,
            mask
        });
        for (const t of ts){
            if (t[0]) {
                valid = false;
                yield [
                    t[0],
                    undefined
                ];
            } else if (coerce) {
                v = t[1];
                if (k === undefined) value = v;
                else if (value instanceof Map) value.set(k, v);
                else if (value instanceof Set) value.add(v);
                else if (isObject(value)) value[k] = v;
            }
        }
    }
    if (valid) for (const failure of struct.refiner(value, ctx)){
        valid = false;
        yield [
            failure,
            undefined
        ];
    }
    if (valid) yield [
        undefined,
        value
    ];
}
/**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */ class Struct {
    constructor(props){
        const { type , schema , validator , refiner , coercer =(value)=>value , entries =function*() {}  } = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) this.validator = (value, context)=>{
            const result = validator(value, context);
            return toFailures(result, context, this, value);
        };
        else this.validator = ()=>[];
        if (refiner) this.refiner = (value, context)=>{
            const result = refiner(value, context);
            return toFailures(result, context, this, value);
        };
        else this.refiner = ()=>[];
    }
    /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */ assert(value) {
        return assert(value, this);
    }
    /**
   * Create a value with the struct's coercion logic, then validate it.
   */ create(value) {
        return create(value, this);
    }
    /**
   * Check if a value passes the struct's validation.
   */ is(value) {
        return is(value, this);
    }
    /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */ mask(value) {
        return mask(value, this);
    }
    /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */ validate(value, options = {}) {
        return validate(value, this, options);
    }
}
/**
 * Assert that a value passes a struct, throwing if it doesn't.
 */ function assert(value, struct) {
    const result = validate(value, struct);
    if (result[0]) throw result[0];
}
/**
 * Create a value with the coercion logic of struct and validate it.
 */ function create(value, struct) {
    const result = validate(value, struct, {
        coerce: true
    });
    if (result[0]) throw result[0];
    else return result[1];
}
/**
 * Mask a value, returning only the subset of properties defined by a struct.
 */ function mask(value, struct) {
    const result = validate(value, struct, {
        coerce: true,
        mask: true
    });
    if (result[0]) throw result[0];
    else return result[1];
}
/**
 * Check if a value passes a struct.
 */ function is(value, struct) {
    const result = validate(value, struct);
    return !result[0];
}
/**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */ function validate(value, struct, options = {}) {
    const tuples = run(value, struct, options);
    const tuple = shiftIterator(tuples);
    if (tuple[0]) {
        const error = new StructError(tuple[0], function*() {
            for (const t of tuples)if (t[0]) yield t[0];
        });
        return [
            error,
            undefined
        ];
    } else {
        const v = tuple[1];
        return [
            undefined,
            v
        ];
    }
}
function assign(...Structs) {
    const schemas = Structs.map((s)=>s.schema);
    const schema = Object.assign({}, ...schemas);
    return object(schema);
}
/**
 * Define a new struct type with a custom validation function.
 */ function define(name, validator) {
    return new Struct({
        type: name,
        schema: null,
        validator
    });
}
/**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */ function deprecated(struct, log) {
    return new Struct({
        ...struct,
        refiner: (value, ctx)=>value === undefined || struct.refiner(value, ctx),
        validator (value, ctx) {
            if (value === undefined) return true;
            else {
                log(value, ctx);
                return struct.validator(value, ctx);
            }
        }
    });
}
/**
 * Create a struct with dynamic validation logic.
 *
 * The callback will receive the value currently being validated, and must
 * return a struct object to validate it with. This can be useful to model
 * validation logic that changes based on its input.
 */ function dynamic(fn) {
    return new Struct({
        type: "dynamic",
        schema: null,
        *entries (value, ctx) {
            const struct = fn(value, ctx);
            yield* struct.entries(value, ctx);
        },
        validator (value, ctx) {
            const struct = fn(value, ctx);
            return struct.validator(value, ctx);
        },
        coercer (value, ctx) {
            const struct = fn(value, ctx);
            return struct.coercer(value, ctx);
        }
    });
}
/**
 * Create a struct with lazily evaluated validation logic.
 *
 * The first time validation is run with the struct, the callback will be called
 * and must return a struct object to use. This is useful for cases where you
 * want to have self-referential structs for nested data structures to avoid a
 * circular definition problem.
 */ function lazy(fn) {
    let struct;
    return new Struct({
        type: "lazy",
        schema: null,
        *entries (value, ctx) {
            var _struct;
            (_struct = struct) != null ? _struct : struct = fn();
            yield* struct.entries(value, ctx);
        },
        validator (value, ctx) {
            var _struct2;
            (_struct2 = struct) != null ? _struct2 : struct = fn();
            return struct.validator(value, ctx);
        },
        coercer (value, ctx) {
            var _struct3;
            (_struct3 = struct) != null ? _struct3 : struct = fn();
            return struct.coercer(value, ctx);
        }
    });
}
/**
 * Create a new struct based on an existing object struct, but excluding
 * specific properties.
 *
 * Like TypeScript's `Omit` utility.
 */ function omit(struct, keys) {
    const { schema  } = struct;
    const subschema = {
        ...schema
    };
    for (const key of keys)delete subschema[key];
    return object(subschema);
}
/**
 * Create a new struct based on an existing object struct, but with all of its
 * properties allowed to be `undefined`.
 *
 * Like TypeScript's `Partial` utility.
 */ function partial(struct) {
    const schema = struct instanceof Struct ? {
        ...struct.schema
    } : {
        ...struct
    };
    for(const key in schema)schema[key] = optional(schema[key]);
    return object(schema);
}
/**
 * Create a new struct based on an existing object struct, but only including
 * specific properties.
 *
 * Like TypeScript's `Pick` utility.
 */ function pick(struct, keys) {
    const { schema  } = struct;
    const subschema = {};
    for (const key of keys)subschema[key] = schema[key];
    return object(subschema);
}
/**
 * Define a new struct type with a custom validation function.
 *
 * @deprecated This function has been renamed to `define`.
 */ function struct(name, validator) {
    console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`.");
    return define(name, validator);
}
/**
 * Ensure that any value passes validation.
 */ function any() {
    return define("any", ()=>true);
}
function array(Element) {
    return new Struct({
        type: "array",
        schema: Element,
        *entries (value) {
            if (Element && Array.isArray(value)) for (const [i, v] of value.entries())yield [
                i,
                v,
                Element
            ];
        },
        coercer (value) {
            return Array.isArray(value) ? value.slice() : value;
        },
        validator (value) {
            return Array.isArray(value) || "Expected an array value, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a boolean.
 */ function boolean() {
    return define("boolean", (value)=>{
        return typeof value === "boolean";
    });
}
/**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */ function date() {
    return define("date", (value)=>{
        return value instanceof Date && !isNaN(value.getTime()) || "Expected a valid `Date` object, but received: " + print(value);
    });
}
function enums(values) {
    const schema = {};
    const description = values.map((v)=>print(v)).join();
    for (const key of values)schema[key] = key;
    return new Struct({
        type: "enums",
        schema,
        validator (value) {
            return values.includes(value) || "Expected one of `" + description + "`, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a function.
 */ function func() {
    return define("func", (value)=>{
        return typeof value === "function" || "Expected a function, but received: " + print(value);
    });
}
/**
 * Ensure that a value is an instance of a specific class.
 */ function instance(Class) {
    return define("instance", (value)=>{
        return value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value);
    });
}
/**
 * Ensure that a value is an integer.
 */ function integer() {
    return define("integer", (value)=>{
        return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || "Expected an integer, but received: " + print(value);
    });
}
function intersection(Structs) {
    return new Struct({
        type: "intersection",
        schema: null,
        *entries (value, ctx) {
            for (const S of Structs)yield* S.entries(value, ctx);
        },
        *validator (value, ctx) {
            for (const S of Structs)yield* S.validator(value, ctx);
        },
        *refiner (value, ctx) {
            for (const S of Structs)yield* S.refiner(value, ctx);
        }
    });
}
function literal(constant) {
    const description = print(constant);
    const t = typeof constant;
    return new Struct({
        type: "literal",
        schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
        validator (value) {
            return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
        }
    });
}
function map(Key, Value) {
    return new Struct({
        type: "map",
        schema: null,
        *entries (value) {
            if (Key && Value && value instanceof Map) for (const [k, v] of value.entries()){
                yield [
                    k,
                    k,
                    Key
                ];
                yield [
                    k,
                    v,
                    Value
                ];
            }
        },
        coercer (value) {
            return value instanceof Map ? new Map(value) : value;
        },
        validator (value) {
            return value instanceof Map || "Expected a `Map` object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that no value ever passes validation.
 */ function never() {
    return define("never", ()=>false);
}
/**
 * Augment an existing struct to allow `null` values.
 */ function nullable(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx)=>value === null || struct.validator(value, ctx),
        refiner: (value, ctx)=>value === null || struct.refiner(value, ctx)
    });
}
/**
 * Ensure that a value is a number.
 */ function number() {
    return define("number", (value)=>{
        return typeof value === "number" && !isNaN(value) || "Expected a number, but received: " + print(value);
    });
}
function object(schema) {
    const knowns = schema ? Object.keys(schema) : [];
    const Never = never();
    return new Struct({
        type: "object",
        schema: schema ? schema : null,
        *entries (value) {
            if (schema && isObject(value)) {
                const unknowns = new Set(Object.keys(value));
                for (const key of knowns){
                    unknowns.delete(key);
                    yield [
                        key,
                        value[key],
                        schema[key]
                    ];
                }
                for (const key of unknowns)yield [
                    key,
                    value[key],
                    Never
                ];
            }
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        },
        coercer (value) {
            return isObject(value) ? {
                ...value
            } : value;
        }
    });
}
/**
 * Augment a struct to allow `undefined` values.
 */ function optional(struct) {
    return new Struct({
        ...struct,
        validator: (value, ctx)=>value === undefined || struct.validator(value, ctx),
        refiner: (value, ctx)=>value === undefined || struct.refiner(value, ctx)
    });
}
/**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */ function record(Key, Value) {
    return new Struct({
        type: "record",
        schema: null,
        *entries (value) {
            if (isObject(value)) for(const k in value){
                const v = value[k];
                yield [
                    k,
                    k,
                    Key
                ];
                yield [
                    k,
                    v,
                    Value
                ];
            }
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */ function regexp() {
    return define("regexp", (value)=>{
        return value instanceof RegExp;
    });
}
function set(Element) {
    return new Struct({
        type: "set",
        schema: null,
        *entries (value) {
            if (Element && value instanceof Set) for (const v of value)yield [
                v,
                v,
                Element
            ];
        },
        coercer (value) {
            return value instanceof Set ? new Set(value) : value;
        },
        validator (value) {
            return value instanceof Set || "Expected a `Set` object, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value is a string.
 */ function string() {
    return define("string", (value)=>{
        return typeof value === "string" || "Expected a string, but received: " + print(value);
    });
}
function tuple(Elements) {
    const Never = never();
    return new Struct({
        type: "tuple",
        schema: null,
        *entries (value) {
            if (Array.isArray(value)) {
                const length = Math.max(Elements.length, value.length);
                for(let i = 0; i < length; i++)yield [
                    i,
                    value[i],
                    Elements[i] || Never
                ];
            }
        },
        validator (value) {
            return Array.isArray(value) || "Expected an array, but received: " + print(value);
        }
    });
}
/**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */ function type(schema) {
    const keys = Object.keys(schema);
    return new Struct({
        type: "type",
        schema,
        *entries (value) {
            if (isObject(value)) for (const k of keys)yield [
                k,
                value[k],
                schema[k]
            ];
        },
        validator (value) {
            return isObject(value) || "Expected an object, but received: " + print(value);
        }
    });
}
function union(Structs) {
    const description = Structs.map((s)=>s.type).join(" | ");
    return new Struct({
        type: "union",
        schema: null,
        validator (value, ctx) {
            const failures = [];
            for (const S of Structs){
                const [...tuples] = run(value, S, ctx);
                const [first] = tuples;
                if (!first[0]) return [];
                else {
                    for (const [failure] of tuples)if (failure) failures.push(failure);
                }
            }
            return [
                "Expected the value to satisfy a union of `" + description + "`, but received: " + print(value),
                ...failures
            ];
        }
    });
}
/**
 * Ensure that any value passes validation, without widening its type to `any`.
 */ function unknown() {
    return define("unknown", ()=>true);
}
/**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function coerce(struct, condition, coercer) {
    return new Struct({
        ...struct,
        coercer: (value, ctx)=>{
            return is(value, condition) ? struct.coercer(coercer(value, ctx), ctx) : struct.coercer(value, ctx);
        }
    });
}
/**
 * Augment a struct to replace `undefined` values with a default.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function defaulted(struct, fallback, options = {}) {
    return coerce(struct, unknown(), (x)=>{
        const f = typeof fallback === "function" ? fallback() : fallback;
        if (x === undefined) return f;
        if (!options.strict && isPlainObject(x) && isPlainObject(f)) {
            const ret = {
                ...x
            };
            let changed = false;
            for(const key in f)if (ret[key] === undefined) {
                ret[key] = f[key];
                changed = true;
            }
            if (changed) return ret;
        }
        return x;
    });
}
/**
 * Augment a struct to trim string inputs.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */ function trimmed(struct) {
    return coerce(struct, string(), (x)=>x.trim());
}
/**
 * Ensure that a string, array, map, or set is empty.
 */ function empty(struct) {
    const expected = "Expected an empty " + struct.type;
    return refine(struct, "empty", (value)=>{
        if (value instanceof Map || value instanceof Set) {
            const { size  } = value;
            return size === 0 || expected + " but received one with a size of `" + size + "`";
        } else {
            const { length  } = value;
            return length === 0 || expected + " but received one with a length of `" + length + "`";
        }
    });
}
/**
 * Ensure that a number or date is below a threshold.
 */ function max(struct, threshold, options = {}) {
    const { exclusive  } = options;
    return refine(struct, "max", (value)=>{
        return exclusive ? value < threshold : value <= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? "" : "or equal to ") + threshold + " but received `" + value + "`";
    });
}
/**
 * Ensure that a number or date is above a threshold.
 */ function min(struct, threshold, options = {}) {
    const { exclusive  } = options;
    return refine(struct, "min", (value)=>{
        return exclusive ? value > threshold : value >= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? "" : "or equal to ") + threshold + " but received `" + value + "`";
    });
}
/**
 * Ensure that a string matches a regular expression.
 */ function pattern(struct, regexp) {
    return refine(struct, "pattern", (value)=>{
        return regexp.test(value) || "Expected a " + struct.type + " matching `/" + regexp.source + '/` but received "' + value + '"';
    });
}
/**
 * Ensure that a string, array, number, date, map, or set has a size (or length, or time) between `min` and `max`.
 */ function size(struct, min, max = min) {
    const expected = "Expected a " + struct.type;
    const of = min === max ? "of `" + min + "`" : "between `" + min + "` and `" + max + "`";
    return refine(struct, "size", (value)=>{
        if (typeof value === "number" || value instanceof Date) return min <= value && value <= max || expected + " " + of + " but received `" + value + "`";
        else if (value instanceof Map || value instanceof Set) {
            const { size  } = value;
            return min <= size && size <= max || expected + " with a size " + of + " but received one with a size of `" + size + "`";
        } else {
            const { length  } = value;
            return min <= length && length <= max || expected + " with a length " + of + " but received one with a length of `" + length + "`";
        }
    });
}
/**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */ function refine(struct, name, refiner) {
    return new Struct({
        ...struct,
        *refiner (value, ctx) {
            yield* struct.refiner(value, ctx);
            const result = refiner(value, ctx);
            const failures = toFailures(result, ctx, struct, value);
            for (const failure of failures)yield {
                ...failure,
                refinement: name
            };
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ckwy4":[function(require,module,exports) {
"use strict";
const uuid = require("eac7d61fe90353b").v4;
const generateRequest = require("f95bedb36f8b571d");
/**
 * Constructor for a Jayson Browser Client that does not depend any node.js core libraries
 * @class ClientBrowser
 * @param {Function} callServer Method that calls the server, receives the stringified request and a regular node-style callback
 * @param {Object} [options]
 * @param {Function} [options.reviver] Reviver function for JSON
 * @param {Function} [options.replacer] Replacer function for JSON
 * @param {Number} [options.version=2] JSON-RPC version to use (1|2)
 * @param {Function} [options.generator] Function to use for generating request IDs
 *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it
 * @return {ClientBrowser}
 */ const ClientBrowser = function(callServer, options) {
    if (!(this instanceof ClientBrowser)) return new ClientBrowser(callServer, options);
    if (!options) options = {};
    this.options = {
        reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
        replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
        generator: typeof options.generator !== "undefined" ? options.generator : function() {
            return uuid();
        },
        version: typeof options.version !== "undefined" ? options.version : 2,
        notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
    };
    this.callServer = callServer;
};
module.exports = ClientBrowser;
/**
 *  Creates a request and dispatches it if given a callback.
 *  @param {String|Array} method A batch request if passed an Array, or a method name if passed a String
 *  @param {Array|Object} [params] Parameters for the method
 *  @param {String|Number} [id] Optional id. If undefined an id will be generated. If null it creates a notification request
 *  @param {Function} [callback] Request callback. If specified, executes the request rather than only returning it.
 *  @throws {TypeError} Invalid parameters
 *  @return {Object} JSON-RPC 1.0 or 2.0 compatible request
 */ ClientBrowser.prototype.request = function(method, params, id, callback) {
    const self = this;
    let request = null;
    // is this a batch request?
    const isBatch = Array.isArray(method) && typeof params === "function";
    if (this.options.version === 1 && isBatch) throw new TypeError("JSON-RPC 1.0 does not support batching");
    // is this a raw request?
    const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
    if (isBatch || isRaw) {
        callback = params;
        request = method;
    } else {
        if (typeof id === "function") {
            callback = id;
            // specifically undefined because "null" is a notification request
            id = undefined;
        }
        const hasCallback = typeof callback === "function";
        try {
            request = generateRequest(method, params, id, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull
            });
        } catch (err) {
            if (hasCallback) return callback(err);
            throw err;
        }
        // no callback means we should just return a raw request
        if (!hasCallback) return request;
    }
    let message;
    try {
        message = JSON.stringify(request, this.options.replacer);
    } catch (err) {
        return callback(err);
    }
    this.callServer(message, function(err, response) {
        self._parseResponse(err, response, callback);
    });
    // always return the raw request
    return request;
};
/**
 * Parses a response from a server
 * @param {Object} err Error to pass on that is unrelated to the actual response
 * @param {String} responseText JSON-RPC 1.0 or 2.0 response
 * @param {Function} callback Callback that will receive different arguments depending on the amount of parameters
 * @private
 */ ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
    if (err) {
        callback(err);
        return;
    }
    if (!responseText) // empty response text, assume that is correct because it could be a
    // notification which jayson does not give any body for
    return callback();
    let response;
    try {
        response = JSON.parse(responseText, this.options.reviver);
    } catch (err) {
        return callback(err);
    }
    if (callback.length === 3) {
        // if callback length is 3, we split callback arguments on error and response
        // is batch response?
        if (Array.isArray(response)) {
            // neccesary to split strictly on validity according to spec here
            const isError = function(res) {
                return typeof res.error !== "undefined";
            };
            const isNotError = function(res) {
                return !isError(res);
            };
            return callback(null, response.filter(isError), response.filter(isNotError));
        } else // split regardless of validity
        return callback(null, response.error, response.result);
    }
    callback(null, response);
};

},{"eac7d61fe90353b":"j4KJi","f95bedb36f8b571d":"10Eev"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"9qfh9","./v3.js":"3RlI2","./v4.js":"8zJtu","./v5.js":"i3cfs","./nil.js":"kcLFq","./version.js":"gvRcF","./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":"6aVVs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qfh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq; // Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJsDefault.default)(b);
}
exports.default = v1;

},{"./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RlI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
var v3 = (0, _v35JsDefault.default)("v3", 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"f7cVj","./md5.js":"k0SFu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7cVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    var bytes = [];
    for(var i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
exports.default = function(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === "string") value = stringToBytes(value);
        if (typeof namespace === "string") namespace = (0, _parseJsDefault.default)(namespace);
        if (namespace.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(var i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJsDefault.default)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
};

},{"./stringify.js":"5Y9F1","./parse.js":"6aVVs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aVVs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    var v;
    var arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0SFu":[function(require,module,exports) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === "string") {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(var i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = "0123456789abcdef";
    for(var i = 0; i < length32; i += 8){
        var x = input[i >> 5] >>> i % 32 & 0xff;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for(var i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJsDefault.default)(rnds);
}
exports.default = v4;

},{"./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3cfs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
var v5 = (0, _v35JsDefault.default)("v5", 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"f7cVj","./sha1.js":"BVVut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BVVut":[function(require,module,exports) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    var K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    var H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === "string") {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(var i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for(var _i = 0; _i < N; ++_i){
        var arr = new Uint32Array(16);
        for(var j = 0; j < 16; ++j)arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        M[_i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(var _i2 = 0; _i2 < N; ++_i2){
        var W = new Uint32Array(80);
        for(var t = 0; t < 16; ++t)W[t] = M[_i2][t];
        for(var _t = 16; _t < 80; ++_t)W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for(var _t2 = 0; _t2 < 80; ++_t2){
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcLFq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "00000000-0000-0000-0000-000000000000";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvRcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    return parseInt(uuid.substr(14, 1), 16);
}
exports.default = version;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10Eev":[function(require,module,exports) {
"use strict";
const uuid = require("1308496a75c2f4c9").v4;
/**
 *  Generates a JSON-RPC 1.0 or 2.0 request
 *  @param {String} method Name of method to call
 *  @param {Array|Object} params Array of parameters passed to the method as specified, or an object of parameter names and corresponding value
 *  @param {String|Number|null} [id] Request ID can be a string, number, null for explicit notification or left out for automatic generation
 *  @param {Object} [options]
 *  @param {Number} [options.version=2] JSON-RPC version to use (1 or 2)
 *  @param {Boolean} [options.notificationIdNull=false] When true, version 2 requests will set id to null instead of omitting it
 *  @param {Function} [options.generator] Passed the request, and the options object and is expected to return a request ID
 *  @throws {TypeError} If any of the parameters are invalid
 *  @return {Object} A JSON-RPC 1.0 or 2.0 request
 *  @memberOf Utils
 */ const generateRequest = function(method, params, id, options) {
    if (typeof method !== "string") throw new TypeError(method + " must be a string");
    options = options || {};
    // check valid version provided
    const version = typeof options.version === "number" ? options.version : 2;
    if (version !== 1 && version !== 2) throw new TypeError(version + " must be 1 or 2");
    const request = {
        method: method
    };
    if (version === 2) request.jsonrpc = "2.0";
    if (params) {
        // params given, but invalid?
        if (typeof params !== "object" && !Array.isArray(params)) throw new TypeError(params + " must be an object, array or omitted");
        request.params = params;
    }
    // if id was left out, generate one (null means explicit notification)
    if (typeof id === "undefined") {
        const generator = typeof options.generator === "function" ? options.generator : function() {
            return uuid();
        };
        request.id = generator(request, options);
    } else if (version === 2 && id === null) // we have a version 2 notification
    {
        if (options.notificationIdNull) request.id = null; // id will not be set at all unless option provided
    } else request.id = id;
    return request;
};
module.exports = generateRequest;

},{"1308496a75c2f4c9":"j4KJi"}],"bMhve":[function(require,module,exports) {
/**
 * "Client" wraps "ws" or a browser-implemented "WebSocket" library
 * according to the environment providing JSON RPC 2.0 support on top.
 * @module Client
 */ var Buffer = require("d791780a92ed9f7b").Buffer;
"use strict";
var _interopRequireDefault = require("c5627bfe4c955a5b");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("e261f31fd9b687a"));
var _asyncToGenerator2 = _interopRequireDefault(require("a32b82a664b81c64"));
var _typeof2 = _interopRequireDefault(require("29dee57822b64de3"));
var _classCallCheck2 = _interopRequireDefault(require("84bc7b3008310601"));
var _createClass2 = _interopRequireDefault(require("eb437a31f3bc340b"));
var _inherits2 = _interopRequireDefault(require("a510a731d39544a6"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("588b4c9407ed93c1"));
var _getPrototypeOf2 = _interopRequireDefault(require("fb8b0820b8feeccb"));
var _eventemitter = require("cfad8574aeec677a");
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, _possibleConstructorReturn2["default"])(this, result);
    };
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
var __rest = function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}; // @ts-ignore
var CommonClient = /*#__PURE__*/ function(_EventEmitter) {
    (0, _inherits2["default"])(CommonClient, _EventEmitter);
    var _super = _createSuper(CommonClient);
    /**
   * Instantiate a Client class.
   * @constructor
   * @param {webSocketFactory} webSocketFactory - factory method for WebSocket
   * @param {String} address - url to a websocket server
   * @param {Object} options - ws options object with reconnect parameters
   * @param {Function} generate_request_id - custom generation request Id
   * @return {CommonClient}
   */ function CommonClient(webSocketFactory) {
        var _this;
        var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ws://localhost:8080";
        var _a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var generate_request_id = arguments.length > 3 ? arguments[3] : undefined;
        (0, _classCallCheck2["default"])(this, CommonClient);
        var _a$autoconnect = _a.autoconnect, autoconnect = _a$autoconnect === void 0 ? true : _a$autoconnect, _a$reconnect = _a.reconnect, reconnect = _a$reconnect === void 0 ? true : _a$reconnect, _a$reconnect_interval = _a.reconnect_interval, reconnect_interval = _a$reconnect_interval === void 0 ? 1000 : _a$reconnect_interval, _a$max_reconnects = _a.max_reconnects, max_reconnects = _a$max_reconnects === void 0 ? 5 : _a$max_reconnects, rest_options = __rest(_a, [
            "autoconnect",
            "reconnect",
            "reconnect_interval",
            "max_reconnects"
        ]);
        _this = _super.call(this);
        _this.webSocketFactory = webSocketFactory;
        _this.queue = {};
        _this.rpc_id = 0;
        _this.address = address;
        _this.autoconnect = autoconnect;
        _this.ready = false;
        _this.reconnect = reconnect;
        _this.reconnect_timer_id = undefined;
        _this.reconnect_interval = reconnect_interval;
        _this.max_reconnects = max_reconnects;
        _this.rest_options = rest_options;
        _this.current_reconnects = 0;
        _this.generate_request_id = generate_request_id || function() {
            return ++_this.rpc_id;
        };
        if (_this.autoconnect) _this._connect(_this.address, Object.assign({
            autoconnect: _this.autoconnect,
            reconnect: _this.reconnect,
            reconnect_interval: _this.reconnect_interval,
            max_reconnects: _this.max_reconnects
        }, _this.rest_options));
        return _this;
    }
    /**
   * Connects to a defined server if not connected already.
   * @method
   * @return {Undefined}
   */ (0, _createClass2["default"])(CommonClient, [
        {
            key: "connect",
            value: function connect() {
                if (this.socket) return;
                this._connect(this.address, Object.assign({
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects
                }, this.rest_options));
            }
        },
        {
            key: "call",
            value: function call(method, params, timeout, ws_opts) {
                var _this2 = this;
                if (!ws_opts && "object" === (0, _typeof2["default"])(timeout)) {
                    ws_opts = timeout;
                    timeout = null;
                }
                return new Promise(function(resolve, reject) {
                    if (!_this2.ready) return reject(new Error("socket not ready"));
                    var rpc_id = _this2.generate_request_id(method, params);
                    var message = {
                        jsonrpc: "2.0",
                        method: method,
                        params: params || null,
                        id: rpc_id
                    };
                    _this2.socket.send(JSON.stringify(message), ws_opts, function(error) {
                        if (error) return reject(error);
                        _this2.queue[rpc_id] = {
                            promise: [
                                resolve,
                                reject
                            ]
                        };
                        if (timeout) _this2.queue[rpc_id].timeout = setTimeout(function() {
                            delete _this2.queue[rpc_id];
                            reject(new Error("reply timeout"));
                        }, timeout);
                    });
                });
            }
        },
        {
            key: "login",
            value: function() {
                var _login = (0, _asyncToGenerator2["default"])(/*#__PURE__*/ _regenerator["default"].mark(function _callee(params) {
                    var resp;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                _context.next = 2;
                                return this.call("rpc.login", params);
                            case 2:
                                resp = _context.sent;
                                if (resp) {
                                    _context.next = 5;
                                    break;
                                }
                                throw new Error("authentication failed");
                            case 5:
                                return _context.abrupt("return", resp);
                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function login(_x) {
                    return _login.apply(this, arguments);
                }
                return login;
            }()
        },
        {
            key: "listMethods",
            value: function() {
                var _listMethods = (0, _asyncToGenerator2["default"])(/*#__PURE__*/ _regenerator["default"].mark(function _callee2() {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.call("__listMethods");
                            case 2:
                                return _context2.abrupt("return", _context2.sent);
                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function listMethods() {
                    return _listMethods.apply(this, arguments);
                }
                return listMethods;
            }()
        },
        {
            key: "notify",
            value: function notify(method, params) {
                var _this3 = this;
                return new Promise(function(resolve, reject) {
                    if (!_this3.ready) return reject(new Error("socket not ready"));
                    var message = {
                        jsonrpc: "2.0",
                        method: method,
                        params: params || null
                    };
                    _this3.socket.send(JSON.stringify(message), function(error) {
                        if (error) return reject(error);
                        resolve();
                    });
                });
            }
        },
        {
            key: "subscribe",
            value: function() {
                var _subscribe = (0, _asyncToGenerator2["default"])(/*#__PURE__*/ _regenerator["default"].mark(function _callee3(event) {
                    var result;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                if (typeof event === "string") event = [
                                    event
                                ];
                                _context3.next = 3;
                                return this.call("rpc.on", event);
                            case 3:
                                result = _context3.sent;
                                if (!(typeof event === "string" && result[event] !== "ok")) {
                                    _context3.next = 6;
                                    break;
                                }
                                throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);
                            case 6:
                                return _context3.abrupt("return", result);
                            case 7:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3, this);
                }));
                function subscribe(_x2) {
                    return _subscribe.apply(this, arguments);
                }
                return subscribe;
            }()
        },
        {
            key: "unsubscribe",
            value: function() {
                var _unsubscribe = (0, _asyncToGenerator2["default"])(/*#__PURE__*/ _regenerator["default"].mark(function _callee4(event) {
                    var result;
                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                        while(true)switch(_context4.prev = _context4.next){
                            case 0:
                                if (typeof event === "string") event = [
                                    event
                                ];
                                _context4.next = 3;
                                return this.call("rpc.off", event);
                            case 3:
                                result = _context4.sent;
                                if (!(typeof event === "string" && result[event] !== "ok")) {
                                    _context4.next = 6;
                                    break;
                                }
                                throw new Error("Failed unsubscribing from an event with: " + result);
                            case 6:
                                return _context4.abrupt("return", result);
                            case 7:
                            case "end":
                                return _context4.stop();
                        }
                    }, _callee4, this);
                }));
                function unsubscribe(_x3) {
                    return _unsubscribe.apply(this, arguments);
                }
                return unsubscribe;
            }()
        },
        {
            key: "close",
            value: function close(code, data) {
                this.socket.close(code || 1000, data);
            }
        },
        {
            key: "_connect",
            value: function _connect(address, options) {
                var _this4 = this;
                clearTimeout(this.reconnect_timer_id);
                this.socket = this.webSocketFactory(address, options);
                this.socket.addEventListener("open", function() {
                    _this4.ready = true;
                    _this4.emit("open");
                    _this4.current_reconnects = 0;
                });
                this.socket.addEventListener("message", function(_ref) {
                    var message = _ref.data;
                    if (message instanceof ArrayBuffer) message = Buffer.from(message).toString();
                    try {
                        message = JSON.parse(message);
                    } catch (error) {
                        return;
                    } // check if any listeners are attached and forward event
                    if (message.notification && _this4.listeners(message.notification).length) {
                        if (!Object.keys(message.params).length) return _this4.emit(message.notification);
                        var args = [
                            message.notification
                        ];
                        if (message.params.constructor === Object) args.push(message.params);
                        else for(var i = 0; i < message.params.length; i++)args.push(message.params[i]);
                         // run as microtask so that pending queue messages are resolved first
                        // eslint-disable-next-line prefer-spread
                        return Promise.resolve().then(function() {
                            _this4.emit.apply(_this4, args);
                        });
                    }
                    if (!_this4.queue[message.id]) {
                        // general JSON RPC 2.0 events
                        if (message.method && message.params) // run as microtask so that pending queue messages are resolved first
                        return Promise.resolve().then(function() {
                            _this4.emit(message.method, message.params);
                        });
                        return;
                    } // reject early since server's response is invalid
                    if ("error" in message === "result" in message) _this4.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
                    if (_this4.queue[message.id].timeout) clearTimeout(_this4.queue[message.id].timeout);
                    if (message.error) _this4.queue[message.id].promise[1](message.error);
                    else _this4.queue[message.id].promise[0](message.result);
                    delete _this4.queue[message.id];
                });
                this.socket.addEventListener("error", function(error) {
                    return _this4.emit("error", error);
                });
                this.socket.addEventListener("close", function(_ref2) {
                    var code = _ref2.code, reason = _ref2.reason;
                    if (_this4.ready) setTimeout(function() {
                        return _this4.emit("close", code, reason);
                    }, 0);
                    _this4.ready = false;
                    _this4.socket = undefined;
                    if (code === 1000) return;
                    _this4.current_reconnects++;
                    if (_this4.reconnect && (_this4.max_reconnects > _this4.current_reconnects || _this4.max_reconnects === 0)) _this4.reconnect_timer_id = setTimeout(function() {
                        return _this4._connect(address, options);
                    }, _this4.reconnect_interval);
                });
            }
        }
    ]);
    return CommonClient;
}(_eventemitter.EventEmitter);
exports["default"] = CommonClient;

},{"d791780a92ed9f7b":"fCgem","c5627bfe4c955a5b":"7XM86","e261f31fd9b687a":"5nQUq","a32b82a664b81c64":"jxKg8","29dee57822b64de3":"jgQjt","84bc7b3008310601":"3nRml","eb437a31f3bc340b":"2yzPp","a510a731d39544a6":"bYd1U","588b4c9407ed93c1":"cW3L5","fb8b0820b8feeccb":"gWrBy","cfad8574aeec677a":"3fnfh"}],"bYd1U":[function(require,module,exports) {
var setPrototypeOf = require("752a77738081950b");
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"752a77738081950b":"bblYu"}],"bblYu":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"cW3L5":[function(require,module,exports) {
var _typeof = require("c2e51716d4563650")["default"];
var assertThisInitialized = require("fceb50ff28d61acc");
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"c2e51716d4563650":"jgQjt","fceb50ff28d61acc":"1mVba"}],"1mVba":[function(require,module,exports) {
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"gWrBy":[function(require,module,exports) {
function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"aM9iU":[function(require,module,exports) {
/**
 * WebSocket implements a browser-side WebSocket specification.
 * @module Client
 */ "use strict";
var _interopRequireDefault = require("a4b94a2c034ad1c4");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _default;
var _classCallCheck2 = _interopRequireDefault(require("451ab0a12c50a497"));
var _createClass2 = _interopRequireDefault(require("5fb20a6b592cd0da"));
var _inherits2 = _interopRequireDefault(require("f9b424d4063f75ba"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("9e962138cbc8857a"));
var _getPrototypeOf2 = _interopRequireDefault(require("53d41d945433bdda"));
var _eventemitter = require("997a1150091dcca1");
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, _possibleConstructorReturn2["default"])(this, result);
    };
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
var WebSocketBrowserImpl = /*#__PURE__*/ function(_EventEmitter) {
    (0, _inherits2["default"])(WebSocketBrowserImpl, _EventEmitter);
    var _super = _createSuper(WebSocketBrowserImpl);
    /** Instantiate a WebSocket class
   * @constructor
   * @param {String} address - url to a websocket server
   * @param {(Object)} options - websocket options
   * @param {(String|Array)} protocols - a list of protocols
   * @return {WebSocketBrowserImpl} - returns a WebSocket instance
   */ function WebSocketBrowserImpl(address, options, protocols) {
        var _this;
        (0, _classCallCheck2["default"])(this, WebSocketBrowserImpl);
        _this = _super.call(this);
        _this.socket = new window.WebSocket(address, protocols);
        _this.socket.onopen = function() {
            return _this.emit("open");
        };
        _this.socket.onmessage = function(event) {
            return _this.emit("message", event.data);
        };
        _this.socket.onerror = function(error) {
            return _this.emit("error", error);
        };
        _this.socket.onclose = function(event) {
            _this.emit("close", event.code, event.reason);
        };
        return _this;
    }
    /**
   * Sends data through a websocket connection
   * @method
   * @param {(String|Object)} data - data to be sent via websocket
   * @param {Object} optionsOrCallback - ws options
   * @param {Function} callback - a callback called once the data is sent
   * @return {Undefined}
   */ (0, _createClass2["default"])(WebSocketBrowserImpl, [
        {
            key: "send",
            value: function send(data, optionsOrCallback, callback) {
                var cb = callback || optionsOrCallback;
                try {
                    this.socket.send(data);
                    cb();
                } catch (error) {
                    cb(error);
                }
            }
        },
        {
            key: "close",
            value: function close(code, reason) {
                this.socket.close(code, reason);
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(type, listener, options) {
                this.socket.addEventListener(type, listener, options);
            }
        }
    ]);
    return WebSocketBrowserImpl;
}(_eventemitter.EventEmitter);
/**
 * factory method for common WebSocket instance
 * @method
 * @param {String} address - url to a websocket server
 * @param {(Object)} options - websocket options
 * @return {Undefined}
 */ function _default(address, options) {
    return new WebSocketBrowserImpl(address, options);
}

},{"a4b94a2c034ad1c4":"7XM86","451ab0a12c50a497":"3nRml","5fb20a6b592cd0da":"2yzPp","f9b424d4063f75ba":"bYd1U","9e962138cbc8857a":"cW3L5","53d41d945433bdda":"gWrBy","997a1150091dcca1":"3fnfh"}],"2HLbt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
const _assert_js_1 = require("a355f713dfa7d5fd");
const _u64_js_1 = require("e29e644046bd03bc");
const utils_js_1 = require("b53c6c44cc0d8fd6");
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [
    [],
    [],
    []
];
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(0x71);
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = _u64_js_1.default.split(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s)=>s > 32 ? _u64_js_1.default.rotlBH(h, l, s) : _u64_js_1.default.rotlSH(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? _u64_js_1.default.rotlBL(h, l, s) : _u64_js_1.default.rotlSL(h, l, s);
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(10);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for(let y = 0; y < 50; y += 10){
            for(let x = 0; x < 10; x++)B[x] = s[y + x];
            for(let x = 0; x < 10; x++)s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
exports.keccakP = keccakP;
class Keccak extends utils_js_1.Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        _assert_js_1.default.number(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        _assert_js_1.default.exists(this);
        const { blockLen , state  } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state , suffix , pos , blockLen  } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        _assert_js_1.default.exists(this, false);
        _assert_js_1.default.bytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen  } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
    }
    xof(bytes) {
        _assert_js_1.default.number(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        _assert_js_1.default.output(out, this);
        if (this.finished) throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen , suffix , outputLen , rounds , enableXOF  } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
exports.Keccak = Keccak;
const gen = (suffix, blockLen, outputLen)=>(0, utils_js_1.wrapConstructor)(()=>new Keccak(blockLen, suffix, outputLen));
exports.sha3_224 = gen(0x06, 144, 28);
/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */ exports.sha3_256 = gen(0x06, 136, 32);
exports.sha3_384 = gen(0x06, 104, 48);
exports.sha3_512 = gen(0x06, 72, 64);
exports.keccak_224 = gen(0x01, 144, 28);
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */ exports.keccak_256 = gen(0x01, 136, 32);
exports.keccak_384 = gen(0x01, 104, 48);
exports.keccak_512 = gen(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen)=>(0, utils_js_1.wrapConstructorWithOpts)((opts = {})=>new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
exports.shake128 = genShake(0x1f, 168, 16);
exports.shake256 = genShake(0x1f, 136, 32);

},{"a355f713dfa7d5fd":"fGq6C","e29e644046bd03bc":"fhGhD","b53c6c44cc0d8fd6":"26nMd"}],"6C6bW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = void 0;
const _assert_js_1 = require("19ecbf13b07cabb2");
const utils_js_1 = require("c67794eab1204568");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.hash(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function") throw new TypeError("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        _assert_js_1.default.exists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash , iHash , finished , destroyed , blockLen , outputLen  } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);

},{"19ecbf13b07cabb2":"fGq6C","c67794eab1204568":"26nMd"}]},["hmOoa"], null, "parcelRequire8d7b")

//# sourceMappingURL=solanaProvider.esm.6e5d9b8f.js.map
