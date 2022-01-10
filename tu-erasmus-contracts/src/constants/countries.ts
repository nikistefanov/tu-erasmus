import { ICountry } from "../contracts"

export const COUNTRIES_NAMES = [
    "Австралия",
    "Австрия",
    "Азербайджан",
    "Албания",
    "Алжир",
    "Американска Самоа",
    "Американски Вирджински острови",
    "Ангила",
    "Ангола",
    "Андора",
    "Антарктида",
    "Антигуа и Барбуда",
    "Аржентина",
    "Армения",
    "Аруба",
    "Афганистан",
    "Бангладеш",
    "Барбадос",
    "Бахамски острови",
    "Бахрейн",
    "Беларус",
    "Белгия",
    "Белиз",
    "Бенин",
    "Бермудски острови",
    "Боливия",
    "Босна и Херцеговина",
    "Ботсвана",
    "Бразилия",
    "Британска индоокеанска територия",
    "Британски Вирджински острови",
    "Бруней",
    "Буве",
    "Буркина Фасо",
    "Бурунди",
    "Бутан",
    "България",
    "Вануату",
    "Ватикан",
    "Великобритания",
    "Венецуела",
    "Виетнам",
    "Габон",
    "Гамбия",
    "Гана",
    "Гваделупа",
    "Гватемала",
    "Гвиана",
    "Гвинея",
    "Гвинея-Бисау",
    "Германия",
    "Гибралтар",
    "Гренада",
    "Гренландия",
    "Грузия",
    "Гуам",
    "Гърнси",
    "Гърция",
    "Дания",
    "Демократична република Конго",
    "Джибути",
    "Джърси",
    "Доминика",
    "Доминиканска република",
    "Египет",
    "Еквадор",
    "Екваториална Гвинея",
    "Еритрея",
    "Есватини",
    "Естония",
    "Етиопия",
    "Замбия",
    "Западна Сахара",
    "Зимбабве",
    "Израел",
    "Източен Тимор",
    "Индия",
    "Индонезия",
    "Ирак",
    "Иран",
    "Ирландия",
    "Исландия",
    "Испания",
    "Италия",
    "Йемен",
    "Йордания",
    "Кабо Верде",
    "Казахстан",
    "Кайманови острови",
    "Камбоджа",
    "Камерун",
    "Канада",
    "Карибска Нидерландия",
    "Катар",
    "Кения",
    "Кипър",
    "Киргизстан",
    "Кирибати",
    "Китай",
    "Кокосови острови",
    "Коледен остров",
    "Колумбия",
    "Коморски острови",
    "Коста Рика",
    "Кот д'Ивоар",
    "Куба",
    "Кувейт",
    "Кюрасао",
    "Лаос",
    "Латвия",
    "Лесото",
    "Либерия",
    "Либия",
    "Ливан",
    "Литва",
    "Лихтенщайн",
    "Люксембург",
    "Мавритания",
    "Мавриций",
    "Мадагаскар",
    "Майот",
    "Макао",
    "Малави",
    "Малайзия",
    "Малдиви",
    "Мали",
    "Малки далечни острови на САЩ",
    "Малта",
    "Ман",
    "Мароко",
    "Мартиника",
    "Маршалови острови",
    "Мексико",
    "Мианмар",
    "Микронезия",
    "Мозамбик",
    "Молдова",
    "Монако",
    "Монголия",
    "Монсерат",
    "Намибия",
    "Науру",
    "Непал",
    "Нигер",
    "Нигерия",
    "Нидерландия",
    "Никарагуа",
    "Ниуе",
    "Нова Зеландия",
    "Нова Каледония",
    "Норвегия",
    "ОАЕ",
    "Оландски острови",
    "Оман",
    "Норфолк",
    "Острови Кук",
    "Острови Хърд и Макдоналд",
    "Пакистан",
    "Палау",
    "Палестинска автономия",
    "Панама",
    "Папуа Нова Гвинея",
    "Парагвай",
    "Перу",
    "Питкерн",
    "Полша",
    "Португалия",
    "Пуерто Рико",
    "Република Конго",
    "Реюнион",
    "Руанда",
    "Румъния",
    "Русия",
    "Салвадор",
    "Самоа",
    "Сан Марино",
    "Сао Томе и Принсипи",
    "Саудитска Арабия",
    "САЩ",
    "Свалбард и Ян Майен",
    "Света Елена, Възнесение и Тристан да Куня",
    "Северна Корея",
    "Северна Македония",
    "Северни Мариански острови",
    "Сейнт Винсент и Гренадини",
    "Сейнт Китс и Невис",
    "Сейнт Лусия",
    "Сейшелски острови",
    "Сен Бартелми",
    "Сен Мартен",
    "Сен Пиер и Микелон",
    "Сенегал",
    "Сиера Леоне",
    "Сингапур",
    "Синт Мартен",
    "Сирия",
    "Словакия",
    "Словения",
    "Соломонови острови",
    "Сомалия",
    "Судан",
    "Суринам",
    "Сърбия",
    "Таджикистан",
    "Тайван",
    "Тайланд",
    "Танзания",
    "Того",
    "Токелау",
    "Тонга",
    "Тринидад и Тобаго",
    "Тувалу",
    "Тунис",
    "Туркменистан",
    "Турция",
    "Търкс и Кайкос",
    "Уганда",
    "Узбекистан",
    "Украйна",
    "Унгария",
    "Уолис и Футуна",
    "Уругвай",
    "Фарьорски острови",
    "Фиджи",
    "Филипини",
    "Финландия",
    "Фолкландски острови",
    "Франция",
    "Френска Гвиана",
    "Френска Полинезия",
    "Френски южни и антарктически територии",
    "Хаити",
    "Хондурас",
    "Хонконг",
    "Хърватия",
    "Централноафриканска република",
    "Чад",
    "Черна гора",
    "Чехия",
    "Чили",
    "Швейцария",
    "Швеция",
    "Шри Ланка",
    "ЮАР",
    "Южен Судан",
    "Южна Джорджия и Южни Сандвичеви острови",
    "Южна Корея",
    "Ямайка",
    "Япония"
]

