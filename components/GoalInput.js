import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';


export const GoalInput = (props) => {
    const [entredText, setEntredText] = useState('')

    const goalInputHandler = (value) => {
        setEntredText(value)
      }

      const goalHandler = () => {
        props.onAddGoal(entredText)
        setEntredText("")
      }

    return <>
    <View style={styles.inputContainer}>
        <TextInput value={entredText} style={styles.textInput} placeholder="Wpisz coś" onChangeText={goalInputHandler}/>
        <Button onPress={goalHandler} title='Dodaj'/>
    </View>
    </>
}


const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 24, 
      borderBottomWidth: 1,
      borderColor: "#cccccc"
    },
    goalsContainer: {
      flex: 4,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
    },
  });