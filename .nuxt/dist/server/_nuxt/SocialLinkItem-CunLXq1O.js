import __nuxt_component_1 from "./index-HAGKhiWP.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SocialLinkItem",
  __ssrInlineRender: true,
  props: {
    href: {},
    label: {},
    handle: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        target: "_blank",
        rel: "noreferrer",
        class: "inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/55 px-4 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icon,
        class: "h-4 w-4",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(__props.label)}</span><span class="text-ink/46">${ssrInterpolate(__props.handle)}</span></a>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/SocialLinkItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SocialLinkItem-CunLXq1O.js.map
