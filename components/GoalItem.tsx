import { 
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native";

interface GoalItemProps {
    text: string,
    id: string,
    onDeleteGoal: (id:string) => void
}

export function GoalItem({ text, id, onDeleteGoal }:GoalItemProps) {
    return (
        <Pressable onPress={() => onDeleteGoal(id)}>
            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalContainer: {
        backgroundColor: 'purple',
        padding: 8,
        marginVertical: 8, 
        borderRadius: 6
    },
    goalText: {
        color: 'white',
    }
});