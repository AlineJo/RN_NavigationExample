import * as Font from 'expo-font'

 

export const FONT_ROBOTO_THIN = 'font-roboto_thin'
export const FONT_ROBOTO_LIGHT = 'font-roboto_light'
export const FONT_ROBOTO_BOLD = 'font-roboto_bold'

const fetchMyFonts = () => {
    return Font.loadAsync({
        'font-roboto_thin': require('../assets/fonts/Roboto-Thin.ttf'),
        'font-roboto_light': require('../assets/fonts/Roboto-Light.ttf'),
        'font-roboto_bold': require('../assets/fonts/Roboto-Bold.ttf'),
    })
}

export default fetchMyFonts;