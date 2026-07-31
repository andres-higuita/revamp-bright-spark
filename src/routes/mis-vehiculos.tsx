import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Plus,
  LayoutGrid,
  List,
  Pause,
  Pencil,
  MapPin,
  Gauge,
  Star,
  TrendingUp,
  Calendar,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";
import { AppNav, AppFooter } from "@/components/site-chrome";
import carMazda from "@/assets/car-mazda.jpg";
import carToyota from "@/assets/car-toyota.jpg";
import carKia from "@/assets/car-kia.jpg";

export const Route = createFileRoute("/mis-vehiculos")({
  component: MisVehiculos,
  head: () => ({
    meta: [
      { title: "Mis vehículos — Panel de propietario | Rodii" },
      {
        name: "description",
        content:
          "Administra tus vehículos publicados en Rodii: estado, tarifas, reservas y ganancias desde un solo panel.",
      },
      { property: "og:title", content: "Mis vehículos — Panel de propietario | Rodii" },
      {
        property: "og:description",
        content: "Controla publicaciones, tarifas y reservas de tus carros en Rodii.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Vehicle = {
  img: string;
  name: string;
  year: number;
  type: string;
  transmission: string;
  city: string;
  price: string;
  status: "Publicado" | "Borrador" | "En revisión";
  trips: number;
  rating: number;
  monthly: string;
};

const vehicles: Vehicle[] = [
  {
    img: carMazda,
    name: "Mazda 3",
    year: 2025,
    type: "Sedán",
    transmission: "Automática",
    city: "Medellín",
    price: "200.000",
    status: "Publicado",
    trips: 18,
    rating: 4.9,
    monthly: "1.8M",
  },
  {
    img: carKia,
    name: "Kia K3",
    year: 2025,
    type: "Sedán",
    transmission: "Automática",
    city: "Medellín",
    price: "250.000",
    status: "Publicado",
    trips: 24,
    rating: 5.0,
    monthly: "2.4M",
  },
  {
    img: carToyota,
    name: "Toyota Corolla Cross",
    year: 2025,
    type: "SUV",
    transmission: "Automática",
    city: "Medellín",
    price: "300.000",
    status: "Publicado",
    trips: 31,
    rating: 4.8,
    monthly: "3.1M",
  },
];

const tabs = ["Mis vehículos", "Solicitudes de reserva", "Ganancias"];
const filters = [
  { label: "Todos", count: 3 },
  { label: "Publicados", count: 3 },
  { label: "Borradores", count: 0 },
  { label: "En revisión", count: 0 },
];

function MisVehiculos() {
  const [tab, setTab] = useState(tabs[0]);
  const [filter, setFilter] = useState("Todos");
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-secondary/40 text-foreground">
      <AppNav />
      <main className="mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6 sm:pt-10">
        <Hero tab={tab} setTab={setTab} />

        <section className="mt-6 sm:mt-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
            <div className="-mx-1 flex min-w-0 gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
              {filters.map((f) => {
                const active = filter === f.label;
                return (
                  <button
                    key={f.label}
                    onClick={() => setFilter(f.label)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border-transparent bg-foreground text-background"
                        : "border-border bg-background text-foreground/70 hover:bg-secondary"
                    }`}
                  >
                    {f.label}
                    <span className={`text-xs ${active ? "text-background/60" : "text-muted-foreground"}`}>
                      {f.count}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-background p-1">
              {(
                [
                  { id: "list" as const, icon: <List className="h-4 w-4" /> },
                  { id: "grid" as const, icon: <LayoutGrid className="h-4 w-4" /> },
                ]
              ).map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  aria-label={v.id === "grid" ? "Vista cuadrícula" : "Vista lista"}
                  className={`grid h-8 w-8 place-items-center rounded-full transition ${
                    view === v.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {v.icon}
                </button>
              ))}
            </div>
          </div>

          <div
            className={
              view === "grid"
                ? "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "mt-5 flex flex-col gap-4"
            }
          >
            {vehicles.map((v) =>
              view === "grid" ? <VehicleCard key={v.name} v={v} /> : <VehicleRow key={v.name} v={v} />
            )}
            {view === "grid" && <AddVehicleCard />}
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}

function Hero({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  const stats = [
    { k: "3", v: "Vehículos" },
    { k: "73", v: "Viajes" },
    { k: "$7.3M", v: "Ganancias", badge: "MES" },
    { k: "4.9", v: "Valoración", icon: "star" },
  ];
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_2px_15px_-3px_rgba(4,8,24,0.07),0_10px_20px_-2px_rgba(4,8,24,0.04)]">
      <div className="px-5 py-6 sm:px-8 sm:pb-5 sm:pt-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-blue)]">
              Panel de propietario
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Mis vehículos
            </h1>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Gestiona tu flota y monitorea el rendimiento de tu negocio en Rodii.
            </p>
          </div>
          <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-coral)] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:brightness-105 active:scale-95 sm:px-6 sm:py-3">
            <Plus className="h-4 w-4" />
            Publicar vehículo
          </button>
        </div>
      </div>

      <div className="border-t border-border bg-secondary/40 px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-10">
          {stats.map((s, i) => (
            <div key={s.v} className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </span>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{s.k}</span>
                  {s.badge && (
                    <span className="rounded-md bg-[color:var(--brand-blue)]/10 px-1.5 py-0.5 text-[10px] font-bold text-[color:var(--brand-blue)]">
                      {s.badge}
                    </span>
                  )}
                  {s.icon === "star" && (
                    <Star className="h-4 w-4 fill-[color:var(--brand-coral)] text-[color:var(--brand-coral)]" />
                  )}
                </div>
              </div>
              {i < stats.length - 1 && (
                <span className="hidden h-8 w-px bg-border sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-8">
        <div className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative shrink-0 px-4 py-3.5 text-sm font-medium transition ${
                tab === t ? "text-[color:var(--brand-blue)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[color:var(--brand-blue)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Vehicle["status"] }) {
  const styles: Record<Vehicle["status"], string> = {
    Publicado: "bg-background/90 text-foreground",
    Borrador: "bg-secondary text-muted-foreground",
    "En revisión": "bg-[color:var(--brand-coral)] text-foreground",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-blue)]" />
      {status}
    </span>
  );
}

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(4,8,24,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={v.img}
          alt={`${v.name} ${v.year} publicado en Rodii`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
          <StatusPill status={v.status} />
          <button
            aria-label="Más opciones"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-background/90 text-foreground backdrop-blur transition hover:bg-background"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold tracking-tight">{v.name}</h2>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {v.year} · {v.type} · {v.transmission}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-lg font-semibold">${v.price}</div>
            <div className="text-[11px] text-muted-foreground">COP / día</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-secondary/70 p-3 text-center">
          <Metric icon={<Calendar className="h-3.5 w-3.5" />} value={`${v.trips}`} label="Viajes" />
          <Metric icon={<Star className="h-3.5 w-3.5" />} value={`${v.rating}`} label="Rating" />
          <Metric icon={<TrendingUp className="h-3.5 w-3.5" />} value={`$${v.monthly}`} label="Mes" />
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
          <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)]">
            <Pencil className="h-3.5 w-3.5" /> Editar
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/70 transition hover:bg-secondary">
            <Pause className="h-3.5 w-3.5" /> Pausar
          </button>
        </div>
      </div>
    </article>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center justify-center gap-1 text-sm font-semibold">
        <span className="text-muted-foreground">{icon}</span>
        <span className="truncate">{value}</span>
      </div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function VehicleRow({ v }: { v: Vehicle }) {
  return (
    <article className="group grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-3xl border border-border bg-card p-3 transition hover:shadow-[0_24px_50px_-32px_rgba(4,8,24,0.3)] sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:gap-6 sm:p-4">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
        <img
          src={v.img}
          alt={`${v.name} ${v.year} publicado en Rodii`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <h2 className="truncate text-base font-semibold tracking-tight sm:text-lg">{v.name}</h2>
          <StatusPill status={v.status} />
        </div>
        <p className="mt-1 truncate text-xs text-muted-foreground">
          {v.year} · {v.type} · {v.transmission}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {v.city}
          </span>
          <span className="inline-flex items-center gap-1">
            <Gauge className="h-3 w-3" /> {v.trips} viajes
          </span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3 w-3" /> {v.rating}
          </span>
        </div>
        <div className="mt-3 text-base font-semibold sm:hidden">
          ${v.price} <span className="text-xs font-normal text-muted-foreground">COP / día</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-between gap-3 border-t border-border pt-3 sm:col-span-1 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
        <div className="hidden text-right sm:block">
          <div className="text-xl font-semibold">${v.price}</div>
          <div className="text-[11px] text-muted-foreground">COP / día</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition hover:bg-[color:var(--brand-blue)]">
            <Pencil className="h-3.5 w-3.5" /> Editar
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/70 transition hover:bg-secondary">
            <Pause className="h-3.5 w-3.5" /> Pausar
          </button>
        </div>
      </div>
    </article>
  );
}

function AddVehicleCard() {
  return (
    <button className="group flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-background/60 p-8 text-center transition hover:border-[color:var(--brand-coral)] hover:bg-background">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-foreground transition group-hover:bg-[color:var(--brand-coral)]">
        <Plus className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold">Publicar otro vehículo</span>
      <span className="max-w-[220px] text-xs text-muted-foreground">
        Suma un carro a tu flota y empieza a generar ingresos este mes.
      </span>
      <span className="inline-flex items-center gap-1 text-xs font-medium text-[color:var(--brand-blue)]">
        Empezar <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}