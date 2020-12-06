import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const Additem = ({title, addItem}) => {

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue)




    return (
        <View>
            <TextInput placeholder="Add item..." style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={()=> addItem(text)}>
                <Text style={styles.btnText}><Ionicons name="md-add" size={20}/> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5    
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }

})





export default Additem;