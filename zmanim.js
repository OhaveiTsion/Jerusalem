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

// Fonction pour récupérer la date au format du tableau (ex: "18/04/26")
function getZmanimForDate(dateObj = new Date()) {
    let d = new Date(dateObj);
    let day = d.getDay();
    // On cherche le samedi
    let diff = (6 - day + 7) % 7;
    d.setDate(d.getDate() + diff);
    
    // On formate la clé exactement comme dans ton tableau : JJ/MM/AA
    const day_s = String(d.getDate()).padStart(2, '0');
    const month_s = String(d.getMonth() + 1).padStart(2, '0');
    const year_s = String(d.getFullYear()).slice(-2);
    const key = `${day_s}/${month_s}/${year_s}`;
    
    // On renvoie l'objet du tableau ou des tirets si pas trouvé
    return ZMANIM_TABLE[key] || { "allumage": "--:--", "arvit": "--:--" };
}

// Optionnel : si ton ADMIN utilise l'ancien nom de variable
const zmanimData = ZMANIM_TABLE;