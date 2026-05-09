import { defineComponent, mergeProps, useSSRContext, useId, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import __nuxt_component_1 from "./index-HAGKhiWP.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FaqItem",
  __ssrInlineRender: true,
  props: {
    question: {},
    answer: {},
    open: { type: Boolean },
    panelId: {}
  },
  emits: ["toggle"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-b border-ink/10" }, _attrs))}><button type="button" class="flex w-full items-center justify-between gap-5 py-5 text-left"${ssrRenderAttr("aria-expanded", __props.open)}${ssrRenderAttr("aria-controls", __props.panelId)}><span class="font-serif text-xl font-medium text-ink">${ssrInterpolate(__props.question)}</span><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-ink shadow-line">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.open ? "lucide:minus" : "lucide:plus",
        class: "h-4 w-4",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</span></button><div${ssrRenderAttr("id", __props.panelId)} class="pb-6 pr-12 leading-7 text-ink/68" style="${ssrRenderStyle(__props.open ? null : { display: "none" })}">${ssrInterpolate(__props.answer)}</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/FaqItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FaqAccordion",
  __ssrInlineRender: true,
  props: {
    items: {},
    initialOpen: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const uid = useId();
    const openIndex = ref(props.initialOpen ?? 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[2rem] border border-ink/10 bg-white/55 px-5 shadow-line sm:px-7" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: item.question,
          question: item.question,
          answer: item.answer,
          open: unref(openIndex) === index,
          "panel-id": `faq-panel-${unref(uid)}-${index}`,
          onToggle: ($event) => openIndex.value = unref(openIndex) === index ? -1 : index
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/FaqAccordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=FaqAccordion-CvRH6UAX.js.map
