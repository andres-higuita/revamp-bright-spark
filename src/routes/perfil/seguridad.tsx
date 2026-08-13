import { createFileRoute } from "@tanstack/react-router";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { Panel, Row, SectionShell } from "@/components/profile/profile-ui";
import { profile } from "@/components/profile/profile-data";

export const Route = createFileRoute("/perfil/seguridad")({ component: Seguridad });

const btn =
  "min-h-11 w-full rounded-lg border border-border px-4 py-2 text-xs font-medium transition hover:bg-secondary sm:w-auto";

function Seguridad() {
  return (
    <SectionShell title="Inicio de sesión y seguridad">
      <Panel title="Inicio de sesión y seguridad" description="Protege tu cuenta y controla el acceso a Rodii.">
        <div className="space-y-3">
          <Row
            icon={<Mail className="h-4 w-4" />}
            title="Correo electrónico"
            desc={profile.email}
            action={<button className={btn}>Cambiar</button>}
          />
          <Row
            icon={<Lock className="h-4 w-4" />}
            title="Contraseña"
            desc="Cambia tu contraseña cuando quieras"
            action={<button className={btn}>Actualizar</button>}
          />
          <Row
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Verificación en dos pasos"
            desc="Añade una capa extra de seguridad al iniciar sesión"
            action={
              <button className="min-h-11 w-full rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)] sm:w-auto">
                Activar
              </button>
            }
          />
        </div>
      </Panel>
    </SectionShell>
  );
}
