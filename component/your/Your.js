import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Your = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/110.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Your password has been reset</Text>
    <Text style={styles.title}>Your password has been successfuly reset, sign in to continue </Text>
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Proceed")} style={styles.button}>
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Your;

