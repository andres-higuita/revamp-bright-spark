import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Panel, SectionShell, SoonChip } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/idioma")({ component: Idioma });

const langs = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

function Idioma() {
  const [lang, setLang] = useState("es");
  return (
    <SectionShell title="Idiomas y moneda">
      <Panel title="Idiomas y moneda" description="Define el idioma con el que ves Rodii.">
        <ul className="space-y-3">
          {langs.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-lg border px-4 py-4 text-sm font-medium transition ${
                  lang === l.code
                    ? "border-[color:var(--brand-blue)] bg-[color:var(--brand-blue)]/[0.07]"
                    : "border-border hover:bg-secondary"
                }`}
              >
                <span className="min-w-0 truncate">{l.label}</span>
                {lang === l.code && <Check className="h-4 w-4 shrink-0 text-[color:var(--brand-blue)]" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex min-h-14 items-center justify-between gap-3 rounded-lg border border-dashed border-border px-4 py-4">
          <div className="min-w-0">
            <div className="text-sm font-medium text-muted-foreground">Moneda · COP (peso colombiano)</div>
            <div className="text-xs text-muted-foreground">Por ahora todos los precios se muestran en COP.</div>
          </div>
          <SoonChip />
        </div>
      </Panel>
    </SectionShell>
  );
}
