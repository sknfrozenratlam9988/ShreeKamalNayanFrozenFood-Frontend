import { createSlice } from "@reduxjs/toolkit";

const storedAdmin = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: { adminInfo: storedAdmin },
  reducers: {
    setCredentials: (state, action) => {
      const { token, ...safeInfo } = action.payload;
      state.adminInfo = safeInfo;
      localStorage.setItem("adminInfo", JSON.stringify(safeInfo));
    },
    logout: (state) => {
      state.adminInfo = null;
      localStorage.removeItem("adminInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;