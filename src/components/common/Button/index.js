import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Button as AntdButton } from '@ant-design/react-native';
import P from 'prop-types';
import style from './style';
import { setButtonColor, setButtonSize, setButtonBackground, setType } from './helpers';

const Button = ({ children, color, size, ...props }) => {
  return (
    <AntdButton style={[style.button, setButtonSize(size), setButtonBackground(color)]} {...props}>
      <Text style={[style.text, setButtonColor(color)]}>{children}</Text>
    </AntdButton>
  );
};

export const CategoryButton = ({ type, ...props }) => (
  <TouchableOpacity {...props}>{setType(type)}</TouchableOpacity>
);

Button.propTypes = {
  children: P.oneOfType([P.string, P.array]),
  color: P.string,
  size: P.string,
};

CategoryButton.propTypes = {
  type: P.string.isRequired,
};

Button.defaultProps = {
  children: 'Button',
  color: 'blue',
  size: 'large',
};

export default Button;
