import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const { statusBarHeight } = Constants;

const { height } = Dimensions.get('screen');

export const screenHeight = height - statusBarHeight;
export const fullScreenHeight = height;
export const headerHeight = 75;
export const productHeight = 253.7;

export const emailValidationRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

// Note: Colors

export const gray = '#C8D1F0';
export const lightgray = '#CED5EE';
export const repletegray = '#646E8B';
export const blue = '#45C7ED';
export const yellow = '#FBE900';
export const orange = '#FF6B00';
export const black = '#2F2747';
export const white = '#fff';
export const red = 'red';
export const green = '#36CCA0';
export const pink = '#FFC0CB';
