import { siteContent } from './siteContent'

/**
 * Registro dei contenuti modificabili dall'admin (/admin).
 * Ogni campo ha un default (il contenuto attuale del sito): il valore salvato
 * su MongoDB, se presente e non vuoto, lo sostituisce. Aggiungere un campo qui
 * lo fa comparire automaticamente nell'admin; nei componenti si legge con
 * useContent().t('chiave') oppure .list('chiave').
 */

export type ListItemField = {
  key: string
  label: string
  type: 'text' | 'textarea'
}

export type ContentField =
  | { key: string; label: string; type: 'text' | 'textarea'; default: string; hint?: string }
  | { key: string; label: string; type: 'image'; default: string; hint?: string }
  | {
      key: string
      label: string
      type: 'list'
      itemLabel: string
      fields: ListItemField[]
      default: Record<string, string>[]
      hint?: string
    }

export type ContentGroup = {
  id: string
  page: string
  title: string
  /** Pagina del sito dove si vede la sezione, per il link "Vedi sul sito". */
  path?: string
  fields: ContentField[]
}

export type ContentValue = string | Record<string, string>[]

const text = (key: string, label: string, value: string, hint?: string): ContentField => ({
  key,
  label,
  type: 'text',
  default: value,
  hint
})

const area = (key: string, label: string, value: string, hint?: string): ContentField => ({
  key,
  label,
  type: 'textarea',
  default: value,
  hint
})

const image = (key: string, label: string, value: string, hint?: string): ContentField => ({
  key,
  label,
  type: 'image',
  default: value,
  hint
})

const titleText: ListItemField[] = [
  { key: 'title', label: 'Titolo', type: 'text' },
  { key: 'text', label: 'Testo', type: 'textarea' }
]

function cta(prefix: string, values: {
  eyebrow: string
  title: string
  text: string
  primary: string
  secondary: string
}): ContentField[] {
  return [
    text(`${prefix}.eyebrow`, 'Etichetta piccola', values.eyebrow),
    text(`${prefix}.title`, 'Titolo', values.title),
    area(`${prefix}.text`, 'Testo', values.text),
    text(`${prefix}.primary`, 'Pulsante principale', values.primary),
    text(`${prefix}.secondary`, 'Pulsante secondario', values.secondary)
  ]
}

function seo(prefix: string, pageName: string, values: { title: string; description: string }): ContentField[] {
  return [
    text(`${prefix}.title`, `${pageName} — titolo della scheda`, values.title),
    area(`${prefix}.description`, `${pageName} — descrizione per Google`, values.description)
  ]
}

export const navKey = (to: string) => `nav.${to === '/' ? 'home' : to.slice(1)}`
export const socialKey = (label: string) => `social.${label.toLowerCase()}`

