import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Idv = ({navigation}) => {
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
       <Text style={styles.questions}>Identity Verification</Text>
       <Text style={styles.questions2}>Help up verify your account by providing the following</Text>
   </View>
   <View>
   <Text style={styles.question}>BVN</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Upload Valid ID </Text>
   <TextInput style = {styles.input3}
               placeholder = "Phone Number"/>
   
  
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Act")}>
       <Text style={styles.buttonText}>Verify</Text>
    </TouchableOpacity>
   
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   
       <Text style={styles.buttonText2}>Skip for now</Text>
  
   

  
  
 
    </View>
 </ScrollView>
 </SafeAreaView>

    )
}

export default Idv;

