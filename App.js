// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Details';
import MyTabs from './src/components/MyTabs';
import ExploreScreen from './src/screens/Explore';
import EditProfile from './src/screens/EditProfile';
import ListScreen from './src/screens/list';
import ReduxDataScreen from './src/screens/reduxData';
import { useState } from 'react';

const Stack = createStackNavigator();

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    // const toggleTheme = () => {
    //     setIsDarkTheme(!isDarkTheme);
    // }
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#2f2',
        //   },
        //   headerTintColor: '#000',
        //   // headerTitleStyle: {
        //   //   fontWeight: 'bold',
        //   //   fontSize: 25,
        //   // }
        // }}
        headerMode={false}
        >
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          // options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          Options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={EditProfile}
          Options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          Options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReduxData"
          component={ReduxDataScreen}
          Options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

// options={{headerShown: false}}

// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import ReduxDataScreen from './src/screens/reduxData';
// import mockMovies from './src/helper/mockMovies';

// function moviesReducer(state = mockMovies.Search, action) {
//   return state
// }

// const store = createStore(moviesReducer)

// export default () => (
//   <Provider store={store}>
//     <ReduxDataScreen />
//   </Provider>
// )