export function EmptyState() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">
          Aktuell kein Stück
        </h1>
        <p className="text-muted-foreground text-lg">
          Wir arbeiten bereits mit Hochdruck an einem neuen Stück, bleibt
          gespannt!
        </p>
      </div>
    </section>
  );
}
