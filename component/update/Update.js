import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Feather } from '@expo/vector-icons'; 
const Update = ({navigation}) => {
    let data = [
        {label: 'Why cant i', value: '1'},
        {label: 'How can i', value: '2'},
        {label: 'What is the', value: '3'},
        {label: 'How do i', value: '4'},
        {label: 'Why cant i', value: '5'},
   
    ];

    return(
        <SafeAreaView>
      <ScrollView>
<View style={styles.container}>

   <View style={styles.top}>
       <Text style={styles.questions}>Update password</Text>
   </View>
  
   <Text>Current Password</Text>
      <View style={styles.searchSection}>
      
      
<TextInput
    style={styles.input}
    placeholder="Full Name"
/>

<Feather name="eye-off" size={16} color="black" />
</View>
   <Text>New Password</Text>
      <View style={styles.searchSection}>
      
      
<TextInput
    style={styles.input}
    placeholder="Full Name"
/>

<Feather name="eye-off" size={16} color="black" />
</View>
   <Text>Repeat Password</Text>
      <View style={styles.searchSection}>
      
      
<TextInput
    style={styles.input}
    placeholder="Full Name"
/>

<Feather name="eye-off" size={16} color="black" />
</View>
  

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Two")}>
       <Text style={styles.buttonText}>Update Password</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Update;