export const COUNTRIES_CODES = [
    "AU",
    "AT",
    "AZ",
    "AL",
    "DZ",
    "AS",
    "VI",
    "AI",
    "AO",
    "AD",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AF",
    "BD",
    "BB",
    "BS",
    "BH",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BO",
    "BA",
    "BW",
    "BR",
    "IO",
    "VG",
    "BN",
    "BV",
    "BF",
    "BI",
    "BT",
    "BG",
    "VU",
    "VA",
    "GB",
    "VE",
    "VN",
    "GA",
    "GM",
    "GH",
    "GP",
    "GT",
    "GY",
    "GN",
    "GW",
    "DE",
    "GI",
    "GD",
    "GL",
    "GE",
    "GU",
    "GG",
    "GR",
    "DK",
    "CD",
    "DJ",
    "JE",
    "DM",
    "DO",
    "EG",
    "EC",
    "GQ",
    "ER",
    "SZ",
    "EE",
    "ET",
    "ZM",
    "EH",
    "ZW",
    "IL",
    "TL",
    "IN",
    "ID",
    "IQ",
    "IR",
    "IE",
    "IS",
    "ES",
    "IT",
    "YE",
    "JO",
    "CV",
    "KZ",
    "KY",
    "KH",
    "CM",
    "CA",
    "BQ",
    "QA",
    "KE",
    "CY",
    "KG",
    "KI",
    "CN",
    "CC",
    "CX",
    "CO",
    "KM",
    "CR",
    "CI",
    "CU",
    "KW",
    "CW",
    "LA",
    "LV",
    "LS",
    "LR",
    "LY",
    "LB",
    "LT",
    "LI",
    "LU",
    "MR",
    "MU",
    "MG",
    "YT",
    "MO",
    "MW",
    "MY",
    "MV",
    "ML",
    "UM",
    "MT",
    "IM",
    "MA",
    "MQ",
    "MH",
    "MX",
    "MM",
    "FM",
    "MZ",
    "MD",
    "MC",
    "MN",
    "MS",
    "NA",
    "NR",
    "NP",
    "NE",
    "NG",
    "NL",
    "NI",
    "NU",
    "NZ",
    "NC",
    "NO",
    "AE",
    "AX",
    "OM",
    "NF",
    "CK",
    "HM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PN",
    "PL",
    "PT",
    "PR",
    "CG",
    "RE",
    "RW",
    "RO",
    "RU",
    "SV",
    "WS",
    "SM",
    "ST",
    "SA",
    "US",
    "SJ",
    "SH",
    "KP",
    "MK",
    "MP",
    "VC",
    "KN",
    "LC",
    "SC",
    "BL",
    "MF",
    "PM",
    "SN",
    "SL",
    "SG",
    "SX",
    "SY",
    "SK",
    "SI",
    "SB",
    "SO",
    "SD",
    "SR",
    "RS",
    "TJ",
    "TW",
    "TH",
    "TZ",
    "TG",
    "TK",
    "TO",
    "TT",
    "TV",
    "TN",
    "TM",
    "TR",
    "TC",
    "UG",
    "UZ",
    "UA",
    "HU",
    "WF",
    "UY",
    "FO",
    "FJ",
    "PH",
    "FI",
    "FK",
    "FR",
    "GF",
    "PF",
    "TF",
    "HT",
    "HN",
    "HK",
    "HR",
    "CF",
    "TD",
    "ME",
    "CZ",
    "CL",
    "CH",
    "SE",
    "LK",
    "ZA",
    "SS",
    "GS",
    "KR",
    "JM",
    "JP"
]

