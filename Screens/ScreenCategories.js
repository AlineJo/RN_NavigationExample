import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ScreenCategories = props => {
    return (<View style={styles.root}>
        <Text style={styles.text}>Screen Categories!</Text>
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
        color:'black',
        fontWeight:'bold'
        
    }
});


export default ScreenCategories;