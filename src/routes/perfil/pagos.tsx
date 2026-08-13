import { createFileRoute } from "@tanstack/react-router";
import { Check, Plus, Trash2 } from "lucide-react";
import { Panel, SectionShell } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/pagos")({ component: Pagos });

function CardRow({ last4, primary }: { last4: string; primary?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg border p-4 ${
        primary ? "border-[color:var(--brand-coral)]/40 bg-[color:var(--brand-coral)]/[0.07]" : "border-border"
      }`}
    >
      <span className="grid h-10 w-14 shrink-0 place-items-center rounded-md bg-foreground text-[10px] font-bold italic text-background">
        VISA
      </span>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">•••• {last4}</div>
        <div className="text-xs text-muted-foreground">Vence 10/29</div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {primary ? (
          <span className="hidden items-center gap-1 rounded-md bg-background px-3 py-1 text-[11px] font-semibold sm:inline-flex">
            <Check className="h-3 w-3 text-[color:var(--brand-blue)]" /> Principal
          </span>
        ) : (
          <button className="hidden min-h-11 rounded-md border border-border px-3 py-1 text-[11px] font-medium transition hover:bg-secondary sm:inline-flex sm:items-center">
            Hacer principal
          </button>
        )}
        <button
          aria-label="Eliminar tarjeta"
          className="grid h-11 w-11 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Pagos() {
  return (
    <SectionShell title="Pagos">
      <Panel title="Pagos" description="Gestiona tus tarjetas guardadas.">
        <div className="space-y-3">
          <CardRow last4="4242" primary />
          <CardRow last4="1881" />
        </div>
        <button className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-4 text-sm font-semibold transition hover:border-[color:var(--brand-coral)] hover:bg-secondary/50">
          <Plus className="h-4 w-4" /> Agregar nueva tarjeta
        </button>
      </Panel>
    </SectionShell>
  );
}
