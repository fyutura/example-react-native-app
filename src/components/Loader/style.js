import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    paddingVertical: Dimensions.get('screen').height / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
