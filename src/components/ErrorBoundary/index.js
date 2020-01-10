import React from 'react';
import { View, Text } from 'react-native';
import P from 'prop-types';
import style from './style';

const ErrorBoundary = ({ error }) => (
  <View style={style.errorBoundaryWrapper}>
    <Text>{error}</Text>
  </View>
);

ErrorBoundary.propTypes = {
  error: P.string.isRequired,
};

export default ErrorBoundary;
