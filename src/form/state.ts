import { createSlice } from "@reduxjs/toolkit";

const holderstate = createSlice({
name: 'state',
initialState:{change:false} ,
reducers: {
    setchange:(state , action) => {
        state.change = action.payload;
    }
}
})

export const {setchange} = holderstate.actions;
export default holderstate.reducer