export const COUNTRIES: ICountry[] = [
    {
        name: "Австралия",
        code: "AU"
    },
    {
        name: "Австрия",
        code: "AT"
    },
    {
        name: "Азербайджан",
        code: "AZ"
    },
    {
        name: "Албания",
        code: "AL"
    },
    {
        name: "Алжир",
        code: "DZ"
    },
    {
        name: "Американска Самоа",
        code: "AS"
    },
    {
        name: "Американски Вирджински острови",
        code: "VI"
    },
    {
        name: "Ангила",
        code: "AI"
    },
    {
        name: "Ангола",
        code: "AO"
    },
    {
        name: "Андора",
        code: "AD"
    },
    {
        name: "Антарктида",
        code: "AQ"
    },
    {
        name: "Антигуа и Барбуда",
        code: "AG"
    },
    {
        name: "Аржентина",
        code: "AR"
    },
    {
        name: "Армения",
        code: "AM"
    },
    {
        name: "Аруба",
        code: "AW"
    },
    {
        name: "Афганистан",
        code: "AF"
    },
    {
        name: "Бангладеш",
        code: "BD"
    },
    {
        name: "Барбадос",
        code: "BB"
    },
    {
        name: "Бахамски острови",
        code: "BS"
    },
    {
        name: "Бахрейн",
        code: "BH"
    },
    {
        name: "Беларус",
        code: "BY"
    },
    {
        name: "Белгия",
        code: "BE"
    },
    {
        name: "Белиз",
        code: "BZ"
    },
    {
        name: "Бенин",
        code: "BJ"
    },
    {
        name: "Бермудски острови",
        code: "BM"
    },
    {
        name: "Боливия",
        code: "BO"
    },
    {
        name: "Босна и Херцеговина",
        code: "BA"
    },
    {
        name: "Ботсвана",
        code: "BW"
    },
    {
        name: "Бразилия",
        code: "BR"
    },
    {
        name: "Британска индоокеанска територия",
        code: "IO"
    },
    {
        name: "Британски Вирджински острови",
        code: "VG"
    },
    {
        name: "Бруней",
        code: "BN"
    },
    {
        name: "Буве",
        code: "BV"
    },
    {
        name: "Буркина Фасо",
        code: "BF"
    },
    {
        name: "Бурунди",
        code: "BI"
    },
    {
        name: "Бутан",
        code: "BT"
    },
    {
        name: "България",
        code: "BG"
    },
    {
        name: "Вануату",
        code: "VU"
    },
    {
        name: "Ватикан",
        code: "VA"
    },
    {
        name: "Великобритания",
        code: "GB"
    },
    {
        name: "Венецуела",
        code: "VE"
    },
    {
        name: "Виетнам",
        code: "VN"
    },
    {
        name: "Габон",
        code: "GA"
    },
    {
        name: "Гамбия",
        code: "GM"
    },
    {
        name: "Гана",
        code: "GH"
    },
    {
        name: "Гваделупа",
        code: "GP"
    },
    {
        name: "Гватемала",
        code: "GT"
    },
    {
        name: "Гвиана",
        code: "GY"
    },
    {
        name: "Гвинея",
        code: "GN"
    },
    {
        name: "Гвинея-Бисау",
        code: "GW"
    },
    {
        name: "Германия",
        code: "DE"
    },
    {
        name: "Гибралтар",
        code: "GI"
    },
    {
        name: "Гренада",
        code: "GD"
    },
    {
        name: "Гренландия",
        code: "GL"
    },
    {
        name: "Грузия",
        code: "GE"
    },
    {
        name: "Гуам",
        code: "GU"
    },
    {
        name: "Гърнси",
        code: "GG"
    },
    {
        name: "Гърция",
        code: "GR"
    },
    {
        name: "Дания",
        code: "DK"
    },
    {
        name: "Демократична република Конго",
        code: "CD"
    },
    {
        name: "Джибути",
        code: "DJ"
    },
    {
        name: "Джърси",
        code: "JE"
    },
    {
        name: "Доминика",
        code: "DM"
    },
    {
        name: "Доминиканска република",
        code: "DO"
    },
    {
        name: "Египет",
        code: "EG"
    },
    {
        name: "Еквадор",
        code: "EC"
    },
    {
        name: "Екваториална Гвинея",
        code: "GQ"
    },
    {
        name: "Еритрея",
        code: "ER"
    },
    {
        name: "Есватини",
        code: "SZ"
    },
    {
        name: "Естония",
        code: "EE"
    },
    {
        name: "Етиопия",
        code: "ET"
    },
    {
        name: "Замбия",
        code: "ZM"
    },
    {
        name: "Западна Сахара",
        code: "EH"
    },
    {
        name: "Зимбабве",
        code: "ZW"
    },
    {
        name: "Израел",
        code: "IL"
    },
    {
        name: "Източен Тимор",
        code: "TL"
    },
    {
        name: "Индия",
        code: "IN"
    },
    {
        name: "Индонезия",
        code: "ID"
    },
    {
        name: "Ирак",
        code: "IQ"
    },
    {
        name: "Иран",
        code: "IR"
    },
    {
        name: "Ирландия",
        code: "IE"
    },
    {
        name: "Исландия",
        code: "IS"
    },
    {
        name: "Испания",
        code: "ES"
    },
    {
        name: "Италия",
        code: "IT"
    },
    {
        name: "Йемен",
        code: "YE"
    },
    {
        name: "Йордания",
        code: "JO"
    },
    {
        name: "Кабо Верде",
        code: "CV"
    },
    {
        name: "Казахстан",
        code: "KZ"
    },
    {
        name: "Кайманови острови",
        code: "KY"
    },
    {
        name: "Камбоджа",
        code: "KH"
    },
    {
        name: "Камерун",
        code: "CM"
    },
    {
        name: "Канада",
        code: "CA"
    },
    {
        name: "Карибска Нидерландия",
        code: "BQ"
    },
    {
        name: "Катар",
        code: "QA"
    },
    {
        name: "Кения",
        code: "KE"
    },
    {
        name: "Кипър",
        code: "CY"
    },
    {
        name: "Киргизстан",
        code: "KG"
    },
    {
        name: "Кирибати",
        code: "KI"
    },
    {
        name: "Китай",
        code: "CN"
    },
    {
        name: "Кокосови острови",
        code: "CC"
    },
    {
        name: "Коледен остров",
        code: "CX"
    },
    {
        name: "Колумбия",
        code: "CO"
    },
    {
        name: "Коморски острови",
        code: "KM"
    },
    {
        name: "Коста Рика",
        code: "CR"
    },
    {
        name: "Кот д'Ивоар",
        code: "CI"
    },
    {
        name: "Куба",
        code: "CU"
    },
    {
        name: "Кувейт",
        code: "KW"
    },
    {
        name: "Кюрасао",
        code: "CW"
    },
    {
        name: "Лаос",
        code: "LA"
    },
    {
        name: "Латвия",
        code: "LV"
    },
    {
        name: "Лесото",
        code: "LS"
    },
    {
        name: "Либерия",
        code: "LR"
    },
    {
        name: "Либия",
        code: "LY"
    },
    {
        name: "Ливан",
        code: "LB"
    },
    {
        name: "Литва",
        code: "LT"
    },
    {
        name: "Лихтенщайн",
        code: "LI"
    },
    {
        name: "Люксембург",
        code: "LU"
    },
    {
        name: "Мавритания",
        code: "MR"
    },
    {
        name: "Мавриций",
        code: "MU"
    },
    {
        name: "Мадагаскар",
        code: "MG"
    },
    {
        name: "Майот",
        code: "YT"
    },
    {
        name: "Макао",
        code: "MO"
    },
    {
        name: "Малави",
        code: "MW"
    },
    {
        name: "Малайзия",
        code: "MY"
    },
    {
        name: "Малдиви",
        code: "MV"
    },
    {
        name: "Мали",
        code: "ML"
    },
    {
        name: "Малки далечни острови на САЩ",
        code: "UM"
    },
    {
        name: "Малта",
        code: "MT"
    },
    {
        name: "Ман",
        code: "IM"
    },
    {
        name: "Мароко",
        code: "MA"
    },
    {
        name: "Мартиника",
        code: "MQ"
    },
    {
        name: "Маршалови острови",
        code: "MH"
    },
    {
        name: "Мексико",
        code: "MX"
    },
    {
        name: "Мианмар",
        code: "MM"
    },
    {
        name: "Микронезия",
        code: "FM"
    },
    {
        name: "Мозамбик",
        code: "MZ"
    },
    {
        name: "Молдова",
        code: "MD"
    },
    {
        name: "Монако",
        code: "MC"
    },
    {
        name: "Монголия",
        code: "MN"
    },
    {
        name: "Монсерат",
        code: "MS"
    },
    {
        name: "Намибия",
        code: "NA"
    },
    {
        name: "Науру",
        code: "NR"
    },
    {
        name: "Непал",
        code: "NP"
    },
    {
        name: "Нигер",
        code: "NE"
    },
    {
        name: "Нигерия",
        code: "NG"
    },
    {
        name: "Нидерландия",
        code: "NL"
    },
    {
        name: "Никарагуа",
        code: "NI"
    },
    {
        name: "Ниуе",
        code: "NU"
    },
    {
        name: "Нова Зеландия",
        code: "NZ"
    },
    {
        name: "Нова Каледония",
        code: "NC"
    },
    {
        name: "Норвегия",
        code: "NO"
    },
    {
        name: "ОАЕ",
        code: "AE"
    },
    {
        name: "Оландски острови",
        code: "AX"
    },
    {
        name: "Оман",
        code: "OM"
    },
    {
        name: "Норфолк",
        code: "NF"
    },
    {
        name: "Острови Кук",
        code: "CK"
    },
    {
        name: "Острови Хърд и Макдоналд",
        code: "HM"
    },
    {
        name: "Пакистан",
        code: "PK"
    },
    {
        name: "Палау",
        code: "PW"
    },
    {
        name: "Палестинска автономия",
        code: "PS"
    },
    {
        name: "Панама",
        code: "PA"
    },
    {
        name: "Папуа Нова Гвинея",
        code: "PG"
    },
    {
        name: "Парагвай",
        code: "PY"
    },
    {
        name: "Перу",
        code: "PE"
    },
    {
        name: "Питкерн",
        code: "PN"
    },
    {
        name: "Полша",
        code: "PL"
    },
    {
        name: "Португалия",
        code: "PT"
    },
    {
        name: "Пуерто Рико",
        code: "PR"
    },
    {
        name: "Република Конго",
        code: "CG"
    },
    {
        name: "Реюнион",
        code: "RE"
    },
    {
        name: "Руанда",
        code: "RW"
    },
    {
        name: "Румъния",
        code: "RO"
    },
    {
        name: "Русия",
        code: "RU"
    },
    {
        name: "Салвадор",
        code: "SV"
    },
    {
        name: "Самоа",
        code: "WS"
    },
    {
        name: "Сан Марино",
        code: "SM"
    },
    {
        name: "Сао Томе и Принсипи",
        code: "ST"
    },
    {
        name: "Саудитска Арабия",
        code: "SA"
    },
    {
        name: "САЩ",
        code: "US"
    },
    {
        name: "Свалбард и Ян Майен",
        code: "SJ"
    },
    {
        name: "Света Елена, Възнесение и Тристан да Куня",
        code: "SH"
    },
    {
        name: "Северна Корея",
        code: "KP"
    },
    {
        name: "Северна Македония",
        code: "MK"
    },
    {
        name: "Северни Мариански острови",
        code: "MP"
    },
    {
        name: "Сейнт Винсент и Гренадини",
        code: "VC"
    },
    {
        name: "Сейнт Китс и Невис",
        code: "KN"
    },
    {
        name: "Сейнт Лусия",
        code: "LC"
    },
    {
        name: "Сейшелски острови",
        code: "SC"
    },
    {
        name: "Сен Бартелми",
        code: "BL"
    },
    {
        name: "Сен Мартен",
        code: "MF"
    },
    {
        name: "Сен Пиер и Микелон",
        code: "PM"
    },
    {
        name: "Сенегал",
        code: "SN"
    },
    {
        name: "Сиера Леоне",
        code: "SL"
    },
    {
        name: "Сингапур",
        code: "SG"
    },
    {
        name: "Синт Мартен",
        code: "SX"
    },
    {
        name: "Сирия",
        code: "SY"
    },
    {
        name: "Словакия",
        code: "SK"
    },
    {
        name: "Словения",
        code: "SI"
    },
    {
        name: "Соломонови острови",
        code: "SB"
    },
    {
        name: "Сомалия",
        code: "SO"
    },
    {
        name: "Судан",
        code: "SD"
    },
    {
        name: "Суринам",
        code: "SR"
    },
    {
        name: "Сърбия",
        code: "RS"
    },
    {
        name: "Таджикистан",
        code: "TJ"
    },
    {
        name: "Тайван",
        code: "TW"
    },
    {
        name: "Тайланд",
        code: "TH"
    },
    {
        name: "Танзания",
        code: "TZ"
    },
    {
        name: "Того",
        code: "TG"
    },
    {
        name: "Токелау",
        code: "TK"
    },
    {
        name: "Тонга",
        code: "TO"
    },
    {
        name: "Тринидад и Тобаго",
        code: "TT"
    },
    {
        name: "Тувалу",
        code: "TV"
    },
    {
        name: "Тунис",
        code: "TN"
    },
    {
        name: "Туркменистан",
        code: "TM"
    },
    {
        name: "Турция",
        code: "TR"
    },
    {
        name: "Търкс и Кайкос",
        code: "TC"
    },
    {
        name: "Уганда",
        code: "UG"
    },
    {
        name: "Узбекистан",
        code: "UZ"
    },
    {
        name: "Украйна",
        code: "UA"
    },
    {
        name: "Унгария",
        code: "HU"
    },
    {
        name: "Уолис и Футуна",
        code: "WF"
    },
    {
        name: "Уругвай",
        code: "UY"
    },
    {
        name: "Фарьорски острови",
        code: "FO"
    },
    {
        name: "Фиджи",
        code: "FJ"
    },
    {
        name: "Филипини",
        code: "PH"
    },
    {
        name: "Финландия",
        code: "FI"
    },
    {
        name: "Фолкландски острови",
        code: "FK"
    },
    {
        name: "Франция",
        code: "FR"
    },
    {
        name: "Френска Гвиана",
        code: "GF"
    },
    {
        name: "Френска Полинезия",
        code: "PF"
    },
    {
        name: "Френски южни и антарктически територии",
        code: "TF"
    },
    {
        name: "Хаити",
        code: "HT"
    },
    {
        name: "Хондурас",
        code: "HN"
    },
    {
        name: "Хонконг",
        code: "HK"
    },
    {
        name: "Хърватия",
        code: "HR"
    },
    {
        name: "Централноафриканска република",
        code: "CF"
    },
    {
        name: "Чад",
        code: "TD"
    },
    {
        name: "Черна гора",
        code: "ME"
    },
    {
        name: "Чехия",
        code: "CZ"
    },
    {
        name: "Чили",
        code: "CL"
    },
    {
        name: "Швейцария",
        code: "CH"
    },
    {
        name: "Швеция",
        code: "SE"
    },
    {
        name: "Шри Ланка",
        code: "LK"
    },
    {
        name: "ЮАР",
        code: "ZA"
    },
    {
        name: "Южен Судан",
        code: "SS"
    },
    {
        name: "Южна Джорджия и Южни Сандвичеви острови",
        code: "GS"
    },
    {
        name: "Южна Корея",
        code: "KR"
    },
    {
        name: "Ямайка",
        code: "JM"
    },
    {
        name: "Япония",
        code: "JP"
    }
]
