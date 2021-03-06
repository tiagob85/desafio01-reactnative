import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
 /* backgroundColor: string;
  placeholderTextColor: string;*/
  darkmode: boolean;
}

export function TodoInput({ addTask,darkmode, ...rest }: TodoInputProps) {
   const [task, setTask] = useState('');

     
  function handleAddNewTask() {
    //TODO - Call addTask and clean input value 
      addTask(task);     
      setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, {backgroundColor: darkmode===true?'#34313D':'#F5F4F8'}]}         
        placeholder="Adicionar novo todo..."
        placeholderTextColor={darkmode===true?'white':'black'}  //{({darkmode} ?'#FFFFFF':'#000000')}//- props
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}     
        value={task}         
        {...rest}             
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, {backgroundColor: darkmode===true?'#988BC7':'#3FAD27'}] }
        onPress={handleAddNewTask}
        {...rest}
        //TODO - onPress prop
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,    
  //  backgroundColor: '#F5F4F8',
    color: '#000000',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,    
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
   // backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});