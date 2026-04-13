// zmanim.js
const ZMANIM_TABLE = {
    "17/04": { allumage: "18:34", arvit: "19:48" },
    "24/04": { allumage: "18:39", arvit: "19:54" },
    "01/05": { allumage: "18:44", arvit: "20:00" },
    "08/05": { allumage: "18:49", arvit: "20:06" },
    "15/05": { allumage: "18:54", arvit: "20:12" },
    "22/05": { i: "22/05", allumage: "18:59", arvit: "20:17" },
    "29/05": { allumage: "19:04", arvit: "20:23" },
    "05/06": { allumage: "19:08", arvit: "20:28" },
    "12/06": { allumage: "19:12", arvit: "20:32" },
    "19/06": { allumage: "19:15", arvit: "20:35" },
    "26/06": { allumage: "19:17", arvit: "20:37" }
};

// Fonction utilitaire pour trouver le prochain vendredi
function getNextFridayKey() {
    let d = new Date();
    // Trouve le vendredi de la semaine en cours (ou le suivant si on est déjà samedi)
    d.setDate(d.getDate() + (5 - d.getDay() + 7) % 7);
    return d.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit'});
}
