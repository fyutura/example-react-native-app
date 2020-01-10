import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from '@ant-design/react-native';
import P from 'prop-types';
import { Media } from 'shared/client';
import defaultContact from 'assets/defaultContact.png';
import style from './style';
import ContactImage from './ProductImage';

const { Body } = Card;

class Contact extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.liked === this.props.liked) {
      return false;
    }
    return true;
  }

  toggleLike = () => this.props.toggleLike(this.props._id, this.props.user._id, this.props.liked);

  contactSeller = () => this.props.contactSeller(this.props._id, this.props.user._id);

  render() {
    const { photos, isTop } = this.props;
    const source = photos.length ? { uri: Media.getSmallThumbUrl(photos[0]) } : defaultContact;
    return (
      <View style={style.cardWrapper}>
        <Card style={style.resetCard}>
          <Body style={style.resetBody}>
            <ContactImage
              ContactId={this.props._id}
              source={source}
              top={isTop}
              contactSeller={this.contactSeller}
              toggleLike={this.toggleLike}
              isActive={this.props.isActive}
            />
          </Body>
        </Card>
      </View>
    );
  }
}

Contact.defaultProps = {
  liked: false,
  isActive: false,
};

Contact.propTypes = {
  _id: P.string.isRequired,
  photos: P.array.isRequired,
  toggleLike: P.func.isRequired,
  contactSeller: P.func.isRequired,
  isActive: P.bool,
  user: P.shape({ _id: P.string }).isRequired,
  isTop: P.bool.isRequired,
  liked: P.bool,
};

export default Contact;
