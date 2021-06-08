import React, { useState } from 'react';
import {
  View
} from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
   const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    if(data.title !== ""){
      setTasks(oldState => [...oldState, data]);
    }
    
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    setTasks(oldState => oldState.map(
      skill => skill.id === id ? {...skill, done: false} : skill
     )
    );
    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header />

      <TodoInput addTask={handleAddTask}  />

      <MyTasksList 
        tasks={tasks}        
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}