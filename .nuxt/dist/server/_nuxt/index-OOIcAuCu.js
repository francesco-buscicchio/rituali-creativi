import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { T as TagBadge } from "./TagBadge-BnA62boY.js";
import { _ as _sfc_main$9 } from "./SectionTitle-DqsIZO-O.js";
import { _ as _sfc_main$b } from "./CTASection-DzlEZB8M.js";
import { s as siteContent, _ as _sfc_main$7 } from "./siteContent-lPNyGvbL.js";
import { _ as _sfc_main$8 } from "./ButtonSecondary-DObbn8cg.js";
import __nuxt_component_1 from "./index-HAGKhiWP.js";
import { _ as _sfc_main$a } from "./ProductCard-CbrrpQCr.js";
import { a as useSeoMeta } from "./v3-B6rCCvHd.js";
import "../server.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/klona/dist/index.mjs";
import "./nuxt-link-C54LFPTs.js";
import "@iconify/utils/lib/css/icon";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden border-b border-ink/10" }, _attrs))}><div class="absolute inset-0 woven-surface opacity-70" aria-hidden="true"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" aria-hidden="true"></div><div class="site-container relative grid min-h-[68vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20"><div class="max-w-3xl"><p class="eyebrow">${ssrInterpolate(unref(siteContent).home.hero.eyebrow)}</p><h1 class="mt-5 font-serif text-5xl font-medium leading-[0.98] text-ink text-balance sm:text-6xl lg:text-7xl">${ssrInterpolate(unref(siteContent).home.hero.title)}</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">${ssrInterpolate(unref(siteContent).home.hero.subtitle)}</p><div class="mt-9 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        to: "/incontri",
        icon: "lucide:arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(siteContent).home.hero.primaryCta)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(siteContent).home.hero.primaryCta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        to: "/contatti",
        icon: "lucide:message-circle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(siteContent).home.hero.secondaryCta)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(siteContent).home.hero.secondaryCta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative min-h-[340px] lg:min-h-[460px]" aria-label="Composizione tessile astratta"><div class="absolute left-4 top-8 h-56 w-44 rounded-[2rem] border border-white/70 bg-white/35 shadow-soft backdrop-blur-sm sm:left-12 sm:h-72 sm:w-56"></div><div class="absolute right-4 top-0 h-64 w-44 rounded-full bg-powder/35 blur-sm sm:right-16 sm:h-80 sm:w-56"></div><div class="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-sage/35 shadow-soft"></div><div class="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border-[18px] border-terracotta/45 bg-cream/45 shadow-soft"></div><div class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10 bg-white/30 bg-textile shadow-soft backdrop-blur-sm"></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/HeroHome.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SectionCourseHighlight",
  __ssrInlineRender: true,
  setup(__props) {
    const highlightDetails = [
      siteContent.course.duration,
      siteContent.course.groupSize,
      siteContent.course.level,
      siteContent.course.materials
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="site-container"><div class="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/58 p-6 shadow-soft sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10"><div>`);
      _push(ssrRenderComponent(TagBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Primo ciclo`);
          } else {
            return [
              createTextVNode("Primo ciclo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-5 font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl">${ssrInterpolate(unref(siteContent).course.title)}</h2><p class="mt-5 max-w-2xl text-lg leading-8 text-ink/70">${ssrInterpolate(unref(siteContent).course.subtitle)}</p><div class="mt-8 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        to: "/incontri",
        icon: "lucide:arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Scopri gli incontri`);
          } else {
            return [
              createTextVNode("Scopri gli incontri")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        to: "/contatti",
        icon: "lucide:message-circle"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Chiedi informazioni`);
          } else {
            return [
              createTextVNode("Chiedi informazioni")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-soft border border-ink/10 bg-cream/80 p-6"><div class="grid gap-4 sm:grid-cols-2"><div class="rounded-2xl bg-white/65 p-5 shadow-line"><p class="text-sm text-ink/54">Prezzo standard</p><p class="mt-2 text-3xl font-semibold text-ink line-through decoration-terracotta/60">${ssrInterpolate(unref(siteContent).course.standardPrice)}</p></div><div class="rounded-2xl bg-terracotta p-5 text-white shadow-soft"><p class="text-sm text-white/75">Primo ciclo</p><p class="mt-2 text-4xl font-semibold">${ssrInterpolate(unref(siteContent).course.launchPrice)}</p></div></div><dl class="mt-5 grid gap-3"><!--[-->`);
      ssrRenderList(highlightDetails, (item) => {
        _push(`<div class="flex items-center gap-3 text-sm text-ink/70">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          class: "h-4 w-4 text-moss",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item)}</span></div>`);
      });
      _push(`<!--]--></dl></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/SectionCourseHighlight.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SectionHandmadePreview",
  __ssrInlineRender: true,
  setup(__props) {
    const previewProducts = siteContent.creations.products.slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bg-linen/38" }, _attrs))}><div class="site-container"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: "Creazioni",
        title: "Pezzi fatti a mano, senza fretta",
        text: unref(siteContent).creations.intro
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        to: "/creazioni",
        icon: "lucide:arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vedi le creazioni`);
          } else {
            return [
              createTextVNode("Vedi le creazioni")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 grid gap-5 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(previewProducts), (product) => {
        _push(ssrRenderComponent(_sfc_main$a, {
          key: product.title,
          title: product.title,
          category: product.category,
          text: product.text,
          palette: product.palette
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/SectionHandmadePreview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SectionSmallGroups",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding bg-white/38" }, _attrs))}><div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div class="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-ink/10 bg-linen shadow-soft"><div class="absolute inset-0 bg-textile opacity-60"></div><div class="absolute left-10 top-10 h-28 w-28 rounded-full bg-sage/60"></div><div class="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-powder/55"></div><div class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-[16px] border-white/65"></div><div class="absolute inset-x-10 bottom-8 rounded-2xl bg-white/55 p-5 backdrop-blur"><p class="font-serif text-2xl font-medium text-ink">Poche persone alla volta.</p></div></div><div>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: "Atmosfera",
        title: unref(siteContent).smallGroups.title,
        text: unref(siteContent).smallGroups.text
      }, null, _parent));
      _push(`<div class="mt-8 flex flex-wrap gap-3"><!--[-->`);
      ssrRenderList(unref(siteContent).smallGroups.points, (point) => {
        _push(ssrRenderComponent(TagBadge, { key: point }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(point)}`);
            } else {
              return [
                createTextVNode(toDisplayString(point), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/SectionSmallGroups.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ValueCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    text: {},
    icon: {},
    accent: {}
  },
  setup(__props) {
    const props = __props;
    const iconClasses = computed(() => {
      const classes = {
        sage: "bg-sage/25 text-moss",
        terracotta: "bg-terracotta/18 text-clay",
        powder: "bg-powder/24 text-ink"
      };
      return classes[props.accent];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "rounded-soft border border-ink/10 bg-white/55 p-6 shadow-line transition duration-200 hover:-translate-y-1 hover:bg-white/72" }, _attrs))}><div class="${ssrRenderClass([unref(iconClasses), "mb-6 flex h-12 w-12 items-center justify-center rounded-full"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: __props.icon,
        class: "h-5 w-5",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</div><h3 class="font-serif text-2xl font-medium text-ink">${ssrInterpolate(__props.title)}</h3><p class="mt-3 leading-7 text-ink/68">${ssrInterpolate(__props.text)}</p></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Molecules/ValueCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionValues",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="site-container">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: "Valori",
        title: "Un modo più gentile di stare nel fare",
        text: "Ogni incontro tiene insieme apprendimento, ascolto e manualità. Non serve fare bene, serve sentirsi a proprio agio.",
        align: "center"
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(siteContent).values, (value) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: value.title,
          title: value.title,
          text: value.text,
          icon: value.icon,
          accent: value.accent
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/SectionValues.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.home.title,
      description: siteContent.seo.home.description,
      ogTitle: siteContent.seo.home.title,
      ogDescription: siteContent.seo.home.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<section class="section-padding"><div class="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div>`);
      _push(ssrRenderComponent(TagBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Il progetto`);
          } else {
            return [
              createTextVNode("Il progetto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-5 font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl"> Un invito a tornare al ritmo delle mani. </h2></div><div class="space-y-6 text-lg leading-8 text-ink/72"><p>${ssrInterpolate(unref(siteContent).home.intro)}</p><p> Qui l’uncinetto diventa un pretesto buono: per imparare qualcosa di nuovo, incontrare persone con lo stesso bisogno di lentezza e concedersi un tempo non performativo. </p></div></div></section><section class="section-padding border-y border-ink/10 bg-linen/36"><div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        eyebrow: "Rituali creativi",
        title: unref(siteContent).home.rituali.title,
        text: unref(siteContent).home.rituali.text
      }, null, _parent));
      _push(`<div class="rounded-[2rem] border border-ink/10 bg-white/55 p-6 shadow-soft sm:p-8"><p class="font-serif text-3xl font-medium leading-tight text-ink"> “Non serve fare bene, serve sentirsi a proprio agio.” </p><p class="mt-5 leading-7 text-ink/68"> Ogni gesto viene spiegato con pazienza. Ogni pausa è permessa. Ogni persona può trovare il proprio modo di stare nel processo. </p></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        eyebrow: "Inizia da qui",
        title: "Vuoi capire se questo spazio fa per te?",
        text: "Puoi scrivermi senza impegno: ti racconto il prossimo ciclo di incontri, le creazioni disponibili o le possibilità su misura.",
        "primary-label": "Scrivimi",
        "primary-to": "/contatti",
        "secondary-label": "Leggi le FAQ",
        "secondary-to": "/faq"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-OOIcAuCu.js.map
