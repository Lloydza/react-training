import React from "react";
import fetchData from "./components/fetchData";

const App = props => (
  <div>
    {JSON.stringify(props.data)}
  </div>
);

export default fetchData("https://swapi.co/api/people/1")(null)(null)(App);
