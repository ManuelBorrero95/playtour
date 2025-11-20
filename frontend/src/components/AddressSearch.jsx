// src/AddressSearch.jsx
import React, { useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const AddressSearch = ({ onPlaceSelected, inputClassName = "", placeholder = "Cerca un indirizzo" }) => {
  const autocompleteRef = useRef(null);

  const handleLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    if (!autocompleteRef.current) return;
    const place = autocompleteRef.current.getPlace();

    const result = {
      address: place.formatted_address,
      placeId: place.place_id,
      location: place.geometry?.location
        ? {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }
        : null,
    };

    if (onPlaceSelected) {
      onPlaceSelected(result);
    }

    console.log("Place selected:", result);
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <Autocomplete
        onLoad={handleLoad}
        onPlaceChanged={handlePlaceChanged}
        options={{
          types: ["geocode"],
          componentRestrictions: { country: "es" }, // o "it" se preferisci
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          className={inputClassName}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default AddressSearch;
