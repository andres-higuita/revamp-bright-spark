import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Calendar, Clock, Search, Bell, Menu, ShieldCheck, Tag, BadgeCheck, Zap } from "lucide-react";
import heroDriver from "@/assets/hero-driver.jpg";
import carMazda from "@/assets/car-mazda.jpg";
import carToyota from "@/assets/car-toyota.jpg";
import carKia from "@/assets/car-kia.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Recommended />
        <WhyRodii />
        <Partners />
        <EarningsCalculator />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold italic tracking-tight text-2xl ${className}`}>
      rodii<span className="text-[color:var(--brand-coral)]">.</span>
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Logo className="text-xl sm:text-2xl" />
        <nav className="hidden items-center gap-2 md:flex">
          <a className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-secondary hover:text-foreground" href="#catalogo">
            Ver catálogo
          </a>
          <a className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90" href="#publicar">
            + Publicar mi carro
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden text-xs font-medium text-muted-foreground md:block">
            <span className="text-foreground">ES</span> / EN
          </div>
          <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-foreground/70 transition hover:bg-secondary" aria-label="Notificaciones">
            <Bell className="h-4 w-4" />
          </button>
          <button className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium md:inline-flex">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary">👤</span>
            Usuario
          </button>
          <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-background" aria-label="Menú">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-3xl bg-foreground sm:rounded-[32px]">
        <img
          src={heroDriver}
          alt="Persona conduciendo un carro alquilado en Rodii"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-90 sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/40 sm:bg-gradient-to-r sm:from-foreground/85 sm:via-foreground/45 sm:to-transparent" />
        <div className="relative flex flex-col justify-between gap-10 p-6 pt-10 sm:gap-16 sm:p-14 sm:pt-14 md:min-h-[560px]">
          <div className="max-w-2xl text-background">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium backdrop-blur sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-coral)]" />
              <span className="truncate">Nuevo · Cobertura SURA en cada reserva</span>
            </span>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-tight sm:mt-6 sm:text-5xl md:text-6xl">
              Alquiler de carros sin depósitos absurdos ni letra pequeña.
            </h1>
            <p className="mt-4 max-w-lg text-sm text-white/75 sm:mt-5 sm:text-lg">
              Muévete con libertad. Reserva tu carro en minutos, con precios claros y soporte 24/7.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#publicar" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-coral)] px-5 py-3 text-sm font-semibold text-foreground transition hover:brightness-105">
                Quiero ser un propietario
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a href="#catalogo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-background transition hover:bg-white/10">
                Ver catálogo
              </a>
            </div>
            <p className="mt-8 text-xs text-white/60 sm:mt-10 sm:text-sm">
              Encuentra el carro perfecto para tu viaje en menos de 1 minuto.
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative -mb-8 mx-3 sm:-mb-10 sm:mx-8">
          <div className="translate-y-6 rounded-2xl border border-border bg-background p-2 shadow-[0_20px_60px_-20px_rgba(4,8,24,0.35)]">
            <div className="grid grid-cols-2 gap-1 md:grid-cols-[1.4fr_1fr_.8fr_1fr_.8fr_auto]">
              <Field icon={<MapPin className="h-4 w-4" />} label="Dónde" placeholder="Ciudad, aeropuerto o dirección" />
              <Field icon={<Calendar className="h-4 w-4" />} label="Desde" placeholder="DD/MM/AAAA" />
              <Field icon={<Clock className="h-4 w-4" />} label="Hora desde" placeholder="--:--" />
              <Field icon={<Calendar className="h-4 w-4" />} label="Hasta" placeholder="DD/MM/AAAA" />
              <Field icon={<Clock className="h-4 w-4" />} label="Hora hasta" placeholder="--:--" />
              <button className="col-span-2 grid h-12 w-full place-items-center rounded-xl bg-[color:var(--brand-coral)] text-foreground transition hover:brightness-105 md:col-span-1 md:h-auto md:w-14 md:justify-self-end" aria-label="Buscar">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 sm:h-16" />
    </section>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="group flex min-w-0 flex-col gap-1 rounded-xl px-3 py-2.5 transition hover:bg-secondary sm:px-4 sm:py-3">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]">{label}</span>
      <span className="flex min-w-0 items-center gap-2 text-xs text-foreground/60 sm:text-sm">
        <span className="shrink-0 text-muted-foreground">{icon}</span>
        <span className="truncate">{placeholder}</span>
      </span>
    </label>
  );
}

function Recommended() {
  const cars = [
    { img: carMazda, name: "Mazda 2", year: 2024, price: "180.000", tag: "Compacto" },
    { img: carToyota, name: "Toyota Corolla Cross", year: 2025, price: "300.000", tag: "SUV · Destacado", featured: true },
    { img: carKia, name: "Kia K3", year: 2025, price: "250.000", tag: "Eléctrico" },
  ];
  return (
    <section id="catalogo" className="mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">Catálogo</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
            Autos recomendados para tu viaje
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Explora los modelos más solicitados por nuestros clientes: calidad, confort y tarifas competitivas.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[color:var(--brand-blue)]">
          Ver todo el catálogo <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((c) => (
          <article
            key={c.name}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(4,8,24,0.25)] ${c.featured ? "lg:-mt-6 lg:mb-6 ring-2 ring-[color:var(--brand-coral)]/60" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img src={c.img} alt={c.name} width={1000} height={750} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                {c.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
              <div>
                <div className="text-xs text-muted-foreground">{c.year}</div>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{c.name}</h3>
              </div>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-border pt-4">
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Desde</div>
                  <div className="text-lg font-semibold sm:text-xl">
                    ${c.price} <span className="text-xs font-normal text-muted-foreground">COP / día</span>
                  </div>
                </div>
                <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-[color:var(--brand-blue)]">
                  Reservar <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyRodii() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Tu carro, cubierto por SURA en cada uso", body: "Si algo pasa, hay respaldo real. Póliza activa en cada reserva — sin que tengas que hacer nada." },
    { icon: <Tag className="h-5 w-5" />, title: "Lo que ves es lo que pagas", body: "Sin depósitos, sin cobros al devolver, sin sorpresas. El precio final lo sabes desde el primer clic." },
    { icon: <BadgeCheck className="h-5 w-5" />, title: "Solo usuarios verificados", body: "Identidad, licencia y documentos validados antes de cada uso. Tú decides quién mueve tu carro." },
    { icon: <Zap className="h-5 w-5" />, title: "Reserva en minutos, donde estés", body: "100% digital, sin filas ni trámites. Disponible en varias ciudades y aeropuertos de Colombia." },
  ];
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
        ¿Por qué elegir <span className="italic">Rodii</span>?
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div key={it.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[color:var(--brand-blue)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground">
                {it.icon}
              </span>
            </div>
            <h3 className="text-base font-semibold leading-snug">{it.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 text-center sm:mt-32 sm:px-6">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Aliados estratégicos
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-4xl">
        Empresas que confían en Rodii
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-70 sm:gap-10">
        {["Bancolombia", "SURA", "Confecámaras"].map((p) => (
          <span key={p} className="text-base font-medium tracking-tight text-foreground/70 sm:text-lg">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

function EarningsCalculator() {
  return (
    <section id="publicar" className="mt-24 bg-foreground text-background sm:mt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70">
            Para propietarios
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            ¿Cuánto podrías ganar con Rodii?
          </h2>
          <p className="mt-5 max-w-md text-sm text-white/70 sm:text-base">
            Selecciona tu vehículo y descubre en segundos cuánto podrías ganar al mes. Sin compromiso.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 sm:gap-6">
            {[
              { k: "+ $2.4M", v: "Ganancia mensual promedio" },
              { k: "SURA", v: "Cobertura total incluida" },
              { k: "24/7", v: "Soporte real y humano" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-base font-semibold text-[color:var(--brand-coral)] sm:text-lg">{s.k}</div>
                <div className="mt-1 text-[11px] leading-snug text-white/60 sm:text-xs">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select label="Marca" value="Selecciona la marca" />
            <Select label="Modelo" value="Selecciona el modelo" />
            <Select label="Año" value="Selecciona el año" />
            <div>
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-white/50">Transmisión</span>
              <div className="grid grid-cols-2 rounded-xl bg-white/5 p-1 text-sm">
                <button className="rounded-lg bg-[color:var(--brand-coral)] px-3 py-2 font-medium text-foreground">Mecánica</button>
                <button className="rounded-lg px-3 py-2 font-medium text-white/70">Automática</button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-white/50">Kilometraje</span>
              <span className="font-semibold">50.000 km</span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full w-1/5 rounded-full bg-[color:var(--brand-coral)]" />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-white/40">
              <span>0 km</span>
              <span>250.000+ km</span>
            </div>
          </div>

          <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition hover:bg-[color:var(--brand-coral)]">
            Publicar mi vehículo <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Select({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-white/50">{label}</span>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/70">
        {value}
        <span className="text-white/40">▾</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
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
