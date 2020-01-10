import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { WhiteSpace, Flex } from '@ant-design/react-native';
import { BASE_IMAGE_URL } from 'shared/client/api';
import P from 'prop-types';
import style from './style';
import defaultIcon from '~/../assets/defaultIcon.png';

const Category = ({ onSelect, _id, title, icon, isActive, backgroundColor }) => {
  const onPress = () => onSelect(_id);
  const source = icon ? { uri: `${BASE_IMAGE_URL}/${icon}` } : defaultIcon;
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: -10 }}>
      <Flex direction="column">
        <Flex justify="center" align="center" style={[style.iconWrapper, { backgroundColor }]}>
          <Image source={source} resizeMode="contain" style={style.icon} />
        </Flex>
        <WhiteSpace size="lg" />
        <View style={{ width: 80 }}>
          <Text
            numberOfLines={6}
            style={[style.categoryName, isActive ? style.activeCategoryName : null]}
          >
            {title}
          </Text>
        </View>
      </Flex>
    </TouchableOpacity>
  );
};

Category.defaultProps = {
  title: '',
  icon: null,
};

Category.propTypes = {
  title: P.string,
  onSelect: P.func.isRequired,
  icon: P.string,
  _id: P.string.isRequired,
  isActive: P.bool.isRequired,
  backgroundColor: P.string.isRequired,
};

export default Category;
