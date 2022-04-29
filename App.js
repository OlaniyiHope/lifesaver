import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView, SafeAreaView } from 'react-native';
import MyStack from './navigation';
import  "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
   
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>

  );
}

export default App;