import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
const Sign = ({navigation}) => {
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
       <Text style={styles.questions}> Sign in to life saver</Text>
   </View>
   <Text style={styles.question}>Username/Email</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Username"
    />
         <Ionicons style={styles.searchIcon} name="person" size={24} color="black" />
</View>
<Text style={styles.question}>Password</Text>
    <View style={styles.searchSection}>
    
    
 
    <TextInput
        style={styles.input}
        placeholder="*******" 
    />
   <Feather style={styles.searchIcon} name="eye-off" size={24} color="black" />

</View>
    <Text style={styles.question3}>Forgot Password ?</Text>
    
 
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Forgot")}>
       <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
   
    
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   <Text style={styles.question}>Not a user?</Text>
   <Text style={styles.question3}>Create a new account</Text>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
  
    )
}

export default Sign;

