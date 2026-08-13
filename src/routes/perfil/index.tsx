import { createFileRoute } from "@tanstack/react-router";
import { MobileMenu, Panel, SummaryCard } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil/")({ component: PerfilIndex });

function PerfilIndex() {
  return (
    <div>
      <div className="space-y-4 lg:hidden">
        <h1 className="text-2xl font-semibold tracking-tight">Perfil</h1>
        <SummaryCard />
        <MobileMenu />
      </div>
      <div className="hidden lg:block">
        <Panel title="Tu perfil" description="Elige una sección en el menú de la izquierda para continuar.">
          <p className="text-sm text-muted-foreground">
            Desde aquí puedes gestionar tu información personal, seguridad, pagos, notificaciones y más.
          </p>
        </Panel>
      </div>
    </div>
  );
}
