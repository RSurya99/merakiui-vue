'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  name: 'Alert',
};

const _hoisted_1 = { class: "flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" };
const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"flex items-center justify-center w-12 bg-emerald-500\"><svg class=\"w-6 h-6 text-white fill-current\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z\"></path></svg></div><div class=\"px-4 py-2 -mx-3\"><div class=\"mx-3\"><span class=\"font-semibold text-emerald-500 dark:text-emerald-400\">Success</span><p class=\"text-sm text-gray-600 dark:text-gray-200\">Your account was registered!</p></div></div>", 2);
const _hoisted_4 = [
  _hoisted_2
];

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_4))
}
var Alert = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

var components = { Alert };

const merakiuiVue = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

exports.merakiuiVue = merakiuiVue;
