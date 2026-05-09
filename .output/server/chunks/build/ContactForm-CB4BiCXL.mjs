globalThis.__timing__.logStart('Load chunks/build/ContactForm-CB4BiCXL');import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, reactive, ref, useModel, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderDynamicModel, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { s as siteContent, _ as _sfc_main$4 } from './siteContent-lPNyGvbL.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InputText",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    name: {},
    type: { default: "text" },
    autocomplete: {},
    placeholder: {},
    required: { type: Boolean, default: false },
    error: {}
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block" }, _attrs))}><span class="mb-2 block text-sm font-semibold text-ink">${ssrInterpolate(__props.label)}</span><input${ssrRenderDynamicModel(__props.type, model.value, null)}${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("autocomplete", __props.autocomplete)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("aria-invalid", Boolean(__props.error))}${ssrRenderAttr("aria-describedby", __props.error ? `${__props.name}-error` : void 0)} class="min-h-12 w-full rounded-2xl border border-ink/12 bg-white/70 px-4 text-base text-ink shadow-line transition placeholder:text-ink/38 hover:border-ink/22 focus:border-terracotta">`);
      if (__props.error) {
        _push(`<span${ssrRenderAttr("id", `${__props.name}-error`)} class="mt-2 block text-sm text-clay">${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/InputText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SelectField",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    name: {},
    options: {},
    placeholder: {},
    required: { type: Boolean },
    error: {}
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block" }, _attrs))}><span class="mb-2 block text-sm font-semibold text-ink">${ssrInterpolate(__props.label)}</span><select${ssrRenderAttr("name", __props.name)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("aria-invalid", Boolean(__props.error))}${ssrRenderAttr("aria-describedby", __props.error ? `${__props.name}-error` : void 0)} class="min-h-12 w-full rounded-2xl border border-ink/12 bg-white/70 px-4 text-base text-ink shadow-line transition hover:border-ink/22 focus:border-terracotta"><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(model.value) ? ssrLooseContain(model.value, "") : ssrLooseEqual(model.value, "")) ? " selected" : ""}>${ssrInterpolate(__props.placeholder)}</option><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(Array.isArray(model.value) ? ssrLooseContain(model.value, option.value) : ssrLooseEqual(model.value, option.value)) ? " selected" : ""}>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (__props.error) {
        _push(`<span${ssrRenderAttr("id", `${__props.name}-error`)} class="mt-2 block text-sm text-clay">${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/SelectField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TextareaField",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    label: {},
    name: {},
    placeholder: {},
    required: { type: Boolean, default: false },
    rows: { default: 5 },
    error: {}
  }, {
    "modelValue": { default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block" }, _attrs))}><span class="mb-2 block text-sm font-semibold text-ink">${ssrInterpolate(__props.label)}</span><textarea${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("rows", __props.rows)}${ssrRenderAttr("aria-invalid", Boolean(__props.error))}${ssrRenderAttr("aria-describedby", __props.error ? `${__props.name}-error` : void 0)} class="w-full resize-y rounded-2xl border border-ink/12 bg-white/70 px-4 py-3 text-base leading-7 text-ink shadow-line transition placeholder:text-ink/38 hover:border-ink/22 focus:border-terracotta">${ssrInterpolate(model.value)}</textarea>`);
      if (__props.error) {
        _push(`<span${ssrRenderAttr("id", `${__props.name}-error`)} class="mt-2 block text-sm text-clay">${ssrInterpolate(__props.error)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Atoms/TextareaField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function useContactForm(options) {
  var _a;
  const state = reactive({
    name: "",
    email: "",
    reason: (_a = options.defaultReason) != null ? _a : "",
    message: ""
  });
  const errors = reactive({});
  const status = ref("idle");
  const serverMessage = ref("");
  const clearErrors = () => {
    errors.name = void 0;
    errors.email = void 0;
    errors.reason = void 0;
    errors.message = void 0;
  };
  const validate = () => {
    clearErrors();
    if (!state.name.trim()) {
      errors.name = "Inserisci il tuo nome.";
    }
    if (!state.email.trim()) {
      errors.email = "Inserisci la tua email.";
    } else if (!emailPattern.test(state.email)) {
      errors.email = "Inserisci un indirizzo email valido.";
    }
    if (!state.reason) {
      errors.reason = "Scegli un motivo del contatto.";
    }
    if (!state.message.trim() || state.message.trim().length < 10) {
      errors.message = "Scrivi almeno qualche parola, cos\xEC posso risponderti meglio.";
    }
    return !errors.name && !errors.email && !errors.reason && !errors.message;
  };
  const reset = () => {
    var _a2;
    state.name = "";
    state.email = "";
    state.reason = (_a2 = options.defaultReason) != null ? _a2 : "";
    state.message = "";
  };
  const submit = async () => {
    serverMessage.value = "";
    status.value = "idle";
    if (!validate()) {
      return;
    }
    status.value = "loading";
    try {
      await $fetch(options.endpoint, {
        method: "POST",
        body: {
          name: state.name.trim(),
          email: state.email.trim(),
          reason: state.reason,
          message: state.message.trim()
        }
      });
      status.value = "success";
      serverMessage.value = options.endpoint === "/api/interest" ? "Richiesta ricevuta. Ti risponder\xF2 con i dettagli del prossimo ciclo." : "Messaggio ricevuto. Ti risponder\xF2 appena possibile.";
      reset();
    } catch {
      status.value = "error";
      serverMessage.value = "Non sono riuscita a inviare il messaggio. Riprova tra poco oppure scrivimi sui social.";
    }
  };
  return {
    state,
    errors,
    status,
    serverMessage,
    submit
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    variant: { default: "contact" }
  },
  setup(__props) {
    const props = __props;
    const isInterest = computed(() => props.variant === "interest");
    const eyebrow = computed(() => isInterest.value ? "Mi interessa" : "Contatti");
    const title = computed(
      () => isInterest.value ? "Vuoi partecipare al primo ciclo?" : "Scrivimi con calma"
    );
    const intro = computed(
      () => isInterest.value ? "Lascia i tuoi dati e una breve nota. Ti risponder\xF2 con disponibilit\xE0, luogo e prossime date." : "Per incontri, creazioni su richiesta o collaborazioni, puoi usare questo spazio. Rispondo appena possibile."
    );
    const messagePlaceholder = computed(
      () => isInterest.value ? "Raccontami se parti da zero, che giorni preferisci o cosa vorresti chiarire." : "Scrivi qui il tuo messaggio."
    );
    const buttonLabel = computed(
      () => isInterest.value ? "Richiedi informazioni" : "Invia messaggio"
    );
    const { state, errors, status, serverMessage } = useContactForm({
      endpoint: isInterest.value ? "/api/interest" : "/api/contact",
      defaultReason: isInterest.value ? "incontro" : void 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "rounded-[2rem] border border-ink/10 bg-white/62 p-5 shadow-soft sm:p-7",
        novalidate: ""
      }, _attrs))}><div class="mb-6"><p class="eyebrow">${ssrInterpolate(unref(eyebrow))}</p><h2 class="mt-3 font-serif text-3xl font-medium text-ink">${ssrInterpolate(unref(title))}</h2><p class="mt-3 leading-7 text-ink/66">${ssrInterpolate(unref(intro))}</p></div><div class="grid gap-5">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(state).name,
        "onUpdate:modelValue": ($event) => unref(state).name = $event,
        label: "Nome",
        name: "name",
        autocomplete: "name",
        placeholder: "Il tuo nome",
        required: "",
        error: unref(errors).name
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(state).email,
        "onUpdate:modelValue": ($event) => unref(state).email = $event,
        label: "Email",
        name: "email",
        type: "email",
        autocomplete: "email",
        placeholder: "nome@email.it",
        required: "",
        error: unref(errors).email
      }, null, _parent));
      if (__props.variant === "contact") {
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: unref(state).reason,
          "onUpdate:modelValue": ($event) => unref(state).reason = $event,
          label: "Motivo del contatto",
          name: "reason",
          placeholder: "Scegli un motivo",
          required: "",
          options: unref(siteContent).contactReasons,
          error: unref(errors).reason
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(state).message,
        "onUpdate:modelValue": ($event) => unref(state).message = $event,
        label: __props.variant === "interest" ? "Cosa ti piacerebbe sapere?" : "Messaggio",
        name: "message",
        placeholder: unref(messagePlaceholder),
        required: "",
        rows: 5,
        error: unref(errors).message
      }, null, _parent));
      _push(`</div><div class="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        type: "submit",
        icon: "lucide:send",
        disabled: unref(status) === "loading"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(status) === "loading" ? "Invio in corso..." : unref(buttonLabel))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(status) === "loading" ? "Invio in corso..." : unref(buttonLabel)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(serverMessage)) {
        _push(`<p class="${ssrRenderClass([unref(status) === "success" ? "text-moss" : "text-clay", "text-sm leading-6"])}" role="status">${ssrInterpolate(unref(serverMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Organisms/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };;globalThis.__timing__.logEnd('Load chunks/build/ContactForm-CB4BiCXL');
//# sourceMappingURL=ContactForm-CB4BiCXL.mjs.map
