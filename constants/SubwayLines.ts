interface MyObject {
  name: string;
  stations: string[];
  title: string;
  id: string;
}
export const subwayLines: MyObject[] = [
  {
    id: "1",
    name: "M1a",
    title: "Yenikapı - Atatürk Havalimanı",
    stations: [
      "Atatürk Havalimanı",
      "DTM-İstanbul Fuar Merkezi",
      "Yenibosna",
      "Ataköy-Şirinevler",
      "Bahçelievler",
      "Bakırköy-İncirli",
      "Zeytinburnu",
      "Merter",
      "Davutpaşa-YTÜ",
      "Terazidere",
      "Otogar",
      "Kocatepe",
      "Sağmalcılar",
      "Bayrampaşa-Maltepe",
      "Topkapı-Ulubatlı",
      "Emniyet-Fatih",
      "Aksaray",
      "Yenikapı",
    ],
  },
  {
    name: "M1b",
    id: "2",
    title: "Yenikapı - Kirazlı",
    stations: [
      "Kirazlı-Bağcılar",
      "Bağcılar Meydan",
      "Üçyüzlü",
      "Menderes",
      "Esenler",
      "Otogar",
      "Kocatepe",
      "Sağmalcılar",
      "Bayrampaşa-Maltepe",
      "Topkapı-Ulubatlı",
      "Emniyet-Fatih",
      "Aksaray",
      "Yenikapı",
    ],
  },
  {
    name: "M2",
    id: "3",
    title: "Yenikapı - Hacıosman",
    stations: [
      "Yenikapı",
      "Vezneciler",
      "Haliç",
      "Şişhane",
      "Taksim",
      "Osmanbey",
      "Şişli-Mecidiyeköy",
      "Gayrettepe",
      "Levent",
      "4.Levent",
      "Sanayi Mahallesi",
      "Seyrantepe",
      "İTÜ Ayazağa",
      "Atatürk Oto Sanayi",
      "Darüşşafaka",
      "Hacıosman",
    ],
  },
  {
    name: "M3",
    id: "4",
    title: "Bakırköy - Kayaşehir",
    stations: [
      "Bakırköy Sahil",
      "Özgürlük Meydanı",
      "İncirli",
      "Haznedar",
      "İlkyuva",
      "Molla Gürani",
      "Kirazlı-Bağcılar",
      "Yenimahalle",
      "Mahmutbey",
      "İSTOÇ",
      "İkitelli Sanayi",
      "Turgut Özal",
      "Siteler",
      "Başak Konutları",
      "Başakşehir-Metrokent",
      "Onurkent",
      "Şehir Hastanesi",
      "Toplu Konutlar",
      "Kayaşehir Merkez",
    ],
  },
  {
    name: "M4",
    id: "5",
    title: "Kadıköy - Sabiha Gökçen Havalimanı",
    stations: [
      "Kadıköy",
      "Ayrılık Çeşmesi",
      "Acıbadem",
      "Ünalan",
      "Göztepe",
      "Yenisahra",
      "Kozyatağı",
      "Bostancı",
      "Küçükyalı",
      "Maltepe",
      "Huzurevi",
      "Gülsuyu",
      "Esenkent",
      "Hastane-Adliye",
      "Soğanlık",
      "Kartal",
      "Yakacık-Adnan Kahveci",
      "Pendik",
      "Tavşantepe",
      "Fevzi Çakmak-Hastane",
      "Yayalar-Şeyhli",
      "Kurtköy",
      "Sabiha Gökçen Havalimanı",
    ],
  },
  {
    name: "M5",
    id: "6",
    title: "Üsküdar - Samandıra",
    stations: [
      "Üsküdar",
      "Fıstıkağacı",
      "Bağlarbaşı",
      "Altunizade",
      "Kısıklı",
      "Bulgurlu",
      "Ümraniye",
      "Çarşı",
      "Yamanevler",
      "Çakmak",
      "Ihlamurkuyu",
      "Altınşehir",
      "İmam Hatip Lisesi",
      "Dudullu",
      "Necip Fazıl",
      "Çekmeköy",
      "Meclis",
      "Sarıgazi",
      "Sancaktepe",
      "Samandıra Merkez",
    ],
  },
  {
    name: "M6",
    id: "7",
    title: "Levent - Hisarüstü",
    stations: [
      "Levent",
      "Nispetiye",
      "Etiler",
      "Boğaziçi Üniversitesi",
      "Hisarüstü",
    ],
  },
  {
    name: "M7",
    id: "8",
    title: "Yıldız - Mahmutbey",
    stations: [
      "Yıldız",
      "Fulya",
      "Mecidiyeköy",
      "Çağlayan",
      "Kağıthane",
      "Nurtepe",
      "Alibeyköy",
      "Çırçır",
      "Veysel Karani-Akşemsettin",
      "Yeşilpınar",
      "Kazım Karabekir",
      "Yenimahalle",
      "Karadeniz Mahallesi",
      "Tekstilkent-Giyimkent",
      "Oruç Reis",
      "Göztepe Mahallesi",
      "Mahmutbey",
    ],
  },
  {
    name: "M8",
    id: "9",
    title: "Bostancı - Parseller",
    stations: [
      "Bostancı",
      "Emin Ali Paşa",
      "Ayşekadın",
      "Kozyatağı",
      "Küçükbakkalköy",
      "İçerenköy",
      "Kayışdağı",
      "Mevlana",
      "İmes",
      "Modoko-Keyap",
      "Dudullu",
      "Huzur",
      "Parseller",
    ],
  },
  {
    name: "M9",
    id: "10",
    title: "Ataköy - Olimpiyat",
    stations: [
      "Olimpiyat",
      "Ziya Gökalp Mahallesi",
      "İkitelli Sanayi",
      "Masko",
      "Bahariye",
      "Atatürk Mahallesi",
      "Halkalı Caddesi",
      "15 Temmuz",
      "Doğu Sanayi",
      "29 Ekim - Cumhuriyet",
      "Çobançeşme",
      "Yenibosna",
      "Ataköy",
    ],
  },
  {
    name: "M11",
    id: "11",
    title: "Gayrettepe - İstanbul Airport",
    stations: [
      "Gayrettepe",
      "Kağıthane",
      "Hasdal",
      "Kemerburgaz",
      "Göktürk",
      "İhsaniye",
      "İstanbul Havalimanı",
      "Kargo Terminal",
      "Taşoluk",
      "Arnavutköy Hastane",
    ],
  },
  {
    name: "Marmaray",
    id: "12",
    title: "Halkalı - Gebze",
    stations: [
      "Halkalı",
      "Mustafa Kemal",
      "Küçükçekmece",
      "Florya",
      "Florya Akvaryum",
      "Yeşilköy",
      "Yeşilyurt",
      "Ataköy",
      "Bakırköy",
      "Yenimahalle",
      "Zeytinburnu",
      "Kazlıçeşme",
      "Yenikapı",
      "Sirkeci",
      "Üsküdar",
      "Ayrılık Çeşmesi",
      "Söğütlüçeşme",
      "Feneryolu",
      "Göztepe",
      "Erenköy",
      "Suadiye",
      "Bostancı",
      "Küçükyalı",
      "İdealtepe",
      "Süreyya Plajı",
      "Maltepe",
      "Cevizli",
      "Atalar",
      "Başak",
      "Kartal",
      "Yunus",
      "Pendik",
      "Kaynarca",
      "Tersane",
      "Güzelyalı",
      "Aydıntepe",
      "İçmeler",
      "Tuzla",
      "Çayırova",
      "Fatih",
      "Osmangazi",
      "Darıca",
      "Gebze",
    ],
  },

  {
    name: "T1",
    id: "13",
    title: "Kabataş - Bağcılar",
    stations: [
      "Bağcılar",
      "Güneştepe",
      "Yavuzselim",
      "Soğanlı",
      "Akıncılar",
      "Güngören",
      "Merter Tekstil Merkezi",
      "Mehmet Akif",
      "Zeytinburnu",
      "Mithatpaşa",
      "Seyitnizam-Akşemsettin",
      "Merkezefendi",
      "Cevizlibağ-AÖY",
      "Topkapı",
      "Pazartekke",
      "Çapa-Şehremini",
      "Fındıkzade",
      "Haseki",
      "Yusufpaşa",
      "Aksaray",
      "Laleli-İstanbul Ü.",
      "Beyazı-Kapalıçarşı",
      "Çemberlitaş",
      "Sultanahmet",
      "Gülhane",
      "Sirkeci",
      "Eminönü",
      "Karaköy",
      "Tophane",
      "Fındıklı-Mimar Sinan Ü.",
      "Kabataş",
    ],
  },
  {
    name: "T3",
    id: "14",
    title: "Kadıköy - Moda",
    stations: [
      "İskele Cami",
      "Çarşı",
      "Altıyol",
      "Bahariye",
      "Kilise",
      "Moda İlkokulu",
      "Moda Caddesi",
      "Rızapaşa",
      "Mühürdar",
      "Damga Sokak",
      "Kadıköy İDO",
    ],
  },
  {
    name: "T4",
    id: "15",
    title: "Topkapı - Mescid-i Selam",
    stations: [
      "Mescid-i Selam",
      "Cebeci",
      "Sultançiftliği",
      "Yenimahalle",
      "Hacı Şükrü",
      "50.Yıl-Baştabya",
      "Cumhuriyet Mahallesi",
      "Kiptaş-Venezia",
      "Karadeniz",
      "Taşköprü",
      "Ali Fuat Başgil",
      "Bosna Çukurçeşme",
      "Sağmalcılar",
      "Uluyol Bereç",
      "Rami",
      "Topçular",
      "Demirkapı",
      "Şehitlik",
      "Edirnekapı",
      "Vatan",
      "Fetihkapı",
      "Topkapı",
    ],
  },
  {
    name: "T5",
    id: "16",
    title: "Eminönü - Alibeyköy",
    stations: [
      "Eminönü",
      "Küçükpazar",
      "Cibali",
      "Fener",
      "Balat",
      "Ayvansaray",
      "Feshane",
      "Eyüpsultan Teleferik",
      "Eyüpsultan Devlet Hastanesi",
      "Silahtarağa Mahallesi",
      "Üniversite",
      "Alibeyköy Merkez",
      "Alibeyköy Metro",
      "Alibeyköy Cep Otogarı",
    ],
  },
  {
    name: "F1",
    id: "17",
    title: "Kabataş - Taksim",
    stations: ["Kabataş", "Taksim"],
  },
  {
    name: "F4",
    id: "18",
    title: "Hisarüstü - Aşiyan",
    stations: ["Hisarüstü", "Aşiyan"],
  },
];
