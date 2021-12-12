import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { FONT_ROBOTO_THIN,FONT_ROBOTO_LIGHT, FONT_ROBOTO_BOLD } from '../Hooks/MyHookUseFont';


const ScreenMeals = props => {
    return (<View style={styles.root}>
        <Text style={styles.textT}>Screen Meals!</Text>
        <Text style={styles.textL}>Screen Meals!</Text>
        <Text style={styles.textB}>Screen Meals!</Text>
    </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textT: {
        fontSize: 18,
        color: '#FFAF3F',
        fontFamily: FONT_ROBOTO_THIN

    },
    textL: {
        fontSize: 18,
        color: '#FFAF3F',
        fontFamily: FONT_ROBOTO_LIGHT

    }, 
    textB: {
        fontSize: 18,
        color: '#FFAF3F',
        fontFamily: FONT_ROBOTO_BOLD

    },
});


export default ScreenMeals;