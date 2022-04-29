import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Identity = ({navigation}) => {
    let data = [
        {label: 'Why cant i', value: '1'},
        {label: 'How can i', value: '2'},
        {label: 'What is the', value: '3'},
        {label: 'How do i', value: '4'},
        {label: 'Why cant i', value: '5'},
   
    ];

    return(
<View style={styles.container}>
   <View style={styles.top}>
       <Text style={styles.questions}> Personal Identity</Text>
   </View>
   <View>
   <Text style={styles.question}>BVN</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Valid ID </Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    <Text style={styles.question}>Password</Text>
  
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Bank")}>
       <Text style={styles.buttonText}>Update KYC</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
  
  
 
    </View>


    )
}

export default Identity;

