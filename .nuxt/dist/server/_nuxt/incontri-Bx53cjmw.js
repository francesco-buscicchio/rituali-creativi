import { defineComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { s as siteContent, _ as _sfc_main$3 } from "./siteContent-lPNyGvbL.js";
import { _ as _sfc_main$4 } from "./ButtonSecondary-DObbn8cg.js";
import { _ as _sfc_main$5 } from "./SectionTitle-DqsIZO-O.js";
import { T as TagBadge } from "./TagBadge-BnA62boY.js";
import { _ as _sfc_main$2 } from "./InfoCard-DHDRdiNS.js";
import { _ as _sfc_main$7 } from "./ContactForm-CB4BiCXL.js";
import { _ as _sfc_main$6 } from "./FaqAccordion-CvRH6UAX.js";
import { a as useSeoMeta } from "./v3-B6rCCvHd.js";
import "./nuxt-link-C54LFPTs.js";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/defu/dist/defu.mjs";
import "@iconify/vue";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/klona/dist/index.mjs";
import "./index-HAGKhiWP.js";
import "@iconify/utils/lib/css/icon";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CourseDetailsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-5 md:grid-cols-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(siteContent).course.details, (detail) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: detail.title,
          title: detail.title,
          text: detail.text
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/CourseDetailsGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "incontri",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.meetings.title,
      description: siteContent.seo.meetings.description,
      ogTitle: siteContent.seo.meetings.title,
      ogDescription: siteContent.seo.meetings.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding border-b border-ink/10 bg-linen/34"><div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div>`);
      _push(ssrRenderComponent(TagBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Incontri di uncinetto`);
          } else {
            return [
              createTextVNode("Incontri di uncinetto")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mt-5 font-serif text-5xl font-medium leading-tight text-ink text-balance sm:text-6xl"> Si parte da zero e si va con calma. </h1><p class="mt-6 max-w-2xl text-lg leading-8 text-ink/72">${ssrInterpolate(unref(siteContent).course.subtitle)}</p><div class="mt-8 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        to: "#mi-interessa",
        icon: "lucide:send"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mi interessa`);
          } else {
            return [
              createTextVNode("Mi interessa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        to: "/faq",
        icon: "lucide:circle-help"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Leggi le FAQ`);
          } else {
            return [
              createTextVNode("Leggi le FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-[2rem] border border-ink/10 bg-white/62 p-6 shadow-soft"><p class="eyebrow">Dettagli primo ciclo</p><dl class="mt-5 grid gap-4"><!--[-->`);
      ssrRenderList(unref(siteContent).course.practicalDetails, (item) => {
        _push(`<div class="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-b-0 last:pb-0"><dt class="text-sm text-ink/58">${ssrInterpolate(item.label)}</dt><dd class="text-right font-semibold text-ink">${ssrInterpolate(item.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></section><section class="section-padding"><div class="site-container">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        eyebrow: "Come funziona",
        title: "Un’esperienza guidata, lenta e accessibile",
        text: "Ogni ciclo accompagna le basi dell’uncinetto dentro un contesto raccolto. Non devi arrivare preparata: materiali, ritmo e passaggi sono pensati per iniziare con serenità.",
        align: "center"
      }, null, _parent));
      _push(`<div class="mt-12">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></section><section class="section-padding bg-white/38"><div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        eyebrow: "Cosa porti a casa",
        title: "Non solo una tecnica, ma un modo diverso di prenderti tempo",
        text: "Alla fine del ciclo avrai imparato i gesti base, iniziato un progetto concreto e sperimentato un tempo creativo più leggero."
      }, null, _parent));
      _push(`<div class="grid gap-4 sm:grid-cols-2">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Le basi",
        text: "Catenella, maglia bassa, avvio del lavoro e lettura dei passaggi principali."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Un progetto",
        text: "Un piccolo oggetto tessile da completare o continuare con una traccia chiara."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Materiali",
        text: "Strumenti e filati inclusi, scelti per essere piacevoli anche per chi inizia."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Una pausa vera",
        text: "Un appuntamento in cui uscire dalla routine e tornare a un ritmo più umano."
      }, null, _parent));
      _push(`</div></div></section><section class="section-padding"><div class="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        eyebrow: "FAQ",
        title: "Domande frequenti sugli incontri",
        text: "Le risposte essenziali prima di scrivere o lasciare il tuo interesse."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-8",
        to: "/faq",
        icon: "lucide:arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vai a tutte le FAQ`);
          } else {
            return [
              createTextVNode("Vai a tutte le FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        items: unref(siteContent).faq.slice(0, 4)
      }, null, _parent));
      _push(`</div></section><section id="mi-interessa" class="section-padding bg-linen/38"><div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        eyebrow: "Richiedi info",
        title: "Lascia il tuo interesse per il primo ciclo",
        text: "Non è una prenotazione vincolante: serve solo a capire disponibilità, preferenze e prossime date."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { variant: "interest" }, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/incontri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=incontri-Bx53cjmw.js.map
