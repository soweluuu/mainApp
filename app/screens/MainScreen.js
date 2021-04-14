import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from '../redux/actions/index'

import {Home} from './Home'
import ClientsList from "./ClientsList"
import { Manager } from './Manager'
import {Settings} from "./Settings"
import {Profile} from "./Profile"
import {Portfolio} from "./Portfolio"
import {Tasks} from "./Tasks"
import {Market} from './Market'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

function HomeTopBars({ state, descriptors, navigation }) {
  return (
    <View style={{ backgroundColor: 'white', height:150, justifyContent:"flex-end",alignItems:"flex-start", }}>
        <Text style={{ color: '#103143',fontFamily: 'Futura',fontWeight: 'bold',fontSize: 22,marginBottom: 20, paddingLeft: 30}}>
            Dashboard
        </Text>

       <View style={{flexDirection: "row", paddingHorizontal: 20, alignItems: 'center',justifyContent: 'space-between',backgroundColor: 'white' }}>
       {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center", backgroundColor: 'white' }}
          >
            <View style={{ backgroundColor: isFocused ? '#95DBFB' : 'white', borderRadius: 14, width: 110, height: 28, justifyContent: "center", alignItems:"center"}}>
            <Text style={{ color: isFocused ? 'white' : '#103143', fontFamily: "Futura-Medium", fontSize: 18,}}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
            
        </View>
    </View>
);
}

function ManagerTopBars({ state, descriptors, navigation }) {
  return (
    <View style={{ backgroundColor: 'white', height:150, justifyContent:"flex-end",alignItems:"flex-start", }}>
        <Text style={{ color: '#103143',fontFamily: 'Futura',fontWeight: 'bold',fontSize: 22,marginBottom: 20, paddingLeft: 30}}>
            Manager
        </Text>

       <View style={{flexDirection: "row", paddingHorizontal: 20, alignItems: 'center',justifyContent: 'space-between',backgroundColor: 'white' }}>
       {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center", backgroundColor: 'white' }}
          >
            <View style={{ backgroundColor: isFocused ? '#95DBFB' : 'white', borderRadius: 14, width: 110, height: 28, justifyContent: "center", alignItems:"center"}}>
            <Text style={{ color: isFocused ? 'white' : '#103143', fontFamily: "Futura-Medium", fontSize: 18,}}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
            
        </View>
    </View>
);
}

function ProfileTopBars({ state, descriptors, navigation }) {
  return (
    <View style={{ backgroundColor: 'white', height:150, justifyContent:"flex-end",alignItems:"flex-start", }}>
        <Text style={{ color: '#103143',fontFamily: 'Futura',fontWeight: 'bold',fontSize: 22,marginBottom: 20, paddingLeft: 30}}>
            Profile
        </Text>

       <View style={{flexDirection: "row", paddingHorizontal: 20, alignItems: 'center',justifyContent: 'space-between',backgroundColor: 'white' }}>
       {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center", backgroundColor: 'white' }}
          >
            <View style={{ backgroundColor: isFocused ? '#95DBFB' : 'white', borderRadius: 14, width: 110, height: 28, justifyContent: "center", alignItems:"center"}}>
            <Text style={{ color: isFocused ? 'white' : '#103143', fontFamily: "Futura-Medium", fontSize: 18,}}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
            
        </View>
    </View>
);
}

function HomeTabComponent(props) {
  return (
      <TopTabs.Navigator tabBar={props => <HomeTopBars {...props} />}>
   <TopTabs.Screen name="News" component={Home} />
   <TopTabs.Screen name="Market" component={Market} />
 </TopTabs.Navigator>
);
};

function ManagerTabComponent(props) {
  return (
      <TopTabs.Navigator tabBar={props => <ManagerTopBars {...props} />}>
   <TopTabs.Screen name="Notifications" component={Manager} />
   <TopTabs.Screen name="Tasks" component={Tasks} />
 </TopTabs.Navigator>
);
};

function ClientTabComponent(props) {
  return (
      <TopTabs.Navigator tabBar={props => <ProfileTopBars {...props} />}>
   <TopTabs.Screen name="Overview" component={Profile} />
   <TopTabs.Screen name="Portfolio" component={Portfolio} />
 </TopTabs.Navigator>
);
};

function CreateListStack() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false
      }} >
    <Stack.Screen name="Clients" component={ClientsList} />
    <Stack.Screen name="Profile" children={ClientTabComponent}/>
  </Stack.Navigator>
  )
  
}

export class MainScreen extends Component{

componentDidMount() {
  this.props.fetchUser()
}

    render() {
        return (
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
        <Tab.Screen name="Home" component={HomeTabComponent} />
        <Tab.Screen name="Clients" component={CreateListStack}  />
        <Tab.Screen name="Manager" children={ManagerTabComponent} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
        )
    }
}

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(null, mapDispatchProps)(MainScreen)