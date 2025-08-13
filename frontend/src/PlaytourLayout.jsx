import React, { useMemo, useState } from "react"

// MVP layout in a single file, pronto per essere copiato in un progetto Vite/Next con Tailwind attivo
// Mostra: Header, Barra filtri, Gruppi (Hoy/Mañana/Próximo día), Card evento, Drawer contatti, Lightbox immagine

// ---- Utilità minime ----
const tz = "Europe/Madrid"
const fmtTime = (iso) => new Intl.DateTimeFormat("it-IT", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date(iso))
const fmtDay = (iso) => new Intl.DateTimeFormat("it-IT", { day: "numeric", month: "long", timeZone: tz }).format(new Date(iso))

function isToday(date) {
  const d = new Date(date)
  const now = new Date()
  return d.toLocaleDateString("es-ES", { timeZone: tz }) === now.toLocaleDateString("es-ES", { timeZone: tz })
}
function isTomorrow(date) {
  const d = new Date(date)
  const t = new Date()
  t.setDate(t.getDate() + 1)
  return d.toLocaleDateString("es-ES", { timeZone: tz }) === t.toLocaleDateString("es-ES", { timeZone: tz })
}

function mapsHref(address) {
  const q = encodeURIComponent(`${address.line1}, ${address.city}`)
  return `https://www.google.com/maps/search/?api=1&query=${q}`
}

// ---- Tipi mock ----
/** @typedef {{
 *  id: string,
 *  title: string,
 *  clubName: string,
 *  address: { line1: string, city: string },
 *  contact: { organizer: string, phone: string },
 *  imageUrl: string,
 *  description?: string,
 *  time:
 *    | { kind: 'hours', start: string, end: string }
 *    | { kind: 'full-day', day: string }
 *    | { kind: 'range-days', startDay: string, endDay: string },
 *  startDateISO: string,
 * }} EventItem */

// ---- Dati mock (sostituisci con API) ----
const MOCK_EVENTS = /** @type {EventItem[]} */ ([
  {
    id: "1",
    title: "Open Padel – Torneo Express",
    clubName: "Club Centro",
    address: { line1: "Calle Mayor, 12", city: "Madrid" },
    contact: { organizer: "Lucia Gómez", phone: "+34911001122" },
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    description: "Torneo rapido a tabellone. Livelli intermedio/avanzato.",
    time: { kind: "hours", start: isoToday("10:00"), end: isoToday("11:00") },
    startDateISO: isoToday("10:00"),
  },
  {
    id: "2",
    title: "Clínic Junior",
    clubName: "Club Norte",
    address: { line1: "Av. Libertad, 8", city: "Alcalá" },
    contact: { organizer: "Pedro Ruiz", phone: "+34666222333" },
    imageUrl: "https://images.unsplash.com/photo-1552346987-9f6c6a38a718?q=80&w=1200&auto=format&fit=crop",
    description: "Allenamento tecnico per junior (12–16).",
    time: { kind: "full-day", day: isoTomorrow("00:00") },
    startDateISO: isoTomorrow("00:00"),
  },
  {
    id: "3",
    title: "Weekend Cup",
    clubName: "Club Sur",
    address: { line1: "C. del Prado, 3", city: "Getafe" },
    contact: { organizer: "María Lopez", phone: "+34600111222" },
    imageUrl: "https://images.unsplash.com/photo-1546518414-c2fb74f3e5f8?q=80&w=1200&auto=format&fit=crop",
    description: "Torneo su due giorni: sabato e domenica.",
    time: { kind: "range-days", startDay: isoNextDay(2), endDay: isoNextDay(3) },
    startDateISO: isoNextDay(2),
  },
])

function isoToday(hm = "00:00") {
  const [h, m] = hm.split(":").map(Number)
  const d = new Date()
  d.setHours(h, m, 0, 0)
  return d.toISOString()
}
function isoTomorrow(hm = "00:00") {
  const [h, m] = hm.split(":").map(Number)
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(h, m, 0, 0)
  return d.toISOString()
}
function isoNextDay(offsetDays = 2) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  d.setHours(0, 0, 0, 0)
  return d.toISOString()
}

