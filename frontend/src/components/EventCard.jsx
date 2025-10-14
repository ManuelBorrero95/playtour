export default function EventCard({
  title = "Torneo Paladium",
  time = "10:00 – 13:00",
  club = "Club Paladium",
  address = "C/ Bilbao 12, Barcelona",
  image = "/padel.jpg",
  onCardClick,   // <— nuovo: apre la modale
  onSignup,      // opzionale
}) {
  return (
    <button
      type="button"
      onClick={onCardClick}
      className="w-full h-[100px] text-left bg-white border border-gray-200 mb-4 shadow-sm
                 rounded hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2665AF]/50
                 transition"
    >
      <div className="flex h-full items-center gap-3">
        {/* THUMB */}
        <div className="shrink-0 h-full">
          <img
            src={image}
            alt={title}
            className="w-[96px] h-full object-cover rounded"
          />
        </div>

        {/* TESTO */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold leading-tight line-clamp-1">{title}</h3>
          <p className="text-[13px] text-gray-700 leading-tight">{time}</p>
          <p className="text-[13px] text-gray-700 leading-tight">{club}</p>
          <p className="text-[13px] text-gray-500 leading-tight line-clamp-1">{address}</p>
        </div>

        {/* CTA: non deve aprire la modale */}
        <div className="shrink-0 self-start mt-2 mr-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onSignup?.(); }}
            className="px-4 py-2 text-[12px] rounded-md bg-[#2665AF] text-white hover:bg-[#205593] transition"
          >
            Inscribirse
          </button>
        </div>
      </div>
    </button>
  );
}
