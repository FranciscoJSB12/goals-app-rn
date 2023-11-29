import { useState } from 'react';
import { StyleSheet, 
         View,
         FlatList
} from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

interface GoalType {
  key: string,
  text: string
}

let nextId:number = 0;

export default function App() {

  const [goals, setGoals] = useState<GoalType[]>([]);

  function addGoalHandler(value:string) {
    setGoals(prev => [...prev, {
      key: String(nextId++), 
      text: value
    }]);
  }

  function deleteGoalhandler(id:string) {
    setGoals(prev => prev.filter(goal => goal.key !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={goals}
          renderItem={({ item }) => 
            <GoalItem 
              text={item.text}
              id={item.key}
              onDeleteGoal={deleteGoalhandler}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
