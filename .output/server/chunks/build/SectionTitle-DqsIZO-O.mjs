globalThis.__timing__.logStart('Load chunks/build/SectionTitle-DqsIZO-O');import { defineComponent, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionTitle",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    text: {},
    align: { default: "left" },
    as: { default: "h2" }
  },
  setup(__props) {
    const props = __props;
    const alignClasses = computed(
      () => props.align === "center" ? "mx-auto max-w-4xl text-center [&>p]:mx-auto" : "max-w-4xl"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(alignClasses) }, _attrs))}>`);
      if (__props.eyebrow) {
        _push(`<p class="eyebrow mb-3">${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), { class: "font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
      if (__props.text) {
        _push(`<p class="mt-5 max-w-3xl text-base leading-8 text-ink/72 sm:text-lg">${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/SectionTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/SectionTitle-DqsIZO-O');
//# sourceMappingURL=SectionTitle-DqsIZO-O.mjs.map
