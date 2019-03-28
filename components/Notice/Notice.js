import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './../../styles/style';
import Textarea from 'react-native-textarea';
import { WHITE, BLUE, BLACK } from './../../util/color-contants';
import { setNotice, initialiseFirebase } from "./../../util/firebaseManager";

export default class Notice extends React.Component {
  state = {
    addNotice: '',
    Toast: ''
  }
  componentDidMount() {
    initialiseFirebase();
  }

  addNotice = () => {
    if (this.state.addNotice) {
      setNotice(this.state.addNotice)
        .then((data) => {
          this.setState({
            Toast: "Notice Added Successfully"
          })
          this.setEmptyToast();
        })
        .catch((error) => {
          this.setState({
            Toast: "Please enter the information"
          })
          this.setEmptyToast();
        })

    }
    else {
      this.setState({
        Toast: "Please enter the information"
      })
      this.setEmptyToast();
    }
  }


  setEmptyToast = () => {
    setTimeout(() => {
      this.setState({
        Toast: ''
      })
    }, 3000);
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 100 : 0} style={{ flex: 1, backgroundColor: BLUE }} enabled>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }} keyboardShouldPersistTaps='always'>
          <View style={styles.container}>
            <View style={[styles.ContentOuterWrapper, { paddingTop: 20 }]}>
              <Text style={styles.RegisterHeading}>
                Add Notice or some information
              </Text>
              <Text style={styles.Toast}>{this.state.Toast}</Text>
              <View style={styles.textAreaContainer} >
                <Textarea
                  containerStyle={styles.textAreaContainer}
                  style={styles.textarea}
                  selectionColor={BLACK}
                  onChangeText={(text) => this.setState({ addNotice: text })}
                  placeholder="Click here to add Notice"
                  placeholderTextColor="grey"
                  underlineColorAndroid={'transparent'}
                  multiline={true}
                />
              </View>
              {/* <TextInput
                style={styles.input}
                placeholder='Kindly write here'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => this.setState({ addNotice: val })}
              /> */}
              <TouchableOpacity style={styles.SubmitButton} onPress={this.addNotice}>
                <Text style={styles.submitButtonText}> Add Notice </Text>
              </TouchableOpacity>
              {/* <Button
                title='Add Notice'
                onPress={this.addNotice}
              /> */}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    )
  }
}
