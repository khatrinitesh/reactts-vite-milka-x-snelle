import { createAction } from "@reduxjs/toolkit";

export const setLoggedIn = createAction<boolean>("setLoggedIn");
export const setUid = createAction<string>("setUid");
