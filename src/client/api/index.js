import axios from 'axios';

import {
  REACT_APP_API_BASE_URL,
  REACT_APP_IMAGES_BASE_URL,
  REACT_APP_WEB_BASE_URL,
} from 'react-native-dotenv';

// import variable bellow for react native app
// when the variable is undefined, in the case of the web,
// then the variable with process.env will be taken,
// in the other case for the mobile there will
// be the value that is specified in .env
export const BASE_URL = REACT_APP_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;
export const BASE_IMAGE_URL = REACT_APP_IMAGES_BASE_URL || process.env.REACT_APP_IMAGES_BASE_URL;
export const BASE_WEB_APP_URL = REACT_APP_WEB_BASE_URL || process.env.REACT_APP_WEB_BASE_URL;

const api = axios.create({
  baseURL: `${BASE_URL}/v1/`,
});

export default api;
