import { useState } from "react";
import "./App.css";
import { getWeather } from "./action.js";
function App() {
  let locationn;
  const [search, setSearch] = useState("");
  const [location, setLoaction] = useState("Weather at that location");

  const onChangeHAndler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = async () => {
    locationn = await getWeather(search);
    setLoaction(locationn);
    console.log(locationn);
    setSearch("");
  };

  return (
    <div className="header text-center">
      <h1 className="pt-4">Weather Now</h1>
      <div className="search_bar ms-auto me-auto mt-5 pt-3">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          onChange={onChangeHAndler}
        />
      </div>
      <div className="search">
        <button className="mt-4" onClick={searchHandler}>
          Search
        </button>
      </div>
      <h1 className="mt-5 py-5">{location}</h1>
    </div>
  );
}

export default App;
