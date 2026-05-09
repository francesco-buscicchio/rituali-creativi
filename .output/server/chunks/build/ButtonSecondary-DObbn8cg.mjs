globalThis.__timing__.logStart('Load chunks/build/ButtonSecondary-DObbn8cg');import { _ as __nuxt_component_0 } from './nuxt-link-C54LFPTs.mjs';
import __nuxt_component_1 from './index-HAGKhiWP.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonSecondary",
  __ssrInlineRender: true,
  props: {
    to: {},
    href: {},
    icon: {},
    type: { default: "button" },
    disabled: { type: Boolean, default: false },
    external: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/55 px-5 py-3 text-sm font-semibold text-ink shadow-line backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-terracotta/35 hover:bg-white disabled:pointer-events-none disabled:opacity-60",
      props.disabled ? "pointer-events-none opacity-60" : ""
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      if (__props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: __props.to,
          class: unref(classes)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              if (__props.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: __props.icon,
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                renderSlot(_ctx.$slots, "default"),
                __props.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: __props.icon,
                  class: "h-4 w-4",
                  "aria-hidden": "true"
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (__props.href) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          target: __props.external ? "_blank" : void 0,
          rel: __props.external ? "noreferrer" : void 0,
          class: unref(classes)
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (__props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: __props.icon,
            class: "h-4 w-4",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          disabled: __props.disabled,
          class: unref(classes)
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (__props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: __props.icon,
            class: "h-4 w-4",
            "aria-hidden": "true"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/ButtonSecondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/ButtonSecondary-DObbn8cg');
//# sourceMappingURL=ButtonSecondary-DObbn8cg.mjs.map
