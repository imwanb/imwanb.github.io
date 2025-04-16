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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/sinopec07/l323voxr/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/sinopec07/l323voxr/","title":"模板","lang":"zh-CN","frontmatter":{"title":"模板","createTime":"2025/04/10 14:56:31","permalink":"/sinopec07/l323voxr/","head":[["meta",{"property":"og:url","content":"http://docs.ncatbot.xyz/sinopec07/l323voxr/"}],["meta",{"property":"og:site_name","content":"NcatBot 文档"}],["meta",{"property":"og:title","content":"模板"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-16T15:06:47.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-16T15:06:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模板\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-04-16T15:06:47.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.03,"words":10},"git":{"updatedTime":1744816007000,"contributors":[{"name":"imwanb","username":"imwanb","email":"wanb001@hotmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/imwanb?v=4","url":"https://github.com/imwanb"},{"name":"726668808@qq.com","username":"726668808@qq.com","email":"","commits":1,"avatar":"https://avatars.githubusercontent.com/726668808@qq.com?v=4","url":"https://github.com/726668808@qq.com"}]},"filePathRelative":"notes/sinopec07/2.07安装定额章节说明/模板.md"}');
export {
  index_html as comp,
  data
};
