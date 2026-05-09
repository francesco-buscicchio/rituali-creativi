globalThis.__timing__.logStart('Load chunks/build/contatti-DIsJ3wJs');import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './SectionTitle-DqsIZO-O.mjs';
import { _ as _sfc_main$2 } from './SocialLinkItem-CunLXq1O.mjs';
import { _ as _sfc_main$3 } from './ContactForm-CB4BiCXL.mjs';
import { s as siteContent } from './siteContent-lPNyGvbL.mjs';
import { u as useSeoMeta } from './v3-B6rCCvHd.mjs';
import './index-HAGKhiWP.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import 'vue-router';
import 'perfect-debounce';
import './nuxt-link-C54LFPTs.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contatti",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteContent.seo.contact.title,
      description: siteContent.seo.contact.description,
      ogTitle: siteContent.seo.contact.title,
      ogDescription: siteContent.seo.contact.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-padding border-b border-ink/10 bg-linen/34"><div class="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        eyebrow: "Contatti",
        title: "Scrivimi per incontri, creazioni o collaborazioni.",
        text: "Questo \xE8 uno spazio semplice: puoi chiedere informazioni, raccontarmi cosa cerchi o capire insieme quale proposta fa per te.",
        as: "h1"
      }, null, _parent));
      _push(`<div class="mt-8 grid gap-3"><!--[-->`);
      ssrRenderList(unref(siteContent).socials, (social) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: social.href,
          href: social.href,
          label: social.label,
          handle: social.handle,
          icon: social.icon
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contatti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/contatti-DIsJ3wJs');
//# sourceMappingURL=contatti-DIsJ3wJs.mjs.map
