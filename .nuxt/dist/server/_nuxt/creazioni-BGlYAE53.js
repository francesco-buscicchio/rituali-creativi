import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./SectionTitle-DqsIZO-O.js";
import { _ as _sfc_main$2 } from "./ProductCard-CbrrpQCr.js";
import { _ as _sfc_main$3 } from "./CTASection-DzlEZB8M.js";
import { s as siteContent } from "./siteContent-lPNyGvbL.js";
import { a as useSeoMeta } from "./v3-B6rCCvHd.js";
import "./ButtonSecondary-DObbn8cg.js";
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
        text: "Puoi scrivere per capire insieme se è possibile realizzare un pezzo su richiesta, con tempi e dettagli chiari fin dall’inizio.",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=creazioni-BGlYAE53.js.map
