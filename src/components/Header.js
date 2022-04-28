import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
    const styles = StyleSheet.create({
        header: {
            //backgroundColor: 'red',
            width: '100%',
            borderRadius: 10,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        headerProfileContainet: {
            borderRadius: 50,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            width: 60

        },
        headerProfile: {
            height: 60,
            width: 60,
        },
        welcomeMessage: {
            fontSize: 20,
            fontWeight: '700',
            paddingLeft: 20
        },
        greetings: {
            color: 'white',
            fontSize: 20,
            fontWeight: '700'
        },
        subMessage: {
            color: '#959CAC',
            fontSize: 14,
            fontWeight: '400'
        }
      });
  return (
    <View style={styles.header}>
       <View style={styles.headerProfileContainet}>
           <Image style={styles.headerProfile}source={require("../../assets/images/Me.jpg")}></Image>
       </View>
       <View style={styles.welcomeMessage}>
           <Text style={styles.greetings}>Hi, Ninoslav Stanojevic</Text>
           <Text style={styles.subMessage}>Last time you completed 4 task</Text>
       </View>
    </View>
  );
}

