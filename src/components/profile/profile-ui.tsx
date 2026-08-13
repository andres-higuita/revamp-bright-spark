import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Bell,
  Building2,
  Car,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Globe,
  Landmark,
  Lock,
  LogOut,
  MessageCircle,
  ShieldCheck,
  Star,
  User,
  Wallet,
  ShieldAlert,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { profile, initials, memberSince, WHATSAPP_SUPPORT_URL } from "./profile-data";

/* ---------------------------------- Panel --------------------------------- */

export function Panel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
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

export function Field({
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
  suffix?: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div
        className={`mt-2 flex min-h-11 items-center gap-2 rounded-lg border px-4 py-3 transition ${
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

export function Row({
  icon,
  title,
  desc,
  action,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-lg border border-border p-4 sm:flex sm:justify-between">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-foreground">{icon}</div>
      <div className="min-w-0 sm:flex-1">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      {action && <div className="col-span-2 sm:col-span-1">{action}</div>}
    </div>
  );
}

export function VerifiedChip({ label = "Verificado" }: { label?: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[color:var(--brand-blue)]/10 px-2 py-0.5 text-[10px] font-bold uppercase text-[color:var(--brand-blue)]">
      <BadgeCheck className="h-3 w-3" /> {label}
    </span>
  );
}

export function SoonChip() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      Próximamente
    </span>
  );
}

export function Stars({ n, className = "h-3.5 w-3.5" }: { n: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${
            i <= Math.round(n)
              ? "fill-[color:var(--brand-coral)] text-[color:var(--brand-coral)]"
              : "text-border"
          }`}
        />
      ))}
    </span>
  );
}

/* ------------------------------ Section shell ----------------------------- */

export function SectionShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 lg:hidden">
        <Link
          to="/perfil"
          aria-label="Volver al perfil"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)]"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="min-w-0 truncate text-lg font-semibold tracking-tight">{title}</h1>
      </div>
      {children}
    </div>
  );
}

/* ------------------------------ Summary card ------------------------------ */

function verificationChip() {
  const status = profile.identity_kyc_status;
  if (status === "verified")
    return {
      label: "Identidad verificada",
      className:
        "border-[color:var(--brand-blue)]/25 bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)]",
      icon: <BadgeCheck className="h-4 w-4" />,
    };
  if (status === "in_review")
    return {
      label: "Verificación en proceso",
      className: "border-border bg-secondary text-muted-foreground",
      icon: <Clock className="h-4 w-4" />,
    };
  return {
    label: "Verifica tu identidad",
    className:
      "border-[color:var(--brand-coral)]/40 bg-[color:var(--brand-coral)]/15 text-foreground",
    icon: <ShieldAlert className="h-4 w-4" />,
  };
}

