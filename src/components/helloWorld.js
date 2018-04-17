import React from "react";
import ThemeContext from '../store/theme';
    
class HelloWorld extends React.Component {
  state = { x: "123" };

  renderAll = (context) => {
    return <div>
              <div>
                {JSON.stringify(context) }
              </div>
              <div>
                {JSON.stringify(this.state) }
              </div>
           </div>;
  }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(context) => { return this.renderAll(context)}}
        </ThemeContext.Consumer>
      </div>
    );
  }
};

export default HelloWorld;