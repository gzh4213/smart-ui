import { openBlock, createElementBlock, createCommentVNode } from "vue";
const _sfc_main = {
  name: "SButton",
  data() {
    return {
      a: "a"
    };
  }
};
const Button_vue_vue_type_style_index_0_scoped_eb3358f9_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = {
  key: 0,
  class: "t-btn"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.a ? (openBlock(), createElementBlock("button", _hoisted_1, " S Button ")) : createCommentVNode("", true);
}
const SButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb3358f9"]]);
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
  }
};
export {
  SButton,
  entry as default
};
