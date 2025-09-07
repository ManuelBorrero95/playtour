import ccio from "../assets/2.jpg";

export default function EventCard({
  image = "https://picsum.photos/id/1011/1200/900",
  kicker = "Places Available",
  title = "UCFB Manchester\nUndergraduate\nOpen Day (PM Session)",
  month = "Sep",
  day = "16",
  year = "2025",
  locationLabel = "UCFB\nManchester",
  timeLabel = "13:00pm",
  durationLabel = "(2 hour)",
  to = "#",
}) {
  return (
    <article
      className="relative w-full h-[620px] md:h-[680px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${ccio})` }}
    >
      {/* Overlay: più scuro in basso, leggero verso l’alto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      {/* Ribbon data in alto a destra */}
      <div className="absolute top-4 right-4 z-20 bg-[#A2C617] text-gray-900 rounded-l-lg shadow-md px-4 py-3 flex flex-col items-center leading-none">
        <span className="text-sm font-semibold tracking-wide uppercase">{month}</span>
        <span className="text-4xl font-extrabold">{day}</span>
        <span className="text-xs font-semibold mt-1">{year}</span>
      </div>

      {/* Contenuto */}
      <div className="relative z-10 h-full flex">
        <div className="self-end p-5 sm:p-7 md:p-9 max-w-xl text-white">
          {/* kicker piccolo */}
          <p className="text-white/85 text-sm mb-2">{kicker}</p>

          {/* titolo multilinea */}
          <h2 className="whitespace-pre-line font-extrabold leading-tight text-3xl sm:text-4xl">
            {title}
          </h2>

          {/* meta: icona + label + divisore + orario/durata */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-white/95 text-base">
            <div className="flex items-start gap-2">
              {/* pin/location (svg inline per semplicità) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-[2px]">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <span className="whitespace-pre-line"> {locationLabel}</span>
            </div>

            <span className="h-5 w-px bg-white/40" />

            <div className="flex items-center gap-2">
              <span>{timeLabel}</span>
              <span className="text-white/80">{durationLabel}</span>
            </div>
          </div>

          <div className="mt-6">
            <a
              href={to}
              className="inline-block px-4 py-2 rounded-md bg-white/90 text-gray-900 text-sm hover:bg-white"
            >
              Dettagli
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
