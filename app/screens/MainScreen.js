import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {Home} from './Home'
import { CLientList } from './ClientsList'
import { Manager } from './Manager'
import {Settings} from "./Settings"

const Tab = createBottomTabNavigator();

export class MainScreen extends Component{
    render() {
        return(
            <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === "Settings") {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === "Clients") {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === "Manager") {
            iconName = focused ? 'list' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#103143',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      
    
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Clients" component={CLientList} />
        <Tab.Screen name="Manager" component={Manager} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
        )
    }
}
export default MainScreen;