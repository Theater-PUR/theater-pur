export function PlayBookingSidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
          <h3 className="font-display text-lg font-bold text-foreground mb-2">
            Tickets sichern
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Wählen Sie einen Termin aus und klicken Sie auf &quot;Tickets
            buchen&quot; um Ihre Karten online zu buchen.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Buchung über Fienta.com
          </p>
        </div>
      </div>
    </div>
  );
}
