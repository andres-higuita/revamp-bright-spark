import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Plus } from "lucide-react";
import { Panel, SectionShell } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/cuenta-bancaria")({ component: CuentaBancaria });

function CuentaBancaria() {
  return (
    <SectionShell title="Cuenta bancaria">
      <Panel title="Cuenta bancaria" description="Aquí depositamos tus ganancias como anfitrión.">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary">
            <Landmark className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">Bancolombia · Ahorros</div>
            <div className="text-xs text-muted-foreground">•••• 4821</div>
          </div>
          <button className="min-h-11 shrink-0 rounded-lg border border-border px-4 py-2 text-xs font-medium transition hover:bg-secondary">
            Editar
          </button>
        </div>
        <button className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-4 text-sm font-semibold transition hover:border-[color:var(--brand-coral)] hover:bg-secondary/50">
          <Plus className="h-4 w-4" /> Agregar cuenta bancaria
        </button>
      </Panel>
    </SectionShell>
  );
}
