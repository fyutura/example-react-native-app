/* eslint-disable import/prefer-default-export */
import { Platform } from 'react-native';

const ANDROID_ADMOB_UNIT_ID = null;
const IOS_ADMOB_UNIT_ID = null;
const isAndroid = Platform.OS === 'android';
const AD_UNIT_ID = isAndroid ? ANDROID_ADMOB_UNIT_ID : IOS_ADMOB_UNIT_ID;

export { AD_UNIT_ID };
