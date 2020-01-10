import { StyleSheet, Dimensions } from 'react-native';
import { lightgray } from '~/constants';

const containerWidth = Dimensions.get('screen').width - 70;

export default StyleSheet.create({
  container: {
    borderRadius: 15,
    height: 35,
    width: containerWidth,
    borderWidth: 1,
    borderColor: lightgray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexBasis: '100%',
    height: 35,
    paddingLeft: 10,
  },
});
