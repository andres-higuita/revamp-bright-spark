import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionShell, Stars } from "@/components/profile/profile-ui";
import { profile, initials } from "@/components/profile/profile-data";

export const Route = createFileRoute("/perfil/resenas")({ component: Resenas });

const reviews = [
  { name: "Andres Higuita", rating: 3, date: "Jul 2026", text: "Mero lindo, todo salió bien con la entrega." },
  { name: "Pedro Cardenas Restrepo", rating: 5, date: "Jul 2026", text: "Chimba de coche, súper recomendado." },
  { name: "Andriu Higuita", rating: 2, date: "Jun 2026", text: "Bien, aunque la entrega se demoró un poco." },
];

const dist = [
  { star: 5, count: 1 },
  { star: 4, count: 0 },
  { star: 3, count: 1 },
  { star: 2, count: 1 },
  { star: 1, count: 0 },
];

function Resenas() {
  const total = profile.reviews_count || 1;
  return (
    <SectionShell title="Reseñas">
      <Panel title="Reseñas" description="Lo que dicen los usuarios sobre ti.">
        <div className="grid gap-6 rounded-lg bg-secondary/50 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
          <div className="text-center sm:text-left">
            <div className="text-5xl font-semibold tracking-tight">{profile.rating_average}</div>
            <div className="mt-2 flex justify-center sm:justify-start">
              <Stars n={profile.rating_average} className="h-4 w-4" />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{profile.reviews_count} reseñas</div>
          </div>
          <div className="min-w-0 space-y-2 self-center">
            {dist.map((d) => (
              <div key={d.star} className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="w-3 shrink-0 text-right font-medium text-foreground">{d.star}</span>
                <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-background">
                  <span
                    className="block h-full rounded-full bg-[color:var(--brand-coral)]"
                    style={{ width: `${(d.count / total) * 100}%` }}
                  />
                </span>
                <span className="w-4 shrink-0">{d.count}</span>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-5 divide-y divide-border">
          {reviews.map((r) => (
            <li key={r.name + r.date} className="py-5 first:pt-2 last:pb-0">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold">
                  {initials(r.name)}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="truncate text-sm font-semibold">{r.name}</span>
                    <Stars n={r.rating} />
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/80">{r.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </SectionShell>
  );
}
