import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ActivityIndicator} from 'react-native';



export default class ActivityIndicatorDemo extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: true};

    }

    componentDidMount()
    {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000)
    }

    renderActivityIndicator = () => {
        return  (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }



    render() 
    {
        /**
         * This will work the same.
         * 
         * let contentToBeRendered = null;
         * if(this.state.isLoading)
         * {
         *      contentToBeRendered = this.renderActivityIndicator();
         * }
         * else
         * {
         *      contentToBeRendered =   <View style={styles.container}>
                                            <Text>EVERYTHING LOADED</Text>
                                        </View>;
         * }
         * 
         * return(contentToBeRendered)
         * 
         */
        if(this.state.isLoading)
        {
            return this.renderActivityIndicator();
        }
        return (
            <View style={styles.container}>
                <Text>EVERYTHING LOADED</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    btnContainer: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10

    }
});
