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
const What = ({navigation}) => {
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
    
   
   <View style={styles.question}>
       <Text>What are you saving towards</Text>
       </View>
   
      <Text style={styles.display}>Choose a categry that mathes your goal</Text>
      <View style={styles.searchSection}>
      <Ionicons name="ios-home-sharp"  size={18} color="black" />
<Text style={styles.input}>New phone</Text>

</View>
      <View style={styles.searchSection}>
      <Entypo name="save" size={18}  color="black" />
<Text style={styles.input}>House/rent</Text>

</View>
      <View style={styles.searchSection}>
      <Entypo name="database" size={18}  color="black" />
<Text style={styles.input}>Travel</Text>

</View>
      <View style={styles.searchSection}>
      <MaterialIcons name="account-balance" size={18} color="black" />
<Text style={styles.input}>Car</Text>

</View>
      <View style={styles.searchSection}>
      <FontAwesome5  name="user-clock" size={18} color="black" />
<Text style={styles.input}>Gift</Text>

</View>
      <View style={styles.searchSection}>
      <MaterialIcons name="account-balance" size={18} color="black" />
<Text style={styles.input}>Health Emergency</Text>

</View>
      <View style={styles.searchSection}>
      <Entypo name="database" size={18}  color="black" />
<Text style={styles.input}>Grow my money</Text>

</View>
      <View style={styles.searchSection}>
      <Ionicons name="person" size={24} color="black" />
      <Text onPress={()=>navigation.navigate("Set")} style={styles.input}>Create a unique safe</Text>

</View>
     

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default What;

