import React from 'react';
import { Route } from 'react-router';

import App from './layouts/App';
import NotFound from './layouts/NotFound';

export default (
  <Route path="/(:filter)" component={App}>
    <Route path="*" component={NotFound} />
  </Route>
);
