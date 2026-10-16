export interface ServiceItem {
  id: number;
  slug: string;
  price: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  beds: string;
  baths: string;
  area: string;
  featured: boolean;
  ctaText: string;
  whatsappMessage: string;
  fullDescription: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  location: string;
  stars: number;
  service: string;
  avatar: string;
  featured?: boolean;
}

export interface ValueItem {
  id: number;
  title: string;
  icon: string;
  description: string;
  activeByDefault?: boolean;
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  active?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  activeByDefault?: boolean;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  cluster: 'richesse' | 'amour' | 'protection-autorite';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  metaDescription: string;
  content: string[];
  featured?: boolean;
  keyTakeaways: string[];
}

export const SITE_CONFIG = {
  name: "Médium Voyant Louis Adama",
  titleSuffix: "Grand Maître Spirituel Africain",
  phoneDisplay: "+229 01 96 96 07 92",
  phoneRaw: "+2290196960792",
  phoneApi: "2290196960792",
  locationDisplay: "Sakété, Bénin (Rayonnement Panafricain & Diaspora)",
  siteUrl: "https://www.medium-louis-adama.com",
  ogImage: "/images/hero_arch/rituel%20richesse%20prosperite%20(1).webp",
  countries: [
    "France",
    "Suisse",
    "Belgique",
    "Canada",
    "DOM-TOM",
    "Cameroun",
    "Côte d'Ivoire",
    "Gabon",
    "RDC",
    "Sénégal",
    "Congo",
    "Burkina Faso",
    "Mali",
    "Niger",
    "Bénin"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: "rituel-richesse-prosperite",
    price: "Abondance & Richesse",
    badge: "Haute Prospérité",
    title: "Rituel de Richesse & Prospérité",
    description: "Attirez l'abondance, débloquez les opportunités d'argent et éliminez les pertes financières inexpliquées.",
    image: "/images/cards/rituel%20richesse%20prosperite%20(9).webp",
    beds: "Ouverture des Voies",
    baths: "Zéro Choc",
    area: "Résultats Rapides",
    featured: false,
    ctaText: "Activer",
    whatsappMessage: "Bonjour Maître Louis Adama, je souhaite solliciter le rituel de richesse et de prospérité financière.",
    fullDescription: "Le rituel de haute prospérité africaine s'adresse à toute personne confrontée à des blocages matériels tenaces, des dettes étouffantes ou une stagnation financière anormale. Par l'invocation des forces bienveillantes et l'onction de plantes sacrées, ce travail rétablit l'attraction magnétique de l'abondance.",
    benefits: [
      "Purification de la vibration financière personnelle",
      "Élimination des blocages héréditaires et occultes",
      "Magnétisation des opportunités lucratives",
      "Suivi spirituel personnalisé sur WhatsApp"
    ]
  },
  {
    id: 2,
    slug: "chance-aux-affaires-commerce",
    price: "Prospérité & Succès",
    badge: "Populaire & Garanti",
    title: "Chance aux Affaires & Commerce",
    description: "Multipliez votre clientèle, remportez des marchés et sécurisez le triomphe de vos activités commerciales.",
    image: "/images/cards/rituel%20richesse%20prosperite%20(5).webp",
    beds: "Attraction Clients",
    baths: "Marchés & Ventes",
    area: "Succès Rapide",
    featured: true,
    ctaText: "Consulter",
    whatsappMessage: "Bonjour Maître Louis Adama, je souhaite solliciter votre rituel pour débloquer mes affaires et attirer la clientèle.",
    fullDescription: "Indispensable aux commerçants, entrepreneurs et porteurs de projets en Afrique et dans la diaspora. Ce travail neutralise la concurrence déloyale invisible et charge votre commerce d'un magnétisme d'attraction puissant pour un flux continu de clients fidèles.",
    benefits: [
      "Attraction massive de clients payants et fiables",
      "Victoire lors des appels d'offres et contrats majeurs",
      "Désactivation des influences occultes concurrentielles",
      "Accroissement continu et stable du chiffre d'affaires"
    ]
  },
  {
    id: 3,
    slug: "retour-affectif-rapide",
    price: "Amour & Fidélité",
    badge: "Amour & Harmonie",
    title: "Retour Affectif Rapide",
    description: "Rallumez la flamme amoureuse de l'être aimé, effacez les rancœurs et rétablissez l'entente dans votre couple.",
    image: "/images/avatars/retour%20affectif%20(17).webp",
    beds: "Retour de l'Être Aimé",
    baths: "Harmonie Foyer",
    area: "3 à 14 Jours",
    featured: false,
    ctaText: "Échanger",
    whatsappMessage: "Bonjour Maître Louis Adama, je vis une souffrance amoureuse et je sollicite un retour affectif rapide.",
    fullDescription: "Grâce aux rituels d'envoûtement d'amour bienveillant et aux invocations sur photo, le lien émotionnel rompu est reconstitué. L'être aimé ressent à nouveau une attirance irrésistible, l'oubli des querelles passées et un désir ardent de retrouver le foyer.",
    benefits: [
      "Rapprochement émotionnel et physique de l'être aimé",
      "Dissolution des rancœurs, disputes et incompréhensions",
      "Consolidation de la complicité et fidélité réciproque",
      "Action à distance puissante sur photo et prénoms"
    ]
  },
  {
    id: 4,
    slug: "eloignement-rivaux-maitresses",
    price: "Cadenas Sacré",
    badge: "Sécurité du Foyer",
    title: "Éloignement des Rivaux & Maîtresses",
    description: "Neutralisez définitivement les tierces personnes qui menacent votre foyer et mettez fin aux tentations.",
    image: "/images/cards/cadenas%20d'amour.webp",
    beds: "Séparation Rivaux",
    baths: "Cadenas d'Amour",
    area: "Protection Totale",
    featured: false,
    ctaText: "Éloigner",
    whatsappMessage: "Bonjour Maître Louis Adama, je souhaite éloigner définitivement une rivale qui menace mon couple.",
    fullDescription: "Lorsqu'une tierce personne tente de détruire votre couple par manipulation ou séduction déloyale, le cadenas d'amour et le rituel d'éloignement rompent définitivement toute connexion entre elle et votre conjoint, restaurant l'exclusivité amoureuse.",
    benefits: [
      "Rupture irréversible des liaisons extra-conjugales",
      "Dégoût et désintérêt complet vis-à-vis des rivales",
      "Protection du couple contre les intrigues extérieures",
      "Sauvegarde définitive du mariage et des enfants"
    ]
  },
  {
    id: 5,
    slug: "bains-chance-deblocage",
    price: "Purification",
    badge: "Aura Lumineuse",
    title: "Bains de Chance & Déblocage",
    description: "Nettoyage de l'aura pour attirer les faveurs, réussir concours, promotions et démarches de voyage.",
    image: "/images/cards/protection%20purification.webp",
    beds: "Purification d'Aura",
    baths: "Savon Consacré",
    area: "Ouverture Destin",
    featured: false,
    ctaText: "Purifier",
    whatsappMessage: "Bonjour Maître Louis Adama, je sollicite un bain de chance et de purification spirituelle.",
    fullDescription: "Les énergies négatives accumulées peuvent voiler l'aura et repousser les opportunités heureuses. Les bains et savons sacrés de purification éliminent les ondes lourdes et vous rendent magnétique aux yeux des décideurs, jurys de visa et partenaires.",
    benefits: [
      "Dissipation immédiate de la poisse et de la malchance",
      "Faveur lors des entretiens d'embauche et dossiers de voyage",
      "Renouveau énergétique et clarté mentale profonde",
      "Compositions à base d'écorces et essences traditionnelles"
    ]
  },
  {
    id: 6,
    slug: "blindage-protection-spirituelle",
    price: "Bouclier Sacré",
    badge: "Haute Protection",
    title: "Blindage & Protection Spirituelle",
    description: "Bouclier infranchissable contre la sorcellerie, le mauvais œil et les attaques de la jalousie.",
    image: "/images/cards/couvent%20marabout%20(4).webp",
    beds: "Bouclier Invisible",
    baths: "Protection Maison",
    area: "Immunité Totale",
    featured: false,
    ctaText: "Protéger",
    whatsappMessage: "Bonjour Maître Louis Adama, je souhaite un blindage spirituel pour protéger ma famille et mes biens.",
    fullDescription: "Votre succès attise la jalousie et les attaques occultes ? Le blindage spirituel constitue une forteresse impénétrable autour de votre personne, de vos enfants et de votre patrimoine, renvoyant toute onde nocive à son point d'origine.",
    benefits: [
      "Neutralisation des attaques nocturnes et maléfices",
      "Protection intégrale de la demeure et des entreprises",
      "Sécurisation durable des biens matériels et de la santé",
      "Bénédiction ancestrale sans danger ni contrepartie obscure"
    ]
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    id: 1,
    title: "Voyance & Diagnostic Préalable",
    icon: "fa-eye",
    description: "Toute action commence par une consultation de voyance approfondie (étude sur photos, noms et vibration du Fâ) pour identifier la racine exacte de vos blocages avant tout rituel."
  },
  {
    id: 2,
    title: "Zéro Choc en Retour Garanti",
    icon: "fa-shield-halved",
    description: "Tous les rituels accomplis par le Médium Louis Adama reposent sur les forces traditionnelles pures, les plantes bienfaisantes et la lumière divine. Aucun pacte maléfique, aucun retour négatif possible.",
    activeByDefault: true
  },
  {
    id: 3,
    title: "Secret Spirituel & Discrétion Absolue",
    icon: "fa-user-lock",
    description: "Votre vie privée est sacrée. Vos échanges, vos photos et votre situation demeurent sous le sceau de la confidentialité la plus stricte, sans intermédiaire."
  },
  {
    id: 4,
    title: "Suivi Direct & Personnalisé sur WhatsApp",
    icon: "fa-comments",
    description: "Le Maître vous accompagne personnellement à chaque étape des travaux, avec des conseils quotidiens d'application et des points réguliers sur l'avancement de votre demande."
  }
];

