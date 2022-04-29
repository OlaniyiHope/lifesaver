import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, TextInput, Switch, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Total2 = ({navigation}) => {
    let data = [
        {label: 'Why cant i', value: '1'},
        {label: 'How can i', value: '2'},
        {label: 'What is the', value: '3'},
        {label: 'How do i', value: '4'},
        {label: 'Why cant i', value: '5'},
   
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <SafeAreaView>
      <ScrollView>
<View style={styles.container}>
 
   <View style={styles.top}>
       <Text style={styles.questions}>Total Savings</Text>
       <Text style={styles.questions}>Balance: N1.00</Text>
      
   </View>
   
   <View style={styles.top3}>
  
   <Text style={styles.question1}>Group</Text>
   <Text style={styles.question1}>Personal</Text>
   <Text style={styles.question1}>Thrift</Text>
   <Text style={styles.question1}>Savings</Text>
 
   
  </View>
  <View style={styles.nop}>
  <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
 
<Text style={styles.no}>No saving here, create a wonderful savings</Text>
</View>
   <View style={styles.top2}>
  
   <Ionicons name="ios-home-sharp" size={18} color="black" />
   <Entypo name="save" size={18} color="black" />
   <Entypo name="database" size={18} color="black" />
   <MaterialIcons name="account-balance" size={18} color="black" />
   <FontAwesome5 onPress={()=>navigation.navigate("Kind")} name="user-clock" size={18} color="black" />
    
   </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Total2;

