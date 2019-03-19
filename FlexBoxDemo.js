import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';



export default class FlexBoxDemo extends React.Component 
{
    render() {
        return (
        <View style={styles.container}>
            <View style={{flex: 0.5, flexDirection: 'row'}}>
                <View style={{flex: 0.5, backgroundColor: 'red'}}></View>
                <View style={{flex: 0.5, backgroundColor: 'blue'}}></View>
            </View>
            <View style={{flex: 0.25, flexDirection: 'row'}}>
                <View style={{flex: 0.7, backgroundColor: 'pink'}}></View>
                <View style={{flex: 0.3, backgroundColor: 'cyan'}}></View>
            </View>
            <View style={{flex: 0.25, flexDirection: 'row'}}>
                <View style={{flex: 0.2, backgroundColor: 'green'}}></View>
                <View style={{flex: 0.6, backgroundColor: 'black'}}></View>
                <View style={{flex: 0.2, backgroundColor: 'royalblue'}}></View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
});
