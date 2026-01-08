import { Users } from "lucide-react";
import type { CastMember } from "@/types/sanity";

interface PlayCastProps {
  cast: CastMember[];
}

export function PlayCast({ cast }: PlayCastProps) {
  if (!cast || cast.length === 0) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Besetzung
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {cast.map((member) => (
          <div
            key={member._key}
            className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {member.actorName}
              </p>
              <p className="text-sm text-muted-foreground">{member.roleName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
