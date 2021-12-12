import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ScreenMealDetails = props => {
    return (<View style={styles.root}>
        <Text style={styles.text}>Screen Meal Details!</Text>
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
        color:'#00EEAF',
        fontWeight:'bold'
        
    }
});


export default ScreenMealDetails;