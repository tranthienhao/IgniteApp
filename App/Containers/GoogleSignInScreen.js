import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GoogleSignInScreenStyle'

class GoogleSignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this._setupGoogleSignin()
  }
  render () {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Auto}
            onPress={this._signIn.bind(this)}
          />
       </View>
      )
    }

    if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
            Welcome {this.state.user.name}
          </Text>
          <Text>Your email is: {this.state.user.email}</Text>
          <TouchableOpacity
            onPress={() => {
              this._signOut()
            }}
          >
            <View style={{ marginTop: 50 }}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }
  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true })
      const configPlatform = {
        ...Platform.select({
          ios: {
            iosClientId: '198885462516-4prnb38tg03agpu3vukr0avmdrl7b5f9.apps.googleusercontent.com'
          },
          android: {}
        })
      }

      await GoogleSignin.configure({
        ...configPlatform,
        webClientId: '198885462516-4vd3490sjhei5o1cdvrvfua9fli6vjnu.apps.googleusercontent.com',
        offlineAccess: false
      })

      const user = await GoogleSignin.currentUserAsync()
      console.log(user)
      this.setState({ user })
    } catch (err) {
      console.warn('Google signin error', err.code, err.message)
    }
  }
  _signIn() {
    GoogleSignin.signIn()
      .then(user => {
        console.log(user)
        this.setState({ user: user })
      
      })
      .catch(err => {
        console.warn(err)
      })
      .done()
  }
  _signOut() {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => {
        this.setState({ user: null })
      })
      .done()
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

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignInScreen)
