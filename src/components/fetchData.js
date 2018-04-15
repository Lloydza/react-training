import React from "react";
import Loading from './loading';
import Error from './error';

class FetchData extends React.Component {
 state = {loading: true, data: null};

  componentDidMount() {
    this.getData();
  }

  async getData() {
    var urlData = await fetch(this.props.url, {});

    if (urlData && urlData.status === 200) {
      urlData = await urlData.json();
      this.setState({ data: urlData, loading: false });
    }
    else {
      this.setState({ loading: false });
    }      
  }

  render() {
    var LoadingComponent = this.props.LoadingComponent || Loading;
    var ErrorComponent = this.props.ErrorComponent || Error;

    if (this.state.loading) {
      return <LoadingComponent {...this.props} />;
    }

    if (!this.state.loading && !this.state.data) {
      return <ErrorComponent {...this.props} />;
    }

    const {loading, data} = this.state;
    return this.props.render({loading, data});
  }
}

export default FetchData;
