import { 
    StyleSheet,
    View,
    Text
} from "react-native";

interface GoalItemProps {
    text: string
}

export function GoalItem({ text }:GoalItemProps) {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
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