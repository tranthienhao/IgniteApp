import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  googleButton:{ 
    width: 312, 
    height: 48, 
    justifyContent: 'center', 
    alignSelf: 'center' 
  }
})
