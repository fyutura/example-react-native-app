import { StyleSheet } from 'react-native';
import { white } from '~/constants';

export default StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    right: -60,
    backgroundColor: '#FFCD05',
    width: '100%',
    padding: 3,
    transform: [{ rotate: '45deg' }],
  },
  topText: {
    textTransform: 'uppercase',
    color: white,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 5,
  },
  message: {
    position: 'absolute',
    bottom: -5,
    left: -5,
    padding: 10,
  },
  heart: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    padding: 10,
  },
  text: {
    color: white,
  },
  imageLoaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
  },
});
