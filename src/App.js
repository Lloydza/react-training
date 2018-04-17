import React from "react";
import HelloWorld from "./components/helloWorld";
import ThemeContext from './store/theme';

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ position: 'float', colorType: 'opaque' }}>
          <HelloWorld other="test" />
        </ThemeContext.Provider>
      </div>
    );
  }
};

export default App
