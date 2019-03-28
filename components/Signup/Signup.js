import React from 'react'
import {
  Text, View, TextInput, Picker, StyleSheet, Button, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { WHITE, BLUE } from './../../util/color-contants';
import { signUp, setUserInsideUserType, setUserDataInsideParticularType, sendVerificationEmail } from './../../util/firebaseManager';
import styles from './../../styles/style';
export default class SignUp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: WHITE,
    headerStyle: {
      backgroundColor: BLUE,
      elevation: 0,
      borderBottomWidth: 0,
      shadowOpacity: 0,
    },
    headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
    headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>Signup</Text></View>
  });

  state = {
    username: '', password: '', Toast: '', email: '', phone_number: '', batch: '', company_name: '', designation: '',
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  setEmptyToast = () => {
    setTimeout(() => {
      this.setState({
        Toast: ''
      })
    }, 3000);
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
          this.props.navigation.navigate("ThankYouScreen");
          sendVerificationEmail(data)
            .then(() => {
              this.setState({
                Toast: "Verification mail send to registered email id"
              })
              this.setEmptyToast();
            })
            .catch((error) => {
              this.setState({
                Toast: "The information you enter is invalid"
              })
              this.setEmptyToast();
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
          this.setState({
            Toast: "Email is not verified, please verify your email"
          })
          this.setEmptyToast();
          console.log(error);
        })
    }
    else {
      this.setState({
        Toast: 'Please fill all the information'
      })
      this.setEmptyToast();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 100 : 0} style={{ flex: 1, backgroundColor: BLUE }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always'>
          <View style={styles.container}>
            <View style={styles.ContentOuterWrapper}>
              <View style={styles.contentWrapper}>
                <View style={styles.fieldsWrapper}>
                  <Text style={styles.Toast}>{this.state.Toast}</Text>
                  <TextInput
                    style={styles.InputField}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ username: text })}
                  />
                  <TextInput
                    style={styles.InputField}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ password: text })}
                  />
                  <TextInput
                    style={styles.InputField}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ email: text })}
                  />
                  <TextInput
                    style={styles.InputField}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ phone_number: text })}
                  />
                  <TextInput
                    style={styles.InputField}
                    placeholder='Batch'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ batch: text })}
                  />
                  <TextInput
                    style={styles.InputField}
                    placeholder='Company Name'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ company_name: text })}
                  />
                  <View style= {styles.InputField}>
                  <Picker
                    selectedValue={this.state.designation}
                    style={{ height: 30, color: '#ffffff', width: '100%', padding: 0 }}
                    onValueChange={(itemValue) =>
                      this.setState({ designation: itemValue })
                    }>
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Alumini" value="Alumini" />
                  </Picker>
                    </View>

                  <Button
                    title='Sign Up'
                    onPress={this.signUp}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}