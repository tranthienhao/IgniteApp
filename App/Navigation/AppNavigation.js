import { TabNavigator, TabBarBottom } from 'react-navigation'
import GoogleSignInScreen from '../Containers/GoogleSignInScreen'
import TextScreen from '../Containers/TextScreen'
import EcommerceScreen from '../Containers/EcommerceScreen'
import TextablesScreen from '../Containers/TextablesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = TabNavigator({
  GoogleSignInScreen: { screen: GoogleSignInScreen },
  TextScreen: { screen: TextScreen },
  //  TextablesScreen: { screen: TextablesScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
})

export default PrimaryNav
