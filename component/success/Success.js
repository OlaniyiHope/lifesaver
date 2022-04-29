import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style2';

const Success = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/81.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title2}>Airtime successfully sent</Text>
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Setsafedash2")} style={styles.button}>
<Text style={styles.buttonText}>Amazing</Text>
</TouchableOpacity>

</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Success;

