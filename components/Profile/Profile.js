import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './../../styles/style';
import { WHITE, BLUE } from './../../util/color-contants'  
import { HeaderBackButton } from 'react-navigation';

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: WHITE,
    headerStyle: {
        backgroundColor: BLUE,
        elevation: 0,
        borderBottomWidth: 0,
        shadowOpacity: 0,
    },
    headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
    headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>Profile</Text></View>
});
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Click to go home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
