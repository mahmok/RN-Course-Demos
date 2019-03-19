import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native'; //Import Image



export default class ImageDemo extends React.Component 
{
    render() {
        return (
        <View style={styles.container}>
            <Image source={{uri: "https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg"}} style={{width: '100%', height: 300}} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
