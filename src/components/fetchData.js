import React from "react";

class FetchData extends React.Component {
 state = {loading: true, data: null};

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    var urlData = await fetch(this.props.url, {});
    urlData = await urlData.json();
    this.setState({ data: urlData, loading: false });
  }

  render() {
    const {loading, data} = this.state;
    return this.props.render({loading, data});
  }
}

export default FetchData;
