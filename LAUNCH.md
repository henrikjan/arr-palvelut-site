# arr-palvelut.fi: julkaisu

Pino sama kuin niittopartio.fi: Astro, GitHub, AWS Amplify, Web3Forms.
Kaikki muutettavat tiedot (hinnat, yhteyshenkilö, sähköposti, Y-tunnus, Facebook, Web3Forms-avain, kunnat) ovat tiedostossa `src/config.ts`.

## 0. Pikakäynnistys: nyt vs myöhemmin

**Monimutkaisin asia ei ole sivusto vaan jätteen kuljetuksen rekisteröinti** (jätehuoltorekisteri, ELY/viranomainen). Ilman sitä ei saa ajaa ensimmäistä noutoa. Hae se ensimmäisenä.

**Nyt (tarvitaan ensimmäiseen tilaukseen):**
- [ ] Jätehuoltorekisterihakemus vireille
- [ ] Domain + sähköposti tilaus@arr-palvelut.fi (Simply.com)
- [ ] Web3Forms-avain `src/config.ts`:ään
- [ ] Amplify kytketty repoon (toimii amplifyapp.com-osoitteessa jo ennen domainia)
- [ ] 20-50 suursäkkiä varastoon (tukkuhinta selvitettävä)
- [ ] Vastaanottopaikka ja hinta puutarhajätteelle sovittu (Rosk'n Roll -kontakti)
- [ ] Laskutus: lasku noudon jälkeen, 14 pv (Holvi tai muu)
- [ ] Facebook-sivu + ensimmäinen julkaisu

**Myöhemmin (ei estä aloitusta):**
- Säkkeihin painatus (nimi, puhelin, osoite)
- Meta-liidilomake ja maksettu Facebook-mainonta
- Google Ads -kampanja kuntasivuille
- Verkkomaksu tilauksen yhteydessä (Paytrail/Stripe)
- Reittipäiväkalenteri sivulle (asiakas valitsee noutopäivän)
- Säkkien seuranta (kenellä säkki on, milloin tuotu)
- Taloyhtiöiden kausisopimussivu ja isännöitsijämarkkinointi
- Ruotsinkieliset kuntasivut ja ruotsinkieliset toimitusehdot
- Kuluttajansuojalain mukainen peruuttamislomake ja ehtojen juristitarkistus

**Sitouttamismalli (päätetty 7.10.2026):**
- Ilmainen säkki vain noudon tilaajalle: tilaus = säkki + nouto 149 €
- Noutopäivä sovitaan säkin tuonnin yhteydessä, reittipäivinä
- Säkki on ARR:n omaisuutta, 30 € jos käytetty muuhun tai kadonnut (ehtojen hyväksyntä lomakkeella)
- Säkit viedään samoilla reiteillä kuin noudot

## 1. Ennen julkaisua (pakolliset)

- [ ] `web3formsKey`: uusi avain web3forms.com, vastaanottajaksi tilaus@arr-palvelut.fi
- [x] `businessId`: 3320118-3 (tarkistettu PRH:sta)
- [x] Yhteyshenkilö Ron Perjala 0400 522 462, ensisijaisesti lomake ja sähköposti
- [ ] Hinnat vahvistettu (`firstBag` 149 €, `extraBag` 89 €, sis. alv 25,5 %)
- [x] Säkki ilmaiseksi noudon tilaajalle, toimitusehdot hyväksytään lomakkeella
- [ ] Sähköposti tilaus@arr-palvelut.fi toimii (Simply.com)
- [ ] Jätehuoltorekisteröinti haettu ennen ensimmäistä ajoa (jätteen ammattimainen kuljettaminen)

## 2. GitHub + Amplify

1. Uusi repo `arr-palvelut` GitHubiin, push.
2. Amplify Console, Create new app, GitHub, repo `arr-palvelut`, haara `main`.
3. Build-asetukset luetaan `amplify.yml`:stä (npm ci, npm run build, artifacts `dist`).
4. Deploy. Tarkista amplifyapp.com-osoitteessa, että kaikki 11 sivua aukeavat.

## 3. Domain: Simply.com ja Amplify

Amplify tarvitsee juuridomainille (arr-palvelut.fi ilman www) ALIAS/ANAME-tietueen. En saanut varmistettua, tukeeko Simply.comin DNS sitä.

**Vaihtoehto A (suositus): Route 53 hoitaa DNS:n**
1. Route 53, Create hosted zone `arr-palvelut.fi` (n. 0,50 USD/kk).
2. Simply.com, domainin nimipalvelimet: vaihda Route 53:n antamiin neljään NS-osoitteeseen.
3. Jos sähköposti on Simply.comissa: kopioi Simplyn MX-, SPF (TXT)- ja DKIM-tietueet Route 53:een ENNEN nimipalvelinvaihtoa, muuten posti katkeaa.
4. Amplify, Hosting, Custom domains, Add domain `arr-palvelut.fi`. Amplify tekee DNS-tietueet ja SSL:n itse.

**Vaihtoehto B: DNS jää Simply.comiin**
1. Amplify, Add domain, valitse manuaalinen DNS. Amplify antaa kaksi CNAMEa: varmennus (`_xxxx.arr-palvelut.fi`) ja `www`.
2. Lisää molemmat Simply.comin DNS-hallintaan.
3. Juuridomain: jos Simply tukee ALIAS-tietuetta, osoita se Amplifyn CloudFront-osoitteeseen. Muuten ohjaa arr-palvelut.fi osoitteeseen www.arr-palvelut.fi Simplyn uudelleenohjauksella (tarkista Simplyn hallintapaneelista).

## 4. Hakusanat

Perustuu Googlen hakuehdotuksiin (7.10.2026). Hakumäärät tarkistetaan Keyword Plannerissa.

**Pääsanat (otsikot, H1):** puutarhajätteen nouto (+ kunta), puutarhajätteen noutopalvelu
**Toissijaiset (H2, leipäteksti):** puutarhajätteen poiskuljetus, puutarhajätteen hävittäminen, risujen nouto, risujen hävittäminen, oksien hävittäminen, puutarhajäte säkki
**Sisältökulma:** risujen poltto / risujen poltto ilmoitus, osio "Risujen ja oksien hävittäminen ilman polttamista"
**Ruotsi:** trädgårdsavfall hämtning, trädgårdsavfall säck
**Ei kannata:** pihajätteen nouto (ei signaalia), suursäkki yksinään (ostoaikeinen), lehtien (= sanomalehdet)
**Negatiiviset (Ads):** kompostointi, kompostori, vastaanotto, aukioloajat, lajittelu, sekajätteeseen, multaa, sepeli, puuilo, motonet, ilmoitus

## 5. Kilpailijatilanne (tarkistettu 7.10.2026)

- **Siisti Piha (Suomen Siisti Piha Oy, myy K-Raudan kautta):** puutarhajäte 1000 l 49 € + noutomaksu 70-99 €/nouto (1-10 säkkiä), tyhjä säkki ei sisälly (K-Rauta 18,95 €). Nouto vain toimitusalueilla 1-3.
  - 1 säkki alueella 1 ≈ 138 €, 2 säkkiä ≈ 206 €, 3 säkkiä ≈ 274 €
  - Avoin kysymys: kuuluvatko Siuntio, Inkoo, Lohja, Vihti ja Raasepori alueisiin 1-3. Tarkista postinumeroilla siistipiha.fi:n aluehaulla.
- **Sortera haravointijätelava:** 589 € Uusimaa 1 -alueella, 5 vrk, jätemaksut sisältyvät.
- **L&T:** vakiopalvelua puutarhajätesäkeille en löytänyt verkosta.

## 6. Facebook-sivu

- **Nimi:** ARR-Palvelut
- **Kategoria:** Jätehuoltopalvelu (toissijainen: Puutarhanhoitopalvelu)
- **Käyttäjänimi:** @arrpalvelut
- **Tietoja (lyhyt):** Puutarhajätteen nouto suursäkissä Länsi-Uudellamaalla. Säkki ilmaiseksi noudon tilaajalle. Nouto kiinteällä hinnalla, jätemaksu ja uusi säkki sisältyvät.
- **Painike:** Rekisteröidy (linkki https://arr-palvelut.fi/?tilaus=ilmainen#tilaa)
- **Liidilomake (Meta Lead Ads):** kysymykset nimi, puhelin, osoite, kunta, "Tilaan: säkki + nouto / nouto omalle säkille". Liidit sähköpostiin tilaus@arr-palvelut.fi
- **Verkkosivu:** https://arr-palvelut.fi

**Ensimmäinen julkaisu:**

Tilaa puutarhajätteen nouto, niin tuomme suursäkin pihaasi ilmaiseksi Siuntiossa, Inkoossa, Lohjalla, Vihdissä, Raaseporissa ja Kirkkonummella.

Haemme täyden säkin sovittuna päivänä 149 €:lla (lisäsäkit samasta osoitteesta 89 €). Hintaan sisältyy nouto, jätemaksu ja uusi tyhjä säkki tilalle.

Tilaa säkki ja nouto: arr-palvelut.fi

**Mainoksen kohdennus:** sijainti palvelukunnat, ikä 35+, kiinnostuksen kohteet puutarhanhoito ja omakotitalo, kesto syyskausi marraskuun puoliväliin.

Kun sivu on luotu, lisää osoite `src/config.ts`:n kenttään `facebook`.
