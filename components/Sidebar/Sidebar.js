import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './SidemenuStyle';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.ioniconsWrapper}>
              <Ionicons name="md-log-in" size={28} color="black" style={styles.IoniconsSidebar} />
              <Text style={styles.sectionHeadingStyle}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <View style={styles.ioniconsWrapper}>
              <Ionicons name="md-log-in" size={28} color="black" style={styles.IoniconsSidebar} />
              <Text style={styles.sectionHeadingStyle}>
                Profile
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