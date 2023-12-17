import { useState } from 'react';
import { StyleSheet, 
         View,
         FlatList,
         Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

interface GoalType {
  key: string,
  text: string
}

let nextId:number = 0;

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState<GoalType[]>([]);

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false);
  }

  function addGoalHandler(value:string) {
    if (!!value) {
      setGoals(prev => [...prev, {
        key: String(nextId++), 
        text: value
      }]);
      endAddGoalHandler();
    }
  }

  function deleteGoalhandler(id:string) {
    setGoals(prev => prev.filter(goal => goal.key !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          isVisible={modalIsVisible}
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
    </>
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
