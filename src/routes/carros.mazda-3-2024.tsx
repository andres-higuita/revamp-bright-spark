import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  Camera,
  ChevronDown,
  Clock3,
  Fuel,
  Gauge,
  MapPin,
  Navigation,
  Armchair,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AppFooter, AppNav } from "@/components/site-chrome";
import mazdaFront from "@/assets/mazda-detail-front.jpg";
import mazdaClose from "@/assets/mazda-detail-front-close.jpg";
import mazdaInterior from "@/assets/mazda-detail-interior.jpg";
import mazdaRear from "@/assets/mazda-detail-rear.jpg";

export const Route = createFileRoute("/carros/mazda-3-2024")({
  head: () => ({
    meta: [
      { title: "Mazda 3 2024 en Medellín — Rodii" },
      {
        name: "description",
        content: "Reserva un Mazda 3 2024 en Medellín con precio claro, entrega flexible y cobertura incluida.",
      },
      { property: "og:title", content: "Mazda 3 2024 en Medellín — Rodii" },
      {
        property: "og:description",
        content: "Conoce el vehículo, consulta su disponibilidad y reserva tu Mazda 3 en Rodii.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CarDetail,
});

const gallery = [
  { src: mazdaFront, alt: "Mazda 3 blanco visto de frente en Medellín", width: 1440, height: 1088 },
  { src: mazdaClose, alt: "Detalle frontal y farola del Mazda 3", width: 1440, height: 800 },
  { src: mazdaInterior, alt: "Interior y tablero del Mazda 3", width: 1024, height: 1024 },
  { src: mazdaRear, alt: "Vista trasera del Mazda 3 blanco", width: 1024, height: 1024 },
];

const september = [
  { day: "28", muted: true }, { day: "29", muted: true }, { day: "30", muted: true },
  ...Array.from({ length: 27 }, (_, index) => ({ day: String(index + 1), muted: index < 16 })),
];
const october = [
  { day: "28", muted: true }, { day: "29", muted: true }, { day: "30", muted: true },
  { day: "1" }, { day: "2" }, { day: "3" }, { day: "4" },
  ...Array.from({ length: 27 }, (_, index) => ({ day: String(index + 5) })),
];

const faqs = [
  ["¿Qué necesito para alquilar el Mazda 3 2024?", "Debes ser mayor de 21 años y tener tu documento de identidad y licencia de conducción vigentes."],
  ["¿Cuánto cuesta alquilar el Mazda 3 2024?", "La tarifa es de $250.000 COP por día. El total se calcula según las fechas y el tipo de entrega."],
  ["¿El Mazda 3 2024 pide depósito?", "No. Rodii no exige depósitos para esta reserva."],
  ["¿Este carro está asegurado durante el alquiler?", "Sí. Cada reserva incluye cobertura durante las fechas confirmadas."],
  ["¿Dónde recojo el Mazda 3 2024?", "La dirección exacta del punto de recogida se comparte cuando se confirma la reserva."],
  ["¿Puedo cancelar esta reserva?", "Sí. Podrás revisar las condiciones de cancelación antes de confirmar el pago."],
];

function CarDetail() {
  const [delivery, setDelivery] = useState<"pickup" | "home">("pickup");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/40 text-foreground">
      <AppNav />
      <main className="mx-auto max-w-7xl px-4 pb-28 pt-5 sm:px-6 sm:pt-8 lg:pb-10">
        <Gallery onOpen={() => setGalleryOpen(true)} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-12">
            <VehicleIntro />
            <Host />
            <CalendarSection />
            <Delivery />
            <Location />
            <Faq openFaq={openFaq} setOpenFaq={setOpenFaq} />
          </div>
          <aside className="hidden lg:block lg:sticky lg:top-24">
            <BookingCard delivery={delivery} setDelivery={setDelivery} />
          </aside>
        </div>
      </main>
      <div className="lg:hidden">
        <MobileBooking />
      </div>
      <AppFooter />
      {galleryOpen ? <GalleryModal onClose={() => setGalleryOpen(false)} /> : null}
    </div>
  );
}

function Gallery({ onOpen }: { onOpen: () => void }) {
  return (
    <section aria-label="Fotos del vehículo">
      <div className="flex snap-x gap-3 overflow-x-auto pb-2 lg:hidden">
        {gallery.map((image, index) => (
          <button key={image.src} onClick={onOpen} className="relative h-[330px] min-w-[88%] snap-center overflow-hidden rounded-lg bg-muted text-left">
            <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full object-cover" />
            {index === 0 ? <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-background/95 px-3 py-2 text-xs font-semibold shadow-sm"><Camera className="h-4 w-4" /> 6 fotos</span> : null}
          </button>
        ))}
      </div>
      <div className="hidden h-[520px] grid-cols-4 grid-rows-2 gap-3 lg:grid">
        <button onClick={onOpen} className="col-span-2 row-span-2 overflow-hidden rounded-lg bg-muted">
          <img src={gallery[0].src} alt={gallery[0].alt} width={gallery[0].width} height={gallery[0].height} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
        </button>
        <button onClick={onOpen} className="col-span-2 overflow-hidden rounded-lg bg-muted">
          <img src={gallery[1].src} alt={gallery[1].alt} width={gallery[1].width} height={gallery[1].height} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
        </button>
        <button onClick={onOpen} className="overflow-hidden rounded-lg bg-muted">
          <img src={gallery[2].src} alt={gallery[2].alt} width={gallery[2].width} height={gallery[2].height} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
        </button>
        <button onClick={onOpen} className="group relative overflow-hidden rounded-lg bg-foreground">
          <img src={gallery[3].src} alt={gallery[3].alt} width={gallery[3].width} height={gallery[3].height} loading="lazy" className="h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-[1.02]" />
          <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-background"><span className="inline-flex items-center gap-2"><Camera className="h-4 w-4" /> Ver 6 fotos</span></span>
        </button>
      </div>
    </section>
  );
}

function VehicleIntro() {
  const specs = [
    { icon: Armchair, label: "5 asientos" },
    { icon: Fuel, label: "Gasolina corriente" },
    { icon: Gauge, label: "Automático" },
    { icon: Star, label: "1 viaje" },
  ];
  return (
    <section className="border-b border-border pb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="inline-flex min-h-8 items-center rounded-md border border-accent/25 bg-accent/10 px-3 text-xs font-semibold uppercase text-foreground">Sedán</span>
        <button className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold text-muted-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Share2 className="h-4 w-4 text-accent" /> Comparte y gana
        </button>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">Mazda 3 2024 en Medellín</h1>
      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Medellín, Antioquia</p>
      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:gap-7">
        {specs.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-medium text-foreground/75">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-secondary"><Icon className="h-4 w-4" /></span>{label}
          </div>
        ))}
      </div>
    </section>
  );
}

function Host() {
  return (
    <section className="flex items-center justify-between gap-4 border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex min-w-0 items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-foreground text-lg font-bold text-background">F</div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 font-semibold">Felipe <ShieldCheck className="h-4 w-4 text-brand-blue" /></div>
          <p className="mt-1 text-sm text-muted-foreground">Propietario verificado · Responde en minutos</p>
        </div>
      </div>
      <button className="min-h-11 shrink-0 px-2 text-sm font-semibold text-brand-blue">Ver perfil</button>
    </section>
  );
}

function Month({ name, days }: { name: string; days: Array<{ day: string; muted?: boolean }> }) {
  return (
    <div>
      <p className="mb-5 text-center text-sm font-semibold">{name}</p>
      <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-muted-foreground">
        {['LU','MA','MI','JU','VI','SÁ','DO'].map((day) => <span key={day} className="py-2">{day}</span>)}
      </div>
      <div className="grid grid-cols-7 text-center text-sm">
        {days.map((item, index) => (
          <button key={`${name}-${index}`} disabled={item.muted} className={`aspect-square min-h-10 rounded-md font-medium transition ${item.muted ? "text-muted-foreground/35" : "hover:bg-secondary focus-visible:bg-secondary"}`}>{item.day}</button>
        ))}
      </div>
    </div>
  );
}

function CalendarSection() {
  return (
    <section>
      <SectionTitle eyebrow="Disponibilidad" title="Selecciona tus fechas" />
      <div className="mt-6 border border-border bg-card p-5 shadow-sm sm:p-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12"><Month name="Septiembre 2026" days={september} /><Month name="Octubre 2026" days={october} /></div>
        <div className="mt-7 flex items-start gap-3 border-t border-border pt-6">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-blue/10 text-brand-blue"><Sparkles className="h-4 w-4" /></span>
          <div><p className="text-sm font-semibold">Pico y placa en Medellín <span className="ml-1 text-brand-blue">· Exento</span></p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Este carro puede circular sin restricciones durante tu reserva.</p></div>
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section>
      <SectionTitle eyebrow="Comodidad" title="Opciones de entrega" />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="border-2 border-foreground bg-card p-5"><Navigation className="h-5 w-5" /><p className="mt-4 font-semibold">Recogida en punto</p><p className="mt-1 text-sm text-muted-foreground">Dirección disponible al reservar</p><p className="mt-4 text-sm font-semibold">Incluido</p></div>
        <div className="border border-border bg-card p-5"><MapPin className="h-5 w-5" /><p className="mt-4 font-semibold">Entrega a domicilio</p><p className="mt-1 text-sm text-muted-foreground">Hasta 15 km desde la ubicación</p><p className="mt-4 text-sm font-semibold">Desde $20.000</p></div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section>
      <SectionTitle eyebrow="Medellín" title="Ubicación del vehículo" />
      <div className="relative mt-6 h-[330px] overflow-hidden border border-border bg-secondary">
        <div className="absolute inset-0 opacity-45" style={{ backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "42px 42px", transform: "rotate(-8deg) scale(1.2)" }} />
        <div className="absolute left-[10%] top-[16%] h-2 w-[75%] rotate-12 bg-background shadow-sm" />
        <div className="absolute left-[22%] top-[12%] h-[80%] w-3 -rotate-6 bg-background shadow-sm" />
        <div className="absolute left-[58%] top-[8%] h-[88%] w-4 rotate-[24deg] bg-background shadow-sm" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 bg-accent/15" />
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-background shadow-lg"><MapPin className="h-5 w-5" /></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 border border-border bg-background/95 p-3 text-xs font-medium shadow-sm backdrop-blur-sm sm:right-auto"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" /> El área indica el radio aproximado de entrega (15 km)</div>
      </div>
    </section>
  );
}

function Faq({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (value: number | null) => void }) {
  return (
    <section className="pb-8">
      <SectionTitle eyebrow="Antes de reservar" title="Preguntas frecuentes" />
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map(([question, answer], index) => {
          const open = openFaq === index;
          return <div key={question}>
            <button onClick={() => setOpenFaq(open ? null : index)} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left font-semibold" aria-expanded={open}><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition ${open ? "rotate-180" : ""}`} /></button>
            {open ? <p className="max-w-2xl pb-5 text-sm leading-6 text-muted-foreground">{answer}</p> : null}
          </div>;
        })}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><p className="text-xs font-semibold uppercase text-brand-blue">{eyebrow}</p><h2 className="mt-2 text-2xl font-bold tracking-normal">{title}</h2></div>;
}

function BookingCard({ delivery, setDelivery }: { delivery: "pickup" | "home"; setDelivery: (value: "pickup" | "home") => void }) {
  return (
    <div className="border border-border bg-card p-7 shadow-[0_24px_55px_-30px_color-mix(in_oklab,var(--foreground)_35%,transparent)]">
      <div className="flex items-end justify-between gap-4"><div><p className="text-3xl font-bold">$250.000</p><p className="mt-1 text-sm text-muted-foreground">COP por día</p></div><span className="rounded-md bg-brand-blue/10 px-2 py-1 text-xs font-semibold text-brand-blue">Sin depósito</span></div>
      <div className="mt-7 grid grid-cols-2 border border-border">
        <BookingField icon={CalendarDays} label="Recogida" value="28 sep. 2026" />
        <BookingField icon={Clock3} label="Hora" value="8:00 a. m." borderLeft />
        <BookingField icon={CalendarDays} label="Devolución" value="30 sep. 2026" borderTop />
        <BookingField icon={Clock3} label="Hora" value="8:00 a. m." borderLeft borderTop />
      </div>
      <fieldset className="mt-6"><legend className="text-xs font-semibold uppercase text-muted-foreground">Tipo de entrega</legend><div className="mt-3 space-y-2">
        <DeliveryChoice active={delivery === "pickup"} title="Recogida en punto" detail="Ubicación tras confirmar" onClick={() => setDelivery("pickup")} />
        <DeliveryChoice active={delivery === "home"} title="Entrega a domicilio" detail="Radio máximo de 15 km" onClick={() => setDelivery("home")} />
      </div></fieldset>
      <div className="my-6 flex items-center justify-between border-t border-border pt-5 text-sm"><span className="text-muted-foreground">Total estimado · 2 días</span><span className="font-semibold">$500.000</span></div>
      <button className="min-h-14 w-full rounded-md bg-accent px-5 text-base font-bold text-foreground transition hover:brightness-105 active:scale-[0.99]">Reservar ahora</button>
      <p className="mt-4 text-center text-xs text-muted-foreground">Aún no se realizará ningún cobro</p>
    </div>
  );
}

function BookingField({ icon: Icon, label, value, borderLeft, borderTop }: { icon: typeof CalendarDays; label: string; value: string; borderLeft?: boolean; borderTop?: boolean }) {
  return <button className={`min-h-20 p-3 text-left ${borderLeft ? "border-l border-border" : ""} ${borderTop ? "border-t border-border" : ""}`}><span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase text-muted-foreground"><Icon className="h-3.5 w-3.5" />{label}</span><span className="mt-2 block text-xs font-semibold">{value}</span></button>;
}

function DeliveryChoice({ active, title, detail, onClick }: { active: boolean; title: string; detail: string; onClick: () => void }) {
  return <button onClick={onClick} className={`flex min-h-16 w-full items-center gap-3 rounded-md border p-3 text-left transition ${active ? "border-foreground bg-foreground text-background" : "border-border bg-background"}`}><span className={`h-4 w-4 shrink-0 rounded-full border-[5px] ${active ? "border-background" : "border-muted-foreground/40"}`} /><span><span className="block text-sm font-semibold">{title}</span><span className={`mt-0.5 block text-xs ${active ? "text-background/65" : "text-muted-foreground"}`}>{detail}</span></span></button>;
}

function MobileBooking() {
  return <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 shadow-[0_-12px_35px_-20px_color-mix(in_oklab,var(--foreground)_35%,transparent)] backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4"><div><p className="text-lg font-bold">$250.000 <span className="text-xs font-normal text-muted-foreground">/ día</span></p><button className="min-h-6 text-xs font-semibold underline">Ver disponibilidad</button></div><button className="min-h-12 rounded-md bg-accent px-6 font-bold text-foreground">Reservar</button></div></div>;
}

function GalleryModal({ onClose }: { onClose: () => void }) {
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-foreground/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Galería del vehículo"><button onClick={onClose} className="fixed right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground shadow-lg" aria-label="Cerrar galería"><X className="h-5 w-5" /></button><div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">{gallery.map((image, index) => <img key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} loading={index === 0 ? undefined : "lazy"} className={`w-full object-cover ${index === 0 ? "sm:col-span-2" : ""}`} />)}</div></div>;
}