import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  const [currentRoute, setRoute] = useState('Home')
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  const showPages = () => {
    switch (currentRoute) {
      case "Home":
        return <Home></Home>;
        break;
    
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {showPages()}
      <StatusBar style="auto" />
    </View>
  );
}


