// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet, ImageBackground} from 'react-native';
 
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const CustomSidebarMenu = (props) => {
  return (
    <ImageBackground source={require('../../images/background.jpeg')}  style={stylesSidebar.sideMenuContainer}>

 
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
     
        
        <DrawerItem
          label={({color}) => 
          <View style={{flexDirection:'row'}}>
            <Entypo  style={{fontSize:20,color:'#fff'}} name='text-document'/>
            <Text style={{color: '#fff',left:20}}>
              View TimeSheets
            </Text>
          </View>
           
          }
          onPress={() => {
            props.navigation.navigate('homeScreenStack')
           
          }}
        />
         <DrawerItem
          label={({color}) => 
          <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons  style={{fontSize:20,color:'#fff'}} name='file-document-edit-outline'/>
          <Text style={{color: '#fff',left:20}}>
              Enter TimeSheets
            </Text>
        </View>
           
          }
          onPress={() => {
            props.navigation.navigate('settingScreenStack')
           
          }}
        />
         <DrawerItem
          label={({color}) => 
          <View style={{flexDirection:'row'}}>
          <EvilIcons  style={{fontSize:20,color:'#fff'}} name='lock'/>
          <Text style={{color: '#fff',left:20}}>
              Change Password
            </Text>
        </View>
            
          }
          onPress={() => {
            props.navigation.navigate('settingScreenStack')
           
          }}
        />
         <DrawerItem
          label={({color}) => 
          <View style={{flexDirection:'row'}}>
          <AntDesign  style={{fontSize:20,color:'#fff'}} name='logout'/>
          <Text style={{color: '#fff',left:20}}>
              Logout
            </Text>
        </View>
            
          }
          onPress={() => {
            props.navigation.navigate('settingScreenStack')
           
          }}
        />
       
      </DrawerContentScrollView>
    </ImageBackground>
  );
};
 
export default CustomSidebarMenu;
 
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
