# PRD SENIOR & INSTRUCTIONS AGENT IA : SITE MÉDIUM VOYANT LOUIS ADAMA
**Architecture Technique : Astro SSG + Tailwind CSS + Sanity CMS + Cloudflare Pages**  
**Client :** Médium Voyant Louis Adama – Grand Maître Spirituel et Voyant Africain  
**Siège Spirituel :** Sakété, Bénin (Travaux et rituels à distance en Afrique et diaspora)  
**Téléphone & WhatsApp :** `+229 01 96 96 07 92` (Format API : `2290196960792`)  
**Pôle Principal (P1) :** Rituels de richesse, de prospérité financière et de chance  
**Pôle Secondaire (P2) :** Retour affectif rapide et éloignement définitif des rivaux  
**Pays Cibles Prioritaires :**
- **Afrique Centrale :** Cameroun, Congo (Congo-Brazzaville), Gabon, République démocratique du Congo (RDC / Congo-Kinshasa)
- **Afrique de l'Ouest :** Burkina Faso, Côte d'Ivoire, Mali, Niger, Sénégal (+ Bénin / Diaspora)

---

## 1. Directives Clés & Règles Inviolables (CRO, SEO & UX)

### 1.1 Règle SEO Géographique : Zéro "à Sakété" dans les Titres & Sous-titres
> [!IMPORTANT]
> **Ne JAMAIS utiliser l'expression "à Sakété" dans les balises de titres (`<h1>`, `<h2>`, `<h3>`), dans les sous-titres (`<p>`) ou dans les métadonnées SEO.** Cette mention n'apporte aucun avantage SEO pour les recherches d'Afrique Centrale et de l'Ouest.  
> **Termes obligatoires à privilégier :** `africain`, `d'Afrique`, `grand voyant d'Afrique`, `maître spirituel africain`.  
> *Note :* La ville de Sakété au Bénin est mentionnée uniquement dans les informations d'autorité discrètes (adresse du siège dans le footer, mentions légales, et balisage Schema.org `addressLocality`).

### 1.2 Règle CRO : Textes Très Courts pour TOUS les Boutons (Micro-Copywriting)
Tous les boutons d'action (CTA) doivent comporter des **libellés ultra-courts, percutants et lisibles instantanément sur smartphone** :
- ✅ **Bouton WhatsApp Hero / Header :** `WhatsApp` ou `Écrire`
- ✅ **Bouton Appel Hero :** `Appeler`
- ✅ **Bouton Pôle Richesse :** `Activer` ou `Consulter`
- ✅ **Bouton Pôle Amour :** `Échanger` ou `Consulter`
- ✅ **Bouton Pôle Protection :** `Se protéger`
- ✅ **Boutons Hub de Contact :** `Discuter`, `Écrire`, `Contacter`
- ❌ *Interdit :* Phrases longues du type « Demandez votre rituel de prospérité sur WhatsApp en cliquant ici ».

### 1.3 Règle Mobile : Zéro Barre Fixe, Uniquement Bouton Flottant WhatsApp
- **Interdiction formelle d'ajouter une barre fixe en bas de l'écran sur mobile** (`bottom-bar` collée).
- **Uniquement le bouton flottant officiel WhatsApp** en bas à droite (`fixed bottom-5 right-5 z-50`), avec icône officielle verte `#25D366`, sans masquer le texte ni l'expérience de navigation.

### 1.4 Règle Zéro Formulaire
- **Interdiction stricte de balise `<form>` d'envoi d'e-mail.**
- Conversion 100 % directe vers WhatsApp (`https://wa.me/2290196960792?text=...`) ou appel direct (`tel:+2290196960792`).
- Remplacer les formulaires classiques par un **sélecteur de besoin WhatsApp interactif** (Hub WhatsApp) ou une modale directe sans friction.

---

## 2. Intégration Visuelle Basée sur le Template du Projet (`louis_adama_template.html`)

Le site s'appuie directement sur les composants et la direction artistique éprouvés du template présent dans le projet :

