import React from 'react';
// NOTE: Decided to hide temporary
// import { AdMobBanner } from 'expo-ads-admob';
import { View, FlatList } from 'react-native';
import P from 'prop-types';
import Product from './Product';
import EmptyList from './EmptyList';
import { productHeight } from '~/constants';

class ProductsList extends React.Component {
  renderItem = ({ item }) => {
    const { toggleLike, ProductSeller } = this.props;
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {item.map(product => (
            <Product
              key={product._id}
              {...product}
              toggleLike={toggleLike}
              ProductSeller={ProductSeller}
              isActive={product.liked}
            />
          ))}
        </View>
      </View>
    );
  };

  render() {
    const {
      emptyListType,
      ListHeaderComponent,
      onEndReached,
      onRefresh,
      refreshing,
      initialScrollIndex,
    } = this.props;
    return (
      <FlatList
        getItemLayout={(_, index) => ({
          length: productHeight,
          offset: productHeight * index,
          index,
        })}
        initialNumToRender={this.props.data.length}
        maxToRenderPerBatch={this.props.data.length}
        data={this.props.data}
        initialScrollIndex={initialScrollIndex}
        renderItem={this.renderItem}
        keyExtractor={([{ _id }]) => _id}
        ListEmptyComponent={<EmptyList type={emptyListType} />}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
        onRefresh={onRefresh}
        refreshing={refreshing}
        bounces={Boolean(onRefresh)}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    );
  }
}

ProductsList.defaultProps = {
  data: null,
  emptyListType: null,
  ListHeaderComponent: null,
  isLoading: null,
  onEndReached: null,
  onRefresh: null,
  refreshing: false,
  withAdvertising: false,
  initialScrollIndex: 0,
  handleChangeScrollPosition: null,
};

ProductsList.propTypes = {
  toggleLike: P.func.isRequired,
  ProductSeller: P.func.isRequired,
  isLoading: P.bool,
  data: P.array,
  emptyListType: P.string,
  ListHeaderComponent: P.element,
  onEndReached: P.func,
  onRefresh: P.func,
  refreshing: P.bool,
  withAdvertising: P.bool,
  initialScrollIndex: P.number,
  handleChangeScrollPosition: P.func,
};

export default ProductsList;
