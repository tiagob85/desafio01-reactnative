import React, { BlockquoteHTMLAttributes } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps, DatePickerIOSBase } from 'react-native';



function FlatListHeaderComponent({modedark}:HeaderProps) {
  return (
    <View>
      <Text style={[styles.header, {color: modedark?'#67E480':'#3D3D4D' }]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkmode:boolean;
}

interface HeaderProps {
  modedark: boolean;
  
}

export function MyTasksList({ tasks, onLongPress, onPress, darkmode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={()=>onPress(item.id)}
            onLongPress={()=>onLongPress(item.id)}    
            style={item.done?styles.taskButtonDone:styles.taskButton}    
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={item.done?[styles.taskMarkerDone,{backgroundColor: darkmode?'#67E480':'#273FAD'}]:[styles.taskMarker, {borderColor: darkmode?'#67E480':'#3D3D4D'}]}
            />
            <Text 
              //TODO - use style prop
              style={item.done?[styles.taskTextDone,{color: darkmode?'#E1E1F6':'#A09CB1'}]:{color: darkmode?'#67E480':'#3D3D4D'}}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent modedark={darkmode}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark:{
    color: '#67E480',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})