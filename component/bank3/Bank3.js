import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Bank3 = ({navigation}) => {
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
       <Text style={styles.questions}> Bank</Text>
   </View>
   <View>
   <Text style={styles.question}>Account Number</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Select your Bank </Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    
  
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Pid")}>
       <Text style={styles.buttonText}>Save Changes</Text>
    </TouchableOpacity>
   
   
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Pid")}>
       <Text style={styles.buttonText}>Delete bank</Text>
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

export default Bank3;

