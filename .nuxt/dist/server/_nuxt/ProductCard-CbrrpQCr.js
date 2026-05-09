import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    category: {},
    text: {},
    palette: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group overflow-hidden rounded-soft border border-ink/10 bg-white/60 shadow-line transition duration-200 hover:-translate-y-1 hover:shadow-soft" }, _attrs))}><div class="relative aspect-[4/3] overflow-hidden"><div class="absolute inset-0" style="${ssrRenderStyle({ background: __props.palette })}"></div><div class="absolute inset-0 bg-textile opacity-55"></div><div class="absolute inset-x-6 bottom-6 h-16 rounded-full border border-white/70 bg-white/25 backdrop-blur-sm"></div><div class="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/20 shadow-soft transition duration-300 group-hover:scale-105"></div></div><div class="p-5"><p class="text-xs font-semibold uppercase tracking-[0.14em] text-clay">${ssrInterpolate(__props.category)}</p><h3 class="mt-3 font-serif text-2xl font-medium text-ink">${ssrInterpolate(__props.title)}</h3><p class="mt-3 leading-7 text-ink/68">${ssrInterpolate(__props.text)}</p></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductCard-CbrrpQCr.js.map
