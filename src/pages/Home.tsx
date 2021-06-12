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
    //Busca o indice da lista.
    let index = tasks.findIndex((task => task.id === id))
    if(tasks[index].done){
      tasks[index].done = false;  
    }
    else{
      tasks[index].done = true;  
    }
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ));
    setTasks(oldState =>[...oldState,tasks[index]]);
    
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      skill => skill.id !== id
    ));
    console.log('Saida : '+ tasks);
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