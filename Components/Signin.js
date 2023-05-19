
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
  ImageBackground,Image,TouchableOpacity,useState
} from 'react-native';

import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from 'react-native-google-signin';

import React, { Component } from 'react'
import Home from './Components/Home'


  
  Signin = async () => {
    GoogleSignin.configure({
      webClientId: '749231108763-37ge54j4uo24chjm12qeepbhqsns78hm.apps.googleusercontent.com',
      androidClientID:'749231108763-lasicuepkieli7raqdg6j090imnp0mgg.apps.googleusercontent.com',
      offlineAccess:true,
    });
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      if(loggedIn==true)
      <Home/>
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  

  export default Siginin