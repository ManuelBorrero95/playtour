import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Info } from "lucide-react";
import { APIProvider } from '@vis.gl/react-google-maps';
import Flatpickr from "react-flatpickr";
import AddressSearch from "../components/AddressSearch"


const CreateEvent = () => {

  const [date,setDate] = useState(new Date());
  const [eventHour,setHourDate] = useState("");


  const formatHHmm = (d) => {
    if (!d) return "";
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  };

  const handleChangeEventDate = (selectedDates /* array */, dateStr, instance) => {
    const d = selectedDates?.[0] ?? null;
    setDate(d);
    setHourDate(d ? formatHHmm(d) : "");
  };


  const handleSubmit = (e)=>{

     e.preventDefault();
    console.log("Data selezionata:", date);

  }

 const [selectedPlace, setSelectedPlace] = useState(null);

 const handlePlaceSelected = (place) => {
    setSelectedPlace(place);
  };


console.log("ENV:", import.meta.env);
console.log("API KEY:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <>
      <form className="grid grid-cols-1 md:grid-cols-12 md:grid-row-6 gap-x-8 gap-y-6 py-8">

        <div className="md:col-start-1 md:col-span-2 space-y-4 md:row-span-1">
          <label className="block text-sm font-medium">Subir foto</label>
          <div className="h-36 w-full bg-gray-200 rounded-md grid place-items-center">
            <span className="text-xs text-gray-600">Anteprima</span>
          </div>
        </div>
        <div className="md:row-start-2 md:col-span-4">
          <div>
            <label htmlFor='event-type' className='block text-sm mb-1'>Tipo Evento</label>
            <div className='relative'>
              <input id='event-type'
                type='text'
                required
                className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                placeholder='Tipo Evento' />
            </div>
          </div>
        </div>
        <div className="md:row-start-2 md:col-start-5 md:col-span-4 ">
          <div>
            <label htmlFor='event-title' className='block text-sm mb-1'>Titolo evento</label>
            <div className='relative'>
              <input id='event-title'
                type='text'
                required
                className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                placeholder='Titolo evento' />
            </div>
          </div>
        </div>
        <div className="md:row-start-3 md:col-span-4">
          <div>
            <label htmlFor='event-date' className='block text-sm mb-1'>Fecha Evento</label>
            <div className='relative'>
              <Flatpickr id='event-date'
                type='text'
                required
                className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                placeholder='Fecha Evento'                
                onChange={handleChangeEventDate}                
                options={{
                  enableTime: true,
                  dateFormat: "Y-m-d",
                  minDate:"today"
                }}
                />
            </div>
          </div>
        </div>
        <div className="md:row-start-3 md:col-start-5 md:col-span-4 ">
          <div>
            <label htmlFor='event-hour' className='block text-sm mb-1'>Ora del evento</label>
            <div className='relative'>
              <input id='event-hour'
                type='text'
                required
                value={eventHour}
                className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                placeholder='Ora del evento' 
                readOnly/>
            </div>
          </div>
        </div>
<div className="md:row-start-4 md:col-span-4">
  <div>
    <label htmlFor="event-address" className="block text-sm mb-1">
      Dirección
    </label>
    <div className="relative">
      <AddressSearch
        onPlaceSelected={handlePlaceSelected}
        placeholder="Dirección evento"
        inputClassName="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]"
      />
    </div>

    {selectedPlace && (
      <div className="mt-2 text-xs text-gray-500 space-y-1">              
      </div>
    )}
  </div>
</div>
        <div className="md:row-start-5 md:col-span-4">
          <div>
            <label htmlFor='event-description' className='block text-sm mb-1'>Descripción evento</label>
            <div className='relative'>
              <textarea id='event-description'
                type='text'
                required
                className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C2C719]'
                placeholder='Descripción evento' />
            </div>
          </div>
        </div>

        <div className="md:col-start-5 md:col-span-4 col-span-1 md:row-start-6">
          <button type="submit"
            className="w-full rounded-md bg-[#C2C719] text-white font-semibold py-3 hover:bg-[#AAAE16] transition">
            CONFIRMAR
          </button>
        </div>
      </form>
    </>

  );
};

export default CreateEvent;
