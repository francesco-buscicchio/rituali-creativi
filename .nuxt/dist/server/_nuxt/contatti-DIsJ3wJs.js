import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./SectionTitle-DqsIZO-O.js";
import { _ as _sfc_main$2 } from "./SocialLinkItem-CunLXq1O.js";
import { _ as _sfc_main$3 } from "./ContactForm-CB4BiCXL.js";
import { s as siteContent } from "./siteContent-lPNyGvbL.js";
import { a as useSeoMeta } from "./v3-B6rCCvHd.js";
import "./index-HAGKhiWP.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "../server.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/hookable/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/unctx/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/defu/dist/defu.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/ufo/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/klona/dist/index.mjs";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "./nuxt-link-C54LFPTs.js";
import "/Users/franccescobuscicchio/Desktop/rituali-creativi-nuxt/node_modules/@unhead/vue/dist/index.mjs";
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
        text: "Questo è uno spazio semplice: puoi chiedere informazioni, raccontarmi cosa cerchi o capire insieme quale proposta fa per te.",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=contatti-DIsJ3wJs.js.map