export const PROCESS_DATA: ProcessItem[] = [
  {
    number: "01",
    title: "Échange Direct",
    description: "Présentation confidentielle de votre situation sur WhatsApp sans intermédiaire.",
    icon: "fa-comments"
  },
  {
    number: "02",
    title: "Étude de Voyance",
    description: "Examen sur photo et dates pour définir avec précision le rituel adéquat.",
    icon: "fa-compass",
    active: true
  },
  {
    number: "03",
    title: "Cérémonie Sacrée",
    description: "Cérémonies et consécrations spirituelles au sanctuaire selon les règles ancestrales.",
    icon: "fa-fire-burner"
  },
  {
    number: "04",
    title: "Résultats & Suivi",
    description: "Manifestation concrète des bienfaits avec conseils quotidiens jusqu'à satisfaction.",
    icon: "fa-circle-check"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    quote: "Mes affaires étaient au point mort et mes dettes s'accumulaient. Grâce au rituel de richesse et de chance du Médium Louis Adama, ma boutique a retrouvé une clientèle immense. Merci infiniment !",
    author: "Jean-Paul N.",
    location: "Douala, Cameroun",
    stars: 5,
    service: "Commerce & Richesse",
    avatar: "/images/avatars/IMG_4708.webp"
  },
  {
    id: 2,
    quote: "Une rivale avait brisé mon couple et mon mari était parti du foyer. Le rituel d'éloignement et de retour affectif a tout arrangé en 11 jours. Notre foyer a retrouvé son harmonie et sa complicité.",
    author: "Aïssatou K.",
    location: "Abidjan, Côte d'Ivoire",
    stars: 5,
    service: "Retour Affectif & Éloignement",
    avatar: "/images/avatars/IMG_4709.webp",
    featured: true
  },
  {
    id: 3,
    quote: "Après des années de blocages inexpliqués, le bain de purification m'a permis d'obtenir enfin ma promotion tant attendue et la reconnaissance de ma hiérarchie. Une force spirituelle remarquable.",
    author: "Sylvestre M.",
    location: "Libreville, Gabon",
    stars: 5,
    service: "Purification & Promotion",
    avatar: "/images/avatars/IMG_4710.webp"
  },
  {
    id: 4,
    quote: "Vivant en France, je souffrais de voir mes économies partir en fumée sans explication. Le rituel de déblocage financier à distance a brisé cette poisse. Aujourd'hui mes projets immobiliers se concrétisent.",
    author: "Christian D.",
    location: "Paris, France",
    stars: 5,
    service: "Déblocage Financier",
    avatar: "/images/avatars/IMG_4708.webp"
  },
  {
    id: 5,
    quote: "Mon fiancé s'était éloigné sous de mauvaises influences familiales. Maître Louis Adama a réalisé le cadenas d'amour. Moins de 2 semaines plus tard, il m'a demandé en mariage. Un vrai miracle !",
    author: "Nathalie B.",
    location: "Bruxelles, Belgique",
    stars: 5,
    service: "Cadenas d'Amour",
    avatar: "/images/avatars/IMG_4709.webp"
  },
  {
    id: 6,
    quote: "Mon entreprise d'import-export était menacée par une concurrence déloyale occulte. Avec le bouclier et le rituel d'attraction clients, nous avons décroché 3 contrats majeurs consécutifs.",
    author: "Dieudonné L.",
    location: "Kinshasa, RDC",
    stars: 5,
    service: "Chance aux Affaires",
    avatar: "/images/avatars/IMG_4710.webp"
  },
  {
    id: 7,
    quote: "Mes demandes de visa pour le Canada étaient rejetées systématiquement sans raison valable. Le bain de chance et l'onction m'ont ouvert les portes dès la tentative suivante. Gratitude éternelle !",
    author: "Mariam S.",
    location: "Dakar, Sénégal",
    stars: 5,
    service: "Ouverture & Voyage",
    avatar: "/images/avatars/IMG_4708.webp"
  },
  {
    id: 8,
    quote: "J'étais victime d'attaques nocturnes et de cauchemars constants qui ruinaient ma santé et mes finances. Le blindage spirituel a totalement pacifié ma maison et restauré mon énergie.",
    author: "Serge O.",
    location: "Genève, Suisse",
    stars: 5,
    service: "Blindage Spirituel",
    avatar: "/images/avatars/IMG_4709.webp"
  },
  {
    id: 9,
    quote: "Installé en Martinique, je sentais un lourd blocage héréditaire dans mes finances. Les rituels à distance de Maître Adama m'ont permis de régulariser mes affaires et de tripler mes revenus.",
    author: "Marc-Antoine V.",
    location: "Fort-de-France, DOM-TOM",
    stars: 5,
    service: "Prospérité Matérielle",
    avatar: "/images/avatars/IMG_4710.webp"
  },
  {
    id: 10,
    quote: "Mon restaurant à Montréal perdait ses clients sans raison. Après le rituel de prospérité commerciale, la salle est désormais comble chaque week-end. Le suivi sur WhatsApp a été exemplaire.",
    author: "Éliane T.",
    location: "Montréal, Canada",
    stars: 5,
    service: "Prospérité Commerciale",
    avatar: "/images/avatars/IMG_4708.webp"
  },
  {
    id: 11,
    quote: "Ma femme voulait divorcer après 12 ans de mariage. Grâce aux travaux d'apaisement et d'harmonie du Maître Louis Adama, le dialogue a repris dans la douceur et nous sommes plus soudés que jamais.",
    author: "Ibrahim T.",
    location: "Ouagadougou, Burkina Faso",
    stars: 5,
    service: "Sauvegarde du Mariage",
    avatar: "/images/avatars/IMG_4709.webp"
  },
  {
    id: 12,
    quote: "C'est le seul marabout voyant qui a été franc, direct et sans mauvaises surprises. Ses prédictions lors de la voyance étaient exactes au détail près, et les résultats se sont confirmés.",
    author: "Franck B.",
    location: "Brazzaville, Congo",
    stars: 5,
    service: "Voyance & Protection",
    avatar: "/images/avatars/IMG_4710.webp"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "En quoi consiste un rituel de richesse et de prospérité avec un maître spirituel africain ?",
    answer: "Le rituel de richesse purifie les voies financières, neutralise les blocages invisibles qui freinent vos revenus et attire magnétiquement la prospérité, la chance commerciale et l'abondance matérielle sans pacte négatif.",
    activeByDefault: true
  },
  {
    question: "Les rituels à distance sont-ils efficaces au Cameroun, en RDC ou en Côte d'Ivoire ?",
    answer: "Oui, parfaitement. La vibration spirituelle s'effectue sur les noms, prénoms et photos avec une puissance égale à celle d'une présence au sanctuaire. Les forces invoquées traversent les frontières sans obstacle."
  },
  {
    question: "Le rituel de retour affectif éloigne-t-il également une rivale ?",
    answer: "Oui. Le travail combine la reconquête du cœur de l'être aimé avec une neutralisation totale des rivales et des influences extérieures néfastes, scellant l'harmonie du couple."
  },
  {
    question: "Y a-t-il un danger ou des conséquences négatives aux rituels ?",
    answer: "Aucun danger ni choc en retour. Le Médium Voyant Louis Adama utilise des forces spirituelles pures, des plantes sacrées et des bénédictions ancestrales protectrices."
  },
  {
    question: "Quel est le délai moyen pour constater les premiers résultats ?",
    answer: "Les premiers signes d'ouverture financière, de déblocage ou de réconciliation amoureuse se manifestent généralement entre 3 et 14 jours selon la profondeur de la situation."
  },
  {
    question: "Comment se déroule le premier contact ?",
    answer: "Il vous suffit de cliquer sur le bouton WhatsApp pour présenter directement votre préoccupation en toute discrétion. Le Maître vous répondra personnellement pour orienter votre consultation."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  // ================= CLUSTER 1 : RICHESSE (1 à 10) =================
  {
    id: 1,
    slug: "rituel-de-richesse-africain-prosperite-financiere",
    title: "Rituel de richesse africain : comment débloquer sa situation financière rapidement",
    category: "Richesse & Abondance",
    cluster: "richesse",
    date: "14 Octobre 2026",
    readTime: "5 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(1).webp",
    excerpt: "Découvrez les fondements authentiques des rituels traditionnels de prospérité et la manière d'activer l'attraction matérielle dans votre vie.",
    metaDescription: "Guide complet sur le rituel de richesse africain : éliminer les blocages d'argent, attirer l'abondance matérielle et réussir financièrement sans danger.",
    keyTakeaways: [
      "Comprendre les racines spirituelles des blocages financiers",
      "Le rôle des plantes sacrées et des invocations ancestrales",
      "Pourquoi les résultats se manifestent rapidement à distance",
      "Les précautions éthiques garantissant zéro choc en retour"
    ],
    content: [
      "Dans la tradition spirituelle africaine, la prospérité matérielle n'est pas uniquement le fruit de l'effort physique : elle dépend étroitement de la fluidité des courants invisibles qui entourent chaque personne. Lorsque ces canaux sont obstrués par des jalousies, des malédictions héréditaires ou des nœuds d'infortune, tout effort devient stérile.",
      "Le rituel de richesse et de haute prospérité accompli par le grand Médium Voyant Louis Adama vise à purifier en profondeur les voies financières. En utilisant des offrandes sacrificielles pures, des élixirs d'écorces consacrées et des prières ancestrales, le maître dénoue les chaînes de la pauvreté.",
      "Contrairement aux idées reçues, ce rituel ne nécessite aucun sacrifice humain ni engagement ténébreux. Il s'appuie sur les lois universelles de l'attraction magnétique et la bénédiction des divinités de l'abondance. Que vous résidiez au Cameroun, au Gabon, en Côte d'Ivoire ou en Europe, l'impact vibratoire opère dès le premier cycle lunaire.",
      "Après l'accomplissement des cérémonies au sanctuaire, le consultant constate des ouvertures inattendues : remboursement de créances oubliées, signatures de contrats inespérés, primes professionnelles ou afflux spontané de clients."
    ],
    featured: true
  },
  {
    id: 2,
    slug: "attirer-argent-chance-affaires-commerce",
    title: "Comment attirer l'argent et la chance dans ses affaires : secrets des grands commerçants",
    category: "Affaires & Commerce",
    cluster: "richesse",
    date: "12 Octobre 2026",
    readTime: "4 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(2).webp",
    excerpt: "Pourquoi certains commerces ne désemplissent jamais tandis que d'autres stagnent ? Analyse des clés spirituelles de l'attraction commerciale.",
    metaDescription: "Secrets spirituels d'Afrique pour attirer la clientèle, multiplier ses ventes et garantir le succès d'un commerce ou d'une entreprise.",
    keyTakeaways: [
      "L'impact de l'aura commerciale sur les acheteurs",
      "Consécration des locaux et des caisses enregistreuses",
      "Parade contre le mauvais œil des concurrents",
      "Maintien de la prospérité sur le long terme"
    ],
    content: [
      "Dans les grands marchés d'Afrique de l'Ouest et d'Afrique Centrale, la réussite commerciale spectaculaire n'est jamais laissée au hasard. Les commerçants les plus avisés savent que la rentabilité dépend d'une harmonie énergétique invisible.",
      "Lorsqu'un commerce est victime du mauvais œil ou d'un envoûtement de blocage posé par un rival, les clients passent devant la vitrine sans jamais s'arrêter. Les marchandises dorment en rayon et la trésorerie s'effondre.",
      "Le travail spirituel pour les affaires réalisé par Maître Louis Adama réactive l'éclat magnétique du lieu de vente. Grâce à des encens spécifiques et à l'implantation spirituelle de talismans de prospérité, le flux des acheteurs est ranimé avec vigueur.",
      "Ce secret ancestral permet à des centaines d'entrepreneurs à Douala, Abidjan ou Kinshasa de stabiliser leur activité et de franchir des caps de croissance remarquables."
    ]
  },
  {
    id: 3,
    slug: "bain-purification-chance-blocages-argent",
    title: "Bain de purification et de chance : éliminer les blocages d'argent héréditaires",
    category: "Purification & Chance",
    cluster: "richesse",
    date: "10 Octobre 2026",
    readTime: "4 min",
    image: "/images/featured_video/savon%20de%20chance.webp",
    excerpt: "Comment se libérer des fardeaux financiers transmis de génération en génération grâce aux bains sacrés de purification.",
    metaDescription: "Purifiez votre aura financière grâce aux bains de chance et savons traditionnels préparés par le grand voyant africain Louis Adama.",
    keyTakeaways: [
      "Reconnaître un blocage financier karmique ou familial",
      "L'action libératrice de l'eau et des plantes de pouvoir",
      "Utilisation des savons sacrés consacrés",
      "L'ouverture du chemin vers la réussite personnelle"
    ],
    content: [
      "Il arrive que des personnes douées, studieuses et travailleuses n'arrivent jamais à capitaliser un seul sou. Dès qu'une rentrée d'argent survient, une dépense imprévue ou un accident vient aussitôt tout engloutir. Ce phénomène traduit souvent une dette spirituelle héréditaire.",
      "Pour casser cette spirale infernale, le bain de purification cérémoniel est le premier remède obligatoire. Composé d'eaux recueillies à des confluents sacrés et mélangé à des feuilles de déblocage millénaires, il lave les miasmes accumulés.",
      "Accompagné d'un savon de chance spécialement chargé au nom du bénéficiaire, ce rituel régénère l'aura. En quelques jours, la sensation de lourdeur disparaît et les portes jadis fermées s'ouvrent spontanément."
    ]
  },
  {
    id: 4,
    slug: "deblocage-financier-rapide-causes-occultes",
    title: "Déblocage financier rapide : neutraliser les causes occultes des pertes d'argent",
    category: "Richesse & Abondance",
    cluster: "richesse",
    date: "08 Octobre 2026",
    readTime: "5 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(3).webp",
    excerpt: "Identifier les attaques mystiques qui siphonnent vos revenus et mettre en place un déblocage puissant d'urgence.",
    metaDescription: "Solutions d'urgence pour neutraliser les mains percées d'origine occulte et débloquer les finances par la voyance africaine.",
    keyTakeaways: [
      "Les symptômes de la « main percée » spirituelle",
      "Comment des entités parasites vident votre compte en banque",
      "Le rituel de scellement des fuites énergétiques",
      "Retrouver une épargne solide et durable"
    ],
    content: [
      "Le syndrome de la main percée occulte est l'un des fléaux les plus répandus en Afrique. Vous gagnez des sommes importantes, mais l'argent semble s'évaporer sans que vous ne puissiez réaliser le moindre investissement solide.",
      "Ce mal est souvent causé par des sorts de jalousie jetés par des proches ou des collaborateurs qui ne supportent pas votre ascension. Par ce travail sournois, vos finances sont vampirisées.",
      "Le Maître Louis Adama commence par poser un diagnostic infaillible par la géomancie du Fâ. Dès que la cause est localisée, il applique le rituel de coupure immédiate et érige une clôture spirituelle impénétrable autour de vos avoirs."
    ]
  },
  {
    id: 5,
    slug: "rituel-chance-concours-promotions-voyages",
    title: "Rituel de chance aux concours, promotions et voyages : ouvrir les portes du destin",
    category: "Chance & Destin",
    cluster: "richesse",
    date: "06 Octobre 2026",
    readTime: "4 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(4).webp",
    excerpt: "Mettez toutes les chances de votre côté pour franchir les obstacles administratifs, réussir vos examens et décrocher un visa.",
    metaDescription: "Favoriser la réussite aux concours, débloquer les dossiers de voyage et obtenir des promotions grâce aux rituels de faveur d'Afrique.",
    keyTakeaways: [
      "Attirer la bienveillance des jurys et examinateurs",
      "Dénouer les blocages administratifs et consulaires",
      "Amplifier la confiance en soi lors des entretiens décisifs",
      "Consécration de stylos et documents d'examen"
    ],
    content: [
      "Passer un concours prestigieux, postuler pour un poste de direction ou déposer une demande de visa sont des tournants existentiels majeurs où la compétence seule ne suffit pas toujours : il faut que le vent du destin souffle en votre faveur.",
      "Les rituels de chance et d'élévation sociale préparent le terrain invisible. En illuminant votre visage lors des entretiens et en attendrissant les cœurs des décideurs, ils écartent les préjugés et les rivalités de couloir.",
      "De nombreux fonctionnaires et étudiants au Cameroun, au Congo et au Sénégal ont vu leur carrière décoller après avoir reçu les bénédictions du Médium Louis Adama."
    ]
  },
  {
    id: 6,
    slug: "attirer-clientele-sauver-commerce-rituels-afrique",
    title: "Attirer la clientèle et sauver son commerce : rituels puissants d'Afrique",
    category: "Affaires & Commerce",
    cluster: "richesse",
    date: "04 Octobre 2026",
    readTime: "5 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(5).webp",
    excerpt: "Comment redresser un fonds de commerce en faillite et attirer une foule de nouveaux clients payants en quelques jours.",
    metaDescription: "Sauvez votre entreprise de la banqueroute grâce aux rituels africains de séduction commerciale et d'attraction de clientèle.",
    keyTakeaways: [
      "Les causes mystiques d'une désertion soudaine de clients",
      "Le rituel de réveil de l'étoile commerciale",
      "Protection du tiroir-caisse et des marchandises",
      "Témoignages de commerçants sauvés de la fermeture"
    ],
    content: [
      "Voir sa boutique ou son restaurant se vider jour après jour pendant que les dettes de loyer et de fournisseurs s'accumulent est un supplice que vivent trop de commerçants en silence.",
      "Dans 80% des cas d'effondrement brutal de chiffre d'affaires, une intervention occulte est à l'œuvre : un concurrent a enterré des éléments nocifs devant votre porte pour détourner les pas des passants.",
      "Le Maître Louis Adama procède d'abord à la neutralisation de ces poisons mystiques, puis procède à l'enfouissement spirituel du 'clou d'or' de réconciliation avec la clientèle. Les résultats ne tardent jamais à se faire ressentir."
    ]
  },
  {
    id: 7,
    slug: "pourquoi-argent-ne-reste-pas-mains-blocage-spirituel",
    title: "Pourquoi l'argent ne reste pas entre vos mains ? Comprendre le blocage spirituel",
    category: "Richesse & Abondance",
    cluster: "richesse",
    date: "02 Octobre 2026",
    readTime: "4 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(6).webp",
    excerpt: "Comprendre les racines énergétiques de la précarité chronique et apprendre à stabiliser sa fortune durablement.",
    metaDescription: "Découvrez les causes spirituelles des pertes continuelles d'argent et comment restaurer la rétention de la prospérité.",
    keyTakeaways: [
      "La notion de réservoir énergétique financier",
      "Les serments occultes et dettes transgénérationnelles",
      "Comment purifier son argent dès réception",
      "Conserver ses gains et bâtir un patrimoine solide"
    ],
    content: [
      "Avoir de l'argent qui brûle les doigts n'est pas qu'un simple manque d'éducation financière : c'est avant tout un déséquilibre spirituel. L'argent est une énergie vivante qui ne séjourne que là où la vibration de respect et de protection est présente.",
      "Si votre lignée a fait l'objet de malédictions prononcées lors de successions houleuses ou de jalousies familiales non apaisées, l'argent refuse d'y rester.",
      "La consultation avec le Médium Louis Adama révèle l'origine exacte de cette fuite. Par des rites de réconciliation avec les gardiens de la terre et de l'abondance, le réceptacle financier est réparé."
    ]
  },
  {
    id: 8,
    slug: "secrets-ancestraux-prosperite-abondance-familles",
    title: "Secrets ancestraux de prospérité et d'abondance pour les familles africaines",
    category: "Richesse & Abondance",
    cluster: "richesse",
    date: "30 Septembre 2026",
    readTime: "5 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(7).webp",
    excerpt: "Les traditions sacrées qui ont permis aux grandes familles royales et commerçantes d'Afrique de perpétuer leur richesse.",
    metaDescription: "Transmission des rituels traditionnels de bénédiction et d'abondance pour sécuriser l'avenir des générations futures.",
    keyTakeaways: [
      "La sanctuarisation de la prospérité familiale",
      "Les prières de gratitude aux aïeux bienfaiteurs",
      "Bâtir des affaires qui traversent les siècles",
      "La force de la protection mutuelle au sein du foyer"
    ],
    content: [
      "Depuis les empires du Bénin et du Mandé, les dynasties florissantes s'entouraient des plus éminents dignitaires spirituels pour veiller sur le grenier familial et maintenir l'opulence.",
      "Ces maîtres savaient canaliser les flux de la terre nourricière et protéger le foyer contre l'orgueil et la destruction extérieure.",
      "Le Maître Louis Adama réactive aujourd'hui ces protocoles secrets pour les familles modernes, leur garantissant un rayonnement matériel fondé sur la justice et la transmission d'un héritage béni."
    ]
  },
  {
    id: 9,
    slug: "proteger-richesse-biens-jalousie-sorcellerie",
    title: "Comment protéger sa richesse et ses biens contre la jalousie et la sorcellerie",
    category: "Protection & Blindage",
    cluster: "richesse",
    date: "28 Septembre 2026",
    readTime: "4 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(8).webp",
    excerpt: "Gagner de l'argent est une étape, le sécuriser contre les flèches invisibles en est une autre indispensable.",
    metaDescription: "Mettez vos maisons, véhicules et comptes bancaires à l'abri des attaques de jalousie grâce au blindage spirituel africain.",
    keyTakeaways: [
      "Pourquoi l'ascension sociale déclenche des attaques mystiques",
      "Les mécanismes de destruction de biens inexpliquée",
      "Le blindage patrimonial : comment ça fonctionne",
      "Assurer la sérénité totale de son entreprise"
    ],
    content: [
      "Chaque fois qu'un homme ou une femme progresse dans la société, il devient la cible d'attentions malveillantes. Pannes de véhicules à répétition, incendies mystérieux d'entrepôts ou blocages bancaires soudains sont souvent la traduction physique de flèches nocturnes.",
      "Le blindage de richesse posé par Maître Louis Adama agit comme un miroir réflecteur : chaque maléfice envoyé contre vos biens retourne immédiatement vers son auteur sans vous effleurer.",
      "Vous pouvez alors développer vos projets en toute quiétude et jouir du fruit de vos efforts sans angoisse."
    ]
  },
  {
    id: 10,
    slug: "travaux-spirituels-distance-richesse-afrique",
    title: "Travaux spirituels à distance pour la richesse : comment ça marche depuis l'Afrique Centrale",
    category: "Richesse & Abondance",
    cluster: "richesse",
    date: "26 Septembre 2026",
    readTime: "5 min",
    image: "/images/featured_video/rituel%20richesse%20prosperite%20(9).webp",
    excerpt: "Explication claire du fonctionnement des ondes spirituelles à distance pour les consultants du Gabon, du Congo et de la RDC.",
    metaDescription: "Comprendre l'efficacité redoutable des rituels de richesse réalisés à distance depuis le couvent du Maître Louis Adama.",
    keyTakeaways: [
      "Le principe de l'intrication spirituelle par la photo",
      "Les heures sacrées de travail au sanctuaire",
      "La réception des signes tangibles à des milliers de kilomètres",
      "Pourquoi la distance géographique n'atténue pas la puissance"
    ],
    content: [
      "Nombreux sont les frères et sœurs du Cameroun, du Gabon, du Congo-Brazzaville ou de Kinshasa qui se demandent comment une cérémonie accomplie au Bénin peut agir directement sur leur compte bancaire ou leur quotidien.",
      "En spiritualité haute, le monde matériel n'est que la projection d'un canevas vibratoire universel. La photo, le nom et la date de naissance constituent une adresse spirituelle exacte, semblable à une fréquence radio.",
      "Lorsque le Maître Louis Adama invoque les génies de la prospérité en votre faveur, l'énergie se déploie instantanément là où vous vous trouvez, dissolvant les obstacles avec la même vigueur qu'une séance en face à face."
    ]
  },

  // ================= CLUSTER 2 : AMOUR & RIVAUX (11 à 15) =================
  {
    id: 11,
    slug: "retour-affectif-rapide-faire-revenir-etre-aime",
    title: "Retour affectif rapide : comment faire revenir l'être aimé avec un voyant africain",
    category: "Retour Affectif",
    cluster: "amour",
    date: "24 Septembre 2026",
    readTime: "5 min",
    image: "/images/featured_video/retour%20affectif%20rapide%20(1).webp",
    excerpt: "Comment ranimer l'amour perdu et faire revenir votre partenaire même après des mois de séparation silencieuse.",
    metaDescription: "Faites revenir l'être aimé rapidement grâce au rituel de retour affectif africain garanti sans choc en retour par Maître Louis Adama.",
    keyTakeaways: [
      "Les secrets de l'envoûtement amoureux bienveillant",
      "Pourquoi l'ex ressent un besoin irrésistible de renouer",
      "Effacer les souvenirs douloureux et rancœurs",
      "Délais moyens constatés : entre 3 et 14 jours"
    ],
    content: [
      "La rupture sentimentale est l'une des épreuves les plus déchirantes de l'existence humaine. Le silence de l'être aimé, les messages sans réponse et l'éloignement physique plongent l'âme dans une détresse profonde.",
      "Le rituel de retour affectif rapide pratiqué par le grand Médium Voyant Louis Adama est réputé dans toute l'Afrique pour sa vitesse d'exécution. Par un travail sur deux bougies jumelles consacrées et l'utilisation de racines d'attachement, le cœur de l'ex-partenaire est adouci.",
      "L'être aimé commence par rêver de vous avec insistance, oublie les disputes et ressent un vide insupportable loin de votre présence. L'impulsion de reprendre contact sur WhatsApp ou par appel téléphonique devient alors incontrôlable.",
      "Ce travail garantit un retour sincère, respectueux et durable, sans altération de la conscience ni effet néfaste à long terme."
    ],
    featured: true
  },
  {
    id: 12,
    slug: "eloigner-definitivement-rivale-maitresse-foyer",
    title: "Comment éloigner définitivement une rivale ou une maîtresse de son foyer",
    category: "Couple & Rivaux",
    cluster: "amour",
    date: "22 Septembre 2026",
    readTime: "5 min",
    image: "/images/featured_video/retour%20affectif%20rapide%20(2).webp",
    excerpt: "Neutraliser l'influence destructrice d'une tierce personne et rétablir la fidélité exclusive dans son mariage.",
    metaDescription: "Rituel puissant pour séparer les amants rivaux et briser les envoûtements de séduction qui détruisent votre couple.",
    keyTakeaways: [
      "Identifier l'action occulte d'une rivale sur votre conjoint",
      "Le rituel de séparation par le poivre et la glace spirituelle",
      "Éteindre le désir extra-conjugal sans violence",
      "Rebâtir la confiance et la paix au sein du foyer"
    ],
    content: [
      "Lorsqu'un mari attentionné ou une épouse dévouée change subitement de comportement, devient irritable, méprisant et passe ses nuits dehors, il ne s'agit souvent pas d'un simple caprice : une maîtresse a souvent eu recours à des potions ou manipulations occultes.",
      "L'inaction face à une rivale déterminée conduit presque toujours à la dislocation totale du foyer et à l'abandon des enfants.",
      "Le Maître Louis Adama intervient avec le rituel d'éloignement définitif. Les énergies des amants illégitimes sont polarisées en opposition : l'attirance se transforme subitement en querelles stériles, en dégoût mutuel et en rupture définitive, renvoyant le conjoint vers son véritable foyer."
    ]
  },
  {
    id: 13,
    slug: "cadenas-amour-africain-rituel-fidelite-couple",
    title: "Cadenas d'amour africain et rituel de fidélité : protéger son union des tentations",
    category: "Retour Affectif",
    cluster: "amour",
    date: "20 Septembre 2026",
    readTime: "4 min",
    image: "/images/featured_video/retour%20affectif%20rapide%20(3).webp",
    excerpt: "Le cadenas d'amour traditionnel : l'ultime verrou mystique pour sceller la fidélité réciproque pour toujours.",
    metaDescription: "Découvrez le puissant cadenas d'amour africain pour verrouiller le cœur de votre partenaire et empêcher l'infidélité.",
    keyTakeaways: [
      "L'histoire millénaire du cadenas de fidélité africain",
      "Comment le rituel lie spirituellement les âmes sœurs",
      "Immunisation contre les charmes extérieurs",
      "Une garantie de stabilité pour le mariage"
    ],
    content: [
      "Le cadenas d'amour est une pièce maîtresse de la tradition initiatique béninoise. Forgé selon des canons précis et habillé de fils sacrés blanc et rouge, il symbolise l'union indissoluble des esprits.",
      "Une fois le nom des deux partenaires prononcé et le cadenas fermé lors de la transe rituelle, la clé est remise aux génies de l'eau ou scellée dans un réceptacle secret.",
      "Dès lors, les yeux de votre conjoint ne voient plus aucune autre femme ou aucun autre homme avec désir. Sa fidélité devient naturelle, inébranlable et joyeuse."
    ]
  },
  {
    id: 14,
    slug: "conjoint-distant-mauvaise-influence-debloquer-coeur",
    title: "Conjoint distant ou sous mauvaise influence : débloquer son cœur à distance",
    category: "Couple & Rivaux",
    cluster: "amour",
    date: "18 Septembre 2026",
    readTime: "4 min",
    image: "/images/featured_video/retour%20affectif%20rapide%20(4).webp",
    excerpt: "Comment libérer votre conjoint de l'emprise toxique de certains amis ou de la belle-famille mal intentionnée.",
    metaDescription: "Rétablissez le dialogue et l'amour avec un partenaire distant sous mauvaise influence grâce au désenvoûtement affectif.",
    keyTakeaways: [
      "Distinguer l'influence familiale de la manipulation occulte",
      "Le nettoyage de l'esprit du partenaire envoûté",
      "Le réveil des sentiments authentiques de départ",
      "Rétablir une communication complice et affectueuse"
    ],
    content: [
      "Il arrive fréquemment que la belle-famille refuse une union et entreprenne de manipuler le mari ou l'épouse pour provoquer le divorce. Des paroles empoisonnées répétées chaque jour finissent par créer un gouffre entre les époux.",
      "Le travail spirituel à distance de Maître Louis Adama dissout ces voiles de mensonge. L'esprit de votre conjoint s'éclaircit comme après un réveil d'un long cauchemar.",
      "Il prend conscience des manigances extérieures et revient vers vous avec tendresse et excuses sincères."
    ]
  },
  {
    id: 15,
    slug: "sauver-mariage-divorce-apaiser-conflits-foyer",
    title: "Sauver son mariage du divorce : apaiser les conflits et purifier le foyer",
    category: "Couple & Rivaux",
    cluster: "amour",
    date: "16 Septembre 2026",
    readTime: "5 min",
    image: "/images/featured_video/retour%20affectif%20rapide%20(5).webp",
    excerpt: "Même au bord de la signature de l'acte de divorce, les forces spirituelles peuvent restaurer la paix conjugale.",
    metaDescription: "Évitez le divorce et rétablissez une harmonie sacrée dans votre foyer grâce aux rituels d'apaisement conjugal africains.",
    keyTakeaways: [
      "Désamorcer les tensions et colères destructrices",
      "Purification de la maison et des chambres conjugales",
      "Le rituel de la douceur et du miel spirituel",
      "Retrouver l'intimité et la joie de vivre ensemble"
    ],
    content: [
      "Quand les avocats sont saisis et que la séparation semble inéluctable, beaucoup baissent les bras en pensant que tout est perdu. Pourtant, la source des discordes est souvent une entité de division logée dans la maison.",
      "Le rituel d'apaisement conjugal mené par Maître Louis Adama dépose une rosée de paix dans le cœur des deux époux. Les rancunes tenaces s'effacent pour laisser place au souvenir des engagements sacrés du mariage.",
      "Des centaines de foyers au Cameroun et en Côte d'Ivoire ont ainsi été sauvés in extremis de la ruine familiale."
    ]
  },

  // ================= CLUSTER 3 : AUTORITÉ & PROTECTION (16 à 20) =================
  {
    id: 16,
    slug: "medium-voyant-louis-adama-maitre-spirituel-africain",
    title: "Médium Voyant Louis Adama : la réputation d'un grand maître spirituel africain",
    category: "Autorité & Tradition",
    cluster: "protection-autorite",
    date: "14 Septembre 2026",
    readTime: "5 min",
    image: "/images/hero_arch/couvent%20marabout%20(3).webp",
    excerpt: "Parcours, initiation et engagement éthique de l'un des voyants les plus respectés du continent africain.",
    metaDescription: "Portrait et légitimité du Grand Médium Voyant Louis Adama, maître spirituel africain renommé au Bénin et dans toute l'Afrique.",
    keyTakeaways: [
      "Une lignée ininterrompue d'initiés du Fâ",
      "Plus de 25 ans d'expérience au service des âmes",
      "Une déontologie irréprochable axée sur la lumière",
      "Consultations directes sur WhatsApp dans 10 pays"
    ],
    content: [
      "Né au cœur d'une terre de haute spiritualité, le Médium Voyant Louis Adama a reçu dès son plus jeune âge l'onction des anciens. Formé aux arcanes secrets des plantes médicinales, de la géomancie et des invocations sacrées, il met son don au service des nécessiteux.",
      "Sa réputation dépasse largement les frontières du Bénin : des chefs d'entreprise, des ministres, des commerçants et des mères de famille font appel à lui depuis le Cameroun, la RDC, le Gabon ou la diaspora en France et aux États-Unis.",
      "Son credo est immuable : la franchise absolue lors de la voyance, l'efficacité garantie et le respect inviolable de la dignité humaine."
    ],
    featured: true
  },
  {
    id: 17,
    slug: "desenvoutement-puissant-7-signes-attaque-occulte",
    title: "Désenvoûtement puissant : 7 signes d'une attaque occulte et comment s'en libérer",
    category: "Protection & Blindage",
    cluster: "protection-autorite",
    date: "12 Septembre 2026",
    readTime: "5 min",
    image: "/images/hero_arch/protection%20purification.webp",
    excerpt: "Apprenez à déceler les symptômes indéniables d'une attaque mystique pour agir avant qu'il ne soit trop tard.",
    metaDescription: "Identifiez les 7 signes majeurs d'un envoûtement et découvrez le protocole de désenvoûtement puissant du voyant Louis Adama.",
    keyTakeaways: [
      "Cauchemars récurrents et morsures invisibles",
      "Fatigue inexpliquée au réveil et baisse d'énergie",
      "Échecs systématiques au dernier moment",
      "Le rituel de rupture des chaînes mystiques"
    ],
    content: [
      "Une attaque occulte ne se manifeste pas toujours de façon spectaculaire : elle commence souvent par une lente dégradation de votre bien-être et de votre chance. Sentir une présence lourde dans sa chambre, faire des cauchemars où l'on est pourchassé ou voir ses projets capoter à la dernière seconde sont des alertes majeures.",
      "Le désenvoûtement de haute intensité brise net les flèches noires. Par des bains d'herbes amères et des prières de déliaison, la victime retrouve sa pleine lumière et sa santé énergétique."
    ]
  },
  {
    id: 18,
    slug: "consultation-voyance-africaine-whatsapp-deroulement",
    title: "Consultation de voyance africaine par WhatsApp : déroulement et précision",
    category: "Autorité & Tradition",
    cluster: "protection-autorite",
    date: "10 Septembre 2026",
    readTime: "4 min",
    image: "/images/hero_arch/couvent%20marabout%20(4).webp",
    excerpt: "Comment se passe une séance de voyance directe sur WhatsApp avec le Maître Louis Adama en toute intimité.",
    metaDescription: "Tout savoir sur le déroulement d'une consultation de voyance africaine confidentielle par WhatsApp avec Maître Louis Adama.",
    keyTakeaways: [
      "Prise de contact instantanée et sans formalité inutile",
      "Les éléments requis (prénoms, date, photo récente)",
      "La restitution claire et sans détour du diagnostic",
      "La proposition de la solution rituelle adaptée"
    ],
    content: [
      "Grâce aux outils modernes, consulter un grand maître authentique ne nécessite plus de longs voyages coûteux et épuisants. WhatsApp permet un contact direct d'une fluidité et d'une confidentialité parfaites.",
      "Il vous suffit d'envoyer un message en exposant votre problème. Le Maître Louis Adama effectue ensuite le tirage du Fâ et vous livre les vérités sur votre passé, votre présent et les remèdes indispensables pour votre futur."
    ]
  },
  {
    id: 19,
    slug: "blindage-spirituel-familial-protection-maison",
    title: "Blindage spirituel familial : immuniser sa maison contre les attaques nocturnes",
    category: "Protection & Blindage",
    cluster: "protection-autorite",
    date: "08 Septembre 2026",
    readTime: "5 min",
    image: "/images/hero_arch/couvent%20marabout%20(5).webp",
    excerpt: "Protégez vos enfants, votre conjoint et votre maison contre les maris ou femmes de nuit et les sorts de ruine.",
    metaDescription: "Posez un blindage spirituel infranchissable sur votre famille et votre résidence avec les rituels de protection africains.",
    keyTakeaways: [
      "Les attaques nocturnes et entités de l'ombre",
      "La consécration des quatre coins de la concession",
      "La protection spécifique des femmes enceintes et des enfants",
      "La paix absolue retrouvée dans le sommeil"
    ],
    content: [
      "Le sanctuaire d'une famille est sa maison. Si le domicile n'est pas spirituellement protégé, les esprits errants et les jaloux peuvent y déposer des charges maléfiques qui perturbent le sommeil et la santé des enfants.",
      "Le blindage familial établit une barrière de feu spirituel tout autour de votre habitation. Aucun mauvais sort, aucun visiteur nocturne malveillant ne peut franchir le seuil de votre porte."
    ]
  },
  {
    id: 20,
    slug: "rituels-africains-garantis-sans-choc-en-retour",
    title: "Pourquoi les rituels du Médium Louis Adama sont garantis sans choc en retour",
    category: "Autorité & Tradition",
    cluster: "protection-autorite",
    date: "06 Septembre 2026",
    readTime: "4 min",
    image: "/images/hero_arch/couvent%20marabout%20(6).webp",
    excerpt: "La distinction fondamentale entre magie noire destructrice et haute spiritualité bienveillante de délivrance.",
    metaDescription: "Explication de la garantie zéro choc en retour des rituels du grand maître spirituel africain Louis Adama.",
    keyTakeaways: [
      "Comprendre la loi karmique d'action et de réaction",
      "Pourquoi les forces lumineuses ne génèrent aucune dette noire",
      "L'exclusion catégorique des pactes de sang et sacrifices négatifs",
      "La sérénité d'esprit garantie pour le consultant"
    ],
    content: [
      "La peur légitime de nombreuses personnes avant de faire appel à un voyant est de subir un choc en retour ou de devoir payer un lourd tribut des années plus tard. Cette crainte est justifiée lorsque l'on s'adresse à des charlatans pratiquant des rites impurs.",
      "Chez le Médium Louis Adama, chaque prière et chaque offrande sont vouées à la justice, à la pureté et à l'harmonie universelle. Vous n'avez aucune dette obscure : vous récoltez simplement la bénédiction légitime de votre destinée débloquée."
    ]
  }
];
