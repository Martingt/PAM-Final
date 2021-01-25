import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firebaseConfig from '../../config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

SignIn = (email, password, props) => {
  try {
    auth().signInWithEmailAndPassword(email, password);

    auth().onAuthStateChanged(() => {
      AsyncStorage.setItem('isLoggedIn', 'YES');

      props.navigation.navigate('DashboardScreen');
    });
  } catch (error) {
    console.log(error.toString(error));
  }
};

export default function LoginScreen(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('./../../images/Fondo.png')}
      style={{width: '100%', height: '100%'}}>
      <Image
        source={require('./../../images/Logo-Inicio.png')}
        style={styles.logoContainer}
      />
      <View style={styles.credentialContainer}>
        <TextInput
          textContentType="username"
          onChangeText={(mail) => setMail(mail)}
          placeholder="Usuario"
          placeholderTextColor="#fabd00"
          fontFamily="AvenirLTStd-Light"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
        <TextInput
          textContentType="password"
          onChangeText={(password) => setPassword(password)}
          placeholder="Contraseña"
          placeholderTextColor="#fabd00"
          fontFamily="AvenirLTStd-Light"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputBox}
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
          <Image
            source={require('./../../images/Boton-1.png')}
            style={styles.registerButton}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SignIn(mail, password, props)}>
          <Image
            source={require('./../../images/Boton-2.png')}
            style={styles.logginButton}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 5,
    justifyContent: 'center',
    resizeMode: 'center',
    //height: 1,
    marginLeft: '19.5%',
    marginBottom: '40%',
    marginTop: '20%',
    width: '60%',

    //resizeMode: 'center'
  },
  logo: {
    //resizeMode: 'center'
  },

  credentialContainer: {
    flex: 7,
  },
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
  signInButton: {
    justifyContent: 'center',
    flex: 3,
    marginTop: '50%',
  },
  registerButton: {
    justifyContent: 'center',
    width: 450,
    height: 70,
    resizeMode: 'contain',
    marginTop: '10%',
    marginLeft: '-2%',
  },
  logginButton: {
    justifyContent: 'center',
    width: 450,
    height: 70,
    resizeMode: 'contain',
    marginLeft: '-2%',
  },
});
