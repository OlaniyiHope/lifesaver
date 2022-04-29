import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Entypo } from '@expo/vector-icons';
const Reset = ({navigation}) => {
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
       <Text style={styles.questions}>Reset Password</Text>
       <Text style={styles.question3}>Enter your account verified email address and we will 
       send you a Password code</Text>
   </View>
   <Text style={styles.question}>Email</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="---- ---- ----"
    />
</View>
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Change")}>
       <Text style={styles.buttonText}>Verify</Text>
    </TouchableOpacity>
   
    
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
  
   <Text style={styles.question4}>Didn't get the code ?</Text>
   <Text style={styles.question5}>Resend code in 3 seconds</Text>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
  
    )
}

export default Reset;

