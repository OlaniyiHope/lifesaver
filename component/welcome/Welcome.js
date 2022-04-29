import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Welcome = ({navigation}) => {
    return(
   
<View style={styles.container} >
<View style={styles.titlecontainer}>
    <Text style={styles.title}>Life Saver</Text>
    </View>
    
<TouchableOpacity onPress={()=>navigation.navigate("Thrift")} style={styles.button}>
<Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
</View>
  
    );
    
}

export default Welcome;

