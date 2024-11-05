import { useState, useEffect } from "react";
import axios from "axios";
import fetchWeatherKyiv from "../kyiv-api";
import "./App.css";
import InputField from "./InputField";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState({});
  const [town, setTown] = useState("");

  const key = "630f52faa7ee434510f43191450a8b40";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${key}&units=metric&lang=pl`;

  useEffect(() => {
    fetchWeatherKyiv().then((res) => setData(res.data));
  }, []);

  const searchWeather = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setTown("");
    }
  };

  return (
    <div className="app">
      <InputField
        value={town}
        setTown={setTown}
        onKeyDown={searchWeather} /> 
      <Header data={data } />      
      {data.name !== undefined && (
        <Footer data={data} />         
      )}
    </div>
  );
}

export default App;

//  <div className="app">
//       {/* <div className="inp-field">
//         <input
//           type="text"
//           value={town}
//           onChange={(e) => setTown(e.target.value)}
//           placeholder="Enter location"
//           onKeyDown={searchWeather}
//         />
//       </div> */}
//       <InputField value={town} setTown={setTown} onKeyDown={searchWeather } />
//       <div className="container">
//         <div className="header">
//           <div className="city">
//             <p>{data.name}</p>
//           </div>
//         </div>

//         <div className="temp">
//           {data.main ? (
//             <h1>
//               {data.main.temp.toFixed()}
//               °C
//             </h1>
//           ) : null}
//         </div>
//         <div className="desc">
//           {data.weather ? <p>{data.weather[0].main}</p> : null}
//         </div>
//       </div>
//       {data.name !== undefined && (
//         <div className="footer">
//           <div className="feels">
//             {data.main ? (
//               <p className="bold">
//                 {data.main.feels_like.toFixed()}
//                 °C
//               </p>
//             ) : null}
//             <p>Відчувається як</p>
//           </div>
//           <div className="humidity">
//             {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
//             <p>Вологість</p>
//           </div>
//           <div className="wind">
//             {data.wind ? (
//               <p className="bold">
//                 {`${data.wind.speed} `}
//                 М/С
//               </p>
//             ) : null}
//             <p>Вітер</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
