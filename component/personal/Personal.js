import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, ScrollView, SafeAreaView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Label from "react-native-label";
import styles from './style';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Personal = ({navigation}) => {
    let data = [
        {label: 'Why cant i', value: '1'},
        {label: 'How can i', value: '2'},
        {label: 'What is the', value: '3'},
        {label: 'How do i', value: '4'},
        {label: 'Why cant i', value: '5'},
   
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <SafeAreaView>
      <ScrollView>
      
<View style={styles.container}>

    
    <View style={styles.top}>
       <Text style={styles.questions}>Personal Information</Text>
       
    
   </View>
  
   <View style={styles.circ}>
  
  <Text style={styles.ctext}>TK</Text>
  </View>
  <Text style={styles.questions2}>Tap to change</Text>
   <Text>Full Name</Text>
      <View style={styles.searchSection}>
      
      
<TextInput
    style={styles.input}
    placeholder="Full Name"
/>

<Ionicons name="person" style={styles.searchIcon} size={24} color="black" />
</View>
<Text style={styles.back}>Email</Text>
      <View style={styles.searchSection}>
     
<TextInput
    style={styles.input}
    placeholder="Email Address"
/>
<MaterialCommunityIcons  name="email-multiple" style={styles.searchIcon} size={24} color="black" />

</View>
<Text style={styles.back}>User Name</Text>
      <View style={styles.searchSection}>
      
      
<TextInput
    style={styles.input}
    placeholder="Full Name"
/>

<Ionicons name="person" style={styles.searchIcon} size={24} color="black" />
</View>
<Text style={styles.back}>phone number</Text>
      <View style={styles.searchSection}>
     
<TextInput
    style={styles.input}
    placeholder="Phone number"
/>
<FontAwesome name="phone-square" style={styles.searchIcon} size={24} color="black" />

</View>
<Text style={styles.back}>Password</Text>
      <View style={styles.searchSection}>
     
<TextInput
    style={styles.input}
    placeholder="passsword"
/>
<MaterialCommunityIcons name="onepassword" style={styles.searchIcon} size={24} color="black" />

</View>
<Text style={styles.back}>country</Text>
      <View style={styles.searchSection}>
   
<TextInput
    style={styles.input}
    placeholder="country"
/>
<MaterialIcons name="place" size={24} color="black" />

</View>

  
   <View style={styles.top2}>
  
   <Ionicons name="ios-home-sharp" size={18} color="black" />
   <Entypo name="save" size={18} color="black" />
   <Entypo name="database" size={18} color="black" />
   <MaterialIcons name="account-balance" size={18} color="black" />
   <FontAwesome5 onPress={()=>navigation.navigate("Security")} name="user-clock" size={18} color="black" />
    
   </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Personal;

