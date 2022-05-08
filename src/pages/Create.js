import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, TouchableHighlight} from 'react-native';

export default (props) => {
  const [formState, setFormState] = useState({
    id: `skills_${new Date().getTime()}_${Math.random()* Math.random()}`,
    title: "",
    description: "",
    status: "initiated",
});
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
        },
        statusContainer: {
          flexDirection: 'row',
        },
        statusBtn1: {
          backgroundColor: formState.status == 'completed' ? 'grey' : 'white',
          padding: 10,
          marginBottom: 10,
          borderColor: '#d1d1d1',
          borderWidth: 1,
          borderRadius: 5,
          marginRight: 15
        },
        statusBtn2: {
          backgroundColor: formState.status == 'initiated' ? 'yellow' : 'white',
          padding: 10,
          marginBottom: 10,
          borderColor: '#d1d1d1',
          borderWidth: 1,
          borderRadius: 5,
          marginRight: 15

        },
        statusBtn3: {
          backgroundColor: formState.status == 'delete' ? 'red' : 'white',
          padding: 10,
          marginBottom: 10,
          borderColor: '#d1d1d1',
          borderWidth: 1,
          borderRadius: 5,
          marginRight: 15

        },
        
      });
      const handleBackBtn = () => {
       props.setRoute("Home");
    };
   
  const handeleChange = (name, text) => {
    const newState = Object.assign({}, formState, {
      [name]: text
    });
    setFormState(newState);
  };
  const submit = () => {
    let newTask = [...props.currentTask, formState];
    props.setTask(newTask);
    props.setRoute('Home');
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
              <Text style={styles.label}>Status</Text>
               <View style={styles.statusContainer}>
                <TouchableHighlight 
                  style={styles.statusBtn1}
                  onPress={() => handeleChange('status', 'completed')}
                  underlayColor= 'white'
                >
                  <Text style={styles.statusBtnText}>Completed</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  style={styles.statusBtn2}
                  onPress={() => handeleChange('status', 'initiated')}
                  underlayColor= 'white'
                
                >
                  <Text style={styles.statusBtnText}>Initiated</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                  style={styles.statusBtn3}
                  onPress={() => handeleChange('status', 'delete')}
                  underlayColor= 'white'
                >
                  <Text style={styles.statusBtnText}>Delete</Text>
                </TouchableHighlight>
               </View>
              <TouchableHighlight 
                  style={styles.submitButton}
                  onPress={submit}
                  underlayColor= '#0a70ff'
              >
                  <Text style={styles.submitButtonText}>Save</Text>
              </TouchableHighlight>
          </View>
       </View>
    </View>
  );
}