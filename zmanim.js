// zmanim.js — 5787 (תשפ"ז)
// Source : tableau officiel Beth Yossef / Ohavei Tsion, Jérusalem
// Clé : "JJ/MM/AA" — Valeur : allumage des bougies + arvit (sortie)
const ZMANIM_TABLE = {
  // ——— TICHRI ———
  "12/09/26": { "allumage": "18:15", "arvit": "19:26" }, // Roch Hachana 1
  "13/09/26": { "allumage": "---",   "arvit": "19:25" }, // Roch Hachana 2 (dimanche)
  "19/09/26": { "allumage": "18:05", "arvit": "19:17" }, // Haazinou - Chabbat Chouva
  "21/09/26": { "allumage": "18:03", "arvit": "19:14" }, // Yom Kippour (lundi)
  "26/09/26": { "allumage": "17:56", "arvit": "19:07" }, // Soukot
  "03/10/26": { "allumage": "17:47", "arvit": "18:58" }, // Simha Torah
  "10/10/26": { "allumage": "17:38", "arvit": "18:50" }, // Béréchit

  // ——— HECHVAN ———
  "17/10/26": { "allumage": "17:30", "arvit": "18:42" }, // Noa'h
  "24/10/26": { "allumage": "16:23", "arvit": "17:35" }, // Lekh Lekha
  "31/10/26": { "allumage": "16:16", "arvit": "17:28" }, // Vayéra
  "07/11/26": { "allumage": "16:10", "arvit": "17:23" }, // Hayé Sarah

  // ——— KISLEV ———
  "14/11/26": { "allumage": "16:05", "arvit": "17:19" }, // Toldot
  "21/11/26": { "allumage": "16:02", "arvit": "17:16" }, // Vayétsé
  "28/11/26": { "allumage": "16:00", "arvit": "17:15" }, // Vayichla'h
  "05/12/26": { "allumage": "16:00", "arvit": "17:15" }, // Vayéchev - Hanouka

  // ——— TEVET ———
  "12/12/26": { "allumage": "16:00", "arvit": "17:16" }, // Miketz - Hanouka
  "19/12/26": { "allumage": "16:03", "arvit": "17:19" }, // Vayigach
  "26/12/26": { "allumage": "16:06", "arvit": "17:22" }, // Vayé'hi
  "02/01/27": { "allumage": "16:11", "arvit": "17:27" }, // Chémot

  // ——— CHEVAT ———
  "09/01/27": { "allumage": "16:16", "arvit": "17:32" }, // Va'éra - Roch Hodech
  "16/01/27": { "allumage": "16:22", "arvit": "17:38" }, // Bo
  "23/01/27": { "allumage": "16:28", "arvit": "17:44" }, // Béchala'h - Chira
  "30/01/27": { "allumage": "16:35", "arvit": "17:50" }, // Yitro
  "06/02/27": { "allumage": "16:41", "arvit": "17:55" }, // Michpatim

  // ——— ADAR I / ADAR II ———
  "13/02/27": { "allumage": "16:47", "arvit": "18:01" }, // Térouma
  "20/02/27": { "allumage": "16:53", "arvit": "18:07" }, // Tétsavé
  "27/02/27": { "allumage": "16:59", "arvit": "18:12" }, // Ki Tissa
  "06/03/27": { "allumage": "17:04", "arvit": "18:17" }, // Vayakhel - Chekalim
  "13/03/27": { "allumage": "17:09", "arvit": "18:22" }, // Pékoudé
  "20/03/27": { "allumage": "17:14", "arvit": "18:27" }, // Vayikra - Zakhor
  "27/03/27": { "allumage": "18:19", "arvit": "19:32" }, // Tsav - Para (heure d'été)
  "03/04/27": { "allumage": "18:23", "arvit": "19:37" }, // Chémini - Ha'hodech

  // ——— NISSAN ———
  "10/04/27": { "allumage": "18:28", "arvit": "19:42" }, // Tazria
  "17/04/27": { "allumage": "18:33", "arvit": "19:47" }, // Métsora - Chabbat Hagadol
  "22/04/27": { "allumage": "18:36", "arvit": "19:51" }, // Pessah (jeudi)
  "24/04/27": { "allumage": "18:38", "arvit": "19:53" }, // Chabbat Hol Hamoed Pessah
  "28/04/27": { "allumage": "18:41", "arvit": "19:56" }, // Chevi'i chel Pessah (mercredi)
  "01/05/27": { "allumage": "18:43", "arvit": "19:58" }, // A'haré Mot

  // ——— IYAR ———
  "08/05/27": { "allumage": "18:48", "arvit": "20:04" }, // Kédochim - Roch Hodech
  "15/05/27": { "allumage": "18:53", "arvit": "20:09" }, // Emor
  "22/05/27": { "allumage": "18:57", "arvit": "20:15" }, // Béhar
  "29/05/27": { "allumage": "19:02", "arvit": "20:20" }, // Bé'houkotaï
  "05/06/27": { "allumage": "19:06", "arvit": "20:24" }, // Bamidbar

  // ——— SIVAN ———
  "11/06/27": { "allumage": "19:09", "arvit": "---"   }, // Chavouot (vendredi)
  "12/06/27": { "allumage": "19:09", "arvit": "20:28" }, // Nasso
  "19/06/27": { "allumage": "19:12", "arvit": "20:30" }, // Béha'alotékha
  "26/06/27": { "allumage": "19:13", "arvit": "20:31" }, // Chéla'h
  "03/07/27": { "allumage": "19:13", "arvit": "20:31" }, // Kora'h

  // ——— TAMOUZ ———
  "10/07/27": { "allumage": "19:12", "arvit": "20:30" }, // Houkat
  "17/07/27": { "allumage": "19:10", "arvit": "20:27" }, // Balak
  "24/07/27": { "allumage": "19:07", "arvit": "20:22" }, // Pin'has
  "31/07/27": { "allumage": "19:02", "arvit": "20:17" }, // Matot - Massé

  // ——— AV ———
  "07/08/27": { "allumage": "18:56", "arvit": "20:11" }, // Devarim - 'Hazon
  "14/08/27": { "allumage": "18:50", "arvit": "20:03" }, // Va'et'hanan - Na'hamou
  "21/08/27": { "allumage": "18:42", "arvit": "19:55" }, // Ekev
  "28/08/27": { "allumage": "18:34", "arvit": "19:46" }, // Réé

  // ——— ELOUL ———
  "04/09/27": { "allumage": "18:25", "arvit": "19:37" }, // Choftim
  "11/09/27": { "allumage": "18:16", "arvit": "19:28" }, // Ki Tétsé
  "18/09/27": { "allumage": "18:07", "arvit": "19:18" }, // Ki Tavo
  "25/09/27": { "allumage": "17:58", "arvit": "19:09" }, // Nitsavim - Vayélekh

  // ——— TICHRI 5788 ———
  "02/10/27": { "allumage": "17:49", "arvit": "19:00" }, // Roch Hachana 5788 jour 1
  "03/10/27": { "allumage": "---",   "arvit": "18:59" }  // Roch Hachana 5788 jour 2 (dimanche)
};

// Renvoie les zmanim du samedi qui vient (format de clé : JJ/MM/AA)
function getZmanimForDate(dateObj = new Date()) {
    let d = new Date(dateObj);
    let diff = (6 - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + diff);

    const day_s   = String(d.getDate()).padStart(2, '0');
    const month_s = String(d.getMonth() + 1).padStart(2, '0');
    const year_s  = String(d.getFullYear()).slice(-2);
    const key = `${day_s}/${month_s}/${year_s}`;

    return ZMANIM_TABLE[key] || { "allumage": "--:--", "arvit": "--:--" };
}

// Ancien nom de variable utilisé par l'ADMIN
const zmanimData = ZMANIM_TABLE;
