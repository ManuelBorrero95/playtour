import React, { useState, useEffect, useCallback } from "react";
import EventCard from "../components/EventCard";
import cover from "../assets/image.jpg";
import { SearchBar } from "../components/SearchBar";
import EventDetail from "../components/EventDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Torneo Paladium",
      time: "10:00 – 13:00",
      club: "Club Paladium",
      address: "C/ Baloo 12, Barcelona",
      image: cover, // usa l'import
      to: "/evento/torneo-paladium",
      description: "Torneo amatoriale con gironi e finale.",
    },
    {
      id: 2,
      title: "Torneo Manu",
      time: "10:00 – 13:00",
      club: "Club Paladium",
      address: "C/ Baloo 12, Barcelona",
      image: cover,
      to: "/evento/torneo-paladium",
      description: "Secondo evento di prova.",
    },
    {
      id: 3,
      title: "Torneo XYXY",
      time: "10:00 – 13:00",
      club: "Club Paladium",
      address: "C/ Baloo 12, Barcelona",
      image: cover,
      to: "/evento/torneo-paladium",
      description: "Terzo evento di prova.",
    },
  ];

  const filteredEvents = events.filter((ev) =>
    ev.title.toLowerCase().includes(query.toLowerCase())
  );

  // ESC per chiudere
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelectedEvent(null);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent, handleKeyDown]);

  return (
    <>
      <SearchBar onSearch={setQuery} />

      {filteredEvents.map((ev) => (
        <EventCard
          key={ev.id}
          {...ev}
          onCardClick={() => setSelectedEvent(ev)} // <— apre la modale
        />
      ))}

      {selectedEvent && (
        <EventDetail event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
};

export default Home;