import { StyleSheet } from 'react-native';
import { lightgray } from '~/constants';

export default StyleSheet.create({
  productWrapper: {
    flexBasis: '49%',
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  showMore: {
    color: lightgray,
    textAlign: 'center',
    fontSize: 15,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  more: {
    textAlign: 'center',
    color: lightgray,
  },
  empty: {
    textAlign: 'center',
    color: lightgray,
  },
  bannerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  advertisingListWrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
