import React from 'react';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import screens
import HomeScreen from '../screens/Home';
// import DetailsScreen from '../screens/Details';
import MyDrawer from './MyDrawer';
import ExploreScreen from '../screens/Explore';
import ProfileScreen from '../screens/profile';
import ListScreen from '../screens/list';

//Icon Path
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const ACTIVE_TAB_COLOR = '#284AAD';
const INACTIVE_TAB_COLOR = '#1C1A2E';


const MyTabs = () => {
  return (
    <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            keyboardHidesTabBar: true,
            activeBackgroundColor: '#6AAFE6',
            inactiveBackgroundColor: '#CADBE9',
            style: {
                height: 65,
                // paddingTop: 16,
            },
            labelStyle: {
                fontSize: 14,
                marginVertical: 5,
            },
        }}    
    >
      <Tab.Screen
        name="Home"
        component={MyDrawer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Entypo 
                name="home" 
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} 
            />
          ),
        }}
      />
      {/* <Tab.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="profile"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        /> */}
      <Tab.Screen 
        name="Explore" 
        component={ExploreScreen} 
        options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <Feather
                name="user"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
      <Tab.Screen 
        name="List" 
        component={ListScreen} 
        options={{
            tabBarLabel: 'List',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="ios-list-circle-outline"
                size={30}
                style={{paddingTop: 8}}
                focused={focused}
                color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
};

export default MyTabs;
