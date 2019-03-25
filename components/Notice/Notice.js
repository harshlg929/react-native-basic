import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class Notice extends React.Component {
  state = {
    add_notice: '',
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
 add_notice = async () => {
    const { add_notice } = this.state

  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='                 Kindly write here'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('add_notice', val)}
        />
         

        <Button
          title='Add Notice'
          onPress={this.add_notice}
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