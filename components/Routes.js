import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';

const stack = createStackNavigator({
  Home: Home,
  Profile: Profile,
  Login: Login
},
  {
    initialRouteName: "Login",
  }
);

const RootStack = createDrawerNavigator(
  {
    stack: {
      screen: stack,
      navigationOptions: {
        // drawerLockMode: "locked-closed",
      }
    }
  },
  {
    contentComponent: Sidebar,
    drawerWidth: 200,
    drawerPosition: 'right',
  }
);
const App = createAppContainer(RootStack);
class Routes extends React.Component {
  render() {
    return (
      <App />
    );
  }
}
export default Routes;
