import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { getNotice, initialiseFirebase, setNotice } from "./../../util/firebaseManager";

export default class Timeline extends React.Component {
  studentData;
  state = {
    notice: []
  }
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const studentData = navigation.getParam('studentData', 'NA');
    this.studentData = studentData;
    console.log(this.studentData);
  }
  componentDidMount() {
    initialiseFirebase();
    getNotice()
    .then((data)=>{
      this.setState({
        notice: data
      })
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
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