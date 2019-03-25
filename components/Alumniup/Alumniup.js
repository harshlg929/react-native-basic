import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class Alumni extends React.Component {
  state = {
    name: '',current_password:'', new_password:'',email: '', phone_number: '',company_name:'',designation:'',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  update = async () => {
    const { name, current_password,new_password, email, phone_number } = this.state
    try {
      // here place your update  logic
      console.log('updated successfully!: ', success)
    } catch (err) {
      console.log('error updating profile: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Current Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('current_password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='New Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('new_password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        
        <TextInput
          style={styles.input}
          placeholder='Company Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('company_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Designation'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('designation', val)}
        />
        <Button
          title='Update'
          onPress={this.update}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#4E1F60',
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
