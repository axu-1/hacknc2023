import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

//For all the styles that will be used in this app
/* example
//myStyles.js
export const MyStyles = StyleSheet.create({
  redText: {
    color: 'red',
  },
});
*/

/* 
import {MyStyles} from "/path/to/myStyles"

//...other code
<Text style={MyStyles.redText}>this is red </Text>
//... other code

*/

export const MyStyles = StyleSheet.create({
    whiteText: {
      color: '#000',
    },
  });

export const TextBoxStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    // Highlight effect when focused
    shadowColor: 'blue', // Change to your desired highlight color
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});