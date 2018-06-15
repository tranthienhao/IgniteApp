import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ImageOverlayStyle'

export default class ImageOverlay extends Component {
  render () {
      let header = this.props.header ?
        <Text style={styles.overlayHeader}>{this.props.header}</Text> : null
      let paragraph = this.props.paragraph ?
        <Text style={styles.overlayParagraph}>{this.props.paragraph}</Text> : null
      return (
        <View>
          {header}
          {paragraph}
        </View>
    );
  }
}
