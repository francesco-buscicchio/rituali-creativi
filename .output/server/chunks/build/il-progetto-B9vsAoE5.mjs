globalThis.__timing__.logStart('Load chunks/build/il-progetto-B9vsAoE5');import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './SectionTitle-DqsIZO-O.mjs';
import { _ as _sfc_main$2 } from './InfoCard-DHDRdiNS.mjs';
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
  __name: "il-progetto",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.project.title,
      description: siteContent.seo.project.description,
      ogTitle: siteContent.seo.project.title,
      ogDescription: siteContent.seo.project.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding border-b border-ink/10 bg-linen/34"><div class="site-container grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        eyebrow: "Il progetto",
        title: "Creativita lenta, senza produttivita forzata.",
        text: "Rituali Creativi nasce dal bisogno di uno spazio pi\xF9 semplice, dove fare con le mani diventa anche un modo per ascoltarsi.",
        as: "h1"
      }, null, _parent));
      _push(`<div class="rounded-[2rem] border border-ink/10 bg-white/58 p-6 leading-8 text-ink/70 shadow-soft sm:p-8"><p> Non \xE8 un manifesto rigido e non vuole insegnare un modo giusto di essere creativi. \xC8 un invito a togliere un po\u2019 di pressione dal fare. </p></div></div></section><section class="section-padding"><div class="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><p class="eyebrow">Perche nasce</p><div class="space-y-7 text-lg leading-8 text-ink/72"><p> Abbiamo perso un po\u2019 l\u2019abitudine a creare solo per il gusto di farlo. Molto spesso anche il tempo libero diventa qualcosa da ottimizzare, mostrare, misurare. </p><p> Rituali Creativi nasce dal bisogno opposto: uno spazio pi\xF9 umano, in cui lasciarsi andare alla creativit\xE0 e stare insieme senza pressione. </p><p> L\u2019uncinetto e le pratiche tessili sono il punto di partenza per ritrovare presenza. Il filo obbliga a rallentare, il punto chiede attenzione, il gruppo ricorda che non siamo fatte per fare tutto da sole. </p></div></div></section><section class="section-padding bg-white/38"><div class="site-container"><div class="rounded-[2rem] border border-ink/10 bg-cream p-7 shadow-soft sm:p-10 lg:p-12"><p class="eyebrow">Manifesto semplice</p><div class="mt-6 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center"><h2 class="font-serif text-4xl font-medium leading-tight text-ink text-balance sm:text-5xl"> Abbiamo perso un po\u2019 l\u2019abitudine a creare solo per il gusto di farlo. </h2><p class="text-lg leading-8 text-ink/70"> Rituali Creativi nasce dal bisogno di uno spazio pi\xF9 semplice, in cui lasciarsi andare alla creativit\xE0 e stare insieme, senza pressione. Si pu\xF2 parlare, ascoltare, sbagliare, disfare e ricominciare. Si pu\xF2 anche stare in silenzio, mentre le mani trovano il loro ritmo. </p></div></div></div></section><section class="section-padding"><div class="site-container">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        eyebrow: "Visione",
        title: "Un posto dove il fare non deve sempre diventare prestazione",
        text: "Il valore non sta solo nell\u2019oggetto finito, ma nel tempo che ci si concede mentre lo si crea.",
        align: "center"
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 md:grid-cols-3">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Fare",
        text: "Imparare punti e tecniche semplici, con una guida presente e tempi accessibili.",
        label: "01"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Parlare",
        text: "Condividere pensieri, domande e piccole scoperte senza dover riempire ogni momento.",
        label: "02"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Stare",
        text: "Accogliere anche il silenzio, la lentezza e la possibilit\xE0 di non performare.",
        label: "03"
      }, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        eyebrow: "Prossimo passo",
        title: "Se senti che questo spazio ti somiglia, vieni a scoprirlo.",
        text: "Gli incontri sono pensati per partire da zero e vivere la creativit\xE0 come un momento di riconnessione.",
        "primary-label": "Scopri gli incontri",
        "primary-to": "/incontri",
        "secondary-label": "Scrivimi",
        "secondary-to": "/contatti"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/il-progetto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/il-progetto-B9vsAoE5');
//# sourceMappingURL=il-progetto-B9vsAoE5.mjs.map
