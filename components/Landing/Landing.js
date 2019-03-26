import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { initialiseFirebase } from "./../../util/firebaseManager";

export default class Landing extends React.Component {
  static navigationOptions = () => ({
    header: null
  });

  Login = () => {
    this.props.navigation.navigate('Login')
  }

  Signup = () => {
    this.props.navigation.navigate('Signup')
  }

  componentDidMount() {
    initialiseFirebase();
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.body}>
          <View style={styles.bodyContent}></View>
          <Text style={styles.Welcome}>Alma Connect</Text>
          <Text style={styles.Network}>'Let's increase your netwrok'</Text>
          <Button
            style={styles.buttonStyle}
            title='Login'
            onPress={this.Login}
          />
          <Button
           style={styles.buttonStyle}
            title='Signup'
            onPress={this.Signup}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4E1F60",
    height: "100%",
  },
  buttonStyle: { 
    margin: 20
  },
  Welcome: {
    display: "flex",
    justifyContent: "center",
    fontSize: 5,
    fontWeight: '700',
    margin: 10,
    padding: 20,
    color: 'white',
    borderRadius: 24,
    fontSize: 35,
    fontWeight: '800',
    marginTop: 10,
  },

  Network: {
    fontSize: 5,
    fontWeight: '700',
    margin: 10,
    padding: 20,
    color: 'white',
    borderRadius: 24,
    fontSize: 23,
    fontWeight: '800',
    marginTop: 0,
  },


  body: {
    marginTop: 100,
  },

  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    marginBottom: 0,
  },
});