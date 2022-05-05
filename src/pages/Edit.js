import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

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
    const [formState, setFormState] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
    });
    useEffect(() => {
        const task =  props.currentTask.filter((item) => {
            return item.id == props.activeTask;
        })[0];
        setFormState(task);
    }, [])
       const handeleChange = (name, text) => {
         const newState = Object.assign({}, formState, {
           [name]: text
         });
         setFormState(newState);
       };
       const submit = () => {
         let taskIndex = props.currentTask.findIndex(
           x => x.id === props.activeTask
         );
         let newTask = [...props.currentTask];
         newTask.splice(taskIndex, 1, formState);
         props.setTask(newTask);
         props.setRoute('Home');
       }
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
            <Text style={styles.sectionTitle}>Edit Task</Text>
            <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter titile"
                onChangeText={text => handeleChange('title', text)}
                value={formState.title}
              /> 
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter titile"
                //multiline={true}
                onChangeText={text => handeleChange('description', text)}
                value={formState.description}
              /> 
              <TouchableHighlight 
              style={styles.submitButton}
              onPress={submit}
              >
                  <Text style={styles.submitButtonText}>Save</Text>
              </TouchableHighlight>
          </View>
       </View>
    </View>
  );
}