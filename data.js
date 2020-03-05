(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['countryRegionData'] = factory();
  }
}(this, function () {

return [
  {
    "countryName": "Afghanistan",
    "countryShortCode": "AF",
    "regions": []
  },
  {
    "countryName": "Aland Islands",
    "countryShortCode": "AX",
    "regions": []
  },
  {
    "countryName": "Albania",
    "countryShortCode": "AL",
    "regions": []
  },
  {
    "countryName": "Algeria",
    "countryShortCode": "DZ",
    "regions": []
  },
  {
    "countryName": "Andorra",
    "countryShortCode": "AD",
    "regions": []
  },
  {
    "countryName": "Angola",
    "countryShortCode": "AO",
    "regions": []
  },
  {
    "countryName": "Anguilla",
    "countryShortCode": "AI",
    "regions": []
  },
  {
    "countryName": "Antigua and Barbuda",
    "countryShortCode": "AG",
    "regions": []
  },
  {
    "countryName": "Argentina",
    "countryShortCode": "AR",
    "regions": [
      {
        "name": "Buenos Aires",
        "shortCode": "B",
        "paypalCode": "BUENOS AIRES",
        "addressText": ""
      },
      {
        "name": "Buenos Aires Capital Federal",
        "shortCode": "C",
        "paypalCode": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
        "addressText": ""
      },
      {
        "name": "Catamarca",
        "shortCode": "K",
        "paypalCode": "CATAMARCA",
        "addressText": ""
      },
      {
        "name": "Chaco",
        "shortCode": "H",
        "paypalCode": "CHACO",
        "addressText": ""
      },
      {
        "name": "Chubut",
        "shortCode": "U",
        "paypalCode": "CHUBUT",
        "addressText": ""
      },
      {
        "name": "Córdoba",
        "shortCode": "X",
        "paypalCode": "CÓRDOBA",
        "addressText": ""
      },
      {
        "name": "Corrientes",
        "shortCode": "W",
        "paypalCode": "CORRIENTES",
        "addressText": ""
      },
      {
        "name": "Entre Ríos",
        "shortCode": "E",
        "paypalCode": "ENTRE RÍOS",
        "addressText": ""
      },
      {
        "name": "Formosa",
        "shortCode": "P",
        "paypalCode": "FORMOSA",
        "addressText": ""
      },
      {
        "name": "Jujuy",
        "shortCode": "Y",
        "paypalCode": "JUJUY",
        "addressText": ""
      },
      {
        "name": "La Pampa",
        "shortCode": "L",
        "paypalCode": "LA PAMPA",
        "addressText": ""
      },
      {
        "name": "La Rioja",
        "shortCode": "F",
        "paypalCode": "LA RIOJA",
        "addressText": ""
      },
      {
        "name": "Mendoza",
        "shortCode": "M",
        "paypalCode": "MENDOZA",
        "addressText": ""
      },
      {
        "name": "Misiones",
        "shortCode": "N",
        "paypalCode": "MISIONES",
        "addressText": ""
      },
      {
        "name": "Neuquén",
        "shortCode": "Q",
        "paypalCode": "NEUQUÉN",
        "addressText": ""
      },
      {
        "name": "Río Negro",
        "shortCode": "R",
        "paypalCode": "RÍO NEGRO",
        "addressText": ""
      },
      {
        "name": "Salta",
        "shortCode": "A",
        "paypalCode": "SALTA",
        "addressText": ""
      },
      {
        "name": "San Juan",
        "shortCode": "J",
        "paypalCode": "SAN JUAN",
        "addressText": ""
      },
      {
        "name": "San Luis",
        "shortCode": "D",
        "paypalCode": "SAN LUIS",
        "addressText": ""
      },
      {
        "name": "Santa Cruz",
        "shortCode": "Z",
        "paypalCode": "SANTA CRUZ",
        "addressText": ""
      },
      {
        "name": "Santa Fe",
        "shortCode": "S",
        "paypalCode": "SANTA FE",
        "addressText": ""
      },
      {
        "name": "Santiago del Estero",
        "shortCode": "G",
        "paypalCode": "SANTIAGO DEL ESTERO",
        "addressText": ""
      },
      {
        "name": "Tierra del Fuego",
        "shortCode": "V",
        "paypalCode": "TIERRA DEL FUEGO",
        "addressText": ""
      },
      {
        "name": "Tucumán",
        "shortCode": "T",
        "paypalCode": "TUCUMÁN",
        "addressText": ""
      }
    ]
  },
  {
    "countryName": "Armenia",
    "countryShortCode": "AM",
    "regions": []
  },
  {
    "countryName": "Aruba",
    "countryShortCode": "AW",
    "regions": []
  },
  {
    "countryName": "Australia",
    "countryShortCode": "AU",
    "regions": [
      {
        "name": "Australian Capital Territory",
        "shortCode": "ACT",
        "addressText": "ACT"
      },
      {
        "name": "New South Wales",
        "shortCode": "NSW",
        "addressText": "NSW"
      },
      {
        "name": "Northern Territory",
        "shortCode": "NT",
        "addressText": "NT"
      },
      {
        "name": "Queensland",
        "shortCode": "QLD",
        "addressText": "QLD"
      },
      {
        "name": "South Australia",
        "shortCode": "SA",
        "addressText": "SA"
      },
      {
        "name": "Tasmania",
        "shortCode": "TAS",
        "addressText": "TAS"
      },
      {
        "name": "Victoria",
        "shortCode": "VIC",
        "addressText": "VIC"
      },
      {
        "name": "Western Australia",
        "shortCode": "WA",
        "addressText": "WA"
      }
    ]
  },
  {
    "countryName": "Austria",
    "countryShortCode": "AT",
    "regions": []
  },
  {
    "countryName": "Azerbaijan",
    "countryShortCode": "AZ",
    "regions": []
  },
  {
    "countryName": "Bahamas",
    "countryShortCode": "BS",
    "regions": []
  },
  {
    "countryName": "Bahrain",
    "countryShortCode": "BH",
    "regions": []
  },
  {
    "countryName": "Bangladesh",
    "countryShortCode": "BD",
    "regions": []
  },
  {
    "countryName": "Barbados",
    "countryShortCode": "BB",
    "regions": []
  },
  {
    "countryName": "Belarus",
    "countryShortCode": "BY",
    "regions": []
  },
  {
    "countryName": "Belgium",
    "countryShortCode": "BE",
    "regions": []
  },
  {
    "countryName": "Belize",
    "countryShortCode": "BZ",
    "regions": []
  },
  {
    "countryName": "Benin",
    "countryShortCode": "BJ",
    "regions": []
  },
  {
    "countryName": "Bermuda",
    "countryShortCode": "BM",
    "regions": []
  },
  {
    "countryName": "Bhutan",
    "countryShortCode": "BT",
    "regions": []
  },
  {
    "countryName": "Bolivia",
    "countryShortCode": "BO",
    "regions": []
  },
  {
    "countryName": "Bosnia and Herzegovina",
    "countryShortCode": "BA",
    "regions": []
  },
  {
    "countryName": "Botswana",
    "countryShortCode": "BW",
    "regions": []
  },
  {
    "countryName": "Brazil",
    "countryShortCode": "BR",
    "regions": [
      {
        "name": "Acre",
        "shortCode": "AC",
        "paypalCode": "AC",
        "addressText": "AC"
      },
      {
        "name": "Alagoas",
        "shortCode": "AL",
        "paypalCode": "AL",
        "addressText": "AL"
      },
      {
        "name": "Amapá",
        "shortCode": "AP",
        "paypalCode": "AP",
        "addressText": "AP"
      },
      {
        "name": "Amazonas",
        "shortCode": "AM",
        "paypalCode": "AM",
        "addressText": "AM"
      },
      {
        "name": "Bahia",
        "shortCode": "BA",
        "paypalCode": "BA",
        "addressText": "BA"
      },
      {
        "name": "Ceará",
        "shortCode": "CE",
        "paypalCode": "CE",
        "addressText": "CE"
      },
      {
        "name": "Distrito Federal",
        "shortCode": "DF",
        "paypalCode": "DF",
        "addressText": "DF"
      },
      {
        "name": "Espírito Santo",
        "shortCode": "ES",
        "paypalCode": "ES",
        "addressText": "ES"
      },
      {
        "name": "Goiás",
        "shortCode": "GO",
        "paypalCode": "GO",
        "addressText": "GO"
      },
      {
        "name": "Maranhão",
        "shortCode": "MA",
        "paypalCode": "MA",
        "addressText": "MA"
      },
      {
        "name": "Mato Grosso",
        "shortCode": "MT",
        "paypalCode": "MT",
        "addressText": "MT"
      },
      {
        "name": "Mato Grosso do Sul",
        "shortCode": "MS",
        "paypalCode": "MS",
        "addressText": "MS"
      },
      {
        "name": "Minas Gerais",
        "shortCode": "MG",
        "paypalCode": "MG",
        "addressText": "MG"
      },
      {
        "name": "Pará",
        "shortCode": "PA",
        "paypalCode": "PA",
        "addressText": "PA"
      },
      {
        "name": "Paraíba",
        "shortCode": "PB",
        "paypalCode": "PB",
        "addressText": "PB"
      },
      {
        "name": "Paraná",
        "shortCode": "PR",
        "paypalCode": "PR",
        "addressText": "PR"
      },
      {
        "name": "Pernambuco",
        "shortCode": "PE",
        "paypalCode": "PE",
        "addressText": "PE"
      },
      {
        "name": "Piauí",
        "shortCode": "PI",
        "paypalCode": "PI",
        "addressText": "PI"
      },
      {
        "name": "Rio de Janeiro",
        "shortCode": "RJ",
        "paypalCode": "RJ",
        "addressText": "RJ"
      },
      {
        "name": "Rio Grande do Norte",
        "shortCode": "RN",
        "paypalCode": "RN",
        "addressText": "RN"
      },
      {
        "name": "Rio Grande do Sul",
        "shortCode": "RS",
        "paypalCode": "RS",
        "addressText": "RS"
      },
      {
        "name": "Rondônia",
        "shortCode": "RO",
        "paypalCode": "RO",
        "addressText": "RO"
      },
      {
        "name": "Roraima",
        "shortCode": "RR",
        "paypalCode": "RR",
        "addressText": "RR"
      },
      {
        "name": "Santa Catarina",
        "shortCode": "SC",
        "paypalCode": "SC",
        "addressText": "SC"
      },
      {
        "name": "São Paulo",
        "shortCode": "SP",
        "paypalCode": "SP",
        "addressText": "SP"
      },
      {
        "name": "Sergipe",
        "shortCode": "SE",
        "paypalCode": "SE",
        "addressText": "SE"
      },
      {
        "name": "Tocantins",
        "shortCode": "TO",
        "paypalCode": "TO",
        "addressText": "TO"
      }
    ]
  },
  {
    "countryName": "British Indian Ocean Territory",
    "countryShortCode": "IO",
    "regions": []
  },
  {
    "countryName": "British Virgin Islands",
    "countryShortCode": "VG",
    "regions": []
  },
  {
    "countryName": "Brunei",
    "countryShortCode": "BN",
    "regions": []
  },
  {
    "countryName": "Bulgaria",
    "countryShortCode": "BG",
    "regions": []
  },
  {
    "countryName": "Burkina Faso",
    "countryShortCode": "BF",
    "regions": []
  },
  {
    "countryName": "Burundi",
    "countryShortCode": "BI",
    "regions": []
  },
  {
    "countryName": "Cambodia",
    "countryShortCode": "KH",
    "regions": []
  },
  {
    "countryName": "Cameroon",
    "countryShortCode": "CM",
    "regions": []
  },
  {
    "countryName": "Canada",
    "countryShortCode": "CA",
    "regions": [
      {
        "name": "Alberta",
        "shortCode": "AB",
        "paypalCode": "AB",
        "addressText": "AB"
      },
      {
        "name": "British Columbia",
        "shortCode": "BC",
        "paypalCode": "BC",
        "addressText": "BC"
      },
      {
        "name": "Manitoba",
        "shortCode": "MB",
        "paypalCode": "MB",
        "addressText": "MB"
      },
      {
        "name": "New Brunswick",
        "shortCode": "NB",
        "paypalCode": "NB",
        "addressText": "NB"
      },
      {
        "name": "Newfoundland and Labrador",
        "shortCode": "NL",
        "paypalCode": "NL",
        "addressText": "NL"
      },
      {
        "name": "Northwest Territories",
        "shortCode": "NT",
        "paypalCode": "NT",
        "addressText": "NT"
      },
      {
        "name": "Nova Scotia",
        "shortCode": "NS",
        "paypalCode": "NS",
        "addressText": "NS"
      },
      {
        "name": "Nunavut",
        "shortCode": "NU",
        "paypalCode": "NU",
        "addressText": "NU"
      },
      {
        "name": "Ontario",
        "shortCode": "ON",
        "paypalCode": "ON",
        "addressText": "ON"
      },
      {
        "name": "Prince Edward Island",
        "shortCode": "PE",
        "paypalCode": "PE",
        "addressText": "PE"
      },
      {
        "name": "Quebec",
        "shortCode": "QC",
        "paypalCode": "QC",
        "addressText": "QC"
      },
      {
        "name": "Saskatchewan",
        "shortCode": "SK",
        "paypalCode": "SK",
        "addressText": "SK"
      },
      {
        "name": "Yukon",
        "shortCode": "YT",
        "paypalCode": "YT",
        "addressText": "YT"
      }
    ]
  },
  {
    "countryName": "Cape Verde",
    "countryShortCode": "CV",
    "regions": []
  },
  {
    "countryName": "Cayman Islands",
    "countryShortCode": "KY",
    "regions": []
  },
  {
    "countryName": "Central African Republic",
    "countryShortCode": "CF",
    "regions": []
  },
  {
    "countryName": "Chad",
    "countryShortCode": "TD",
    "regions": []
  },
  {
    "countryName": "Channel Islands",
    "countryShortCode": "JE",
    "regions": []
  },
  {
    "countryName": "Chile",
    "countryShortCode": "CL",
    "regions": [
      {
        "name": "Aisén del General Carlos Ibáñez del Campo",
        "shortCode": "AI",
        "addressText": "Aisen"
      },
      {
        "name": "Antofagasta",
        "shortCode": "AN",
        "addressText": "Antofagasta"
      },
      {
        "name": "Araucanía",
        "shortCode": "AR",
        "addressText": "La Araucania"
      },
      {
        "name": "Arica y Parinacota",
        "shortCode": "AP",
        "addressText": "Arica y Parinacota"
      },
      {
        "name": "Atacama",
        "shortCode": "AT",
        "addressText": "Atacama"
      },
      {
        "name": "Bío-Bío",
        "shortCode": "BI",
        "addressText": "Biobio"
      },
      {
        "name": "Coquimbo",
        "shortCode": "CO",
        "addressText": "Coquimbo"
      },
      {
        "name": "Libertador General Bernardo O'Higgins",
        "shortCode": "LI",
        "addressText": "O Higgins"
      },
      {
        "name": "Los Lagos",
        "shortCode": "LL",
        "addressText": "Los Lagos"
      },
      {
        "name": "Los Ríos",
        "shortCode": "LR",
        "addressText": "Los Rios"
      },
      {
        "name": "Magallanes y Antartica Chilena",
        "shortCode": "MA",
        "addressText": "Magallanes"
      },
      {
        "name": "Maule",
        "shortCode": "ML",
        "addressText": "Maule"
      },
      {
        "name": "Ñuble",
        "shortCode": "NB",
        "addressText": "Nuble"
      },
      {
        "name": "Región Metropolitana de Santiago",
        "shortCode": "RM",
        "addressText": "Region Metropolitana"
      },
      {
        "name": "Tarapacá",
        "shortCode": "TA",
        "addressText": "Tarapaca"
      },
      {
        "name": "Valparaíso",
        "shortCode": "VS",
        "addressText": "Valparaiso"
      }
    ]
  },
  {
    "countryName": "China",
    "countryShortCode": "CN",
    "regions": [
      {
        "name": "安徽省 (Anhui)",
        "legacyShortCode": "34",
        "shortCode": "AH",
        "paypalCode": "CN-AH",
        "addressText": "ANHUI"
      },
      {
        "name": "北京市 (Beijing)",
        "legacyShortCode": "11",
        "shortCode": "BJ",
        "paypalCode": "CN-BJ",
        "addressText": "BEIJING"
      },
      {
        "name": "重庆市 (Chongqing)",
        "legacyShortCode": "50",
        "shortCode": "CQ",
        "paypalCode": "CN-CQ",
        "addressText": "CHONGQING"
      },
      {
        "name": "福建省 (Fujian)",
        "legacyShortCode": "35",
        "shortCode": "FJ",
        "paypalCode": "CN-FJ",
        "addressText": "FUJIAN"
      },
      {
        "name": "广东省 (Guangdong)",
        "legacyShortCode": "44",
        "shortCode": "GD",
        "paypalCode": "CN-GD",
        "addressText": "GUANGDONG"
      },
      {
        "name": "甘肃省 (Gansu)",
        "legacyShortCode": "62",
        "shortCode": "GS",
        "paypalCode": "CN-GS",
        "addressText": "GANSU"
      },
      {
        "name": "广西壮族自治区 (Guangxi)",
        "legacyShortCode": "45",
        "shortCode": "GX",
        "paypalCode": "CN-GX",
        "addressText": "GUANGXI"
      },
      {
        "name": "贵州省 (Guizhou)",
        "legacyShortCode": "52",
        "shortCode": "GZ",
        "paypalCode": "CN-GZ",
        "addressText": "GUIZHOU"
      },
      {
        "name": "河南省 (Henan)",
        "legacyShortCode": "41",
        "shortCode": "HA",
        "paypalCode": "CN-HA",
        "addressText": "HENAN"
      },
      {
        "name": "湖北省 (Hubei)",
        "legacyShortCode": "42",
        "shortCode": "HB",
        "paypalCode": "CN-HB",
        "addressText": "HUBEI"
      },
      {
        "name": "河北省 (Hebei)",
        "legacyShortCode": "13",
        "shortCode": "HE",
        "paypalCode": "CN-HE",
        "addressText": "HEBEI"
      },
      {
        "name": "海南省 (Hainan)",
        "legacyShortCode": "46",
        "shortCode": "HI",
        "paypalCode": "CN-HI",
        "addressText": "HAINAN"
      },
      {
        "name": "香港特别行政区 (Hong Kong)",
        "legacyShortCode": "91",
        "shortCode": "HK",
        "paypalCode": "CN-HK",
        "addressText": "HONGKONG"
      },
      {
        "name": "黑龙江省 (Heilongjiang)",
        "legacyShortCode": "23",
        "shortCode": "HL",
        "paypalCode": "CN-HL",
        "addressText": "HEILONGJIANG"
      },
      {
        "name": "湖南省 (Hunan)",
        "legacyShortCode": "43",
        "shortCode": "HN",
        "paypalCode": "CN-HN",
        "addressText": "HUNAN"
      },
      {
        "name": "吉林省 (Jilin)",
        "legacyShortCode": "22",
        "shortCode": "JL",
        "paypalCode": "CN-JL",
        "addressText": "JILIN"
      },
      {
        "name": "江苏省 (Jiangsu)",
        "legacyShortCode": "32",
        "shortCode": "JS",
        "paypalCode": "CN-JS",
        "addressText": "JIANGSU"
      },
      {
        "name": "江西省 (Jiangxi)",
        "legacyShortCode": "36",
        "shortCode": "JX",
        "paypalCode": "CN-JX",
        "addressText": "JIANGXI"
      },
      {
        "name": "辽宁省 (Liaoning)",
        "legacyShortCode": "21",
        "shortCode": "LN",
        "paypalCode": "CN-LN",
        "addressText": "LIAONING"
      },
      {
        "name": "澳门特别行政区 (Macau)",
        "legacyShortCode": "92",
        "shortCode": "MO",
        "paypalCode": "CN-MO",
        "addressText": "MACAO"
      },
      {
        "name": "内蒙古自治区 (Inner Mongolia)",
        "legacyShortCode": "15",
        "shortCode": "NM",
        "paypalCode": "CN-NM",
        "addressText": "INNER MONGOLIA"
      },
      {
        "name": "宁夏回族自治区 (Ningxia)",
        "legacyShortCode": "64",
        "shortCode": "NX",
        "paypalCode": "CN-NX",
        "addressText": "NINGXIA"
      },
      {
        "name": "青海省 (Qinghai)",
        "legacyShortCode": "63",
        "shortCode": "QH",
        "paypalCode": "CN-QH",
        "addressText": "QINGHAI"
      },
      {
        "name": "四川省 (Sichuan)",
        "legacyShortCode": "51",
        "shortCode": "SC",
        "paypalCode": "CN-SC",
        "addressText": "SICHUAN"
      },
      {
        "name": "山东省 (Shandong)",
        "legacyShortCode": "37",
        "shortCode": "SD",
        "paypalCode": "CN-SD",
        "addressText": "SHANDONG"
      },
      {
        "name": "上海市 (Shanghai)",
        "legacyShortCode": "31",
        "shortCode": "SH",
        "paypalCode": "CN-SH",
        "addressText": "SHANGHAI"
      },
      {
        "name": "陕西省 (Shaanxi)",
        "legacyShortCode": "61",
        "shortCode": "SN",
        "paypalCode": "CN-SN",
        "addressText": "SHAANXI"
      },
      {
        "name": "山西省 (Shanxi)",
        "legacyShortCode": "14",
        "shortCode": "SX",
        "paypalCode": "CN-SX",
        "addressText": "SHANXI"
      },
      {
        "name": "天津市 (Tianjin)",
        "legacyShortCode": "12",
        "shortCode": "TJ",
        "paypalCode": "CN-TJ",
        "addressText": "TIANJIN"
      },
      {
        "name": "台湾省 (Taiwan)",
        "legacyShortCode": "",
        "shortCode": "TW",
        "paypalCode": "CN-TW",
        "addressText": "TAIWAN"
      },
      {
        "name": "新疆维吾尔自治区 (Xinjiang)",
        "legacyShortCode": "65",
        "shortCode": "XJ",
        "paypalCode": "CN-XJ",
        "addressText": "XINJIANG"
      },
      {
        "name": "西藏自治区 (Tibet)",
        "legacyShortCode": "54",
        "shortCode": "XZ",
        "paypalCode": "CN-XZ",
        "addressText": "TIBET"
      },
      {
        "name": "云南省 (Yunnan)",
        "legacyShortCode": "53",
        "shortCode": "YN",
        "paypalCode": "CN-YN",
        "addressText": "YUNNAN"
      },
      {
        "name": "浙江省 (Zhejiang)",
        "legacyShortCode": "33",
        "shortCode": "ZJ",
        "paypalCode": "CN-ZJ",
        "addressText": "ZHEJIANG"
      }
    ]
  },
  {
    "countryName": "Christmas Island",
    "countryShortCode": "CX",
    "regions": []
  },
  {
    "countryName": "Cocos Islands",
    "countryShortCode": "CC",
    "regions": []
  },
  {
    "countryName": "Colombia",
    "countryShortCode": "CO",
    "regions": [
      {
        "name": "Amazonas",
        "shortCode": "AMA",
        "addressText": "Amazonas"
      },
      {
        "name": "Antioquia",
        "shortCode": "ANT",
        "addressText": "Antioquia"
      },
      {
        "name": "Arauca",
        "shortCode": "ARA",
        "addressText": "Arauca"
      },
      {
        "name": "Archipiélago de San Andrés",
        "shortCode": "SAP",
        "addressText": "San Andres"
      },
      {
        "name": "Atlántico",
        "shortCode": "ATL",
        "addressText": "Atlantico"
      },
      {
        "name": "Bogotá D.C.",
        "shortCode": "DC",
        "addressText": "Distrito Capital"
      },
      {
        "name": "Bolívar",
        "shortCode": "BOL",
        "addressText": "Bolivar"
      },
      {
        "name": "Boyacá",
        "shortCode": "BOY",
        "addressText": "Boyaca"
      },
      {
        "name": "Caldas",
        "shortCode": "CAL",
        "addressText": "Caldas"
      },
      {
        "name": "Caquetá",
        "shortCode": "CAQ",
        "addressText": "Caqueta"
      },
      {
        "name": "Casanare",
        "shortCode": "CAS",
        "addressText": "Casanare"
      },
      {
        "name": "Cauca",
        "shortCode": "CAU",
        "addressText": "Cauca"
      },
      {
        "name": "Cesar",
        "shortCode": "CES",
        "addressText": "Cesar"
      },
      {
        "name": "Chocó",
        "shortCode": "CHO",
        "addressText": "Choco"
      },
      {
        "name": "Córdoba",
        "shortCode": "COR",
        "addressText": "Cordoba"
      },
      {
        "name": "Cundinamarca",
        "shortCode": "CUN",
        "addressText": "Cundinamarca"
      },
      {
        "name": "Guainía",
        "shortCode": "GUA",
        "addressText": "Guainia"
      },
      {
        "name": "Guaviare",
        "shortCode": "GUV",
        "addressText": "Guaviare"
      },
      {
        "name": "Huila",
        "shortCode": "HUI",
        "addressText": "Huila"
      },
      {
        "name": "La Guajira",
        "shortCode": "LAG",
        "addressText": "La Guajira"
      },
      {
        "name": "Magdalena",
        "shortCode": "MAG",
        "addressText": "Magdalena"
      },
      {
        "name": "Meta",
        "shortCode": "MET",
        "addressText": "Meta"
      },
      {
        "name": "Nariño",
        "shortCode": "NAR",
        "addressText": "Narino"
      },
      {
        "name": "Norte de Santander",
        "shortCode": "NSA",
        "addressText": "Norte de Santander"
      },
      {
        "name": "Putumayo",
        "shortCode": "PUT",
        "addressText": "Putumayo"
      },
      {
        "name": "Quindío",
        "shortCode": "QUI",
        "addressText": "Quindio"
      },
      {
        "name": "Risaralda",
        "shortCode": "RIS",
        "addressText": "Risaralda"
      },
      {
        "name": "Santander",
        "shortCode": "SAN",
        "addressText": "Santander"
      },
      {
        "name": "Sucre",
        "shortCode": "SUC",
        "addressText": "Sucre"
      },
      {
        "name": "Tolima",
        "shortCode": "TOL",
        "addressText": "Tolima"
      },
      {
        "name": "Valle del Cauca",
        "shortCode": "VAC",
        "addressText": "Valle"
      },
      {
        "name": "Vaupés",
        "shortCode": "VAU",
        "addressText": "Vaupes"
      },
      {
        "name": "Vichada",
        "shortCode": "VID",
        "addressText": "Vichada"
      }
    ]
  },
  {
    "countryName": "Comoros",
    "countryShortCode": "KM",
    "regions": []
  },
  {
    "countryName": "Republic of the Congo",
    "countryShortCode": "CG",
    "regions": []
  },
  {
    "countryName": "Democratic Republic of the Congo",
    "countryShortCode": "CD",
    "regions": []
  },
  {
    "countryName": "Cook Islands",
    "countryShortCode": "CK",
    "regions": []
  },
  {
    "countryName": "Costa Rica",
    "countryShortCode": "CR",
    "regions": []
  },
  {
    "countryName": "Croatia",
    "countryShortCode": "HR",
    "regions": []
  },
  {
    "countryName": "Cuba",
    "countryShortCode": "CU",
    "regions": []
  },
  {
    "countryName": "Curacao",
    "countryShortCode": "CW",
    "regions": []
  },
  {
    "countryName": "Cyprus",
    "countryShortCode": "CY",
    "regions": []
  },
  {
    "countryName": "Czech Republic",
    "countryShortCode": "CZ",
    "regions": []
  },
  {
    "countryName": "Denmark",
    "countryShortCode": "DK",
    "regions": []
  },
  {
    "countryName": "Djibouti",
    "countryShortCode": "DJ",
    "regions": []
  },
  {
    "countryName": "Dominica",
    "countryShortCode": "DM",
    "regions": []
  },
  {
    "countryName": "Dominican Republic",
    "countryShortCode": "DO",
    "regions": []
  },
  {
    "countryName": "Ecuador",
    "countryShortCode": "EC",
    "regions": []
  },
  {
    "countryName": "Egypt",
    "countryShortCode": "EG",
    "regions": []
  },
  {
    "countryName": "El Salvador",
    "countryShortCode": "SV",
    "regions": []
  },
  {
    "countryName": "Equatorial Guinea",
    "countryShortCode": "GQ",
    "regions": []
  },
  {
    "countryName": "Eritrea",
    "countryShortCode": "ER",
    "regions": []
  },
  {
    "countryName": "Estonia",
    "countryShortCode": "EE",
    "regions": []
  },
  {
    "countryName": "Eswatini",
    "countryShortCode": "SZ",
    "regions": []
  },
  {
    "countryName": "Ethiopia",
    "countryShortCode": "ET",
    "regions": []
  },
  {
    "countryName": "Falkland Islands",
    "countryShortCode": "FK",
    "regions": []
  },
  {
    "countryName": "Faroe Islands",
    "countryShortCode": "FO",
    "regions": []
  },
  {
    "countryName": "Fiji",
    "countryShortCode": "FJ",
    "regions": []
  },
  {
    "countryName": "Finland",
    "countryShortCode": "FI",
    "regions": []
  },
  {
    "countryName": "France",
    "countryShortCode": "FR",
    "regions": []
  },
  {
    "countryName": "French Polynesia",
    "countryShortCode": "PF",
    "regions": []
  },
  {
    "countryName": "Gabon",
    "countryShortCode": "GA",
    "regions": []
  },
  {
    "countryName": "Gambia",
    "countryShortCode": "GM",
    "regions": []
  },
  {
    "countryName": "Georgia",
    "countryShortCode": "GE",
    "regions": []
  },
  {
    "countryName": "Germany",
    "countryShortCode": "DE",
    "regions": []
  },
  {
    "countryName": "Ghana",
    "countryShortCode": "GH",
    "regions": []
  },
  {
    "countryName": "Gibraltar",
    "countryShortCode": "GI",
    "regions": []
  },
  {
    "countryName": "Greece",
    "countryShortCode": "GR",
    "regions": []
  },
  {
    "countryName": "Greenland",
    "countryShortCode": "GL",
    "regions": []
  },
  {
    "countryName": "Grenada",
    "countryShortCode": "GD",
    "regions": []
  },
  {
    "countryName": "Guadeloupe",
    "countryShortCode": "GP",
    "regions": []
  },
  {
    "countryName": "Guatemala",
    "countryShortCode": "GT",
    "regions": []
  },
  {
    "countryName": "Guernsey",
    "countryShortCode": "GG",
    "regions": []
  },
  {
    "countryName": "Guinea",
    "countryShortCode": "GN",
    "regions": []
  },
  {
    "countryName": "Guinea-Bissau",
    "countryShortCode": "GW",
    "regions": []
  },
  {
    "countryName": "Guyana",
    "countryShortCode": "GY",
    "regions": []
  },
  {
    "countryName": "Haiti",
    "countryShortCode": "HT",
    "regions": []
  },
  {
    "countryName": "Honduras",
    "countryShortCode": "HN",
    "regions": []
  },
  {
    "countryName": "Hong Kong",
    "countryShortCode": "HK",
    "regions": []
  },
  {
    "countryName": "Hungary",
    "countryShortCode": "HU",
    "regions": []
  },
  {
    "countryName": "Iceland",
    "countryShortCode": "IS",
    "regions": []
  },
  {
    "countryName": "India",
    "countryShortCode": "IN",
    "regions": [
      {
        "name": "Andaman and Nicobar Islands",
        "shortCode": "AN",
        "paypalCode": "Andaman and Nicobar Islands",
        "addressText": "Andaman and Nicobar Islands"
      },
      {
        "name": "Andhra Pradesh",
        "shortCode": "AP",
        "paypalCode": "Andhra Pradesh",
        "addressText": "Andhra Pradesh"
      },
      {
        "name": "Arunachal Pradesh",
        "shortCode": "AR",
        "paypalCode": "Arunachal Pradesh",
        "addressText": "Arunachal Pradesh"
      },
      {
        "name": "Assam",
        "shortCode": "AS",
        "paypalCode": "Assam",
        "addressText": "Assam"
      },
      {
        "name": "Bihar",
        "shortCode": "BR",
        "paypalCode": "Bihar",
        "addressText": "Bihar"
      },
      {
        "name": "Chandigarh",
        "shortCode": "CH",
        "paypalCode": "Chandigarh",
        "addressText": "Chandigarh"
      },
      {
        "name": "Chhattisgarh",
        "shortCode": "CT",
        "paypalCode": "Chhattisgarh",
        "addressText": "Chhattisgarh"
      },
      {
        "name": "Dadra and Nagar Haveli",
        "shortCode": "DN",
        "paypalCode": "Dadra and Nagar Haveli",
        "addressText": "Dadra and Nagar Haveli"
      },
      {
        "name": "Daman and Diu",
        "shortCode": "DD",
        "paypalCode": "Daman and Diu",
        "addressText": "Daman and Diu"
      },
      {
        "name": "Delhi",
        "shortCode": "DL",
        "paypalCode": "Delhi (NCT)",
        "addressText": "Delhi"
      },
      {
        "name": "Goa",
        "shortCode": "GA",
        "paypalCode": "Goa",
        "addressText": "Goa"
      },
      {
        "name": "Gujarat",
        "shortCode": "GJ",
        "paypalCode": "Gujarat",
        "addressText": "Gujarat"
      },
      {
        "name": "Haryana",
        "shortCode": "HR",
        "paypalCode": "Haryana",
        "addressText": "Haryana"
      },
      {
        "name": "Himachal Pradesh",
        "shortCode": "HP",
        "paypalCode": "Himachal Pradesh",
        "addressText": "Himachal Pradesh"
      },
      {
        "name": "Jammu and Kashmir",
        "shortCode": "JK",
        "paypalCode": "Jammu and Kashmir",
        "addressText": "Jammu and Kashmir"
      },
      {
        "name": "Jharkhand",
        "shortCode": "JH",
        "paypalCode": "Jharkhand",
        "addressText": "Jharkhand"
      },
      {
        "name": "Karnataka",
        "shortCode": "KA",
        "paypalCode": "Karnataka",
        "addressText": "Karnataka"
      },
      {
        "name": "Kerala",
        "shortCode": "KL",
        "paypalCode": "Kerala",
        "addressText": "Keralam"
      },
      {
        "name": "Lakshadweep",
        "shortCode": "LD",
        "paypalCode": "Lakshadweep",
        "addressText": "Lakshadweep"
      },
      {
        "name": "Madhya Pradesh",
        "shortCode": "MP",
        "paypalCode": "Madhya Pradesh",
        "addressText": "Madhya Pradesh"
      },
      {
        "name": "Maharashtra",
        "shortCode": "MH",
        "paypalCode": "Maharashtra",
        "addressText": "Maharashtra"
      },
      {
        "name": "Manipur",
        "shortCode": "MN",
        "paypalCode": "Manipur",
        "addressText": "Manipur"
      },
      {
        "name": "Meghalaya",
        "shortCode": "ML",
        "paypalCode": "Meghalaya",
        "addressText": "Meghalaya"
      },
      {
        "name": "Mizoram",
        "shortCode": "MZ",
        "paypalCode": "Mizoram",
        "addressText": "Mizoram"
      },
      {
        "name": "Nagaland",
        "shortCode": "NL",
        "paypalCode": "Nagaland",
        "addressText": "Nagaland"
      },
      {
        "name": "Odisha",
        "shortCode": "OR",
        "paypalCode": "Odisha",
        "addressText": "Odisha"
      },
      {
        "name": "Puducherry",
        "shortCode": "PY",
        "paypalCode": "Puducherry",
        "addressText": "Pondicherry"
      },
      {
        "name": "Punjab",
        "shortCode": "PB",
        "paypalCode": "Punjab",
        "addressText": "Punjab"
      },
      {
        "name": "Rajasthan",
        "shortCode": "RJ",
        "paypalCode": "Rajasthan",
        "addressText": "Rajasthan"
      },
      {
        "name": "Sikkim",
        "shortCode": "WK",
        "paypalCode": "Sikkim",
        "addressText": "Sikkim"
      },
      {
        "name": "Tamil Nadu",
        "shortCode": "TN",
        "paypalCode": "Tamil Nadu",
        "addressText": "Tamil Nadu"
      },
      {
        "name": "Telangana",
        "shortCode": "TG",
        "paypalCode": "Telangana",
        "addressText": "Telangana"
      },
      {
        "name": "Tripura",
        "shortCode": "TR",
        "paypalCode": "Tripura",
        "addressText": "Tripura"
      },
      {
        "name": "Uttarakhand",
        "shortCode": "UT",
        "paypalCode": "Uttarakhand",
        "addressText": "Uttarakhand"
      },
      {
        "name": "Uttar Pradesh",
        "shortCode": "UP",
        "paypalCode": "Uttar Pradesh",
        "addressText": "Uttar Pradesh"
      },
      {
        "name": "West Bengal",
        "shortCode": "WB",
        "paypalCode": "West Bengal",
        "addressText": "West Bengal"
      }
    ]
  },
  {
    "countryName": "Indonesia",
    "countryShortCode": "ID",
    "regions": [
      {
        "name": "Aceh",
        "shortCode": "AC",
        "paypalCode": "ID-AC",
        "addressText": ""
      },
      {
        "name": "Bali",
        "shortCode": "BA",
        "paypalCode": "ID-BA",
        "addressText": ""
      },
      {
        "name": "Bangka Belitung (Babel)",
        "shortCode": "BB",
        "paypalCode": "ID-BB",
        "addressText": ""
      },
      {
        "name": "Bengkulu",
        "shortCode": "BE",
        "paypalCode": "ID-BE",
        "addressText": ""
      },
      {
        "name": "Banten",
        "shortCode": "BT",
        "paypalCode": "ID-BT",
        "addressText": ""
      },
      {
        "name": "Gorontalo",
        "shortCode": "GO",
        "paypalCode": "ID-GO",
        "addressText": ""
      },
      {
        "name": "Jambi",
        "shortCode": "JA",
        "paypalCode": "ID-JA",
        "addressText": ""
      },
      {
        "name": "West Java (Jabar)",
        "shortCode": "JB",
        "paypalCode": "ID-JB",
        "addressText": ""
      },
      {
        "name": "East Java (Jatim)",
        "shortCode": "JI",
        "paypalCode": "ID-JI",
        "addressText": ""
      },
      {
        "name": "Jakarta (DKI)",
        "shortCode": "JK",
        "paypalCode": "ID-JK",
        "addressText": ""
      },
      {
        "name": "Central Java (Jateng)",
        "shortCode": "JT",
        "paypalCode": "ID-JT",
        "addressText": ""
      },
      {
        "name": "West Kalimantan (Kalbar)",
        "shortCode": "KB",
        "paypalCode": "ID-KB",
        "addressText": ""
      },
      {
        "name": "East Kalimantan (Kaltim)",
        "shortCode": "KI",
        "paypalCode": "ID-KI",
        "addressText": ""
      },
      {
        "name": "Riau Islands (Kepri)",
        "shortCode": "KR",
        "paypalCode": "ID-KR",
        "addressText": ""
      },
      {
        "name": "South Kalimantan (Kalsel)",
        "shortCode": "KS",
        "paypalCode": "ID-KS",
        "addressText": ""
      },
      {
        "name": "Central Kalimantan (Kalteng)",
        "shortCode": "KT",
        "paypalCode": "ID-KT",
        "addressText": ""
      },
      {
        "name": "North Kalimantan (Kaltara)",
        "shortCode": "KU",
        "paypalCode": "ID-KU",
        "addressText": ""
      },
      {
        "name": "Lampung",
        "shortCode": "LA",
        "paypalCode": "ID-LA",
        "addressText": ""
      },
      {
        "name": "Maluku",
        "shortCode": "MA",
        "paypalCode": "ID-MA",
        "addressText": ""
      },
      {
        "name": "North Maluku (Malut)",
        "shortCode": "MU",
        "paypalCode": "ID-MU",
        "addressText": ""
      },
      {
        "name": "West Nusa Tenggara (NTB)",
        "shortCode": "NB",
        "paypalCode": "ID-NB",
        "addressText": ""
      },
      {
        "name": "East Nusa Tenggara (NTT)",
        "shortCode": "NT",
        "paypalCode": "ID-NT",
        "addressText": ""
      },
      {
        "name": "Papua",
        "shortCode": "PA",
        "paypalCode": "ID-PA",
        "addressText": ""
      },
      {
        "name": "West Papua (PB)",
        "shortCode": "PB",
        "paypalCode": "ID-PB",
        "addressText": ""
      },
      {
        "name": "Riau",
        "shortCode": "RI",
        "paypalCode": "ID-RI",
        "addressText": ""
      },
      {
        "name": "North Sulawesi (Sulut)",
        "shortCode": "SA",
        "paypalCode": "ID-SA",
        "addressText": ""
      },
      {
        "name": "West Sumatra (Sumbar)",
        "shortCode": "SB",
        "paypalCode": "ID-SB",
        "addressText": ""
      },
      {
        "name": "Southeast Sulawesi (Sultra)",
        "shortCode": "SG",
        "paypalCode": "ID-SG",
        "addressText": ""
      },
      {
        "name": "South Sulawesi (Sulsel)",
        "shortCode": "SN",
        "paypalCode": "ID-SN",
        "addressText": ""
      },
      {
        "name": "West Sulawesi (Sulbar)",
        "shortCode": "SR",
        "paypalCode": "ID-SR",
        "addressText": ""
      },
      {
        "name": "South Sumatera (Sumsel)",
        "shortCode": "SS",
        "paypalCode": "ID-SS",
        "addressText": ""
      },
      {
        "name": "Central Sulawesi (Sulteng)",
        "shortCode": "ST",
        "paypalCode": "ID-ST",
        "addressText": ""
      },
      {
        "name": "North Sumatera (Sumut)",
        "shortCode": "SU",
        "paypalCode": "ID-SU",
        "addressText": ""
      },
      {
        "name": "Yogyakarta (YIG)",
        "shortCode": "YO",
        "paypalCode": "ID-YO",
        "addressText": ""
      }
    ]
  },
  {
    "countryName": "Iran",
    "countryShortCode": "IR",
    "regions": []
  },
  {
    "countryName": "Iraq",
    "countryShortCode": "IQ",
    "regions": []
  },
  {
    "countryName": "Ireland",
    "countryShortCode": "IE",
    "regions": [
      {
        "name": "Carlow",
        "shortCode": "CW",
        "addressText": "Co. Carlow"
      },
      {
        "name": "Cavan",
        "shortCode": "CN",
        "addressText": "Co. Cavan"
      },
      {
        "name": "Clare",
        "shortCode": "CE",
        "addressText": "Co. Clare"
      },
      {
        "name": "Cork",
        "shortCode": "CO",
        "addressText": "Co. Cork"
      },
      {
        "name": "Donegal",
        "shortCode": "DL",
        "addressText": "Co. Donegal"
      },
      {
        "name": "Dublin",
        "shortCode": "D",
        "addressText": "Co. Dublin"
      },
      {
        "name": "Galway",
        "shortCode": "G",
        "addressText": "Co. Galway"
      },
      {
        "name": "Kerry",
        "shortCode": "KY",
        "addressText": "Co. Kerry"
      },
      {
        "name": "Kildare",
        "shortCode": "KE",
        "addressText": "Co. Kildare"
      },
      {
        "name": "Kilkenny",
        "shortCode": "KK",
        "addressText": "Co. Kilkenny"
      },
      {
        "name": "Laois",
        "shortCode": "LS",
        "addressText": "Co. Laois"
      },
      {
        "name": "Leitrim",
        "shortCode": "LM",
        "addressText": "Co. Leitrim"
      },
      {
        "name": "Limerick",
        "shortCode": "LK",
        "addressText": "Co. Limerick"
      },
      {
        "name": "Longford",
        "shortCode": "LD",
        "addressText": "Co. Longford"
      },
      {
        "name": "Louth",
        "shortCode": "LH",
        "addressText": "Co. Louth"
      },
      {
        "name": "Mayo",
        "shortCode": "MO",
        "addressText": "Co. Mayo"
      },
      {
        "name": "Meath",
        "shortCode": "MH",
        "addressText": "Co. Meath"
      },
      {
        "name": "Monaghan",
        "shortCode": "MN",
        "addressText": "Co. Monaghan"
      },
      {
        "name": "Offaly",
        "shortCode": "OY",
        "addressText": "Co. Offaly"
      },
      {
        "name": "Roscommon",
        "shortCode": "RN",
        "addressText": "Co. Roscommon"
      },
      {
        "name": "Sligo",
        "shortCode": "SO",
        "addressText": "Co. Sligo"
      },
      {
        "name": "Tipperary",
        "shortCode": "TA",
        "addressText": "Co. Tipperary"
      },
      {
        "name": "Waterford",
        "shortCode": "WD",
        "addressText": "Co. Waterford"
      },
      {
        "name": "Westmeath",
        "shortCode": "WH",
        "addressText": "Co. Westmeath"
      },
      {
        "name": "Wexford",
        "shortCode": "WX",
        "addressText": "Co. Wexford"
      },
      {
        "name": "Wicklow",
        "shortCode": "WW",
        "addressText": "Co. Wicklow"
      }
    ]
  },
  {
    "countryName": "Isle of Man",
    "countryShortCode": "IM",
    "regions": []
  },
  {
    "countryName": "Israel",
    "countryShortCode": "IL",
    "regions": []
  },
  {
    "countryName": "Italy",
    "countryShortCode": "IT",
    "regions": [
      {
        "name": "Agrigento",
        "shortCode": "AG",
        "paypalCode": "AG",
        "addressText": "AG"
      },
      {
        "name": "Alessandria",
        "shortCode": "AL",
        "paypalCode": "AL",
        "addressText": "AL"
      },
      {
        "name": "Ancona",
        "shortCode": "AN",
        "paypalCode": "AN",
        "addressText": "AN"
      },
      {
        "name": "Aosta",
        "shortCode": "AO",
        "paypalCode": "AO",
        "addressText": "AO"
      },
      {
        "name": "Arezzo",
        "shortCode": "AR",
        "paypalCode": "AR",
        "addressText": "AR"
      },
      {
        "name": "Ascoli Piceno",
        "shortCode": "AP",
        "paypalCode": "AP",
        "addressText": "AP"
      },
      {
        "name": "Asti",
        "shortCode": "AT",
        "paypalCode": "AT",
        "addressText": "AT"
      },
      {
        "name": "Avellino",
        "shortCode": "AV",
        "paypalCode": "AV",
        "addressText": "AV"
      },
      {
        "name": "Bari",
        "shortCode": "BA",
        "paypalCode": "BA",
        "addressText": "BA"
      },
      {
        "name": "Barletta-Andria-Trani",
        "shortCode": "BT",
        "paypalCode": "BT",
        "addressText": "BT"
      },
      {
        "name": "Belluno",
        "shortCode": "BL",
        "paypalCode": "BL",
        "addressText": "BL"
      },
      {
        "name": "Benevento",
        "shortCode": "BN",
        "paypalCode": "BN",
        "addressText": "BN"
      },
      {
        "name": "Bergamo",
        "shortCode": "BG",
        "paypalCode": "BG",
        "addressText": "BG"
      },
      {
        "name": "Biella",
        "shortCode": "BI",
        "paypalCode": "BI",
        "addressText": "BI"
      },
      {
        "name": "Bologna",
        "shortCode": "BO",
        "paypalCode": "BO",
        "addressText": "BO"
      },
      {
        "name": "Bolzano",
        "shortCode": "BZ",
        "paypalCode": "BZ",
        "addressText": "BZ"
      },
      {
        "name": "Brescia",
        "shortCode": "BS",
        "paypalCode": "BS",
        "addressText": "BS"
      },
      {
        "name": "Brindisi",
        "shortCode": "BR",
        "paypalCode": "BR",
        "addressText": "BR"
      },
      {
        "name": "Cagliari",
        "shortCode": "CA",
        "paypalCode": "CA",
        "addressText": "CA"
      },
      {
        "name": "Caltanissetta",
        "shortCode": "CL",
        "paypalCode": "CL",
        "addressText": "CL"
      },
      {
        "name": "Campobasso",
        "shortCode": "CB",
        "paypalCode": "CB",
        "addressText": "CB"
      },
      {
        "name": "Carbonia-Iglesias",
        "shortCode": "CI",
        "paypalCode": "CI",
        "addressText": "CI"
      },
      {
        "name": "Caserta",
        "shortCode": "CE",
        "paypalCode": "CE",
        "addressText": "CE"
      },
      {
        "name": "Catania",
        "shortCode": "CT",
        "paypalCode": "CT",
        "addressText": "CT"
      },
      {
        "name": "Catanzaro",
        "shortCode": "CZ",
        "paypalCode": "CZ",
        "addressText": "CZ"
      },
      {
        "name": "Chieti",
        "shortCode": "CH",
        "paypalCode": "CH",
        "addressText": "CH"
      },
      {
        "name": "Como",
        "shortCode": "CO",
        "paypalCode": "CO",
        "addressText": "CO"
      },
      {
        "name": "Cosenza",
        "shortCode": "CS",
        "paypalCode": "CS",
        "addressText": "CS"
      },
      {
        "name": "Cremona",
        "shortCode": "CR",
        "paypalCode": "CR",
        "addressText": "CR"
      },
      {
        "name": "Crotone",
        "shortCode": "KR",
        "paypalCode": "KR",
        "addressText": "KR"
      },
      {
        "name": "Cuneo",
        "shortCode": "CN",
        "paypalCode": "CN",
        "addressText": "CN"
      },
      {
        "name": "Enna",
        "shortCode": "EN",
        "paypalCode": "EN",
        "addressText": "EN"
      },
      {
        "name": "Fermo",
        "shortCode": "FM",
        "paypalCode": "FM",
        "addressText": "FM"
      },
      {
        "name": "Ferrara",
        "shortCode": "FE",
        "paypalCode": "FE",
        "addressText": "FE"
      },
      {
        "name": "Firenze",
        "shortCode": "FI",
        "paypalCode": "FI",
        "addressText": "FI"
      },
      {
        "name": "Foggia",
        "shortCode": "FG",
        "paypalCode": "FG",
        "addressText": "FG"
      },
      {
        "name": "Forlì-Cesena",
        "shortCode": "FC",
        "paypalCode": "FC",
        "addressText": "FC"
      },
      {
        "name": "Frosinone",
        "shortCode": "FR",
        "paypalCode": "FR",
        "addressText": "FR"
      },
      {
        "name": "Genova",
        "shortCode": "GE",
        "paypalCode": "GE",
        "addressText": "GE"
      },
      {
        "name": "Gorizia",
        "shortCode": "GO",
        "paypalCode": "GO",
        "addressText": "GO"
      },
      {
        "name": "Grosseto",
        "shortCode": "GR",
        "paypalCode": "GR",
        "addressText": "GR"
      },
      {
        "name": "Imperia",
        "shortCode": "IM",
        "paypalCode": "IM",
        "addressText": "IM"
      },
      {
        "name": "Isernia",
        "shortCode": "IS",
        "paypalCode": "IS",
        "addressText": "IS"
      },
      {
        "name": "L'Aquila",
        "shortCode": "AQ",
        "paypalCode": "AQ",
        "addressText": "AQ"
      },
      {
        "name": "La Spezia",
        "shortCode": "SP",
        "paypalCode": "SP",
        "addressText": "SP"
      },
      {
        "name": "Latina",
        "shortCode": "LT",
        "paypalCode": "LT",
        "addressText": "LT"
      },
      {
        "name": "Lecce",
        "shortCode": "LE",
        "paypalCode": "LE",
        "addressText": "LE"
      },
      {
        "name": "Lecco",
        "shortCode": "LC",
        "paypalCode": "LC",
        "addressText": "LC"
      },
      {
        "name": "Livorno",
        "shortCode": "LI",
        "paypalCode": "LI",
        "addressText": "LI"
      },
      {
        "name": "Lodi",
        "shortCode": "LO",
        "paypalCode": "LO",
        "addressText": "LO"
      },
      {
        "name": "Lucca",
        "shortCode": "LU",
        "paypalCode": "LU",
        "addressText": "LU"
      },
      {
        "name": "Macerata",
        "shortCode": "MC",
        "paypalCode": "MC",
        "addressText": "MC"
      },
      {
        "name": "Mantova",
        "shortCode": "MN",
        "paypalCode": "MN",
        "addressText": "MN"
      },
      {
        "name": "Massa-Carrara",
        "shortCode": "MS",
        "paypalCode": "MS",
        "addressText": "MS"
      },
      {
        "name": "Matera",
        "shortCode": "MT",
        "paypalCode": "MT",
        "addressText": "MT"
      },
      {
        "name": "Medio Campidano",
        "shortCode": "VS",
        "paypalCode": "VS",
        "addressText": "VS"
      },
      {
        "name": "Messina",
        "shortCode": "ME",
        "paypalCode": "ME",
        "addressText": "ME"
      },
      {
        "name": "Milano",
        "shortCode": "MI",
        "paypalCode": "MI",
        "addressText": "MI"
      },
      {
        "name": "Modena",
        "shortCode": "MO",
        "paypalCode": "MO",
        "addressText": "MO"
      },
      {
        "name": "Monza e della Brianza",
        "shortCode": "MB",
        "paypalCode": "MB",
        "addressText": "MB"
      },
      {
        "name": "Napoli",
        "shortCode": "NA",
        "paypalCode": "NA",
        "addressText": "NA"
      },
      {
        "name": "Novara",
        "shortCode": "NO",
        "paypalCode": "NO",
        "addressText": "NO"
      },
      {
        "name": "Nuoro",
        "shortCode": "NU",
        "paypalCode": "NU",
        "addressText": "NU"
      },
      {
        "name": "Ogliastra",
        "shortCode": "OG",
        "paypalCode": "OG",
        "addressText": "OG"
      },
      {
        "name": "Olbia-Tempio",
        "shortCode": "OT",
        "paypalCode": "OT",
        "addressText": "OT"
      },
      {
        "name": "Oristano",
        "shortCode": "OR",
        "paypalCode": "OR",
        "addressText": "OR"
      },
      {
        "name": "Padova",
        "shortCode": "PD",
        "paypalCode": "PD",
        "addressText": "PD"
      },
      {
        "name": "Palermo",
        "shortCode": "PA",
        "paypalCode": "PA",
        "addressText": "PA"
      },
      {
        "name": "Parma",
        "shortCode": "PR",
        "paypalCode": "PR",
        "addressText": "PR"
      },
      {
        "name": "Pavia",
        "shortCode": "PV",
        "paypalCode": "PV",
        "addressText": "PV"
      },
      {
        "name": "Perugia",
        "shortCode": "PG",
        "paypalCode": "PG",
        "addressText": "PG"
      },
      {
        "name": "Pesaro e Urbino",
        "shortCode": "PU",
        "paypalCode": "PU",
        "addressText": "PU"
      },
      {
        "name": "Pescara",
        "shortCode": "PE",
        "paypalCode": "PE",
        "addressText": "PE"
      },
      {
        "name": "Piacenza",
        "shortCode": "PC",
        "paypalCode": "PC",
        "addressText": "PC"
      },
      {
        "name": "Pisa",
        "shortCode": "PI",
        "paypalCode": "PI",
        "addressText": "PI"
      },
      {
        "name": "Pistoia",
        "shortCode": "PT",
        "paypalCode": "PT",
        "addressText": "PT"
      },
      {
        "name": "Pordenone",
        "shortCode": "PN",
        "paypalCode": "PN",
        "addressText": "PN"
      },
      {
        "name": "Potenza",
        "shortCode": "PZ",
        "paypalCode": "PZ",
        "addressText": "PZ"
      },
      {
        "name": "Prato",
        "shortCode": "PO",
        "paypalCode": "PO",
        "addressText": "PO"
      },
      {
        "name": "Ragusa",
        "shortCode": "RG",
        "paypalCode": "RG",
        "addressText": "RG"
      },
      {
        "name": "Ravenna",
        "shortCode": "RA",
        "paypalCode": "RA",
        "addressText": "RA"
      },
      {
        "name": "Reggio Calabria",
        "shortCode": "RC",
        "paypalCode": "RC",
        "addressText": "RC"
      },
      {
        "name": "Reggio Emilia",
        "shortCode": "RE",
        "paypalCode": "RE",
        "addressText": "RE"
      },
      {
        "name": "Rieti",
        "shortCode": "RI",
        "paypalCode": "RI",
        "addressText": "RI"
      },
      {
        "name": "Rimini",
        "shortCode": "RN",
        "paypalCode": "RN",
        "addressText": "RN"
      },
      {
        "name": "Roma",
        "shortCode": "RM",
        "paypalCode": "RM",
        "addressText": "RM"
      },
      {
        "name": "Rovigo",
        "shortCode": "RO",
        "paypalCode": "RO",
        "addressText": "RO"
      },
      {
        "name": "Salerno",
        "shortCode": "SA",
        "paypalCode": "SA",
        "addressText": "SA"
      },
      {
        "name": "Sassari",
        "shortCode": "SS",
        "paypalCode": "SS",
        "addressText": "SS"
      },
      {
        "name": "Savona",
        "shortCode": "SV",
        "paypalCode": "SV",
        "addressText": "SV"
      },
      {
        "name": "Siena",
        "shortCode": "SI",
        "paypalCode": "SI",
        "addressText": "SI"
      },
      {
        "name": "Siracusa",
        "shortCode": "SR",
        "paypalCode": "SR",
        "addressText": "SR"
      },
      {
        "name": "Sondrio",
        "shortCode": "SO",
        "paypalCode": "SO",
        "addressText": "SO"
      },
      {
        "name": "Taranto",
        "shortCode": "TA",
        "paypalCode": "TA",
        "addressText": "TA"
      },
      {
        "name": "Teramo",
        "shortCode": "TE",
        "paypalCode": "TE",
        "addressText": "TE"
      },
      {
        "name": "Terni",
        "shortCode": "TR",
        "paypalCode": "TR",
        "addressText": "TR"
      },
      {
        "name": "Torino",
        "shortCode": "TO",
        "paypalCode": "TO",
        "addressText": "TO"
      },
      {
        "name": "Trapani",
        "shortCode": "TP",
        "paypalCode": "TP",
        "addressText": "TP"
      },
      {
        "name": "Trento",
        "shortCode": "TN",
        "paypalCode": "TN",
        "addressText": "TN"
      },
      {
        "name": "Treviso",
        "shortCode": "TV",
        "paypalCode": "TV",
        "addressText": "TV"
      },
      {
        "name": "Trieste",
        "shortCode": "TS",
        "paypalCode": "TS",
        "addressText": "TS"
      },
      {
        "name": "Udine",
        "shortCode": "UD",
        "paypalCode": "UD",
        "addressText": "UD"
      },
      {
        "name": "Varese",
        "shortCode": "VA",
        "paypalCode": "VA",
        "addressText": "VA"
      },
      {
        "name": "Venezia",
        "shortCode": "VE",
        "paypalCode": "VE",
        "addressText": "VE"
      },
      {
        "name": "Verbano-Cusio-Ossola",
        "shortCode": "VB",
        "paypalCode": "VB",
        "addressText": "VB"
      },
      {
        "name": "Vercelli",
        "shortCode": "VC",
        "paypalCode": "VC",
        "addressText": "VC"
      },
      {
        "name": "Verona",
        "shortCode": "VR",
        "paypalCode": "VR",
        "addressText": "VR"
      },
      {
        "name": "Vibo Valentia",
        "shortCode": "VV",
        "paypalCode": "VV",
        "addressText": "VV"
      },
      {
        "name": "Vicenza",
        "shortCode": "VI",
        "paypalCode": "VI",
        "addressText": "VI"
      },
      {
        "name": "Viterbo",
        "shortCode": "VT",
        "paypalCode": "VT",
        "addressText": "VT"
      }
    ]
  },
  {
    "countryName": "Ivory Coast",
    "countryShortCode": "CI",
    "regions": []
  },
  {
    "countryName": "Jamaica",
    "countryShortCode": "JM",
    "regions": []
  },
  {
    "countryName": "Japan",
    "countryShortCode": "JP",
    "regions": [
      {
        "name": "Aichi",
        "shortCode": "23",
        "paypalCode": "AICHI-KEN",
        "addressText": "AICHI"
      },
      {
        "name": "Akita",
        "shortCode": "05",
        "paypalCode": "AKITA-KEN",
        "addressText": "AKITA"
      },
      {
        "name": "Aomori",
        "shortCode": "02",
        "paypalCode": "AOMORI-KEN",
        "addressText": "AOMORI"
      },
      {
        "name": "Chiba",
        "shortCode": "12",
        "paypalCode": "CHIBA-KEN",
        "addressText": "CHIBA"
      },
      {
        "name": "Ehime",
        "shortCode": "38",
        "paypalCode": "EHIME-KEN",
        "addressText": "EHIME"
      },
      {
        "name": "Fukui",
        "shortCode": "18",
        "paypalCode": "FUKUI-KEN",
        "addressText": "FUKUI"
      },
      {
        "name": "Fukuoka",
        "shortCode": "40",
        "paypalCode": "FUKUOKA-KEN",
        "addressText": "FUKUOKA"
      },
      {
        "name": "Fukushima",
        "shortCode": "07",
        "paypalCode": "FUKUSHIMA-KEN",
        "addressText": "FUKUSHIMA"
      },
      {
        "name": "Gifu",
        "shortCode": "21",
        "paypalCode": "GIFU-KEN",
        "addressText": "GIFU"
      },
      {
        "name": "Gunma",
        "shortCode": "10",
        "paypalCode": "GUNMA-KEN",
        "addressText": "GUNMA"
      },
      {
        "name": "Hiroshima",
        "shortCode": "34",
        "paypalCode": "HIROSHIMA-KEN",
        "addressText": "HIROSHIMA"
      },
      {
        "name": "Hokkaido",
        "shortCode": "01",
        "paypalCode": "HOKKAIDO",
        "addressText": "HOKKAIDO"
      },
      {
        "name": "Hyogo",
        "shortCode": "28",
        "paypalCode": "HYOGO-KEN",
        "addressText": "HYOGO"
      },
      {
        "name": "Ibaraki",
        "shortCode": "08",
        "paypalCode": "IBARAKI-KEN",
        "addressText": "IBARAKI"
      },
      {
        "name": "Ishikawa",
        "shortCode": "17",
        "paypalCode": "ISHIKAWA-KEN",
        "addressText": "ISHIKAWA"
      },
      {
        "name": "Iwate",
        "shortCode": "03",
        "paypalCode": "IWATE-KEN",
        "addressText": "IWATE"
      },
      {
        "name": "Kagawa",
        "shortCode": "37",
        "paypalCode": "KAGAWA-KEN",
        "addressText": "KAGAWA"
      },
      {
        "name": "Kagoshima",
        "shortCode": "46",
        "paypalCode": "KAGOSHIMA-KEN",
        "addressText": "KAGOSHIMA"
      },
      {
        "name": "Kanagawa",
        "shortCode": "14",
        "paypalCode": "KANAGAWA-KEN",
        "addressText": "KANAGAWA"
      },
      {
        "name": "Kochi",
        "shortCode": "39",
        "paypalCode": "KOCHI-KEN",
        "addressText": "KOCHI"
      },
      {
        "name": "Kumamoto",
        "shortCode": "43",
        "paypalCode": "KUMAMOTO-KEN",
        "addressText": "KUMAMOTO"
      },
      {
        "name": "Kyoto",
        "shortCode": "26",
        "paypalCode": "KYOTO-FU",
        "addressText": "KYOTO"
      },
      {
        "name": "Mie",
        "shortCode": "24",
        "paypalCode": "MIE-KEN",
        "addressText": "MIE"
      },
      {
        "name": "Miyagi",
        "shortCode": "04",
        "paypalCode": "MIYAGI-KEN",
        "addressText": "MIYAGI"
      },
      {
        "name": "Miyazaki",
        "shortCode": "45",
        "paypalCode": "MIYAZAKI-KEN",
        "addressText": "MIYAZAKI"
      },
      {
        "name": "Nagano",
        "shortCode": "20",
        "paypalCode": "NAGANO-KEN",
        "addressText": "NAGANO"
      },
      {
        "name": "Nagasaki",
        "shortCode": "42",
        "paypalCode": "NAGASAKI-KEN",
        "addressText": "NAGASAKI"
      },
      {
        "name": "Nara",
        "shortCode": "29",
        "paypalCode": "NARA-KEN",
        "addressText": "NARA"
      },
      {
        "name": "Niigata",
        "shortCode": "15",
        "paypalCode": "NIIGATA-KEN",
        "addressText": "NIIGATA"
      },
      {
        "name": "Oita",
        "shortCode": "44",
        "paypalCode": "OITA-KEN",
        "addressText": "OITA"
      },
      {
        "name": "Okayama",
        "shortCode": "33",
        "paypalCode": "OKAYAMA-KEN",
        "addressText": "OKAYAMA"
      },
      {
        "name": "Okinawa",
        "shortCode": "47",
        "paypalCode": "OKINAWA-KEN",
        "addressText": "OKINAWA"
      },
      {
        "name": "Osaka",
        "shortCode": "27",
        "paypalCode": "OSAKA-FU",
        "addressText": "OSAKA"
      },
      {
        "name": "Saga",
        "shortCode": "41",
        "paypalCode": "SAGA-KEN",
        "addressText": "SAGA"
      },
      {
        "name": "Saitama",
        "shortCode": "11",
        "paypalCode": "SAITAMA-KEN",
        "addressText": "SAITAMA"
      },
      {
        "name": "Shiga",
        "shortCode": "25",
        "paypalCode": "SHIGA-KEN",
        "addressText": "SHIGA"
      },
      {
        "name": "Shimane",
        "shortCode": "32",
        "paypalCode": "SHIMANE-KEN",
        "addressText": "SHIMANE"
      },
      {
        "name": "Shizuoka",
        "shortCode": "22",
        "paypalCode": "SHIZUOKA-KEN",
        "addressText": "SHIZUOKA"
      },
      {
        "name": "Tochigi",
        "shortCode": "09",
        "paypalCode": "TOCHIGI-KEN",
        "addressText": "TOCHIGI"
      },
      {
        "name": "Tokushima",
        "shortCode": "36",
        "paypalCode": "TOKUSHIMA-KEN",
        "addressText": "TOKUSHIMA"
      },
      {
        "name": "Tokyo",
        "shortCode": "13",
        "paypalCode": "TOKYO-TO",
        "addressText": "TOKYO"
      },
      {
        "name": "Tottori",
        "shortCode": "31",
        "paypalCode": "TOTTORI-KEN",
        "addressText": "TOTTORI"
      },
      {
        "name": "Toyama",
        "shortCode": "16",
        "paypalCode": "TOYAMA-KEN",
        "addressText": "TOYAMA"
      },
      {
        "name": "Wakayama",
        "shortCode": "30",
        "paypalCode": "WAKAYAMA-KEN",
        "addressText": "WAKAYAMA"
      },
      {
        "name": "Yamagata",
        "shortCode": "06",
        "paypalCode": "YAMAGATA-KEN",
        "addressText": "YAMAGATA"
      },
      {
        "name": "Yamaguchi",
        "shortCode": "35",
        "paypalCode": "YAMAGUCHI-KEN",
        "addressText": "YAMAGUCHI"
      },
      {
        "name": "Yamanashi",
        "shortCode": "19",
        "paypalCode": "YAMANASHI-KEN",
        "addressText": "YAMANASHI"
      }
    ]
  },
  {
    "countryName": "Jordan",
    "countryShortCode": "JO",
    "regions": []
  },
  {
    "countryName": "Kazakhstan",
    "countryShortCode": "KZ",
    "regions": []
  },
  {
    "countryName": "Kenya",
    "countryShortCode": "KE",
    "regions": []
  },
  {
    "countryName": "Kiribati",
    "countryShortCode": "KI",
    "regions": []
  },
  {
    "countryName": "Republic of Korea",
    "countryShortCode": "KR",
    "regions": []
  },
  {
    "countryName": "Kuwait",
    "countryShortCode": "KW",
    "regions": []
  },
  {
    "countryName": "Kyrgyzstan",
    "countryShortCode": "KG",
    "regions": []
  },
  {
    "countryName": "Laos",
    "countryShortCode": "LA",
    "regions": []
  },
  {
    "countryName": "Latvia",
    "countryShortCode": "LV",
    "regions": []
  },
  {
    "countryName": "Lebanon",
    "countryShortCode": "LB",
    "regions": []
  },
  {
    "countryName": "Lesotho",
    "countryShortCode": "LS",
    "regions": []
  },
  {
    "countryName": "Liberia",
    "countryShortCode": "LR",
    "regions": []
  },
  {
    "countryName": "Libya",
    "countryShortCode": "LY",
    "regions": []
  },
  {
    "countryName": "Liechtenstein",
    "countryShortCode": "LI",
    "regions": []
  },
  {
    "countryName": "Lithuania",
    "countryShortCode": "LT",
    "regions": []
  },
  {
    "countryName": "Luxembourg",
    "countryShortCode": "LU",
    "regions": []
  },
  {
    "countryName": "Macao",
    "countryShortCode": "MO",
    "regions": []
  },
  {
    "countryName": "Madagascar",
    "countryShortCode": "MG",
    "regions": []
  },
  {
    "countryName": "Malawi",
    "countryShortCode": "MW",
    "regions": []
  },
  {
    "countryName": "Malaysia",
    "countryShortCode": "MY",
    "regions": [
      {
        "name": "Johor",
        "shortCode": "01",
        "addressText": "JOHOR"
      },
      {
        "name": "Kedah",
        "shortCode": "02",
        "addressText": "KEDAH"
      },
      {
        "name": "Kelantan",
        "shortCode": "03",
        "addressText": "KELANTAN"
      },
      {
        "name": "Kuala Lumpur",
        "shortCode": "14",
        "addressText": "KUALA LUMPUR"
      },
      {
        "name": "Labuan",
        "shortCode": "15",
        "addressText": "LABUAN"
      },
      {
        "name": "Melaka",
        "shortCode": "04",
        "addressText": "MELAKA"
      },
      {
        "name": "Negeri Sembilan",
        "shortCode": "05",
        "addressText": "NEGERI SEMBILAN"
      },
      {
        "name": "Pahang",
        "shortCode": "06",
        "addressText": "PAHANG"
      },
      {
        "name": "Perak",
        "shortCode": "08",
        "addressText": "PERAK"
      },
      {
        "name": "Perlis",
        "shortCode": "09",
        "addressText": "PERLIS"
      },
      {
        "name": "Pulau Pinang",
        "shortCode": "07",
        "addressText": "PULAU PINANG"
      },
      {
        "name": "Putrajaya",
        "shortCode": "16",
        "addressText": "PUTRAJAYA"
      },
      {
        "name": "Sabah",
        "shortCode": "12",
        "addressText": "SABAH"
      },
      {
        "name": "Sarawak",
        "shortCode": "13",
        "addressText": "SARAWAK"
      },
      {
        "name": "Selangor",
        "shortCode": "10",
        "addressText": "SELANGOR"
      },
      {
        "name": "Terengganu",
        "shortCode": "11",
        "addressText": "TERENGGANU"
      }
    ]
  },
  {
    "countryName": "Maldives",
    "countryShortCode": "MV",
    "regions": []
  },
  {
    "countryName": "Mali",
    "countryShortCode": "ML",
    "regions": []
  },
  {
    "countryName": "Malta",
    "countryShortCode": "MT",
    "regions": []
  },
  {
    "countryName": "Mauritania",
    "countryShortCode": "MR",
    "regions": []
  },
  {
    "countryName": "Mauritius",
    "countryShortCode": "MU",
    "regions": []
  },
  {
    "countryName": "Mexico",
    "countryShortCode": "MX",
    "regions": [
      {
        "name": "Aguascalientes",
        "shortCode": "AGS",
        "paypalCode": "AGS",
        "addressText": "AGS"
      },
      {
        "name": "Baja California",
        "shortCode": "BC",
        "paypalCode": "BC",
        "addressText": "BC"
      },
      {
        "name": "Baja California Sur",
        "shortCode": "BCS",
        "paypalCode": "BCS",
        "addressText": "BCS"
      },
      {
        "name": "Campeche",
        "shortCode": "CAM",
        "paypalCode": "CAMP",
        "addressText": "CAM"
      },
      {
        "name": "Chiapas",
        "shortCode": "CHP",
        "paypalCode": "CHIS",
        "addressText": "CHIS"
      },
      {
        "name": "Chihuahua",
        "shortCode": "CHH",
        "paypalCode": "CHIH",
        "addressText": "CHIH"
      },
      {
        "name": "Ciudad de México",
        "shortCode": "CMX",
        "paypalCode": "CDMX",
        "addressText": "CDMX"
      },
      {
        "name": "Coahuila de Zaragoza",
        "shortCode": "COA",
        "paypalCode": "COAH",
        "addressText": "COAH"
      },
      {
        "name": "Colima",
        "shortCode": "COL",
        "paypalCode": "COL",
        "addressText": "COL"
      },
      {
        "name": "Durango",
        "shortCode": "DUR",
        "paypalCode": "DGO",
        "addressText": "DGO"
      },
      {
        "name": "Guanajuato",
        "shortCode": "GUA",
        "paypalCode": "GTO",
        "addressText": "GTO"
      },
      {
        "name": "Guerrero",
        "shortCode": "GRO",
        "paypalCode": "GRO",
        "addressText": "GRO"
      },
      {
        "name": "Hidalgo",
        "shortCode": "HID",
        "paypalCode": "HGO",
        "addressText": "HGO"
      },
      {
        "name": "Jalisco",
        "shortCode": "JAL",
        "paypalCode": "JAL",
        "addressText": "JAL"
      },
      {
        "name": "Michoacán de Ocampo",
        "shortCode": "MIC",
        "paypalCode": "MICH",
        "addressText": "MICH"
      },
      {
        "name": "Estado de México",
        "shortCode": "MEX",
        "paypalCode": "MEX",
        "addressText": "MEX"
      },
      {
        "name": "Morelos",
        "shortCode": "MOR",
        "paypalCode": "MOR",
        "addressText": "MOR"
      },
      {
        "name": "Nayarit",
        "shortCode": "NAY",
        "paypalCode": "NAY",
        "addressText": "NAY"
      },
      {
        "name": "Nuevo León",
        "shortCode": "NLE",
        "paypalCode": "NL",
        "addressText": "NL"
      },
      {
        "name": "Oaxaca",
        "shortCode": "OAX",
        "paypalCode": "OAX",
        "addressText": "OAX"
      },
      {
        "name": "Puebla",
        "shortCode": "PUE",
        "paypalCode": "PUE",
        "addressText": "PUE"
      },
      {
        "name": "Querétaro",
        "shortCode": "QUE",
        "paypalCode": "QRO",
        "addressText": "QRO"
      },
      {
        "name": "Quintana Roo",
        "shortCode": "ROO",
        "paypalCode": "Q ROO",
        "addressText": "Q ROO"
      },
      {
        "name": "San Luis Potosí",
        "shortCode": "SLP",
        "paypalCode": "SLP",
        "addressText": "SLP"
      },
      {
        "name": "Sinaloa",
        "shortCode": "SIN",
        "paypalCode": "SIN",
        "addressText": "SIN"
      },
      {
        "name": "Sonora",
        "shortCode": "SON",
        "paypalCode": "SON",
        "addressText": "SON"
      },
      {
        "name": "Tabasco",
        "shortCode": "TAB",
        "paypalCode": "TAB",
        "addressText": "TAB"
      },
      {
        "name": "Tamaulipas",
        "shortCode": "TAM",
        "paypalCode": "TAMPS",
        "addressText": "TAMPS"
      },
      {
        "name": "Tlaxcala",
        "shortCode": "TLA",
        "paypalCode": "TLAX",
        "addressText": "TLAX"
      },
      {
        "name": "Veracruz",
        "shortCode": "VER",
        "paypalCode": "VER",
        "addressText": "VER"
      },
      {
        "name": "Yucatán",
        "shortCode": "YUC",
        "paypalCode": "YUC",
        "addressText": "YUC"
      },
      {
        "name": "Zacatecas",
        "shortCode": "ZAC",
        "paypalCode": "ZAC",
        "addressText": "ZAC"
      }
    ]
  },
  {
    "countryName": "Moldova",
    "countryShortCode": "MD",
    "regions": []
  },
  {
    "countryName": "Monaco",
    "countryShortCode": "MC",
    "regions": []
  },
  {
    "countryName": "Mongolia",
    "countryShortCode": "MN",
    "regions": []
  },
  {
    "countryName": "Montenegro",
    "countryShortCode": "ME",
    "regions": []
  },
  {
    "countryName": "Montserrat",
    "countryShortCode": "MS",
    "regions": []
  },
  {
    "countryName": "Morocco",
    "countryShortCode": "MA",
    "regions": []
  },
  {
    "countryName": "Mozambique",
    "countryShortCode": "MZ",
    "regions": []
  },
  {
    "countryName": "Myanmar",
    "countryShortCode": "MM",
    "regions": []
  },
  {
    "countryName": "Namibia",
    "countryShortCode": "NA",
    "regions": []
  },
  {
    "countryName": "Nauru",
    "countryShortCode": "NR",
    "regions": []
  },
  {
    "countryName": "Nepal",
    "countryShortCode": "NP",
    "regions": []
  },
  {
    "countryName": "Netherlands",
    "countryShortCode": "NL",
    "regions": []
  },
  {
    "countryName": "New Zealand",
    "countryShortCode": "NZ",
    "regions": []
  },
  {
    "countryName": "Nicaragua",
    "countryShortCode": "NI",
    "regions": []
  },
  {
    "countryName": "Niger",
    "countryShortCode": "NE",
    "regions": []
  },
  {
    "countryName": "Nigeria",
    "countryShortCode": "NG",
    "regions": [
      {
        "name": "Abia",
        "shortCode": "AB",
        "addressText": "Abia"
      },
      {
        "name": "Adamawa",
        "shortCode": "AD",
        "addressText": "Adamawa"
      },
      {
        "name": "Akwa Ibom",
        "shortCode": "AK",
        "addressText": "Akwa Ibom"
      },
      {
        "name": "Anambra",
        "shortCode": "AN",
        "addressText": "Anambra"
      },
      {
        "name": "Bauchi",
        "shortCode": "BA",
        "addressText": "Bauchi"
      },
      {
        "name": "Bayelsa",
        "shortCode": "BY",
        "addressText": "Bayelsa"
      },
      {
        "name": "Benue",
        "shortCode": "BE",
        "addressText": "Benue"
      },
      {
        "name": "Borno",
        "shortCode": "BO",
        "addressText": "Borno"
      },
      {
        "name": "Cross River",
        "shortCode": "CR",
        "addressText": "Cross River"
      },
      {
        "name": "Delta",
        "shortCode": "DE",
        "addressText": "Delta"
      },
      {
        "name": "Ebonyi",
        "shortCode": "EB",
        "addressText": "Ebonyi"
      },
      {
        "name": "Edo",
        "shortCode": "ED",
        "addressText": "Edo"
      },
      {
        "name": "Ekiti",
        "shortCode": "EK",
        "addressText": "Ekiti"
      },
      {
        "name": "Enugu",
        "shortCode": "EN",
        "addressText": "Enugu"
      },
      {
        "name": "Federal Capital Territory",
        "shortCode": "FC",
        "addressText": "Federal Capital Territory"
      },
      {
        "name": "Gombe",
        "shortCode": "GO",
        "addressText": "Gombe"
      },
      {
        "name": "Imo",
        "shortCode": "IM",
        "addressText": "Imo"
      },
      {
        "name": "Jigawa",
        "shortCode": "JI",
        "addressText": "Jigawa"
      },
      {
        "name": "Kaduna",
        "shortCode": "KD",
        "addressText": "Kaduna"
      },
      {
        "name": "Kano",
        "shortCode": "KN",
        "addressText": "Kano"
      },
      {
        "name": "Katsina",
        "shortCode": "KT",
        "addressText": "Katsina"
      },
      {
        "name": "Kebbi",
        "shortCode": "KE",
        "addressText": "Kebbi"
      },
      {
        "name": "Kogi",
        "shortCode": "KO",
        "addressText": "Kogi"
      },
      {
        "name": "Kwara",
        "shortCode": "KW",
        "addressText": "Kwara"
      },
      {
        "name": "Lagos",
        "shortCode": "LA",
        "addressText": "Lagos"
      },
      {
        "name": "Nassarawa",
        "shortCode": "NA",
        "addressText": "Nassarawa"
      },
      {
        "name": "Niger",
        "shortCode": "NI",
        "addressText": "Niger"
      },
      {
        "name": "Ogun",
        "shortCode": "OG",
        "addressText": "Ogun"
      },
      {
        "name": "Ondo",
        "shortCode": "ON",
        "addressText": "Ogun"
      },
      {
        "name": "Osun",
        "shortCode": "OS",
        "addressText": "Osun"
      },
      {
        "name": "Oyo",
        "shortCode": "OY",
        "addressText": "Oyo"
      },
      {
        "name": "Plateau",
        "shortCode": "PL",
        "addressText": "Plateau"
      },
      {
        "name": "Rivers",
        "shortCode": "RI",
        "addressText": "Rivers"
      },
      {
        "name": "Sokoto",
        "shortCode": "SO",
        "addressText": "Sokoto"
      },
      {
        "name": "Taraba",
        "shortCode": "TA",
        "addressText": "Taraba"
      },
      {
        "name": "Yobe",
        "shortCode": "YO",
        "addressText": "Yobe"
      },
      {
        "name": "Zamfara",
        "shortCode": "ZA",
        "addressText": "Yobe"
      }
    ]
  },
  {
    "countryName": "Niue",
    "countryShortCode": "NU",
    "regions": []
  },
  {
    "countryName": "North Macedonia",
    "countryShortCode": "MK",
    "regions": []
  },
  {
    "countryName": "Norway",
    "countryShortCode": "NO",
    "regions": []
  },
  {
    "countryName": "Oman",
    "countryShortCode": "OM",
    "regions": []
  },
  {
    "countryName": "Pakistan",
    "countryShortCode": "PK",
    "regions": []
  },
  {
    "countryName": "Palestine",
    "countryShortCode": "PS",
    "regions": []
  },
  {
    "countryName": "Panama",
    "countryShortCode": "PA",
    "regions": []
  },
  {
    "countryName": "Papua New Guinea",
    "countryShortCode": "PG",
    "regions": []
  },
  {
    "countryName": "Paraguay",
    "countryShortCode": "PY",
    "regions": []
  },
  {
    "countryName": "Peru",
    "countryShortCode": "PE",
    "regions": [
      {
        "name": "Amazonas",
        "shortCode": "AMA",
        "addressText": "Amazonas"
      },
      {
        "name": "Ancash",
        "shortCode": "ANC",
        "addressText": "Ancash"
      },
      {
        "name": "Apurimac",
        "shortCode": "APU",
        "addressText": "Apurimac"
      },
      {
        "name": "Arequipa",
        "shortCode": "ARE",
        "addressText": "Arequipa"
      },
      {
        "name": "Ayacucho",
        "shortCode": "AYA",
        "addressText": "Arequipa"
      },
      {
        "name": "Cajamarca",
        "shortCode": "CAJ",
        "addressText": "Cajamarca"
      },
      {
        "name": "Callao",
        "shortCode": "CAL",
        "addressText": "Callao"
      },
      {
        "name": "Cusco",
        "shortCode": "CUS",
        "addressText": "Cusco"
      },
      {
        "name": "Huancavelica",
        "shortCode": "HUV",
        "addressText": "Huancavelica"
      },
      {
        "name": "Huanuco",
        "shortCode": "HUC",
        "addressText": "Huanuco"
      },
      {
        "name": "Ica",
        "shortCode": "ICA",
        "addressText": "Ica"
      },
      {
        "name": "Junin",
        "shortCode": "JUN",
        "addressText": "Junin"
      },
      {
        "name": "La Libertad",
        "shortCode": "LAL",
        "addressText": "La Libertad"
      },
      {
        "name": "Lambayeque",
        "shortCode": "LAM",
        "addressText": "Lambayeque"
      },
      {
        "name": "Lima",
        "shortCode": "LIM",
        "addressText": "Lima"
      },
      {
        "name": "Loreto",
        "shortCode": "LOR",
        "addressText": "Loreto"
      },
      {
        "name": "Madre de Dios",
        "shortCode": "MDD",
        "addressText": "Madre de Dios"
      },
      {
        "name": "Moquegua",
        "shortCode": "MOQ",
        "addressText": "Moquegua"
      },
      {
        "name": "Pasco",
        "shortCode": "PAS",
        "addressText": "Pasco"
      },
      {
        "name": "Piura",
        "shortCode": "PIU",
        "addressText": "Piura"
      },
      {
        "name": "Puno",
        "shortCode": "PUN",
        "addressText": "Puno"
      },
      {
        "name": "San Martin",
        "shortCode": "SAM",
        "addressText": "San Martin"
      },
      {
        "name": "Tacna",
        "shortCode": "TAC",
        "addressText": "Tacna"
      },
      {
        "name": "Tumbes",
        "shortCode": "TUM",
        "addressText": "Tumbes"
      },
      {
        "name": "Ucayali",
        "shortCode": "UCA",
        "addressText": "Ucayali"
      }
    ]
  },
  {
    "countryName": "Philippines",
    "countryShortCode": "PH",
    "regions": []
  },
  {
    "countryName": "Poland",
    "countryShortCode": "PL",
    "regions": []
  },
  {
    "countryName": "Portugal",
    "countryShortCode": "PT",
    "regions": []
  },
  {
    "countryName": "Qatar",
    "countryShortCode": "QA",
    "regions": []
  },
  {
    "countryName": "Romania",
    "countryShortCode": "RO",
    "regions": []
  },
  {
    "countryName": "Russian Federation",
    "countryShortCode": "RU",
    "regions": []
  },
  {
    "countryName": "Rwanda",
    "countryShortCode": "RW",
    "regions": []
  },
  {
    "countryName": "Saint Helena Islands",
    "countryShortCode": "SH",
    "regions": []
  },
  {
    "countryName": "Saint Kitts and Nevis",
    "countryShortCode": "KN",
    "regions": []
  },
  {
    "countryName": "Saint Lucia",
    "countryShortCode": "LC",
    "regions": []
  },
  {
    "countryName": "Saint Vincent and the Grenadines",
    "countryShortCode": "VC",
    "regions": []
  },
  {
    "countryName": "Samoa",
    "countryShortCode": "WS",
    "regions": []
  },
  {
    "countryName": "San Marino",
    "countryShortCode": "SM",
    "regions": []
  },
  {
    "countryName": "Sao Tome and Principe",
    "countryShortCode": "ST",
    "regions": []
  },
  {
    "countryName": "Saudi Arabia",
    "countryShortCode": "SA",
    "regions": []
  },
  {
    "countryName": "Senegal",
    "countryShortCode": "SN",
    "regions": []
  },
  {
    "countryName": "Serbia",
    "countryShortCode": "RS",
    "regions": []
  },
  {
    "countryName": "Seychelles",
    "countryShortCode": "SC",
    "regions": []
  },
  {
    "countryName": "Sierra Leone",
    "countryShortCode": "SL",
    "regions": []
  },
  {
    "countryName": "Singapore",
    "countryShortCode": "SG",
    "regions": []
  },
  {
    "countryName": "Sint Maarten",
    "countryShortCode": "SX",
    "regions": []
  },
  {
    "countryName": "Slovakia",
    "countryShortCode": "SK",
    "regions": []
  },
  {
    "countryName": "Slovenia",
    "countryShortCode": "SI",
    "regions": []
  },
  {
    "countryName": "Solomon Islands",
    "countryShortCode": "SB",
    "regions": []
  },
  {
    "countryName": "Somalia",
    "countryShortCode": "SO",
    "regions": [
      {
        "name": "Awdal",
        "shortCode": "AW",
        "addressText": "AD"
      },
      {
        "name": "Bakool",
        "shortCode": "BK",
        "addressText": "BK"
      },
      {
        "name": "Banaadir",
        "shortCode": "BN",
        "addressText": "BN"
      },
      {
        "name": "Bari",
        "shortCode": "BR",
        "addressText": "BR"
      },
      {
        "name": "Bay",
        "shortCode": "BY",
        "addressText": "BY"
      },
      {
        "name": "Galguduud",
        "shortCode": "GA",
        "addressText": "GG"
      },
      {
        "name": "Gedo",
        "shortCode": "GE",
        "addressText": "GD"
      },
      {
        "name": "Hiiraan",
        "shortCode": "HI",
        "addressText": "HR"
      },
      {
        "name": "Jubbada Dhexe",
        "shortCode": "JD",
        "addressText": "JD"
      },
      {
        "name": "Jubbada Hoose",
        "shortCode": "JH",
        "addressText": "JH"
      },
      {
        "name": "Mudug",
        "shortCode": "MU",
        "addressText": "MD"
      },
      {
        "name": "Nugaal",
        "shortCode": "NU",
        "addressText": "NG"
      },
      {
        "name": "Sanaag",
        "shortCode": "SA",
        "addressText": "SG"
      },
      {
        "name": "Shabeellaha Dhexe",
        "shortCode": "SD",
        "addressText": "SD"
      },
      {
        "name": "Shabeellaha Hoose",
        "shortCode": "SH",
        "addressText": "SH"
      },
      {
        "name": "Sool",
        "shortCode": "SO",
        "addressText": "SL"
      },
      {
        "name": "Togdheer",
        "shortCode": "TO",
        "addressText": "TG"
      },
      {
        "name": "Woqooyi Galbeed",
        "shortCode": "WO",
        "addressText": "WG"
      }
    ]
  },
  {
    "countryName": "South Africa",
    "countryShortCode": "ZA",
    "regions": []
  },
  {
    "countryName": "South Georgia Islands",
    "countryShortCode": "GS",
    "regions": []
  },
  {
    "countryName": "South Sudan",
    "countryShortCode": "SS",
    "regions": []
  },
  {
    "countryName": "Spain",
    "countryShortCode": "ES",
    "regions": [
      {
        "name": "Albacete",
        "shortCode": "CM",
        "addressText": "Albacete"
      },
      {
        "name": "Alicante",
        "shortCode": "VC",
        "addressText": "Alicante"
      },
      {
        "name": "Almería",
        "shortCode": "AN",
        "addressText": "Almeria"
      },
      {
        "name": "Álava",
        "shortCode": "VI",
        "addressText": "Alava"
      },
      {
        "name": "Asturias",
        "shortCode": "O",
        "addressText": "Asturias"
      },
      {
        "name": "Ávila",
        "shortCode": "AV",
        "addressText": "Avila"
      },
      {
        "name": "Badajoz",
        "shortCode": "BA",
        "addressText": "Badajoz"
      },
      {
        "name": "Baleares",
        "shortCode": "PM",
        "addressText": "Baleares"
      },
      {
        "name": "Barcelona",
        "shortCode": "B",
        "addressText": "Barcelona"
      },
      {
        "name": "Bizkaia (Vizcaya)",
        "shortCode": "BI",
        "addressText": "Vizcaya"
      },
      {
        "name": "Burgos",
        "shortCode": "BU",
        "addressText": "Burgos"
      },
      {
        "name": "Cáceres",
        "shortCode": "CC",
        "addressText": "Caceres"
      },
      {
        "name": "Cádiz",
        "shortCode": "CA",
        "addressText": "Cadiz"
      },
      {
        "name": "Cantabria",
        "shortCode": "S",
        "addressText": "Cantabria"
      },
      {
        "name": "Castellón",
        "shortCode": "CS",
        "addressText": "Castellon"
      },
      {
        "name": "Cueta",
        "shortCode": "CU",
        "addressText": "Cueta"
      },
      {
        "name": "Ciudad Real",
        "shortCode": "CR",
        "addressText": "Ciudad Real"
      },
      {
        "name": "Córdoba",
        "shortCode": "CO",
        "addressText": "Cordoba"
      },
      {
        "name": "La Coruña",
        "shortCode": "C",
        "addressText": "La Coruna"
      },
      {
        "name": "Cuenca",
        "shortCode": "CU",
        "addressText": "Cuenca"
      },
      {
        "name": "Gipuzkoa",
        "shortCode": "SS",
        "addressText": "Guipuzcoa"
      },
      {
        "name": "Girona",
        "shortCode": "GI",
        "addressText": "Girona"
      },
      {
        "name": "Granada",
        "shortCode": "GR",
        "addressText": "Granada"
      },
      {
        "name": "Guadalajara",
        "shortCode": "GU",
        "addressText": "Guadalajara"
      },
      {
        "name": "Huelva",
        "shortCode": "H",
        "addressText": "Huelva"
      },
      {
        "name": "Huesca",
        "shortCode": "HU",
        "addressText": "Huesca"
      },
      {
        "name": "Jaén",
        "shortCode": "J",
        "addressText": "Jaen"
      },
      {
        "name": "León",
        "shortCode": "LE",
        "addressText": "Leon"
      },
      {
        "name": "Lleida",
        "shortCode": "L",
        "addressText": "Lleida"
      },
      {
        "name": "Lugo",
        "shortCode": "LU",
        "addressText": "Lugo"
      },
      {
        "name": "Madrid",
        "shortCode": "M",
        "addressText": "Madrid"
      },
      {
        "name": "Málaga",
        "shortCode": "MA",
        "addressText": "Malaga"
      },
      {
        "name": "Melilla",
        "shortCode": "ML",
        "addressText": "Melilla"
      },
      {
        "name": "Murcia",
        "shortCode": "MU",
        "addressText": "Murcia"
      },
      {
        "name": "Navarra",
        "shortCode": "NA",
        "addressText": "Navarra"
      },
      {
        "name": "Orense",
        "shortCode": "OR",
        "addressText": "Orense"
      },
      {
        "name": "Palencia",
        "shortCode": "P",
        "addressText": "Palencia"
      },
      {
        "name": "Las Palmas",
        "shortCode": "GC",
        "addressText": "Las Palmas"
      },
      {
        "name": "Pontevedra",
        "shortCode": "PO",
        "addressText": "Pontevedra"
      },
      {
        "name": "La Rioja",
        "shortCode": "LO",
        "addressText": "La Rioja"
      },
      {
        "name": "Salamanca",
        "shortCode": "SA",
        "addressText": "Salamanca"
      },
      {
        "name": "Santa Cruz de Tenerife",
        "shortCode": "TF",
        "addressText": "Santa Cruz de Tenerife"
      },
      {
        "name": "Segovia",
        "shortCode": "SG",
        "addressText": "Segovia"
      },
      {
        "name": "Sevilla",
        "shortCode": "SE",
        "addressText": "Sevilla"
      },
      {
        "name": "Soria",
        "shortCode": "SO",
        "addressText": "Soria"
      },
      {
        "name": "Tarragona",
        "shortCode": "T",
        "addressText": "Tarragona"
      },
      {
        "name": "Teruel",
        "shortCode": "TE",
        "addressText": "Teruel"
      },
      {
        "name": "Toledo",
        "shortCode": "TO",
        "addressText": "Toledo"
      },
      {
        "name": "Valencia",
        "shortCode": "V",
        "addressText": "Valencia"
      },
      {
        "name": "Valladolid",
        "shortCode": "VA",
        "addressText": "Valladolid"
      },
      {
        "name": "Zamora",
        "shortCode": "ZA",
        "addressText": "Zamora"
      },
      {
        "name": "Zaragoza",
        "shortCode": "Z",
        "addressText": "Zaragoza"
      }
    ]
  },
  {
    "countryName": "Sri Lanka",
    "countryShortCode": "LK",
    "regions": []
  },
  {
    "countryName": "Sudan",
    "countryShortCode": "SD",
    "regions": []
  },
  {
    "countryName": "Suriname",
    "countryShortCode": "SR",
    "regions": [
      {
        "name": "Brokopondo",
        "shortCode": "BR",
        "addressText": "Brokopondo"
      },
      {
        "name": "Commewijne",
        "shortCode": "CM",
        "addressText": "Commewijne"
      },
      {
        "name": "Coronie",
        "shortCode": "CR",
        "addressText": "Coronie"
      },
      {
        "name": "Marowijne",
        "shortCode": "MA",
        "addressText": "Marowijne"
      },
      {
        "name": "Nickerie",
        "shortCode": "NI",
        "addressText": "Nickerie"
      },
      {
        "name": "Para",
        "shortCode": "PR",
        "addressText": "Para"
      },
      {
        "name": "Paramaribo",
        "shortCode": "PM",
        "addressText": "Paramaribo"
      },
      {
        "name": "Saramacca",
        "shortCode": "SA",
        "addressText": "Saramacca"
      },
      {
        "name": "Sipaliwini",
        "shortCode": "SI",
        "addressText": "Sipaliwini"
      },
      {
        "name": "Wanica",
        "shortCode": "WA",
        "addressText": "Wanica"
      }
    ]
  },
  {
    "countryName": "Sweden",
    "countryShortCode": "SE",
    "regions": []
  },
  {
    "countryName": "Switzerland",
    "countryShortCode": "CH",
    "regions": [
      {
        "name": "Aargau",
        "shortCode": "AG",
        "addressText": "AG"
      },
      {
        "name": "Appenzell Ausserrhoden",
        "shortCode": "AR",
        "addressText": "AR"
      },
      {
        "name": "Appenzell Innerhoden",
        "shortCode": "AI",
        "addressText": "AI"
      },
      {
        "name": "Basel-Landschaft",
        "shortCode": "BL",
        "addressText": "BL"
      },
      {
        "name": "Basel-Stadt",
        "shortCode": "BS",
        "addressText": "BS"
      },
      {
        "name": "Bern",
        "shortCode": "BE",
        "addressText": "BE"
      },
      {
        "name": "Fribourg",
        "shortCode": "FR",
        "addressText": "FR"
      },
      {
        "name": "Genève",
        "shortCode": "GE",
        "addressText": "GE"
      },
      {
        "name": "Glarus",
        "shortCode": "GL",
        "addressText": "GL"
      },
      {
        "name": "Graubünden",
        "shortCode": "GR",
        "addressText": "GR"
      },
      {
        "name": "Jura",
        "shortCode": "JU",
        "addressText": "JU"
      },
      {
        "name": "Luzern",
        "shortCode": "LU",
        "addressText": "LU"
      },
      {
        "name": "Neuchâtel",
        "shortCode": "NE",
        "addressText": "NE"
      },
      {
        "name": "Nidwalden",
        "shortCode": "NW",
        "addressText": "NW"
      },
      {
        "name": "Obwalden",
        "shortCode": "OW",
        "addressText": "OW"
      },
      {
        "name": "Sankt Gallen",
        "shortCode": "SG",
        "addressText": "SG"
      },
      {
        "name": "Schaffhausen",
        "shortCode": "SH",
        "addressText": "SH"
      },
      {
        "name": "Schwyz",
        "shortCode": "SZ",
        "addressText": "SZ"
      },
      {
        "name": "Solothurn",
        "shortCode": "SO",
        "addressText": "SO"
      },
      {
        "name": "Thurgau",
        "shortCode": "TG",
        "addressText": "TG"
      },
      {
        "name": "Ticino",
        "shortCode": "TI",
        "addressText": "TI"
      },
      {
        "name": "Uri",
        "shortCode": "UR",
        "addressText": "UR"
      },
      {
        "name": "Valais",
        "shortCode": "VS",
        "addressText": "VS"
      },
      {
        "name": "Vaud",
        "shortCode": "VD",
        "addressText": "VD"
      },
      {
        "name": "Zug",
        "shortCode": "ZG",
        "addressText": "ZG"
      },
      {
        "name": "Zürich",
        "shortCode": "ZH",
        "addressText": "ZH"
      }
    ]
  },
  {
    "countryName": "Syria",
    "countryShortCode": "SY",
    "regions": []
  },
  {
    "countryName": "Taiwan",
    "countryShortCode": "TW",
    "regions": []
  },
  {
    "countryName": "Tajikistan",
    "countryShortCode": "TJ",
    "regions": []
  },
  {
    "countryName": "Tanzania",
    "countryShortCode": "TZ",
    "regions": [
      {
        "name": "Arusha",
        "shortCode": "01",
        "addressText": "Arusha"
      },
      {
        "name": "Dar es Salaam",
        "shortCode": "02",
        "addressText": "Dar es Salaam"
      },
      {
        "name": "Dodoma",
        "shortCode": "03",
        "addressText": "Dar es Salaam"
      },
      {
        "name": "Geita",
        "shortCode": "27",
        "addressText": "Geita"
      },
      {
        "name": "Iringa",
        "shortCode": "04",
        "addressText": "Iringa"
      },
      {
        "name": "Kagera",
        "shortCode": "05",
        "addressText": "Kagera"
      },
      {
        "name": "Katavi",
        "shortCode": "28",
        "addressText": "Katavi"
      },
      {
        "name": "Kigoma",
        "shortCode": "08",
        "addressText": "Kigoma"
      },
      {
        "name": "Kilimanjaro",
        "shortCode": "09",
        "addressText": "Kilimanjaro"
      },
      {
        "name": "Lindi",
        "shortCode": "12",
        "addressText": "Lindi"
      },
      {
        "name": "Manyara",
        "shortCode": "26",
        "addressText": "Manyara"
      },
      {
        "name": "Mara",
        "shortCode": "13",
        "addressText": "Mara"
      },
      {
        "name": "Mbeya",
        "shortCode": "14",
        "addressText": "Mbeya"
      },
      {
        "name": "Mjini Magharibi (Zanzibar West)",
        "shortCode": "15",
        "addressText": "Mjini Magharibi"
      },
      {
        "name": "Morogoro",
        "shortCode": "16",
        "addressText": "Morogoro"
      },
      {
        "name": "Mtwara",
        "shortCode": "17",
        "addressText": "Mtwara"
      },
      {
        "name": "Mwanza",
        "shortCode": "18",
        "addressText": "Mwanza"
      },
      {
        "name": "Njombe",
        "shortCode": "29",
        "addressText": "Njombe"
      },
      {
        "name": "Pemba Kaskazini (Pemba North)",
        "shortCode": "06",
        "addressText": "Pemba Kaskazini"
      },
      {
        "name": "Pemba Kusini (Pemba South)",
        "shortCode": "10",
        "addressText": "Pemba Kusini"
      },
      {
        "name": "Pwani (Coast)",
        "shortCode": "19",
        "addressText": "Pwani"
      },
      {
        "name": "Rukwa",
        "shortCode": "20",
        "addressText": "Rukwa"
      },
      {
        "name": "Ruvuma",
        "shortCode": "21",
        "addressText": "Ruvuma"
      },
      {
        "name": "Shinyanga",
        "shortCode": "22",
        "addressText": "Shinyanga"
      },
      {
        "name": "Simiyu",
        "shortCode": "30",
        "addressText": "Simiyu"
      },
      {
        "name": "Singida",
        "shortCode": "23",
        "addressText": "Singida"
      },
      {
        "name": "Tabora",
        "shortCode": "24",
        "addressText": "Singida"
      },
      {
        "name": "Tanga",
        "shortCode": "25",
        "addressText": "Tanga"
      },
      {
        "name": "Unguja Kaskazini (Zanzibar North)",
        "shortCode": "07",
        "addressText": "Unguja Kaskazini"
      },
      {
        "name": "Unguja Kusini (Zanzibar South)",
        "shortCode": "11",
        "addressText": "Unguja Kusini"
      }
    ]
  },
  {
    "countryName": "Thailand",
    "countryShortCode": "TH",
    "regions": [
      {
        "name": "Amnat Charoen",
        "shortCode": "37",
        "paypalCode": "Amnat Charoen",
        "addressText": "Amnat Charoen"
      },
      {
        "name": "Ang Thong",
        "shortCode": "15",
        "paypalCode": "Ang Thong",
        "addressText": "Ang Thong"
      },
      {
        "name": "Bangkok",
        "shortCode": "10",
        "paypalCode": "Bangkok",
        "addressText": "Bangkok"
      },
      {
        "name": "Bueng Kan",
        "shortCode": "38",
        "paypalCode": "Bueng Kan",
        "addressText": "Bueng Kan"
      },
      {
        "name": "Buri Ram",
        "shortCode": "31",
        "paypalCode": "Buri Ram",
        "addressText": "Buri Ram"
      },
      {
        "name": "Chachoengsao",
        "shortCode": "24",
        "paypalCode": "Chachoengsao",
        "addressText": "Chachoengsao"
      },
      {
        "name": "Chai Nat",
        "shortCode": "18",
        "paypalCode": "Chai Nat",
        "addressText": "Chai Nat"
      },
      {
        "name": "Chaiyaphum",
        "shortCode": "36",
        "paypalCode": "Chaiyaphum",
        "addressText": "Chaiyaphum"
      },
      {
        "name": "Chanthaburi",
        "shortCode": "22",
        "paypalCode": "Chanthaburi",
        "addressText": "Chanthaburi"
      },
      {
        "name": "Chiang Mai",
        "shortCode": "50",
        "paypalCode": "Chiang Mai",
        "addressText": "Chiang Mai"
      },
      {
        "name": "Chiang Rai",
        "shortCode": "57",
        "paypalCode": "Chiang Rai",
        "addressText": "Chiang Rai"
      },
      {
        "name": "Chon Buri",
        "shortCode": "20",
        "paypalCode": "Chon Buri",
        "addressText": "Chon Buri"
      },
      {
        "name": "Chumphon",
        "shortCode": "86",
        "paypalCode": "Chumphon",
        "addressText": "Chumphon"
      },
      {
        "name": "Kalasin",
        "shortCode": "46",
        "paypalCode": "Kalasin",
        "addressText": "Kalasin"
      },
      {
        "name": "Kamphaeng Phet",
        "shortCode": "62",
        "paypalCode": "Kamphaeng Phet",
        "addressText": "Kamphaeng Phet"
      },
      {
        "name": "Kanchanaburi",
        "shortCode": "71",
        "paypalCode": "Kanchanaburi",
        "addressText": "Kanchanaburi"
      },
      {
        "name": "Khon Kaen",
        "shortCode": "40",
        "paypalCode": "Khon Kaen",
        "addressText": "Khon Kaen"
      },
      {
        "name": "Krabi",
        "shortCode": "81",
        "paypalCode": "Krabi",
        "addressText": "Krabi"
      },
      {
        "name": "Lampang",
        "shortCode": "52",
        "paypalCode": "Lampang",
        "addressText": "Lampang"
      },
      {
        "name": "Lamphun",
        "shortCode": "51",
        "paypalCode": "Lamphun",
        "addressText": "Lamphun"
      },
      {
        "name": "Loei",
        "shortCode": "42",
        "paypalCode": "Loei",
        "addressText": "Loei"
      },
      {
        "name": "Lop Buri",
        "shortCode": "16",
        "paypalCode": "Lop Buri",
        "addressText": "Lop Buri"
      },
      {
        "name": "Mae Hong Son",
        "shortCode": "58",
        "paypalCode": "Mae Hong Son",
        "addressText": "Mae Hong Son"
      },
      {
        "name": "Maha Sarakham",
        "shortCode": "44",
        "paypalCode": "Maha Sarakham",
        "addressText": "Maha Sarakham"
      },
      {
        "name": "Mukdahan",
        "shortCode": "49",
        "paypalCode": "Mukdahan",
        "addressText": "Mukdahan"
      },
      {
        "name": "Nakhon Nayok",
        "shortCode": "26",
        "paypalCode": "Nakhon Nayok",
        "addressText": "Nakhon Nayok"
      },
      {
        "name": "Nakhon Phathom",
        "shortCode": "73",
        "paypalCode": "Nakhon Phathom",
        "addressText": "Nakhon Phathom"
      },
      {
        "name": "Nakhon Phanom",
        "shortCode": "48",
        "paypalCode": "Nakhon Phanom",
        "addressText": "Nakhon Phanom"
      },
      {
        "name": "Nakhon Ratchasima",
        "shortCode": "30",
        "paypalCode": "Nakhon Ratchasima",
        "addressText": "Nakhon Ratchasima"
      },
      {
        "name": "Nakhon Sawan",
        "shortCode": "60",
        "paypalCode": "Nakhon Sawan",
        "addressText": "Nakhon Sawan"
      },
      {
        "name": "Nakhon Si Thammarat",
        "shortCode": "80",
        "paypalCode": "Nakhon Si Thammarat",
        "addressText": "Nakhon Si Thammarat"
      },
      {
        "name": "Nan",
        "shortCode": "55",
        "paypalCode": "Nan",
        "addressText": "Nan"
      },
      {
        "name": "Narathiwat",
        "shortCode": "96",
        "paypalCode": "Narathiwat",
        "addressText": "Narathiwat"
      },
      {
        "name": "Nong Bua Lam Phu",
        "shortCode": "39",
        "paypalCode": "Nong Bua Lamphu",
        "addressText": "Nong Bua Lam Phu"
      },
      {
        "name": "Nong Khai",
        "shortCode": "43",
        "paypalCode": "Nong Khai",
        "addressText": "Nong Khai"
      },
      {
        "name": "Nonthaburi",
        "shortCode": "12",
        "paypalCode": "Nonthaburi",
        "addressText": "Nonthaburi"
      },
      {
        "name": "Pathum Thani",
        "shortCode": "13",
        "paypalCode": "Pathum Thani",
        "addressText": "Pathum Thani"
      },
      {
        "name": "Pattani",
        "shortCode": "94",
        "paypalCode": "Pattani",
        "addressText": "Pattani"
      },
      {
        "name": "Phangnga",
        "shortCode": "82",
        "paypalCode": "Phang Nga",
        "addressText": "Phangnga"
      },
      {
        "name": "Phatthalung",
        "shortCode": "93",
        "paypalCode": "Phatthalung",
        "addressText": "Phatthalung"
      },
      {
        "name": "Phatthaya",
        "shortCode": "S",
        "paypalCode": "Phatthaya",
        "addressText": "Phatthaya"
      },
      {
        "name": "Phayao",
        "shortCode": "56",
        "paypalCode": "Phayao",
        "addressText": "Phayao"
      },
      {
        "name": "Phetchabun",
        "shortCode": "76",
        "paypalCode": "Phetchabun",
        "addressText": "Phetchabun"
      },
      {
        "name": "Phetchaburi",
        "shortCode": "76",
        "paypalCode": "Phetchaburi",
        "addressText": "Phetchaburi"
      },
      {
        "name": "Phichit",
        "shortCode": "66",
        "paypalCode": "Phichit",
        "addressText": "Phichit"
      },
      {
        "name": "Phitsanulok",
        "shortCode": "65",
        "paypalCode": "Phitsanulok",
        "addressText": "Phitsanulok"
      },
      {
        "name": "Phra Nakhon Si Ayutthaya",
        "shortCode": "14",
        "paypalCode": "Phra Nakhon Si Ayutthaya",
        "addressText": "Phra Nakhon Si Ayutthaya"
      },
      {
        "name": "Phrae",
        "shortCode": "54",
        "paypalCode": "Phrae",
        "addressText": "Phrae"
      },
      {
        "name": "Phuket",
        "shortCode": "83",
        "paypalCode": "Phuket",
        "addressText": "Phuket"
      },
      {
        "name": "Prachin Buri",
        "shortCode": "25",
        "paypalCode": "Prachin Buri",
        "addressText": "Prachin Buri"
      },
      {
        "name": "Prachuap Khiri Khan",
        "shortCode": "77",
        "paypalCode": "Prachuap Khiri Khan",
        "addressText": "Prachuap Khiri Khan"
      },
      {
        "name": "Ranong",
        "shortCode": "85",
        "paypalCode": "Ranong",
        "addressText": "Ranong"
      },
      {
        "name": "Ratchaburi",
        "shortCode": "70",
        "paypalCode": "Ratchaburi",
        "addressText": "Ratchaburi"
      },
      {
        "name": "Rayong",
        "shortCode": "21",
        "paypalCode": "Rayong",
        "addressText": "Rayong"
      },
      {
        "name": "Roi Et",
        "shortCode": "45",
        "paypalCode": "Roi Et",
        "addressText": "Roi Et"
      },
      {
        "name": "Sa Kaeo",
        "shortCode": "27",
        "paypalCode": "Sa Kaeo",
        "addressText": "Sa Kaeo"
      },
      {
        "name": "Sakon Nakhon",
        "shortCode": "47",
        "paypalCode": "Sakon Nakhon",
        "addressText": "Sakon Nakhon"
      },
      {
        "name": "Samut Prakan",
        "shortCode": "11",
        "paypalCode": "Samut Prakan",
        "addressText": "Samut Prakan"
      },
      {
        "name": "Samut Sakhon",
        "shortCode": "74",
        "paypalCode": "Samut Sakhon",
        "addressText": "Samut Sakhon"
      },
      {
        "name": "Samut Songkhram",
        "shortCode": "75",
        "paypalCode": "Samut Songkhram",
        "addressText": "Samut Songkhram"
      },
      {
        "name": "Saraburi",
        "shortCode": "19",
        "paypalCode": "Saraburi",
        "addressText": "Saraburi"
      },
      {
        "name": "Satun",
        "shortCode": "91",
        "paypalCode": "Satun",
        "addressText": "Satun"
      },
      {
        "name": "Sing Buri",
        "shortCode": "17",
        "paypalCode": "Sing Buri",
        "addressText": "Sing Buri"
      },
      {
        "name": "Si Sa ket",
        "shortCode": "33",
        "paypalCode": "Si Sa ket",
        "addressText": "Si Sa ket"
      },
      {
        "name": "Songkhla",
        "shortCode": "90",
        "paypalCode": "Songkhla",
        "addressText": "Songkhla"
      },
      {
        "name": "Sukhothai",
        "shortCode": "64",
        "paypalCode": "Sukhothai",
        "addressText": "Sukhothai"
      },
      {
        "name": "Suphan Buri",
        "shortCode": "72",
        "paypalCode": "Suphan Buri",
        "addressText": "Suphan Buri"
      },
      {
        "name": "Surat Thani",
        "shortCode": "84",
        "paypalCode": "Surat Thani",
        "addressText": "Surat Thani"
      },
      {
        "name": "Surin",
        "shortCode": "32",
        "paypalCode": "Surin",
        "addressText": "Surin"
      },
      {
        "name": "Tak",
        "shortCode": "63",
        "paypalCode": "Tak",
        "addressText": "Tak"
      },
      {
        "name": "Trang",
        "shortCode": "92",
        "paypalCode": "Trang",
        "addressText": "Trang"
      },
      {
        "name": "Trat",
        "shortCode": "23",
        "paypalCode": "Trat",
        "addressText": "Trat"
      },
      {
        "name": "Ubon Ratchathani",
        "shortCode": "34",
        "paypalCode": "Ubon Ratchathani",
        "addressText": "Ubon Ratchathani"
      },
      {
        "name": "Udon Thani",
        "shortCode": "41",
        "paypalCode": "Udon Thani",
        "addressText": "Udon Thani"
      },
      {
        "name": "Uthai Thani",
        "shortCode": "61",
        "paypalCode": "Uthai Thani",
        "addressText": "Uthai Thani"
      },
      {
        "name": "Uttaradit",
        "shortCode": "53",
        "paypalCode": "Uttaradit",
        "addressText": "Uttaradit"
      },
      {
        "name": "Yala",
        "shortCode": "95",
        "paypalCode": "Yala",
        "addressText": "Yala"
      },
      {
        "name": "Yasothon",
        "shortCode": "35",
        "paypalCode": "Yasothon",
        "addressText": "Yasothon"
      }
    ]
  },
  {
    "countryName": "Timor-Leste",
    "countryShortCode": "TL",
    "regions": []
  },
  {
    "countryName": "Togo",
    "countryShortCode": "TG",
    "regions": []
  },
  {
    "countryName": "Tokelau",
    "countryShortCode": "TK",
    "regions": []
  },
  {
    "countryName": "Tonga",
    "countryShortCode": "TO",
    "regions": []
  },
  {
    "countryName": "Trinidad and Tobago",
    "countryShortCode": "TT",
    "regions": []
  },
  {
    "countryName": "Tunisia",
    "countryShortCode": "TN",
    "regions": []
  },
  {
    "countryName": "Turkey",
    "countryShortCode": "TR",
    "regions": [
      {
        "name": "Adana",
        "shortCode": "01",
        "addressText": "Adana"
      },
      {
        "name": "Adiyaman",
        "shortCode": "02",
        "addressText": "Adiyaman"
      },
      {
        "name": "Afyonkarahisar",
        "shortCode": "03",
        "addressText": "Afyonkarahisar"
      },
      {
        "name": "Agri",
        "shortCode": "04",
        "addressText": "Agri"
      },
      {
        "name": "Aksaray",
        "shortCode": "68",
        "addressText": "Aksaray"
      },
      {
        "name": "Amasya",
        "shortCode": "05",
        "addressText": "Amasya"
      },
      {
        "name": "Ankara",
        "shortCode": "06",
        "addressText": "Ankara"
      },
      {
        "name": "Antalya",
        "shortCode": "07",
        "addressText": "Antalya"
      },
      {
        "name": "Ardahan",
        "shortCode": "75",
        "addressText": "Ardahan"
      },
      {
        "name": "Artvin",
        "shortCode": "08",
        "addressText": "Artvin"
      },
      {
        "name": "Aydin",
        "shortCode": "09",
        "addressText": "Aydin"
      },
      {
        "name": "Balikesir",
        "shortCode": "10",
        "addressText": "Balikesir"
      },
      {
        "name": "Bartin",
        "shortCode": "74",
        "addressText": "Bartin"
      },
      {
        "name": "Batman",
        "shortCode": "72",
        "addressText": "Batman"
      },
      {
        "name": "Bayburt",
        "shortCode": "69",
        "addressText": "Bayburt"
      },
      {
        "name": "Bilecik",
        "shortCode": "11",
        "addressText": "Bilecik"
      },
      {
        "name": "Bingol",
        "shortCode": "12",
        "addressText": "Bingol"
      },
      {
        "name": "Bitlis",
        "shortCode": "13",
        "addressText": "Bitlis"
      },
      {
        "name": "Bolu",
        "shortCode": "14",
        "addressText": "Bolu"
      },
      {
        "name": "Burdur",
        "shortCode": "15",
        "addressText": "Burdur"
      },
      {
        "name": "Bursa",
        "shortCode": "16",
        "addressText": "Bursa"
      },
      {
        "name": "Canakkale",
        "shortCode": "17",
        "addressText": "Canakkale"
      },
      {
        "name": "Cankiri",
        "shortCode": "18",
        "addressText": "Cankiri"
      },
      {
        "name": "Corum",
        "shortCode": "19",
        "addressText": "Corum"
      },
      {
        "name": "Denizli",
        "shortCode": "20",
        "addressText": "Denizli"
      },
      {
        "name": "Diyarbakir",
        "shortCode": "21",
        "addressText": "Diyarbakir"
      },
      {
        "name": "Duzce",
        "shortCode": "81",
        "addressText": "Duzce"
      },
      {
        "name": "Edirne",
        "shortCode": "22",
        "addressText": "Edirne"
      },
      {
        "name": "Elazig",
        "shortCode": "23",
        "addressText": "Elazig"
      },
      {
        "name": "Erzincan",
        "shortCode": "24",
        "addressText": "Erzincan"
      },
      {
        "name": "Erzurum",
        "shortCode": "25",
        "addressText": "Erzurum"
      },
      {
        "name": "Eskisehir",
        "shortCode": "26",
        "addressText": "Eskisehir"
      },
      {
        "name": "Gaziantep",
        "shortCode": "27",
        "addressText": "Gaziantep"
      },
      {
        "name": "Giresun",
        "shortCode": "28",
        "addressText": "Giresun"
      },
      {
        "name": "Gumushane",
        "shortCode": "29",
        "addressText": "Gumushane"
      },
      {
        "name": "Hakkari",
        "shortCode": "30",
        "addressText": "Hakkari"
      },
      {
        "name": "Hatay",
        "shortCode": "31",
        "addressText": "Hatay"
      },
      {
        "name": "Igdir",
        "shortCode": "76",
        "addressText": "Igdir"
      },
      {
        "name": "Isparta",
        "shortCode": "32",
        "addressText": "Isparta"
      },
      {
        "name": "Istanbul",
        "shortCode": "34",
        "addressText": "Istanbul"
      },
      {
        "name": "Izmir",
        "shortCode": "35",
        "addressText": "Izmir"
      },
      {
        "name": "Kahramanmaras",
        "shortCode": "46",
        "addressText": "Kahramanmaras"
      },
      {
        "name": "Karabuk",
        "shortCode": "78",
        "addressText": "Karabuk"
      },
      {
        "name": "Karaman",
        "shortCode": "70",
        "addressText": "Karaman"
      },
      {
        "name": "Kars",
        "shortCode": "36",
        "addressText": "Kars"
      },
      {
        "name": "Kastamonu",
        "shortCode": "37",
        "addressText": "Kastamonu"
      },
      {
        "name": "Kayseri",
        "shortCode": "38",
        "addressText": "Kayseri"
      },
      {
        "name": "Kilis",
        "shortCode": "79",
        "addressText": "Kilis"
      },
      {
        "name": "Kirikkale",
        "shortCode": "71",
        "addressText": "Kirikkale"
      },
      {
        "name": "Kirklareli",
        "shortCode": "39",
        "addressText": "Kirklareli"
      },
      {
        "name": "Kirsehir",
        "shortCode": "40",
        "addressText": "Kirsehir"
      },
      {
        "name": "Kocaeli",
        "shortCode": "41",
        "addressText": "Kocaeli"
      },
      {
        "name": "Konya",
        "shortCode": "42",
        "addressText": "Konya"
      },
      {
        "name": "Kutahya",
        "shortCode": "43",
        "addressText": "Kutahya"
      },
      {
        "name": "Malatya",
        "shortCode": "44",
        "addressText": "Malatya"
      },
      {
        "name": "Manisa",
        "shortCode": "45",
        "addressText": "Manisa"
      },
      {
        "name": "Mardin",
        "shortCode": "47",
        "addressText": "Mardin"
      },
      {
        "name": "Mersin",
        "shortCode": "33",
        "addressText": "Mersin"
      },
      {
        "name": "Mugla",
        "shortCode": "48",
        "addressText": "Mugla"
      },
      {
        "name": "Mus",
        "shortCode": "49",
        "addressText": "Mus"
      },
      {
        "name": "Nevsehir",
        "shortCode": "50",
        "addressText": "Nevsehir"
      },
      {
        "name": "Nigde",
        "shortCode": "51",
        "addressText": "Nigde"
      },
      {
        "name": "Ordu",
        "shortCode": "52",
        "addressText": "Ordu"
      },
      {
        "name": "Osmaniye",
        "shortCode": "80",
        "addressText": "Osmaniye"
      },
      {
        "name": "Rize",
        "shortCode": "53",
        "addressText": "Rize"
      },
      {
        "name": "Sakarya",
        "shortCode": "54",
        "addressText": "Sakarya"
      },
      {
        "name": "Samsun",
        "shortCode": "55",
        "addressText": "Samsun"
      },
      {
        "name": "Sanliurfa",
        "shortCode": "63",
        "addressText": "Sanliurfa"
      },
      {
        "name": "Siirt",
        "shortCode": "56",
        "addressText": "Siirt"
      },
      {
        "name": "Sinop",
        "shortCode": "57",
        "addressText": "Sinop"
      },
      {
        "name": "Sirnak",
        "shortCode": "73",
        "addressText": "Sirnak"
      },
      {
        "name": "Sivas",
        "shortCode": "58",
        "addressText": "Sivas"
      },
      {
        "name": "Tekirdag",
        "shortCode": "59",
        "addressText": "Tekirdag"
      },
      {
        "name": "Tokat",
        "shortCode": "60",
        "addressText": "Tokat"
      },
      {
        "name": "Trabzon",
        "shortCode": "61",
        "addressText": "Trabzon"
      },
      {
        "name": "Tunceli",
        "shortCode": "62",
        "addressText": "Tunceli"
      },
      {
        "name": "Usak",
        "shortCode": "64",
        "addressText": "Usak"
      },
      {
        "name": "Van",
        "shortCode": "65",
        "addressText": "Van"
      },
      {
        "name": "Yalova",
        "shortCode": "77",
        "addressText": "Yalova"
      },
      {
        "name": "Yozgat",
        "shortCode": "66",
        "addressText": "Yalova"
      },
      {
        "name": "Zonguldak",
        "shortCode": "67",
        "addressText": "Zonguldak"
      }
    ]
  },
  {
    "countryName": "Turkmenistan",
    "countryShortCode": "TM",
    "regions": []
  },
  {
    "countryName": "Turks and Caicos Islands",
    "countryShortCode": "TC",
    "regions": []
  },
  {
    "countryName": "Tuvalu",
    "countryShortCode": "TV",
    "regions": []
  },
  {
    "countryName": "Uganda",
    "countryShortCode": "UG",
    "regions": []
  },
  {
    "countryName": "Ukraine",
    "countryShortCode": "UA",
    "regions": [
      {
        "name": "Cherkasy",
        "shortCode": "71",
        "addressText": "Cherkasy Obl."
      },
      {
        "name": "Chernihiv",
        "shortCode": "74",
        "addressText": "Chernihiv Obl."
      },
      {
        "name": "Chernivtsi",
        "shortCode": "77",
        "addressText": "Chernivtsi Obl."
      },
      {
        "name": "Crimea (Avtonomna Respublika Krym)",
        "shortCode": "43",
        "addressText": "Krym"
      },
      {
        "name": "Dnipropetrovsk",
        "shortCode": "12",
        "addressText": "Dnipropetrovsk Obl."
      },
      {
        "name": "Donetsk",
        "shortCode": "14",
        "addressText": "Donetsk Obl."
      },
      {
        "name": "Ivano-Frankivsk",
        "shortCode": "26",
        "addressText": "Ivano-Frankivsk Obl."
      },
      {
        "name": "Kharkiv",
        "shortCode": "63",
        "addressText": "Kharkiv Obl."
      },
      {
        "name": "Kherson",
        "shortCode": "65",
        "addressText": "Kherson Obl."
      },
      {
        "name": "Khmelnytskyi",
        "shortCode": "68",
        "addressText": "Khmelnytskyi Obl."
      },
      {
        "name": "Kirovohrad",
        "shortCode": "35",
        "addressText": "Kirovohrad Obl."
      },
      {
        "name": "Kyivska",
        "shortCode": "32",
        "addressText": "Kyivska Obl."
      },
      {
        "name": "Kyïv",
        "shortCode": "30",
        "addressText": "Kyiv"
      },
      {
        "name": "Luhansk",
        "shortCode": "09",
        "addressText": "Luhansk Obl."
      },
      {
        "name": "Lviv",
        "shortCode": "46",
        "addressText": "Lviv Obl."
      },
      {
        "name": "Mykolaiv",
        "shortCode": "48",
        "addressText": "Mykolaiv Obl."
      },
      {
        "name": "Odessa",
        "shortCode": "51",
        "addressText": "Odessa Obl."
      },
      {
        "name": "Poltava",
        "shortCode": "53",
        "addressText": "Poltava Obl."
      },
      {
        "name": "Rivne",
        "shortCode": "56",
        "addressText": "Rivne Obl."
      },
      {
        "name": "Sumy",
        "shortCode": "59",
        "addressText": "Sumy Obl."
      },
      {
        "name": "Sevastopol",
        "shortCode": "40",
        "addressText": "Sevastopol"
      },
      {
        "name": "Ternopil",
        "shortCode": "61",
        "addressText": "Ternopil Obl."
      },
      {
        "name": "Vinnytsia",
        "shortCode": "05",
        "addressText": "Vinnytsia Obl."
      },
      {
        "name": "Volyn",
        "shortCode": "07",
        "addressText": "Volyn Obl."
      },
      {
        "name": "Zakarpattia",
        "shortCode": "21",
        "addressText": "Zakarpattia Obl."
      },
      {
        "name": "Zaporizhia",
        "shortCode": "23",
        "addressText": "Zaporizhia Obl."
      },
      {
        "name": "Zhytomyr",
        "shortCode": "18",
        "addressText": "Zhytomyr Obl."
      }
    ]
  },
  {
    "countryName": "United Arab Emirates",
    "countryShortCode": "AE",
    "regions": []
  },
  {
    "countryName": "United Kingdom",
    "countryShortCode": "GB",
    "regions": []
  },
  {
    "countryName": "United States",
    "countryShortCode": "US",
    "regions": [
      {
        "name": "Alabama",
        "shortCode": "AL",
        "paypalCode": "AL",
        "addressText": "AL"
      },
      {
        "name": "Alaska",
        "shortCode": "AK",
        "paypalCode": "AK",
        "addressText": "AK"
      },
      {
        "name": "Arizona",
        "shortCode": "AZ",
        "paypalCode": "AZ",
        "addressText": "AZ"
      },
      {
        "name": "Arkansas",
        "shortCode": "AR",
        "paypalCode": "AR",
        "addressText": "AR"
      },
      {
        "name": "California",
        "shortCode": "CA",
        "paypalCode": "CA",
        "addressText": "CA"
      },
      {
        "name": "Colorado",
        "shortCode": "CO",
        "paypalCode": "CO",
        "addressText": "CO"
      },
      {
        "name": "Connecticut",
        "shortCode": "CT",
        "paypalCode": "CT",
        "addressText": "CT"
      },
      {
        "name": "Delaware",
        "shortCode": "DE",
        "paypalCode": "DE",
        "addressText": "DE"
      },
      {
        "name": "District of Columbia",
        "shortCode": "DC",
        "paypalCode": "DC",
        "addressText": "DC"
      },
      {
        "name": "Florida",
        "shortCode": "FL",
        "paypalCode": "FL",
        "addressText": "FL"
      },
      {
        "name": "Georgia",
        "shortCode": "GA",
        "paypalCode": "GA",
        "addressText": "GA"
      },
      {
        "name": "Hawaii",
        "shortCode": "HI",
        "paypalCode": "HI",
        "addressText": "HI"
      },
      {
        "name": "Idaho",
        "shortCode": "ID",
        "paypalCode": "ID",
        "addressText": "ID"
      },
      {
        "name": "Illinois",
        "shortCode": "IL",
        "paypalCode": "IL",
        "addressText": "IL"
      },
      {
        "name": "Indiana",
        "shortCode": "IN",
        "paypalCode": "IN",
        "addressText": "IN"
      },
      {
        "name": "Iowa",
        "shortCode": "IA",
        "paypalCode": "IA",
        "addressText": "IA"
      },
      {
        "name": "Kansas",
        "shortCode": "KS",
        "paypalCode": "KS",
        "addressText": "KS"
      },
      {
        "name": "Kentucky",
        "shortCode": "KY",
        "paypalCode": "KY",
        "addressText": "KY"
      },
      {
        "name": "Louisiana",
        "shortCode": "LA",
        "paypalCode": "LA",
        "addressText": "LA"
      },
      {
        "name": "Maine",
        "shortCode": "ME",
        "paypalCode": "ME",
        "addressText": "ME"
      },
      {
        "name": "Maryland",
        "shortCode": "MD",
        "paypalCode": "MD",
        "addressText": "MD"
      },
      {
        "name": "Massachusetts",
        "shortCode": "MA",
        "paypalCode": "MA",
        "addressText": "MA"
      },
      {
        "name": "Michigan",
        "shortCode": "MI",
        "paypalCode": "MI",
        "addressText": "MI"
      },
      {
        "name": "Minnesota",
        "shortCode": "MN",
        "paypalCode": "MN",
        "addressText": "MN"
      },
      {
        "name": "Mississippi",
        "shortCode": "MS",
        "paypalCode": "MS",
        "addressText": "MS"
      },
      {
        "name": "Missouri",
        "shortCode": "MO",
        "paypalCode": "MO",
        "addressText": "MO"
      },
      {
        "name": "Montana",
        "shortCode": "MT",
        "paypalCode": "MT",
        "addressText": "MT"
      },
      {
        "name": "Nebraska",
        "shortCode": "NE",
        "paypalCode": "NE",
        "addressText": "NE"
      },
      {
        "name": "Nevada",
        "shortCode": "NV",
        "paypalCode": "NV",
        "addressText": "NV"
      },
      {
        "name": "New Hampshire",
        "shortCode": "NH",
        "paypalCode": "NH",
        "addressText": "NH"
      },
      {
        "name": "New Jersey",
        "shortCode": "NJ",
        "paypalCode": "NJ",
        "addressText": "NJ"
      },
      {
        "name": "New Mexico",
        "shortCode": "NM",
        "paypalCode": "NM",
        "addressText": "NM"
      },
      {
        "name": "New York",
        "shortCode": "NY",
        "paypalCode": "NY",
        "addressText": "NY"
      },
      {
        "name": "North Carolina",
        "shortCode": "NC",
        "paypalCode": "NC",
        "addressText": "NC"
      },
      {
        "name": "North Dakota",
        "shortCode": "ND",
        "paypalCode": "ND",
        "addressText": "ND"
      },
      {
        "name": "Ohio",
        "shortCode": "OH",
        "paypalCode": "OH",
        "addressText": "OH"
      },
      {
        "name": "Oklahoma",
        "shortCode": "OK",
        "paypalCode": "OK",
        "addressText": "OK"
      },
      {
        "name": "Oregon",
        "shortCode": "OR",
        "paypalCode": "OR",
        "addressText": "OR"
      },
      {
        "name": "Pennsylvania",
        "shortCode": "PA",
        "paypalCode": "PA",
        "addressText": "PA"
      },
      {
        "name": "Puerto Rico",
        "shortCode": "PR",
        "paypalCode": "PR",
        "addressText": "PR"
      },
      {
        "name": "Rhode Island",
        "shortCode": "RI",
        "paypalCode": "RI",
        "addressText": "RI"
      },
      {
        "name": "South Carolina",
        "shortCode": "SC",
        "paypalCode": "SC",
        "addressText": "SC"
      },
      {
        "name": "South Dakota",
        "shortCode": "SD",
        "paypalCode": "SD",
        "addressText": "SD"
      },
      {
        "name": "Tennessee",
        "shortCode": "TN",
        "paypalCode": "TN",
        "addressText": "TN"
      },
      {
        "name": "Texas",
        "shortCode": "TX",
        "paypalCode": "TX",
        "addressText": "TX"
      },
      {
        "name": "Utah",
        "shortCode": "UT",
        "paypalCode": "UT",
        "addressText": "UT"
      },
      {
        "name": "Vermont",
        "shortCode": "VT",
        "paypalCode": "VT",
        "addressText": "VT"
      },
      {
        "name": "Virginia",
        "shortCode": "VA",
        "paypalCode": "VA",
        "addressText": "VA"
      },
      {
        "name": "Washington",
        "shortCode": "WA",
        "paypalCode": "WA",
        "addressText": "WA"
      },
      {
        "name": "West Virginia",
        "shortCode": "WV",
        "paypalCode": "WV",
        "addressText": "WV"
      },
      {
        "name": "Wisconsin",
        "shortCode": "WI",
        "paypalCode": "WI",
        "addressText": "WI"
      },
      {
        "name": "Wyoming",
        "shortCode": "WY",
        "paypalCode": "WY",
        "addressText": "WY"
      },
      {
        "name": "AA (Armed Forces Americas)",
        "shortCode": "AA",
        "paypalCode": "AA",
        "addressText": "AA"
      },
      {
        "name": "AE (Armed Forces Europe, Canada, Africa and Middle East)",
        "shortCode": "AE",
        "paypalCode": "AE",
        "addressText": "AE"
      },
      {
        "name": "AP (Armed Forces Pacific)",
        "shortCode": "AP",
        "paypalCode": "AP",
        "addressText": "AP"
      },
      {
        "name": "American Samoa",
        "shortCode": "AS",
        "paypalCode": "AS",
        "addressText": "AS"
      },
      {
        "name": "Federated States of Micronesia",
        "shortCode": "FM",
        "paypalCode": "FM",
        "addressText": "FM"
      },
      {
        "name": "Guam",
        "shortCode": "GU",
        "paypalCode": "GU",
        "addressText": "GU"
      },
      {
        "name": "Marshall Islands",
        "shortCode": "MH",
        "paypalCode": "MH",
        "addressText": "MH"
      },
      {
        "name": "Northern Mariana Islands",
        "shortCode": "MP",
        "paypalCode": "MP",
        "addressText": "MP"
      },
      {
        "name": "Palau",
        "shortCode": "PW",
        "paypalCode": "PW",
        "addressText": "PW"
      },
      {
        "name": "U.S. Virgin Islands",
        "shortCode": "VI",
        "paypalCode": "VI",
        "addressText": "VI"
      },
      {
        "name": "U.S. Minor Outlying Islands",
        "shortCode": "UM",
        "paypalCode": "UM",
        "addressText": "UM"
      }
    ]
  },
  {
    "countryName": "Uruguay",
    "countryShortCode": "UY",
    "regions": []
  },
  {
    "countryName": "Uzbekistan",
    "countryShortCode": "UZ",
    "regions": []
  },
  {
    "countryName": "Vanuatu",
    "countryShortCode": "VU",
    "regions": []
  },
  {
    "countryName": "Vatican",
    "countryShortCode": "VA",
    "regions": []
  },
  {
    "countryName": "Venezuela",
    "countryShortCode": "VE",
    "regions": [
      {
        "name": "Amazonas",
        "shortCode": "Z",
        "addressText": "Amazonas"
      },
      {
        "name": "Anzoátegui",
        "shortCode": "B",
        "addressText": "Anzoategui"
      },
      {
        "name": "Apure",
        "shortCode": "C",
        "addressText": "Apure"
      },
      {
        "name": "Aragua",
        "shortCode": "D",
        "addressText": "Aragua"
      },
      {
        "name": "Barinas",
        "shortCode": "E",
        "addressText": "Barinas"
      },
      {
        "name": "Bolívar",
        "shortCode": "F",
        "addressText": "Bolivar"
      },
      {
        "name": "Carabobo",
        "shortCode": "G",
        "addressText": "Carabobo"
      },
      {
        "name": "Cojedes",
        "shortCode": "H",
        "addressText": "Cojedes"
      },
      {
        "name": "Distrito Capital",
        "shortCode": "A",
        "addressText": "Distrito Capital"
      },
      {
        "name": "Delta Amacuro",
        "shortCode": "Y",
        "addressText": "Delta Amacuro"
      },
      {
        "name": "Falcón",
        "shortCode": "I",
        "addressText": "Falcon"
      },
      {
        "name": "Guárico",
        "shortCode": "J",
        "addressText": "Guarico"
      },
      {
        "name": "Lara",
        "shortCode": "K",
        "addressText": "Lara"
      },
      {
        "name": "Mérida",
        "shortCode": "L",
        "addressText": "Merida"
      },
      {
        "name": "Miranda",
        "shortCode": "M",
        "addressText": "Miranda"
      },
      {
        "name": "Monagas",
        "shortCode": "N",
        "addressText": "Monagas"
      },
      {
        "name": "Nueva Esparta",
        "shortCode": "O",
        "addressText": "Nueva Esparta"
      },
      {
        "name": "Portuguesa",
        "shortCode": "P",
        "addressText": "Portuguesa"
      },
      {
        "name": "Sucre",
        "shortCode": "R",
        "addressText": "Sucre"
      },
      {
        "name": "Táchira",
        "shortCode": "S",
        "addressText": "Tachira"
      },
      {
        "name": "Trujillo",
        "shortCode": "T",
        "addressText": "Trujillo"
      },
      {
        "name": "Vargas",
        "shortCode": "X",
        "addressText": "Vargas"
      },
      {
        "name": "Yaracuy",
        "shortCode": "U",
        "addressText": "Yaracuy"
      },
      {
        "name": "Zulia",
        "shortCode": "V",
        "addressText": "Zulia"
      }
    ]
  },
  {
    "countryName": "Vietnam",
    "countryShortCode": "VN",
    "regions": [
      {
        "name": "Cần Thơ",
        "shortCode": "CT",
        "addressText": "Can Tho"
      },
      {
        "name": "Đà Nẵng",
        "shortCode": "DN",
        "addressText": "Da Nang"
      },
      {
        "name": "Đồng Nai",
        "shortCode": "39",
        "addressText": "Dong Nai"
      },
      {
        "name": "Đồng Tháp",
        "shortCode": "45",
        "addressText": "Dong Thap"
      },
      {
        "name": "Gia Lai",
        "shortCode": "30",
        "addressText": "Gia Lai"
      },
      {
        "name": "Hà Giang",
        "shortCode": "03",
        "addressText": "Ha Giang"
      },
      {
        "name": "Hà Nam",
        "shortCode": "63",
        "addressText": "Ha Nam"
      },
      {
        "name": "Hà Nội",
        "shortCode": "HN",
        "addressText": "Ha Noi"
      },
      {
        "name": "Hà Tây",
        "shortCode": "15",
        "addressText": "Ha Tay"
      },
      {
        "name": "Hà Tĩnh",
        "shortCode": "23",
        "addressText": "Ha Tinh"
      },
      {
        "name": "Hải Dương",
        "shortCode": "61",
        "addressText": "Hai Duong"
      },
      {
        "name": "Hải Phòng",
        "shortCode": "HP",
        "addressText": "Hai Phong"
      },
      {
        "name": "Hậu Giang",
        "shortCode": "73",
        "addressText": "Hau Giang"
      },
      {
        "name": "Hồ Chí Minh (Sài Gòn)",
        "shortCode": "SG",
        "addressText": "Ho Chi Minh"
      },
      {
        "name": "Hòa Bình",
        "shortCode": "14",
        "addressText": "Hoa Binh"
      },
      {
        "name": "Hưng Yên",
        "shortCode": "66",
        "addressText": "Hung Yen"
      },
      {
        "name": "Khánh Hòa",
        "shortCode": "34",
        "addressText": "Khanh Hoa"
      },
      {
        "name": "Kiên Giang",
        "shortCode": "47",
        "addressText": "Kien Giang"
      },
      {
        "name": "Kon Tum",
        "shortCode": "28",
        "addressText": "Kon Tum"
      },
      {
        "name": "Lai Châu",
        "shortCode": "01",
        "addressText": "Lai Chau"
      },
      {
        "name": "Lâm Đồng",
        "shortCode": "35",
        "addressText": "Lam Dong"
      },
      {
        "name": "Lạng Sơn",
        "shortCode": "09",
        "addressText": "Lang Son"
      },
      {
        "name": "Lào Cai",
        "shortCode": "02",
        "addressText": "Lao Cai"
      },
      {
        "name": "Long An",
        "shortCode": "41",
        "addressText": "Long An"
      },
      {
        "name": "Nam Định",
        "shortCode": "67",
        "addressText": "Nam Dinh"
      },
      {
        "name": "Nghệ An",
        "shortCode": "22",
        "addressText": "Nghe An"
      },
      {
        "name": "Ninh Bình",
        "shortCode": "18",
        "addressText": "Ninh Binh"
      },
      {
        "name": "Ninh Thuận",
        "shortCode": "36",
        "addressText": "Ninh Thuan"
      },
      {
        "name": "Phú Thọ",
        "shortCode": "68",
        "addressText": "Phu Tho"
      },
      {
        "name": "Phú Yên",
        "shortCode": "32",
        "addressText": "Phu Yen"
      },
      {
        "name": "Quảng Bình",
        "shortCode": "24",
        "addressText": "Quang Binh"
      },
      {
        "name": "Quảng Nam",
        "shortCode": "27",
        "addressText": "Quang Nam"
      },
      {
        "name": "Quảng Ngãi",
        "shortCode": "29",
        "addressText": "Quang Ngai"
      },
      {
        "name": "Quảng Ninh",
        "shortCode": "13",
        "addressText": "Quang Ninh"
      },
      {
        "name": "Quảng Trị",
        "shortCode": "25",
        "addressText": "Quang Tri"
      },
      {
        "name": "Sóc Trăng",
        "shortCode": "52",
        "addressText": "Soc Trang"
      },
      {
        "name": "Sơn La",
        "shortCode": "05",
        "addressText": "Son La"
      },
      {
        "name": "Tây Ninh",
        "shortCode": "37",
        "addressText": "Tay Ninh"
      },
      {
        "name": "Thái Bình",
        "shortCode": "20",
        "addressText": "Thai Binh"
      },
      {
        "name": "Thái Nguyên",
        "shortCode": "69",
        "addressText": "Thai Nguyen"
      },
      {
        "name": "Thanh Hóa",
        "shortCode": "21",
        "addressText": "Thanh Hoa"
      },
      {
        "name": "Thừa Thiên–Huế",
        "shortCode": "26",
        "addressText": "Thua Thian-Hue"
      },
      {
        "name": "Tiền Giang",
        "shortCode": "46",
        "addressText": "Tien Giang"
      },
      {
        "name": "Trà Vinh",
        "shortCode": "51",
        "addressText": "Tra Vinh"
      },
      {
        "name": "Tuyên Quang",
        "shortCode": "07",
        "addressText": "Tuyen Quang"
      },
      {
        "name": "Vĩnh Long",
        "shortCode": "49",
        "addressText": "Vinh Long"
      },
      {
        "name": "Vĩnh Phúc",
        "shortCode": "70",
        "addressText": "Vinh Phuc"
      },
      {
        "name": "Yên Bái",
        "shortCode": "06",
        "addressText": "Yen Bai"
      }
    ]
  },
  {
    "countryName": "Yemen",
    "countryShortCode": "YE",
    "regions": []
  },
  {
    "countryName": "Zambia",
    "countryShortCode": "ZM",
    "regions": []
  },
  {
    "countryName": "Zimbabwe",
    "countryShortCode": "ZW",
    "regions": [
      {
        "name": "Bulawayo",
        "shortCode": "BU",
        "addressText": "Bulawayo"
      },
      {
        "name": "Harare",
        "shortCode": "HA",
        "addressText": "Harare"
      },
      {
        "name": "Manicaland",
        "shortCode": "MA",
        "addressText": "Manicaland"
      },
      {
        "name": "Mashonaland Central",
        "shortCode": "MC",
        "addressText": "Mashonaland Central"
      },
      {
        "name": "Mashonaland East",
        "shortCode": "ME",
        "addressText": "Mashonaland East"
      },
      {
        "name": "Mashonaland West",
        "shortCode": "MW",
        "addressText": "Mashonaland West"
      },
      {
        "name": "Masvingo",
        "shortCode": "MV",
        "addressText": "Masvingo"
      },
      {
        "name": "Matabeleland North",
        "shortCode": "MN",
        "addressText": "Matabeleland North"
      },
      {
        "name": "Matabeleland South",
        "shortCode": "MS",
        "addressText": "Matabeleland South"
      },
      {
        "name": "Midlands",
        "shortCode": "MI",
        "addressText": "Midlands"
      }
    ]
  }
];

}));
