import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';



import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import LoginScreen from './app/screens/LoginScreen';
import MainScreen from './app/screens/MainScreen';
import ClientsList from './app/screens/ClientsList';
import {NotesFiles} from './app/screens/NotesFiles';


const Stack = createStackNavigator();

export class App extends Component {
 

  render() {

  
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

