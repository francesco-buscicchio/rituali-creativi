import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InfoCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    text: {},
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "rounded-soft border border-ink/10 bg-white/55 p-6 shadow-line" }, _attrs))}>`);
      if (__props.label) {
        _push(`<p class="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-clay">${ssrInterpolate(__props.label)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="font-serif text-2xl font-medium text-ink">${ssrInterpolate(__props.title)}</h3><p class="mt-3 leading-7 text-ink/68">${ssrInterpolate(__props.text)}</p></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/InfoCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=InfoCard-DHDRdiNS.js.map
