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
})({"10LK0":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4dd2249467a2acd8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2xUEV":[function(require,module,exports) {
'use strict';
//ConstantVars
const tankSection = document.querySelector('.tank');
const damageSection = document.querySelector('.damage');
const supportSection = document.querySelector('.support');
let timer;
let timer2;
///////////Character Profiles
class Character {
    constructor(name, alias, age, nationality, ultimate){
        this.name = name;
        this.alias = alias;
        this.age = age;
        this.nationality = nationality;
        this.ultimate = ultimate;
    }
    listener() {
        return document.querySelector(`.${this.alias.toString().toLowerCase().replace(' ', '_').replace('.', '_')}`);
    }
}
//Tanks
const dVA = new Character('Hana Song', 'D.Va', 19, 'Korean', 'Self Destruct');
const orisa = new Character('Orisa', 'Orisa', '1 mo', 'Numbanian', 'Supercharger');
const reinhardt = new Character('Reinhardt Wilhelm', 'Reinhardt', 61, 'German', 'Earthshatter');
const roadhog = new Character('Mako Rutledge', 'Roadhog', 48, 'Australian', 'Whole Hog');
const sigma = new Character('Siebren de Kuiper', 'Sigma', 62, 'Dutch', 'Gravitic Flux');
const winston = new Character('Winston', 'Winston', 29, 'Gorilla', 'Primal Rage');
const wreckingBall = new Character('Hammond', 'Wrecking Ball', '14 mo', 'Hamster', 'Minefield');
const zarya = new Character('Aleksandra Zaryanova', 'Zarya', 28, 'Russian', 'Graviton Surge');
//Damage
const ashe = new Character('Elizabeth Caledonia Ashe', 'Ashe', 39, 'American', 'B.O.B.');
const bastion = new Character('SST Laboratories Siege Automation E54', 'Bastion', 30, 'Omnic', 'Configuration Tank');
const cassidy = new Character('Cole Cassidy', 'Cassidy', 37, 'American', 'Deadeye');
const doomfist = new Character('Akande Ogundimu', 'Doomfist', 45, 'Nigerian', 'Meteor Strike');
const echo = new Character('Echo', 'Echo', 'Unknown', 'Omnic', 'Duplicate');
const genji = new Character('Genji Shimada', 'Genji', 35, 'Japanese', 'Dragonblade');
const hanzo = new Character('Hanzo Shimada', 'Hanzo', 38, 'Japanaese', 'Dragonstrike');
const junkrat = new Character('Jamison Fawkes', 'Junkrat', 25, 'Australian', 'RIP-Tire');
const mei = new Character('Mei-Ling Zhou', 'Mei', '31 Biological, 40 Chronological', 'Chinese', 'Blizzard');
const pharah = new Character('Fareeha Amari', 'Pharah', 32, 'Egyptian', 'Barrage');
const reaper = new Character('Gabriel Reyes', 'Reaper', 58, 'American', 'Death Blossom');
const soldier76 = new Character('John Francis Morrison', 'Soldier 76', 55, 'American', 'Tactical Visor');
const sombra = new Character('Olivia', 'Sombra', 30, 'Mexican', 'EMP');
const symmetra = new Character('Satya Vaswani', 'Symmetra', 28, 'Indian', 'Photon Barrier');
const torbjorn = new Character('Torbjörn Lindholm', 'Torbjorn', 57, 'Swedish', 'Molten Core');
const tracer = new Character('Lena Oxton', 'Tracer', 26, 'British', 'Pulse Bomb');
const widowmaker = new Character('Amélie Lacroix', 'Widowmaker', 33, 'French', 'Infra-Sight');
//Support
const ana = new Character('Ana Amari', 'Ana', 60, 'Egyptian', 'Nano Boost');
const baptiste = new Character('Jean-Baptiste Augustin', 'Baptiste', 36, 'Haitian', 'Amplification Matrix');
const brigitte = new Character('Brigitte Lindholm', 'Brigitte', 23, 'Swedish', 'Rally');
const lucio = new Character('Lúcio Correia dos Santos', 'Lucio', 26, 'Brazilian', 'Sound Barrier');
const mercy = new Character('Angela Ziegler', 'Mercy', 37, 'Swiss', 'Valkyrie');
const moira = new Character(`Moira O'Deorain`, 'Moira', 48, 'Irish', 'Coalescence');
const zenyatta = new Character('Tekhartha Zenyatta', 'Zenyatta', 20, 'Omnic', 'Transcendence');
//-----------Character Section Interactions
const onLeaveChar = (role)=>{
    const roleList = document.querySelector(`.${role}list`);
    const roleTitle = document.querySelector(`.${role}-title`);
    const roleOverlay = document.querySelector(`.${role}-overlay`);
    clearTimeout(timer);
    setTimeout(()=>{
        roleList.style.opacity = '0';
        roleTitle.style.opacity = '1';
        roleOverlay.style.opacity = '0';
    }, 1000);
};
const onLeaveSection = (role)=>{
    const info = document.querySelector(`.information-${role}`);
    const roleList = document.querySelector(`.${role}list`);
    if (info.classList.contains(`active-${role}`)) {
        const active = document.querySelector(`.active-${role}`);
        active.style.transform = 'translate(130%)';
        timer = setTimeout(()=>{
            onLeaveChar(`${role}`);
            roleList.style.transform = 'translate(0)';
            active.style.opacity = '0';
            info.classList.remove(`active-${role}`);
            info.innerHTML = '';
        }, 1600);
    }
};
const onLeaveClose = (role)=>{
    const info = document.querySelector(`.information-${role}`);
    const roleList = document.querySelector(`.${role}list`);
    const active = document.querySelector(`.active-${role}`);
    active.style.transform = 'translate(130%)';
    timer = setTimeout(()=>{
        roleList.style.transform = 'translate(0)';
        roleList.style.opacity = '1';
        active.style.opacity = '0';
        info.classList.remove(`active-${role}`);
        info.innerHTML = '';
    }, 1600);
};
const onClick = (obj, role)=>{
    const info = document.querySelector(`.information-${role}`);
    const roles = document.querySelector(`.${role}`);
    const roleList = document.querySelector(`.${role}list`);
    info.classList.add(`active-${role}`);
    const active = document.querySelector(`.active-${role}`);
    info.innerHTML = `
    <button class="close">X</button>
    <img class="main-bg" src="./photos/${obj.alias.replace('.', '').replace(' ', '')}-crop.jpg" />
    <p>Name:<span>${obj.name}</span></p>
    <p>Alias:<span>${obj.alias}</span></p>
    <p>Age:<span>${obj.age}</span></p>
    <p>Nationality:<span>${obj.nationality}</span></p>
    <p>Ultimate:<span>${obj.ultimate}</span></p>`;
    roleList.style.opacity = '0';
    timer = setTimeout(()=>{
        roles.style.background = `no-repeat url(../photos/${obj.alias.replace('.', '').replace(' ', '')}-cover.jpg)`;
        roles.style.backgroundSize = 'cover';
        roles.style.backgroundPosition = '50% 20%';
        timer2 = setTimeout(()=>{
            roleList.style.transform = 'translate(-130%)';
            active.style.transform = 'translate(0)';
            active.style.opacity = '1';
        }, 300);
    }, 1000);
    document.querySelector('.close').addEventListener('click', ()=>{
        onLeaveClose(`${role}`);
    });
};
//--------- Character List
const tankList = [
    dVA,
    orisa,
    reinhardt,
    roadhog,
    sigma,
    winston,
    wreckingBall,
    zarya
];
const supportList = [
    ana,
    baptiste,
    brigitte,
    lucio,
    mercy,
    moira,
    zenyatta
];
const damageList = [
    ashe,
    bastion,
    cassidy,
    doomfist,
    echo,
    genji,
    hanzo,
    junkrat,
    mei,
    pharah,
    reaper,
    soldier76,
    sombra,
    symmetra,
    torbjorn,
    tracer,
    widowmaker, 
];
//----------Event Handlers for Name Clicks
const clickEvent = (char, type)=>{
    char.listener().addEventListener('click', ()=>onClick(char, type)
    );
};
tankList.forEach((char)=>clickEvent(char, 'tank')
);
damageList.forEach((char)=>clickEvent(char, 'damage')
);
supportList.forEach((char)=>clickEvent(char, 'support')
);
tankSection.addEventListener('mouseleave', ()=>{
    onLeaveSection('tank');
});
damageSection.addEventListener('mouseleave', ()=>{
    onLeaveSection('damage');
});
supportSection.addEventListener('mouseleave', ()=>{
    onLeaveSection('support');
});
//------Random Character Image on Reload
const randomPic = (arr, role)=>{
    const randomNum = Math.floor(Math.random() * arr.length);
    const roles = document.querySelector(`.${role}`);
    roles.style.background = `no-repeat url(../photos/${arr[randomNum].replace('.', '').replace(' ', '')}-cover.jpg)`;
    roles.style.backgroundSize = 'cover';
    roles.style.backgroundPosition = '50% 20%';
};
const tankArr = [
    ...document.querySelectorAll('.tankchar')
].map((e)=>e.innerHTML
);
const damageArr = [
    ...document.querySelectorAll('.damagechar')
].map((e)=>e.innerHTML
);
const supportArr = [
    ...document.querySelectorAll('.supportchar')
].map((e)=>e.innerHTML
);
randomPic(tankArr, 'tank');
randomPic(damageArr, 'damage');
randomPic(supportArr, 'support');

},{}]},["10LK0","2xUEV"], "2xUEV", "parcelRequiredeb2")

//# sourceMappingURL=index.67a2acd8.js.map
