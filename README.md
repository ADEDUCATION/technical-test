# Test Technique — Développeur Fullstack

## 🎯 Contexte

Vous rejoignez l'équipe DSI-M d'AD Education, groupe d'enseignement supérieur regroupant plusieurs écoles (ESD, ESP, Condé, ECV, ING...).

Votre mission : développer un **quiz d'orientation** permettant aux futurs étudiants de découvrir quelle formation leur correspond le mieux.

---

## 📋 Objectif

Créer une **application web** composée de :

1. **Une page d'accueil** présentant le quiz
2. **Un quiz** de 7 questions
3. **Une page résultat** affichant la formation recommandée + alternatives

---

## 🛠️ Stack technique imposée

| Technologie                    | Obligatoire |
| ------------------------------ | ----------- |
| **Next.js 14+** (App Router)   | ✅          |
| **TypeScript**                 | ✅          |
| **Tailwind CSS**               | ✅          |
| **Bibliothèque de composants** | shadcn/ui   |

> Vous recevrez une clé NPM pour accéder à notre bibliothèque de composants basée sur shadcn/ui.

---

## 📦 Données fournies

Un fichier `schools-data.json` vous est fourni contenant :

- **5 écoles** avec leurs informations
- **48 formations** avec tags, niveaux, descriptions, débouchés
- **7 questions** avec options et tags associés
- **Système de scoring** pour le matching

### Structure simplifiée du JSON

```typescript
interface School {
  id: string
  name: string
  fullName: string
  domain: string
  color: string
  formations: Formation[]
}

interface Formation {
  id: string
  name: string
  level: 'Prépa' | 'Bachelor' | 'Bachelor 3' | 'Mastère' | 'Formation professionnelle'
  duration: string
  alternance: boolean
  tags: string[]
  description: string
  careers: string[]
}

interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    label: string
    scores: Record<string, number> // tag -> points
  }[]
}
```

---

## 🧮 Algorithme de matching

Le JSON contient une clé scoringRules qui documente la logique attendue. À toi de l'implémenter.
En résumé : chaque réponse porte des scores associés à des tags. Les formations ont elles aussi des tags. À toi de trouver comment relier les deux pour produire un classement.

Un conseil :
Suivre ces 3 étapes : initialisation, update lors de la réponse utilisateur, calcul du score par formation

### Classement

- Trier les formations par score décroissant
- La formation avec le meilleur score = recommandation principale
- Les 2-3 suivantes = alternatives

### Gestion des égalités (bonus)

En cas d'égalité, vous pouvez départager par :

- Priorité au niveau correspondant (si l'utilisateur a indiqué Bachelor ou Mastère)
- Priorité à l'alternance (si l'utilisateur l'a demandée)

---

## 📱 Fonctionnalités attendues

### Page d'accueil (se fier aux maquettes)

- [ ] Présentation du quiz (titre, description, value prop)
- [ ] Aperçu des 5 écoles (logos, domaines)
- [ ] Bouton "Commencer le quiz"

### Quiz (se fier aux maquettes)

- [ ] Affichage des 7 questions une par une (ou toutes visibles avec scroll)
- [ ] Sélection d'une réponse par question
- [ ] Indicateur de progression
- [ ] Possibilité de revenir en arrière
- [ ] Bouton "Voir mes résultats" (actif uniquement si toutes les questions sont répondues)

### Page résultat (se fier aux maquettes)

- [ ] Formation recommandée mise en avant avec :
  - Nom de la formation
  - École associée (avec sa couleur)
  - Niveau et durée
  - Badge alternance si applicable
  - Description
  - Débouchés métiers (3-5 max)
- [ ] 2-3 formations alternatives (affichage condensé)
- [ ] Bouton "Refaire le quiz"
- [ ] CTA fictifs : "Candidater", "Télécharger la brochure"

---

## ✅ Critères d'évaluation

Par ordre de priorité :

### 1. Structure projet Next.js

- Organisation des fichiers et dossiers
- Utilisation correcte de l'App Router
- Séparation des responsabilités (components, lib, types, etc.)

### 2. Typage TypeScript

- Interfaces/types bien définis
- Pas de `any`
- Typage des props, états, fonctions

### 3. Composants réutilisables

- Utilisation pertinente de la bibliothèque shadcn/ui
- Création de composants customs réutilisables
- Props bien pensées

### 4. Intégration de la maquette

- Fidélité au design fourni
- Attention aux détails (espacements, couleurs, typographie)

### 5. Gestion d'état

- État du quiz (réponses, question courante)
- Calcul du résultat
- Navigation entre les étapes

### 6. Responsive

- Mobile-first ou adaptation correcte
- Pas de scroll horizontal non voulu
- Éléments lisibles sur tous les écrans

---

## 🎁 Bonus (non obligatoires)

- [ ] Animations/transitions fluides entre les étapes
- [ ] Persistance des réponses (localStorage) pour reprendre le quiz
- [ ] Tests unitaires sur l'algorithme de scoring
- [ ] Accessibilité (navigation clavier, ARIA labels)
- [ ] Dark mode
- [ ] Score de confiance affiché (ex: "92% de compatibilité")

---

## 📁 Livrables attendus

1. **Repository Git** (GitHub, GitLab, ou archive ZIP)
   - Code source complet
   - README avec instructions d'installation et de lancement

2. **README** contenant :
   - Instructions d'installation (`npm install`, `npm run dev`)
   - Choix techniques expliqués (pourquoi telle architecture, tel pattern)
   - Difficultés rencontrées et solutions apportées
   - Temps passé (estimation honnête)

3. **Application fonctionnelle**
   - `npm run dev` doit lancer l'app sans erreur
   - `npm run build` doit compiler sans erreur

---

## ⏱️ Délai

Vous avez **1 semaine** à compter de la réception de ce brief.

Prenez le temps de bien faire — nous préférons un travail soigné à un travail bâclé mais "complet".

---

## 📎 Ressources fournies

- `schools-data.json` — Données des écoles, formations et questions
- `maquette.fig` ou lien Figma — Maquettes du designer
- Accès NPM à la bibliothèque de composants (clé fournie séparément)

---

## ❓ Questions ?

Si vous avez des questions sur le brief ou les attendus, n'hésitez pas à nous contacter par email. Nous répondrons sous 24h.

---

Bonne chance ! 🚀
