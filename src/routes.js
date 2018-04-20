import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './components/home/index';
import Other from './components/other/index';

export default (
	<div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/other" component={Other} />
		</Switch>
    </div>
);