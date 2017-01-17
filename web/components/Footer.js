import React, { PureComponent, PropTypes } from 'react';

export default class extends PureComponent {
  static displayName = 'Footer'

  static propTypes = {
    message: PropTypes.string,
    removeError: PropTypes.func,
  }

  state = {}

  closeFooter = () => { this.props.removeError() }

  render() {
    const { message } = this.props;
    console.log(message)
    let cssClass = '';
    if (message) cssClass = 'active';

    return (<div className={`modal bottom-sheet ${cssClass}`}>
      <div className="modal-content">
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <div
          className="modal-action modal-close waves-effect waves-green btn-flat"
          onClick={() => this.closeFooter()}
        >
          Close
        </div>
      </div>
    </div>);
  }
}
