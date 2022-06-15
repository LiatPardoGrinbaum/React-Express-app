import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const [dataCity, setDataCity] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onHandleClick = () => {
    getWeather(cityInput);
  };
  const getWeather = async (cityInput) => {
    try {
      setIsClicked(false);
      const { data } = await axios.get(`http://localhost:5000/weather/${cityInput}`);
      console.log("temp", data);
      setTemp(data.temp);
      setDataCity(data.city);
      setIsClicked(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="App">
      <h2>Weather</h2>
      <p>To get the current weather, Please enter a name of a city:</p>
      <div>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <button onClick={onHandleClick}>Search</button>
      </div>
      {isClicked && (
        <p>
          The current tempature in {dataCity} is {temp}
        </p>
      )}
    </div>
  );
}

export default App;

//deleted .git for checking if it fix heroku error
const liat1 = "liat";
