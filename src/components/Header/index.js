import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Flex } from '@ant-design/react-native';
import P from 'prop-types';
import { SvgArrowLeft } from '~/components/common/Icons';
import Line from '~/components/common/Line';
import style from './style';

const Header = ({ onPressBack, children }) => (
  <View style={style.header}>
    <Flex align="center" justify="between">
      <TouchableOpacity onPress={onPressBack} style={style.backButton}>
        <SvgArrowLeft />
        <Text style={{ fontSize: 17 }}>Back</Text>
      </TouchableOpacity>
      {children}
      <View style={{ width: 80 }} />
    </Flex>
    <Line />
  </View>
);

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  onPressBack: P.func.isRequired,
  children: P.element,
};

export default Header;
