import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  overlayHeader: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    alignSelf: 'center',
    fontSize: 28,
    color: '#292929',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 'bold'
  },
  overlayParagraph: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 1,
    alignSelf: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#292929',
    textAlign: 'center',
    padding: 8,
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  }
})
