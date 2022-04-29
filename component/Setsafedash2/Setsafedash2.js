import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Entypo } from '@expo/vector-icons';
const Setsafedash2 = ({navigation}) => {
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
       <Text style={styles.questions}>Set up your safe</Text>
       <Text style={styles.questions}>Choose a category that matches your goal</Text>
   </View>
   <Text style={styles.question}>Debit day</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Debit day"
    />
    
</View>
<Text style={styles.question}>Start date</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Start date"
    />
 
</View> 
<Text style={styles.question}>Stop date</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="stop date"
    />

</View>
 <Text style={styles.question}>Withdraw type</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Withdrawer type"
    />
</View>
 <Text style={styles.question}>Withdraw account</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Withdrawer type"
    />
</View>
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Total")}>
       <Text style={styles.buttonText}>Create savings</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
   
   <Text style={styles.question6}>Already a user? Sign In</Text>
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Setsafedash2;

