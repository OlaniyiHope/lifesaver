import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Failed = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/cart.jpg')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Failed to create thrift due to insufficient safety funds</Text>
    
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Kick")} style={styles.button}>
<Text style={styles.buttonText}>Start savings</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Failed;

