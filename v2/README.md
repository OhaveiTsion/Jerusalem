# Site Ohavei Tsion — v2 (test, pas en production)

Même API et mêmes données que la v1 : la v1 continue de fonctionner sans changement.

- `v2/index.html` : page publique (même visuel + bloc « Cours de la semaine » + dernière mise à jour + mode hors connexion)
- `v2/ADMIN.html` : édition avec barre de mise en forme, cours de la semaine, résumé des changements avant envoi
- `v2/fmt.js` : lecture/écriture de la mise en forme (partagé par les deux pages)
- `v2/parasha.js` : noms des parashiot en français

## Mise en forme (texte stocké)
`**gras**` `{r}rouge{/r}` `{i}italique{/i}` `{u}souligné{/u}` `{c:#f1c40f}couleur{/c}`
`{s:sm|lg|xl}taille{/s}` `{f:serif|stam}police{/f}` — les anciennes données (v1) restent valides.

## Données nouvelles (ignorées par la v1)
- `shiourim_semaine` : `{intitule, rows:[{label,val}]}`
- `maj` : date ISO de la dernière publication depuis l'ADMIN v2

## Passage en production
Déplacer `v2/index.html`, `ADMIN.html`, `fmt.js`, `parasha.js` à la racine, remplacer `../zmanim.js` par `zmanim.js`
et `../icon-192.png` par `icon-192.png`, remettre le manifest et le service worker.
Attention : l'ADMIN v1 efface `shiourim_semaine` et `maj` s'il est utilisé après la bascule.
