import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
};

export default HelloWorld;
