import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Opps = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/89.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Oops!</Text>
    <Text style={styles.title}>You seem to have forgotten your password, use the password link
    to reset </Text>
  
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Name")} style={styles.button}>
<Text style={styles.buttonText}>Ok got it</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Opps;

