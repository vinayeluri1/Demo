import React, { Component } from 'react';
 
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign'
 import DropDownPicker from 'react-native-dropdown-picker'
class Expandable_ListView extends Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      layout_Height: 0
 
    }
  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }
 
  show_Selected_Category = (item) => {
 
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
 
  }
 
  render() {
    return (
      <View >
        {/* <View style={{width:'5%',}}><Text>{this.props.onClickFunction}</Text></View> */}
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
          <View>
          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>
          <View style={styles.category_View1}>
          <Text style={styles.category_Text}>{this.props.item.Startdate} </Text>
          <Text style={[styles.category_Text,{left:100}]}>{this.props.item.endDate} </Text>
          </View>
          
          </View>
          
          
 
         <AntDesign style={{right:20}} size={20} name='down'/>
 
        </TouchableOpacity>
 
        <View style={[styles.category_View,{ height: this.state.layout_Height, overflow: 'hidden',bottom:20 }]}>
        <View style={{padding:10}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:'50%'}}>
                    <Text style={{fontWeight:'700'}}>Regular hours</Text>
                    <Text >{this.props.item.Hours}</Text>
                  </View>
                  <View style={{width:'50%'}}>
                    <Text style={{textAlign:'right',fontWeight:'700'}}>Total hours</Text>
                    <Text style={{textAlign:'right',}}>{this.props.item.totalHours}</Text>
                  </View>
                  
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                  <Text style={{fontWeight:'700'}}>Employe Remarks</Text>
                 
                  </View>
                  <View style={{width:'50%'}}>
                  <Text style={{textAlign:'right',fontWeight:'700'}}>Submited Date</Text>
                  <Text style={{textAlign:'right',}}>{this.props.item.submitDate}</Text>
                  </View>
                  
                </View>
                
                  
                </View>
              </View>
          {/* {
            this.props.item.sub_Category.map((item, key) => (
              <View>
                <View>
                  <Text>Regular hours</Text>
                  <Text></Text>
                </View>
                <View>
                  <Text></Text>
                  <Text></Text>
                </View>
              </View>
              // <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>
 
              //   <Text> {item.name} </Text>
 
               
 
              // </TouchableOpacity>
 
            ))
          } */}
 
        </View>
 
      </View>
 
    );
  }
}
 
export default class App extends Component {
 
  constructor() {
    super();
 
    if (Platform.OS === 'android') {
 
      UIManager.setLayoutAnimationEnabledExperimental(true)
 
    }
 
    const array = [
 
      {
        expanded: false, category_Name: "HCL",Startdate:'14-09-2022', endDate:'16-09-2022',Hours:'43:00',totalHours:'43:00',submitDate:'06-01-2022', sub_Category: [{ id: 1, name: 'Mi' }, { id: 2, name: 'RealMe' }, { id: 3, name: 'Samsung' },
        { id: 4, name: 'Infinix' }, { id: 5, name: 'Oppo' }, { id: 6, name: 'Apple' }, { id: 7, name: 'Honor' }]
      },
 
      {
        expanded: false, category_Name: "HCL",Startdate:'14-09-2022', endDate:'16-09-2022',Hours:'43:00',totalHours:'43:00',submitDate:'06-01-2022', sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
        { id: 11, name: 'ASUS' }]
      },
 
      {
        expanded: false, category_Name: "HCL", Startdate:'14-09-2022', endDate:'17-09-2022',Hours:'43:00',totalHours:'43:00',submitDate:'06-01-2022', sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
        { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
      },
 
      {
        expanded: false, category_Name: "HCL", Startdate:'14-09-2022', endDate:'16-09-2022',Hours:'43:00',totalHours:'43:00',submitDate:'06-01-2022', sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
        { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
      },
      
    ];
 
    this.state = { AccordionData: [...array] }
  }
 
  update_Layout = (index) => {
 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
    const array = [...this.state.AccordionData];
 
    array[index]['expanded'] = !array[index]['expanded'];
 
    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
 
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          <View style={{flexDirection:'row'}}>
          <Text style={{padding:10,}}>Status</Text>
          <AntDesign style={{padding:13}} size={15} name='down'/>
          </View>
          
          <View style={{bottom:10,height:2,backgroundColor:'gray',width:'20%',left:8}}></View>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },
 
  iconStyle: {
 
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'
 
  },
 
  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },
 
  category_Text: {
    textAlign: 'left',
    color: '#000',
    fontSize: 16,
     padding: 5
  },
 
  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#52006A',
  },
  category_View1: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
 
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
 
});