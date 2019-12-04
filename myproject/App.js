import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'badri', key: '1' },
    { name: 'raghav', key: '2' },
    { name: 'rishabh', key: '3' },
    { name: 'rakshit', key: '4' },
    { name: 'ujjwal', key: '5' },
    { name: 'jassi', key: '6' },
    { name: 'raman', key: '7' },
    { name: 'yuvek', key: '8' }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={(
          { item } // The item here is destructured variable and it is the indiviaual item in the people array eg-- { name: 'badri', key: '1' }
        ) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    textAlign: 'center',
    fontSize: 24
  }
});
