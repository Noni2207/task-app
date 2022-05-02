import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Create from './src/pages/Create';

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
        return <Home currentRoute={currentRoute} setRoute={setRoute}/>;
        break;
      case "Create":
        return <Create currentRoute={currentRoute} setRoute={setRoute}/>;
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {showPages()}
      
    </View>
  );
}


