import * as api from "../api/index.js";

import { AUTH } from "../constants/actionTypes";
export const signin = (formData, history) => async (dispatch) => {
  try {
    //Signin the user
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // signUp the user
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
