import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../actionTypes/roomConstants";

export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        rooms: action.payload,
      };

    case ALL_ROOMS_FAIL:
      return { error: action.payload };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
