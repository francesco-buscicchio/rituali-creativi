globalThis.__timing__.logStart('Load chunks/routes/api/interest.post');import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
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

const interest_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Dati mancanti"
    });
  }
  return {
    ok: true,
    message: "Interesse per il ciclo ricevuto",
    receivedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
});

export { interest_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/interest.post');
//# sourceMappingURL=interest.post.mjs.map
