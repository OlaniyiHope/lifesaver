import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Finish = ({navigation}) => {
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
       <Text style={styles.questions}>Finish setting up your Thrift</Text>
       <Text style={styles.questions6}> Set how you wantto fuund your safe</Text>
   </View>
   <View>
   <Text style={styles.question}>Debit Card</Text>
   <TextInput style = {styles.input}
               placeholder = "Anti-Sapa"/>
    <Text style={styles.question}>Enter your password to confirm</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
    
    
    
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Success")}>
       <Text style={styles.buttonText}>Create Saving</Text>
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

export default Finish;

