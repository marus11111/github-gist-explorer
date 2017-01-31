import './entry.scss';

import React from 'react';
import {
  render
} from 'react-dom';
import {
  Router,
  Route
} from 'react-router';
import {
  createHistory,
  useBasename
} from 'history';
import {Provider} from 'mobx-react';
import Authenticate from './js/components/Authenticate.jsx';
import App from './js/components/App.jsx';
import appStore from './js/stores/appStore';

const browserHistory = useBasename(createHistory)({ 
 //basename: '/github-gist-explorer' //to be used only in production 
});

appStore.ongoingInitAuth = true;
setTimeout(() => {
  appStore.ongoingInitAuth = false;
}, 2000);

render(
  <Provider appStore={appStore}>
    <Router history={browserHistory}>
      <Route path='/' component={Authenticate} />
      <Route path='/your-gists' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
