import { createReducer } from "@reduxjs/toolkit";
import { setLoggedIn, setUid } from "../action/action";
import { I_InitialStateProps } from "../../../interface";

export const initialState: I_InitialStateProps = {
  isLoggedIn: false,
  isUid: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLoggedIn, (state, action) => {
    state.isLoggedIn = action.payload;
  });
  builder.addCase(setUid, (state, action) => {
    state.isUid = action.payload;
  });
});

export default userReducer;
