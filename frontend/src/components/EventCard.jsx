import { Link } from "react-router-dom";
// se l'immagine è in src/assets, importala così:
// import thumb from "../assets/padel.jpg";

export default function EventCard({
  title = "Torneo Paladium",
  time = "10:00 – 13:00",
  club = "Club Paladium",
  address = "C/ Baloo 12, Barcelona",
  image = "/padel.jpg", // se metti l'immagine in /public
  to = "/evento/torneo-paladium", // link alla pagina dettaglio
  onSignup, // callback opzionale per bottone
}) {
  return (
    <article className="w-full border-gray-300 border bg-white shadow-sm overflow-hidden mb-3">
      <div className="flex items-center">
        {/* thumb */}
        <Link to={to} className="shrink-0">
          <img
            src={image}
            alt={title}
            className="h-16 w-24 object-cover"
          />
        </Link>

        {/* testo */}
        <div className="flex-1 px-3 py-2">
          <Link to={to} className="block">
            <h3 className="text-sm font-semibold leading-tight">{title}</h3>
          </Link>
          <p className="text-xs text-gray-700">{time}</p>
          <p className="text-xs text-gray-700">{club}</p>
          <p className="text-xs text-gray-500">{address}</p>
        </div>

        {/* azione */}
        <div className="px-3">
          <button
            onClick={onSignup}
            className="text-xs rounded-md bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition"
          >
            Inscribirse
          </button>
        </div>
      </div>
    </article>
  );
}
