import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {firebase} from '@react-native-firebase/app';
import firebaseConfig from './../../config';

export default function LoadingScreen(props) {
  useEffect(() => {
    try {
      AsyncStorage.getItem('isLoggedIn').then((value) => {
        if (value && value === 'YES') {
          //(Hide it once you get value from this)
          props.navigation.navigate('DashboardScreen');
        } else {
          props.navigation.navigate('LoginScreen');
        }
      });
    } catch (e) {
      // error reading value
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
