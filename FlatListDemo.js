import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';



export default class FlatListDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {selectedItem: "Nothing Selected!"};
    }

    myOnPress = (itemText) => {
    
        this.setState({selectedItem: itemText});
    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity key={item.key + "key"} onPress={() => {this.myOnPress(item.title)}}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <FlatList data={[{key: "1", title: "One"}, {key: "2", title: "Two"}, {key: "3", title: "Three"}]} renderItem={this.renderItem}  />
                </View>
                <Text style={{alignSelf: 'center', padding: 10}}>{this.state.selectedItem}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    }
});
