import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Topbar = ({navigation}) => {
    return(
<View style={styles.container} >

    <Text style={styles.title}>Result</Text>
   
    <View>
<Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}} style={styles.banner}/>
    </View>
<TouchableOpacity onPress={()=>navigation.navigate("Header")}>
<Text>Home</Text>
</TouchableOpacity>
</View>
    );
    
}

export default Topbar;

