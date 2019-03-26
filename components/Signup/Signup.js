import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { signUp, setUserInsideUserType, setUserDataInsideParticularType, sendVerificationEmail } from './../../util/firebaseManager';

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', Toast: '', email: '', phone_number: '', batch: '', company_name: '', designation: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    let userData = {
      username: this.state.username,
      email: this.state.email,
      phone_number: this.state.phone_number,
      batch: this.state.batch,
      company_name: this.state.company_name,

    }
    if (this.state.email && this.state.password) {
      signUp(this.state.email, this.state.password)
        .then((data) => {
          this.props.navigation.navigate("Login");
          sendVerificationEmail(data)
            .then(() => {
              console.log("Verification mail sent to email");
            })
            .catch((error) => {
              console.log(error);
            })
          setUserInsideUserType(data.user.uid, this.state.designation)
            .then((data) => {
              console.log("data signup", data);
            })
            .catch((error) => {
              console.log(error);
            })
          setUserDataInsideParticularType(data.user.uid, this.state.designation, userData)
            .then((data) => {
              console.log(data)
            })
            .catch((error) => {
              console.log(error);
            })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      this.setState({
        Toast: 'Please fill all the information'
      })
      setEmptyToast();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 100 : 0} style={{ flex: 1, backgroundColor: BLUE }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always'>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder='Username'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ username: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Phone Number'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ phone_number: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Batch'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ batch: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Company Name'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ company_name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder='Designation'
              autoCapitalize="none"
              placeholderTextColor='white'
              onChangeText={(text) => this.setState({ designation: text })}
            />

            <Button
              title='Sign Up'
              onPress={this.signUp}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})