import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Camera,
  Check,
  ShieldCheck,
  IdCard,
  CreditCard,
  Plus,
  Trash2,
  Star,
  Mail,
  Phone,
  CalendarDays,
  Lock,
  Smartphone,
  LogOut,
  ChevronDown,
  BadgeCheck,
  Car,
} from "lucide-react";
import { AppNav, AppFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
  head: () => ({
    meta: [
      { title: "Mi perfil — Cuenta y verificación | Rodii" },
      {
        name: "description",
        content:
          "Gestiona tu información personal, seguridad, verificación de identidad, métodos de pago y reseñas en Rodii.",
      },
      { property: "og:title", content: "Mi perfil — Cuenta y verificación | Rodii" },
      {
        property: "og:description",
        content: "Tu cuenta Rodii: datos personales, seguridad, verificación, pagos y reseñas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const tabs = [
  "Información Personal",
  "Cuenta y Seguridad",
  "Verificación",
  "Pagos y facturación",
  "Reseñas",
] as const;
type Tab = (typeof tabs)[number];

function Perfil() {
  const [tab, setTab] = useState<Tab>(tabs[0]);

  return (
    <div className="min-h-screen bg-secondary/40 text-foreground">
      <AppNav />
      <main className="mx-auto max-w-7xl px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ProfileCard />
          <div className="min-w-0">
            <nav className="flex gap-1 overflow-x-auto border-b border-border [scrollbar-width:none]">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition ${
                    tab === t
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </nav>

            <div className="mt-6">
              {tab === "Información Personal" && <PersonalTab />}
              {tab === "Cuenta y Seguridad" && <SecurityTab />}
              {tab === "Verificación" && <VerificationTab />}
              {tab === "Pagos y facturación" && <PaymentsTab />}
              {tab === "Reseñas" && <ReviewsTab />}
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

function Panel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)]">
      <div className="border-b border-border px-5 py-5 sm:px-7">
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="px-5 py-6 sm:px-7">{children}</div>
    </section>
  );
}

function ProfileCard() {
  return (
    <aside className="h-fit overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)] lg:sticky lg:top-24">
      <div className="relative h-24 bg-[color:var(--brand-blue)]/10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklab,var(--brand-coral)_35%,transparent),transparent_60%)]" />
      </div>
      <div className="-mt-12 px-5 pb-6 sm:px-6">
        <div className="relative inline-block">
          <div className="grid h-24 w-24 place-items-center rounded-full border-4 border-card bg-secondary text-2xl font-semibold">
            AH
          </div>
          <button
            aria-label="Cambiar foto"
            className="absolute bottom-1 right-1 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--brand-coral)] text-foreground shadow-sm transition hover:brightness-105"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <h1 className="truncate text-xl font-semibold tracking-tight">Andres Higuita</h1>
          <span className="inline-flex items-center gap-1 rounded-md bg-[color:var(--brand-blue)]/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[color:var(--brand-blue)]">
            <BadgeCheck className="h-3 w-3" /> Verificado
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Usuario · Propietario</p>

        <ul className="mt-5 space-y-2.5 text-sm">
          <InfoLine icon={<Mail className="h-4 w-4" />} value="andres.higuita@gmail.com" />
          <InfoLine icon={<Phone className="h-4 w-4" />} value="+57 316 662 6154" />
          <InfoLine icon={<CalendarDays className="h-4 w-4" />} value="Miembro desde abril de 2026" />
        </ul>

        <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg bg-secondary/70 p-3 text-center">
          <MiniStat value="4" label="Vehículos" />
          <MiniStat value="3" label="Activos" />
          <MiniStat value="3.3" label="Rating" />
        </div>
      </div>
    </aside>
  );
}

function InfoLine({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <li className="flex min-w-0 items-center gap-2.5 text-foreground/80">
      <span className="shrink-0 text-muted-foreground">{icon}</span>
      <span className="truncate">{value}</span>
    </li>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="text-lg font-semibold tracking-tight">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Field({
  label,
  value,
  hint,
  disabled,
  suffix,
}: {
  label: string;
  value: string;
  hint?: string;
  disabled?: boolean;
  suffix?: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div
        className={`mt-2 flex items-center gap-2 rounded-lg border px-4 py-3 transition ${
          disabled
            ? "border-transparent bg-secondary/70 text-muted-foreground"
            : "border-border bg-background focus-within:border-[color:var(--brand-blue)] focus-within:ring-4 focus-within:ring-[color:var(--brand-blue)]/10"
        }`}
      >
        <input
          defaultValue={value}
          disabled={disabled}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none disabled:cursor-not-allowed"
        />
        {suffix}
      </div>
      {hint && <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function PersonalTab() {
  return (
    <Panel title="Información personal" description="Estos datos se usan para verificar tu identidad y contactarte.">
      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-secondary/50 p-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-background text-sm font-semibold">
          AH
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">Foto de perfil</div>
          <div className="text-xs text-muted-foreground">JPG o PNG · Máx. 10 MB</div>
        </div>
        <button className="shrink-0 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)]">
          Cambiar
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" value="Andres" disabled />
        <Field label="Apellido" value="Higuita" disabled />
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
          value="+57 316 662 6154"
          suffix={
            <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[color:var(--brand-blue)]/10 px-2 py-0.5 text-[10px] font-bold uppercase text-[color:var(--brand-blue)]">
              <Check className="h-3 w-3" /> Verificado
            </span>
          }
        />
      </div>

      <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-5">
        <button className="rounded-lg bg-[color:var(--brand-coral)] px-6 py-3 text-sm font-semibold text-foreground transition hover:brightness-105 active:scale-95">
          Guardar cambios
        </button>
        <button className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground/70 transition hover:bg-secondary">
          Cancelar
        </button>
      </div>
    </Panel>
  );
}

function Row({
  icon,
  title,
  desc,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  action: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-lg border border-border p-4 sm:flex sm:justify-between">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-foreground">{icon}</div>
      <div className="min-w-0 sm:flex-1">
        <div className="truncate text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <div className="col-span-2 sm:col-span-1">{action}</div>
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="space-y-5">
      <Panel title="Cuenta y seguridad" description="Protege tu cuenta y controla el acceso a Rodii.">
        <div className="space-y-3">
          <Row
            icon={<Mail className="h-4 w-4" />}
            title="Correo electrónico"
            desc="andres.higuita@gmail.com"
            action={
              <button className="w-full rounded-lg border border-border px-4 py-2 text-xs font-medium transition hover:bg-secondary sm:w-auto">
                Cambiar
              </button>
            }
          />
          <Row
            icon={<Lock className="h-4 w-4" />}
            title="Contraseña"
            desc="Actualizada hace 3 meses"
            action={
              <button className="w-full rounded-lg border border-border px-4 py-2 text-xs font-medium transition hover:bg-secondary sm:w-auto">
                Actualizar
              </button>
            }
          />
          <Row
            icon={<ShieldCheck className="h-4 w-4" />}
            title="Verificación en dos pasos"
            desc="Añade una capa extra de seguridad al iniciar sesión"
            action={
              <button className="w-full rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)] sm:w-auto">
                Activar
              </button>
            }
          />
        </div>
      </Panel>

      <Panel title="Sesiones activas" description="Dispositivos donde tu cuenta está abierta.">
        <div className="space-y-3">
          <Row
            icon={<Smartphone className="h-4 w-4" />}
            title="iPhone 15 · Medellín"
            desc="Sesión actual · Hoy a las 15:42"
            action={
              <span className="inline-flex items-center gap-1 rounded-md bg-[color:var(--brand-blue)]/10 px-3 py-1 text-[11px] font-semibold text-[color:var(--brand-blue)]">
                Activa
              </span>
            }
          />
          <Row
            icon={<Smartphone className="h-4 w-4" />}
            title="MacBook Pro · Medellín"
            desc="Último acceso: 10 de agosto"
            action={
              <button className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground/70 transition hover:bg-secondary sm:w-auto">
                <LogOut className="h-3.5 w-3.5" /> Cerrar
              </button>
            }
          />
        </div>
      </Panel>
    </div>
  );
}

function VerificationTab() {
  return (
    <Panel title="Verificación" description="Verifica tu identidad para acceder a todas las funciones de Rodii.">
      <div className="flex items-start gap-4 rounded-lg border border-[color:var(--brand-blue)]/20 bg-[color:var(--brand-blue)]/[0.06] p-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-blue)] text-background">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold">Cuenta completamente verificada</div>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Tu identidad y licencia fueron verificadas exitosamente.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <VerifyCard
          icon={<IdCard className="h-5 w-5" />}
          title="Identidad"
          desc="Documento de identificación"
        />
        <VerifyCard
          icon={<Car className="h-5 w-5" />}
          title="Licencia de conducir"
          desc="Requerida para tomar o poner en uso vehículos"
        />
      </div>
    </Panel>
  );
}

function VerifyCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <article className="rounded-lg border border-border p-5 transition hover:shadow-[0_24px_50px_-32px_rgba(4,8,24,0.3)]">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary text-foreground">
          {icon}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[color:var(--brand-blue)]/10 px-2.5 py-1 text-[11px] font-semibold text-[color:var(--brand-blue)]">
          <Check className="h-3 w-3" /> Verificado
        </span>
      </div>
      <h3 className="mt-4 text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </article>
  );
}

function PaymentsTab() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-5">
      <Panel title="Métodos de pago" description="Gestiona tus tarjetas guardadas.">
        <div className="space-y-3">
          <CardRow last4="4242" primary />
          <CardRow last4="1881" />
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-4 text-sm font-semibold transition hover:border-[color:var(--brand-coral)] hover:bg-secondary/50">
          <Plus className="h-4 w-4" /> Agregar nueva tarjeta
        </button>
      </Panel>

      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-3 px-5 py-5 text-left sm:px-7"
        >
          <span className="min-w-0">
            <span className="block text-lg font-semibold tracking-tight">Datos de facturación</span>
            <span className="block text-sm text-muted-foreground">NIT o cédula, dirección y ciudad</span>
          </span>
          <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="grid gap-5 border-t border-border px-5 py-6 sm:grid-cols-2 sm:px-7">
            <Field label="Documento" value="1020 456 789" />
            <Field label="Razón social" value="Andres Higuita" />
            <Field label="Dirección" value="Cra 43A #1-50" />
            <Field label="Ciudad" value="Medellín" />
          </div>
        )}
      </section>
    </div>
  );
}

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
          <button className="hidden rounded-md border border-border px-3 py-1 text-[11px] font-medium transition hover:bg-secondary sm:inline-flex">
            Hacer principal
          </button>
        )}
        <button
          aria-label="Eliminar tarjeta"
          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const reviews = [
  { name: "Andres Higuita", rating: 3, date: "Jul 2026", text: "Mero lindo, todo salió bien con la entrega." },
  { name: "Pedro Cardenas Restrepo", rating: 5, date: "Jul 2026", text: "Chimba de coche, súper recomendado." },
  { name: "Andriu Higuita", rating: 2, date: "Jun 2026", text: "Bien, aunque la entrega se demoró un poco." },
];

