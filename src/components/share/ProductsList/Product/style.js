import { StyleSheet } from 'react-native';
import { repletegray, productHeight } from '~/constants';

export default StyleSheet.create({
  cardWrapper: {
    flexBasis: '50%',
    padding: 5,
    height: productHeight,
  },
  resetCard: {
    paddingBottom: 0,
  },
  resetHeader: {
    marginLeft: 10,
    paddingRight: 10,
  },
  resetBody: {
    paddingVertical: 0,
    borderTopWidth: 0,
    minHeight: 0,
    flexGrow: 0,
  },
  resetFooter: {
    marginBottom: 10,
  },
  text: {
    color: repletegray,
  },
  footerContentWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  thumbContentWrapper: {
    paddingRight: 6,
  },
});
