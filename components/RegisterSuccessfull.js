import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/style'


class ThankYouScreen extends React.Component {
    static navigationOptions = () => ({
        header: null
    });
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Landing')
          }, 5000);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ThankYouWrapper}>
                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Landing')}>
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