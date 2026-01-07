import { getSiteSettings } from "@/lib/sanity-data";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen",
};

export default async function ImpressumPage() {
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impressum
            </h1>
            <p className="text-muted-foreground text-lg">
              Angaben gemäß § 5 TMG
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">
                  {settings?.brandName || "Theater Pur"}
                </p>
                {settings?.addressStreet && <p>{settings.addressStreet}</p>}
                {(settings?.addressPostalCode || settings?.addressCity) && (
                  <p>
                    {[settings?.addressPostalCode, settings?.addressCity]
                      .filter(Boolean)
                      .join(" ")}
                  </p>
                )}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Kontakt
              </h2>
              <div className="text-muted-foreground">
                {settings?.contactPhone && (
                  <p>
                    <span className="font-medium text-foreground">
                      Telefon:
                    </span>{" "}
                    {settings.contactPhone}
                  </p>
                )}
                {settings?.contactEmail && (
                  <p>
                    <span className="font-medium text-foreground">E-Mail:</span>{" "}
                    <a
                      href={`mailto:${settings.contactEmail}`}
                      className="text-primary hover:underline"
                    >
                      {settings.contactEmail}
                    </a>
                  </p>
                )}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">
                  {settings?.brandName || "Theater Pur"}
                </p>
                {settings?.addressStreet && <p>{settings.addressStreet}</p>}
                {(settings?.addressPostalCode || settings?.addressCity) && (
                  <p>
                    {[settings?.addressPostalCode, settings?.addressCity]
                      .filter(Boolean)
                      .join(" ")}
                  </p>
                )}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Haftungsausschluss
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte können wir jedoch keine Gewähr
                    übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Haftung für Links
                  </h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                    permanente inhaltliche Kontrolle der verlinkten Seiten ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                    nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                    werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Urheberrecht
                  </h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                EU-Streitschlichtung
              </h2>
              <p className="text-muted-foreground">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
