import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

const Act = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>
    <Image source={require('../../assets/100.png')} style={styles.banner} />
    </View>
    <View style={styles.titlecontainer}>
    <Text style={styles.title}>Your account has being verified</Text>
    
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Unable")} style={styles.button}>
<Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>

</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Act;

