/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ImageBackground,Image,TouchableOpacity
} from 'react-native';
import Signin from './Components/Signin';





const App = () => {
 
  return (
    <View style={styles.container}>
           <ImageBackground
                 source={require('./images/Screen1BG.png')}
                 style={styles.backgroundImage}
            >
          <View style={styles.logoContainer}>
                <Image
                    source={require('./images/Logo.png')}
                    style={styles.logoImage}
                />
          </View>
          <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={Signin}
    >
      <View style={styles.buttonContent}>
        <Image
          source={require('./images/google_logo.png')}
          style={styles.googleLogo}
        />
        <Text style={styles.buttonText}>           Sign in with Google</Text>
      </View>
    </TouchableOpacity>
    </View>
  
           </ImageBackground>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
   
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
    
  },
  logoImage: {
    aspectRatio: 1,

  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 50,
  },
  button: {
   
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
   
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 30,
  },
});



export default App;
