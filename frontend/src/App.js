import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/WeatherForecast`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json();
      })
      .then(data => {
        console.log("Dati ricevuti:", data);
        setData(data);
      })
      .catch(error => {
        console.error("Errore nella fetch:", error);
      });
  }, []);

  return (
    <div>
      <h1>Previsioni Meteo</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.date} - {item.summary} - {item.temperatureC}°C
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
