import { StyleSheet, Platform } from 'react-native';
import { screenHeight, headerHeight, statusBarHeight, white, repletegray } from '~/constants';

const iosHeight = screenHeight - headerHeight + statusBarHeight;
const androidHeight = screenHeight - headerHeight * 2 + statusBarHeight * 2;

export default StyleSheet.create({
  modal: {
    ...Platform.select({
      ios: {
        height: iosHeight,
      },
      android: {
        height: androidHeight,
      },
    }),
    backgroundColor: white,
  },
  scrollView: {
    borderBottomWidth: 1,
    borderBottomColor: repletegray,
    position: 'relative',
  },
});
