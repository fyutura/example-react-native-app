import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Flex } from '@ant-design/react-native';
import P from 'prop-types';
import { SvgFilter } from '~/components/common/Icons';
import SearchInput from './SearchInput';

const Search = props => (
  <Flex direction="row" justify="between" align="center">
    <SearchInput onChangeText={props.handleSearch} value={props.searchValue} />
    <TouchableOpacity onPress={props.openFiltersHandler}>
      <SvgFilter />
    </TouchableOpacity>
  </Flex>
);

Search.defaultProps = {
  searchValue: null,
};

Search.propTypes = {
  openFiltersHandler: P.func.isRequired,
  handleSearch: P.func.isRequired,
  searchValue: P.string,
};

export default Search;
