import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, AsyncStorage, ScrollView } from 'react-native';
import styles from './../../styles/style';
import { HeaderBackButton } from 'react-navigation';
import { WHITE, BLUE } from './../../util/color-contants'  

class LoginScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
            elevation: 0,
            borderBottomWidth: 0,
            shadowOpacity: 0,
        },
        headerLeft: (<HeaderBackButton tintColor={WHITE} onPress={() => { navigation.goBack() }} />),
        headerTitle: <View style={styles.HeaderView}><Text style={styles.HeaderText}>Log in</Text></View>
    });
    constructor(props) {
        super(props);
    }

    setEmptyToast = () => {
        setTimeout(() => {
            // this.setState({
            //     Toast: ''
            // })
        }, 3000);
    }

    signUp = () => {
        this.props.navigation.navigate('Signup')
    }

    focusNextField(nextField) {
        this.refs[nextField].focus()
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 100 : 0} style={{ flex: 1, backgroundColor: BLUE }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always'>
                    <View style={styles.container}>
                        <View style={styles.ContentOuterWrapper}>
                            <View style={styles.contentWrapper}>
                                <View style={styles.fieldsWrapper}>
                                    <TextInput
                                        onSubmitEditing={() => this.focusNextField('password')}
                                        ref="emailAddress"
                                        placeholder="Email Address"
                                        placeholderTextColor={WHITE}
                                        selectionColor={WHITE}
                                        underlineColorAndroid="transparent"
                                        style={styles.InputField}
                                        keyboardType={'email-address'}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        onChangeText={(text) => this.setState({ email: text })}
                                    />
                                    <TextInput
                                        ref="password"
                                        placeholder="Password"
                                        placeholderTextColor={WHITE}
                                        selectionColor={WHITE}
                                        underlineColorAndroid="transparent"
                                        style={styles.InputField}
                                        keyboardType={'default'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({ password: text })}
                                    />
                                    <View>
                                        <TouchableOpacity
                                            style={styles.ButtonLogin}
                                            onPress={this.verifyUser}>
                                            <Text style={styles.ButtonText}>
                                                LOG IN
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.BottomLinkTextWrapper}>
                                        <Text style={styles.BottomLinkText}> Forgot password?  <Text onPress={() => this.props.navigation.navigate('ForgotPassword')} style={styles.PhoneNumberWrap}>Click here</Text></Text>
                                    </View>
                                    <View style={styles.BottomLinkTextWrapper} >
                                        <Text style={styles.BottomLinkText}> Not a member?  <Text onPress={this.signUp} style={styles.PhoneNumberWrap}>Click here</Text><Text>  to sign up now</Text></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}
export default LoginScreen;