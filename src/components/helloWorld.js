import React from "react";
import ThemeContext from '../store/theme';
    
class HelloWorld extends React.Component {
  state = { x: "123" };

  renderAll(context, state) {
    return <div>
              <div>
                {JSON.stringify(context) }
              </div>
              <div>
                {JSON.stringify(state) }
              </div>
           </div>;
  }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(context) => { return this.renderAll(context, this.state)}}
        </ThemeContext.Consumer>
      </div>
    );
  }
};

export default HelloWorld;