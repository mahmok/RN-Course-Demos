import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, WebView} from 'react-native';



export default class WebViewDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView 
                    source={{uri: "https://www.google.com"}}
                    style={styles.webViewContainer}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'grey'
    },
    webViewContainer: {
        margin: 20,
        borderWidth: 1,
        borderColor: 'red'
    }
});
