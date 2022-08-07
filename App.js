import { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Dimensions } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const [goals, setGoals] = useState([])
  const [isVisibleModal, setIsVisibleModal] = useState(false)

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

  return <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <View style={styles.goalBtn}>
        <View style={styles.btn}>
          <Button title='Add new Goal' color="violet" onPress={() => {setIsVisibleModal(prev => !prev)}}/>
        </View>
      </View>
      {isVisibleModal &&<GoalInput visible={isVisibleModal} onAddGoal={goalPressHandler} onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        keyExtractor={(item) => {return item.id}}
        renderItem={(elData) => 
            <GoalItem text={elData.item.text} id={elData.item.id} onDeleteItem={deleteGoalHanlder}/>
            }
        />
      </View>
    </View>
  </>
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
    flex: 3,
  },
  goalBtn: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 50
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderBottomColor: "#e4d0ff",
    color: "#120438",
    width: "70%",
  },
});
