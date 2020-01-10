import React from 'react';
import { ProductsList } from 'shared/constants/textContent';

import {
  SvgEmptyListFavorite,
  SvgEmptyListHome,
  SvgEmptyListSelling,
  SvgEmptyListSold,
} from '../Product/ProductImage/node_modules/~/components/common/Icons';

const ACTIVE = 'active';
const SOLD = 'sold';
const FAVORITE = 'favorite';
const HOME = 'home';

export const setTitle = type => {
  switch (type) {
    case ACTIVE:
      return ProductsList.activeTitle;
    case SOLD:
      return ProductsList.soldTitle;
    case FAVORITE:
      return ProductsList.favoriteTitle;
    case HOME:
      return ProductsList.homeTitle;
    default:
      return null;
  }
};

export const setSubtitle = type => {
  switch (type) {
    case ACTIVE:
      return ProductsList.activeSubtitle;
    case SOLD:
      return ProductsList.soldSubtitle;
    case FAVORITE:
      return ProductsList.favoriteSubtitle;
    case HOME:
      return ProductsList.homeSubtitle;
    default:
      return null;
  }
};

export const setIcon = type => {
  switch (type) {
    case ACTIVE:
      return <SvgEmptyListSelling />;
    case SOLD:
      return <SvgEmptyListSold />;
    case FAVORITE:
      return <SvgEmptyListFavorite />;
    case HOME:
      return <SvgEmptyListHome />;
    default:
      return null;
  }
};

export const setButtonText = type => {
  switch (type) {
    case ACTIVE:
      return 'Start selling';
    case SOLD:
      return 'Start selling';
    case FAVORITE:
      return 'Explore now';
    default:
      return null;
  }
};
