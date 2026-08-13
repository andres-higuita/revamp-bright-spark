import { createFileRoute } from "@tanstack/react-router";
import { Field, Panel, SectionShell } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/fiscal")({ component: Fiscal });

function Fiscal() {
  return (
    <SectionShell title="Información fiscal">
      <Panel title="Información fiscal" description="La usamos para emitir tus facturas y certificados.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Documento (NIT o cédula)" value="1020 456 789" />
          <Field label="Razón social" value="Andres Higuita" />
          <Field label="Dirección" value="Cra 43A #1-50" />
          <Field label="Ciudad" value="Medellín" />
        </div>
        <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
          <button className="min-h-11 rounded-lg bg-[color:var(--brand-coral)] px-6 py-3 text-sm font-semibold text-foreground transition hover:brightness-105">
            Guardar cambios
          </button>
          <button className="min-h-11 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground/70 transition hover:bg-secondary">
            Cancelar
          </button>
        </div>
      </Panel>
    </SectionShell>
  );
}
