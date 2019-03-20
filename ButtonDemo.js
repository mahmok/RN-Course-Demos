import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';



export default class ButtonDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            buttonPressed: false
        }
    }

    myButtonPress = () => {
        let btnPressed = this.state.buttonPressed;
        this.setState({buttonPressed: !btnPressed})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.btnContainer}>
                    <Button title={"Toggle Text"} onPress={() => {this.myButtonPress()}}/>
                </View>
                <Text>{this.state.buttonPressed? 'YES!': 'NO'}</Text>
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
    btnContainer: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10

    }
});
