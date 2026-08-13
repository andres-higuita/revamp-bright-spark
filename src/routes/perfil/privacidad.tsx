import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, Trash2 } from "lucide-react";
import { Panel, SectionShell, SoonChip } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/privacidad")({ component: Privacidad });

function Privacidad() {
  return (
    <SectionShell title="Privacidad">
      <Panel title="Privacidad" description="Consulta nuestras políticas y gestiona tus datos.">
        <ul className="space-y-3">
          {["Política de privacidad", "Política de cookies"].map((l) => (
            <li key={l}>
              <a
                href="#"
                className="flex min-h-14 items-center justify-between gap-3 rounded-lg border border-border px-4 py-4 text-sm font-medium transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)]"
              >
                <span className="min-w-0 truncate">{l}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-3">
          <div className="flex min-h-14 items-center gap-3 rounded-lg border border-dashed border-border px-4 py-4">
            <Download className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 text-sm text-muted-foreground">Descargar mis datos</span>
            <SoonChip />
          </div>
          <div className="flex min-h-14 items-center gap-3 rounded-lg border border-dashed border-border px-4 py-4">
            <Trash2 className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 text-sm text-muted-foreground">Eliminar mi cuenta</span>
            <SoonChip />
          </div>
        </div>
      </Panel>
    </SectionShell>
  );
}
