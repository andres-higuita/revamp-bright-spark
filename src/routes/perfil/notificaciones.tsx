import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Panel, SectionShell } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/notificaciones")({ component: Notificaciones });

const groups = [
  { title: "Reservas", desc: "Solicitudes, confirmaciones y recordatorios de viaje" },
  { title: "Mensajes", desc: "Cuando alguien te escribe por el chat" },
  { title: "Novedades", desc: "Promociones y noticias de Rodii" },
];
const channels = ["Push", "Email", "WhatsApp"] as const;

function Toggle({ defaultOn, label }: { defaultOn?: boolean; label: string }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => setOn((v) => !v)}
      className="grid min-h-11 place-items-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)]"
    >
      <span
        className={`flex h-6 w-11 items-center rounded-full p-0.5 transition ${
          on ? "bg-[color:var(--brand-blue)]" : "bg-border"
        }`}
      >
        <span className={`h-5 w-5 rounded-full bg-background transition ${on ? "translate-x-5" : ""}`} />
      </span>
    </button>
  );
}

function Notificaciones() {
  return (
    <SectionShell title="Notificaciones">
      <Panel title="Notificaciones" description="Elige cómo quieres que te avisemos.">
        <div className="space-y-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-lg border border-border p-4">
              <div className="text-sm font-semibold">{g.title}</div>
              <div className="text-xs text-muted-foreground">{g.desc}</div>
              <ul className="mt-3 divide-y divide-border">
                {channels.map((c) => (
                  <li key={c} className="flex min-h-11 items-center justify-between gap-4 py-2">
                    <span className="min-w-0 truncate text-sm">{c}</span>
                    <Toggle label={`${c} · ${g.title}`} defaultOn={c !== "WhatsApp"} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Panel>
    </SectionShell>
  );
}
