import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './../../styles/style';

export default class App extends React.Component {
  static navigationOptions = () => ({
    header: null
  });
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Home Page - Click to go to profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
