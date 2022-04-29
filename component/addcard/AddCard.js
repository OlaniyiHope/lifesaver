import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const AddCard = ({navigation}) => {
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
       <Text style={styles.questions}> Add Debit Card</Text>
   </View>
   <View>
   <Text style={styles.question}>Card Number</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Expiry Date </Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    <Text style={styles.question}>CCV </Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    
  
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Bank")}>
       <Text style={styles.buttonText}>Save Changes</Text>
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

export default AddCard;

