import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


import * as firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNSEU0dJAK5sTaw4MLj83HKkp_myP8AvA",
  authDomain: "rmtap-66d6d.firebaseapp.com",
  projectId: "rmtap-66d6d",
  storageBucket: "rmtap-66d6d.appspot.com",
  messagingSenderId: "639111169431",
  appId: "1:639111169431:web:5d534c46eb5efb0f64f0d2",
  measurementId: "G-HPWT2QN41F"
};



if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import LoginScreen from './app/screens/LoginScreen';
import MainScreen from './app/screens/MainScreen';
import ClientsList from './app/screens/ClientsList';
import {NotesFiles} from './app/screens/NotesFiles';


const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
          this.setState({
            loggedIn: true,
            loaded: true,
          })
      }
    })
  }

  render() {

    const {loggedIn, loaded} = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  
      )
    }
    
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            
          </Stack.Navigator>
        </NavigationContainer>
      
    )
  }
}

export default App

