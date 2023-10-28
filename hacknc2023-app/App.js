import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style ={{color: '#fff', marginBottom: 10}} >Welcome to the password cracking game!</Text>
      <Text style ={{color: '#fff', marginBottom: 10}} >To begin, start by entering a fake username and password.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={TextBoxStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={TextBoxStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.border}>
          <Text style={styles.bottomText}>IMPORTANT: Do not use a password that you actually use in real life, especially if it's for a sensitive application!</Text>
        </View>
      </View>
    </View>
  );
}

//STYLES GO HERE UNTIL YOU CAN FIGURE OUT INTER FILE NAVIGATION
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    //flex: 1,
    backgroundColor: '#25292e',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomText: {
    color: 'white',
    padding: 20
  },
});

const TextBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: 'blue',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});