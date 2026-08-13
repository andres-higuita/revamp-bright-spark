import { createFileRoute } from "@tanstack/react-router";
import { Panel, SectionShell } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/billetera")({ component: Billetera });

const history = [
  { label: "Retiro a Bancolombia", date: "2 de agosto de 2026", amount: "- $1.200.000" },
  { label: "Viaje · Mazda 3", date: "28 de julio de 2026", amount: "+ $420.000" },
  { label: "Viaje · Kia K3", date: "19 de julio de 2026", amount: "+ $380.000" },
];

function Billetera() {
  return (
    <SectionShell title="Billetera">
      <Panel title="Billetera" description="Tu saldo y tus ganancias como anfitrión.">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-secondary/60 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Saldo disponible</div>
            <div className="mt-1 text-3xl font-semibold tracking-tight">$800.000</div>
          </div>
          <div className="rounded-lg bg-secondary/60 p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ganancias totales</div>
            <div className="mt-1 text-3xl font-semibold tracking-tight">$4.320.000</div>
          </div>
        </div>

        <button className="mt-5 min-h-11 w-full rounded-lg bg-[color:var(--brand-coral)] px-6 py-3 text-sm font-semibold text-foreground transition hover:brightness-105 sm:w-auto">
          Solicitar retiro
        </button>

        <h3 className="mt-7 text-sm font-semibold">Historial</h3>
        <ul className="mt-2 divide-y divide-border">
          {history.map((h) => (
            <li key={h.label + h.date} className="flex min-h-14 items-center justify-between gap-4 py-4">
              <div className="min-w-0">
                <div className="truncate text-sm font-medium">{h.label}</div>
                <div className="text-xs text-muted-foreground">{h.date}</div>
              </div>
              <span className="shrink-0 text-sm font-semibold">{h.amount}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </SectionShell>
  );
}
