import React from "react";
import WithMouse from './components/withMouse';
import MeasureTime from './components/measureTime';
import FetchData from "./components/fetchData";
import KeyLogger from "./components/keyLogger";

const App = () => (
  <div>
      <KeyLogger>{({lastKeystroke, typedText}) => (
        <div>
          <WithMouse render={({x, y}) => (
            <div>
              <div>
                Mouse is at ({x}, {y})
              </div>
              <MeasureTime increment={1} render={({secondsPassed}) => (
                <div>
                  Time Passed: {secondsPassed}
                </div>
              )} />
              <FetchData url="https://swapi.co/api/people/1" render={({loading, data}) => (
                <div>
                  {loading && <div>Loading...</div>}
                  {!loading && data && <div>{JSON.stringify(data)}</div>}
                </div>
            )} />
            </div>
          )}/>
          <div>Last key stroke is: <b>{lastKeystroke}</b></div>
          <div>Typed text is: <b>{typedText}</b></div>
        </div>
      )}</KeyLogger>
  </div>
);

export default App
