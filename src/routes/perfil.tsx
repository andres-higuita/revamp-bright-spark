import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppNav, AppFooter } from "@/components/site-chrome";
import { ProfileSidebar, SummaryCard } from "@/components/profile/profile-ui";

export const Route = createFileRoute("/perfil")({
  component: PerfilLayout,
  head: () => ({
    meta: [
      { title: "Mi perfil — Cuenta y configuración | Rodii" },
      {
        name: "description",
        content:
          "Gestiona tu información personal, seguridad, pagos, notificaciones y verificación de identidad en Rodii.",
      },
      { property: "og:title", content: "Mi perfil — Cuenta y configuración | Rodii" },
      {
        property: "og:description",
        content: "Tu cuenta Rodii: datos personales, seguridad, pagos, notificaciones y reseñas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PerfilLayout() {
  return (
    <div className="min-h-screen bg-secondary/40 text-foreground">
      <AppNav />
      <main className="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden lg:block">
            <h1 className="mb-4 text-2xl font-semibold tracking-tight">Perfil</h1>
            <div className="lg:sticky lg:top-24">
              <ProfileSidebar />
            </div>
          </div>
          <div className="min-w-0 space-y-6">
            <SummaryCard className="hidden lg:block" />
            <Outlet />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
