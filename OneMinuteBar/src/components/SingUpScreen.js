import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Image,
  Text,
} from 'react-native';
import React, {Component} from 'react';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './../../config';
import createStackNavigator from '@react-navigation/stack';

export default class SingUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('./../../images/Fondo.png')}
        style={{width: '100%', height: '100%'}}>
        <TextInput
          ttextContentType="name"
          onChangeText={(name) => this.setState({name})}
          placeholder="Nombre"
          placeholderTextColor="#fabd00"
          fontFamily="AvenirLTStd-Light"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />

        <TextInput
          textContentType="emailAddress"
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          placeholderTextColor="#fabd00"
          fontFamily="AvenirLTStd-Light"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
        <TextInput
          textContentType="password"
          onChangeText={(password) => this.setState({password})}
          placeholder="Contraseña"
          placeholderTextColor="#fabd00"
          fontFamily="AvenirLTStd-Light"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
        <TouchableOpacity
          onPress={() => this.SignUp(this.state.email, this.state.password)}>
          <Image
            source={require('./../../images/Boton-1.png')}
            style={styles.registerButton}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#fabd00',
    color: '#fabd00',
    // alignItems: 'center',
    fontSize: 23,
    marginTop: '3%',

    marginLeft: '15%',
    height: '12%',
    width: '70%',
  },
  registerButton: {
    justifyContent: 'center',
    width: 450,
    height: 70,
    resizeMode: 'contain',
    marginTop: '10%',
    marginLeft: '-2%',
  },
});
