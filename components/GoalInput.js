import { StyleSheet, Text, View, Button, TextInput, Modal, Image} from 'react-native';
import { useState } from 'react';


export const GoalInput = (props) => {
    const [entredText, setEntredText] = useState('')

    const goalInputHandler = (value) => {
        setEntredText(value)
      }

      const goalHandler = () => {
        props.onAddGoal(entredText)
        setEntredText("")
        props.onCancel()
      }

    return <>
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
          <TextInput value={entredText} style={styles.textInput} placeholder="Wpisz coś" onChangeText={goalInputHandler}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button onPress={goalHandler} title='Dodaj' color="#5e0acc"/>
            </View>
            <View style={styles.button}>
              <Button title='Anuluj' onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
      </View>
    </Modal>
    </>
}


const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#311b6b"
    },
    goalsContainer: {
      flex: 4,
    },
    image: {
      width: 100,
      height: 100,
      margin: 10
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#e4d0ff",
      backgroundColor: "#e4d0ff",
      color: "#120438",
      borderRadius: 10,
      width: "100%",
      padding: 8,
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 10
    },
    button: {
      width: "30%",
      marginHorizontal: 8
    }
  });