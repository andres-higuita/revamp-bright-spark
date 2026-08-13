// Datos del usuario. Los nombres de campo coinciden con el backend real.
export const profile = {
  first_name: "Andres",
  last_name: "Higuita",
  full_name: "Andres Higuita",
  email: "andres.higuita@gmail.com",
  phone: "+57 316 662 6154",
  image_url: "" as string,
  completed_trips_count: 12,
  reviews_count: 3,
  rating_average: 3.3,
  identity_verified: true,
  driver_license_verified: true,
  phone_verified: true,
  email_verified: true,
  identity_kyc_status: "verified" as "pending" | "in_review" | "verified",
  driver_license_kyc_status: "verified" as "pending" | "in_review" | "verified",
  basic_profile_complete: true,
  fiscal_profile_complete: false,
  owns_count: 3,
  isHost: true,
  canBeHost: true,
  userMode: "host" as "guest" | "host",
  createdAt: "2026-04-08T12:00:00.000Z",
};

export const WHATSAPP_SUPPORT_URL = "https://wa.me/573166626154";

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function memberSince(iso: string) {
  const d = new Date(iso);
  const mes = new Intl.DateTimeFormat("es-CO", { month: "long", timeZone: "UTC" }).format(d);
  return `Miembro desde ${mes} de ${d.getUTCFullYear()}`;
}