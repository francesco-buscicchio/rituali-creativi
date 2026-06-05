export const siteContent = {
  brand: {
    name: "Rituali Creativi",
    payoff: "Esperienze tessili lente, piccoli gruppi e oggetti fatti a mano.",
    footerNote: "Creato con cura, pochi fili alla volta.",
  },
  navigation: [
    { label: "Home", to: "/" },
    { label: "Il progetto", to: "/il-progetto" },
    // { label: 'Incontri', to: '/incontri' },
    { label: "Creazioni", to: "/creazioni" },
    { label: "FAQ", to: "/faq" },
    { label: "Contatti", to: "/contatti" },
  ],
  socials: [
    {
      label: "Instagram Rituali Creativi",
      handle: "@ritualicreativi",
      href: "https://www.instagram.com/ritualicreativi",
      icon: "lucide:instagram",
    },
    {
      label: "TikTok Rituali Creativi",
      handle: "@ritualicreativi",
      href: "https://www.tiktok.com/@ritualicreativi",
      icon: "lucide:video",
    },
  ],
  home: {
    hero: {
      eyebrow: "Rituali Creativi",
      title: "Uno spazio per rallentare, creare e stare insieme.",
      subtitle:
        "Esperienze tessili e piccoli gruppi di uncinetto per chi sente il bisogno di un ritmo più umano.",
      primaryCta: "Scopri gli incontri",
      secondaryCta: "Scrivimi",
    },
    intro:
      "Rituali Creativi nasce per riportare le mani al centro: non per produrre di più, ma per stare meglio dentro un tempo semplice, condiviso e guidato con delicatezza.",
    rituali: {
      title: "Cosa sono i rituali creativi",
      text: "Sono momenti in cui imparare un gesto tessile, lasciarsi accompagnare dal ritmo delle mani e ritrovare presenza. Si lavora a piccoli passi, con materiali scelti e una guida vicina, dentro un ambiente tranquillo e non giudicante.",
    },
  },
  values: [
    {
      title: "Rallentare",
      text: "Un tempo protetto in cui uscire dalla fretta, respirare meglio e seguire il proprio ritmo.",
      icon: "lucide:pause",
      accent: "sage",
    },
    {
      title: "Creare con le mani",
      text: "Punti semplici, materiali morbidi e oggetti che prendono forma senza bisogno di dimostrare nulla.",
      icon: "lucide:sparkles",
      accent: "terracotta",
    },
    {
      title: "Stare insieme",
      text: "Poche persone alla volta, per conoscersi con naturalezza e dare spazio a tutte.",
      icon: "lucide:users-round",
      accent: "powder",
    },
  ],
  smallGroups: {
    title: "Piccoli gruppi, atmosfera intima",
    text: "Gli incontri sono pensati per 4-5 persone. Questo permette di essere seguite davvero, fare domande, parlare oppure restare in silenzio mentre le mani lavorano.",
    points: [
      "4-5 persone",
      "Ritmo lento",
      "Guida passo passo",
      "Spazio accogliente",
    ],
  },
  course: {
    title: "Primo ciclo di incontri",
    subtitle:
      "Più che un corso classico, è uno spazio semplice in cui imparare con calma, fare qualcosa con le mani e staccare davvero per un paio d’ore.",
    standardPrice: "100€",
    launchPrice: "75€",
    duration: "4 incontri",
    groupSize: "4-5 persone",
    level: "Principiante, si parte da zero",
    materials: "Materiali inclusi",
    details: [
      {
        title: "Per chi è",
        text: "Per chi non ha mai preso in mano l’uncinetto, per chi vuole ricominciare senza pressione e per chi cerca un momento creativo semplice.",
      },
      {
        title: "Come funziona",
        text: "Ogni incontro alterna spiegazione, pratica guidata e tempo libero per procedere con calma. Il gruppo resta piccolo per seguire ogni persona.",
      },
      {
        title: "Cosa è incluso",
        text: "Filati, strumenti di base, dispense essenziali e una piccola guida per continuare anche a casa.",
      },
      {
        title: "Cosa porti a casa",
        text: "Le basi dell’uncinetto, un primo progetto finito o avviato, e soprattutto un modo più gentile di stare nel fare.",
      },
    ],
    practicalDetails: [
      { label: "Formato", value: "4 incontri guidati" },
      { label: "Gruppo", value: "4-5 persone" },
      { label: "Livello", value: "Principiante" },
      { label: "Materiali", value: "Inclusi" },
      { label: "Prezzo standard", value: "100€" },
      { label: "Primo ciclo", value: "75€" },
    ],
  },
  creations: {
    intro:
      "Borse e piccoli oggetti tessili realizzati a mano, in pochi pezzi e con tempi lenti. Ogni creazione nasce per essere usata, amata e tenuta vicino.",
    note: "Non c’è sovrapproduzione: alcuni pezzi sono disponibili in piccole quantità, altri possono essere richiesti su misura scegliendo colori, dimensioni e dettagli.",
    products: [
      {
        title: "Borsa trama morbida",
        category: "Borsa handmade",
        text: "Una borsa essenziale, capiente il giusto, lavorata con filato naturale.",
        palette: "linear-gradient(135deg, #E9DDD2, #A3B09B)",
      },
      {
        title: "Mini bag terracotta",
        category: "Pezzo su richiesta",
        text: "Piccola, compatta, pensata per portare con sé solo ciò che serve.",
        palette: "linear-gradient(135deg, #D8C7B5, #B87A63)",
      },
      {
        title: "Custodia rituale",
        category: "Accessorio",
        text: "Un piccolo contenitore tessile per oggetti quotidiani e strumenti creativi.",
        palette: "linear-gradient(135deg, #F7F3EE, #94A6B8)",
      },
      {
        title: "Shopper punto calmo",
        category: "Borsa handmade",
        text: "Linee pulite, texture visibile e un ritmo di lavorazione volutamente lento.",
        palette: "linear-gradient(135deg, #A3B09B, #E9DDD2)",
      },
      {
        title: "Porta gomitolo",
        category: "Accessorio tessile",
        text: "Per tenere vicino filati e strumenti durante il proprio tempo creativo.",
        palette: "linear-gradient(135deg, #94A6B8, #D8C7B5)",
      },
      {
        title: "Borsa su misura",
        category: "Custom order",
        text: "Una base semplice da personalizzare con colori, manici e proporzioni.",
        palette: "linear-gradient(135deg, #B87A63, #F7F3EE)",
      },
    ],
  },
  faq: [
    {
      question: "Devo saper già lavorare all’uncinetto?",
      answer:
        "No. Gli incontri sono pensati anche per chi parte da zero. Si comincia dai gesti base e si procede con calma.",
    },
    {
      question: "I materiali sono inclusi?",
      answer:
        "Sì, per il primo ciclo sono inclusi filati, strumenti di base e materiali utili per seguire l’esperienza.",
    },
    {
      question: "Quante persone ci sono?",
      answer:
        "I gruppi sono piccoli, di solito 4-5 persone, così ogni partecipante può essere seguita con attenzione.",
    },
    {
      question: "Quanto dura ogni incontro?",
      answer:
        "La durata precisa viene confermata in fase di iscrizione, ma l’idea è dedicare circa un paio d’ore a ogni incontro.",
    },
    {
      question: "Dove si svolgono?",
      answer:
        "Gli spazi vengono comunicati quando il ciclo è in apertura. Puoi scrivere per sapere se c’è una data vicina a te.",
    },
    {
      question: "Quanto costa?",
      answer:
        "Il prezzo standard del ciclo è 100€. Per il primo ciclo di lancio il prezzo promozionale è 75€, materiali inclusi.",
    },
    {
      question: "Posso scriverti per capire se fa per me?",
      answer:
        "Certo. Puoi mandare un messaggio senza impegno: l’obiettivo è capire insieme se questo spazio risponde a ciò che cerchi.",
    },
  ],
  contactReasons: [
    { label: "Incontro / corso", value: "incontro" },
    { label: "Custom order", value: "custom-order" },
    { label: "Collaborazione", value: "collaborazione" },
    { label: "Altro", value: "altro" },
  ],
  seo: {
    home: {
      title: "Rituali Creativi",
      description:
        "Esperienze tessili, piccoli gruppi di uncinetto e creazioni handmade per rallentare, creare e stare insieme.",
    },
    project: {
      title: "Il progetto",
      description:
        "Scopri la visione di Rituali Creativi: creatività lenta, connessione genuina e un modo più umano di stare nel fare.",
    },
    meetings: {
      title: "Incontri di uncinetto",
      description:
        "Piccoli gruppi di uncinetto per principianti: 4 incontri, materiali inclusi e prezzo promozionale per il primo ciclo.",
    },
    creations: {
      title: "Creazioni handmade",
      description:
        "Borse e oggetti tessili fatti a mano, creati in pochi pezzi e disponibili anche su richiesta.",
    },
    faq: {
      title: "FAQ",
      description:
        "Domande frequenti su incontri, materiali, gruppi, durata, prezzi e contatti di Rituali Creativi.",
    },
    contact: {
      title: "Contatti",
      description:
        "Scrivi a Rituali Creativi per informazioni sugli incontri, custom order, collaborazioni o altre domande.",
    },
  },
} as const;
