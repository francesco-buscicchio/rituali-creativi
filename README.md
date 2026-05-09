# Rituali Creativi

Sito Nuxt 3 per il lancio di Rituali Creativi: esperienze tessili, piccoli gruppi di uncinetto e creazioni handmade.

## Installazione

```bash
npm install
```

## Avvio

```bash
npm run dev
```

Il sito parte di default su `http://localhost:3000`.

## Comandi utili

```bash
npm run build
npm run generate
npm run preview
npm run typecheck
```

## Struttura

- `pages/`: pagine principali del sito.
- `components/Atoms`: componenti UI elementari.
- `components/Molecules`: card, link, accordion item e blocchi riutilizzabili.
- `components/Organisms`: sezioni complete, header, footer e form.
- `data/siteContent.ts`: testi, FAQ, social, dati incontri e placeholder creazioni.
- `server/api/contact.post.ts`: submit mock del form contatti.
- `server/api/interest.post.ts`: submit mock del form interesse incontri.
- `assets/css/main.css`: stile globale e utility condivise.

## Modificare contenuti e link social

I contenuti principali sono centralizzati in `data/siteContent.ts`.

Per aggiornare menu, testi hero, FAQ, dettagli degli incontri, creazioni o link social, modifica gli oggetti esportati da quel file. I componenti leggono quei dati automaticamente.

## Note

Il progetto non include backend, autenticazione o carrello. I form usano endpoint mock Nitro, pronti per essere collegati in seguito a email, CRM o database.
