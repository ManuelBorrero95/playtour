import React from 'react'
import EventCard from "../components/EventCard";

const Home = () => {


  const mock = {
    title: "Torneo Paladium",
    time: "10:00 – 13:00",
    club: "Club Paladium",
    address: "C/ Baloo 12, Barcelona",
    image: "https://picsum.photos/id/1/200/300",
    to: "/evento/torneo-paladium",
  };



  return (

    <>





      <div className='grid grid-cols-1'>

        <EventCard
          title="Open Weekend"
          time="1 May"
          club="Centro Padel BCN"
          address="Av. Diagonal 100, Barcelona"
          image="https://picsum.photos/id/1/200/300"
          to="/evento/open-weekend"
        />

        <EventCard
          title="Open Weekend"
          time="1 May"
          club="Centro Padel BCN"
          address="Av. Diagonal 100, Barcelona"
          image="https://picsum.photos/id/1/200/300"
          to="/evento/open-weekend"
        />
        <EventCard
          title="Open Weekend"
          time="1 May"
          club="Centro Padel BCN"
          address="Av. Diagonal 100, Barcelona"
          image="https://picsum.photos/id/1/200/300"
          to="/evento/open-weekend"
        />

      </div>



    </>


  )
}

export default Home