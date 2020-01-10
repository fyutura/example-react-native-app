import { BASE_IMAGE_URL } from './api';

export const getUrl = name => `${BASE_IMAGE_URL}/${name}`;
export const getSmallThumbUrl = name =>
  `${BASE_IMAGE_URL}/${name.slice(0, -4)}_ths${name.slice(-4)}`;
export const getLargeThumbUrl = name =>
  `${BASE_IMAGE_URL}/${name.slice(0, -4)}_thl${name.slice(-4)}`;