const dist = [
  { star: 5, count: 1 },
  { star: 4, count: 0 },
  { star: 3, count: 1 },
  { star: 2, count: 1 },
  { star: 1, count: 0 },
];

function Stars({ n, className = "h-3.5 w-3.5" }: { n: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${
            i <= n
              ? "fill-[color:var(--brand-coral)] text-[color:var(--brand-coral)]"
              : "text-border"
          }`}
        />
      ))}
    </span>
  );
}

function ReviewsTab() {
  const total = 3;
  return (
    <Panel title="Reseñas" description="Lo que dicen los usuarios sobre ti.">
      <div className="grid gap-6 rounded-lg bg-secondary/50 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
        <div className="text-center sm:text-left">
          <div className="text-5xl font-semibold tracking-tight">3.3</div>
          <div className="mt-2 flex justify-center sm:justify-start">
            <Stars n={3} className="h-4 w-4" />
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{total} reseñas</div>
        </div>
        <div className="min-w-0 space-y-2 self-center">
          {dist.map((d) => (
            <div key={d.star} className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="w-3 shrink-0 text-right font-medium text-foreground">{d.star}</span>
              <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-background">
                <span
                  className="block h-full rounded-full bg-[color:var(--brand-coral)]"
                  style={{ width: `${(d.count / total) * 100}%` }}
                />
              </span>
              <span className="w-4 shrink-0">{d.count}</span>
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-5 divide-y divide-border">
        {reviews.map((r) => (
          <li key={r.name + r.date} className="py-5 first:pt-2 last:pb-0">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-semibold">
                {r.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="truncate text-sm font-semibold">{r.name}</span>
                  <Stars n={r.rating} />
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/80">{r.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
