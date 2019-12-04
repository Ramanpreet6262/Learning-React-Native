import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'badri', id: '1' },
    { name: 'raghav', id: '2' },
    { name: 'rishabh', id: '3' },
    { name: 'rakshit', id: '4' },
    { name: 'ujjwal', id: '5' },
    { name: 'jassi', id: '6' },
    { name: 'raman', id: '7' },
    { name: 'yuvek', id: '8' }
  ]);

  // key is needed for flatlist and if we don't have that in data then we can use keyextractor method...
  // And in that we will tell which property of object is going to be used as key .....
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={(
          { item } // The item here is destructured variable and it is the indiviaual item in the people array eg-- { name: 'badri', key: '1' }
        ) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

/* If we have a really large array of items, all of the items do not automatically load on to the 
screen when we first render it....
Only the first few loads and more will load as we scroll down WHEREAS when we use scrollview it renders every
item from the beginning.....*/

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
