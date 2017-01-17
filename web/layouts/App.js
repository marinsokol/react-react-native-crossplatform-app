import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';

import AddToDoContainer from '../containers/AddToDoContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import FooterContainer from '../containers/FooterContainer';

export default class extends PureComponent {
  static displayName = 'App'

  static propTypes = {
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }

  state = {}

  render() {
    return (<div>
      <AddToDoContainer />
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <li
              className={(this.props.params.filter === undefined) ? 'active' : ''}
            >
              <Link to="/">All</Link>
            </li>
            <li
              className={(this.props.params.filter === 'active') ? 'active' : ''}
            >
              <Link to="/active">Active</Link>
            </li>
            <li
              className={(this.props.params.filter === 'completed') ? 'active' : ''}
            >
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ToDoListContainer filter={this.props.params.filter} />
      <FooterContainer />
    </div>);
  }
}
