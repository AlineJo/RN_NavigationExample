import Font from 'expo-font'


const fetchMyFonts=()=>{
   return
    Font.loadAsync({
        'font-roboto_thin': require('../assets/fonts/Roboto-Thin.tff'),
        'font-roboto_light': require('../assets/fonts/Roboto-Light.tff'),
        'font-roboto_bold': require('../assets/fonts/Roboto-Bold.tff'),
    })
}

export default fetchMyFonts;