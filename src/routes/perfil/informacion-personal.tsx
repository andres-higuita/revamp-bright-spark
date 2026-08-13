import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Field, Panel, SectionShell, VerifiedChip } from "@/components/profile/profile-ui";
import { profile, initials } from "@/components/profile/profile-data";

export const Route = createFileRoute("/perfil/informacion-personal")({ component: InformacionPersonal });

function InformacionPersonal() {
  return (
    <SectionShell title="Información personal">
      <Panel title="Información personal" description="Estos datos se usan para verificar tu identidad y contactarte.">
        <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-secondary/50 p-4">
          {profile.image_url ? (
            <img src={profile.image_url} alt="Foto de perfil" className="h-14 w-14 shrink-0 rounded-full object-cover" />
          ) : (
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[color:var(--brand-ink)] text-sm font-semibold text-background">
              {initials(profile.full_name)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Foto de perfil</div>
            <div className="text-xs text-muted-foreground">JPG o PNG · Máx. 10 MB</div>
          </div>
          <button className="min-h-11 shrink-0 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)]">
            Cambiar
          </button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Nombre" value={profile.first_name} disabled />
          <Field label="Apellido" value={profile.last_name} disabled />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Tu nombre y apellido vienen de tu verificación de identidad y no se pueden editar.
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field
            label="Fecha de nacimiento"
            value="14/04/2000"
            suffix={<CalendarDays className="h-4 w-4 shrink-0 text-muted-foreground" />}
          />
          <Field
            label="Teléfono"
            value={profile.phone}
            suffix={profile.phone_verified ? <VerifiedChip /> : null}
          />
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
          <button className="min-h-11 rounded-lg bg-[color:var(--brand-coral)] px-6 py-3 text-sm font-semibold text-foreground transition hover:brightness-105 active:scale-95">
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
