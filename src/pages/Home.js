import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import StatusCard from '../components/StatusCard';

export default function App() {
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
            paddingtTop: 36,
           
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
  return (
    <View style={styles.home}>
       <View style={styles.top}>
         <View style={styles.contanier}>
             <Header/>
         </View>
       </View>
       <TouchableOpacity style={styles.addTaskBtn}>
           <Text style={styles.plus}>+</Text>

       </TouchableOpacity>
    </View>
  );
}


