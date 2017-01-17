import React, { PureComponent, PropTypes } from 'react';
import { Text, View, Modal } from 'react-native';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'Footer'

  static propTypes = {
    message: PropTypes.string,
    removeError: PropTypes.func,
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.message === '') return;

    setTimeout(() => {
      this.props.removeError();
    }, 2000);
  }

  render() {
    const { message } = this.props;

    return (<Modal
      animationType={'fade'}
      transparent={false}
      visible={message !== ''}
      onRequestClose={() => { this.props.removeError(); }}
    >
      <View style={styles.error}>
        <Text style={styles.errorText}>{message}</Text>
      </View>
    </Modal>);
  }
}
