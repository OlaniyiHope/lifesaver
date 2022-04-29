import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Kind = ({navigation}) => {
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
       <Text style={styles.questions}>What kind of savings do you want</Text>
       <Text style={styles.questions}>Choose a category that describes it</Text>
      
   </View>
  
  <View style={styles.all}>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
  <Ionicons name="person-circle-outline" style={styles.searchIcon} size={24} color="black" />
<Text>Personal</Text>

</View>
<Text  style={styles.card}>This is your personal safe you can save as you please</Text>
<Text style={styles.tic}>N2000.00</Text>
  </View>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
  <FontAwesome name="group" size={24} color="black" />
<Text>Group safe</Text>

</View>
<Text style={styles.card}>This is your personal safe you can save as you please</Text>
<Text style={styles.tic}>N2000.00</Text>
  </View>

  </View>
  <View style={styles.all}>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
  <Ionicons name="person-circle-outline" style={styles.searchIcon} size={24} color="black" />
<Text>Thrift</Text>

</View>
<Text  style={styles.card}>This is your personal safe you can save as you please</Text>
<Text style={styles.tic}>N2000.00</Text>
  </View>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
  <FontAwesome name="group" size={24} color="black" />
<Text>Fixed safe</Text>

</View>
<Text style={styles.card}>This is your personal safe you can save as you please</Text>
<Text style={styles.tic}>N2000.00</Text>
  </View>

  </View>
      
      

  
   <View style={styles.top2}>
  
   <Ionicons name="ios-home-sharp" size={18} color="black" />
   <Entypo name="save" size={18} color="black" />
   <Entypo name="database" size={18} color="black" />
   <MaterialIcons name="account-balance" size={18} color="black" />
   <FontAwesome5 onPress={()=>navigation.navigate("What")} name="user-clock" size={18} color="black" />
    
   </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Kind;

