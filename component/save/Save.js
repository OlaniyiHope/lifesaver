import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

const Save = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>

    <Image source={require('../../assets/dollar.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title}>Savings</Text>
    <Text style={styles.title2}>We are ready to take up your thrift and save it weekly to from
    meanning ful assetsss and savings</Text>
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Invest")} style={styles.button}>
<Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate("Total")} style={styles.button2}>
<Text style={styles.buttonText2}>Skip</Text>
</TouchableOpacity>
</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Save;

