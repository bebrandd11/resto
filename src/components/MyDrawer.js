import React from 'react';

//Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent/DrawerContent'


//import screens
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import ExploreScreen from '../screens/Explore';
import ProfileScreen from '../screens/profile';
import ListScreen from '../screens/list';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Explore" component={ExploreScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="List" component={ListScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

// drawerContent={props => <DrawerContent {...props} />}