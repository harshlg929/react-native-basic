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

});