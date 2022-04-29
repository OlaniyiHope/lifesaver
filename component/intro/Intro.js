import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const Intro = ({navigation}) => {
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
       <Text style={styles.questions}>  Next of Kin</Text>
   </View>
   <View>
   <Text style={styles.question}>Next of Kin</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Relationship</Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    <Text style={styles.question}>Next of Kin Email</Text>
   <TextInput style = {styles.input}
               placeholder = "Password"/>
    <Text style={styles.question}>Next of Kin Email</Text>
   <TextInput style = {styles.input}
               placeholder = "Password"/>
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Identity")}>
       <Text style={styles.buttonText}>Submit</Text>
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

export default Intro;

