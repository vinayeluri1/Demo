// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
 import Entypo from 'react-native-vector-icons/Entypo'
const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
 
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
      <Entypo  style={{fontSize:30,color:'#000'}} name='menu'/>
        {/* <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5,color:'#fff'}}
        /> */}
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
