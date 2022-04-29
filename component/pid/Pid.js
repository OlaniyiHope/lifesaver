import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Pid = ({navigation}) => {
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
       <Text style={styles.questions}>Personal Identification</Text>
   </View>
   <View>
  
    <Text style={styles.question}>BVN </Text>
   <TextInput style = {styles.input}
               placeholder = "Tajorii"/>
    <Text style={styles.question}>Upload valid Id</Text>
   <TextInput style = {styles.input}
               placeholder = "+234 60 50 49 30"/>
    <Text style={styles.question}>Enter your Password </Text>
   <TextInput style = {styles.input}
               placeholder = "*******"/>
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Pid2")}>
       <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   
   <Text style={styles.question}>Already a user? Sign In</Text>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Pid;

