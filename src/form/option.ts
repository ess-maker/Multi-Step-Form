import { createSlice } from "@reduxjs/toolkit";

const choseoption = createSlice({
  name: "option",
  initialState:[],
  reducers: {
    handeloption: (state, action) => {
        return { ...state, ...action.payload };
    },
  },
});

export const { handeloption } = choseoption.actions;
export default choseoption.reducer;