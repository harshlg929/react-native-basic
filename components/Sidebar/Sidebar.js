import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SidemenuStyle';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SideMenu extends Component {
  userType;
  state = {
    isUserType: 'Student'
  }
  constructor(props) {
    super(props);
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount() {
    AsyncStorage.getItem("designation")
      .then((value) => {
        this.setState({
          isUserType: value
        })
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  render() {
    AsyncStorage.getItem('designation')
      .then((value) => {
        this.userType = value;
      })
      .catch((error) => {
      })
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={{ padding: 10 }} onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
            <Ionicons name="md-menu" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Almuniup')}>
            <View style={styles.ioniconsWrapper}>
              <Ionicons name="ios-contact" size={28} color="black" style={styles.IoniconsSidebar} />
              <Text style={styles.sectionHeadingStyle}>
                My Profile
              </Text>
            </View>
          </TouchableOpacity>
          {this.userType === 'Alumini'
            ?
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Notice')}>
                <View style={styles.ioniconsWrapper}>
                  <Ionicons name="md-add-circle" size={28} color="black" style={styles.IoniconsSidebar} />
                  <Text style={styles.sectionHeadingStyle}>
                    Add Notice
              </Text>
                </View>
              </TouchableOpacity>
            </View>
            : null
          }
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Timeline')}>
            <View style={styles.ioniconsWrapper}>
              <Ionicons name="md-paper" size={28} color="black" style={styles.IoniconsSidebar} />
              <Text style={styles.sectionHeadingStyle}>
                View Notices
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
            <View style={styles.ioniconsWrapper}>
              <Ionicons name="md-log-out" size={28} color="black" style={styles.IoniconsSidebar} />
              <Text style={styles.sectionHeadingStyle}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;