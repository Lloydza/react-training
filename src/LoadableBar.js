import Loadable from 'react-loadable';
import React, { Component } from 'react';

class LoadingComponent extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

const MyComponent = Loadable({
  loader: () => import('./Bar'),
  loading: LoadingComponent,
  delay: 2000
});

export default MyComponent;