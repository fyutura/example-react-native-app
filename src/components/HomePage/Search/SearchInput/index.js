import React from 'react';
import { View, TextInput } from 'react-native';
import P from 'prop-types';
import style from './style';

const SearchInput = ({ onChangeText, value }) => (
  <View style={style.container}>
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={style.input}
      clearButtonMode="always"
    />
  </View>
);

SearchInput.defaultProps = {
  value: null,
};

SearchInput.propTypes = {
  onChangeText: P.func.isRequired,
  value: P.string,
};

export default SearchInput;
