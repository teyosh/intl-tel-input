// Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
// jshint -W100

// Array of country objects for the flag dropdown.
// Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
// Originally from https://github.com/mledoze/countries

// then with a couple of manual re-arrangements to be alphabetical
// then changed Kazakhstan from +76 to +7
// and Vatican City from +379 to +39 (see issue 50)
// and Caribean Netherlands from +5997 to +599
// and Curacao from +5999 to +599
// Removed:  Kosovo, Pitcairn Islands, South Georgia

// UPDATE Sept 12th 2015
// List of regions that have iso2 country codes, which I have chosen to omit:
// (based on this information: https://en.wikipedia.org/wiki/List_of_country_calling_codes)
// AQ - Antarctica - all different country codes depending on which "base"
// BV - Bouvet Island - no calling code
// GS - South Georgia and the South Sandwich Islands - "inhospitable collection of islands" - same flag and calling code as Falkland Islands
// HM - Heard Island and McDonald Islands - no calling code
// PN - Pitcairn - tiny population (56), same calling code as New Zealand
// TF - French Southern Territories - no calling code
// UM - United States Minor Outlying Islands - no calling code

// UPDATE the criteria of supported countries or territories (see issue 297)
// Have an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// Have a country calling code: https://en.wikipedia.org/wiki/List_of_country_calling_codes
// Have a flag
// Must be supported by libphonenumber: https://github.com/googlei18n/libphonenumber

