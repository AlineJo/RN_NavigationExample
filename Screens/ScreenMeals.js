import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ScreenMeals = props => {
    return (<View style={styles.root}>
        <Text style={styles.text}>Screen Meals!</Text>
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
        color:'#FFAF3F',
        fontWeight:'bold'
        
    }
});


export default ScreenMeals;