1. **Header avec Navigation Fluide (`#navbar`) :**
   - Brand textuelle élégante : `Médium Louis Adama` avec point doré/vert.
   - Menu desktop : Services, Valeurs, Processus, Galeries, Blog, Avis, FAQ.
   - Bouton d'action à droite ultra-court : `Contact` (icône WhatsApp + texte).
2. **Hero Section Sombre & Prestige (`.hero-bg`) :**
   - Fond sombre haut de gamme (`#131117`) avec halo lumineux et cercles concentriques SVG.
   - Sphère d'or/ambre (`.orange-sphere`) derrière la première ligne du titre `<h1>`.
   - **Grande Arche Architecturale Signature (`.arch-frame-hero`)** intégrant les visuels sacrés préparés dans `resized/hero_arch/`.
   - Compteurs d'autorité (Stats) : `15K+` Rituels accomplis, `98%` Réussite constatée, `25+` Années de don spirituel.
   - Boutons Hero ultra-courts : `WhatsApp` (vert officiel) et `Appeler`.
3. **Logos de Réassurance & Présence Panafricaine :**
   - Bandeau mettant en valeur les 9 pays d'intervention : Cameroun, Côte d'Ivoire, Gabon, RDC, Sénégal, Congo, Burkina Faso, Mali, Niger.
4. **Grille de 6 Prestations Majeures (3x2 Cards) :**
   - **Service 1 :** Rituel de Haute Richesse & Prospérité
   - **Service 2 (Card mise en avant / `.shadow-card-active`) :** Déblocage Financier & Chance aux Affaires
   - **Service 3 :** Retour Affectif Rapide de l'Être Aimé
   - **Service 4 :** Éloignement Définitif des Rivaux & Maîtresses
   - **Service 5 :** Bains Sacrés de Chance & Purification
   - **Service 6 :** Blindage Spirituel & Protection du Foyer
5. **Section "Nos Valeurs" avec Arche Claire & Accordéons :**
   - Visuel dans `.arch-frame-light`.
   - 4 accordéons interactifs (Secret absolu, Zéro choc en retour, Travail sur-mesure, Suivi quotidien).
6. **Processus en 4 Étapes Clés (Cartes avec numéros `01`, `02`, `03`, `04`) :**
   - 01. Contact Confidentiel
   - 02. Voyance & Diagnostic
   - 03. Cérémonie Sacrée
   - 04. Manifestation & Suivi
7. **Galerie Multimédia (Vidéos de rituels & Photos du sanctuaire) :**
   - Utilisation des images `resized/featured_video/` et `resized/cards/` pour présenter les rituels en immersion.
