import { Link } from "@tanstack/react-router";
import { Bell, MessageCircle, Menu, Home, ChevronsUpDown } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold italic tracking-tight ${className}`}>
      rodii<span className="text-[color:var(--brand-coral)]">.</span>
    </span>
  );
}

export function AppNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-16 sm:px-6">
        <Link to="/" className="min-w-0">
          <Logo className="text-xl sm:text-2xl" />
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div className="hidden text-xs font-medium text-muted-foreground sm:block">
            <span className="text-foreground">ES</span> / EN
          </div>
          <button
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full text-foreground/70 transition hover:bg-secondary sm:grid"
            aria-label="Mensajes"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
          <button
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-foreground/70 transition hover:bg-secondary"
            aria-label="Notificaciones"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-3 py-2 text-xs font-semibold text-background sm:px-4">
            <Home className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Propietario</span>
            <ChevronsUpDown className="h-3 w-3 opacity-60" />
          </button>
          <button
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground/70 transition hover:bg-secondary"
            aria-label="Menú"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a className="text-foreground/80 transition hover:text-foreground" href="#">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_2fr]">
        <Logo className="text-2xl sm:text-3xl" />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterCol title="Explora" links={["Alquiler de carros por ciudad"]} />
          <FooterCol title="Legal" links={["Términos y condiciones", "Política de privacidad", "Política de cookies"]} />
          <FooterCol title="Soporte" links={["Escríbenos por WhatsApp"]} />
          <FooterCol title="Síguenos" links={["Instagram", "Facebook", "TikTok"]} />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6">
          <span>© 2026 RODII S.A.S. · Todos los derechos reservados.</span>
          <span>Medellín, Colombia</span>
        </div>
      </div>
    </footer>
  );
}