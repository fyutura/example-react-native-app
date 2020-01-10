import { AUTH_CHOICE, SWITCH_POPUP_STEP, SHOW_POPUP, CLOSE_POPUP } from '../constants/popup';

const initialState = {
  popupStep: AUTH_CHOICE,
  prevPopupStep: null,
  isPopupVisible: false,
  stepOptions: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_POPUP_STEP: {
      return {
        ...state,
        popupStep: action.step,
        prevPopupStep: state.popupStep,
        stepOptions: action.options,
      };
    }
    case SHOW_POPUP: {
      return {
        ...state,
        isPopupVisible: true,
      };
    }
    case CLOSE_POPUP: {
      return {
        ...state,
        isPopupVisible: false,
      };
    }
    default:
      return state;
  }
}
