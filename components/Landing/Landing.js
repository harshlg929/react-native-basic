import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import styles from './../../styles/style';
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
      <View style={styles.container}>
        <View style={styles.ContentOuterWrapper}>
          <View style={styles.contentWrapper}>
            <View style={styles.fieldsWrapper}>
              <Text style={styles.HeadingLandingPage}>Alma Connect</Text>
              {/* <Image
                  resizeMode='contain'
                  source={ICO_CAMERA} style={styles.TakePictureImage}
                /> */}
              <Text style={styles.HeadingLandingPage}>'Let's increase your network'</Text>
              <Button
                style={styles.RegisterButton}
                title='Login'
                onPress={this.Login}
              />
              <Button
                style={styles.RegisterButton}
                title='Signup'
                onPress={this.Signup}
              />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#4E1F60",
//     height: "100%",
//   },
//   buttonStyle: {
//     margin: 20
//   },
//   Welcome: {
//     display: "flex",
//     justifyContent: "center",
//     fontSize: 5,
//     fontWeight: '700',
//     margin: 10,
//     padding: 20,
//     color: 'white',
//     borderRadius: 24,
//     fontSize: 35,
//     fontWeight: '800',
//     marginTop: 10,
//   },

//   Network: {
//     fontSize: 5,
//     fontWeight: '700',
//     margin: 10,
//     padding: 20,
//     color: 'white',
//     borderRadius: 24,
//     fontSize: 23,
//     fontWeight: '800',
//     marginTop: 0,
//   },


//   body: {
//     marginTop: 100,
//   },

//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 50,
//     marginBottom: 0,
//   },
// });