import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../actionTypes/roomConstants";

export const getRooms = () => async (dispatch) => {
  try {
    console.log("do stuff here");

    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: "tester aja",
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: "ini error",
    });
  }
};
