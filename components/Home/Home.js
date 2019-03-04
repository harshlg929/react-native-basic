import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './../../styles/style';
import { initialiseFirebase, signUp, sendVerificationEmail, resetPassword, setUserInsideUserType,setUserDataInsideParticularType, signIn,getUserType, getAllInfo, getAllStudentData } from './../../util/firebaseManager';
import { YellowBox } from 'react-native';
import _ from 'lodash';
export default class App extends React.Component {
  data = {
    email: 'harsh.gupta@gyrix.co',
    name: 'Harsh',
    batch: '2018',
    profession: 'Chief Entertaining Officer',
    branch: 'Computer Science',
    details: 'Expertise in CPP',
    contact: '+918966966179'
}
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
      }
    };
    initialiseFirebase();

    signUp('harsh.gupta@gyrix.co', 'hA41322314')
      .then((data) => {
        console.log(data);
        sendVerificationEmail(data)
          .then(() => {
            console.log("Verification mail sent successfully");
          })
          .catch((error) => {
            console.log('signUpError: ', error);
          })
      })
      .catch((error) => {
        console.log(error);
      })

    setUserInsideUserType("asas","Student")
      .then(() => {
        console.log("User Successfully Set");
      })

    resetPassword('harsh.gupta@gyrix.co')
      .then(() => {
        console.log("Password reset link is sent to your mail id");
      })
      .catch((error) => {
        console.log('resetPasswordError: ', error);
      })

    signIn('harsh.gupta@gyrix.co', 'hA41322314')
      .then((data) => {
        console.log('dataSignIn: ', data);
      })
      .catch((error) => {
        console.log('signInError: ', error);
      })

    getAllStudentData()
      .then((data) => {
        console.log('dataGetAllStudents ', data);
      })
      .catch((error) => {
        console.log('getAllStudentError: ', error);
      })
    getUserType("454545456", "Alumini")
      .then((data) => { 
        console.log('data: ', data);
      })
      .catch((error) => { 
        console.log('error: ', error);
      })
    
    setUserDataInsideParticularType("asas", "Alumini", this.data)
      .then((data) => { 
        console.log(data);

      })
      setUserDataInsideParticularType("asas", "Student", this.data)
      .then((data) => { 
        console.log(data);

      })
  }

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
