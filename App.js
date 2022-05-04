import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Create from './src/pages/Create';
import Edit from './src/pages/Edit';

export default function App() {
  const [currentRoute, setRoute] = useState('Home');
  const [activeTask, setActiveTask] = useState('');
  const [currentTask, setTask] = useState([
    {
        id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
        title: 'Clean Your Car',
        descripton: "test",
        status: "initiated",
    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
        title: 'Pay Light Bill',
        descripton: "test",
        status: "initiated",
    },
    {
        id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
        title: 'Go on Concert',
        descripton: "test",
        status: "initiated",
    }
]);
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  const showPages = () => {
    switch (currentRoute) {
      case "Home":
        return <Home 
        currentRoute={currentRoute} 
        setRoute={setRoute}
        currentTask={currentTask} 
        setTask={setTask}
        activeTask={activeTask} 
        setActiveTask={setActiveTask}
        />;
        break;
      case "Create":
        return <Create 
        currentRoute={currentRoute} 
        setRoute={setRoute}
        currentTask={currentTask} 
        setTask={setTask}
        />;
        break;
      case "Edit":
        return <Edit 
        currentRoute={currentRoute} 
        setRoute={setRoute}
        currentTask={currentTask} 
        setTask={setTask}
        activeTask={activeTask}
        />;
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


