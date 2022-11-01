import { useEffect, useState } from "react";
import { Users } from "./users";
import "./App.css";
import Table from "./Table";
import google from './img/google.png'


function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div className="app">
	<img src={google}></img>
	  <input
        className="search"
        placeholder="Search Google or type a URL"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(Users)} />}
  </div>
);
}

export default App;