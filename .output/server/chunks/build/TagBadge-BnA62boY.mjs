globalThis.__timing__.logStart('Load chunks/build/TagBadge-BnA62boY');import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/TagBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TagBadge as T };;globalThis.__timing__.logEnd('Load chunks/build/TagBadge-BnA62boY');
//# sourceMappingURL=TagBadge-BnA62boY.mjs.map
