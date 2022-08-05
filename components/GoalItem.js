import { StyleSheet, Text, View, Pressable} from 'react-native';

export const GoalItem = (props) => {
    return <>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goalItem}>
            <Text style={styles.textInput}>{props.text}</Text>
        </View>
    </Pressable>
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
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "violet",
        color: "white"
      }
});