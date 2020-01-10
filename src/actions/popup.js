import { SWITCH_POPUP_STEP, SHOW_POPUP, CLOSE_POPUP } from '../constants/popup';

export const switchPopupStep = (step, options = null) => ({
  type: SWITCH_POPUP_STEP,
  step,
  options,
});

export const showPopup = () => ({
  type: SHOW_POPUP,
});

export const closePopup = () => ({
  type: CLOSE_POPUP,
});