export const CONTENT_GROUPS: ContentGroup[] = [
  {
    id: 'generale',
    page: 'Tutto il sito',
    title: 'Marchio, menu e footer',
    path: '/',
    fields: [
      text('brand.name', 'Nome del sito', siteContent.brand.name),
      image('brand.logo', 'Logo', '/logo-rituali-creativi.png', 'Meglio un PNG quadrato con sfondo trasparente.'),
      text('header.cta', 'Pulsante in alto a destra', 'Richiedi info'),
      ...siteContent.navigation.map((item) => text(navKey(item.to), `Voce del menu — ${item.label}`, item.label)),
      text('brand.payoff', 'Footer — frase sotto il nome', siteContent.brand.payoff),
      text('brand.footerNote', 'Footer — nota piccola', siteContent.brand.footerNote),
      text('footer.pagesTitle', 'Footer — titolo colonna pagine', 'Pagine'),
      text('footer.socialTitle', 'Footer — titolo colonna social', 'Social'),
      text('footer.copyright', 'Footer — testo dopo il copyright', 'Tutti i diritti riservati.')
    ]
  },
  {
    id: 'social',
    page: 'Tutto il sito',
    title: 'Social e WhatsApp',
    path: '/contatti',
    fields: [
      ...siteContent.socials.flatMap((social) => [
        text(`${socialKey(social.label)}.handle`, `${social.label} — nome profilo`, social.handle),
        text(`${socialKey(social.label)}.url`, `${social.label} — indirizzo`, social.href)
      ]),
      text('whatsapp.number', 'WhatsApp — numero', '393349931268', 'Con il prefisso internazionale, senza + e senza spazi (es. 393331234567).'),
      text('whatsapp.display', 'WhatsApp — numero mostrato accanto al pulsante', '', 'Facoltativo: lascialo vuoto per non mostrarlo.'),
      area(
        'whatsapp.message',
        'WhatsApp — messaggio già scritto',
        'Ciao, vorrei ricevere informazioni su Rituali Creativi. Mi piacerebbe raccontarti cosa cerco e capire quale proposta fa per me.'
      ),
      text('whatsapp.eyebrow', 'Riquadro WhatsApp — etichetta', 'WhatsApp'),
      area(
        'whatsapp.text',
        'Riquadro WhatsApp — testo',
        'Contattami direttamente su WhatsApp: puoi chiedere informazioni, raccontarmi cosa cerchi o capire insieme quale proposta fa per te.'
      ),
      text('whatsapp.button', 'Riquadro WhatsApp — pulsante', 'Apri WhatsApp')
    ]
  },
  {
    id: 'home-hero',
    page: 'Home',
    title: 'Apertura',
    path: '/',
    fields: [
      image('home.hero.image', 'Foto di apertura', '/hero/DSCF0002_low.JPG', 'Foto orizzontale: su desktop occupa tutto lo schermo.'),
      text('home.hero.imageAlt', 'Descrizione della foto (per accessibilità)', 'Tre borse all’uncinetto, bianca, nera e lilla, tenute in mano davanti al mare'),
      text('home.hero.title', 'Titolo', siteContent.home.hero.title),
      area('home.hero.subtitle', 'Sottotitolo', siteContent.home.hero.subtitle),
      text('home.hero.primaryCta', 'Pulsante principale', siteContent.home.hero.primaryCta),
      text('home.hero.secondaryCta', 'Pulsante secondario', siteContent.home.hero.secondaryCta)
    ]
  },
  {
    id: 'home-project',
    page: 'Home',
    title: 'Il progetto e citazione',
    path: '/',
    fields: [
      text('home.project.eyebrow', 'Etichetta piccola', siteContent.home.project.eyebrow),
      text('home.project.title', 'Titolo', siteContent.home.project.title),
      area('home.project.p1', 'Primo paragrafo', siteContent.home.intro),
      area(
        'home.project.p2',
        'Secondo paragrafo',
        'Qui l’uncinetto diventa un pretesto buono: per imparare qualcosa di nuovo, incontrare persone con lo stesso bisogno di lentezza e concedersi un tempo non performativo.'
      ),
      text('home.quote.title', 'Citazione', '“Non serve fare bene, serve sentirsi a proprio agio.”'),
      area(
        'home.quote.text',
        'Testo sotto la citazione',
        'Ogni gesto viene spiegato con pazienza. Ogni pausa è permessa. Ogni persona può trovare il proprio modo di stare nel processo.'
      )
    ]
  },
  {
    id: 'home-values',
    page: 'Home',
    title: 'I valori',
    path: '/',
    fields: [
      text('home.values.eyebrow', 'Etichetta piccola', 'I valori'),
      text('home.values.title', 'Titolo', 'Un modo più gentile di stare nel fare'),
      area(
        'home.values.text',
        'Testo',
        'Ogni incontro tiene insieme apprendimento, ascolto e manualità. Non serve fare bene, serve sentirsi a proprio agio.'
      ),
      {
        key: 'home.values.items',
        label: 'Schede dei valori',
        type: 'list',
        itemLabel: 'Valore',
        fields: titleText,
        default: siteContent.values.map((v) => ({ title: v.title, text: v.text })),
        hint: 'Le icone seguono l’ordine delle schede.'
      }
    ]
  },
  {
    id: 'home-groups',
    page: 'Home',
    title: 'Piccoli gruppi',
    path: '/',
    fields: [
      image('home.groups.image', 'Foto', '/images/small-groups-borsa-handmade.jpg', 'Foto verticale (formato 4:5).'),
      text('home.groups.imageAlt', 'Descrizione della foto', 'Borsa realizzata a mano tenuta in alto su sfondo azzurro'),
      text('home.groups.eyebrow', 'Etichetta piccola', 'Atmosfera'),
      text('home.groups.title', 'Titolo', siteContent.smallGroups.title),
      area('home.groups.text', 'Testo', siteContent.smallGroups.text),
      {
        key: 'home.groups.points',
        label: 'Etichette',
        type: 'list',
        itemLabel: 'Etichetta',
        fields: [{ key: 'label', label: 'Testo', type: 'text' }],
        default: siteContent.smallGroups.points.map((label) => ({ label }))
      }
    ]
  },
  {
    id: 'home-cta',
    page: 'Home',
    title: 'Invito finale',
    path: '/',
    fields: cta('home.cta', {
      eyebrow: 'Inizia da qui',
      title: 'Vuoi capire se questo spazio fa per te?',
      text: 'Puoi scrivermi senza impegno: ti racconto il prossimo ciclo di incontri, le creazioni disponibili o le possibilità su misura.',
      primary: 'Scrivimi',
      secondary: 'Leggi le FAQ'
    })
  },
  {
    id: 'progetto-hero',
    page: 'Il progetto',
    title: 'Apertura',
    path: '/il-progetto',
    fields: [
      text('progetto.hero.eyebrow', 'Etichetta piccola', 'Il progetto'),
      text('progetto.hero.title', 'Titolo', 'Creatività lenta'),
      area(
        'progetto.hero.text',
        'Testo',
        'Rituali Creativi nasce dal bisogno di uno spazio dove fare con le mani diventa anche un modo per ascoltarsi e stare insieme agli altri.'
      ),
      image('progetto.hero.image', 'Foto', '/hero/DSCF0031_low.JPG', 'Foto orizzontale.'),
      text('progetto.hero.imageAlt', 'Descrizione della foto', 'Top e borsa all’uncinetto azzurri, con il lungomare sullo sfondo')
    ]
  },
  {
    id: 'progetto-perche',
    page: 'Il progetto',
    title: 'Perché nasce',
    path: '/il-progetto',
    fields: [
      text('progetto.why.eyebrow', 'Etichetta piccola', 'Perché nasce'),
      image('progetto.why.image', 'Foto', '/images/progetto-perche-nasce-borsa.jpg', 'Foto orizzontale (formato 16:9).'),
      text('progetto.why.imageAlt', 'Descrizione della foto', 'Borsa handmade lilla vicino all’acqua'),
      {
        key: 'progetto.why.paragraphs',
        label: 'Paragrafi',
        type: 'list',
        itemLabel: 'Paragrafo',
        fields: [{ key: 'text', label: 'Testo', type: 'textarea' }],
        default: [
          {
            text: 'Abbiamo perso un po’ l’abitudine a creare solo per il gusto di farlo. Molto spesso anche il tempo libero diventa qualcosa da ottimizzare, mostrare, misurare.'
          },
          {
            text: 'Rituali Creativi nasce dal bisogno opposto: uno spazio più umano, in cui lasciarsi andare alla creatività e stare insieme senza pressione.'
          },
          {
            text: 'L’uncinetto e le pratiche tessili sono il punto di partenza per ritrovare presenza. Il filo obbliga a rallentare, il punto chiede attenzione, il gruppo ricorda che non siamo fatte per fare tutto da sole.'
          }
        ]
      }
    ]
  },
  {
    id: 'progetto-tiktok',
    page: 'Il progetto',
    title: 'Video TikTok',
    path: '/il-progetto',
    fields: [
      text('progetto.tiktok.eyebrow', 'Etichetta piccola', 'Dal profilo TikTok'),
      text('progetto.tiktok.title', 'Titolo', 'Possiamo crearlo insieme.'),
      text(
        'progetto.tiktok.videoId',
        'Codice del video TikTok',
        '7632712972745313558',
        'È il numero finale dell’indirizzo del video: tiktok.com/@ritualicreativi/video/CODICE'
      ),
      text('progetto.tiktok.button', 'Pulsante', 'Guarda su TikTok')
    ]
  },
  {
    id: 'progetto-visione',
    page: 'Il progetto',
    title: 'Visione',
    path: '/il-progetto',
    fields: [
      text('progetto.vision.eyebrow', 'Etichetta piccola', 'Visione'),
      text('progetto.vision.title', 'Titolo', 'Un posto dove il fare non deve sempre diventare prestazione'),
      area('progetto.vision.text', 'Testo', 'Il valore non sta solo nell’oggetto finito, ma nel tempo che ci si concede mentre lo si crea.'),
      {
        key: 'progetto.vision.cards',
        label: 'Schede',
        type: 'list',
        itemLabel: 'Scheda',
        fields: titleText,
        default: [
          { title: 'Fare', text: 'Imparare punti e tecniche, con una guida presente e tempi accessibili.' },
          { title: 'Parlare', text: 'Condividere pensieri, domande e piccole scoperte senza dover riempire ogni momento.' },
          { title: 'Stare', text: 'Accogliere anche il silenzio, la lentezza e la possibilità di non performare.' }
        ],
        hint: 'Il numero (01, 02…) si aggiorna da solo.'
      }
    ]
  },
  {
    id: 'progetto-cta',
    page: 'Il progetto',
    title: 'Invito finale',
    path: '/il-progetto',
    fields: cta('progetto.cta', {
      eyebrow: 'Prossimo passo',
      title: 'Se senti che questo spazio ti somiglia, vieni a scoprirlo.',
      text: 'Gli incontri sono pensati per partire da zero e vivere la creatività come un momento di riconnessione.',
      primary: 'Scopri gli incontri',
      secondary: 'Scrivimi'
    })
  },
  {
    id: 'incontri-hero',
    page: 'Incontri',
    title: 'Apertura e dettagli del ciclo',
    path: '/incontri',
    fields: [
      text('incontri.hero.badge', 'Etichetta', 'Incontri di uncinetto'),
      text('incontri.hero.title', 'Titolo', 'Si parte da zero e si va con calma.'),
      area('incontri.hero.text', 'Testo', siteContent.course.subtitle),
      text('incontri.hero.primary', 'Pulsante principale', 'Mi interessa'),
      text('incontri.hero.secondary', 'Pulsante secondario', 'Leggi le FAQ'),
      text('incontri.details.title', 'Riquadro dettagli — titolo', 'Dettagli prossimo ciclo'),
      {
        key: 'incontri.details.items',
        label: 'Riquadro dettagli — righe',
        type: 'list',
        itemLabel: 'Riga',
        fields: [
          { key: 'label', label: 'Voce', type: 'text' },
          { key: 'value', label: 'Valore', type: 'text' }
        ],
        default: siteContent.course.practicalDetails.map((d) => ({ label: d.label, value: d.value }))
      }
    ]
  },
  {
    id: 'incontri-come',
    page: 'Incontri',
    title: 'Come funziona',
    path: '/incontri',
    fields: [
      text('incontri.how.eyebrow', 'Etichetta piccola', 'Come funziona'),
      text('incontri.how.title', 'Titolo', 'Un’esperienza guidata, lenta e accessibile'),
      area(
        'incontri.how.text',
        'Testo',
        'Ogni ciclo accompagna le basi dell’uncinetto dentro un contesto raccolto. Non devi arrivare preparata: materiali, ritmo e passaggi sono pensati per iniziare con serenità.'
      ),
      {
        key: 'incontri.how.cards',
        label: 'Schede',
        type: 'list',
        itemLabel: 'Scheda',
        fields: titleText,
        default: siteContent.course.details.map((d) => ({ title: d.title, text: d.text }))
      }
    ]
  },
  {
    id: 'incontri-porti',
    page: 'Incontri',
    title: 'Cosa porti a casa',
    path: '/incontri',
    fields: [
      text('incontri.takeaway.eyebrow', 'Etichetta piccola', 'Cosa porti a casa'),
      text('incontri.takeaway.title', 'Titolo', 'Non solo una tecnica, ma un modo diverso di prenderti tempo'),
      area(
        'incontri.takeaway.text',
        'Testo',
        'Alla fine del ciclo avrai imparato i gesti base, iniziato un progetto concreto e sperimentato un tempo creativo più leggero.'
      ),
      {
        key: 'incontri.takeaway.cards',
        label: 'Schede',
        type: 'list',
        itemLabel: 'Scheda',
        fields: titleText,
        default: [
          { title: 'Le basi', text: 'Catenella, maglia bassa, avvio del lavoro e lettura dei passaggi principali.' },
          { title: 'Un progetto', text: 'Un piccolo oggetto tessile da completare o continuare con una traccia chiara.' },
          { title: 'Materiali', text: 'Strumenti e filati inclusi, scelti per essere piacevoli anche per chi inizia.' },
          { title: 'Una pausa vera', text: 'Un appuntamento in cui uscire dalla routine e tornare a un ritmo più umano.' }
        ]
      }
    ]
  },
  {
    id: 'incontri-faq',
    page: 'Incontri',
    title: 'Anteprima FAQ',
    path: '/incontri',
    fields: [
      text('incontri.faq.eyebrow', 'Etichetta piccola', 'FAQ'),
      text('incontri.faq.title', 'Titolo', 'Domande frequenti sugli incontri'),
      area('incontri.faq.text', 'Testo', 'Le risposte essenziali prima di scrivere o lasciare il tuo interesse.'),
      text('incontri.faq.button', 'Pulsante', 'Vai a tutte le FAQ'),
      text('incontri.faq.count', 'Quante domande mostrare', '4', 'Si mostrano le prime domande della lista “Domande frequenti”.')
    ]
  },
  {
    id: 'incontri-form',
    page: 'Incontri',
    title: 'Modulo “Mi interessa”',
    path: '/incontri#mi-interessa',
    fields: [
      text('incontri.form.sectionEyebrow', 'Sezione — etichetta piccola', 'Richiedi info'),
      text('incontri.form.sectionTitle', 'Sezione — titolo', 'Lascia il tuo interesse per il prossimo ciclo'),
      area(
        'incontri.form.sectionText',
        'Sezione — testo',
        'Non è una prenotazione vincolante: serve solo a capire disponibilità, preferenze e prossime date.'
      ),
      text('incontri.form.eyebrow', 'Modulo — etichetta piccola', 'Mi interessa'),
      text('incontri.form.title', 'Modulo — titolo', 'Vuoi partecipare al prossimo ciclo?'),
      area(
        'incontri.form.intro',
        'Modulo — testo',
        'Lascia i tuoi dati e una breve nota. Ti risponderò con disponibilità, luogo e prossime date.'
      ),
      text('incontri.form.messageLabel', 'Modulo — titolo del campo messaggio', 'Cosa ti piacerebbe sapere?'),
      text(
        'incontri.form.messagePlaceholder',
        'Modulo — suggerimento nel campo messaggio',
        'Raccontami se parti da zero, che giorni preferisci o cosa vorresti chiarire.'
      ),
      text('incontri.form.button', 'Modulo — pulsante', 'Richiedi informazioni')
    ]
  },
  {
    id: 'faq-list',
    page: 'FAQ',
    title: 'Domande frequenti',
    path: '/faq',
    fields: [
      {
        key: 'faq.items',
        label: 'Domande e risposte',
        type: 'list',
        itemLabel: 'Domanda',
        fields: [
          { key: 'question', label: 'Domanda', type: 'text' },
          { key: 'answer', label: 'Risposta', type: 'textarea' }
        ],
        default: siteContent.faq.map((f) => ({ question: f.question, answer: f.answer })),
        hint: 'Compaiono nella pagina FAQ; le prime anche nella pagina Incontri.'
      }
    ]
  },
  {
    id: 'faq-page',
    page: 'FAQ',
    title: 'Apertura e invito finale',
    path: '/faq',
    fields: [
      text('faq.hero.eyebrow', 'Etichetta piccola', 'FAQ'),
      text('faq.hero.title', 'Titolo', 'Domande frequenti'),
      area('faq.hero.text', 'Testo', 'Le informazioni più utili su incontri, materiali, piccoli gruppi, costi e contatti.'),
      ...cta('faq.cta', {
        eyebrow: 'Hai ancora dubbi?',
        title: 'Puoi scrivermi anche solo per capire se fa per te.',
        text: 'Non serve avere già un’idea precisa: raccontami cosa cerchi e ti risponderò con le informazioni più adatte.',
        primary: 'Scrivimi',
        secondary: 'Scopri gli incontri'
      }).map((f) => ({ ...f, label: `Invito finale — ${f.label.toLowerCase()}` }))
    ]
  },
  {
    id: 'contatti',
    page: 'Contatti',
    title: 'Pagina Contatti',
    path: '/contatti',
    fields: [
      text('contatti.eyebrow', 'Etichetta piccola', 'Contatti'),
      image('contatti.image', 'Foto', '/contatti/DSCF0004_low.JPG', 'Foto verticale (formato 4:5).'),
      text('contatti.imageAlt', 'Descrizione della foto', 'Top e borse all’uncinetto fatti a mano, indossati davanti al mare'),
      text('contatti.socialTitle', 'Riquadro social — titolo', 'Social')
    ]
  },
  {
    id: 'creazioni',
    page: 'Creazioni',
    title: 'Pagina Creazioni (fuori dal menu)',
    path: '/creazioni',
    fields: [
      text('creazioni.eyebrow', 'Etichetta piccola', 'Creazioni handmade'),
      text('creazioni.title', 'Titolo', 'Borse e oggetti tessili fatti con calma.'),
      area('creazioni.intro', 'Testo', siteContent.creations.intro),
      image('creazioni.image', 'Foto', '/images/creazioni-borse-handmade.jpg', 'Foto orizzontale (formato 16:10).'),
      text('creazioni.imageAlt', 'Descrizione della foto', 'Borse handmade all’uncinetto indossate davanti al mare'),
      {
        key: 'creazioni.products',
        label: 'Creazioni',
        type: 'list',
        itemLabel: 'Creazione',
        fields: [
          { key: 'title', label: 'Nome', type: 'text' },
          { key: 'category', label: 'Categoria', type: 'text' },
          { key: 'text', label: 'Descrizione', type: 'textarea' }
        ],
        default: siteContent.creations.products.map((p) => ({ title: p.title, category: p.category, text: p.text })),
        hint: 'I colori delle schede seguono l’ordine.'
      },
      ...cta('creazioni.cta', {
        eyebrow: 'Custom order',
        title: 'Hai in mente un colore, una misura o un oggetto specifico?',
        text: 'Puoi scrivere per capire insieme se è possibile realizzare un pezzo su richiesta, con tempi e dettagli chiari fin dall’inizio.',
        primary: 'Richiedi informazioni',
        secondary: 'Scopri il progetto'
      }).map((f) => ({ ...f, label: `Invito finale — ${f.label.toLowerCase()}` }))
    ]
  },
  {
    id: 'seo',
    page: 'Google e condivisioni',
    title: 'Titoli e descrizioni delle pagine',
    fields: [
      ...seo('seo.home', 'Home', siteContent.seo.home),
      ...seo('seo.project', 'Il progetto', siteContent.seo.project),
      ...seo('seo.meetings', 'Incontri', siteContent.seo.meetings),
      ...seo('seo.faq', 'FAQ', siteContent.seo.faq),
      ...seo('seo.contact', 'Contatti', siteContent.seo.contact),
      ...seo('seo.creations', 'Creazioni', siteContent.seo.creations)
    ]
  }
]

export const CONTENT_FIELDS = new Map(
  CONTENT_GROUPS.flatMap((group) => group.fields.map((field) => [field.key, field] as const))
)
