import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
const WithDraw = ({navigation}) => {
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
       <Text style={styles.questions}> WithDraw</Text>
   </View>
   <View style={styles.top2}>
       <Text style={styles.questions2}> Enter Amount and destination of funding</Text>
   </View>
   <View>
   <Text style={styles.question}>Amount to WithDraw</Text>
   <TextInput style = {styles.input}
               placeholder = "Email"/>
    <Text style={styles.question}>Choose a funding destination </Text>
   <TextInput style = {styles.input}
               placeholder = "Phone Number"/>
    
  
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Header")}>
       <Text style={styles.buttonText}>WithDraw</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
  
  
 
    </View>


    )
}

export default WithDraw;

