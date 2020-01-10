import { StyleSheet } from 'react-native';
import { repletegray } from '~/constants';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListTitle: {
    color: repletegray,
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyListText: {
    color: repletegray,
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 17,
  },
});
