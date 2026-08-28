# Le Grand Tour des PMU

Site (nom provisoire — à trancher) créé par deux potes pour tester et noter
tous les PMU de France, en commençant par Paris. Ton goofy, second degré,
esthétique néon rétro-arcade / pixel art fusionnée avec le rouge PMU.

Voir le brief complet transmis au démarrage du projet pour le concept, la
direction artistique et le modèle de données détaillé.

## Démarrer en local

```bash
npm install
npm run dev
```

## Stack

- **React + Vite** pour le front.
- **Leaflet / react-leaflet** + tuiles OpenStreetMap pour la carte, avec un
  filtre CSS "vieux papier / néon" appliqué aux tuiles (`.pmu-map__tiles`
  dans `src/styles/theme.css`) plutôt qu'un autre fournisseur de tuiles.
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

### Nom du site

Pas encore choisi. `App.jsx` / `Header.jsx` utilisent "Le Grand Tour des
PMU" comme titre temporaire — à remplacer partout (titre HTML, header,
`package.json`) une fois tranché.

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
affiche alors "pas encore testé" à la place des notes).