8. **Blog & Cocon Sémantique (3 cartes d'aperçu vers les 20 articles Sanity) :**
   - Affichage dynamique des derniers articles avec temps de lecture et catégories.
9. **Témoignages Clients Géolocalisés (3 Cartes avec étoiles ★★★★★) :**
   - Retours d'expérience authentiques du Cameroun (Douala), de Côte d'Ivoire (Abidjan) et du Gabon (Libreville).
10. **FAQ Accordéon Native HTML5 & Bannière CTA Finale.**

---

## 3. Matrice Sémantique & Mots-Clés Cibles (Afrique Centrale, de l'Ouest & Diaspora)

| Cluster Sémantique | Mot-Clé Pilier | Mots-Clés Secondaires (LSI) | Intention Cible |
| :--- | :--- | :--- | :--- |
| **1. Richesse, Prospérité & Chance (P1)** | **Rituel de richesse** | Rituel de prospérité financière, attirer l'argent rapidement, déblocage financier d'urgence, chance aux affaires, rituel pour commerçants, bain de prospérité africain, multiplication de chance | Transactionnelle urgente (Finances, commerce, blocage matériel) |
| **2. Amour, Couple & Rivaux (P2)** | **Retour affectif** | Faire revenir son ex rapidement, retour de l'être aimé, éloigner une rivale définitivement, rituel de fidélité, sauver son mariage, cadenas d'amour africain, séparer les amants rivaux | Transactionnelle relationnelle (Rupture, trahison, crise) |
| **3. Protection & Désenvoûtement** | **Désenvoûtement puissant** | Bain de purification et de chance, briser la sorcellerie, enlever le mauvais œil, protection contre les ennemis et jaloux, blindage spirituel | Sécurité et libération |
| **4. Marque & Autorité** | **Médium Voyant Louis Adama** | Grand voyant africain, maître spirituel africain, voyant réputé d'Afrique, voyance WhatsApp Afrique, vrai voyant puissant | Confiance et réputation panafricaine |

---

## 4. Données Structurées JSON-LD (`SchemaOrg.astro`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.medium-louis-adama.com/#voyant",
      "name": "Médium Voyant Louis Adama - Rituels de Richesse, Prospérité & Retour Affectif",
      "description": "Grand Médium Voyant spirituel africain. Spécialiste des rituels de richesse, de prospérité financière, de chance aux affaires, du retour affectif et de l'éloignement des rivaux. Travaux à distance dans toute l'Afrique.",
      "url": "https://www.medium-louis-adama.com/",
      "telephone": "+2290196960792",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sakété",
        "addressRegion": "Plateau",
        "addressCountry": "BJ"
      },
      "areaServed": [
        { "@type": "Country", "name": "Cameroun" },
        { "@type": "Country", "name": "Congo" },
        { "@type": "Country", "name": "Gabon" },
        { "@type": "Country", "name": "République démocratique du Congo" },
        { "@type": "Country", "name": "Burkina Faso" },
        { "@type": "Country", "name": "Côte d'Ivoire" },
        { "@type": "Country", "name": "Mali" },
        { "@type": "Country", "name": "Niger" },
        { "@type": "Country", "name": "Sénégal" },
        { "@type": "Country", "name": "Bénin" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "23:00"
      },
      "sameAs": [
        "https://wa.me/2290196960792"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.medium-louis-adama.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "En quoi consiste un rituel de richesse et de prospérité avec un maître spirituel africain ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le rituel de richesse purifie les voies financières, neutralise les blocages invisibles qui freinent vos revenus et attire magnétiquement la prospérité, la chance commerciale et l'abondance matérielle."
          }
        },
        {
          "@type": "Question",
          "name": "Les rituels à distance sont-ils efficaces au Cameroun, en RDC ou en Côte d'Ivoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, parfaitement. La vibration spirituelle s'effectue sur les noms, prénoms et photos avec une puissance égale à celle d'une présence au sanctuaire."
          }
        },
        {
          "@type": "Question",
          "name": "Le rituel de retour affectif éloigne-t-il également une rivale ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le travail combine la reconquête du cœur de l'être aimé avec une neutralisation totale des rivales et des influences extérieures néfastes."
          }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il un danger ou des conséquences négatives aux rituels ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aucun danger ni choc en retour. Le Médium Voyant Louis Adama utilise des forces spirituelles pures, des plantes sacrées et des bénédictions ancestrales protectrices."
          }
        }
      ]
    }
  ]
}
</script>
```

---

## 5. Contenu Textuel Complet de la Landing Page Monopage

> **Règle formelle :** Zéro "à Sakété" dans les `<h1>`, `<h2>`, `<h3>` et paragraphes d'accroche. Boutons avec libellés courts exclusivement.

---

### SECTION 1 : HERO
- **ID :** `id="hero"`
- **Badge d'autorité :**  
  *Grand Maître Spirituel et Voyant Africain – Consultations 7j/7*
- **Titre Principal (`<h1>`) :**  
  **Rituels de Richesse, Prospérité Financière, Chance et Retour Affectif d'Afrique**
- **Sous-titre (`<p>`) :**  
  Finances bloquées, commerce en difficulté ou souffrance amoureuse causée par une rivale ? Le grand Médium Voyant Louis Adama met la puissance des rituels traditionnels africains au service de votre réussite financière, de votre chance et de l'harmonie de votre couple.
- **Boutons d'Action (Libellés ultra-courts) :**
  - **Bouton 1 (Vert WhatsApp) :** `WhatsApp`
  - **Bouton 2 (Appel Direct) :** `Appeler`
- **Compteurs de réassurance :**
  - `15K+` Rituels Réalisés
  - `98%` Avis Favorables
  - `25+` Années d'Expérience

---

### SECTION 2 : PRÉSENTATION & AUTORITÉ
- **ID :** `id="values"`
- **Titre de section (`<h2>`) :**  
  **Médium Voyant Louis Adama : La Force Spirituelle d'un Grand Maître Africain**
- **Texte :**  
  Héritier d'une prestigieuse lignée de voyants et d'initiés, le Médium Voyant Louis Adama incarne la tradition spirituelle africaine la plus rigoureuse. Recommandé par des milliers de personnes au Cameroun, en Côte d'Ivoire, au Gabon, au Sénégal, en RDC et dans toute la diaspora, il intervient avec précision pour débloquer votre destinée financière et sécuriser votre bonheur affectif.
- **Les 4 Engagements Sacrés (Accordéons) :**
  1. **Voyance & Diagnostic Préalable :** Identification exacte de la source des blocages avant toute cérémonie.
  2. **Zéro Choc en Retour :** Des travaux de haute spiritualité bienveillante, sains et sans danger.
  3. **Secret Absolu :** Discrétion totale garantie sur votre vie et vos échanges.
  4. **Suivi Personnalisé :** Accompagnement direct sur WhatsApp jusqu'à la réussite complète.
- **Bouton :** `Consulter`

---

### SECTION 3 : NOS SERVICES (Grille 6 Prestations)
- **ID :** `id="residences"`
- **Titre de section (`<h2>`) :**  
  **Nos Services Spirituels Majeurs**
- **Sous-titre :**  
  Découvrez nos pôles d'action spirituelle dédiés à votre élévation matérielle et sentimentale :
- **Carte 1 (P1 - Richesse) :**  
  - Titre `<h3>` : *Rituel de Richesse & Prospérité*  
  - Texte : Attirez l'abondance, débloquez les opportunités d'argent et éliminez les pertes financières inexpliquées.  
  - Bouton : `Activer`
- **Carte 2 (P1 - Chance aux Affaires - Carte Active) :**  
  - Titre `<h3>` : *Chance aux Affaires & Commerce*  
  - Texte : Multipliez votre clientèle, remportez des marchés et sécurisez le triomphe de vos activités commerciales.  
  - Bouton : `Consulter`
- **Carte 3 (P2 - Amour) :**  
  - Titre `<h3>` : *Retour Affectif Rapide*  
  - Texte : Rallumez la flamme amoureuse de l'être aimé, effacez les rancœurs et rétablissez l'entente dans votre couple.  
  - Bouton : `Échanger`
- **Carte 4 (P2 - Rivaux) :**  
  - Titre `<h3>` : *Éloignement des Rivaux & Maîtresses*  
  - Texte : Neutralisez définitivement les tierces personnes qui menacent votre foyer et mettez fin aux tentations.  
  - Bouton : `Éloigner`
- **Carte 5 (Chance & Purification) :**  
  - Titre `<h3>` : *Bains de Chance & Déblocage*  
  - Texte : Nettoyage de l'aura pour attirer les faveurs, réussir concours, promotions et démarches de voyage.  
  - Bouton : `Purifier`
- **Carte 6 (Protection) :**  
  - Titre `<h3>` : *Blindage & Protection Spirituelle*  
  - Texte : Bouclier infranchissable contre la sorcellerie, le mauvais œil et les attaques de la jalousie.  
  - Bouton : `Protéger`

---

### SECTION 4 : NOTRE PROCESSUS EN 4 ÉTAPES
- **ID :** `id="process"`
- **Titre de section (`<h2>`) :**  
  **Votre Accompagnement en 4 Étapes Simples**
- **01. Échange Direct :** Présentation confidentielle de votre situation sur WhatsApp.
- **02. Étude de Voyance :** Examen sur photo et dates pour définir le rituel adéquat.
- **03. Réalisation des Travaux :** Cérémonies et consécrations spirituelles au sanctuaire.
- **04. Résultats & Suivi :** Manifestation concrète des bienfaits avec conseils quotidiens.
- **Bouton :** `Démarrer`

---

### SECTION 5 : AVIS & TÉMOIGNAGES
- **ID :** `id="testimonials"`
- **Titre de section (`<h2>`) :**  
  **Témoignages : Leurs Vies Ont Changé**
- **Avis 1 (Cameroun – Douala) :**  
  *« Mes affaires étaient au point mort et mes dettes s'accumulaient. Grâce au rituel de richesse et de chance du Médium Louis Adama, ma boutique a retrouvé une clientèle immense. Merci infiniment ! »*  
  — **Jean-Paul N. (Douala)**
- **Avis 2 (Côte d'Ivoire – Abidjan) :**  
  *« Une rivale avait brisé mon couple et mon mari était parti. Le rituel d'éloignement et de retour affectif a tout arrangé en moins de deux semaines. Notre foyer est en paix. »*  
  — **Aïssatou K. (Abidjan)**
- **Avis 3 (Gabon – Libreville) :**  
  *« Après des années de blocages inexpliqués, le bain de purification m'a permis d'obtenir enfin ma promotion tant attendue. Une force spirituelle remarquable. »*  
  — **Sylvestre M. (Libreville)**

---

### SECTION 6 : FOIRE AUX QUESTIONS (FAQ NATIVE)
- **ID :** `id="faq"`
- **Titre de section (`<h2>`) :**  
  **Questions Fréquentes sur les Travaux Spirituels**
- **Q1 : Comment se déroule un rituel à distance ?**  
  *R : Par l'envoi de vos informations (noms, photos), les invocations agissent directement sur votre fréquence spirituelle avec la même efficacité qu'en présentiel.*
- **Q2 : Quel est le délai moyen pour voir les résultats ?**  
  *R : Les premiers signes d'ouverture financière ou de retour amoureux se manifestent généralement entre 3 et 14 jours selon la complexité du cas.*
- **Q3 : Les rituels présentent-ils un risque ?**  
  *R : Absolument aucun. Tous les travaux sont guidés par des rituels purs, sans pacte négatif ni répercussion nocive.*

---

### SECTION 7 : BANNIÈRE D'ACTION & HUB WHATSAPP
- **Titre (`<h2>`) :**  
  **Débloquez Votre Avenir Dès Aujourd'hui**
- **Sous-titre :**  
  Prenez contact en toute confidentialité pour recevoir une réponse rapide.
- **Boutons Hub rapides (Libellés très courts) :**
  - 💰 *Richesse & Affaires :* `WhatsApp`
  - 💍 *Retour Affectif :* `WhatsApp`
  - 🛡️ *Désenvoûtement :* `WhatsApp`
  - 📞 *Appel direct :* `Appeler`
- **Footer :**  
  Mention discrète du siège à Sakété (Bénin), couverture panafricaine (Cameroun, RDC, Gabon, Côte d'Ivoire, Sénégal, Congo, Burkina Faso, Mali, Niger), politique de confidentialité et respect du secret spirituel.

---

## 6. Plan Éditorial SEO : 20 Articles de Blog (Cocon Sémantique Sanity)

> **Règle formelle dans les titres H1 et Slugs :** Zéro "à Sakété". Utiliser "béninois", "africain", ou "d'Afrique".

### Cluster 1 : Richesse, Prospérité Financière & Chance (Articles 1 à 10 - P1)
1. **H1 :** *Rituel de richesse africain : comment débloquer sa situation financière rapidement* (Slug: `rituel-de-richesse-africain-prosperite-financiere`)
2. **H1 :** *Comment attirer l'argent et la chance dans ses affaires : secrets des grands commerçants* (Slug: `attirer-argent-chance-affaires-commerce`)
3. **H1 :** *Bain de purification et de chance : éliminer les blocages d'argent héréditaires* (Slug: `bain-purification-chance-blocages-argent`)
4. **H1 :** *Déblocage financier rapide : neutraliser les causes occultes des pertes d'argent* (Slug: `deblocage-financier-rapide-causes-occultes`)
5. **H1 :** *Rituel de chance aux concours, promotions et voyages : ouvrir les portes du destin* (Slug: `rituel-chance-concours-promotions-voyages`)
6. **H1 :** *Attirer la clientèle et sauver son commerce : rituels puissants d'Afrique* (Slug: `attirer-clientele-sauver-commerce-rituels-afrique`)
7. **H1 :** *Pourquoi l'argent ne reste pas entre vos mains ? Comprendre le blocage spirituel* (Slug: `pourquoi-argent-ne-reste-pas-mains-blocage-spirituel`)
8. **H1 :** *Secrets ancestraux de prospérité et d'abondance pour les familles africaines* (Slug: `secrets-ancestraux-prosperite-abondance-familles`)
9. **H1 :** *Comment protéger sa richesse et ses biens contre la jalousie et la sorcellerie* (Slug: `proteger-richesse-biens-jalousie-sorcellerie`)
10. **H1 :** *Travaux spirituels à distance pour la richesse : comment ça marche depuis l'Afrique Centrale* (Slug: `travaux-spirituels-distance-richesse-afrique`)

### Cluster 2 : Retour Affectif, Couple & Rivaux (Articles 11 à 15 - P2)
11. **H1 :** *Retour affectif rapide : comment faire revenir l'être aimé avec un voyant africain* (Slug: `retour-affectif-rapide-faire-revenir-etre-aime`)
12. **H1 :** *Comment éloigner définitivement une rivale ou une maîtresse de son foyer* (Slug: `eloigner-definitivement-rivale-maitresse-foyer`)
13. **H1 :** *Cadenas d'amour africain et rituel de fidélité : protéger son union des tentations* (Slug: `cadenas-amour-africain-rituel-fidelite-couple`)
14. **H1 :** *Conjoint distant ou sous mauvaise influence : débloquer son cœur à distance* (Slug: `conjoint-distant-mauvaise-influence-debloquer-coeur`)
15. **H1 :** *Sauver son mariage du divorce : apaiser les conflits et purifier le foyer* (Slug: `sauver-mariage-divorce-apaiser-conflits-foyer`)

### Cluster 3 : Autorité du Médium, Désenvoûtement & Protection (Articles 16 à 20)
16. **H1 :** *Médium Voyant Louis Adama : la réputation d'un grand maître spirituel africain* (Slug: `medium-voyant-louis-adama-maitre-spirituel-africain`)
17. **H1 :** *Désenvoûtement puissant : 7 signes d'une attaque occulte et comment s'en libérer* (Slug: `desenvoutement-puissant-7-signes-attaque-occulte`)
18. **H1 :** *Consultation de voyance africaine par WhatsApp : déroulement et précision* (Slug: `consultation-voyance-africaine-whatsapp-deroulement`)
19. **H1 :** *Blindage spirituel familial : immuniser sa maison contre les attaques nocturnes* (Slug: `blindage-spirituel-familial-protection-maison`)
20. **H1 :** *Pourquoi les rituels du Médium Louis Adama sont garantis sans choc en retour* (Slug: `rituels-africains-garantis-sans-choc-en-retour`)

---

## 7. Checklist de Validation Finale du Projet

- [ ] **Zéro "à Sakété" dans les titres :** Vérification stricte des `<h1>`, `<h2>`, `<h3>`, méta-titres et slugs d'articles.
- [ ] **Boutons très courts :** Tous les boutons respectent la règle du micro-copywriting (`WhatsApp`, `Appeler`, `Consulter`, `Échanger`, `Activer`).
- [ ] **Zéro barre fixe mobile :** Seul le bouton rond officiel WhatsApp (`fixed bottom-5 right-5 z-50`) est présent sur mobile.
- [ ] **Zéro formulaire classique :** Navigation fluide sans `<form>` d'e-mail, redirection WhatsApp instantanée (`+229 01 96 96 07 92`).
- [ ] **Cohérence Graphique avec le Template :** Intégration de la structure d'arche (`.arch-frame-hero`, `.arch-frame-light`), de la palette prestige et des images dans `resized/`.
- [ ] **Maillage Panafricain Intégré :** Présence des 9 pays cibles prioritaires dans le contenu, les avis et le schéma `areaServed`.
