import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Invite = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Invite sent successfully</Text>

    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Setrift")} style={styles.button}>
<Text style={styles.buttonText}>Amazing</Text>
</TouchableOpacity>

</View>
    );
    
}

export default Invite;

