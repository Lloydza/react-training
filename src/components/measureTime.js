import React from "react";

class MeasureTime extends React.Component {
 state = {secondsPassed: 0};

 componentDidMount() {
    var self = this;
    this.interval = setInterval(() => {
      self.setState({ secondsPassed: self.state.secondsPassed + self.props.increment });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {secondsPassed} = this.state;
    return this.props.render({secondsPassed});
  }
}

export default MeasureTime;
