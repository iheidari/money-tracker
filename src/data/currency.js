const currencies = {
  AED: { name: 'Emirati Dirham', code: 'AED', symbol: '.د.ب', exp: 2 },
  AFN: { name: 'Afghan Afghani', code: 'AFN', symbol: '؋', exp: 2 },
  ALL: { name: 'Albanian lek', code: 'ALL', symbol: 'lek', exp: 2 },
  AMD: { name: 'Armenian dram', code: 'AMD', symbol: '', exp: 2 },
  ANG: { name: 'Dutch Guilder', code: 'ANG', symbol: 'ƒ', exp: 2 },
  AOA: { name: 'Angolan Kwanza', code: 'AOA', symbol: 'Kz', exp: 2 },
  ARS: { name: 'Argentine peso', code: 'ARS', symbol: '$', exp: 2 },
  AUD: { name: 'Australian Dollar', code: 'AUD', symbol: '$', exp: 2 },
  AWG: { name: 'Arubin florin', code: 'AWG', symbol: 'ƒ', exp: 2 },
  AZN: { name: 'Azerbaijani manat', code: 'AZN', symbol: 'ман', exp: 2 },
  BAM: { name: 'Bosnian Convertible Marka', code: 'BAM', symbol: 'KM', exp: 2 },
  BBD: { name: 'Barbadian dollar', code: 'BBD', symbol: '$', exp: 2 },
  BDT: { name: 'Bangladeshi Taka', code: 'BDT', symbol: 'Tk', exp: 2 },
  BGN: { name: 'Bulgarian lev', code: 'BGN', symbol: 'лв', exp: 2 },
  BHD: { name: 'Bahraini Dinar', code: 'BHD', symbol: '.د.ب or BD', exp: 3 },
  BIF: { name: 'Burundian Franc', code: 'BIF', symbol: 'FBu', exp: 0 },
  BMD: { name: 'Bermudian dollar', code: 'BMD', symbol: '$', exp: 2 },
  BND: { name: 'Bruneian Dollar', code: 'BND', symbol: '$', exp: 2 },
  BOB: { name: 'Bolivian Boliviano', code: 'BOB', symbol: '$b', exp: 2 },
  BRL: { name: 'Brazilian real', code: 'BRL', symbol: 'R$', exp: 2 },
  BSD: { name: 'Bahamian dollar', code: 'BSD', symbol: 'B$', exp: 2 },
  BTN: { name: 'Bhutanese Ngultrum', code: 'BTN', symbol: 'Nu.', exp: 2 },
  BWP: { name: 'Botswana Pula', code: 'BWP', symbol: 'P', exp: 2 },
  BYR: { name: 'Belarusian ruble', code: 'BYR', symbol: 'р', exp: 2 },
  BZD: { name: 'Belize dollar', code: 'BZD', symbol: 'BZ$', exp: 2 },
  CAD: { name: 'Canadian Dollar', code: 'CAD', symbol: '$', exp: 2 },
  CHF: { name: 'Swiss Franc', code: 'CHF', symbol: 'CHF', exp: 2 },
  CLP: { name: 'Chilean Peso', code: 'CLP', symbol: '$', exp: 0 },
  CNY: { name: 'Yuan or chinese renminbi', code: 'CNY', symbol: '¥', exp: 2 },
  COP: { name: 'Colombian peso', code: 'COP', symbol: '$', exp: 2 },
  CRC: { name: 'Costa Rican colón', code: 'CRC', symbol: '₡', exp: 2 },
  CUC: { name: 'Cuban convertible peso', code: 'CUC', symbol: '$', exp: 2 },
  CUP: { name: 'Cuban peso', code: 'CUP', symbol: '₱', exp: 2 },
  CVE: { name: 'Cape Verdean Escudo', code: 'CVE', symbol: '$', exp: 0 },
  CZK: { name: 'Czech koruna', code: 'CZK', symbol: 'Kč', exp: 2 },
  DJF: { name: 'Djiboutian Franc', code: 'DJF', symbol: 'fdj', exp: 0 },
  DKK: { name: 'Danish krone', code: 'DKK', symbol: 'kr', exp: 2 },
  DOP: { name: 'Dominican peso', code: 'DOP', symbol: '$', exp: 2 },
  DZD: { name: 'Algerian Dinar', code: 'DZD', symbol: 'جد', exp: 2 },
  EGP: { name: 'Egyptian Pound', code: 'EGP', symbol: '£ ', exp: 2 },
  ERN: { name: 'Eritrean nakfa', code: 'ERN', symbol: 'ናቕፋ', exp: 2 },
  ETB: { name: 'Ethiopian Birr', code: 'ETB', symbol: 'Br', exp: 2 },
  EUR: { name: 'Euro', code: 'EUR', symbol: '€', exp: 2 },
  FJD: { name: 'Fijian dollar', code: 'FJD', symbol: '$', exp: 2 },
  FKP: { name: 'Falkland Island Pound', code: 'FKP', symbol: '£', exp: 2 },
  GBP: { name: 'British Pound', code: 'GBP', symbol: '£', exp: 2 },
  GEL: { name: 'Georgian lari', code: 'GEL', symbol: 'ლ', exp: 2 },
  GHS: { name: 'Ghanaian Cedi', code: 'GHS', symbol: 'GH¢', exp: 2 },
  GIP: { name: 'Gibraltar pound', code: 'GIP', symbol: '£', exp: 2 },
  GMD: { name: 'Gambian dalasi', code: 'GMD', symbol: 'D', exp: 2 },
  GNF: { name: 'Guinean Franc', code: 'GNF', symbol: '', exp: 0 },
  GTQ: { name: 'Guatemalan Quetzal', code: 'GTQ', symbol: 'Q', exp: 2 },
  GYD: { name: 'Guyanese dollar', code: 'GYD', symbol: '$', exp: 2 },
  HKD: { name: 'Hong Kong dollar', code: 'HKD', symbol: 'HK$', exp: 2 },
  HNL: { name: 'Honduran lempira', code: 'HNL', symbol: 'L', exp: 2 },
  HRK: { name: 'Croatian kuna', code: 'HRK', symbol: 'kn', exp: 2 },
  HTG: { name: 'Haitian gourde', code: 'HTG', symbol: 'G', exp: 2 },
  HUF: { name: 'Hungarian forint', code: 'HUF', symbol: 'Ft', exp: 2 },
  IDR: { name: 'Indonesian Rupiah', code: 'IDR', symbol: 'Rp', exp: 2 },
  ILS: { name: 'Israeli Shekel', code: 'ILS', symbol: '₪', exp: 2 },
  INR: { name: 'Indian Rupee', code: 'INR', symbol: '₹', exp: 2 },
  IQD: { name: 'Iraqi Dinar', code: 'IQD', symbol: 'ع.د', exp: 3 },
  IRR: { name: 'Iranian Rial', code: 'IRR', symbol: '﷼', exp: 2 },
  ISK: { name: 'Icelandic Krona', code: 'ISK', symbol: 'kr', exp: 0 },
  JMD: { name: 'Jamaican dollar', code: 'JMD', symbol: 'J$', exp: 2 },
  JOD: { name: 'Jordanian Dinar', code: 'JOD', symbol: '', exp: 3 },
  JPY: { name: 'Japanese yen', code: 'JPY', symbol: '¥', exp: 0 },
  KES: { name: 'Kenyan Shilling', code: 'KES', symbol: 'KSh', exp: 2 },
  KGS: { name: 'Kyrgyzstani som', code: 'KGS', symbol: 'лв', exp: 2 },
  KHR: { name: 'Cambodian Riel', code: 'KHR', symbol: '៛', exp: 2 },
  KMF: { name: 'Comoro Franc', code: 'KMF', symbol: '', exp: 0 },
  KPW: { name: 'North Korean won', code: 'KPW', symbol: '₩', exp: 2 },
  KRW: { name: 'South Korean won', code: 'KRW', symbol: '₩', exp: 0 },
  KWD: { name: 'Kuwaiti Dinar', code: 'KWD', symbol: 'ك', exp: 3 },
  KYD: { name: 'Caymanian Dollar', code: 'KYD', symbol: '$', exp: 2 },
  KZT: { name: 'Kazakhstani tenge', code: 'KZT', symbol: '₸', exp: 2 },
  LAK: { name: 'Lao or Laotian Kip', code: 'LAK', symbol: '₭', exp: 2 },
  LBP: { name: 'Lebanese Pound', code: 'LBP', symbol: 'ل.ل', exp: 2 },
  LKR: { name: 'Sri Lankan Rupee', code: 'LKR', symbol: 'Rs', exp: 2 },
  LRD: { name: 'Liberian Dollar', code: 'LRD', symbol: '$', exp: 2 },
  LSL: { name: 'Lesotho loti', code: 'LSL', symbol: 'L or M', exp: 2 },
  LTL: { name: 'Lithuanian litas', code: 'LTL', symbol: 'Lt', exp: 2 },
  LYD: { name: 'Libyan Dinar', code: 'LYD', symbol: ' د.ل', exp: 3 },
  MAD: { name: 'Moroccan Dirham', code: 'MAD', symbol: 'م.د.', exp: 2 },
  MDL: { name: 'Moldovan Leu', code: 'MDL', symbol: 'L', exp: 2 },
  MGA: { name: 'Malagasy Ariary', code: 'MGA', symbol: 'Ar', exp: 2 },
  MKD: { name: 'Macedonian Denar', code: 'MKD', symbol: 'ден', exp: 2 },
  MMK: { name: 'Burmese Kyat', code: 'MMK', symbol: 'K', exp: 2 },
  MNT: { name: 'Mongolian Tughrik', code: 'MNT', symbol: '₮', exp: 2 },
  MOP: { name: 'Macau Pataca', code: 'MOP', symbol: 'MOP$', exp: 2 },
  MRO: { name: 'Mauritanian Ouguiya', code: 'MRO', symbol: 'UM', exp: 2 },
  MUR: { name: 'Mauritian rupee', code: 'MUR', symbol: 'Rs', exp: 2 },
  MVR: { name: 'Maldivian Rufiyaa', code: 'MVR', symbol: 'rf', exp: 2 },
  MWK: { name: 'Malawian Kwacha', code: 'MWK', symbol: 'MK', exp: 2 },
  MXN: { name: 'Mexico Peso', code: 'MXN', symbol: '$', exp: 2 },
  MYR: { name: 'Malaysian Ringgit', code: 'MYR', symbol: 'RM', exp: 2 },
  MZN: { name: 'Mozambican Metical', code: 'MZN', symbol: 'MT', exp: 2 },
  NAD: { name: 'Namibian Dollar', code: 'NAD', symbol: '$', exp: 2 },
  NGN: { name: 'Nigerian Naira', code: 'NGN', symbol: '₦', exp: 2 },
  NIO: { name: 'Nicaraguan córdoba', code: 'NIO', symbol: 'C$', exp: 2 },
  NOK: { name: 'Norwegian krone', code: 'NOK', symbol: 'kr', exp: 2 },
  NPR: { name: 'Nepalese Rupee', code: 'NPR', symbol: 'Rs', exp: 2 },
  NZD: { name: 'New Zealand Dollar', code: 'NZD', symbol: '$', exp: 2 },
  OMR: { name: 'Omani Rial', code: 'OMR', symbol: 'ع.ر.', exp: 3 },
  PAB: { name: 'Balboa panamérn', code: 'PAB', symbol: 'B/', exp: 2 },
  PEN: { name: 'Peruvian nuevo sol', code: 'PEN', symbol: 'S/', exp: 2 },
  PGK: { name: 'Papua New Guinean Kina', code: 'PGK', symbol: 'K', exp: 2 },
  PHP: { name: 'Philippine Peso', code: 'PHP', symbol: '₱', exp: 2 },
  PKR: { name: 'Pakistani Rupee', code: 'PKR', symbol: 'Rs', exp: 2 },
  PLN: { name: 'Polish złoty', code: 'PLN', symbol: 'zł', exp: 2 },
  PYG: { name: 'Paraguayan guarani', code: 'PYG', symbol: '₲', exp: 0 },
  QAR: { name: 'Qatari Riyal', code: 'QAR', symbol: 'ق.ر ', exp: 2 },
  RON: { name: 'Romanian leu', code: 'RON', symbol: 'lei', exp: 2 },
  RSD: { name: 'Serbian Dinar', code: 'RSD', symbol: 'РСД', exp: 2 },
  RUB: { name: 'Russian Rouble', code: 'RUB', symbol: '₽', exp: 2 },
  RWF: { name: 'Rwandan franc', code: 'RWF', symbol: 'FRw, RF, R₣', exp: 0 },
  SAR: { name: 'Saudi Arabian Riyal', code: 'SAR', symbol: 'ر.س', exp: 2 },
  SBD: { name: 'Solomon Islander Dollar', code: 'SBD', symbol: 'SI$', exp: 2 },
  SCR: { name: 'Seychellois Rupee', code: 'SCR', symbol: 'Rs', exp: 2 },
  SDG: { name: 'Sudanese Pound', code: 'SDG', symbol: '', exp: 2 },
  SEK: { name: 'Swedish krona', code: 'SEK', symbol: 'kr', exp: 2 },
  SGD: { name: 'Singapore Dollar', code: 'SGD', symbol: '$', exp: 2 },
  SLL: { name: 'Sierra Leonean Leone', code: 'SLL', symbol: 'Le', exp: 2 },
  SOS: { name: 'Somali Shilling', code: 'SOS', symbol: 'S', exp: 2 },
  SRD: { name: 'Surinamese dollar', code: 'SRD', symbol: '$', exp: 2 },
  SSP: { name: 'South Sudanese pound', code: 'SSP', symbol: '£', exp: 2 },
  SYP: { name: 'Syrian Pound', code: 'SYP', symbol: '£', exp: 2 },
  SZL: { name: 'Swazi Lilangeni', code: 'SZL', symbol: 'L or E', exp: 2 },
  THB: { name: 'Thai Baht', code: 'THB', symbol: '฿', exp: 2 },
  TJS: { name: 'Tajikistani somoni', code: 'TJS', symbol: '', exp: 2 },
  TMT: { name: 'Turkmenistan manat', code: 'TMT', symbol: 'T', exp: 2 },
  TND: { name: 'Tunisian Dinar', code: 'TND', symbol: '', exp: 3 },
  TOP: { name: "Tongan Pa'anga", code: 'TOP', symbol: 'T$', exp: 2 },
  TRY: { name: 'Turkish Lira', code: 'TRY', symbol: '₺', exp: 2 },
  TTD: { name: 'Trinidadian dollar', code: 'TTD', symbol: 'TT$', exp: 2 },
  TWD: { name: 'Taiwan New Dollar', code: 'TWD', symbol: 'NT$', exp: 2 },
  TZS: { name: 'Tanzanian Shilling', code: 'TZS', symbol: 'Sh', exp: 2 },
  UAH: { name: 'Ukrainian Hryvnia', code: 'UAH', symbol: '₴', exp: 2 },
  UGX: { name: 'Ugandan Shilling', code: 'UGX', symbol: 'USh', exp: 0 },
  USD: { name: 'US Dollar', code: 'USD', symbol: '$', exp: 2 },
  UYU: { name: 'Uruguayan peso', code: 'UYU', symbol: '$U', exp: 2 },
  UZS: { name: 'Uzbekistani som', code: 'UZS', symbol: 'лв', exp: 2 },
  VEF: { name: 'Venezuelan bolivar', code: 'VEF', symbol: 'Bs', exp: 2 },
  VND: { name: 'Vietnamese Dong', code: 'VND', symbol: '₫', exp: 0 },
  VUV: { name: 'Vanuatu Vatu', code: 'VUV', symbol: 'VT', exp: 0 },
  WST: { name: 'Samoan Tālā', code: 'WST', symbol: '$', exp: 2 },
  XCD: { name: 'East Caribbean dollar', code: 'XCD', symbol: 'EC$', exp: 2 },
  YER: { name: 'Yemeni Rial', code: 'YER', symbol: '', exp: 2 },
  ZAR: { name: 'South African Rand', code: 'ZAR', symbol: 'R', exp: 2 },
  ZMW: { name: 'Zambian Kwacha', code: 'ZMW', symbol: 'ZMK', exp: 2 },
  ZWD: { name: 'Zimbabwean Dollar', code: 'ZWD', symbol: 'Z$', exp: 2 }
}

export function currenciesAsDropdownOptions() {
  const options = []
  for (let code of Object.keys(currencies)) {
    options.push({
      key: code,
      value: code,
      text: `${code}, ${currencies[code].name}`
    })
  }

  return options
}

export function currencyName(code) {
  return currencies[code] && currencies[code].name
}

export function currencySymbol(code) {
  return currencies[code] && (currencies[code].symbol || code.toUpperCase())
}

export function currencyExponent(code) {
  return currencies[code] && currencies[code].exp
}