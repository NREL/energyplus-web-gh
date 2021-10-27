export type Country =
  'ARE' |
  'ARG' |
  'AUS' |
  'AUT' |
  'BEL' |
  'BGD' |
  'BGR' |
  'BIH' |
  'BLR' |
  'BLZ' |
  'BOL' |
  'BRA' |
  'BRN' |
  'CAN' |
  'CHE' |
  'CHL' |
  'CHN' |
  'COL' |
  'CUB' |
  'CYP' |
  'CZE' |
  'DEU' |
  'DNK' |
  'DZA' |
  'ECU' |
  'EGY' |
  'ESP' |
  'ETH' |
  'FIN' |
  'FJI' |
  'FRA' |
  'GBR' |
  'GHA' |
  'GRC' |
  'GTM' |
  'GUM' |
  'HND' |
  'HUN' |
  'IND' |
  'IRL' |
  'IRN' |
  'ISL' |
  'ISR' |
  'ITA' |
  'JPN' |
  'KAZ' |
  'KEN' |
  'KOR' |
  'KWT' |
  'LBY' |
  'LKA' |
  'LTU' |
  'MAC' |
  'MAR' |
  'MDG' |
  'MDV' |
  'MEX' |
  'MHL' |
  'MNG' |
  'MTQ' |
  'MYS' |
  'NIC' |
  'NLD' |
  'NOR' |
  'NPL' |
  'NZL' |
  'PAK' |
  'PER' |
  'PHL' |
  'PLW' |
  'POL' |
  'PRI' |
  'PRK' |
  'PRT' |
  'PRY' |
  'ROU' |
  'RUS' |
  'SAU' |
  'SEN' |
  'SGP' |
  'SLV' |
  'SRB' |
  'SVK' |
  'SVN' |
  'SWE' |
  'SYR' |
  'THA' |
  'TUN' |
  'TUR' |
  'TWN' |
  'UKR' |
  'UMI' |
  'URY' |
  'USA' |
  'UZB' |
  'VEN' |
  'VIR' |
  'VNM' |
  'ZAF' |
  'ZWE';

export const Countries: { [key in Country]: string } = {
  ARE: 'United Arab Emirates',
  ARG: 'Argentina',
  AUS: 'Australia',
  AUT: 'Austria',
  BEL: 'Belgium',
  BGD: 'Bangladesh',
  BGR: 'Bulgaria',
  BIH: 'Bosnia and Herzegowina',
  BLR: 'Belarus',
  BLZ: 'Belize',
  BOL: 'Bolivia',
  BRA: 'Brazil',
  BRN: 'Brunei Darussalam',
  CAN: 'Canada',
  CHE: 'Switzerland',
  CHL: 'Chile',
  CHN: 'China',
  COL: 'Colombia',
  CUB: 'Cuba',
  CYP: 'Cyprus',
  CZE: 'Czech Republic',
  DEU: 'Germany',
  DNK: 'Denmark',
  DZA: 'Algiers',
  ECU: 'Ecuador',
  EGY: 'Egypt',
  ESP: 'Spain',
  ETH: 'Ethiopia',
  FIN: 'Finland',
  FJI: 'Fiji',
  FRA: 'France',
  GBR: 'United Kingdom',
  GHA: 'Ghana',
  GRC: 'Greece',
  GTM: 'Guatemala',
  GUM: 'Guam',
  HND: 'Honduras',
  HUN: 'Hungary',
  IND: 'India',
  IRL: 'Ireland',
  IRN: 'Iran - Islamic Republic of',
  ISL: 'Iceland',
  ISR: 'Israel',
  ITA: 'Italy',
  JPN: 'Japan',
  KAZ: 'Kazakhstan',
  KEN: 'Kenya',
  KOR: 'Korea - Republic of',
  KWT: 'Kuwait',
  LBY: 'Libyan Arab Jamahiriya',
  LKA: 'Sri Lanka',
  LTU: 'Lithuania',
  MAC: 'Macau',
  MAR: 'Morocco',
  MDG: 'Madagascar',
  MDV: 'Maldives',
  MEX: 'Mexico',
  MHL: 'Marshall Islands',
  MNG: 'Mongolia',
  MTQ: 'Martinique',
  MYS: 'Malaysia',
  NIC: 'Nicaragua',
  NLD: 'Netherlands',
  NOR: 'Norway',
  NPL: 'Nepal',
  NZL: 'New Zealand',
  PAK: 'Pakistan',
  PER: 'Peru',
  PHL: 'Philippines',
  PLW: 'Palau',
  POL: 'Poland',
  PRI: 'Puerto Rico',
  PRK: 'Korea - Democratic People\'s Republic of',
  PRT: 'Portugal',
  PRY: 'Paraguay',
  ROU: 'Romania',
  RUS: 'Russian Federation',
  SAU: 'Saudi Arabia',
  SEN: 'Senegal',
  SGP: 'Singapore',
  SLV: 'El Salvador',
  SRB: 'Serbia',
  SVK: 'Slovakia (Slovak Republic)',
  SVN: 'Slovenia',
  SWE: 'Sweden',
  SYR: 'Syrian Arab Republic',
  THA: 'Thailand',
  TUN: 'Tunisia',
  TUR: 'Turkey',
  TWN: 'Taiwan',
  UKR: 'Ukraine',
  UMI: 'United States Minor Outlying Islands',
  URY: 'Uruguay',
  USA: 'USA',
  UZB: 'Uzbekistan',
  VEN: 'Venezuela',
  VIR: 'Virgin Islands (U.S.)',
  VNM: 'Viet Nam',
  ZAF: 'South Africa',
  ZWE: 'Zimbabwe'
} as const;
