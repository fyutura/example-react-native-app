import MobileDetect from 'mobile-detect';
import { APP_RESIZE } from '../constants/main';

// NOTE: common reducer which may be used for general purposes
// such as isLoading etc.

function getIsMobile() {
  const md = new MobileDetect(window.navigator.userAgent);
  return !!md.mobile() || window.innerWidth < 900;
}

const initialState = {
  isMobile: getIsMobile(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APP_RESIZE:
      return {
        ...state,
        isMobile: getIsMobile(),
      };
    default:
      return state;
  }
}
