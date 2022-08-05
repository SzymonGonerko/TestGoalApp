import { StyleSheet, Text, View, Pressable} from 'react-native';

export const GoalItem = (props) => {
    return <>
    
        <View style={styles.goalItem}>
        <Pressable 
            android_ripple={{color: "#ff46fd"}}
            style={({pressed}) => {pressed && styles.pressedItem}}
            onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.textInput}>{props.text}</Text>
        </Pressable>
        </View>
   
    </>
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
      goalItem: {
        margin: 2,
        padding: 2,
        borderRadius: 6,
        backgroundColor: "#f7a2f6",
        color: "white"
      },
      pressedItem: {
        opacity: 0.5
      }
});