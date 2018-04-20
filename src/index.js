import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import getHistory from './history';

import './content/styles/global.css';

const store = configureStore();
const history = getHistory();

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
  );

module.hot.accept();