// ---- Componenti UI di base (no shadcn per restare standalone) ----
const Btn = ({ className = "", ...props }) => (
  <button
    className={
      "px-3 py-2 rounded-xl shadow text-sm font-medium bg-black text-white hover:opacity-90 active:scale-[.99] " +
      className
    }
    {...props}
  />
)
const BtnOutline = ({ className = "", ...props }) => (
  <button
    className={
      "px-3 py-2 rounded-xl border shadow-sm text-sm font-medium bg-white hover:bg-neutral-50 " +
      className
    }
    {...props}
  />
)
const Select = ({ children, className = "", ...props }) => (
  <select className={"px-3 py-2 rounded-xl border bg-white " + className} {...props}>
    {children}
  </select>
)

// ---- Card Evento ----
function EventCard({ event, onOpenContact, onOpenImage }) {
  return (
    <article className="rounded-2xl shadow p-3 bg-white flex gap-3">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-28 h-28 object-cover rounded-xl flex-none"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-base md:text-lg line-clamp-2">{event.title}</h3>
        <p className="text-sm text-neutral-600">{event.clubName}</p>
        <p className="text-sm mt-1">{renderTime(event.time)}</p>
        <a
          href={mapsHref(event.address)}
          target="_blank"
          rel="noreferrer"
          className="text-sm underline text-neutral-700 block truncate"
        >
          {event.address.line1}, {event.address.city}
        </a>
        <div className="mt-2 flex gap-2">
          <Btn onClick={() => onOpenContact(event)}>Inscripciones</Btn>
          <BtnOutline onClick={() => onOpenImage(event)}>Ver flyer</BtnOutline>
        </div>
      </div>
    </article>
  )
}

function renderTime(time) {
  if (time.kind === "hours") return `${fmtTime(time.start)}–${fmtTime(time.end)}`
  if (time.kind === "full-day") return fmtDay(time.day)
  if (time.kind === "range-days") return `${fmtDay(time.startDay)} – ${fmtDay(time.endDay)}`
  return ""
}

