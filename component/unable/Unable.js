import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

const Unable = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/101.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
   
    <Text style={styles.title2}>We were unable to verify your account</Text>
   
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("Edit")} style={styles.button}>
<Text style={styles.buttonText}>Try again</Text>
</TouchableOpacity>
</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Unable;

