import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import LoadingScreen from './components/LoadingScreen';
import DashboardScreen from './components/DashboardScreen';
import SignUpScreen from './components/SingUpScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={(header = null)}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={(header = null)}
      />
      <Stack.Screen name="Auth" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: 'gray',
  },
  logo: {
    flex: 2,
    backgroundColor: 'red',
  },
  signInForm: {
    flex: 3,
    backgroundColor: 'green',
  },
});
