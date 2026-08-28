/**
 * Contenu de démonstration visuelle pour l'Étape 1 (shell) UNIQUEMENT.
 * Repris des libellés visibles sur le mockup (visual_reference.png) à seule fin
 * de peupler la mise en page. Ce n'est PAS le dataset réel : `pmu_paris_v1.json`
 * n'a pas encore d'adresses/coordonnées/notes vérifiées (voir Étape 2/3).
 * Ne jamais copier ces valeurs dans le dataset livré.
 */
export const DEMO_RANKING = [
  {
    id: "demo-1",
    rank: 1,
    name: "Le Balto",
    address: "67 Bd de Charonne, 75011 Paris",
    tested: true,
    globalScore: 4.2,
    hasPhoto: true,
  },
  {
    id: "demo-2",
    rank: 2,
    name: "Le Longchamp",
    address: "7 Rue de Clignancourt, 75018 Paris",
    tested: true,
    globalScore: 3.9,
    hasPhoto: true,
  },
  {
    id: "demo-3",
    rank: 3,
    name: "PMU La Rotonde",
    address: "1 Av. Daumesnil, 75012 Paris",
    tested: true,
    globalScore: 3.8,
    hasPhoto: true,
  },
  {
    id: "demo-4",
    rank: null,
    name: "Le Fontenoy",
    address: "80 Rue de la Convention, 75015 Paris",
    tested: false,
    globalScore: null,
    hasPhoto: false,
  },
  {
    id: "demo-5",
    rank: null,
    name: "PMU Voltaire",
    address: "239 Bd Voltaire, 75011 Paris",
    tested: false,
    globalScore: null,
    hasPhoto: false,
  },
];

export const DEMO_DETAIL = {
  name: "Le Balto",
  arrondissement: "Paris 11e",
  tested: true,
  criteria: [
    { label: "Ambiance du bar", score: 4 },
    { label: "Café / coup de rouge", score: 4 },
    { label: "Présence des habitués", score: 4 },
    { label: "Esprit turf", score: 4 },
  ],
  globalScore: 4.0,
};

// Compteur : nombre de PMU testés / total retenu. Valeurs de démo pour
// l'Étape 1 uniquement — la vraie valeur viendra du dataset vérifié (Étape 2).
export const DEMO_COUNTER = { tested: 3, total: 5 };
