import React from "react";
import withMouse from "./components/withMouse";
import measureTime from "./components/measureTime";
import fetchData from "./components/fetchData";

const App = props => (
  <div style={{ width: "100%", height: "100vh" }}>
    <div>Time Passed: {props.secondsPassed}</div>
    <div>
      Mouse is at ({props.x}, {props.y})
    </div>
    <div>
      {props.loading && <div>Loading...</div>}
      {!props.loading && props.data && <div>{JSON.stringify(props.data)}</div>}
    </div>
  </div>
);

export default fetchData("https://swapi.co/api/people/1")(
  measureTime(1)(withMouse(App))
);
