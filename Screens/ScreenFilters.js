import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ScreenFilters = props => {
    return (<View style={styles.root}>
        <Text style={styles.text}>Screen Filters!</Text>
    </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:18,
        color:'#FF33FF',
        fontWeight:'bold'
        
    }
});


export default ScreenFilters;