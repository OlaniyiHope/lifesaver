import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

const Verify = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/5.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
   
    <Text style={styles.title2}>Please verify your email to begin using your account</Text>
    <Text style={styles.title} onPress={()=>navigation.navigate("Idv")} >Didnt receive any email, send again</Text>
    </View>
</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Verify;

