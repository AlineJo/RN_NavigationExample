import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ScreenFavorites = props => {
    return (<View style={styles.root}>
        <Text style={styles.text}>Screen Favorites!</Text>
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
        color:'#00F00F',
        fontWeight:'bold'
        
    }
});


export default ScreenFavorites;