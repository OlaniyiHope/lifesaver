import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Name = ({navigation}) => {
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
       <Text style={styles.questions}>Sign Up to LifeSaver</Text>
   </View>
   <Text style={styles.question}>Full Name</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Tajudin Kamaro"
    />
    <Ionicons name="person-circle-outline" style={styles.searchIcon} size={24} color="black" />
</View>
<Text style={styles.question}>Email</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Tajudeen@gmail.com"
    />
  <MaterialCommunityIcons name="email-multiple" style={styles.searchIcon} size={24} color="black" />
</View> 
<Text style={styles.question}>Phone Number</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="+2346638030493"
    />
    <FontAwesome name="phone-square" style={styles.searchIcon} size={24} color="black" />
</View> 
<Text style={styles.question}>Password</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="******"
    />
    <MaterialCommunityIcons name="onepassword" style={styles.searchIcon} size={24} color="black" />
</View> 
<Text style={styles.question}>Repeat password</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="******"
    />
    <MaterialCommunityIcons name="onepassword" style={styles.searchIcon} size={24} color="black" />
</View>
<Text style={styles.question6}>I agree to the terms and conditions</Text>
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Verify")}>
       <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   
   <Text style={styles.question6}>Already a user? Sign In</Text>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Name;

