import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./SectionTitle-DqsIZO-O.js";
import { _ as _sfc_main$3 } from "./CTASection-DzlEZB8M.js";
import { _ as _sfc_main$2 } from "./FaqAccordion-CvRH6UAX.js";
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
        text: "Le informazioni più utili su incontri, materiali, piccoli gruppi, costi e contatti.",
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
        text: "Non serve avere già un’idea precisa: raccontami cosa cerchi e ti risponderò con le informazioni più adatte.",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=faq-BiES1dvi.js.map
