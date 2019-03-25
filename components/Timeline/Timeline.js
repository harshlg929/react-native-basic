import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

export default class Timeline extends React.Component {
  state = {
    show_notice: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
 show_notice = async () => {
    const { show_notice } = this.state

  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='        Jo notice hai show hoga'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('show_notice', val)}
        />
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 405,
    backgroundColor: '#42A5F5',
    margin: 20,
    padding: 10,
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