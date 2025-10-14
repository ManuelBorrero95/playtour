import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Info } from "lucide-react";
import {APIProvider} from '@vis.gl/react-google-maps';


const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    club: "",
    date: "",
    description: "",
    addressText: "",
    placeId: "",
    lat: null,
    lng: null,
  });

  const hostRef = useRef(null);     // dove montare il widget
  const widgetRef = useRef(null);   // istanza PlaceAutocompleteElement


  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Payload evento:", form);
  };

  return (


    <>
      <APIProvider apiKey={'AIzaSyCwxZVCi3rcEM6bEAEcQoBujus1IG2EcvU'} onLoad={() => console.log('Maps API has loaded.')}>
        <h1>Hello, world!</h1>
      </APIProvider>



    </>



  );
};

export default CreateEvent;
