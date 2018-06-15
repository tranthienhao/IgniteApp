import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native'
import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <Image
          source={require('../Images/cart.png')}
          style={styles.cart}
        />
        <Text style={styles.logo}>E-commerce</Text>
      </View>
    );
  }
}
