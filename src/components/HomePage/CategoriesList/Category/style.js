import { StyleSheet } from 'react-native';
import { lightgray, repletegray } from '~/constants';

export default StyleSheet.create({
  iconWrapper: {
    borderRadius: 99999,
    overflow: 'hidden',
    width: 60,
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
  },
  categoryName: {
    textAlign: 'center',
    fontSize: 13,
    color: repletegray,
  },
  activeCategoryName: {
    color: lightgray,
  },
});
