globalThis.__timing__.logStart('Load chunks/build/faq-BiES1dvi');import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './SectionTitle-DqsIZO-O.mjs';
import { _ as _sfc_main$3 } from './CTASection-DzlEZB8M.mjs';
import { _ as _sfc_main$2 } from './FaqAccordion-CvRH6UAX.mjs';
import { s as siteContent } from './siteContent-lPNyGvbL.mjs';
import { u as useSeoMeta } from './v3-B6rCCvHd.mjs';
import './ButtonSecondary-DObbn8cg.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.faq.title,
      description: siteContent.seo.faq.description,
      ogTitle: siteContent.seo.faq.title,
      ogDescription: siteContent.seo.faq.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding border-b border-ink/10 bg-linen/34"><div class="site-container">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        eyebrow: "FAQ",
        title: "Domande frequenti",
        text: "Le informazioni pi\xF9 utili su incontri, materiali, piccoli gruppi, costi e contatti.",
        as: "h1",
        align: "center"
      }, null, _parent));
      _push(`</div></section><section class="section-padding"><div class="site-container max-w-4xl">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        items: unref(siteContent).faq
      }, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        eyebrow: "Hai ancora dubbi?",
        title: "Puoi scrivermi anche solo per capire se fa per te.",
        text: "Non serve avere gi\xE0 un\u2019idea precisa: raccontami cosa cerchi e ti risponder\xF2 con le informazioni pi\xF9 adatte.",
        "primary-label": "Scrivimi",
        "primary-to": "/contatti",
        "secondary-label": "Scopri gli incontri",
        "secondary-to": "/incontri"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/faq-BiES1dvi');
//# sourceMappingURL=faq-BiES1dvi.mjs.map
