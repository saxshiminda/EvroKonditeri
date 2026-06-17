/** Evro Konditeri — company facts used across the public site. */
export const BRAND = {
  name: 'Evro Konditeri',
  nameKa: 'ევრო კონდიტერი',
  tagline: 'Fresh bakery & confectionery',
  facebook: 'https://www.facebook.com/Evro.Konditeri.Ge',
  mainPhone: '+995 597 68 50 50',
  hours: 'Daily · 09:00 – 22:00',
  email: 'info@evrokonditeri.ge',
} as const;

export type Branch = {
  id: string;
  name: string;
  nameKa: string;
  address: string;
  addressKa: string;
  phone: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

/** Real branch locations sourced from public listings (Yell.ge, Yandex Maps). */
export const BRANCHES: Branch[] = [
  {
    id: 'dadiani',
    name: 'Nadzaladevi — Ts. Dadiani St',
    nameKa: 'ნაძალადევი — ც. დადიანის ქ.',
    address: '6 Ts. Dadiani Street, Nadzaladevi, Tbilisi',
    addressKa: 'თბილისი, ნაძალადევი, ც. დადიანის ქუჩა 6',
    phone: '+995 597 68 50 50',
    lat: 41.7512,
    lng: 44.7948,
    mapsUrl: 'https://maps.google.com/?q=41.7512,44.7948',
  },
  {
    id: 'pekini',
    name: 'Saburtalo — Pekini Avenue',
    nameKa: 'საბურთალო — პეკინის გამზ.',
    address: '42 Pekini Avenue, Saburtalo, Tbilisi',
    addressKa: 'თბილისი, საბურთალო, პეკინის გამზირი 42',
    phone: '+995 595 61 85 85',
    lat: 41.7321,
    lng: 44.7795,
    mapsUrl: 'https://maps.google.com/?q=41.7321,44.7795',
  },
  {
    id: 'marjanishvili',
    name: 'Chugureti — Marjanishvili St',
    nameKa: 'ჩუღურეთი — მარჯანიშვილის ქ.',
    address: '28 Kote Marjanishvili Street, Chugureti, Tbilisi',
    addressKa: 'თბილისი, ჩუღურეთი, კ. მარჯანიშვილის ქუჩა 28',
    phone: '+995 596 94 30 30',
    lat: 41.7098,
    lng: 44.8012,
    mapsUrl: 'https://maps.google.com/?q=41.7098,44.8012',
  },
  {
    id: 'tsereteli',
    name: 'Didi Dighomi — Tsereteli Avenue',
    nameKa: 'დიდი დიღომი — წერეთლის გამზ.',
    address: '128 Tsereteli Avenue, Didi Dighomi, Tbilisi',
    addressKa: 'თბილისი, დიდუბე, წერეთლის გამზირი 128',
    phone: '+995 592 51 57 57',
    lat: 41.7765,
    lng: 44.7668,
    mapsUrl: 'https://maps.google.com/?q=41.7765,44.7668',
  },
];

/** Map center — midpoint of Tbilisi branch cluster */
export const MAP_CENTER = { lat: 41.742, lng: 44.785 } as const;
