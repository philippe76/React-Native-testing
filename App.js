import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Additem from './components/Additem'
import uuid from 'react-native-uuid'

const App = () => {
  
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Fruits'},
  ])

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'please enter something', [{text: 'Ok'}])
    }
    else {
      setItems(prevItems => {
        return [...prevItems, {id: 5, text}]
      })
    }
  }

  return (
    <View style={styles.container}>   
      <Header />
      <Additem addItem={addItem} />
      <FlatList 
        data= {items}
        renderItem={({item}) => <ListItem  item={item} deleteItem={deleteItem}/>}/>
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
