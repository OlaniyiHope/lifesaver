import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Debit1 = ({navigation}) => {
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
       <Text style={styles.questions}>Debit Cards</Text>
   </View>
   <View>

   <TextInput style = {styles.input}
               placeholder = "---- ---- ---- ---- ----"/>
   
   <TextInput style = {styles.input}
               placeholder = "---- ---- ---- ----"/>
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Debit")}>
       <Text style={styles.buttonText}>Add New Card</Text>
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

export default Debit1;

