import { useState,useReducer } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';

const ACTIONS = {
  NAME:"setnameinput",
  EMAIL:"setemailinput",
  NUMBER:"setnumberinput",
  MESSAGE:"setmessageinput",
  AGREE:"agreeTerms",
  SUCCESS:"submitSucessfully"
}

const reducer = (state,{type,payload}) => {
  switch(type){
    case ACTIONS.NAME:
        return {
          ...state,
          name:payload
        }
     case ACTIONS.EMAIL:
        return{
           ...state,
          email:payload
        }   
     case ACTIONS.NUMBER:
        return{
           ...state,
          number:payload
        }   
     case ACTIONS.MESSAGE:
        return{
           ...state,
          message:payload
        }   
      case ACTIONS.AGREE:
      return {
        ...state,
        agree:!state.agree
      }  
      case ACTIONS.SUCCESS:
      return{
        ...state,
        name:"",
        email:"",
        number:"",
        message:"",
      }
    default:
        return state
  }
} 

const initialState={
  name:"",
  email:"",
  message:"",
  number:"",
  agree:false
}

const Contact = ({ navigation }) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const {name,email,message,number,agree} = state;

  const submitForm = () => {
    if (!name ?? !email ?? !phone) {
      Alert.alert('Please fill al the fields');
    } else {
      dispatch({
        type:ACTIONS.SUCCESS
      })
    }
    setTimeout(() => {
      Alert.alert(`Thank you ${name}`);
      navigation.navigate('Home');
    },1000)
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Feel free to contact us</Text>
      <Text style={styles.description}>
        You can contact us anytime via tk@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Your name'}
          value={name}
          onChangeText={(nametext) => dispatch({
            type:ACTIONS.NAME,payload:nametext
          })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Your email'}
          value={email}
          onChangeText={(emailtext) => dispatch({
            type:ACTIONS.EMAIL,payload:emailtext
          })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Your number'}
          value={number}
          onChangeText={number => dispatch({
            type:ACTIONS.NUMBER,payload:number
          })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can we help you ?</Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={'Tell us about yourself'}
          numberOfLines={5}
          multiline={true}
          value={message}
          onChangeText={message => dispatch({
            type:ACTIONS.MESSAGE,payload:message
          })}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => dispatch({
            type:ACTIONS.AGREE,payload:agree
          })}
          color={agree ? '#4630EB' : undefined}
        />
        <Text style={styles.wrapperText}>
          I agree all the terms and conditions
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submitForm}>
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingVertical: 15,
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold',
    textTransform: 'capitalize',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    lineHeight: 25,
    marginBottom: 3,
    fontFamily: 'Nunito_600SemiBold',
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'Nunito_700Bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.7)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    fontFamily: 'Nunito_700Bold',
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Contact;
