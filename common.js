/* Shared data + tile rendering. No network calls, no trackers, no external assets. */
(function () {
  'use strict';
  var DATA={
 "groups": [
  {
   "id": "start",
   "en": "Start here: any time period",
   "es": "Empieza aquí: cualquier época",
   "sen": "Start Here",
   "ses": "Empieza aquí",
   "dates_en": "Works for every time period",
   "dates_es": "Sirve para cualquier época",
   "color": "#e69a00",
   "glyph": "star",
   "sections": [
    {
     "title_en": null,
     "title_es": null,
     "ids": [
      3,
      2,
      42,
      5
     ]
    },
    {
     "title_en": "More sites for any time period",
     "title_es": "Más sitios para cualquier época",
     "ids": [
      41,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50
     ]
    }
   ]
  },
  {
   "id": "prehistoric",
   "en": "Prehistory & Dinosaurs",
   "es": "Prehistoria y dinosaurios",
   "sen": "Prehistory",
   "ses": "Prehistoria",
   "dates_en": "Before 3000 BC",
   "dates_es": "Antes del 3000 a. C.",
   "color": "#2a7f62",
   "glyph": "bone",
   "sections": [
    {
     "ids": [
      36,
      37,
      38
     ]
    }
   ]
  },
  {
   "id": "ancient",
   "en": "Ancient World",
   "es": "El mundo antiguo",
   "sen": "Ancient World",
   "ses": "Mundo antiguo",
   "dates_en": "3000 BC–AD 500",
   "dates_es": "3000 a. C.–500 d. C.",
   "color": "#b5651d",
   "glyph": "pyramid",
   "sections": [
    {
     "ids": [
      6,
      7,
      8,
      9
     ]
    }
   ]
  },
  {
   "id": "middle",
   "en": "Middle Ages & Explorers",
   "es": "Edad Media y exploradores",
   "sen": "Middle Ages",
   "ses": "Edad Media",
   "dates_en": "AD 500–1600",
   "dates_es": "500–1600 d. C.",
   "color": "#6a4c93",
   "glyph": "ship",
   "sections": [
    {
     "ids": [
      23,
      24,
      25
     ]
    }
   ]
  },
  {
   "id": "usa",
   "en": "Colonial America & Wild West",
   "es": "América colonial y Lejano Oeste",
   "sen": "Colonial America",
   "ses": "América colonial",
   "dates_en": "1600–1900",
   "dates_es": "1600–1900",
   "color": "#b23a48",
   "glyph": "flag",
   "sections": [
    {
     "ids": [
      4,
      10,
      11,
      12,
      13,
      14,
      15,
      21,
      29,
      30,
      1,
      16,
      17,
      19,
      22,
      27
     ]
    }
   ]
  },
  {
   "id": "modern",
   "en": "Modern World",
   "es": "El mundo moderno",
   "sen": "Modern World",
   "ses": "Mundo moderno",
   "dates_en": "1900–Today",
   "dates_es": "1900–hoy",
   "color": "#1b7f8c",
   "glyph": "rocket",
   "sections": [
    {
     "ids": [
      18,
      20,
      26,
      28,
      31,
      32,
      33,
      34,
      35,
      39,
      40
     ]
    }
   ]
  }
 ],
 "sites": {
  "1": {
   "id": 1,
   "name": "Colorado Encyclopedia",
   "url": "https://coloradoencyclopedia.org/",
   "domain": "coloradoencyclopedia.org",
   "glyph": "mountain",
   "en": "Colorado history and people",
   "es": "Historia y personas de Colorado",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "2": {
   "id": 2,
   "name": "National Geographic Education",
   "url": "https://education.nationalgeographic.org/",
   "domain": "education.nationalgeographic.org",
   "glyph": "globe",
   "en": "Maps, photos and ancient cultures",
   "es": "Mapas, fotos y culturas antiguas",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "start"
  },
  "3": {
   "id": 3,
   "name": "Smithsonian Kids",
   "url": "https://www.si.edu/kids",
   "domain": "si.edu",
   "glyph": "building",
   "en": "Museum stories, games and collections",
   "es": "Historias, juegos y colecciones de museos",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "4": {
   "id": 4,
   "name": "Ben's Guide to the U.S. Government",
   "url": "https://bensguide.gpo.gov/",
   "domain": "bensguide.gpo.gov",
   "glyph": "flag",
   "en": "U.S. government and history basics",
   "es": "Lo básico del gobierno y la historia de EE. UU.",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "5": {
   "id": 5,
   "name": "PBS LearningMedia",
   "url": "https://www.pbslearningmedia.org/",
   "domain": "pbslearningmedia.org",
   "glyph": "play",
   "en": "Videos and activities",
   "es": "Videos y actividades",
   "login": "optional",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "6": {
   "id": 6,
   "name": "British Museum: Ancient Egypt (ages 7-11)",
   "url": "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-egypt",
   "domain": "britishmuseum.org",
   "glyph": "pyramid",
   "en": "Pyramids, pharaohs and daily life",
   "es": "Pirámides, faraones y vida diaria",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "ancient"
  },
  "7": {
   "id": 7,
   "name": "British Museum: Ancient Greece (ages 7-11)",
   "url": "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-greece",
   "domain": "britishmuseum.org",
   "glyph": "temple",
   "en": "Greek life, democracy and the Olympics",
   "es": "Vida griega, democracia y Olimpiadas",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "ancient"
  },
  "8": {
   "id": 8,
   "name": "British Museum: Ancient Rome (ages 7-11)",
   "url": "https://www.britishmuseum.org/learn/schools/ages-7-11/ancient-rome",
   "domain": "britishmuseum.org",
   "glyph": "temple",
   "en": "Roman army, daily life and buildings",
   "es": "Ejército romano, vida diaria y edificios",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "ancient"
  },
  "9": {
   "id": 9,
   "name": "Smithsonian: Ancient Egypt Spotlight",
   "url": "https://www.si.edu/spotlight/ancient-egypt",
   "domain": "si.edu",
   "glyph": "pyramid",
   "en": "Mummies, artifacts and the afterlife",
   "es": "Momias, objetos y la vida después de la muerte",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "ancient"
  },
  "10": {
   "id": 10,
   "name": "Mount Vernon: Education",
   "url": "https://www.mountvernon.org/education",
   "domain": "mountvernon.org",
   "glyph": "building",
   "en": "George Washington and the Revolution",
   "es": "George Washington y la Revolución estadounidense",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "11": {
   "id": 11,
   "name": "Colonial Williamsburg: Explore from Home",
   "url": "https://www.colonialwilliamsburg.org/discover/resource-hub/",
   "domain": "colonialwilliamsburg.org",
   "glyph": "building",
   "en": "Colonial life: games, videos and timelines",
   "es": "Vida colonial: juegos, videos y líneas de tiempo",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "12": {
   "id": 12,
   "name": "Jamestown-Yorktown Foundation: Learn",
   "url": "https://www.jyfmuseums.org/learn",
   "domain": "jyfmuseums.org",
   "glyph": "ship",
   "en": "Jamestown, Yorktown and the Revolution",
   "es": "Jamestown, Yorktown y la Revolución estadounidense",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "13": {
   "id": 13,
   "name": "Plimoth Patuxet Museums",
   "url": "https://plimoth.org/",
   "domain": "plimoth.org",
   "glyph": "ship",
   "en": "Pilgrims and the Wampanoag people",
   "es": "Los peregrinos y el pueblo wampanoag",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "14": {
   "id": 14,
   "name": "Museum of the American Revolution: Learn & Explore",
   "url": "https://www.amrevmuseum.org/learn-and-explore",
   "domain": "amrevmuseum.org",
   "glyph": "flag",
   "en": "Revolutionary War people and objects",
   "es": "Personas y objetos de la Revolución estadounidense",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "15": {
   "id": 15,
   "name": "The Franklin Institute: Benjamin Franklin",
   "url": "https://www.fi.edu/en/science-and-education/benjamin-franklin",
   "domain": "fi.edu",
   "glyph": "scroll",
   "en": "Ben Franklin's life and inventions",
   "es": "La vida y los inventos de Ben Franklin",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "16": {
   "id": 16,
   "name": "National Park Service: Kids in Parks",
   "url": "https://www.nps.gov/kids/",
   "domain": "nps.gov",
   "glyph": "tree",
   "en": "Parks, history and Junior Ranger fun",
   "es": "Parques, historia y diversión de Junior Ranger",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "17": {
   "id": 17,
   "name": "National Park Service: Gateway Arch History & Culture",
   "url": "https://www.nps.gov/jeff/learn/historyculture/index.htm",
   "domain": "nps.gov",
   "glyph": "arch",
   "en": "Pioneers and westward expansion",
   "es": "Pioneros y expansión hacia el oeste",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "18": {
   "id": 18,
   "name": "National Park Service: Civil Rights",
   "url": "https://www.nps.gov/subjects/civilrights/index.htm",
   "domain": "nps.gov",
   "glyph": "star",
   "en": "Civil rights people, places and events",
   "es": "Personas, lugares y eventos de los derechos civiles",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "modern"
  },
  "19": {
   "id": 19,
   "name": "Native Knowledge 360 (Smithsonian)",
   "url": "https://americanindian.si.edu/nk360",
   "domain": "americanindian.si.edu",
   "glyph": "book",
   "en": "Native American history told by Native voices",
   "es": "Historia de los pueblos nativos contada por voces nativas",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "usa"
  },
  "20": {
   "id": 20,
   "name": "NMAAHC: Teaching and Learning",
   "url": "https://nmaahc.si.edu/learn/educators/teaching-and-learning",
   "domain": "nmaahc.si.edu",
   "glyph": "star",
   "en": "African American history and civil rights",
   "es": "Historia afroamericana y derechos civiles",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "modern"
  },
  "21": {
   "id": 21,
   "name": "iCivics",
   "url": "https://ed.icivics.org/",
   "domain": "ed.icivics.org",
   "glyph": "flag",
   "en": "Civics games, lessons and videos (most games are for grades 6-12)",
   "es": "Juegos, lecciones y videos de educación cívica (la mayoría de los juegos son para los grados 6 a 12)",
   "login": "optional",
   "teacher": true,
   "spanish": false,
   "group": "usa"
  },
  "22": {
   "id": 22,
   "name": "History Colorado",
   "url": "https://www.historycolorado.org/",
   "domain": "historycolorado.org",
   "glyph": "mountain",
   "en": "Colorado history, mining and Native peoples",
   "es": "Historia de Colorado, minería y pueblos nativos",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "usa"
  },
  "23": {
   "id": 23,
   "name": "BBC Bitesize: KS2 History",
   "url": "https://www.bbc.co.uk/bitesize/subjects/zcw76sg",
   "domain": "bbc.co.uk",
   "glyph": "globe",
   "en": "Vikings, Maya, Greece, Egypt and more",
   "es": "Vikingos, mayas, Grecia, Egipto y más",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "middle"
  },
  "24": {
   "id": 24,
   "name": "British Museum: Schools Ages 7-11 hub",
   "url": "https://www.britishmuseum.org/learn/schools/ages-7-11",
   "domain": "britishmuseum.org",
   "glyph": "building",
   "en": "World cultures with objects and activities",
   "es": "Culturas del mundo con objetos y actividades",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "middle"
  },
  "25": {
   "id": 25,
   "name": "Asia for Educators (Columbia University)",
   "url": "https://afe.easia.columbia.edu/",
   "domain": "afe.easia.columbia.edu",
   "glyph": "globe",
   "en": "China and East Asia timelines",
   "es": "Líneas de tiempo de China y Asia oriental",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "middle"
  },
  "26": {
   "id": 26,
   "name": "The National WWII Museum: Student Resources",
   "url": "https://www.nationalww2museum.org/students-teachers/student-resources",
   "domain": "nationalww2museum.org",
   "glyph": "star",
   "en": "World War II stories and timelines",
   "es": "Historias y líneas de tiempo de la Segunda Guerra Mundial",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "modern"
  },
  "27": {
   "id": 27,
   "name": "Library of Congress: Classroom Materials",
   "url": "https://www.loc.gov/classroom-materials/",
   "domain": "loc.gov",
   "glyph": "scroll",
   "en": "Old photos, maps and documents",
   "es": "Fotos, mapas y documentos antiguos",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "usa"
  },
  "28": {
   "id": 28,
   "name": "Library of Congress: For Teachers",
   "url": "https://www.loc.gov/programs/teachers/",
   "domain": "loc.gov",
   "glyph": "scroll",
   "en": "Primary sources: Civil War, 1920s and more",
   "es": "Fuentes primarias: Guerra Civil, años 1920 y más",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "modern"
  },
  "29": {
   "id": 29,
   "name": "National Archives: Educator Resources",
   "url": "https://www.archives.gov/education",
   "domain": "archives.gov",
   "glyph": "scroll",
   "en": "Founding documents and primary sources",
   "es": "Documentos de la fundación y fuentes primarias",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "usa"
  },
  "30": {
   "id": 30,
   "name": "DocsTeach (National Archives)",
   "url": "https://www.docsteach.org/",
   "domain": "docsteach.org",
   "glyph": "scroll",
   "en": "Interactive document activities",
   "es": "Actividades interactivas con documentos",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "usa"
  },
  "31": {
   "id": 31,
   "name": "NASA Space Place",
   "url": "https://spaceplace.nasa.gov/",
   "domain": "spaceplace.nasa.gov",
   "glyph": "rocket",
   "en": "Space and Earth science for kids",
   "es": "Ciencia del espacio y la Tierra para niños",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "modern"
  },
  "32": {
   "id": 32,
   "name": "NASA Kids' Club",
   "url": "https://www.nasa.gov/learning-resources/nasa-kids-club/",
   "domain": "nasa.gov",
   "glyph": "rocket",
   "en": "Rockets, astronauts and games",
   "es": "Cohetes, astronautas y juegos",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "modern"
  },
  "33": {
   "id": 33,
   "name": "NASA History",
   "url": "https://www.nasa.gov/history/",
   "domain": "nasa.gov",
   "glyph": "rocket",
   "en": "Apollo and the space race",
   "es": "Apolo y la carrera espacial",
   "login": null,
   "teacher": true,
   "spanish": false,
   "group": "modern"
  },
  "34": {
   "id": 34,
   "name": "National Air and Space Museum: Learn",
   "url": "https://airandspace.si.edu/learn",
   "domain": "airandspace.si.edu",
   "glyph": "rocket",
   "en": "Flight and space history",
   "es": "Historia del vuelo y del espacio",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "modern"
  },
  "35": {
   "id": 35,
   "name": "ESA Kids",
   "url": "https://kids.esa.int/",
   "domain": "kids.esa.int",
   "glyph": "star",
   "en": "Space stories and activities",
   "es": "Historias y actividades del espacio",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "modern"
  },
  "36": {
   "id": 36,
   "name": "Natural History Museum (London): Dino Directory",
   "url": "https://www.nhm.ac.uk/discover/dino-directory",
   "domain": "nhm.ac.uk",
   "glyph": "bone",
   "en": "A-to-Z dinosaur facts",
   "es": "Datos de dinosaurios de la A a la Z",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "prehistoric"
  },
  "37": {
   "id": 37,
   "name": "Natural History Museum (London): Dinosaurs",
   "url": "https://www.nhm.ac.uk/discover/dinosaurs.html",
   "domain": "nhm.ac.uk",
   "glyph": "bone",
   "en": "Dinosaur and prehistory articles",
   "es": "Artículos sobre dinosaurios y la prehistoria",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "prehistoric"
  },
  "38": {
   "id": 38,
   "name": "National Park Service: Dinosaur National Monument Kids",
   "url": "https://www.nps.gov/dino/learn/kidsyouth/index.htm",
   "domain": "nps.gov",
   "glyph": "bone",
   "en": "Dinosaur facts and fossils",
   "es": "Datos de dinosaurios y fósiles",
   "login": null,
   "teacher": false,
   "spanish": false,
   "group": "prehistoric"
  },
  "39": {
   "id": 39,
   "name": "NASA Space Place en español",
   "url": "https://spaceplace.nasa.gov/sp/",
   "domain": "spaceplace.nasa.gov",
   "glyph": "rocket",
   "en": "Space and Earth science in Spanish",
   "es": "Ciencia del espacio y la Tierra en español",
   "login": null,
   "teacher": false,
   "spanish": true,
   "group": "modern"
  },
  "40": {
   "id": 40,
   "name": "NASA Ciencia",
   "url": "https://ciencia.nasa.gov/",
   "domain": "ciencia.nasa.gov",
   "glyph": "rocket",
   "en": "NASA science news in Spanish",
   "es": "Noticias de ciencia de la NASA en español",
   "login": null,
   "teacher": true,
   "spanish": true,
   "group": "modern"
  },
  "41": {
   "id": 41,
   "name": "BrainPOP Español",
   "url": "https://esp.brainpop.com/",
   "domain": "esp.brainpop.com",
   "glyph": "play",
   "en": "Short animated videos in Spanish",
   "es": "Videos animados cortos en español",
   "login": "login",
   "teacher": false,
   "spanish": true,
   "group": "start"
  },
  "42": {
   "id": 42,
   "name": "Britannica Kids",
   "url": "https://kids.britannica.com/",
   "domain": "kids.britannica.com",
   "glyph": "book",
   "en": "Kid-level articles on almost any place or time",
   "es": "Artículos para niños sobre casi cualquier lugar o época",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "43": {
   "id": 43,
   "name": "Britannica School",
   "url": "https://school.eb.com/",
   "domain": "school.eb.com",
   "glyph": "book",
   "en": "Encyclopedia with kid, middle and high levels",
   "es": "Enciclopedia con niveles para niños y jóvenes",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "44": {
   "id": 44,
   "name": "World Book Online",
   "url": "https://www.worldbookonline.com/",
   "domain": "worldbookonline.com",
   "glyph": "book",
   "en": "Encyclopedia with kid levels",
   "es": "Enciclopedia con niveles para niños",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "45": {
   "id": 45,
   "name": "PebbleGo",
   "url": "https://www.pebblego.com/",
   "domain": "pebblego.com",
   "glyph": "book",
   "en": "Leveled nonfiction with read-aloud",
   "es": "Textos informativos por nivel con lectura en voz alta",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "46": {
   "id": 46,
   "name": "Gale in Context: Elementary",
   "url": "https://www.gale.com/databases/gale-in-context",
   "domain": "gale.com",
   "glyph": "book",
   "en": "Safe research database for elementary",
   "es": "Base de datos segura para primaria",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "47": {
   "id": 47,
   "name": "Colorado Virtual Library",
   "url": "https://www.coloradovirtuallibrary.org/",
   "domain": "coloradovirtuallibrary.org",
   "glyph": "building",
   "en": "Free Colorado library databases",
   "es": "Bases de datos gratuitas de bibliotecas de Colorado",
   "login": "library",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "48": {
   "id": 48,
   "name": "BrainPOP",
   "url": "https://www.brainpop.com/",
   "domain": "brainpop.com",
   "glyph": "play",
   "en": "Animated history videos",
   "es": "Videos animados de historia",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "49": {
   "id": 49,
   "name": "Discovery Education",
   "url": "https://app.discoveryeducation.com/learn/signin",
   "domain": "app.discoveryeducation.com",
   "glyph": "play",
   "en": "Videos and articles",
   "es": "Videos y artículos",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  },
  "50": {
   "id": 50,
   "name": "Newsela",
   "url": "https://newsela.com/",
   "domain": "newsela.com",
   "glyph": "scroll",
   "en": "Articles at several reading levels (English and Spanish)",
   "es": "Artículos en varios niveles de lectura (inglés y español)",
   "login": "login",
   "teacher": false,
   "spanish": false,
   "group": "start"
  }
 }
};
  var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
    '<symbol id="g-pyramid" viewBox="0 0 48 48"><path d="M24 5 L45 41 H3 Z"/><path d="M24 5 L24 41 L45 41 Z" fill="rgba(0,0,0,.22)"/></symbol>' +
    '<symbol id="g-temple" viewBox="0 0 48 48"><path d="M24 5 L45 18 H3 Z M8 21h6v17H8z M21 21h6v17h-6z M34 21h6v17h-6z M3 41h42v4H3z"/></symbol>' +
    '<symbol id="g-bone" viewBox="0 0 48 48"><g transform="rotate(-45 24 24)"><rect x="9" y="21" width="30" height="6" rx="3"/><circle cx="9" cy="19" r="4.6"/><circle cx="9" cy="29" r="4.6"/><circle cx="39" cy="19" r="4.6"/><circle cx="39" cy="29" r="4.6"/></g></symbol>' +
    '<symbol id="g-rocket" viewBox="0 0 48 48"><path d="M24 3c8 6 10 16 8 27H16C14 19 16 9 24 3z"/><path d="M16 24L8 35l9-3zM32 24l8 11-9-3z"/><path d="M20 34h8l-4 11z"/><circle cx="24" cy="17" r="3.6" fill="rgba(0,0,0,.35)"/></symbol>' +
    '<symbol id="g-star" viewBox="0 0 48 48"><polygon points="24,4 29.5,17.5 44,18.6 33,28 36.5,42.5 24,34.6 11.5,42.5 15,28 4,18.6 18.5,17.5"/></symbol>' +
    '<symbol id="g-book" viewBox="0 0 48 48"><path d="M5 10c7-3 13-3 19 1v29c-6-4-12-4-19-1z"/><path d="M43 10c-7-3-13-3-19 1v29c6-4 12-4 19-1z" fill-opacity=".8"/></symbol>' +
    '<symbol id="g-globe" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="3.4"><circle cx="24" cy="24" r="18"/><ellipse cx="24" cy="24" rx="8" ry="18"/><path d="M6 24h36M10 14h28M10 34h28"/></g></symbol>' +
    '<symbol id="g-building" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M5 43V19L24 7l19 12v24zM13 25v13h6V25zM29 25v13h6V25z"/></symbol>' +
    '<symbol id="g-flag" viewBox="0 0 48 48"><path d="M9 5h4v39H9z"/><path d="M15 8c8-4 13 4 24 0v19c-11 4-16-4-24 0z"/></symbol>' +
    '<symbol id="g-mountain" viewBox="0 0 48 48"><path d="M2 41L18 12l8 14 6-8 14 23z"/></symbol>' +
    '<symbol id="g-tree" viewBox="0 0 48 48"><path d="M24 3L11 24h7L8 37h32L30 24h7z"/><path d="M21 37h6v8h-6z"/></symbol>' +
    '<symbol id="g-scroll" viewBox="0 0 48 48"><path d="M12 5h26a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4H12a6 6 0 0 1-6-6V11a6 6 0 0 1 6-6z"/><path d="M14 15h20M14 23h20M14 31h13" stroke="rgba(0,0,0,.35)" stroke-width="3" fill="none"/></symbol>' +
    '<symbol id="g-play" viewBox="0 0 48 48"><circle cx="24" cy="24" r="19"/><path d="M19 15l16 9-16 9z" fill="rgba(0,0,0,.4)"/></symbol>' +
    '<symbol id="g-ship" viewBox="0 0 48 48"><path d="M22 4v26H8zM26 10l14 20H26zM4 34h40l-6 10H10z"/></symbol>' +
    '<symbol id="g-arch" viewBox="0 0 48 48"><path d="M6 44V22a18 18 0 0 1 36 0v22h-7V22a11 11 0 0 0-22 0v22z"/></symbol>' +
    '<symbol id="g-lock" viewBox="0 0 48 48"><path fill-rule="evenodd" d="M14 22v-6a10 10 0 0 1 20 0v6h2a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V24a2 2 0 0 1 2-2zm6 0h8v-6a4 4 0 0 0-8 0z"/></symbol>' +
    '<symbol id="g-back" viewBox="0 0 48 48"><path d="M30 6L12 24l18 18" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="g-hand" viewBox="0 0 48 48"><path d="M20 6a3 3 0 0 1 6 0v16l3-1 8 3c3 1 4 3 3 6l-3 12H17L8 29c-1-2 0-4 3-4s3 1 5 3V6a3 3 0 0 1 4 0z"/></symbol>' +
    '</defs></svg>';

  var groupsById = {};
  DATA.groups.forEach(function (g) { groupsById[g.id] = g; });

  function el(tag, cls, text, attrs) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function icon(id, cls) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 48 48');
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    if (cls) s.setAttribute('class', cls);
    var u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    u.setAttribute('href', '#g-' + id);
    s.appendChild(u);
    return s;
  }
  function badge(kind, en, es) {
    var b = el('span', 'badge badge-' + kind);
    if (kind === 'login') b.appendChild(icon('lock', 'badge-ico'));
    var t = el('span', 'badge-txt');
    t.appendChild(el('span', 'b-en', en));
    t.appendChild(el('span', 'b-es', es, { lang: 'es' }));
    b.appendChild(t);
    return b;
  }
  function tile(site, color) {
    var a = el('a', 'tile', null, {
      href: site.url, target: '_blank', rel: 'noopener noreferrer',
      'data-site': String(site.id),
      'aria-label': site.name + '. ' + site.en + '. Opens in a new tab.'
    });
    var ic = el('span', 'tile-icon');
    ic.style.background = color;
    ic.appendChild(icon(site.glyph));
    a.appendChild(ic);
    var tx = el('span', 'tile-text');
    tx.appendChild(el('span', 'tile-name', site.name));
    tx.appendChild(el('span', 'tile-en', site.en));
    tx.appendChild(el('span', 'tile-es', site.es, { lang: 'es' }));
    tx.appendChild(el('span', 'tile-dom', site.domain));
    var bs = el('span', 'tile-badges');
    if (site.login === 'login') bs.appendChild(badge('login', 'School login needed', 'Requiere cuenta escolar'));
    if (site.login === 'optional') bs.appendChild(badge('optional', 'Free account is optional', 'La cuenta gratis es opcional'));
    if (site.login === 'library') bs.appendChild(badge('login', 'School login needed (library card may be needed)', 'Requiere cuenta escolar (puede necesitar tarjeta de biblioteca)'));
    if (site.teacher) bs.appendChild(badge('teacher', 'Ask an adult', 'Pregunta a un adulto'));
    if (site.spanish) bs.appendChild(badge('spanish', 'In Spanish', 'En español'));
    if (bs.children.length) tx.appendChild(bs);
    a.appendChild(tx);
    var open = el('span', 'tile-open', null, { 'aria-hidden': 'true' });
    open.textContent = '↗';
    a.appendChild(open);
    return a;
  }
  /* Fills `container` with the tiles for one group (clears it first). */
  function renderTiles(container, groupId) {
    var g = groupsById[groupId];
    container.textContent = '';
    g.sections.forEach(function (sec) {
      if (sec.title_en) {
        var h = el('h3', 'sec-title');
        h.appendChild(el('span', 'en', sec.title_en));
        h.appendChild(el('span', 'es', sec.title_es, { lang: 'es' }));
        container.appendChild(h);
      }
      var grid = el('div', 'tile-grid');
      sec.ids.forEach(function (id) { grid.appendChild(tile(DATA.sites[id], g.color)); });
      container.appendChild(grid);
    });
    var note = el('p', 'login-note');
    note.appendChild(el('span', 'en', 'Links open in a new tab. If a site asks you to sign in, ask your teacher.'));
    note.appendChild(el('span', 'es', 'Los enlaces se abren en una pestaña nueva. Si un sitio te pide iniciar sesión, pregunta a tu maestro(a).', { lang: 'es' }));
    container.appendChild(note);
  }
  document.body.insertAdjacentHTML('afterbegin', SPRITE);
  window.TT = { groups: DATA.groups, sites: DATA.sites, groupsById: groupsById, el: el, icon: icon, renderTiles: renderTiles };
})();
