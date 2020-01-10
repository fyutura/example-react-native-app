import { StyleSheet } from 'react-native';
import { blue, yellow, white, black, orange } from '~/constants';

export default StyleSheet.create({
  button: {
    borderRadius: 100,
    borderWidth: 0,
    overflow: 'hidden',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  backgroundColorBlue: {
    backgroundColor: blue,
  },
  backgroundColorYellow: {
    backgroundColor: yellow,
  },
  backgroundColorOrange: {
    backgroundColor: orange,
  },
  backgroundColorWhite: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: blue,
  },
  textColorBlack: {
    color: black,
  },
  textColorWhite: {
    color: white,
  },
  textColorBlue: {
    color: blue,
  },
  large: {
    height: 45,
    minWidth: 160,
  },
  small: {
    height: 25,
    minWidth: 115,
  },
  categoryWrapper: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});
