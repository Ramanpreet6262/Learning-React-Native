// This is the App.js file which I created earlier...
// In this first I created a button to change state (which is in comments)
// And then Text Input functionality and capturing the input value and updating the state...

// Now in App.js list and scroll view is there

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState('45');

  // const clickHandler = () => {
  //   setName('Edward Snowden');
  //   setAge('35');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
      <View style={styles.body}>
        <Text>Enter Name:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='Mario'
          onChangeText={val => setName(val)}
        />
        <Text>Enter Age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='20'
          onChangeText={val => setAge(val)}
        />
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View> */}
      {/* I placed button inside a view so that I can add styles to the view as we can't add style
         properties to the button, react native doesn't allows that.. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  body: {
    backgroundColor: 'lightgreen',
    padding: 20,
    margin: 25
  },
  // buttonContainer: {
  //   marginTop: 5
  // }
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
