import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Globe, Heart, PenLine } from "lucide-react";
import { Panel, SectionShell, SoonChip } from "@/components/profile/profile-ui";
import { profile } from "@/components/profile/profile-data";

export const Route = createFileRoute("/perfil/sobre-mi")({ component: SobreMi });

const fields = [
  { icon: <Briefcase className="h-4 w-4" />, label: "Agregar profesión" },
  { icon: <Globe className="h-4 w-4" />, label: "Agregar idiomas" },
  { icon: <Heart className="h-4 w-4" />, label: "Agregar hobbies" },
  { icon: <PenLine className="h-4 w-4" />, label: "Agregar bio" },
];

function SobreMi() {
  return (
    <SectionShell title="Sobre mí">
      <Panel title={`Sobre ${profile.first_name}`} description="Comparte un poco más para generar confianza.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {fields.map((f) => (
            <li key={f.label}>
              <button
                type="button"
                disabled
                className="flex min-h-14 w-full cursor-not-allowed items-center gap-3 rounded-lg border border-dashed border-border px-4 py-4 text-left text-sm font-medium text-muted-foreground"
              >
                <span className="shrink-0">{f.icon}</span>
                <span className="min-w-0 flex-1 truncate">{f.label}</span>
                <SoonChip />
              </button>
            </li>
          ))}
        </ul>
      </Panel>
    </SectionShell>
  );
}