export function SummaryCard({ className = "" }: { className?: string }) {
  const chip = verificationChip();
  const isNew = profile.completed_trips_count === 0 && profile.reviews_count === 0;

  return (
    <section
      className={`overflow-hidden rounded-xl border border-border bg-card p-5 shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)] sm:p-7 ${className}`}
    >
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:gap-6">
        {profile.image_url ? (
          <img
            src={profile.image_url}
            alt={`Foto de ${profile.full_name}`}
            className="h-24 w-24 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[color:var(--brand-ink)] text-2xl font-semibold text-background">
            {initials(profile.full_name)}
          </div>
        )}
        <div className="min-w-0">
          <h2 className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">
            ¡Hola {profile.first_name}!
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {isNew ? (
              "Nuevo en Rodii"
            ) : (
              <>
                {profile.completed_trips_count} viajes · {profile.reviews_count} reseñas
              </>
            )}
          </p>
          <p className="text-sm text-muted-foreground">{memberSince(profile.createdAt)}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)] ${chip.className}`}
        >
          {chip.icon}
          {chip.label}
        </button>
        <Link
          to="/perfil/informacion-personal"
          className="inline-flex min-h-11 items-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)]"
        >
          Mejorar tu perfil
        </Link>
      </div>
    </section>
  );
}

/* --------------------------------- Nav data -------------------------------- */

type NavItem = { to: string; label: string; icon: ReactNode };

export const mainItems: NavItem[] = [
  { to: "/perfil/sobre-mi", label: "Sobre mí", icon: <User className="h-4 w-4" /> },
  { to: "/perfil/resenas", label: "Reseñas", icon: <Star className="h-4 w-4" /> },
];

export function settingsItems(): NavItem[] {
  const items: NavItem[] = [
    { to: "/perfil/informacion-personal", label: "Información personal", icon: <User className="h-4 w-4" /> },
    { to: "/perfil/seguridad", label: "Inicio de sesión y seguridad", icon: <Lock className="h-4 w-4" /> },
    { to: "/perfil/pagos", label: "Pagos", icon: <CreditCard className="h-4 w-4" /> },
    { to: "/perfil/notificaciones", label: "Notificaciones", icon: <Bell className="h-4 w-4" /> },
    { to: "/perfil/idioma", label: "Idiomas y moneda", icon: <Globe className="h-4 w-4" /> },
    { to: "/perfil/privacidad", label: "Privacidad", icon: <ShieldCheck className="h-4 w-4" /> },
    { to: "/perfil/fiscal", label: "Información fiscal", icon: <Building2 className="h-4 w-4" /> },
  ];
  if (profile.isHost) {
    items.push({ to: "/perfil/cuenta-bancaria", label: "Cuenta bancaria", icon: <Landmark className="h-4 w-4" /> });
    items.push({ to: "/perfil/billetera", label: "Billetera", icon: <Wallet className="h-4 w-4" /> });
  }
  return items;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function HostCard() {
  if (!(profile.canBeHost && !profile.isHost)) return null;
  return (
    <article className="rounded-lg border border-[color:var(--brand-coral)]/35 bg-[color:var(--brand-coral)]/12 p-4">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-[color:var(--brand-coral)] text-foreground">
        <Car className="h-5 w-5" />
      </span>
      <h3 className="mt-3 text-sm font-semibold">Conviértete en anfitrión</h3>
      <p className="mt-1 text-xs text-muted-foreground">Publica tu carro y genera ingresos cada mes.</p>
      <Link
        to="/mis-vehiculos"
        className={`mt-3 inline-flex min-h-11 items-center rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background ${focusRing}`}
      >
        Empezar
      </Link>
    </article>
  );
}

export function SupportLink({ variant }: { variant: "sidebar" | "list" }) {
  const base =
    variant === "sidebar"
      ? "flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
      : "flex min-h-14 items-center gap-3 border-b border-border px-4 py-4 text-sm font-medium";
  return (
    <a href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noreferrer" className={`${base} ${focusRing}`}>
      <MessageCircle className="h-4 w-4 shrink-0" />
      <span className="min-w-0 flex-1 truncate">Soporte / ayuda</span>
      {variant === "list" && <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
    </a>
  );
}

export function LogoutButton({ variant }: { variant: "sidebar" | "list" }) {
  const base =
    variant === "sidebar"
      ? "flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-destructive transition hover:bg-destructive/10"
      : "flex min-h-14 w-full items-center gap-3 px-4 py-4 text-sm font-semibold text-destructive";
  return (
    <button type="button" className={`${base} ${focusRing}`}>
      <LogOut className="h-4 w-4 shrink-0" /> Cerrar sesión
    </button>
  );
}

/* --------------------------------- Sidebar -------------------------------- */

export function ProfileSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <nav aria-label="Secciones del perfil" className="rounded-xl border border-border bg-card p-2 shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)]">
      <ul className="space-y-1">
        {mainItems.map((it) => (
          <li key={it.to}>
            <SidebarLink item={it} />
          </li>
        ))}
      </ul>

      <div className="px-1 py-2">
        <HostCard />
      </div>

      <SupportLink variant="sidebar" />

      <div className="mt-2 border-t border-border pt-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className={`flex min-h-11 w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition hover:bg-secondary ${focusRing}`}
        >
          Configuración
          <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <ul className="mt-1 space-y-1">
            {settingsItems().map((it) => (
              <li key={it.to}>
                <SidebarLink item={it} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-2 border-t border-border pt-2">
        <LogoutButton variant="sidebar" />
      </div>
    </nav>
  );
}

function SidebarLink({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.to}
      activeProps={{
        className:
          "flex min-h-11 items-center gap-3 rounded-lg bg-secondary px-3 py-2.5 text-sm font-semibold text-foreground",
        "aria-current": "page",
      }}
      inactiveProps={{
        className:
          "flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground",
      }}
      className={focusRing}
    >
      <span className="shrink-0">{item.icon}</span>
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
    </Link>
  );
}

/* ------------------------------- Mobile list ------------------------------ */

function ListRow({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.to}
      className={`flex min-h-14 items-center gap-3 border-b border-border px-4 py-4 text-sm font-medium last:border-b-0 ${focusRing}`}
    >
      <span className="shrink-0 text-muted-foreground">{item.icon}</span>
      <span className="min-w-0 flex-1 truncate">{item.label}</span>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
    </Link>
  );
}

export function MobileMenu() {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)]">
        {mainItems.map((it) => (
          <ListRow key={it.to} item={it} />
        ))}
        <SupportLink variant="list" />
      </div>

      <HostCard />

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07)]">
        <div className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Configuración
        </div>
        {settingsItems().map((it) => (
          <ListRow key={it.to} item={it} />
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <LogoutButton variant="list" />
      </div>
    </div>
  );
}