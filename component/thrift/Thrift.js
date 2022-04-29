import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style2';


const Thrift = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>

<Image source={require('../../assets/deb.png')} style={styles.banner} />
    </View>
   
    <View style={styles.titlecontainer}>
    <Text style={styles.title}>Thrift</Text>
    <Text style={styles.title2}>We are ready to take up your thrift and save it weekly to from
    meanning ful assetsss and savings</Text>
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Bill")} style={styles.button}>
<Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate("Kin")} style={styles.button2}>
<Text style={styles.buttonText2}>Skip</Text>
</TouchableOpacity>
</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Thrift;

