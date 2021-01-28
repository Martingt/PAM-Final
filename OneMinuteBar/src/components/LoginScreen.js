import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  StatusBar,
  KeyboardAvoidingView,
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
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      AsyncStorage.setItem('isLoggedIn', 'YES');
      props.navigation.navigate('DashboardScreen');
    })
    .catch((error) => {
      props.navigation.navigate('LoginScreen');
      AsyncStorage.setItem('isLoggedIn', 'NO');
    });
};

export default function LoginScreen(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="position">
      <ImageBackground
        source={require('./../../images/Fondo.png')}
        style={{width: '100%', height: '100%'}}>
        <Image
          source={require('./../../images/Logo-Inicio.png')}
          style={styles.logoContainer}
        />
        <StatusBar barStyle="light-content" />
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Auth')}
            style={styles.registerButton}>
            <Image
              source={require('./../../images/Boton-1.png')}
              style={styles.registerButtonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SignIn(mail, password, props)}
            style={styles.logginButton}>
            <Image
              source={require('./../../images/Boton-2.png')}
              style={styles.logginButtonImage}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center"s
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 5,
    //justifyContent: 'center',
    resizeMode: 'contain',
    //height: null,
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
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
    marginTop: '15%',
  },
  registerButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logginButton: {
    width: '100%',
    height: '20%',
  },
  logginButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
