import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Entypo } from '@expo/vector-icons';
const Setrift2 = ({navigation}) => {
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
       <Text style={styles.questions}>Set up your thrift</Text>
       <Text style={styles.questions}>Set how'd like to save</Text>
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
 <Text style={styles.question}>Position in thrift</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Position in thrift"
    />
</View>
 <Text style={styles.question}>Withdrawer amount</Text>
    <View style={styles.searchSection}>

    
 
    <TextInput
        style={styles.input}
        placeholder="Withdrawer Amount"
    />
</View>
 
   <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Airtime")}>
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

export default Setrift2;

