import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/EcommerceScreenStyle'

import Header from '../Components/Header'
import Banner from '../Components/Banner'

class EcommerceScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Banner />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceScreen)
