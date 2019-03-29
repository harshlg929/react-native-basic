import React from 'react'
import {
  View, Text, ScrollView,TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './../../styles/style';
import { HeaderBackButton } from 'react-navigation';
import { WHITE, BLUE } from './../../util/color-contants';
import { getNotice, initialiseFirebase, getNoticeId } from "./../../util/firebaseManager";

export default class Timeline extends React.Component {
  noticeData = [];
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: WHITE,
    headerStyle: {
      backgroundColor: BLUE,
      elevation: 0,
      borderBottomWidth: 0,
      shadowOpacity: 0,
    },
    headerRight:(<TouchableOpacity style={styles.headerStyle} onPress={() => {
      navigation.toggleDrawer();
    }}>
      <Ionicons name="md-menu" size={40} color="white" style={{ marginRight: 12, }} />
    </TouchableOpacity>),
    headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
    headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>Notices</Text></View>
  });
  constructor(props) { 
    super(props);
    initialiseFirebase();
    this.getNoticeFromId();
  }
  studentData;
  state = {
    result: '',
    noteData: '',
  }

  getNoticeFromId = () => {
    getNotice()
      .then((data) => {
        this.setState({
          result: data
        })
        data.map(data => {
          getNoticeId(data)
            .then((data) => {
              this.noticeData.push(data)
              this.setState({
                noteData: this.noticeData
              })
            })
            .catch((error) => {
              console.log('error: ', error);
            })
        })
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  // componentDidMount() {
  //   this.getNoticeFromId();
  // }

  render() {
    return (<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }} keyboardShouldPersistTaps='always'>
      <View style={styles.container}>
        <View style={[styles.ContentOuterWrapper, { paddingTop: 20 }]}>
          {this.state.noteData ?
            this.state.noteData.map((notice, index) => (
              <View key={index} style={styles.textAreaContainer} >
                <Text>{notice}</Text>
              </View>
            )) : null}
        </View>
      </View>
    </ScrollView>
    )
  }
}