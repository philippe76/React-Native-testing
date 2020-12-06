import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './components/Header';

const App = () => {
  
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Fruits'},
  ])

  return (
    <View style={styles.container}>   
      <Header />
      <FlatList 
        data= {items}
        renderItem={({item}) => (<Text>{item.text}</Text>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60
  }
})

export default App;
