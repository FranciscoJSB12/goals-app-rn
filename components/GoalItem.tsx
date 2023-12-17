import { StyleSheet, View, Text, Pressable } from "react-native";

interface GoalItemProps {
  text: string;
  id: string;
  onDeleteGoal: (id: string) => void;
}

export function GoalItem({ text, id, onDeleteGoal }: GoalItemProps) {
  return (
    <Pressable
      style={({ pressed }: { pressed: boolean }) =>
        pressed && styles.pressedItem
      }
      onPress={() => onDeleteGoal(id)}
    >
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#5e0acc",
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "#000",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
