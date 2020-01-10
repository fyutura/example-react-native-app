import React from 'react';
import { Text, View } from 'react-native';
import { WhiteSpace } from '@ant-design/react-native';
import { SvgActiveProduct, SvgSoldProduct, SvgFavoriteProduct } from '~/components/common/Icons';
import style from './style';

export const setButtonBackground = color => {
  switch (color) {
    case 'blue':
      return style.backgroundColorBlue;
    case 'white':
      return style.backgroundColorWhite;
    case 'orange':
      return style.backgroundColorOrange;
    case 'yellow':
      return style.backgroundColorYellow;
    default:
      return style.backgroundColorBlue;
  }
};

export const setButtonSize = size => {
  switch (size) {
    case 'large':
      return style.large;
    case 'small':
      return style.small;
    default:
      return style.large;
  }
};

export const setButtonColor = color => {
  switch (color) {
    case 'blue':
      return style.textColorWhite;
    case 'yellow':
      return style.textColorBlack;
    case 'orange':
      return style.textColorWhite;
    case 'white':
      return style.textColorBlue;
    default:
      return style.large;
  }
};

export const setType = (type = null) => {
  switch (type) {
    case 'active':
      return (
        <View style={style.categoryWrapper}>
          <SvgActiveProduct />
          <WhiteSpace size="md" />
          <Text>Active</Text>
        </View>
      );
    case 'sold':
      return (
        <View style={style.categoryWrapper}>
          <SvgSoldProduct />
          <WhiteSpace size="md" />
          <Text>Sold</Text>
        </View>
      );
    case 'favorite':
      return (
        <View style={style.categoryWrapper}>
          <SvgFavoriteProduct />
          <WhiteSpace size="md" />
          <Text>Favorite</Text>
        </View>
      );
    default:
      return null;
  }
};
