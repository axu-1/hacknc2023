import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen}/>
        <Stack.Screen name="Hash" component={HashScreen}/>
        <Stack.Screen name="List" component={ListScreen}/>
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

function HashScreen( {navigation} ){

  const route = useRoute();
  const { username, password } = route.params;
  const [selectedHashType, setHashType] = useState();

  return (
    <View style={HashScreenStyles.container}>
      <View style={HashScreenStyles.topContainer}>
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
          <Picker.Item label="MD5" value="md5" />
          <Picker.Item label="SHA1" value="SHA1" />
          \<Picker.Item label="SHA1" value="SHA1" />
        </Picker>
      </View>
      <View style={HashScreenStyles.rightContainer}>
      <View style={HashScreenStyles.header}>
          <Text style={HashScreenStyles.headerText}> Uh more stuff</Text>
        </View>
        <Text style={HashScreenStyles.passwordText}>Password: {'\n'+ password} </Text>
      </View>
      </View>
      <View style={HashScreenStyles.bottomContainer}>
          <TouchableOpacity 
          style={{backgroundColor: 'green', borderRadius: 4, }}
          onPress={() => navigation.navigate('List', { username, password })}
          >
            <Text style={{color: 'white', padding: 10, fontWeight: 500 }}>What do hackers do with this hash?</Text>
          </TouchableOpacity> 
        </View>
    </View>
  );
}

function ListScreen(){

  const route = useRoute();
  const { username, password } = route.params;

  const [currentList, setCurrentList] = useState(null);
  const listOptions = useMemo(() =>  ([
    {
      id: '1',
      label: 'Only alphabet letters',
      value: 'alpha',
    },

    {
      id: '2',
      label: 'Capitalized word followed by digits',
      value: 'wordnum'
    },

    {
      id: '3',
      label: 'Mixed alphabet and numbers',
      value: 'alphanum'
    }

  ]), []);

  return (
    <View style={ListScreenStyles.container}>
      <View style={ListScreenStyles.leftContainer}>
        <Text style={ListScreenStyles.title}>What format is your password, if any?</Text>
          < RadioGroup
              style = {ListScreenStyles.radioList}
              radioButtons={listOptions}
              onPress={setCurrentList}
              selectedId={currentList}
          />
      </View>
      <View style={ListScreenStyles.rightContainer}>
        {currentList ? (
          <View>
            <Text style={ListScreenStyles.title}>Selected Option:</Text>
            <Text style={ListScreenStyles.description}>
              {currentList === 'alpha'
                ? 'Your password is part of many different rainbow tables! Lowercase alphabet, uppercase alphabet, and mixed alphabet, from 1-8 letters. A rainbow table is a list that contains every single possible combination of a given set of characters, and can be used to check for common password formats. If any of the table entry hashes matches your password hash, the hacker knows that it is most likely your password.'
                : currentList === 'wordnum'
                ? 'Your password is part of a 362GB rainbow table! Uppercase letter followed by 5-7 letters followed by 1-5 numbers. A rainbow table is a list that contains every single possible combination of a given set of characters, and can be used to check for common password formats. If any of the table entry hashes matches your password hash, the hacker knows that it is most likely your password.'
                :'Your password is part of a couple different rainbow tables! Mixed alphanumeric tables that use upper and lower case characters and all digits. A rainbow table is a list that contains every single possible combination of a given set of characters, and can be used to check for common password formats. If any of the table entry hashes matches your password hash, the hacker knows that it is most likely your password.'}
            </Text>
          </View>
        ) : (
          <Text style={ListScreenStyles.placeholder}>Select an option to view details.</Text>
        )}
        <Text>Check out https://freerainbowtables.com/ for a list of the most common password formats - don't be one of them!</Text>
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
    flexDirection: 'column',
    backgroundColor: '#25292e',
  },
  topContainer: {
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

  bottomContainer: {
    margin: 24,
    marginTop: 12,
    backgroundColor: 'green',
    borderRadius: 8,
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
    flex: 8,
  },
  picker: {
    flex: 8,
  }
});

const ListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#25292e',
  },
  leftContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 20,
  },
  rightContainer: {
    flex: 2,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
    fontStyle: 'italic',
  },

  radioList: {
    alignItems: 'center',
    justifyContent: 'left',
  }
});