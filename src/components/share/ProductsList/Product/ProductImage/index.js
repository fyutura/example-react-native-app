import React from 'react';
import { Image, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Link } from 'react-router-native';
import P from 'prop-types';
import style from './style';
import { SvgTop, SvgComment, SvgHeart } from '~/components/common/Icons';

class ProductImage extends React.Component {
  state = {
    isLoading: true,
  };

  handleOnEndLoadImage = () => this.setState({ isLoading: false });

  render() {
    const { source, top, isActive, ProductSeller, toggleLike, productId } = this.props;
    return (
      <View style={style.container}>
        <Link to={`/product/${productId}`}>
          <View style={{ position: 'relative' }}>
            <Image
              style={style.image}
              resizeMode="cover"
              source={source}
              onLoadEnd={this.handleOnEndLoadImage}
            />
            {this.state.isLoading && (
              <View style={style.imageLoaderWrapper}>
                <ActivityIndicator size="large" />
              </View>
            )}
          </View>
        </Link>
        {top && (
          <View style={style.top}>
            <Text style={style.topText}>Top deal</Text>
            <SvgTop />
          </View>
        )}
        <TouchableOpacity style={style.message} onPress={ProductSeller}>
          <SvgComment />
        </TouchableOpacity>
        <TouchableOpacity style={style.heart} onPress={toggleLike}>
          <SvgHeart isActive={isActive} />
        </TouchableOpacity>
      </View>
    );
  }
}

ProductImage.propTypes = {
  source: P.oneOfType([P.object, P.number]).isRequired,
  top: P.bool.isRequired,
  isActive: P.bool.isRequired,
  ProductSeller: P.func.isRequired,
  toggleLike: P.func.isRequired,
  productId: P.string.isRequired,
};

export default ProductImage;
