globalThis.__timing__.logStart('Load chunks/build/CTASection-DzlEZB8M');import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './siteContent-lPNyGvbL.mjs';
import { _ as _sfc_main$2 } from './ButtonSecondary-DObbn8cg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CTASection",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    text: {},
    primaryLabel: {},
    primaryTo: {},
    secondaryLabel: {},
    secondaryTo: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="site-container"><div class="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12"><div class="absolute inset-0 bg-textile opacity-20" aria-hidden="true"></div><div class="absolute right-0 top-0 h-56 w-56 rounded-full bg-sage/30 blur-2xl" aria-hidden="true"></div><div class="relative max-w-3xl"><p class="text-xs font-semibold uppercase tracking-[0.18em] text-sand">${ssrInterpolate(__props.eyebrow)}</p><h2 class="mt-4 font-serif text-4xl font-medium leading-tight text-balance sm:text-5xl">${ssrInterpolate(__props.title)}</h2><p class="mt-5 text-lg leading-8 text-white/76">${ssrInterpolate(__props.text)}</p><div class="mt-8 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        to: __props.primaryTo,
        icon: "lucide:send"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.primaryLabel)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.primaryLabel), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.secondaryLabel && __props.secondaryTo) {
        _push(ssrRenderComponent(_sfc_main$2, {
          to: __props.secondaryTo,
          icon: "lucide:arrow-right"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.secondaryLabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.secondaryLabel), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/CTASection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/CTASection-DzlEZB8M');
//# sourceMappingURL=CTASection-DzlEZB8M.mjs.map
