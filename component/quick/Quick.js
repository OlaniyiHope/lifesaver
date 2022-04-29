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

const Quick = ({navigation}) => {
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
       <Text style={styles.questions}>Quick Safe</Text>
     
      
   </View>
   <View style={styles.cards2}>
   <Text style={styles.tic}>Available Balance</Text>
   <Text style={styles.tic2}>N2,0000.00</Text>
  </View>
  <View style={styles.all}>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
<MaterialIcons name="attach-money" size={24} color="black" />
<Text>Withdraw</Text>

</View>
  </View>
  <View style={styles.cards}>
  <View style={styles.searchSection}>
<MaterialIcons name="attach-money" size={24} color="black" />
<Text>Settings</Text>

</View>

  </View>

  </View>
      
      
  <Text>Activities</Text>
  <View style={styles.searchSection2}>
<MaterialIcons name="attach-money" size={20} color="black" style={styles.searchIcon2} />
<Text style={styles.input5}>Personal safe debited</Text>
<Text>N600.00</Text>
</View>
  <View style={styles.searchSection2}>
<MaterialIcons name="attach-money" size={20} color="black" style={styles.searchIcon2} />
<Text style={styles.input5}>Personal safe debited</Text>
<Text>N600.00</Text>
</View>
  <View style={styles.searchSection2}>
<MaterialIcons name="attach-money" size={20} color="black" style={styles.searchIcon2} />
<Text style={styles.input5}>Personal safe debited</Text>
<Text>N600.00</Text>
</View>
  <View style={styles.searchSection2}>
<MaterialIcons name="attach-money" size={20} color="black" style={styles.searchIcon2} />
<Text style={styles.input5}>Personal safe debited</Text>
<Text>N600.00</Text>
</View>

   <View style={styles.top2}>
  
   <Ionicons name="ios-home-sharp" size={18} color="black" />
   <Entypo name="save" size={18} color="black" />
   <Entypo name="database" size={18} color="black" />
   <MaterialIcons name="account-balance" size={18} color="black" />
   <FontAwesome5 onPress={()=>navigation.navigate("Phone1")} name="user-clock" size={18} color="black" />
    
   </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Quick;

