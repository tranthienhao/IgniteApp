import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native'
import styles from './Styles/BannerStyle'
import ImageOverlay from './ImageOverlay'

export default class Banner extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View>
        <ImageBackground
          source={require('../Images/img5.jpg')}
          style={styles.banner}>
          <ImageOverlay
            header='- React Native -'
            paragraph='- e-commerce -' />
        </ImageBackground>

      </View>
    )
  }
}
