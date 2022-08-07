import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const startAddGoalHandler = () => {
    setIsVisibleModal(true)
  }

  const goalPressHandler = (entredText) => {
    setGoals(prev => [...prev, {
      text: entredText, id: Math.random().toString()
    }])
  }

  const deleteGoalHanlder = (id) => {
    setGoals(prev => prev.filter((el, _ ) => el.id !== id))
  }

  const endAddGoalHandler = () => {
    setIsVisibleModal(false)
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add new Goal' color="red" onPress={() => {setIsVisibleModal(prev => !prev)}}/>
      {isVisibleModal &&<GoalInput visible={isVisibleModal} onAddGoal={goalPressHandler} onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(elData) => 
            <GoalItem text={elData.item.text} id={elData.item.id} onDeleteItem={deleteGoalHanlder} />
            }
        keyExtractor={(item) => {return item.id}}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
    borderColor: "#e4d0ff",
    borderBottomColor: "#e4d0ff",
    color: "#120438",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

});
