import { openBlock, createElementBlock, createElementVNode } from "vue";
Object.freeze({});
Object.freeze([]);
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
function isDebugMode() {
  return typeof __channelId__ === "string" && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (toRawType(p)) {
    case "Function":
      return "function() { [native code] }";
    default:
      return p;
  }
}
function normalizeLog(type, filename, args) {
  if (isDebugMode()) {
    args.push(filename.replace("at ", "uni-app:///"));
    return console[type].apply(console, args);
  }
  const msgs = args.map(function(v) {
    const type2 = toTypeString(v).toLowerCase();
    if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
      try {
        v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
      } catch (e) {
        v = type2;
      }
    } else {
      if (v === null) {
        v = "---NULL---";
      } else if (v === void 0) {
        v = "---UNDEFINED---";
      } else {
        const vType = toRawType(v).toUpperCase();
        if (vType === "NUMBER" || vType === "BOOLEAN") {
          v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  return msgs.join("---COMMA---") + " " + filename;
}
function formatAppLog(type, filename, ...args) {
  const res = normalizeLog(type, filename, args);
  res && console[type](res);
}
var _style_0 = { "webview": { "": { "width": 300, "height": 300 } } };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
    setTimeout(() => {
      this.evalJs();
    }, 1e3);
  },
  methods: {
    onMessage(data) {
      formatAppLog("log", "at pages/webview/webview.nvue:22", "onmessage", data);
    },
    onPostMessage(data) {
      formatAppLog("log", "at pages/webview/webview.nvue:25", "onPostMessage", data);
    },
    evalJs() {
      this.$refs.webview.evalJs("document.body.style.background ='#00FF00'");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", null, [
      createElementVNode("u-web-view", {
        class: "webview",
        ref: "webview",
        src: "/hybrid/html/test.html",
        onMessage: _cache[0] || (_cache[0] = (...args) => $options.onMessage && $options.onMessage(...args)),
        onOnPostMessage: _cache[1] || (_cache[1] = (...args) => $options.onPostMessage && $options.onPostMessage(...args))
      }, null, 544)
    ])
  ]);
}
var webview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/caoyoujin/Documents/HBuilderProjects/test-demo/pages/webview/webview.nvue"]]);
export { webview as default };
