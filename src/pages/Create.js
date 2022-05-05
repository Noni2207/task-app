import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput} from 'react-native';

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
        menuContanier: {
            alignItems: 'flex-start',
            paddingTop: 10,
            paddingBottom: 10

        },
        backBtn: {
            color: 'white',
            //borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            padding: 10
        },
        sectionTitle: {
            fontSize: 30,
            color: "#646da1",
            fontWeight: '700',
            marginBottom: 20
        },
        label: {
            fontWeight: '700',
            marginBottom: 10,
            
        },
            textInput: {
             backgroundColor: 'white',
             fontSize: 18,
             padding: 10,
             marginBottom: 10,
             borderColor: '#d1d1d1',
             borderWidth: 1,
             borderRadius: 5,
        },
        textArea: {
            backgroundColor: 'white',
            fontSize: 18,
            padding: 10,
            marginBottom: 10,
            borderColor: '#d1d1d1',
            borderWidth: 1,
            borderRadius: 5,
            height: 300,
            textAlignVertical: 'top',
        },
        submitButton: {
            backgroundColor: '#0a70ff',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
        },
        submitButtonText: {
            color: 'white',
            fontSize: 18
        }
        
      });
      const handleBackBtn = () => {
       props.setRoute("Home");
    };
  return (
    <View style={styles.home}>
        <StatusBar backgroundColor='#221040' barStyle='light-content'/>
       <View style={styles.top}>
         <View style={styles.contanier}>
           <View style={styles.menuContanier}>
               <TouchableOpacity onPress={handleBackBtn}>
               <Text style={styles.backBtn}>Back</Text>
               </TouchableOpacity>
           </View>
         </View>
       </View>
          <View style={styles.formContainer}>
            <View style={styles.contanier}>
            <Text style={styles.sectionTitle}>Create Task</Text>
            <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter titile"
                //onChangeText={newText => setText(newText)}
                //defaultValue={text}
              /> 
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter titile"
                //multiline={true}
                //onChangeText={newText => setText(newText)}
                //defaultValue={text}
              /> 
              <View style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Save</Text>
              </View>
          </View>
       </View>
    </View>
  );
}