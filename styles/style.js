import { StyleSheet } from 'react-native';
import {BLUE, WHITE} from './../util/color-contants'; 
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BLUE,
    justifyContent: 'center'
  },
  //Header
  HeaderView: {
    width: '85%',
    alignItems: "center"
  },
  HeaderText: {
    color: WHITE,
    fontSize: 20
  },

  // Login Styles
  fieldsWrapper: {
    flex: 1,
    marginTop: 5,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ContentOuterWrapper: {
    flex: 0.7,
    width: '90%',
  },
  InputField: {
    borderWidth: 1,
    borderColor: WHITE,
    paddingVertical: 9,
    color: WHITE,
    paddingLeft: 15,
    borderRadius: 5,
    textAlign: 'left',
    marginBottom: 20
  },
  ButtonLogin: {
    backgroundColor: WHITE,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 42,
    width: '100%',
    borderRadius: 5,
    marginBottom: 30,
  },
  ButtonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: BLUE,
  },
  BottomLinkTextWrapper: {
    alignSelf: 'center',
    paddingBottom: 5,
    justifyContent: 'center',
  },
  textAreaContainer: {
    padding: 5,
    backgroundColor: WHITE,
    borderRadius: 5,
    marginBottom:5,
    justifyContent: 'flex-start',
    flex: 0.8,
  },
  RegisterHeading: {
    fontSize: 20,
    color: WHITE,
    textAlign: 'center',
    marginBottom: 5,
  },
  SubmitButton: {
    backgroundColor: WHITE,
    marginTop: 20,
    paddingVertical: 13,
    borderRadius: 5,
  },
  submitButtonText: {
    color: BLUE,
    alignSelf: 'center',
  },
  BottomLinkText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: WHITE,
  },
  PhoneNumberWrap: {
    textDecorationLine: 'underline',
  },
  Toast: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'red',
    paddingBottom: 8,
  },
  ToastSuccess: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'green',
    paddingBottom: 8,
  },
  HeadingLandingPage: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    width: '100%',
    marginTop: 5,
    paddingVertical: 28,
  },
  RegisterPhotoButton: {
    backgroundColor: WHITE,
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ThankYouWrapper: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
  },
  headingRegisterSuccussefully: {
    fontSize: 28,
    color: WHITE,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 5,
    textAlign: 'center',
  },
  HeadingSplashScreen: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20
  },
  BackgroundContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BLUE,
  },

});