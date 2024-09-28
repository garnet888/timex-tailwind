import { ACTIONS } from './Actions';

const Reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.PERMISSIONS:
      return {
        ...state,
        permissions: action.payload,
      };
    case ACTIONS.MENUS:
      return {
        ...state,
        menus: action.payload,
      };

    default:
      return state;
  }
};

export default Reducers;
