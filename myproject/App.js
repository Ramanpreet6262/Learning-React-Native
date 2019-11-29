import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('John Doe');
  const [person, setPerson] = useState({ name: 'Raghav', age: 45 });

  const clickHandler = () => {
    setName('Edward Snowden');
    setPerson({ name: 'Raghav S.', age: 21 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My name is {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
        {/*I placed button inside a view so that I can add styles to the view as we can't add style
         properties to the button, react native doesn't allows that.. */}
      </View>
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
  buttonContainer: {
    marginTop: 5
  }
});
