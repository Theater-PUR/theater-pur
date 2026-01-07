import { getSiteSettings } from "@/lib/sanity-data";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz und zur Datenverarbeitung",
};

export default async function DatenschutzPage() {
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-muted-foreground text-lg">
              Informationen zum Datenschutz und zur Datenverarbeitung
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Allgemeine Hinweise
                  </h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden
                    können. Ausführliche Informationen zum Thema Datenschutz
                    entnehmen Sie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Datenerfassung auf dieser Website
                  </h3>
                  <p className="font-medium text-foreground">
                    Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?
                  </p>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den
                    Websitebetreiber. Dessen Kontaktdaten können Sie dem
                    Impressum dieser Website entnehmen.
                  </p>
                  <p className="font-medium text-foreground mt-4">
                    Wie erfassen wir Ihre Daten?
                  </p>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                    diese mitteilen. Hierbei kann es sich z. B. um Daten
                    handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung
                    beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                    sind vor allem technische Daten (z. B. Internetbrowser,
                    Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                    Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
                    Website betreten.
                  </p>
                  <p className="font-medium text-foreground mt-4">
                    Wofür nutzen wir Ihre Daten?
                  </p>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie
                    Bereitstellung der Website zu gewährleisten. Andere Daten
                    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  <p className="font-medium text-foreground mt-4">
                    Welche Rechte haben Sie bezüglich Ihrer Daten?
                  </p>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                    Herkunft, Empfänger und Zweck Ihrer gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                    Recht, die Berichtigung oder Löschung dieser Daten zu
                    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                    erteilt haben, können Sie diese Einwilligung jederzeit für
                    die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Des Weiteren
                    steht Ihnen ein Beschwerderecht bei der zuständigen
                    Aufsichtsbehörde zu.
                  </p>
                  <p>
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                    Sie sich jederzeit an uns wenden.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                2. Hosting
              </h2>
              <p className="text-muted-foreground">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Externes Hosting
                  </h3>
                  <p>
                    Diese Website wird extern gehostet. Die personenbezogenen
                    Daten, die auf dieser Website erfasst werden, werden auf den
                    Servern des Hosters / der Hoster gespeichert. Hierbei kann
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                    Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                    Websitezugriffe und sonstige Daten, die über eine Website
                    generiert werden, handeln.
                  </p>
                  <p>
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                    gegenüber unseren potenziellen und bestehenden Kunden (Art.
                    6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                    schnellen und effizienten Bereitstellung unseres
                    Online-Angebots durch einen professionellen Anbieter (Art. 6
                    Abs. 1 lit. f DSGVO).
                  </p>
                  <p>
                    Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                    verarbeiten, wie dies zur Erfüllung seiner
                    Leistungspflichten erforderlich ist und unsere Weisungen in
                    Bezug auf diese Daten befolgen.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Datenschutz
                  </h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                    persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website benutzen, werden verschiedene
                    personenbezogene Daten erhoben. Personenbezogene Daten sind
                    Daten, mit denen Sie persönlich identifiziert werden können.
                    Die vorliegende Datenschutzerklärung erläutert, welche Daten
                    wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                    wie und zu welchem Zweck das geschieht.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet
                    (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                    aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                    Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <div className="mt-2">
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
                    {settings?.contactPhone && (
                      <p>Telefon: {settings.contactPhone}</p>
                    )}
                    {settings?.contactEmail && (
                      <p>
                        E-Mail:{" "}
                        <a
                          href={`mailto:${settings.contactEmail}`}
                          className="text-primary hover:underline"
                        >
                          {settings.contactEmail}
                        </a>
                      </p>
                    )}
                  </div>
                  <p className="mt-4">
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Speicherdauer
                  </h3>
                  <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine
                    speziellere Speicherdauer genannt wurde, verbleiben Ihre
                    personenbezogenen Daten bei uns, bis der Zweck für die
                    Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                    Löschersuchen geltend machen oder eine Einwilligung zur
                    Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                    sofern wir keine anderen rechtlich zulässigen Gründe für die
                    Speicherung Ihrer personenbezogenen Daten haben (z. B.
                    steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall
                    dieser Gründe.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                    ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Die
                    Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Widerspruchsrecht gegen die Datenerhebung in besonderen
                    Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                  </h3>
                  <p className="uppercase font-semibold text-foreground">
                    Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1
                    lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht,
                    aus Gründen, die sich aus Ihrer besonderen Situation
                    ergeben, gegen die Verarbeitung Ihrer personenbezogenen
                    Daten Widerspruch einzulegen; dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling. Die jeweilige
                    Rechtsgrundlage, auf denen eine Verarbeitung beruht,
                    entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
                    Widerspruch einlegen, werden wir Ihre betroffenen
                    personenbezogenen Daten nicht mehr verarbeiten, es sei denn,
                    wir können zwingende schutzwürdige Gründe für die
                    Verarbeitung nachweisen, die Ihre Interessen, Rechte und
                    Freiheiten überwiegen oder die Verarbeitung dient der
                    Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                  </p>
                  <p className="uppercase font-semibold text-foreground mt-4">
                    Werden Ihre personenbezogenen Daten verarbeitet, um
                    Direktwerbung zu betreiben, so haben Sie das Recht,
                    jederzeit Widerspruch gegen die Verarbeitung Sie
                    betreffender personenbezogener Daten zum Zwecke derartiger
                    Werbung einzulegen; dies gilt auch für das Profiling, soweit
                    es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
                    widersprechen, werden Ihre personenbezogenen Daten
                    anschließend nicht mehr zum Zwecke der Direktwerbung
                    verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                    ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
                    in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                    Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                    Einwilligung oder in Erfüllung eines Vertrags automatisiert
                    verarbeiten, an sich oder an einen Dritten in einem
                    gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    Sofern Sie die direkte Übertragung der Daten an einen
                    anderen Verantwortlichen verlangen, erfolgt dies nur, soweit
                    es technisch machbar ist.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Auskunft, Löschung und Berichtigung
                  </h3>
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                    jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                    Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                    sowie zu weiteren Fragen zum Thema personenbezogene Daten
                    können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Recht auf Einschränkung der Verarbeitung
                  </h3>
                  <p>
                    Sie haben das Recht, die Einschränkung der Verarbeitung
                    Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                    Sie sich jederzeit an uns wenden. Das Recht auf
                    Einschränkung der Verarbeitung besteht in folgenden Fällen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                      personenbezogenen Daten bestreiten, benötigen wir in der
                      Regel Zeit, um dies zu überprüfen. Für die Dauer der
                      Prüfung haben Sie das Recht, die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                    <li>
                      Wenn die Verarbeitung Ihrer personenbezogenen Daten
                      unrechtmäßig geschah/geschieht, können Sie statt der
                      Löschung die Einschränkung der Datenverarbeitung
                      verlangen.
                    </li>
                    <li>
                      Wenn wir Ihre personenbezogenen Daten nicht mehr
                      benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                      Geltendmachung von Rechtsansprüchen benötigen, haben Sie
                      das Recht, statt der Löschung die Einschränkung der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </li>
                    <li>
                      Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                      eingelegt haben, muss eine Abwägung zwischen Ihren und
                      unseren Interessen vorgenommen werden. Solange noch nicht
                      feststeht, wessen Interessen überwiegen, haben Sie das
                      Recht, die Einschränkung der Verarbeitung Ihrer
                      personenbezogenen Daten zu verlangen.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                    eingeschränkt haben, dürfen diese Daten – von ihrer
                    Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                    Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                    natürlichen oder juristischen Person oder aus Gründen eines
                    wichtigen öffentlichen Interesses der Europäischen Union
                    oder eines Mitgliedstaats verarbeitet werden.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                4. Datenerfassung auf dieser Website
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Kontaktformular
                  </h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben aus dem Anfrageformular inklusive der
                    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Diese Daten geben wir nicht ohne Ihre
                    Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
                    6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                    eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist. In allen
                    übrigen Fällen beruht die Verarbeitung auf unserem
                    berechtigten Interesse an der effektiven Bearbeitung der an
                    uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder
                    auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
                    diese abgefragt wurde.
                  </p>
                  <p>
                    Die von Ihnen im Kontaktformular eingegebenen Daten
                    verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                    Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                    für die Datenspeicherung entfällt (z. B. nach
                    abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                    gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
                    – bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Anfrage per E-Mail, Telefon oder Telefax
                  </h3>
                  <p>
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren,
                    wird Ihre Anfrage inklusive aller daraus hervorgehenden
                    personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                    Bearbeitung Ihres Anliegens bei uns gespeichert und
                    verarbeitet. Diese Daten geben wir nicht ohne Ihre
                    Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
                    6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                    eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist. In allen
                    übrigen Fällen beruht die Verarbeitung auf unserem
                    berechtigten Interesse an der effektiven Bearbeitung der an
                    uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder
                    auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
                    diese abgefragt wurde.
                  </p>
                  <p>
                    Die von Ihnen an uns per Kontaktanfragen übersandten Daten
                    verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                    Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                    für die Datenspeicherung entfällt (z. B. nach
                    abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                    gesetzliche Bestimmungen – insbesondere gesetzliche
                    Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                5. Plugins und Tools
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Sanity CMS (Content Management System)
                  </h3>
                  <p>
                    Wir verwenden Sanity.io als Content Management System (CMS)
                    für die Verwaltung und Bereitstellung der Inhalte dieser
                    Website. Anbieter ist Sanity.io Inc., 1045 Sansome St., San
                    Francisco, CA 94111, USA.
                  </p>
                  <p>
                    Sanity.io wird verwendet, um Website-Inhalte wie Texte,
                    Bilder, Veranstaltungsdaten und andere Medien zu speichern
                    und zu verwalten. Beim Abruf von Inhalten werden technische
                    Daten (wie IP-Adressen und Zugriffszeiten) an die Server von
                    Sanity übertragen. Diese Datenverarbeitung ist erforderlich,
                    um die Inhalte unserer Website bereitzustellen.
                  </p>
                  <p>
                    Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs.
                    1 lit. f DSGVO (berechtigtes Interesse an einer effizienten
                    und sicheren Verwaltung unserer Website-Inhalte). Sanity.io
                    verarbeitet Ihre Daten in unserem Auftrag und ist durch
                    einen Auftragsverarbeitungsvertrag verpflichtet, Ihre Daten
                    nur gemäß unseren Weisungen zu verarbeiten.
                  </p>
                  <p>
                    Sanity.io kann Daten in den USA verarbeiten. Die
                    Übermittlung von Daten in die USA erfolgt auf Grundlage der
                    Standardvertragsklauseln der EU-Kommission. Sanity.io ist
                    zudem nach dem EU-US Data Privacy Framework zertifiziert.
                  </p>
                  <p>
                    Weitere Informationen zum Datenschutz bei Sanity.io finden
                    Sie unter:{" "}
                    <a
                      href="https://www.sanity.io/legal/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://www.sanity.io/legal/privacy
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Fienta (Ticket-System)
                  </h3>
                  <p>
                    Wir nutzen auf unserer Website den Ticket-Service von
                    Fienta. Anbieter ist die Fienta Ticketing GmbH, Schönbrunner
                    Straße 213-215, 1120 Wien, Österreich.
                  </p>
                  <p>
                    Bei der Nutzung des Ticket-Services werden personenbezogene
                    Daten (wie Name, E-Mail-Adresse, Zahlungsinformationen) an
                    Fienta übermittelt und dort verarbeitet. Die
                    Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                    lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f
                    DSGVO (berechtigtes Interesse an einem sicheren und
                    effizienten Ticket-Verkauf).
                  </p>
                  <p>
                    Weitere Informationen zum Datenschutz bei Fienta finden Sie
                    unter:{" "}
                    <a
                      href="https://fienta.com/de/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://fienta.com/de/datenschutz
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
