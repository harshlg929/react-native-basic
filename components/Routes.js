import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Notification from './Notification/Notification';
import Signup from './Signup/Signup';
import Notice from './Notice/Notice';
import Timeline from './Timeline/Timeline';
import Landing from './Landing/Landing';
import Almuniup from './Alumniup/Alumniup';
import Almunipro from './Alumnipro/Almunipro';
import ThankYouScreen from "./../components/RegisterSuccessfull";

const stack = createStackNavigator({
  Home: Home,
  Profile: Profile,
  Login: Login,
  Notification:Notification,
  Signup:Signup,
  Notice:Notice,
  Timeline:Timeline,
  Landing: Landing,
  Almuniup: Almuniup,
  Almunipro: Almunipro,
  ThankYouScreen: ThankYouScreen
},
  {
    initialRouteName: "Landing",
  }
);

const RootStack = createDrawerNavigator(
  {
    stack: {
      screen: stack,
      navigationOptions: {
        drawerLockMode: "locked-closed",
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
