globalThis.__timing__.logStart('Load chunks/build/creazioni-BGlYAE53');import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './SectionTitle-DqsIZO-O.mjs';
import { _ as _sfc_main$2 } from './ProductCard-CbrrpQCr.mjs';
import { _ as _sfc_main$3 } from './CTASection-DzlEZB8M.mjs';
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
  __name: "creazioni",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.creations.title,
      description: siteContent.seo.creations.description,
      ogTitle: siteContent.seo.creations.title,
      ogDescription: siteContent.seo.creations.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding border-b border-ink/10 bg-linen/34"><div class="site-container grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        eyebrow: "Creazioni handmade",
        title: "Borse e oggetti tessili fatti con calma.",
        text: unref(siteContent).creations.intro,
        as: "h1"
      }, null, _parent));
      _push(`<div class="rounded-[2rem] border border-ink/10 bg-white/58 p-6 shadow-soft sm:p-8"><p class="font-serif text-3xl font-medium leading-tight text-ink"> Pochi pezzi, nessuna sovrapproduzione. </p><p class="mt-4 leading-7 text-ink/68">${ssrInterpolate(unref(siteContent).creations.note)}</p></div></div></section><section class="section-padding"><div class="site-container"><div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(siteContent).creations.products, (product) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: product.title,
          title: product.title,
          category: product.category,
          text: product.text,
          palette: product.palette
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        eyebrow: "Custom order",
        title: "Hai in mente un colore, una misura o un oggetto specifico?",
        text: "Puoi scrivere per capire insieme se \xE8 possibile realizzare un pezzo su richiesta, con tempi e dettagli chiari fin dall\u2019inizio.",
        "primary-label": "Richiedi informazioni",
        "primary-to": "/contatti",
        "secondary-label": "Scopri il progetto",
        "secondary-to": "/il-progetto"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/creazioni.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/creazioni-BGlYAE53');
//# sourceMappingURL=creazioni-BGlYAE53.mjs.map
