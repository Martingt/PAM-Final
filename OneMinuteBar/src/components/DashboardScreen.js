import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {firebase} from '@react-native-firebase/app';

class DashboardScreen extends Component {
  logout = () => {
    AsyncStorage.clear();

    this.props.navigation.navigate('LoginScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('./../../images/Fondo.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.topText}>
            <View style={{flex: 1}} />
            <Text style={styles.presentation}>
              Vamos a descubrir tu bar en un minuto!
            </Text>
            <View style={{flex: 1}} />
          </View>
          <View style={styles.centralMenu}>
            <View style={{flex: 1}}></View>
            <View
              style={{
                flex: 1,
              }}></View>
            <View style={styles.ubicacionOption}>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style={styles.menuImage}
                  source={require('./../../images/Icono-Ubicacion.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Ubicación</Text>
            </View>
            <View style={styles.tragosOption}>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style={styles.menuImage}
                  source={require('./../../images/Icono-tragos.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Tragos</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}></View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>
          <View style={styles.centralMenu}>
            <View
              style={{
                flex: 1,
              }}></View>
            <View
              style={{
                flex: 1,
              }}></View>
            <View style={styles.barOption}>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style={styles.menuImage}
                  source={require('./../../images/Icono-Bar.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Bar</Text>
            </View>
            <View style={styles.dDOption}>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style={styles.menuImage}
                  source={require('./../../images/Icono-descubrimiento.png')}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Descubrimiento diario</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}></View>
            <View
              style={{
                flex: 1,
              }}></View>
          </View>
          <View style={{flex: 0.5}}></View>

          <View style={styles.bottomMenu}>
            <TouchableOpacity
              onPress={() => this.logout()}
              style={styles.button}>
              <Image
                style={styles.image}
                source={require('./../../images/IconoA-amarillo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.image}
                source={require('./../../images/IconoB-amarillo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.image}
                source={require('./../../images/IconoC-amarillo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.image}
                source={require('./../../images/IconoD-amarillo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.image}
                source={require('./../../images/IconoE-amarillo.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',
  },
  topText: {
    flex: 7,
    flexDirection: 'row',
  },
  centralMenu: {
    flex: 4.5,
    flexDirection: 'row',
    // backgroundColor: 'yellow'
  },
  bottomMenu: {
    flex: 2.25,
    flexDirection: 'row',
    borderTopColor: '#fabd00',
    borderWidth: 2,
  },
  button: {
    flex: 1,
    width: 5,
    height: 5,
    //resizeMode: 'contain',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 100,
    resizeMode: 'contain',
  },
  menuImage: {
    flex: 1,
    resizeMode: 'contain',

    marginLeft: '10%',
    width: '80%',
    height: null,
  },
  text: {
    color: '#fabd00',
    fontFamily: 'AvenirLTStd-Light',
    textAlign: 'center',

    fontSize: 20,
  },
  presentation: {
    flex: 4,
    marginTop: '53%',
    color: 'white',
    fontFamily: 'AvenirLTStd-Light',
    textAlign: 'center',
    fontSize: 26,
  },
  barOption: {
    flex: 9,

    borderRightColor: 'grey',

    borderRightWidth: 1,
  },
  ubicacionOption: {
    flex: 9,
    borderBottomColor: 'grey',
    borderRightColor: 'grey',
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  tragosOption: {
    flex: 9,
    borderBottomColor: 'grey',
    //borderRightColor: 'grey',
    borderBottomWidth: 1,
  },
  dDOption: {
    flex: 9,

    //borderRightColor: 'grey',
  },
});