// ---- Drawer contatti ----
function ContactDrawer({ open, onClose, contact }) {
  if (!open) return null
  const wa = `https://wa.me/${(contact?.phone || "").replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa el evento"
  )}`
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 shadow-xl">
        <div className="mx-auto max-w-xl">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-lg">Contatto / Inscriciones</h4>
            <button onClick={onClose} className="text-sm underline">Chiudi</button>
          </div>
          <div className="mt-3 space-y-1">
            <p className="text-sm"><span className="font-medium">Organizador:</span> {contact?.organizer}</p>
            <a className="text-sm underline" href={`tel:${contact?.phone}`}>{contact?.phone}</a>
            <div className="pt-2 flex gap-2">
              <BtnOutline onClick={() => (window.location.href = `tel:${contact?.phone}`)}>Chiama</BtnOutline>
              <Btn onClick={() => window.open(wa, "_blank")}>WhatsApp</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---- Lightbox immagine ----
function ImageLightbox({ open, onClose, event }) {
  if (!open || !event) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute inset-4 bg-white rounded-2xl p-3 shadow-xl flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-lg truncate pr-2">{event.title}</h4>
          <button onClick={onClose} className="text-sm underline">Chiudi</button>
        </div>
        <div className="flex-1 overflow-auto">
          <img src={event.imageUrl} alt={event.title} className="w-full h-auto rounded-xl" />
          {event.description && (
            <p className="mt-3 text-sm text-neutral-700 whitespace-pre-wrap">{event.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// ---- Barra filtri (solo UI, no fetch) ----
function FiltersBar({ filters, setFilters }) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-5xl mx-auto px-3 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 flex-wrap">
          <Select value={filters.loc} onChange={(e) => setFilters((f) => ({ ...f, loc: e.target.value }))}>
            <option value="">Comunidad</option>
            <option value="MD">Madrid</option>
            <option value="CT">Cataluña</option>
            <option value="AN">Andalucía</option>
          </Select>
          <Select value={filters.prov} onChange={(e) => setFilters((f) => ({ ...f, prov: e.target.value }))}>
            <option value="">Provincia</option>
            <option>Madrid</option>
            <option>Barcelona</option>
          </Select>
          <Select value={filters.mun} onChange={(e) => setFilters((f) => ({ ...f, mun: e.target.value }))}>
            <option value="">Municipio</option>
            <option>Getafe</option>
            <option>Alcalá</option>
          </Select>
          <BtnOutline onClick={() => setFilters((f) => ({ ...f, near: !f.near }))}>
            Cerca vicino a me {filters.near ? "✓" : ""}
          </BtnOutline>
        </div>
        <div className="flex gap-2 flex-wrap">
          <BtnOutline onClick={() => setFilters((f) => ({ ...f, date: "today" }))}>
            Hoy
          </BtnOutline>
          <BtnOutline onClick={() => setFilters((f) => ({ ...f, date: "tomorrow" }))}>
            Mañana
          </BtnOutline>
          <BtnOutline onClick={() => setFilters((f) => ({ ...f, date: "weekend" }))}>
            Este fin de semana
          </BtnOutline>
          <BtnOutline onClick={() => alert("Apri datepicker (da integrare)")}>Calendario</BtnOutline>
          <Select value={filters.dur} onChange={(e) => setFilters((f) => ({ ...f, dur: e.target.value }))}>
            <option value="">Durata</option>
            <option value="single">Un día</option>
            <option value="multi">Varios días</option>
          </Select>
          <BtnOutline onClick={() => setFilters({ loc: "", prov: "", mun: "", near: false, date: "today", dur: "" })}>
            Pulisci
          </BtnOutline>
        </div>
      </div>
    </div>
  )
}

// ---- Gruppi eventi ----
function EventGroups({ events, onOpenContact, onOpenImage }) {
  const today = events.filter((e) => isToday(e.startDateISO))
  const tomorrow = events.filter((e) => isTomorrow(e.startDateISO))
  const next = events.filter((e) => !isToday(e.startDateISO) && !isTomorrow(e.startDateISO))

  return (
    <div className="space-y-6">
      <EventGroup title="Hoy" items={today} onOpenContact={onOpenContact} onOpenImage={onOpenImage} />
      <EventGroup title="Mañana" items={tomorrow} onOpenContact={onOpenContact} onOpenImage={onOpenImage} />
      <EventGroup title="Próximo día" items={next} onOpenContact={onOpenContact} onOpenImage={onOpenImage} />
    </div>
  )
}

function EventGroup({ title, items, onOpenContact, onOpenImage }) {
  if (!items.length) return null
  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((e) => (
          <EventCard key={e.id} event={e} onOpenContact={onOpenContact} onOpenImage={onOpenImage} />)
        )}
      </div>
    </section>
  )
}

// ---- Layout principale ----
export default function PlaytourLayout() {
  const [filters, setFilters] = useState({ loc: "", prov: "", mun: "", near: false, date: "today", dur: "" })
  const [contactOpen, setContactOpen] = useState(false)
  const [contactData, setContactData] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [imageEvent, setImageEvent] = useState(null)

  // in futuro: qui applichi i filtri ai dati
  const filtered = useMemo(() => {
    let arr = [...MOCK_EVENTS]
    if (filters.dur === "single") arr = arr.filter((e) => e.time.kind !== "range-days")
    if (filters.dur === "multi") arr = arr.filter((e) => e.time.kind === "range-days")
    return arr.sort((a, b) => new Date(a.startDateISO) - new Date(b.startDateISO))
  }, [filters])

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-3 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-black" />
            <h1 className="text-xl font-semibold">Playtour</h1>
          </div>
          <div className="text-sm text-neutral-600">Eventi di padel • España</div>
        </div>
      </header>

      {/* Filtri */}
      <FiltersBar filters={filters} setFilters={setFilters} />

      {/* Lista gruppi */}
      <main className="max-w-5xl mx-auto px-3 py-6">
        <EventGroups
          events={filtered}
          onOpenContact={(event) => {
            setContactData(event.contact)
            setContactOpen(true)
          }}
          onOpenImage={(event) => {
            setImageEvent(event)
            setLightboxOpen(true)
          }}
        />

        {/* Load more placeholder */}
        <div className="mt-6 flex justify-center">
          <BtnOutline onClick={() => alert("Carica altri (paginazione)")}>Carica altri</BtnOutline>
        </div>
      </main>

      {/* Foot */}
      <footer className="border-t bg-white">
        <div className="max-w-5xl mx-auto px-3 py-6 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} Playtour — MVP layout
        </div>
      </footer>

      {/* Overlay UI */}
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} contact={contactData} />
      <ImageLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} event={imageEvent} />
    </div>
  )
}
