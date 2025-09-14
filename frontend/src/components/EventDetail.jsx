import React from "react";

function EventDetail({ event, onClose }) {
  const handleOutside = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={handleOutside}
    >
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-5">
          {/* COLONNA IMMAGINE */}
          <div className="md:col-span-3 bg-gray-200 h-64 md:h-[70vh]">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* COLONNA CONTENUTO */}
          <div className="md:col-span-2 flex flex-col max-h-[70vh]">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-5 border-b">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-tight line-clamp-2">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-700">{event.time}</p>
                <p className="text-sm text-gray-700">{event.club}</p>
                <p className="text-sm text-gray-500">{event.address}</p>
              </div>
              <button
                onClick={onClose}
                className="rounded p-2 text-gray-500 hover:text-gray-700 shrink-0"
                aria-label="Chiudi"
              >
                ✕
              </button>
            </div>

            {/* Body scrollabile */}
            <div className="p-5 overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-line">
                {event.description}
              </p>
            </div>

            {/* Footer azioni (appiccicato in basso) */}
            <div className="p-5 border-t mt-auto flex items-center gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  event.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm rounded-md border hover:bg-gray-50"
              >
                Apri in Google Maps
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Ciao! Vorrei informazioni su: ${event.title}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm rounded-md border hover:bg-gray-50"
              >
                WhatsApp
              </a>
              <button className="ml-auto px-4 py-2 rounded-md bg-[#2665AF] text-white hover:bg-[#205593]">
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
