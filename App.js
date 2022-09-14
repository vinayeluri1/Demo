// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';
 
// Import React and Component
import React from 'react';
 
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
// Import Screens

import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
 
const Stack = createStackNavigator();
 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigationRoutes">
  
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;
