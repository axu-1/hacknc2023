import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen}/>
        <Stack.Screen name="Hash" component={HashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//SCREENS GO HERE UNTIL YOU CAN FIGURE OUT INTER FILE NAVIGATION

function InputScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={InputScreenStyles.container}>
      <Text style ={InputScreenStyles.titleText} >Welcome to the password cracking game!</Text>
      <Text style ={{color: '#fff', marginBottom: 10}} >To begin, start by entering a fake username and password.</Text>
      <StatusBar style="auto" />
      <TextInput
        style={InputScreenStyles.inputBox}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={InputScreenStyles.inputBox}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity 
        style={{backgroundColor: 'green', borderRadius: 4, }}
        onPress={() => navigation.navigate('Hash', { username, password })}
      >
        <Text style={{color: 'white', padding: 10, fontWeight: 500 }}>Confirm</Text>
      </TouchableOpacity> 
      
      <View style={InputScreenStyles.bottomContainer}>
        <View style={InputScreenStyles.border}>
          <Text style={InputScreenStyles.bottomText}>IMPORTANT: Do not use a password that you actually use in real life, especially if it's for a sensitive application!</Text>
        </View>
      </View>
    </View>
  );
}

function HashScreen(){

  const route = useRoute();
  const { username, password } = route.params;
  const [selectedHashType, setHashType] = useState();


  return (
    <View style={HashScreenStyles.container}>
      <View style={HashScreenStyles.leftContainer}>
        <View style={HashScreenStyles.header}>
          <Text style={HashScreenStyles.headerText}> Uh stuff</Text>
        </View>
        <Picker
          style={ HashScreenStyles.picker }
          selectedValue={ selectedHashType }
          onValueChange={(itemValue, itemIndex) =>
            setHashType(itemValue)
          }>
          <Picker.Item label="Hash1" value="hash1" />
          <Picker.Item label="Hash2" value="hash2" />
        </Picker>
      </View>
      <View style={HashScreenStyles.rightContainer}>
        <Text style={HashScreenStyles.passwordText}>Password: {'\n'+ password} </Text>
      </View>
    </View>
  );
}

//STYLES GO HERE UNTIL YOU CAN FIGURE OUT INTER FILE NAVIGATION
const InputScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 500,
    marginBottom: 10,
  },

  bottomContainer: {
    //flex: 1,
    backgroundColor: '#25292e',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10
  },
  bottomText: {
    color: 'white',
    padding: 20
  },

  inputContainer: {
    color: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputBox: {
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


const HashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#25292e',
  },
  leftContainer: {
    margin: 24,
    marginRight: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rightContainer: {
    borderRadius: 8,
    margin: 24,
    marginLeft: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 4,
    backgroundColor: '#25292e',
    borderRadius: 8,
    justifyContent: 'center',
  },
  
  headerText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
  },
  passwordText: {
    fontSize: 20,
    textAlign: 'center'
  },
  picker: {
    flex: 8,
  }
});