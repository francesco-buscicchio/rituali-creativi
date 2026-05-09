globalThis.__timing__.logStart('Load chunks/build/incontri-Bx53cjmw');import { defineComponent, withCtx, createTextVNode, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { s as siteContent, _ as _sfc_main$2 } from './siteContent-lPNyGvbL.mjs';
import { _ as _sfc_main$3 } from './ButtonSecondary-DObbn8cg.mjs';
import { _ as _sfc_main$4 } from './SectionTitle-DqsIZO-O.mjs';
import { T as TagBadge } from './TagBadge-BnA62boY.mjs';
import { _ as _sfc_main$5 } from './InfoCard-DHDRdiNS.mjs';
import { _ as _sfc_main$7 } from './ContactForm-CB4BiCXL.mjs';
import { _ as _sfc_main$6 } from './FaqAccordion-CvRH6UAX.mjs';
import { u as useSeoMeta } from './v3-B6rCCvHd.mjs';
import './nuxt-link-C54LFPTs.mjs';
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
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import './index-HAGKhiWP.mjs';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CourseDetailsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-5 md:grid-cols-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(siteContent).course.details, (detail) => {
        _push(ssrRenderComponent(_sfc_main$5, {
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
      _push(ssrRenderComponent(_sfc_main$2, {
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
      _push(ssrRenderComponent(_sfc_main$3, {
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
      _push(ssrRenderComponent(_sfc_main$4, {
        eyebrow: "Come funziona",
        title: "Un\u2019esperienza guidata, lenta e accessibile",
        text: "Ogni ciclo accompagna le basi dell\u2019uncinetto dentro un contesto raccolto. Non devi arrivare preparata: materiali, ritmo e passaggi sono pensati per iniziare con serenit\xE0.",
        align: "center"
      }, null, _parent));
      _push(`<div class="mt-12">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></section><section class="section-padding bg-white/38"><div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        eyebrow: "Cosa porti a casa",
        title: "Non solo una tecnica, ma un modo diverso di prenderti tempo",
        text: "Alla fine del ciclo avrai imparato i gesti base, iniziato un progetto concreto e sperimentato un tempo creativo pi\xF9 leggero."
      }, null, _parent));
      _push(`<div class="grid gap-4 sm:grid-cols-2">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        title: "Le basi",
        text: "Catenella, maglia bassa, avvio del lavoro e lettura dei passaggi principali."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        title: "Un progetto",
        text: "Un piccolo oggetto tessile da completare o continuare con una traccia chiara."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        title: "Materiali",
        text: "Strumenti e filati inclusi, scelti per essere piacevoli anche per chi inizia."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        title: "Una pausa vera",
        text: "Un appuntamento in cui uscire dalla routine e tornare a un ritmo pi\xF9 umano."
      }, null, _parent));
      _push(`</div></div></section><section class="section-padding"><div class="site-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        eyebrow: "FAQ",
        title: "Domande frequenti sugli incontri",
        text: "Le risposte essenziali prima di scrivere o lasciare il tuo interesse."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
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
      _push(ssrRenderComponent(_sfc_main$4, {
        eyebrow: "Richiedi info",
        title: "Lascia il tuo interesse per il primo ciclo",
        text: "Non \xE8 una prenotazione vincolante: serve solo a capire disponibilit\xE0, preferenze e prossime date."
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

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/incontri-Bx53cjmw');
//# sourceMappingURL=incontri-Bx53cjmw.mjs.map
