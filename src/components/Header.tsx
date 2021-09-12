import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps{
  darkmode: boolean;  
}

export function Header({ darkmode}: HeaderProps) {
  return (
    <View style={[styles.header, {backgroundColor: darkmode===true?'#483C67':'#273FAD'} ]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>         
    </View>        
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    //backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  btnTheme: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
