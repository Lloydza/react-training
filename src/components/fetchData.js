import React from "react";

const fetchData = url => Component => {
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
      urlData = await urlData.json();
      this.setState({ data: urlData, loading: false });
    }

    render() {
      return (
        <Component
          {...this.props}
          data={this.state.data}
          loading={this.state.loading}
        />
      );
    }
  };
};

export default fetchData;
