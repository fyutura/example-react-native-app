import React from 'react';
import { withRouter } from 'react-router-native';
import { View, Text } from 'react-native';
import { renderWhiteSpacesXl } from '~/helpers/functions';
import Button from '~/components/common/Button';
import P from 'prop-types';
import { setIcon, setSubtitle, setTitle, setButtonText } from './helpers';
import style from './style';

const EmptyList = ({ type, history }) => (
  <View style={style.container}>
    {renderWhiteSpacesXl(1)}
    <Text style={style.emptyListTitle}>{setTitle(type)}</Text>
    {renderWhiteSpacesXl(1)}
    {setIcon(type)}
    {renderWhiteSpacesXl(1)}
    <Text style={style.emptyListText}>{setSubtitle(type)}</Text>
    {renderWhiteSpacesXl(1)}
    {type !== 'home' && (
      <Button onPress={() => history.push('/home')}>{setButtonText(type)}</Button>
    )}
  </View>
);

EmptyList.defaultProps = {
  type: null,
};

EmptyList.propTypes = {
  type: P.string,
  history: P.shape({
    push: P.func.isRequired,
  }).isRequired,
};

export default withRouter(EmptyList);