// Update: converted objects to arrays to save bytes!
// Update: added "priority" for countries with the same dialCode as others
// Update: added array of area codes for countries with the same dialCode as others

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
var allCountries = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "afg",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "alb",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "dza",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "asm",
    "1684"
  ],
  [
    "Andorra",
    "ad",
    "and",
    "376"
  ],
  [
    "Angola",
    "ao",
    "ago",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "aia",
    "1264"
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "atg",
    "1268"
  ],
  [
    "Argentina",
    "ar",
    "arg",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "arm",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "abw",
    "297"
  ],
  [
    "Australia",
    "au",
    "aus",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "aut",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "aze",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "bhs",
    "1242"
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "bhr",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "bgd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "brb",
    "1246"
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "blr",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "bel",
    "32"
  ],
  [
    "Belize",
    "bz",
    "blz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "ben",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "bmu",
    "1441"
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "btn",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "bol",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "bih",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "bwa",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "bra",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "iot",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "vgb",
    "1284"
  ],
  [
    "Brunei",
    "bn",
    "brn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "bgr",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "bfa",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "bdi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "khm",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "cmr",
    "237"
  ],
  [
    "Canada",
    "ca",
    "can",
    "1",
    1,
    ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "cpv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "bes",
    "599",
    1
  ],
  [
    "Cayman Islands",
    "ky",
    "cym",
    "1345"
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "caf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "tcd",
    "235"
  ],
  [
    "Chile",
    "cl",
    "chl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "chn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "cxr",
    "61",
    2
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "cck",
    "61",
    1
  ],
  [
    "Colombia",
    "co",
    "col",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "com",
    "269"
  ],
  [
    "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    "cd",
    "cod",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "cog",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "cok",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "cri",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "civ",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "hrv",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "cub",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "cuw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "cyp",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "cze",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "dnk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "dji",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "dma",
    "1767"
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "dom",
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    "ec",
    "ecu",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "egy",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "slv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "gnq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "eri",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "est",
    "372"
  ],
  [
    "Ethiopia",
    "et",
    "eth",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "flk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "fro",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "fji",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "fin",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "fra",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "guf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "pyf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "gab",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "gmb",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "geo",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "deu",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "gha",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "gib",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "grc",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "grl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "grd",
    "1473"
  ],
  [
    "Guadeloupe",
    "gp",
    "glp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "gum",
    "1671"
  ],
  [
    "Guatemala",
    "gt",
    "gtm",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "ggy",
    "44",
    1
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "gin",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "gnb",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "guy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "hti",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "hnd",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "hkg",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "hun",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "isl",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "ind",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "idn",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "irn",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "irq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "irl",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "imn",
    "44",
    2
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "isr",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "ita",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "jam",
    "1876"
  ],
  [
    "Japan (日本)",
    "jp",
    "jpn",
    "81"
  ],
  [
    "Jersey",
    "je",
    "jey",
    "44",
    3
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "jor",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "kaz",
    "7",
    1
  ],
  [
    "Kenya",
    "ke",
    "ken",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "kir",
    "686"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "kwt",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "kgz",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "lao",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "lva",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "lbn",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "lso",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "lbr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "lby",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "lie",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "ltu",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "lux",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "mac",
    "853"
  ],
  [
    "Macedonia (FYROM) (Македонија)",
    "mk",
    "mkd",
    "389"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "mdg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "mwi",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "mys",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "mdv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "mli",
    "223"
  ],
  [
    "Malta",
    "mt",
    "mlt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "mhl",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "mtq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "mrt",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "mus",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "myt",
    "262",
    1
  ],
  [
    "Mexico (México)",
    "mx",
    "mex",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "fsm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "mda",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "mco",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "mng",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "mne",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "msr",
    "1664"
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "mar",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "moz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "mmr",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "nam",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "nru",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "npl",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "nld",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "ncl",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "nzl",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "nic",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "ner",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "nga",
    "234"
  ],
  [
    "Niue",
    "nu",
    "niu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "nfk",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "prk",
    "850"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "mnp",
    "1670"
  ],
  [
    "Norway (Norge)",
    "no",
    "nor",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "omn",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "pak",
    "92"
  ],
  [
    "Palau",
    "pw",
    "plw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "pse",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "pan",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "png",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "pry",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "per",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "phl",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "pol",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "prt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "pri",
    "1",
    3,
    ["787", "939"]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "qat",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "reu",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "rou",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "rus",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "rwa",
    "250"
  ],
  [
    "Saint Barthélemy (Saint-Barthélemy)",
    "bl",
    "blm",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "shn",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "kna",
    "1869"
  ],
  [
    "Saint Lucia",
    "lc",
    "lca",
    "1758"
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "maf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "spm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "vct",
    "1784"
  ],
  [
    "Samoa",
    "ws",
    "wsm",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "smr",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "stp",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "sau",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "sen",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "srb",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "syc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "sle",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "sgp",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "sxm",
    "1721"
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "svk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "svn",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "slb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "som",
    "252"
  ],
  [
    "South Africa",
    "za",
    "zaf",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "kor",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "ssd",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "esp",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "lka",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "sdn",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "sur",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "sjm",
    "47",
    1
  ],
  [
    "Swaziland",
    "sz",
    "swz",
    "268"
  ],
  [
    "Sweden (Sverige)",
    "se",
    "swe",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "che",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "syr",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "twn",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "tjk",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "tza",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "tha",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "tls",
    "670"
  ],
  [
    "Togo",
    "tg",
    "tgo",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "tkl",
    "690"
  ],
  [
    "Tonga",
    "to",
    "ton",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "tto",
    "1868"
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "tun",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "tur",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "tkm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "tca",
    "1649"
  ],
  [
    "Tuvalu",
    "tv",
    "tuv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "vir",
    "1340"
  ],
  [
    "Uganda",
    "ug",
    "uga",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "ukr",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "are",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "gbr",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "usa",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "ury",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "uzb",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "vut",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "vat",
    "39",
    1
  ],
  [
    "Venezuela",
    "ve",
    "ven",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "vnm",
    "84"
  ],
  [
    "Wallis and Futuna",
    "wf",
    "wlf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "esh",
    "212",
    1
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "yem",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "zmb",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "zwe",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "ala",
    "358",
    1
  ]
];

// loop over all of the countries above
for (var i = 0; i < allCountries.length; i++) {
  var c = allCountries[i];
  allCountries[i] = {
    name: c[0],
    iso2: c[1],
    iso3: c[2],
    dialCode: c[3],
    priority: c[4] || 0,
    areaCodes: c[5] || null
  };
}
