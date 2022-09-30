import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mx-2 md:mx-auto text-black py-24 md:w-2/3">
      <article className="flex flex-col gap-4">
        <p className="font-semibold">VEDRØRENDE COOKIES.</p>
        <p>Denne nettsiden eies og administreres av:</p>
        <p>Østlaft AS, Stolvstadvegen 13, 2360 Rudshøgda, Tel: 623 58 744</p>
        <p>
          Østlaft AS behandler dine personopplysninger på en trygg og sikker måte, i henhold til gjeldende lover om
          personvern.
        </p>
        <p>
          Retningslinjene inneholder informasjon du har krav på når det samles inn opplysninger fra nettsiden vår og
          generell informasjon om hvordan vi behandler personopplysninger. Østlaft AS er behandlingsansvarlig for
          selskapets behandling av personopplysninger. Behandlingsgrunnlaget er, med mindre annet er spesifisert,
          samtykke fra deg som besøkende/kunde.
        </p>
        <p>
          Tidsperioden data blir lagret hos oss begrenser seg til tidsperioden som er nødvendig for at vi skal kunne
          ivareta kundeforholdet med deg. Vi behandler følgende kategorier personopplysninger om deg: navn. mobilnummer,
          transaksjonshistorikk samt andre opplysninger du gir i forbindelse med kontakt med oss.
        </p>
        <Header text="SÆRLIG OM VÅR BRUK AV COOKIES:" />
        <p>
          Nettstedet ostlaft.no bruker cookies. Cookies er små tekstfiler som nettstedet vårt lagrer på datamaskinen din
          for blant annet å ivareta brukervennlighet, navigasjon og analytisk kapasitet. Disse inneholder kun en liten
          tekstfil - ikke programmer, virus eller malware av annen natur.
        </p>
        <p>Vi bruker tre ulike typer cookies på ostlaft.no:</p>
        <Header text="1. GRUNNLEGGENDE COOKIES:" />
        <p>
          Disse informasjonskapslene er helt nødvendige for at sidene på nettstedet skal fungere ordentlig. Uten disse
          informasjonskapslene, kan vi ikke garantere at du klarer å navigere deg rundt på nettstedet, melde deg på
          seminarer eller nyhetsbrev.
        </p>
        <Header text="2. ANALYSECOOKIES:" />
        <p>
          Som en viktig del av arbeidet med å lage et brukervennlig nettsted, ser vi på brukermønsteret til de som
          besøker nettstedet. For å analysere informasjonen, bruker vi analyseverktøyet Google Analytics. Google
          Analytics bruker cookies, som registrerer brukernes IP-adresse, og som gir informasjon om den enkelte brukers
          bevegelser på nett. Eksempler på hva statistikken gir oss svar på er: hvor mange som besøker ulike sider, hvor
          lenge besøket varer, hvilke nettsteder brukerne kommer fra og hvilke nettlesere som benyttes. IP adresser og
          generelle bevegelsesmønster på nett blir aggregert av Google før vi får tilgang på den. Det vil si at ingen av
          informasjonskapslene gjør at vi kan knytte informasjon om din bruk av nettstedet til deg som enkeltperson.
        </p>
        <Header text="3. FUNKSJONALITETSCOOKIES:" />
        <p>
          For å øke brukervennligheten på siden bruker vi funksjonalitetscookies. Disse husker valg du har foretatt deg
          på nettsiden - som for eksempel artikler du har lest eller andre preferanser du har lagt igjen på siden.
        </p>
        <Header text="SAMTYKKE TIL BRUK AV COOKIES:" />
        <p>
          Om nettleseren din er stilt inn på at du samtykker til bruk av cookies, er dette regnet som aktivt samtykke
          til at vi plasserer cookies i nettleseren din. Dette er satt aktivt som standard i nettleseren din.
        </p>
        <Header text="TREKKE TILBAKE SAMTYKKE ELLER ADMINISTRERE ANNONSØRER:" />
        <p>
          Du kan når som helst trekke tilbake ditt samtykke til Østlaft AS bruk av cookies. Dette må du selv
          administrere i nettleseren din. Les mer om hvordan du går frem i den nettleseren du bruker på www.nettvett.no.
          Administrasjon av annonsører som har lagret cookies i nettleseren din finner du en guide til her:
          www.youronlinechoices.com/nor/dine-valg.
        </p>
        <p>
          Vi gjør oppmerksom på at funksjonalitet på nettsiden kan forringes ved blokkering av cookies fra Østlaft AS.
          Blokkerer du for annonsekapsler vil du fortsatt eksponeres for annonser - men annonsørene kan ikke lenger
          kontrollere hvor ofte du ser annonsene eller tilrettelegge dem for deg.
        </p>
        <Header text="BRUK AV PERSONOPPLYSNINGENE:" />
        <p>
          Personopplysningene dine blir bare brukt til andre formål eller oppgitt til en tredjepart med din tillatelse
          eller når det er nødvendig for at vi skal kunne utføre de kontraktsmessige forpliktelsene vi har overfor deg.
          Østlaft AS videreselger ikke personopplysninger til andre. Det er kun aggregert data som blir delt med
          tredjeparter.
        </p>
        <p>
          Vi kan for eksempel bruke en tjenesteleverandør til å utføre tekniske tjenester, administrative tjenester,
          markedsføringstjenester eller andre tjenester på vegne av oss, og dele opplysningene dine med den aktuelle
          tjenesteleverandøren.
        </p>
        <p>
          Ved påmelding til våre seminarer vil dine personopplysninger kun bli brukt til behandling av påmeldingen,
          praktisk informasjon i forkant av seminaret, tilsending av evaluering og eventuell oppfølging i etterkant.
        </p>
        <Header text="AVMELDING AV NYHETSBREV:" />
        <p>
          Dersom du har samtykket i å motta nyhetsbrev fra Østlaft AS, aksepterer du at opplysningene som er registrert
          om deg kan brukes av Østlaft AS til å sende deg markedsføring av Østlaft AS sine produkter, tjenester,
          seminarer og konkurranser via nyhetsbrev. Du kan når som helst trekke tilbake ditt samtykke, ved å sende en
          e-post til post@ostlaft.no.
        </p>
        <Header text="DINE RETTIGHETER:" />
        <p>
          Vi ønsker å gjøre deg kjent med noen av dine viktigste rettigheter. I tillegg til at du har rett til
          informasjon om hvordan opplysninger om deg blir behandlet, og som vi har beskrevet ovenfor, har du på
          forespørsel rett til å få kopi av opplysningene som er registrert om deg. Du har også rett til å få uriktige
          opplysninger korrigert og som en hovedregel også en rett til å få slettet opplysninger om deg selv dersom
          opplysningene ikke lengre er nødvendige for formålet de er samlet inn for eller dersom ditt samtykke trekkes
          tilbake. Du har også en rett til å bli «glemt», det vil si at du kan be oss om å slette alle innsamlede data
          om deg. Videre ønsker vi å informere om at du også har en rett til å klage til Datatilsynet.
        </p>
        <p>
          Hvis du har spørsmål om dine rettigheter knyttet til vår håndtering av dine personopplysninger, vennligst ta
          kontakt med post@innrb.no slik at vi kan hjelpe deg.
        </p>
        <p>Disse retningslinjene ble sist oppdatert 07.09.2022</p>
      </article>
      <div className="pt-4">
        <span className="underline">
          <Link href="/">Tilbake</Link>
        </span>
      </div>
    </div>
  );
};

type HeaderProps = { text: string };
const Header = ({ text }: HeaderProps) => {
  return <p className="font-semibold">{text}</p>;
};

export default PrivacyPolicy;
