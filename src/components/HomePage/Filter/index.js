import React from 'react';
import { View } from 'react-native';
import P from 'prop-types';
import style from './style';
import Location from './Location';
import Posted from './Posted';
import Price from './Price';
import Sort from './Sort';
import ContentWrapper from './ContentWrapper';

const Filter = ({
  locations,
  selectLocation,
  handleChangeLocation,
  handleChangeSortBy,
  sortBy,
  postedWithin,
  handleChangePostedWithin,
  handleChangePriceRange,
  priceFrom,
  priceTo,
}) => (
  <View style={style.modal}>
    <ContentWrapper>
      <Location
        {...{
          locations,
          selectLocation,
          handleChangeLocation,
        }}
      />
    </ContentWrapper>
    <ContentWrapper>
      <Price
        {...{
          handleChangePriceRange,
          priceFrom,
          priceTo,
        }}
      />
    </ContentWrapper>
    <ContentWrapper>
      <Sort {...{ handleChangeSortBy, sortBy }} />
    </ContentWrapper>
    <ContentWrapper>
      <Posted {...{ postedWithin, handleChangePostedWithin }} />
    </ContentWrapper>
  </View>
);

Filter.defaultProps = {
  selectLocation: P.string,
  priceFrom: null,
  priceTo: null,
  postedWithin: null,
};

Filter.propTypes = {
  locations: P.array.isRequired,
  selectLocation: P.string,
  priceFrom: P.string,
  priceTo: P.string,
  handleChangeLocation: P.func.isRequired,
  handleChangeSortBy: P.func.isRequired,
  sortBy: P.string.isRequired,
  postedWithin: P.string,
  handleChangePostedWithin: P.func.isRequired,
  handleChangePriceRange: P.func.isRequired,
  closeFiltersHandler: P.func.isRequired,
};

const comparisonFn = (prevProps, nextProps) => {
  if (
    prevProps.selectLocation === nextProps.selectLocation ||
    prevProps.priceFrom === nextProps.priceFrom ||
    prevProps.priceTo === nextProps.priceTo ||
    prevProps.sortBy === nextProps.sortBy ||
    prevProps.postedWithin === nextProps.postedWithin
  ) {
    return false;
  }
  return true;
};

export default React.memo(Filter, comparisonFn);
