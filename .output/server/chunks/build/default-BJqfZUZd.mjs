globalThis.__timing__.logStart('Load chunks/build/default-BJqfZUZd');import { defineComponent, mergeProps, ref, watch, withCtx, unref, createVNode, toDisplayString, createTextVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-C54LFPTs.mjs';
import { _ as _sfc_main$5 } from './SocialLinkItem-CunLXq1O.mjs';
import { s as siteContent, _ as _sfc_main$4 } from './siteContent-lPNyGvbL.mjs';
import __nuxt_component_1 from './index-HAGKhiWP.mjs';
import { u as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './v3-B6rCCvHd.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FooterMain",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-ink/10 bg-linen/55" }, _attrs))}><div class="site-container grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-serif text-3xl font-medium text-ink"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(siteContent).brand.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(siteContent).brand.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-4 max-w-md leading-7 text-ink/68">${ssrInterpolate(unref(siteContent).brand.payoff)}</p><p class="mt-6 text-sm text-ink/52">${ssrInterpolate(unref(siteContent).brand.footerNote)}</p></div><nav aria-label="Navigazione secondaria"><p class="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Pagine</p><div class="mt-4 grid gap-3"><!--[-->`);
      ssrRenderList(unref(siteContent).navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "text-sm text-ink/68 transition hover:text-ink"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav><div><p class="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Social</p><div class="mt-4 grid gap-3"><!--[-->`);
      ssrRenderList(unref(siteContent).socials, (social) => {
        _push(ssrRenderComponent(_sfc_main$5, {
          key: social.href,
          href: social.href,
          label: social.label,
          handle: social.handle,
          icon: social.icon
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div><div class="site-container border-t border-ink/10 py-5 text-sm text-ink/52"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(siteContent).brand.name)}. Tutti i diritti riservati. </div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/FooterMain.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    label: {},
    to: {}
  },
  emits: ["navigate"],
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isActive = computed(
      () => props.to === "/" ? route.path === "/" : route.path.startsWith(props.to)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: ["rounded-full px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-white/60 hover:text-ink", { "bg-white/70 text-ink shadow-line": unref(isActive) }],
        onClick: ($event) => _ctx.$emit("navigate")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/NavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderMain",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    const route = useRoute();
    watch(() => route.fullPath, () => {
      menuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 border-b border-ink/10 bg-cream/88 backdrop-blur-xl" }, _attrs))}><div class="site-container flex min-h-20 items-center justify-between gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group inline-flex items-center gap-3",
        "aria-label": "Vai alla home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-line"${_scopeId}><span class="h-4 w-4 rounded-full border-2 border-terracotta bg-sage/40 transition group-hover:scale-110"${_scopeId}></span></span><span class="font-serif text-2xl font-medium text-ink"${_scopeId}>${ssrInterpolate(unref(siteContent).brand.name)}</span>`);
          } else {
            return [
              createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-line" }, [
                createVNode("span", { class: "h-4 w-4 rounded-full border-2 border-terracotta bg-sage/40 transition group-hover:scale-110" })
              ]),
              createVNode("span", { class: "font-serif text-2xl font-medium text-ink" }, toDisplayString(unref(siteContent).brand.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale"><!--[-->`);
      ssrRenderList(unref(siteContent).navigation, (item) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: item.to,
          label: item.label,
          to: item.to
        }, null, _parent));
      });
      _push(`<!--]--></nav><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        to: "/contatti",
        icon: "lucide:send"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Richiedi info`);
          } else {
            return [
              createTextVNode("Richiedi info")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink shadow-line lg:hidden"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-controls="mobile-menu" aria-label="Apri o chiudi il menu">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(menuOpen) ? "lucide:x" : "lucide:menu",
        class: "h-5 w-5",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div>`);
      if (unref(menuOpen)) {
        _push(`<nav id="mobile-menu" class="site-container pb-5 lg:hidden" aria-label="Navigazione mobile"><div class="grid gap-2 rounded-soft border border-ink/10 bg-white/70 p-3 shadow-soft"><!--[-->`);
        ssrRenderList(unref(siteContent).navigation, (item) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: item.to,
            label: item.label,
            to: item.to,
            onNavigate: ($event) => menuOpen.value = false
          }, null, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_sfc_main$4, {
          to: "/contatti",
          icon: "lucide:send",
          onClick: ($event) => menuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Richiedi info `);
            } else {
              return [
                createTextVNode(" Richiedi info ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/HeaderMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-cream text-ink" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main id="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/default-BJqfZUZd');
//# sourceMappingURL=default-BJqfZUZd.mjs.map
