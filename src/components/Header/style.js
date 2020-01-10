import { StyleSheet, Platform } from 'react-native';
import { white } from '~/constants';

export default StyleSheet.create({
  backButton: {
    ...Platform.select({
      ios: {
        width: 60,
        height: 60,
      },
      android: {
        paddingVertical: 20,
        width: 60,
      },
    }),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  header: {
    backgroundColor: white,
  },
});
