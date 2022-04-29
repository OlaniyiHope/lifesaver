import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Kick = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Are you sure you want to kick this user out</Text>

    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Invite")} style={styles.button}>
<Text style={styles.buttonText}>Kick out</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate("Proceed")} style={styles.button}>
<Text style={styles.buttonText}>Cancel</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Kick;

