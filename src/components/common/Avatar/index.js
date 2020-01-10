import React from 'react';
import { View, Image } from 'react-native';
import P from 'prop-types';
import { BASE_IMAGE_URL } from 'shared/client/api';
import style from './style';
import defaultAvatar from '~/../assets/defaultAvatar.png';

const Avatar = ({ size, active, avatar }) => {
  const source = avatar ? { uri: `${BASE_IMAGE_URL}/${avatar}` } : defaultAvatar;
  return (
    <View style={style.container}>
      <View style={style.imageWrapper}>
        <Image source={source} resizeMode="cover" style={style[size]} />
      </View>
      {active && <View style={style.dot} />}
    </View>
  );
};

Avatar.defaultProps = {
  size: 'sm',
  avatar: null,
  active: false,
};

Avatar.propTypes = {
  size: P.string,
  active: P.bool,
  avatar: P.string,
};

export default Avatar;
