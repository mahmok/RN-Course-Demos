import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';



export default class TextInputDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: "Nothing written yet"
        }
    }

    doSomethingWithText = (inputText) => {
        this.setState({text: inputText})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={"Enter anything"} placeholderTextColor={"hotpink"} onChangeText={(text) => {this.doSomethingWithText(text)}} />
                <Text style={styles.text}>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    input: {
        flex: 0.05,
        borderColor: '#000',
        borderWidth: 1,
        margin: 10
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        flex: 0.95,
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1
    }
});
