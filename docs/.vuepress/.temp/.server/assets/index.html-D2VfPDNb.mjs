import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.4EfO4HGo.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
import "bcrypt-ts/browser";
import "watermark-js-plus";
import "@iconify/vue";
import "@iconify/vue/offline";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/","title":"NcatBot 文档","lang":"zh-CN","frontmatter":{"title":"NcatBot 文档","icon":"solar:cat-linear","config":[{"type":"hero","background":"tint-plate","tintPlate":{"r":{"value":219,"offset":6},"g":{"value":215,"offset":30},"b":{"value":219,"offset":19}},"full":true,"hero":{"name":"NcatBot","tagline":"Python SDK Framework","text":"基于 Napcat 的 Python SDK","actions":[{"theme":"brand","text":"快速开始","link":"/guide/dto79lp7/","suffixIcon":"material-symbols:start-rounded"},{"theme":"alt","text":"NcatBot","link":"https://github.com/liyihao1110/NcatBot","icon":"mdi:github"},{"theme":"alt","text":"NcatBotDocs","link":"https://github.com/Isaaczhr/NcatBotDocs","icon":"mdi:github"}]}}],"pageLayout":"home","head":[["meta",{"property":"og:url","content":"http://docs.ncatbot.xyz/"}],["meta",{"property":"og:site_name","content":"NcatBot 文档"}],["meta",{"property":"og:title","content":"NcatBot 文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NcatBot 文档\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.28,"words":83},"git":{},"filePathRelative":"README.md","categoryList":[]}');
export {
  index_html as comp,
  data
};
