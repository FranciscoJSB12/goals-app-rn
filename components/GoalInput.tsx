import { useState } from "react";
import { 
    StyleSheet,
    View,
    TextInput,
    Button
} from "react-native";

interface GoalInputProps {
    onAddGoal: (value:string) => void
}

export function GoalInput({ onAddGoal }:GoalInputProps) {
    const [value, setValue] = useState("");
    
    function goalInputHandler (enteredText:string) {
        setValue(enteredText);
    }

    function addGoalHandler () {
        onAddGoal(value);
        setValue("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Your course goals!'
                value={value}
                onChangeText={goalInputHandler}
                style={styles.textInput}
            />
            <Button 
                title='Add goal'
                onPress={addGoalHandler}
            />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
});

