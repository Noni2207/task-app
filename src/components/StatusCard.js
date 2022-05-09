import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default (props) => {
    const styles = StyleSheet.create({
      statusCards: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      column: {
          flex:1,
          padding: 5,
          height: 150,
         // backgroundColor:"white"
      },
      cardCompleted: {
          flex:1,
          backgroundColor: '#7418ff',
          borderRadius: 10,
          padding: 10,
          shadowColor: '#7418ff',
          shadowOffset: {
              width: 0,
              height: 5
          },
          shadowOpacity: 0.3,
          shadowRadius: 7 
      },
      cardInProgress: {
          flex:1,
          backgroundColor: '#6730bf',
          borderRadius: 10,
          padding: 10,
          shadowColor: '#6730bf',
          shadowOffset: {
              width: 0,
              height: 5
          },
        
        shadowOpacity: 0.3,
        shadowRadius: 7 
        },
      cardDelete: {
          flex:1,
          backgroundColor: '#452080',
          borderRadius: 10,
          padding: 10,
          shadowColor: '#452080',
          shadowOffset: {
              width: 0,
              height: 5
          },
          shadowOpacity: 0.3,
          shadowRadius: 7 
      },
      title: {
          color: 'white',
          alignSelf: 'center',
          fontWeight: '700'
      },
      numberContainer: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      number: {
          color: 'white',
          fontSize: 40,
          fontWeight: '100',
      },
      });
      const totalCompleted = () => {
       let number = props.currentTask.filter((item) => item.status == 'completed');
        number = number.lenght;
        return number;
      };
      const totalInitiated = () => {
       let number = props.currentTask.filter((item) => item.status == 'initiated');
        number = number.lenght;
        return number;
      };
      const totalDeleted = () => {
       let number = props.currentTask.filter((item) => item.status == 'deleted');
        number = number.lenght;
        return number;
      };
  return (
    <View style={styles.statusCards}>
       <View style={styles.column}>
         <View style={styles.cardCompleted}>
            <View>
             <Text style={styles.title}>Completed</Text>
            </View>
            <View style={styles.numberContainer}>
             <Text style={styles.number}>{totalCompleted()}</Text>
            </View>
         </View>
       </View>
       <View style={styles.column}>
       <View style={styles.cardInProgress}>
            <View>
             <Text style={styles.title}>Initiated</Text>
            </View>
            <View style={styles.numberContainer}>
             <Text style={styles.number}>{totalInitiated()}</Text>
            </View>
         </View>
       </View>
       <View style={styles.column}>
       <View style={styles.cardDelete}>
            <View>
             <Text style={styles.title}>Deleted</Text>
            </View>
            <View style={styles.numberContainer}>
             <Text style={styles.number}>{totalDeleted()}</Text>
            </View>
         </View>
       </View>
    </View>
  );
}
