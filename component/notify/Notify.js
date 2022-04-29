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
const Notify = ({navigation}) => {
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
       <Text style={styles.questions}>Notification</Text>
   
   </View>
     

<View style={styles.dis}>
       <Text onPress={()=>navigation.navigate("Update")}>Credit Account</Text>
       <Switch style={styles.ok}
        trackColor={{ false: "#ff4500", true: "#ff4500" }}
        thumbColor={isEnabled ? "#fff" : "#f00"}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
<View style={styles.dis}>
       <Text onPress={()=>navigation.navigate("Update")}>Debit Account</Text>
       <Switch style={styles.ok}
        trackColor={{ false: "#ff4500", true: "#ff4500" }}
        thumbColor={isEnabled ? "#fff" : "#f00"}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
<View style={styles.dis}>
       <Text onPress={()=>navigation.navigate("Update")}>Investment Opportinities</Text>
       <Switch style={styles.ok2}
        trackColor={{ false: "#ff4500", true: "#ff4500" }}
        thumbColor={isEnabled ? "#fff" : "#f00"}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
<View style={styles.dis}>
       <Text onPress={()=>navigation.navigate("Debit1")}>Login Attempt</Text>
       <Switch style={styles.ok}
        trackColor={{ false: "#ff4500", true: "#ff4500" }}
        thumbColor={isEnabled ? "#fff" : "#f00"}
        ios_backgroundColor="#fff"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

  
  
 
    </View>
    </ScrollView>
    </SafeAreaView>
     

    )
}

export default Notify;

