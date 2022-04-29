import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Entypo } from '@expo/vector-icons';
const Phone2 = ({navigation}) => {
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
       <Text style={styles.questions}>Top up</Text>
       <Text style={styles.questions}>Enter amount and sources of funding</Text>
   </View>
   <Text style={styles.question}>Deposit</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="N4,702"
    />
    <Entypo name="man" size={24} color="black" style={styles.searchIcon} />
</View>
<Text style={styles.question}>Choose a funding source</Text>
    <View style={styles.searchSection}>
    
    
 
    <TextInput
        style={styles.input}
        placeholder="---- ---- ----" 
    />
    <Entypo name="man" size={24} color="black" style={styles.searchIcon} />
</View>
    
 
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Target")}>
       <Text style={styles.buttonText}>Topup</Text>
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

export default Phone2;

