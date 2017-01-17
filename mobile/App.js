import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configStore from '../app/store';
import Root from './components/Root';

const store = configStore();

export default class extends PureComponent {
  static displayName = 'App'

  state = {}

  render() {
    return (<Provider store={store}>
      <Root />
    </Provider>);
  }
}
