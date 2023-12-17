import { useState } from "react";
import { 
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image
} from "react-native";

interface GoalInputProps {
    onAddGoal: (value:string) => void,
    onCancel: () => void,
    isVisible: boolean
}

export function GoalInput({ onAddGoal, onCancel, isVisible }:GoalInputProps) {
    const [value, setValue] = useState("");
    
    function goalInputHandler (enteredText:string) {
        setValue(enteredText);
    }

    function addGoalHandler () {
        onAddGoal(value);
        setValue("");
    }

    return (
        <Modal 
            visible={isVisible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image} 
                    source={require("../assets/images/goal.png")}
                />
                <TextInput 
                    placeholder="Your course goals!"
                    value={value}
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel"
                            onPress={onCancel}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="Add goal"
                            onPress={addGoalHandler}
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});

