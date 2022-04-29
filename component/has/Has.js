import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

const Has = ({navigation}) => {
    return(
        <SafeAreaView>
        <ScrollView>
<View style={styles.container} >

    <View style={styles.bannercontainer}>
<Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}} style={styles.banner}/>
    </View>
    <View style={styles.titlecontainer}>
   
    <Text style={styles.title2}>Your account has been verified</Text>
   
    </View>
    <View style={styles.bottom}>
   <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Unable")}>
       <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
   
   {/*<TouchableOpacity onPress={()=>navigation.navigate("Topbar")}>
       <Text>End</Text>
    </TouchableOpacity>*/}
   </View>
  
</View>
    </ScrollView>
    </SafeAreaView>
    );
    
}

export default Has;

