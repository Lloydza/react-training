import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Foo from './Foo';
import LoadableBar from './LoadableBar';

export default class App extends React.Component {
  componentDidMount() {
    // Comment this out to enable preloading
    //LoadableBar.preload();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Foo}/>
          <Route path="/bar" component={LoadableBar}/>
        </Switch>
      </div>
    );
  }
}