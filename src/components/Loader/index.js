import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from '@ant-design/react-native';
import style from './style';

const Loader = () => (
  <View style={style.loaderWrapper}>
    <ActivityIndicator />
  </View>
);

export default Loader;
