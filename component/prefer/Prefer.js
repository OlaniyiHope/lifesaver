import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Prefer = ({navigation}) => {
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
       <Text style={styles.questions}>Preferences</Text>
     
   </View>
   <View>
   <Text style={styles.question}>Investment title</Text>
   <TextInput style = {styles.input}
               placeholder = "GTCO"/>
    <Text style={styles.question}>Preferred frequency</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
    <Text style={styles.question}>Investment Date</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
    <Text style={styles.question}>Amount to invest(monthly)</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
   
    <Text style={styles.question}>Returns and payout</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
   
    <Text style={styles.question}>Choose a funding source</Text>
   <TextInput style = {styles.input}
               placeholder = "*********"/>
   
   
    
    
    
   </View>

   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Welcome")}>
       <Text style={styles.buttonText}>Continue</Text>
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

export default Prefer;

