import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Header from '../components/Header';
import StatusCard from '../components/StatusCard';
import Task from '../components/Task';

export default (props) => {
    const styles = StyleSheet.create({
        home: {
          flex: 1,
          backgroundColor: '#F7FAFD',
        },
       top: {
            backgroundColor: '#221040'
        },
        contanier: {
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 20, 
        },
        text: {
            color: 'white'
        },
        addTaskBtn: {
            backgroundColor: '#FFF740',
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            position: 'absolute',
            bottom: 20,
            right: 20,
            shadowColor: '#1b1b1b',
            shadowOffset: {
                width:0,
                height:7
            },
            shadowOpacity: 0.3,
            shadowRadius: 6.68
        }
      });
      const handleAddTaskBtn = () => {
          props.setRoute("Create");
      };
  return (
    <View style={styles.home}>
        <StatusBar backgroundColor='#221040' barStyle='light-content'/>
       <View style={styles.top}>
         <View style={styles.contanier}>
             <Header/>
             <StatusCard/>
         </View>
       </View>
       <Task/>
       <TouchableOpacity style={styles.addTaskBtn} onPress={handleAddTaskBtn}>
           <Text style={styles.plus}>+</Text>

       </TouchableOpacity>
    </View>
  );
}


