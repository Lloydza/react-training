import React from "react";

const measureTime = increment => Component => {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        secondsPassed: 0
      };
    }

    componentDidMount() {
      var self = this;
      this.interval = setInterval(() => {
        self.setState({ secondsPassed: self.state.secondsPassed + increment });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <Component {...this.props} secondsPassed={this.state.secondsPassed} />
      );
    }
  };
};

export default measureTime;
