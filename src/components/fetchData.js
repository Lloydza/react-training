import React from "react";
import Loading from './loading';
import Error from './error';

const fetchData = url => LoadingComponent => ErrorComponent => FinalComponent => {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        loading: true
      };
    }

    componentDidMount() {
      this.getData();
    }

    async getData() {
      var urlData = await fetch(url, {});

      if (urlData && urlData.status === 200) {
        urlData = await urlData.json();
        this.setState({ data: urlData, loading: false });
      }
      else {
        this.setState({ loading: false });
      }      
    }

    render() {
      LoadingComponent = LoadingComponent || Loading;
      ErrorComponent = ErrorComponent || Error;

      if (this.state.loading) {
        return <LoadingComponent {...this.props} />;
      }

      if (!this.state.loading && !this.state.data) {
        return <ErrorComponent {...this.props} />;
      }

      return (
        <FinalComponent
          {...this.props}
          data={this.state.data}
          loading={this.state.loading}
        />
      );
    }
  };
};

export default fetchData;
