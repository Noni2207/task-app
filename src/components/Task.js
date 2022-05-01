import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
    const styles = StyleSheet.create({
        tasks: {
            flex: 1,
            paddingTop: 20
        },
        sectionTitle: {
            fontSize: 30,
            color: "#646da1",
            fontWeight: '700',
            marginBottom: 20
        },
        container: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        task: {
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 20,
            marginBottom: 10,
            shadowColor: '#1b1b1b',
            shadowOffset: {
                width:0,
                height:7
            },
            shadowOpacity: 0.3,
            shadowRadius: 6.68
        },
        taskTitle: {
            fontSize: 18,
            color: '#7c8bc0',
            fontWeight: '700'

        }
      });
      const task = [
          {
              id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
              title: 'Clean Your Car'
          },
          {
              id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
              title: 'Pay Light Bill'
          },
          {
              id:`skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
              title: 'Go on Concert'
          }
      ];
      const showTasks = () => {
          return task.map ((task) => {
            return (
                <View style={styles.task} key={task.id}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                </View>
            )
          })
      }
        
  return (
    <View style={styles.tasks}>
        <View style={styles.container}>
           <Text style={styles.sectionTitle}>Tasks</Text> 
               {showTasks()}
        </View>
    </View>
  );
}
