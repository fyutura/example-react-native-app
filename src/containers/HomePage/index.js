import React, { Component, Fragment } from 'react';
import { Toast } from '@ant-design/react-native';
import { Product } from 'shared/client';
import ProductsList from '~/components/share/ProductsList';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import HomePageHoc from 'shared/hoc/HomePage';
import style from './style';
import ProductsFilter from '~/components/HomePage/ProductsFilter';
import ErrorBoundary from '~/components/ErrorBoundary';
import registerForPushNotificationsAsync from '~/utils/pushNotifications';
import LayoutWithSafeArea from '~/components/common/Layouts/LayoutWithSafeArea';

class HomePage extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    registerForPushNotificationsAsync();
    this.props.getProductsFilters();
  }

  handleCategoryId = categoryId => this.props.handleCategoryId(categoryId);

  handleChangeLocation = location => this.props.handleChangeLocation(location);

  handleChangeSortBy = sortBy => this.props.handleChangeSortBy(sortBy);

  handleChangePostedWithin = postedWithin => this.props.handleChangePostedWithin(postedWithin);

  handleChangePriceRange = ({ priceFrom, priceTo }) =>
    this.props.handleChangePriceRange({ priceFrom, priceTo });

  handleSearch = searchInput => this.props.handleSearch(searchInput);

  toggleProductsFilterHandler = toggler => this.setState({ isVisible: toggler });

  toggleLike = async (ProductId, userId, isLiked) => {
    if (this.props.currentUserId === userId) {
      Toast.fail('It is your Product');
    } else {
      this.handleLike(ProductId, isLiked);
    }
  };

  handleLike = async (ProductId, isLiked) => {
    if (isLiked) {
      try {
        await Product.unfavorite(ProductId);
        this.props.toggleLikedProductHandler(ProductId, false);
      } catch (err) {
        Toast.fail('Unable to delete Favorite Product');
      }
    } else {
      try {
        await Product.makeFavorite(ProductId);
        this.props.toggleLikedProductHandler(ProductId, true);
      } catch (err) {
        Toast.fail('Unable to set Favorite Product');
      }
    }
  };

  getItemLayout = (_, index) => ({ length: 500, offset: 500 * index, index });

  render() {
    const {
      productsList,
      availableLocations,
      selectLocation,
      sortBy,
      errorDescription,
      isLoading,
      handleInfiniteOnLoadMobile,
      handleRefresh,
      isRefreshing,
      scrollPosition,
      isError,
    } = this.props;
    if (isError) {
      return <ErrorBoundary errorDescription={errorDescription} />;
    }
    return (
      <LayoutWithSafeArea>
        <Fragment>
          <Modal
            isVisible={this.state.isVisible}
            style={style.modal}
            coverScreen
            hasBackdrop={false}
          >
            <ProductsFilter
              locations={availableLocations}
              selectLocation={selectLocation}
              handleChangeLocation={this.handleChangeLocation}
              handleChangeSortBy={this.handleChangeSortBy}
              sortBy={sortBy}
              closeFiltersHandler={this.toggleFilterHandler}
            />
          </Modal>
          <ProductsList
            productsList={productsList}
            getItemLayout={this.getItemLayout}
            isLoading={isLoading}
            toggleLike={this.toggleLike}
            initialScrollIndex={scrollPosition}
            emptyListType="Products"
            onEndReached={handleInfiniteOnLoadMobile}
            onMomentumScrollEnd={this.onMomentumScrollEnd}
            onScrollBeginDrag={this.onScrollBeginDrag}
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            withAdvertising
          />
        </Fragment>
      </LayoutWithSafeArea>
    );
  }
}
HomePage.defaultProps = {
  selectLocation: null,
  currentUserId: null,
  productsList: null,
};
HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productsList: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string.isRequired, username: PropTypes.string.isRequired })
  ),
  handleInfiniteOnLoadMobile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  availableLocations: PropTypes.array.isRequired,
  selectLocation: PropTypes.string,
  isError: PropTypes.bool.isRequired,
  handleChangeLocation: PropTypes.func.isRequired,
  handleChangeSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  errorDescription: PropTypes.string.isRequired,
  handleChangePostedWithin: PropTypes.func.isRequired,
  handleChangePriceRange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getProductsFilters: PropTypes.func.isRequired,
  handleCategoryId: PropTypes.func.isRequired,
  currentUserId: PropTypes.string,
  toggleLikedProductHandler: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};
export default HomePageHoc(HomePage);
