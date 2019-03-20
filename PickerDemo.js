import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Picker} from 'react-native';



export default class PickerDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            language: "Nothing"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: "80%"}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="C++" value="c++" />
                    <Picker.Item label="Python" value="python" />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgrey'
    }
});
