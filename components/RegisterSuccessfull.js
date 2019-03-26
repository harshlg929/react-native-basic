import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './../../styles/style';
import { LOGO_TEXT } from './../../images/image';


class ThankYouScreen extends React.Component {
    static navigationOptions = () => ({
        header: null
    });
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LandingPage')
          }, 20000);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ThankYouWrapper}>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('LandingPage')}>
                        {/* <Image 
                            source={LOGO_TEXT}
                            style={styles.Logo}
                            resizeMode='contain'
                        />                 */}
                        </TouchableOpacity>        
                        <Text style={styles.headingRegisterSuccussefully}> Registered Successfully </Text>
                        <Text style={styles.HeadingSplashScreen}> Verification mail is sent to your registered email id. Please verify to login.</Text>                         
                    </View>
                </View>
            </View>
        );
    }
}
export default ThankYouScreen;