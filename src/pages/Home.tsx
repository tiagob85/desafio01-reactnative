import React, { useState } from 'react';
import {
  View, 
  Text,
  TouchableOpacity
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
   const [dark_mode, setDarkMode] = useState(false);
   const [theme_name, setThemeName] = useState('Home 1');

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

  function HandleThemeMode(){
    if(dark_mode){
      setDarkMode(false);
      setThemeName('Home 1');
    }
    else{
      setDarkMode(true);
      setThemeName('Home 3');
    }
  }

  return (
    <View style={{backgroundColor: dark_mode?'#1F1F1F':'#FFFFFF'}}>  

      <Header darkmode={dark_mode}/>

      <TouchableOpacity
        style={{ flexDirection:'column-reverse', position:'absolute', marginTop: 30, marginLeft: 15}}
        activeOpacity={0.7}
        onPress={HandleThemeMode}
      >
        <Text style={{fontSize: 18, color: '#FFFFFF'}}>{theme_name}</Text>
      </TouchableOpacity>

      <TodoInput 
        addTask={handleAddTask} 
        darkmode={dark_mode}        
      />         

      <MyTasksList 
        tasks={tasks}        
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        darkmode={dark_mode}
      />

    </View>
  )
}