import React from "react";
import FetchData from "./components/fetchData";
import HelloWorld from "./components/helloWorld";

class App extends React.Component {
  render() {
    return (
      <FetchData url="https://swapi.co/api/people/1" render={({loading, data}) => (
        <HelloWorld data={data} />
      )} />
    );
  }
};

export default App
