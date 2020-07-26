import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';

import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo1.png')} />
        <Text style={styles.logoline}>Sell &amp; Buy Online For Free</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login'></AppButton>
        <AppButton title='Register' color='secondary'></AppButton>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 160,
    height: 100,
    alignItems: 'center',
  },
  logo: {
    width: 43,
    height: 76,
    marginBottom: 0,
  },
  logoline: {
    fontSize: 25,
    fontWeight: '400',
    paddingVertical: 20,
  },
});
