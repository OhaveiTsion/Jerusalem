// zmanim.js
const ZMANIM_TABLE = {
  "02/04/26": { "allumage": "18:23", "arvit": "19:36" },
  "04/04/26": { "allumage": "18:24", "arvit": "19:38" },
  "08/04/26": { "allumage": "18:27", "arvit": "19:41" },
  "11/04/26": { "allumage": "18:29", "arvit": "19:43" },
  "18/04/26": { "allumage": "18:34", "arvit": "19:48" },
  "25/04/26": { "allumage": "18:39", "arvit": "19:54" },
  "02/05/26": { "allumage": "18:44", "arvit": "19:59" },
  "09/05/26": { "allumage": "18:49", "arvit": "20:05" },
  "16/05/26": { "allumage": "18:54", "arvit": "20:10" },
  "22/05/26": { "allumage": "18:58", "arvit": "20:15" },
  "23/05/26": { "allumage": "18:58", "arvit": "20:16" },
  "30/05/26": { "allumage": "19:03", "arvit": "20:21" },
  "06/06/26": { "allumage": "19:07", "arvit": "20:25" },
  "13/06/26": { "allumage": "19:10", "arvit": "20:28" },
  "20/06/26": { "allumage": "19:12", "arvit": "20:30" },
  "27/06/26": { "allumage": "19:13", "arvit": "20:31" },
  "04/07/26": { "allumage": "19:13", "arvit": "20:31" },
  "11/07/26": { "allumage": "19:12", "arvit": "20:29" },
  "18/07/26": { "allumage": "19:10", "arvit": "20:26" },
  "25/07/26": { "allumage": "19:06", "arvit": "20:22" },
  "01/08/26": { "allumage": "19:01", "arvit": "20:16" },
  "08/08/26": { "allumage": "18:55", "arvit": "20:09" },
  "15/08/26": { "allumage": "18:48", "arvit": "20:02" },
  "22/08/26": { "allumage": "18:41", "arvit": "19:53" },
  "29/08/26": { "allumage": "18:32", "arvit": "19:45" },
  "05/09/26": { "allumage": "18:24", "arvit": "19:35" },
  "12/09/26": { "allumage": "18:15", "arvit": "19:26" },
  "13/09/26": { "allumage": "---", "arvit": "19:25" }
};

// Fonction utilitaire pour trouver le prochain vendredi
function getNextFridayKey() {
    let d = new Date();
    // Trouve le vendredi de la semaine en cours (ou le suivant si on est déjà samedi)
    d.setDate(d.getDate() + (5 - d.getDay() + 7) % 7);
    return d.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit'});
}
