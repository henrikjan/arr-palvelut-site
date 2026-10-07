// Kaikki muutettavat tiedot yhdessä paikassa.
// Hinnat ovat verollisia (alv 25,5 %), koska asiakkaat ovat kotitalouksia ja taloyhtiöitä.

export const site = {
  name: 'ARR-Palvelut',
  legalName: 'ARR-Palvelut Oy',
  businessId: '3320118-3', // Y-tunnus, näkyy alatunnisteessa ja tietosuojaselosteessa
  url: 'https://arr-palvelut.fi',
  phone: '0400 522 462',
  phoneIntl: '+358400522462',
  email: 'tilaus@arr-palvelut.fi', // ensisijainen yhteystapa lomakkeen lisäksi
  contactName: 'Ron Perjala',
  facebook: '', // Facebook-sivun osoite, kun sivu on luotu
  web3formsKey: 'VAIHDA-WEB3FORMS-AVAIN',
};

export const price = {
  firstBag: 149, // ensimmäinen säkki osoitteesta
  extraBag: 89, // jokainen lisäsäkki samasta osoitteesta samalla noudolla
  vatPct: '25,5',
  starterBagFree: true, // ensimmäinen tyhjä säkki tuodaan veloituksetta
};

export type Area = {
  slug: string;
  name: string;
  inessive: string; // "Siuntiossa"
  places: string[];
  sv?: string;
};

// Rosk'n Rollin toimialueen kunnat Länsi-Uudellamaalla + kotikunta Kirkkonummi
export const areas: Area[] = [
  { slug: 'siuntio', name: 'Siuntio', inessive: 'Siuntiossa', places: ['Siuntion kirkonkylä', 'Siuntion asema'], sv: 'Sjundeå' },
  { slug: 'inkoo', name: 'Inkoo', inessive: 'Inkoossa', places: ['Inkoon kirkonkylä', 'Degerby', 'Barösund'], sv: 'Ingå' },
  { slug: 'lohja', name: 'Lohja', inessive: 'Lohjalla', places: ['Lohjan keskusta', 'Virkkala', 'Karjalohja', 'Nummi', 'Sammatti'], sv: 'Lojo' },
  { slug: 'vihti', name: 'Vihti', inessive: 'Vihdissä', places: ['Nummela', 'Vihdin kirkonkylä', 'Otalampi'], sv: 'Vichtis' },
  { slug: 'raasepori', name: 'Raasepori', inessive: 'Raaseporissa', places: ['Karjaa', 'Tammisaari', 'Pohja'], sv: 'Raseborg' },
  { slug: 'kirkkonummi', name: 'Kirkkonummi', inessive: 'Kirkkonummella', places: ['Kirkkonummen keskusta', 'Masala', 'Veikkola', 'Upinniemi'], sv: 'Kyrkslätt' },
];

export const eur = (n: number) => `${n} €`;
