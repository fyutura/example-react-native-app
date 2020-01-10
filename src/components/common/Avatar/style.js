import { StyleSheet } from 'react-native';
import { orange } from '~/constants';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  imageWrapper: {
    overflow: 'hidden',
    borderRadius: 999,
  },
  dot: {
    position: 'absolute',
    right: 5,
    bottom: 2,
    width: 10,
    height: 10,
    backgroundColor: orange,
    borderRadius: 999,
  },
  chat: {
    width: 25,
    height: 25,
  },
  sm: {
    width: 34,
    height: 34,
  },
  lg: {
    width: 60,
    height: 60,
  },
});
