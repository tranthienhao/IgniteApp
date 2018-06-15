import React, { Component } from 'react'
import { ScrollView, Image, Button, Text} from 'react-native'
import { connect } from 'react-redux'
import TextActions from '../Redux/TextRedux'
import GithubActions from '../Redux/GithubRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TextScreenStyle'

class TextScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Button 
          title= 'Change Image'
            onPress={() => { this.props.userRequest('tranthienhao')}}>
          </Button>
        <Image 
          style={{ width: 200, height: 200, margin: 10}}
          source={{uri: this.props.githubState.avatar}} />
        <Button
          title='Change Text'
          onPress={() => { this.props.textRequest() }}>
        </Button>
        <Text>{JSON.stringify(this.props.textState.payload)}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    githubState: state.github,
    textState: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userRequest: (username) => dispatch(GithubActions.userRequest(username)),
    textRequest: () => dispatch(TextActions.textRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextScreen)
