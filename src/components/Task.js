import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-web';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default (props) => {
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
      const handleTaskClick = id => {
        props.setActiveTask(id);
         props.setRoute('Edit'); 
        
      };
      const showTasks = () => {
          return props.currentTask.map ((task) => {
            return (
                <TouchableHighlight 
                style={styles.task} 
                key={task.id} 
                onPress={handleTaskClick.bind(null, task.id)}
                >
                  <Text style={styles.taskTitle}>{task.title}</Text>
                </TouchableHighlight>
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
