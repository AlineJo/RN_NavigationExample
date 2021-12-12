import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import fetchMyFonts from './Hooks/MyHookUseFont'
import ScreenMeals from './Screens/ScreenMeals'



export default function App() {
  const [isFontLoaded, setIsFontloaded] = useState(false)

  if (!isFontLoaded) {
    return (
      <AppLoading startAsync={fetchMyFonts} onFinish={() => { setIsFontloaded(true) }} onError={(e) => console.log(e)} />
    )

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScreenMeals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
