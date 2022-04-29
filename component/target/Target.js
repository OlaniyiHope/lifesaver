import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Target = ({navigation}) => {
    return(
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title3}>Target credited successfully</Text>

    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Phone4")} style={styles.button}>
<Text style={styles.buttonText}>Amazing</Text>
</TouchableOpacity>

</View>
    );
    
}

export default Target;

