# Misé, Pesé, Approuvé

Site créé par deux potes pour tester et noter tous les PMU de France, en
commençant par Paris. Ton goofy, second degré, esthétique néon rétro-arcade
/ pixel art fusionnée avec le rouge PMU.

Voir le brief complet transmis au démarrage du projet pour le concept, la
direction artistique et le modèle de données détaillé.

## Démarrer en local

```bash
npm install
npm run dev
```

## Stack

- **React + Vite** pour le front.
- **Carte vectorielle SVG maison** (`ParisVectorMap.jsx`) plutôt que
  Leaflet/tuiles OSM — voir la section "Carte vectorielle" ci-dessous pour
  le détail et les limites connues de cette approche.
- **JSON local** (`src/data/pmus.json`) pour stocker les fiches PMU — les
  deux fondateurs sont les seuls contributeurs pour l'instant, pas besoin
  de backend. Migration vers une base hébergée (Postgres/SQLite serveur) à
  prévoir le jour où le site passe public ; le schéma des fiches est déjà
  pensé pour ça (voir `src/data/criteres.js` et `src/utils/notes.js`).

## Ce qu'il reste à brancher

### Assets à déposer

Trois dossiers dans `public/assets/` attendent les vrais fichiers (chacun a
son propre `README.md` avec le détail) :

- `public/assets/mascot/horse_final.png` — la mascotte cheval-jockey.
- `public/assets/rain/anne_rain_final.png` — le portrait pixel art d'Anne
  pour l'effet de pluie au clic, **puis** le portrait du deuxième
  fondateur dès qu'il sera prêt (ajouter simplement une ligne dans
  `src/data/rainPortraits.js`, aucun autre changement de code requis).
- `public/assets/fiches/*.jpg` — les photos "normales" (pas pixelisées) des
  deux fondateurs ensemble, prises sur place à chaque PMU testé.

Tant que ces fichiers ne sont pas là, le site ne casse pas : il retombe sur
des émojis placeholder (`src/components/SafeImage.jsx`).

### Jingle

⚠️ Le fichier `Mario_1_up_-_QuickSounds_com.mp3` fourni en placeholder dans
le brief est le son "1-up" de Super Mario (Nintendo), protégé par le droit
d'auteur — il n'a **pas** été intégré au projet, y compris en dev. À la
place, `src/utils/jingle.js` génère un petit jingle rétro-arcade
entièrement en code via Web Audio API (arpège chiptune + accord final).
Zéro asset à sourcer, zéro risque de droits. Si vous préférez un vrai son
plus tard, remplacer le contenu de `playVictoryJingle()` par la lecture
d'un fichier libre de droits (freesound.org, opengameart.org).

### Liste des PMU parisiens

`src/data/pmus.json` ne contient pour l'instant que 6 PMU réels (nom +
adresse) trouvés via recherche web, avec des coordonnées approximatives —
**tous marqués `pas_teste`**. L'environnement de développement utilisé pour
générer ce projet n'a pas d'accès réseau vers `pmu.fr` ni vers les sites
d'annuaire (proxy de sortie qui bloque ces domaines), donc impossible de
compiler automatiquement la liste complète depuis le localisateur officiel
PMU comme prévu dans le brief. À faire manuellement (ou depuis un
environnement avec accès à ces sites) :

1. Parcourir le [localisateur PMU officiel](https://www.pmu.fr) par
   arrondissement.
2. Ajouter chaque point de vente dans `src/data/pmus.json` en suivant le
   schéma existant (voir plus bas).
3. Corriger/compléter les coordonnées au fil des visites — le brief prévoit
   déjà ça comme mode de fonctionnement normal.

La structure est déjà pensée pour scaler à toute la France (pas de logique
Paris-only en dur), donc pas de refonte nécessaire pour étendre plus tard.

### Carte vectorielle : ce qui est réel, ce qui est approximatif

`ParisVectorMap.jsx` dessine une carte SVG faite main plutôt que d'utiliser
des tuiles Leaflet/OSM, comme demandé. Le détail de ce qui est précis vs.
approximatif dans cette carte :

- **Contour de Paris** (`src/data/parisOutline.js`) : réel, source IGN/INSEE
  (Admin Express COG 2018) via le dépôt GitHub `gregoiredavid/france-geojson`.
- **Position des PMU sur la carte** : réelle, calculée par projection des
  vraies coordonnées lat/lng de chaque PMU (`src/utils/parisProjection.js`).
- **Numéros d'arrondissement affichés sur la carte** : approximatifs — ce
  sont des étiquettes positionnées sur des centroïdes connus (mairies
  d'arrondissement), **pas** un découpage précis en 20 polygones. La
  source officielle avec les vraies frontières (opendata.paris.fr, dataset
  "arrondissements") est inaccessible depuis l'environnement de
  développement utilisé pour générer ce projet (proxy de sortie qui
  bloque le domaine, ainsi que `gist.githubusercontent.com` où j'ai trouvé
  un mirror possible). À améliorer si cette donnée devient accessible —
  chercher un GeoJSON avec des propriétés `c_ar`/`l_ar` (20 features, un
  polygone par arrondissement) et remplacer `ARRONDISSEMENT_LABELS` par un
  vrai rendu de polygones.

## Modèle de données d'une fiche PMU

```json
{
  "id": "identifiant-slug-unique",
  "nom": "Nom du bar",
  "adresse": "Adresse complète, Paris",
  "lat": 48.8566,
  "lng": 2.3522,
  "statut": "teste | pas_teste",
  "photoFiche": "/assets/fiches/xxx.jpg | null",
  "notes": {
    "ambiance": 1,
    "cafeOuRouge": 1,
    "habitues": 1,
    "espritTurf": 1
  },
  "commentaire": "Texte goofy optionnel affiché sur la fiche."
}
```

`notes` doit rester à `null` tant que `statut` vaut `"pas_teste"`. La note
globale (moyenne simple des 4 critères) est calculée automatiquement par
`computeNoteGlobale()` dans `src/utils/notes.js` — ne pas la stocker en dur
dans le JSON.

## Interaction "pluie" au clic

Cliquer sur un PMU déjà testé (carte ou liste) déclenche le jingle
synthétisé + une pluie de portraits pendant ~1.6s (`RainEffect.jsx`). Rien
ne se passe sur un clic PMU non testé, à part l'ouverture de sa fiche (qui
affiche alors "pas encore testé" à la place des notes). Le toggle son
(coin bas-droit, `SoundToggle.jsx`) coupe uniquement le jingle — la pluie
visuelle continue de jouer même son coupé.

## Stratégie de build : fonctionnel d'abord, polish ensuite

Le brief distingue une cible visuelle finale (`vision_finale_reference.png`)
d'un premier prompt : on construit en deux temps. Ce qui est fait dans
cette vague 1 (fonctionnel) :

- Classement numéroté avec couronne 👑 sur le #1, `???` pour les PMU pas
  encore testés
- Vignette photo sur chaque carte (silhouette floutée + `?` en placeholder
  tant qu'il n'y a pas de vraie photo)
- Toggle son on/off
- Bandeau d'astuces qui tourne en bas de la liste (`src/data/tips.js`)
- Carte vectorielle SVG interactive (zoom molette, drag pour déplacer,
  boutons +/-/recentrer, marqueurs cliquables)

Ce qui reste pour les vagues de polish suivantes (pas fait ici, volontairement,
suivant la stratégie du brief) :

- Mascotte secondaire qui commente sur les fiches
- Animations de particules (comète, étincelles animées)
- Pluie de têtes avec traînée arc-en-ciel
- Bulles de dialogue / copywriting additionnel
