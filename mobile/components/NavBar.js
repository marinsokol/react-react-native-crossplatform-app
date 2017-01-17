import React, { PureComponent, PropTypes } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from '../styles/main';

export default class extends PureComponent {
  static displayName = 'NavBar'

  static propTypes = {
    filter: PropTypes.string,
    changeVisible: PropTypes.func,
  }

  changeVisible = filter => this.props.changeVisible(filter)

  render() {
    const { filter } = this.props;

    return (<View style={styles.navBar}>
      <TouchableHighlight
        onPress={() => { this.changeVisible('all'); }}
        style={(filter === 'all') ? styles.navBarButtonActive : styles.navBarButton}
        underlayColor={'#F26969'}
      >
        <Text> All </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => { this.changeVisible('completed'); }}
        style={(filter === 'completed') ? styles.navBarButtonActive : styles.navBarButton}
        underlayColor={'#F26969'}
      >
        <Text> Completed </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => { this.changeVisible('active'); }}
        style={(filter === 'active') ? styles.navBarButtonActive : styles.navBarButton}
        underlayColor={'#F26969'}
      >
        <Text> Active </Text>
      </TouchableHighlight>
    </View>);
  }
}
