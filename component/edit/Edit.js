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
const Edit = ({navigation}) => {
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
    <View style={styles.circ}>
    <Text style={styles.ctext}>TK</Text>
    </View>
   <View style={styles.top}>
       <Text style={styles.questions}>Tanjiro Kamado</Text>
       <Text style={styles.questions2}>Edit Profile</Text>
       <Text style={styles.questions2}>Verify your account to complete profile</Text>
   </View>
   <View style={styles.display}>
       <Text>Display Settings</Text>
       </View>
       <View style={styles.dis}>
       <Text style={styles.dis7} >Display balance on dashboard</Text>
       <Switch style={styles.ok}
        trackColor={{ false: "#ff4500", true: "#ff4500" }}
        thumbColor={isEnabled ? "#fff" : "#f00"}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <Text style={styles.question}>Account Setting</Text>
      <View style={styles.searchSection}>
      <Ionicons name="person" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Personal settings</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
      <View style={styles.searchSection}>
      <Ionicons name="notifications" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Notification settings</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
      <View style={styles.searchSection}>
      <MaterialCommunityIcons name="update" style={styles.searchIcon} size={24} color="black" />

<Text style={styles.input}>Update personal identity</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
      <View style={styles.searchSection}>
      <Ionicons name="person-circle-outline" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Next of kin settings</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
      <View style={styles.searchSection}>
      <MaterialIcons name="security" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Login Security</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
<Text style={styles.question}>Funds Setting</Text>
<View style={styles.searchSection}>
<Entypo name="credit-card" size={24} style={styles.searchIcon} color="black" />
<Text style={styles.input}>Debit card</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
<View style={styles.searchSection}>
<FontAwesome name="bank" size={24} style={styles.searchIcon} color="black" />
<Text style={styles.input}>Bank</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
<View style={styles.searchSection}>
<MaterialIcons name="attach-money" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Withdrawer funds</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
<Text style={styles.question}>Log out </Text>
<View style={styles.searchSection}>
<Ionicons name="help" size={24} color="black" />
<Text style={styles.input}>Help</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>
<View style={styles.searchSection}>
<MaterialCommunityIcons name="logout" style={styles.searchIcon} size={24} color="black" />
<Text style={styles.input}>Log out</Text>
<MaterialIcons name="arrow-forward-ios" style={styles.searchIcon} size={24} color="black" />

</View>

  
   <View style={styles.top2}>
  
   <Ionicons name="ios-home-sharp"  size={18} color="black" />
   <Entypo name="save" size={18}  color="black" />
   <Entypo name="database" size={18}  color="black" />
   <MaterialIcons name="account-balance" size={18} color="black" />
   <FontAwesome5 onPress={()=>navigation.navigate("Personal")}  name="user-clock" size={18} color="black" />
    
   </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Edit;

