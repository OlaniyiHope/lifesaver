import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Yourthrift = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Your thrift has been successfully set</Text>
    
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Failed")} style={styles.button}>
<Text style={styles.buttonText}>Start savings</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Yourthrift;

